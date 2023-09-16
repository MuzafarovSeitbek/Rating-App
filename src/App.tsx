import { useState } from "react";
import "./App.css";
import RatingContainer from "../components/RatingContainer";
import RatingForm from "../components/RatingForm";

function App() {
  const [page, setPage] = useState(1);
  const [rate, setRate] = useState(0);

  switch (page) {
    case 1:
      return <RatingForm nextPage={setPage} rate={rate} setRate={setRate} />;
    case 2:
      return <RatingContainer rate={rate} />;
    default:
      return null;
  }
}

export default App;
