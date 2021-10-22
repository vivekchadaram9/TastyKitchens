import {BsFilterLeft} from 'react-icons/bs'

import './index.css'

const RestaurantHeader = props => {
  const {
    sortByOptions,
    selectedSortByValue,
    updateSelectedSortByValue,
    onChangeSearchInput,
  } = props
  const onChangeSortBy = event => {
    updateSelectedSortByValue(event.target.value)
  }

  const onSearchEnter = event => {
    onChangeSearchInput(event.target.value)
  }

  return (
    <div className="restaurant-header">
      <div className="heading-container">
        <h1 className="restaurants-list-heading">Popular Restaurants</h1>
        <p className="description">
          Select Your favourite restaurant special dish and make your day
          happy...
        </p>
        <input
          type="search"
          placeholder="Search Restaurant"
          className="search-input"
          onChange={onSearchEnter}
        />
      </div>
      <div className="sort-by-container">
        <BsFilterLeft className="sort-by-icon" />
        <p className="sort-by">Sort By</p>
        <select
          className="sort-by-select"
          value={selectedSortByValue}
          onChange={onChangeSortBy}
        >
          {sortByOptions.map(eachOption => (
            <option
              key={eachOption.id}
              value={eachOption.value}
              className="select-option"
            >
              {eachOption.displayText}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default RestaurantHeader
