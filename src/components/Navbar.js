import '../styles/navbar.css'
import logo from '../images/bag_log.png'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='navbar'>
            <div className="leftSide">
                <Link to='/menu'><img src={logo} alt="logo" /></Link>
            </div>

            <div className="rightSide">
                <Link to='/'> Home </Link>
                <Link to='/menu'> Menu </Link>
            </div>


        </div>
    )
}

export default Navbar
