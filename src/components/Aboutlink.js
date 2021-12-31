import {Link} from 'react-router-dom'
import {FaQuestion} from 'react-icons/fa';
const Aboutlink = () => {
    return (
        <div className="about-link">
            <Link to="/about">
            <FaQuestion/>
            </Link>
        </div>
    )
}

export default Aboutlink
