const ListRides = (props) => {

  return (
    props.rides.map((ride) => {
      return (
        <div key={ride._id} className="wrapper-ride">
          <div className="ride-card">
            <img src={ride.image} alt={ride.name} />
            <div className="ride-info">
              <h2>{ride.name}</h2> 
              <h3>Age Limit: {ride.ageLimit}</h3>
              <h3>Thrill: {ride.thrill}</h3>
            </div>
            <div className="ride-desc">
              <h3>{ride.description}</h3>
            </div>
          </div>
        </div>
      )
    })
  )
}

export default ListRides