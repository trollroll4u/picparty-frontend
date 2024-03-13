import { ChangeEvent, useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { updateUser } from "../Services/user-service";
import { UserData } from "../DataStructure";
import { useLocation, useNavigate } from "react-router-dom";
import { defaultImageBase64 } from "../assets/defaultImage";

const schema = z.object({
  UserName: z
    .string()
    .min(3, "Name must be longer then 3 charecters")
    .max(20, "Name must be less then 20 charecters"),
  Email: z.string().email("Invalid email address"),
  Password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one lowercase letter, one uppercase letter, and one number"
    ),
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

export interface EditUserProps {}
function CreateScreen() {
  const { state } = useLocation();
  const [imgSrc, setImgSrc] = useState<string>(state.dbUser.profile_pic_file);
  const [userName, setUserName] = useState<string>(state.dbUser.name);
  const [password, setPassword] = useState<string>(state.dbUser.password);
  const [email, setEmail] = useState<string>(state.dbUser.email);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const navigate = useNavigate();

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

  const handleUserChange = (e: any) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (clickUser: any) => {
    clickUser.preventDefault();
    const updatedUser: UserData = {
      _id: state.dbUser._id,
      name: userName,
      password: password,
      email: email,
      profile_pic_file: imgSrc,
      events: state.dbUser.events,
      comments: state.dbUser.comments,
      pictures: state.dbUser.pictures,
      likes: state.dbUser.likes,
    };
    try {
      await updateUser(updatedUser);
      navigate("/");
    } catch (error) {
      setShowAlert(true);
      console.log("Error creating user: " + error);
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
                <h4>Error in creating user, please try again later...</h4>
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
          <h3 style={{ color: "white" }}>User name</h3>
          <input
            value={userName}
            {...register("UserName")}
            type="text"
            id="UserName"
            className="form-control"
            placeholder="Enter user name..."
            onChange={handleUserChange}
          />
          {errors.UserName && (
            <p className="text-danger">{errors.UserName.message}</p>
          )}
          <div className="mb-3">
            <h3 style={{ color: "white" }}>Password</h3>
            <textarea
              value={password}
              {...register("Password")}
              id="password"
              rows={3}
              className="form-control"
              placeholder="Enter user name..."
              onChange={handlePasswordChange}
            ></textarea>
            {errors.Password && (
              <p className="text-danger">{errors.Password.message}</p>
            )}

            <h3 style={{ color: "white" }}>Email</h3>
            <textarea
              value={email}
              {...register("Email")}
              id="email"
              rows={3}
              className="form-control"
              placeholder="Enter user name..."
              onChange={handleEmailChange}
            ></textarea>
            {errors.Email && (
              <p className="text-danger">{errors.Email.message}</p>
            )}
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
