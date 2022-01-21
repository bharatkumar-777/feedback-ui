import { useState, createContext,useEffect } from "react";
import { v4 as uuid } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  
  


  
  
  const [isLoading,setIsLoading]=useState(true);
  const [feedback, setFeedback] = useState([]);
  const [editFeedback, setEditFeedback] = useState({
    item: {},
    edit: false,
  });
  useEffect(()=>{
    console.log("this is the useeffect calling you from the create context");
    fetchFeedback();
  },[])
   const fetchFeedback = async () => {
       const response = await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`);
       const data=await response.json();
       setFeedback(data)
       setIsLoading(false);
  
   }

  const addFeedback = async (newFeedback) => {
   
    const response= await fetch(`http://localhost:5000/feedback`,{
      method:'POST',
      headers:{
        "Content-type":'application/json'
      },
      body:JSON.stringify(newFeedback)
    })
    const data=await response.json();
    setFeedback([data, ...feedback]);
  };

  const handleDelete = async (id) => {
    
    if (window.confirm("are you sure you want to delete this")) {
      await fetch(`http://localhost:5000/feedback/${id}`,{
        method:"DELETE"
      })
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const editFeedbackFunc = (item) => {
    setEditFeedback({
      item,
      edit: true,
    });
  };
  const updateFeedback = async (id, updIt) => {
    const response = await fetch(`http://localhost:5000/feedback/${id}`,{
      method: 'PUT',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(updIt)
    })
    const data=await response.json()
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        addFeedback,
        handleDelete,
        isLoading,
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
