const NewRide = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label htmlFor="rideName">Name: </label>
      <input type="text" id="rideName"/>
      <label htmlFor="rideImage">Image</label>
      <input type="text" id="rideImage"/>
      <button type="submit">Add ride</button>
    </form>
    </div>

  )

}

export default NewRide