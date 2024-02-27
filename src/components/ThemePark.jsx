import Nav from "./Nav"
import NewRide from "./NewRide"
import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

const ThemePark = () => {

    const [rides, setRides] = useState([]);

    const location = useLocation();
    const {id} = location.state;

    const getAllRides = async () => {
        let mongoId;
        let response = await axios.get("http://localhost:3000/rides");
        let ridesPerPark = response.data.filter((ride)=> {
            mongoId = ride.themeParkId;
            return mongoId === id;
        })
        setRides(ridesPerPark);
    }

    useEffect(() => {
        getAllRides();
    }, []);

    return (
        <div>
            <Nav />
            {
                rides.map((ride) => {
                    return (
                        <div key={ride._id} className="wrapper-ride">
                            <div  className="ride-card">
                                <div>
                                    <img src={ride.image} alt={ride.name} />
                                </div>
                                <div>
                                <h3>{ride.name}</h3>
                                </div>
                                <div>
                                <h3>{ride.ageLimit}</h3>
                                </div>
                                <h3>{ride.thrill}</h3>
                                <p>{ride.description}</p>
                            </div>
                        </div>
                    )
                })
            }
            <NewRide id={id}/>
        </div>
    )
}

export default ThemePark