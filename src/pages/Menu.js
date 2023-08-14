import '../styles/menu.css'
import { MenuList } from '../components/MenuList'

function Menu() {
  return (
    <div className='menu'>
      <h1 className="menuTitle"> Our Collections</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            // style={{ backgroundImage: `url(${menuItem.image})` }}
            <div className='menuItem' key={menuItem.name}>
              <div className="image">
                <img src={menuItem.image} alt="" />
              </div>
              <h1>{menuItem.name}</h1>
              <p>{menuItem.price}</p>
              <a href='https://wa.me/918921751770?text=your%20default%20message' target="_blank" rel="noopener noreferrer">
                <button>Order Now</button>
              </a>
            </div>
          )
        })}
        {/* https://wa.link/4h77pa */}

      </div>
    </div>
  )
}

export default Menu
