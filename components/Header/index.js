import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const {activeTab} = props
  const activeHome = activeTab !== 'CART' ? 'active' : ''
  const activeCart = activeTab !== 'HOME' ? 'active' : ''

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <Link to="/">
          <img
            className="website-logo"
            src="https://res.cloudinary.com/dpnobkqmw/image/upload/v1634189323/Group_7420_p9exzb.png"
            alt="website logo"
          />
        </Link>
        <Link to="/" className="heading-link">
          <h1 className="heading">Tasty Kitchens</h1>
        </Link>
        <ul className="nav-menu">
          <Link to="/" className={`nav-link ${activeHome}`}>
            <li>Home</li>
          </Link>
          <Link to="/cart" className={`nav-link ${activeCart}`}>
            <li>Cart</li>
          </Link>

          <button
            type="button"
            className="logout-desktop-btn"
            onClick={onClickLogout}
            testid="logout-button"
          >
            logout
          </button>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Header)
