import { Link } from 'react-router-dom'
// import BannerImage from '../images/cat.jpg';
import '../styles/home.css'
import Menu from "./Menu.js"

function Home() {
  return (
    // style={{ backgroundImage: `url(${BannerImage})` }}
    <div className="container">
      <div className='home'>
        <div className="headerContainer">
          <h1>On Your Arm</h1>
          <p>We Stich Your Dreams...</p>
          <p>What You Wear Tommorrow.</p>
          <Link to='/menu'>
            <button> Go to Shop </button>
          </Link>
        </div>
      </div>


      <Menu />

    </div>



  )
}

export default Home
