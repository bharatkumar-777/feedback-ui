import { useState, createContext } from "react";
import { v4 as uuid } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 10,
      text: "this is a somthing form the context",
    },
    {
      id: 2,
      rating: 8,
      text: "this is the another thing from the context",
    },
    {
      id: 3,
      rating: 8,
      text: "this is the third thing from the context ",
    },
  ]);
  const [editFeedback, setEditFeedback] = useState({
    item: {},
    edit: false,
  });

  const addFeedback = ({ feedback }) => {
    const newFeedback = uuid();
    setFeedback([newFeedback, ...feedback]);
  };

  const handleDelete = (id) => {
    if (window.confirm("are you sure you want to delete this")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const editFeedbackFunc = (item) => {
    setEditFeedback({
      item,
      edit: true,
    });
  };
  const updateFeedback = (id, updIt) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updIt } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        addFeedback,
        handleDelete,
        editFeedbackFunc,
        updateFeedback,
        feedback,
        editFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
