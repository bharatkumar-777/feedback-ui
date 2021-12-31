import Card from "./shared/Card";
import { useState, useContext, useEffect } from "react";
import Button from "./shared/Button";
import Ratingsytem from "./Ratingsytem";

import FeedbackContext from "../context/FeedbackContext";

const FeedbackInput = () => {
  const [text, setText] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);

  const { addFeedback, editFeedback ,updateFeedback } = useContext(FeedbackContext);
  useEffect(()=>{
      if(editFeedback.edit===true){
       
      setDisabled(false);
      console.log(editFeedback.item.text,editFeedback.item.rating);
      setText(editFeedback.item.text);
      setRating(editFeedback.item.rating);}
  },[editFeedback])

  const handleInput = (e) => {
    if (text === "") {
      setMessage(null);
      setDisabled(true);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("message must be of 10 words or more ");
      setDisabled(true);
    } else {
      setMessage(null);
      setDisabled(false);
    }
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      if(editFeedback.edit===true)
      {
          updateFeedback(editFeedback.item.id,newFeedback);
      }else{
          addFeedback(newFeedback);
      }
      setText("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>how would you like to share our service</h2>
        <Ratingsytem select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleInput}
            type="text"
            placeholder="write a review"
            value={text}
          />
          <Button type="submit" isDisabled={disabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackInput;
