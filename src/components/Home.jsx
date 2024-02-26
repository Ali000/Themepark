import parks from "../data/themePark"
import Nav from "./Nav"

const Home = () => {
    console.log(parks)

    return (
        <div>
            <Nav />
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
                                <button>View More</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default Home