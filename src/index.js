import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
// import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ======================================= Star Rating Component testing =======================================

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="blue" onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <StarRating
//       maxRating={5}
//       messages={["Terrible", "Bad", "Ok", "Good", "Amazing"]}
//     />
//     <StarRating defaultRating={3} size={48} color="red" className="test" />
//     <Test />
//   </React.StrictMode>
// );
