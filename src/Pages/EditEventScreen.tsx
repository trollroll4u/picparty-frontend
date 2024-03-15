import React, { ChangeEvent, useRef, useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { Form } from "react-bootstrap";
import { updateEvent } from "../Services/event-service";
import { EventData, UserData } from "../DataStructure";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { defaultImageBase64 } from "../assets/defaultImage";

const schema = z.object({
  EventName: z
    .string()
    .min(3, "Name must be longer then 3 charecters")
    .max(20, "Name must be less then 20 charecters"),
  description: z
    .string()
    .max(25, "Description must be less then 25 charecters"),
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

export interface EditEventProps {}
function CreateScreen() {
  const { state } = useLocation();
  const [imgSrc, setImgSrc] = useState<string>(state.event.event_pic_file);
  const [eventName, setEventName] = useState<string>(state.event.title);
  const [description, setDescription] = useState<string>(
    state.event?.description || ""
  );
  const [date, setDate] = useState<Date>(state.event.date);
  const [location, setLocation] = useState<any>([
    { name: state.event.location },
  ]);
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
      const updatedEvent: EventData = {
        _id: state.event._id,
        user_id: user._id,
        title: eventName,
        description: description,
        date: date,
        location: location[0]?.name || "Tel Aviv, Israel",
        event_pic_file: imgSrc,
        comments: state.event.comments,
        pictures: state.event.pictures,
        likes: state.event.likes,
      };
      try {
        await updateEvent(updatedEvent);
        navigate("/");
      } catch (error) {
        setShowAlert(true);
        console.log("Error creating event: " + error);
      }
    }
  };

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
            value={eventName}
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
              value={description}
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
              value={date.toISOString().split("T")[0]}
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
            Update
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateScreen;
