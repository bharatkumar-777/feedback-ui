import Card from "../components/shared/Card"
import {Link} from 'react-router-dom'

const AboutPage = () => {
    return (
        <Card>
            <h1>About this project</h1>
            <p>this is a project to make a replica of the feedback ui</p>
            <p>it is esteemed project deveopled by prince sapra with a strong but simple ui</p>
            <p>launch data : 27 december 2021</p>
            <p>Version : 1.0.1</p>
            <p>contact me:</p>
            <h3></h3>
            <h3>bharatsapra777@gmail.com</h3>


            <Link to="/">back to app</Link>
        </Card>
    )
}

export default AboutPage
