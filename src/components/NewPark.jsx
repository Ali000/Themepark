import Nav from "./Nav"
import { useRef } from "react"
import axios from "axios"

const NewPark = () => {
  const nameRef = useRef(null)
  const locationRef = useRef(null)
  const imageRef = useRef(null)
  const descriptionRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    let formFields = {
      name: nameRef.current.value,
      location: locationRef.current.value,
      image: imageRef.current.value,
      description: descriptionRef.current.value,
    }

    let response = await axios.post(
      "https://themepark.fly.dev/themeParks",
      formFields
    )
    e.target.reset()
  }

  return (
    <div>
      <Nav />
      <h1 className="new-themepark-title">Add New Themepark</h1>
      <div className="inputsDiv">
        <div className="input-container">
          <input
            placeholder="Name"
            className="input-field"
            type="text"
            ref={nameRef}
            id="parkName"
          />
          <label htmlFor="parkName" className="input-label">
            Name
          </label>
          <span className="input-highlight"></span>
        </div>
        <div className="input-container">
          <input
            placeholder="Location"
            className="input-field"
            type="text"
            ref={locationRef}
            id="parkLocation"
          />
          <label htmlFor="parkLocation" className="input-label">
            Location
          </label>
          <span className="input-highlight"></span>
        </div>
        <div className="input-container">
          <input
            placeholder="Image"
            className="input-field"
            type="text"
            ref={imageRef}
            id="parkImage"
          />
          <label htmlFor="parkImage" className="input-label">
            Image
          </label>
          <span className="input-highlight"></span>
        </div>
        <div className="input-containerDec">
          <textarea
            placeholder="Description"
            className="input-fieldDec"
            type="text"
            ref={descriptionRef}
            id="description"
          />
          <label htmlFor="description" className="input-labelDec">
            Description
          </label>
          <span className="input-highlight"></span>
        </div>
      </div>
      <div className="ButtonSubmitDiv">
        <button className="buttonThree" onClick={handleSubmit}>
          <p className="textThree">Submit</p>
        </button>
      </div>
    </div>
  )
}

export default NewPark
