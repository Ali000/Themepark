import { useEffect, useState } from "react"
import Nav from "./Nav"
import { Link } from "react-router-dom"
import axios from "axios"

const Home = () => {
  const [parks, setParks] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const getParks = async () => {
    let response = await axios.get("http://localhost:3000/themeParks")
    setParks(response.data)
  }

  const deleteThemePark = async (id) => {
    await axios.delete(`http://localhost:3000/themeParks/${id}`)
    getParks()
  }

  useEffect(() => {
    getParks()
  }, [])

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase().trim())
  }

  return (
    <div>
      <Nav />
      <div className="searchDiv">
        <input
          id="searchInput"
          className="input"
          name="text"
          placeholder="Search..."
          type="search"
          onChange={handleSearch}
        />
      </div>
      <div className="wrapper">
        {parks
          .filter(
            (park) =>
              park.name.toLowerCase().includes(searchTerm) ||
              park.description.toLowerCase().includes(searchTerm)
          )
          .map((park) => {
            return (
              <div key={park._id} className="themepark-card">
                <div className="themepark-details">
                  <div className="themepark-image">
                    <img src={park.image} alt={park.name} />
                  </div>
                  <div className="themepark-name">
                    <h3>{park.name}</h3>
                    <p>{park.description}</p>
                  </div>
                </div>
                <div className="themepark-delete">
                <button class="buttonTwo" onClick={() => deleteThemePark(park._id)}>
                      <p class="textTwo">Delete</p>
                    </button>
                
                </div>
                <div className="themepark-view-more">
                  <Link to={"/themepark/" + park._id} state={{ id: park._id }}>
                    <button class="buttonOne">
                      <p class="textOne">View More</p>
                    </button>
                  </Link>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Home
