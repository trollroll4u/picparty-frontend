// import * as React from "react";
// import { EventData, PictureData } from "../DataStructure.ts";
// import PhotosScreen from "../Components/PhotosScreen.tsx";
// import { eventsExamples, picturesExamples } from "../examples.ts";
// import { useState } from "react";

// export interface IAppProps {}

// function EventScreen(props: IAppProps) {
//   const [a, seta] = useState<EventData>();
//   return (
//     <>
//       <div
//         className="container text-center"
//         style={{ backgroundColor: "black", maxWidth: "100%" }}
//       >
//         <br></br>
//         <div className="row">
//           <div className="col">
//             <img
//               src={picturesExamples[3].path}
//               style={{ width: "50rem", height: "20rem" }}
//             />
//           </div>

//           <div className="col" style={{ marginRight: "16px" }}>
//             <p className="fs-2 fw-bold text-break " style={{ color: "white" }}>
//               {picturesExamples[1].description}
//             </p>
//             <p className="fs-5 fw-bold" style={{ color: "white" }}>
//               posted by: {picturesExamples[0].user_id}
//             </p>
//             <p className="fs-2 fw-bold" style={{ color: "white" }}>
//               Owner: {picturesExamples[0].likes.length}
//             </p>
//             <button type="button" className="btn  btn-lg">
//               <i className="bi bi-image"></i>
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default EventScreen;
