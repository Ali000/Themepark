import { useRef } from "react"
import axios from "axios"

const NewRide = (props) => {
  const nameRef = useRef(null)
  const imageRef = useRef(null)
  const thrillRef = useRef(null)
  const descriptionRef = useRef(null)
  const ageRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    let formFields = {
      name: nameRef.current.value,
      image: imageRef.current.value,
      thrill: thrillRef.current.value,
      ageLimit: ageRef.current.value,
      description: descriptionRef.current.value,
      themeParkId: props.id,
    }

    let response = await axios.post("http://localhost:3000/rides", formFields)
    props.setRides([...props.rides, formFields])
    e.target.reset()
  }

  return (
    <div className="addingRideDiv buttonsAddRide">
      <h1>Add Ride</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            ref={nameRef}
            type="text"
            id="rideName"
            placeholder="Name"
            className="input-field"
          />
          <label htmlFor="rideName" className="input-label">
            Name
          </label>
          <span className="input-highlight"></span>
        </div>

        <div className="input-container">
          <input
            ref={imageRef}
            type="text"
            id="rideImage"
            placeholder="Image"
            className="input-field"
          />
          <label htmlFor="rideImage" className="input-label">
            Image
          </label>
          <span className="input-highlight"></span>
        </div>

        <div className="input-container">
          <input
            ref={ageRef}
            type="number"
            id="ageLimit"
            placeholder="Age Limit"
            className="input-field"
          />
          <label htmlFor="ageLimit" className="input-label">
            Age Limit
          </label>
          <span className="input-highlight"></span>
        </div>

        <div className="input-container">
          <textarea
            ref={descriptionRef}
            id="rideDesc"
            cols="5"
            rows="5"
            placeholder="Description"
            className="input-field"
          />
          <label htmlFor="rideDesc" className="input-label">
            Description
          </label>
          <span className="input-highlight"></span>
        </div>

        <div className="input-container">
          <select
            ref={thrillRef}
            name=""
            id="thrilLevel"
            className="input-field"
          >
            <option value="Calm">Calm</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Extreme">Extreme</option>
          </select>

          <label htmlFor="thrillLevel" className="input-label">
            Thrill Level
          </label>
          <span className="input-highlight"></span>
        </div>
        <button className="buttonThree" type="submit" >
          <p className="textThree"> Add ride</p>
        </button>
      </form>
    </div>
  )
}

export default NewRide
