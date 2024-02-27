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

        let response = await axios.get("http://localhost:3000/rides");
        console.log(response.data);

    }

    useEffect(() => {
        getAllRides();
    }, []);

    return (
        <div>
            <Nav />
            ThemePark details
            <NewRide id={id}/>
        </div>
    )
}

export default ThemePark