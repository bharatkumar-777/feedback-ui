
import PropTypes from 'prop-types'


const Header = () => {
    return (
        <header>
            <h1>Feedback App</h1>
            <h3>by prince sapra</h3>
        </header>
    )
}

Header.defaultProps = 
{
    text: 'Feedback App'
}

Header.propTypes=
{
    text : PropTypes.string
}



export default Header
