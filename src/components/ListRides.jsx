const ListRides = (props) => {

  return (
    props.rides.map((ride) => {
      return (
        <div key={ride._id} className="wrapper-ride">
          <div className="ride-card">
            <img src={ride.image} alt={ride.name} />
            <h3>{ride.name}</h3>
            <h3>{ride.ageLimit}</h3>
            <h3>{ride.thrill}</h3>
            <h3>{ride.description}</h3>
          </div>
        </div>
      )
    })
  )
}

export default ListRides