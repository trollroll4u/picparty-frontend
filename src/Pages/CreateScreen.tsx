import React, { ChangeEvent, useRef, useState } from "react";
// import avatar from "../assets/default_pic_for_party.jpg";
import { uploadPhoto } from "../Services/file-service";
import { Typeahead } from "react-bootstrap-typeahead";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import z, { set } from "zod";
import { Form } from "react-bootstrap";
import { createEvent } from "../Services/event-service";
import { EventData, UserData } from "../DataStructure";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import avatar from "../assets/default_pic_for_party.jpg";
import { defaultImageBase64 } from "../assets/try";

const schema = z.object({
  EventName: z
    .string()
    .min(3, "Name must be longer then 3 charecters")
    .max(20, "Name must be less then 20 charecters"),
  description: z
    .string()
    .max(20, "Description must be less then 100 charecters"),
  Date: z.coerce.date().refine((date) => date > new Date(), {
    message: "Date must be in the future",
  }),
  location: z.any(),
  //   location: z.array()
});

export const convertImageToBase64 = (file: File) => {
  return new Promise<string>((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      resolve(fileReader.result as string);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
    fileReader.readAsDataURL(file);
  });
};

type FormData = z.infer<typeof schema>;
function CreateScreen() {
  const [imgSrc, setImgSrc] = useState<string>(
    `data:image/png;base64,` + defaultImageBase64
  );
  const [eventName, setEventName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<Date>(new Date());
  const [location, setLocation] = useState<any>([{ name: "Tel Aviv, Israel" }]);
  const [locationError, setLocationError] = useState<string>("");
  const [options, setOptions] = useState<any>([]);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const user = useSelector((state: UserData) => state.user);

  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchLocations = async () => {
      try {
        await axios
          .get("https://countriesnow.space/api/v0.1/countries")
          .then((res) => {
            // console.log(res.data.data);
            const all: { name: string }[] = [];
            res.data.data.map((location: any) => {
              location.cities.map((city: any) => {
                const temp = {
                  name: city + ", " + location.country,
                };
                all.push(temp);
              });
            });

            setOptions(all);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.log("Error fetching locations: " + error);
      }
    };
    fetchLocations();
  }, []);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const imgSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      console.log("Image selected");
      convertImageToBase64(e.target.files[0] as File).then((base64String) => {
        setImgSrc(base64String);
      });
    }
  };
  const selectImg = () => {
    console.log("Selecting image...");
    fileInputRef.current?.click();
  };

  const handleEventChange = (e: any) => {
    setEventName(e.target.value);
  };

  const handleDescriptionChange = (e: any) => {
    setDescription(e.target.value);
  };

  const handleDateChange = (e: any) => {
    const tempDate = new Date(e.target.value);
    setDate(tempDate);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (clickEvent: any) => {
    clickEvent.preventDefault();
    if (
      location.length === 0 ||
      location === undefined ||
      typeof location === "string" ||
      !("name" in location[0])
    ) {
      setLocationError("Location is required");
    } else {
      setLocationError("");
      console.log("type of iamge is:" + typeof imgSrc);
      const newEvent: EventData = {
        user_id: user._id,
        title: eventName,
        description: description,
        date: date,
        location: location[0]?.name || "Tel Aviv, Israel",
        event_pic_file: imgSrc,
        comments: [],
        pictures: [],
        likes: [],
      };
      console.log(newEvent);
      console.log(typeof newEvent.date);
      try {
        const res = await createEvent(newEvent);
        console.log("RESSSSS");
        console.log(res);
        console.log("on submit");
        navigate("/");
      } catch (error) {
        setShowAlert(true);
        console.log("here ohad");
        console.log("Error creating event: " + error);
      }
    }
  };

  //   const register = async () => {
  //   const url = await uploadPhoto(imgSrc!);
  //   console.log("upload returned:" + url);
  //   if (emailInputRef.current?.value && passwordInputRef.current?.value) {
  //   const user: IUser = {
  //   email: emailInputRef.current?.value,
  //   password: passwordInputRef.current?.value,
  //   imgUrl: url
  //   }
  //   const res = await registrUser(user)
  //   console.log(res)
  //   }
  //   }

  return (
    <>
      <div
        className="container"
        style={{ backgroundColor: "black", maxWidth: "100%", height: "100vh" }}
      >
        {showAlert && (
          <>
            <br></br>
            <div
              className=" row alert alert-danger"
              role="alert"
              style={{ padding: "5px", maxWidth: "50rem", margin: "auto" }}
            >
              <div className="col col-11">
                <h4>Error in creating event, please try again later...</h4>
              </div>
              <div className="col-1">
                <button onClick={() => setShowAlert(false)} className="btn">
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>
            </div>
          </>
        )}
        <div>
          <div className="row text-center">
            <div className="col">
              <br></br>
              <img
                src={imgSrc}
                style={{ height: "10rem", width: "10rem" }}
                className="img-fluid"
                onClick={() => {
                  selectImg();
                }}
              />
            </div>
          </div>
          <br></br>
          <div className="row text-center justify-content-md-center">
            <div className="col-md-auto">
              <button
                type="submit"
                className="btn btn-light btn-lg"
                onClick={() => {
                  setImgSrc(`data:image/png;base64,` + defaultImageBase64);
                }}
              >
                <i className="bi bi-trash"></i>
                &nbsp;&nbsp; Delete image
              </button>
            </div>
            <div className="col-md-auto">
              <button
                type="submit"
                className="btn btn-light btn-lg"
                onClick={() => {
                  selectImg();
                }}
              >
                <i className="bi bi-plus-square"></i>
                &nbsp;&nbsp; select image
              </button>
            </div>
          </div>

          <input
            style={{ display: "none" }}
            ref={fileInputRef}
            type="file"
            onChange={imgSelected}
          ></input>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ width: "40rem", margin: "auto" }}
        >
          <br></br>
          <h3 style={{ color: "white" }}>Event name</h3>
          <input
            {...register("EventName")}
            type="text"
            id="EventName"
            className="form-control"
            placeholder="Enter event name..."
            onChange={handleEventChange}
          />
          {errors.EventName && (
            <p className="text-danger">{errors.EventName.message}</p>
          )}
          <div className="mb-3">
            <h3 style={{ color: "white" }}>Description</h3>
            <textarea
              {...register("description")}
              id="description"
              rows={3}
              className="form-control"
              placeholder="Enter event name..."
              onChange={handleDescriptionChange}
            ></textarea>
            {errors.description && (
              <p className="text-danger">{errors.description.message}</p>
            )}

            <h3 style={{ color: "white" }}>Date</h3>
            <input
              {...register("Date")}
              type="date"
              id="Date"
              className="form-control"
              onChange={handleDateChange}
            />
            {errors.Date && (
              <p className="text-danger">{errors.Date.message}</p>
            )}

            <Form.Group>
              <h3 style={{ color: "white" }}>Location</h3>
              <Typeahead
                id="basic-typeahead-single"
                labelKey="name"
                onChange={setLocation}
                options={options}
                placeholder="Choose a state..."
                selected={location}
              />
              {locationError && <p className="text-danger">{locationError}</p>}
            </Form.Group>
          </div>
          <button
            type="submit"
            className="btn btn-light btn-lg"
            onClick={onSubmit}
          >
            Create
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateScreen;
