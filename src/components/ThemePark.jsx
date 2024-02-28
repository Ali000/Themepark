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
        let response = await axios.get("http://localhost:3000/themeParks/"+ id);
        setThemePark(response.data);
        setRides(response.data.ridesIds);
        console.log(response.data)
    }

    useEffect(() => {
        getAllRides();
    }, []);

    return (
        <div>
            <Nav />
            <ListRides setRides={setRides} rides={rides} />
            <NewRide id={id} setRides={setRides} rides={rides} />
        </div>
    )
}

export default ThemePark