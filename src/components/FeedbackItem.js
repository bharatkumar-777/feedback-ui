import {useContext } from "react";
import Card from './shared/Card'
import {FaTimes,FaEdit} from 'react-icons/fa'
import FeedbackContext from "../context/FeedbackContext";


const FeedbackItem = ({item}) => {
    
    const {handleDelete,editFeedbackFunc}=useContext(FeedbackContext);
   
    return (
        <Card reverse={false}>
            
            <div className="num-display">
                {item.rating}
            </div>
            <button className="edit">
              <FaEdit color="purple" onClick={()=>editFeedbackFunc(item)}/>
            </button>
            <button className="close" onClick={()=>handleDelete(item.id)}>
            <FaTimes color="purple"/>
            </button>
            <div className="text-display">
                {item.text}
            </div>
        </Card>
    )
}

export default FeedbackItem
