import parks from "../data/themePark"
import Nav from "./Nav"
import { Link } from "react-router-dom"

const Home = () => {
    console.log(parks)

    return (
        <div>
            <Nav />
            <div className="wrapper">
            {
                parks.map((park) => {
                    return (
                        <div key={park.id} className="themepark-card">
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
                                <Link to={"/themepark/" + park.id}><button>View More</button></Link>
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