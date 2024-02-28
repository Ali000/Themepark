import { useRef } from 'react'
import axios from 'axios';

const NewRide = (props) => {

  const nameRef = useRef(null);
  const imageRef = useRef(null);
  const thrillRef = useRef(null);
  const descriptionRef = useRef(null);
  const ageRef = useRef(null);


  const handleSubmit = async (e) => {
    e.preventDefault();

    let formFields = {
      name: nameRef.current.value,
      image: imageRef.current.value,
      thrill: thrillRef.current.value,
      ageLimit: ageRef.current.value,
      description: descriptionRef.current.value,
      themeParkId: props.id
    }

    let response = await axios.post("http://localhost:3000/rides", formFields);
    props.setRides([...props.rides, formFields])
    e.target.reset();

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label htmlFor="rideName">Name: </label>
      <input ref={nameRef} type="text" id="rideName"/>
      <label htmlFor="rideImage">Image</label>
      <input ref={imageRef} type="text" id="rideImage"/>
      <label htmlFor="ageLimit">Age Limit</label>
      <input ref={ageRef} type="number" id="ageLimit"/>
      <label htmlFor="rideDesc">Description</label>
      <textarea ref={descriptionRef} id="rideDesc" cols="30" rows="10"></textarea>
      <label htmlFor="thrillLevel">Thrill Level</label>
      <select ref={thrillRef} name="" id="thrilLevel">
        <option value="Calm">Calm</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
        <option value="Extreme">Extreme</option>
      </select>
      <button type="submit">Add ride</button>
    </form>
    </div>
  )

}

export default NewRide