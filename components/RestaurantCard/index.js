import {Link} from 'react-router-dom'

import './index.css'

import {ImStarFull} from 'react-icons/im'

const RestaurantCard = props => {
  const {restaurantData} = props
  const {id, name, imageUrl, cuisine, userRating, opensAt} = restaurantData

  return (
    <Link to={`/restaurant/${id}`} className="restaurant-link-item">
      <li testid="restaurant-item" className="restaurant-item">
        <img src={imageUrl} alt="restaurant" className="restaurant-image" />
        <div>
          <h1 className="name">{name}</h1>
          <p className="cuisine">{cuisine}</p>
          <div className="rating-container">
            <ImStarFull className="star" />
            <h1 className="rating">{userRating.rating}</h1>
          </div>
          <p className="cuisine">({userRating.total_reviews} rating)</p>
          <p className="cuisine">{opensAt}</p>
        </div>
      </li>
    </Link>
  )
}
export default RestaurantCard
