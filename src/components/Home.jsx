import { useEffect, useState } from "react"
import Nav from "./Nav"
import { Link } from "react-router-dom"
import axios from "axios"

const Home = () => {

    const [parks, setParks] = useState([]);

    const getParks = async () => {
        let response = await axios.get("http://localhost:3000/themeParks");
        setParks(response.data);
    }

    useEffect(() => {
        getParks();
    }, [])

    return (
        <div>
            <Nav />
            <div className="wrapper">
            {
                parks.map((park) => {
                    return (
                        <div key={park._id} className="themepark-card">
                            <div  className="themepark-details">
                                <div className="themepark-image">
                                    <img src={park.image} alt={park.name} />
                                </div>
                                <div className="themepark-name">
                                    <h3>{park.name}</h3>
                                    <p>{park.description}</p>
                                </div>
                            </div>
                            <div className="themepark-view-more">
                                <Link to={"/themepark/" + park._id} state={{id: park._id}}><button>View More</button></Link>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Home