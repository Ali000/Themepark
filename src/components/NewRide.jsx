import { useRef } from 'react'

const NewRide = () => {

  const nameRef = useRef(null);
  const imageRef = useRef(null);
  const thrillRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    let formFields = {
      name: nameRef.current.value,
      image: imageRef.current.value,
      thrill: thrillRef.current.value
    }
    console.log(formFields)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label htmlFor="rideName">Name: </label>
      <input ref={nameRef} type="text" id="rideName"/>
      <label htmlFor="rideImage">Image</label>
      <input ref={imageRef} type="text" id="rideImage"/>
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