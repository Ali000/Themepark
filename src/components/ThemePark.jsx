import Nav from "./Nav"
import NewRide from "./NewRide"
import ListRides from "./ListRides"
import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

const ThemePark = () => {

    const [themePark, setThemePark] = useState({});
    const [rides, setRides] = useState([]);

    const location = useLocation();
    const {id} = location.state;

    const getAllRides = async () => { //get themepark details, but will not change it
        let response = await axios.get("https://themepark.fly.dev/themeParks/"+ id);
        setThemePark(response.data);
        setRides(response.data.ridesIds);
    }

    useEffect(() => {
        getAllRides();
    }, []);

    return (
        <div>
            <Nav />
            <div className="themepark-page">
                <div className="themepark-info">
                    <h1>{themePark.name}</h1>
                    <h2>{themePark.location}</h2> <br /><br />
                    <h4>{themePark.description}</h4>
                </div>
                <div>
                    <img src={themePark.image} alt={themePark.name} />
                </div>
            </div>
            <ListRides setRides={setRides} rides={rides} />
            <NewRide id={id} setRides={setRides} rides={rides} />
        </div>
    )
}

export default ThemePark