import Nav from "./Nav"
const NewPark = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <Nav/>
            <div>
                <h2 className="new-park-title">Add New Theme Park</h2>
                <form className="new-park-form" onSubmit={handleSubmit}>
                    <label htmlFor="parkName">Name </label>
                    <input type="text" id="parkName"/>
                    <label htmlFor="parkLocation">Location </label>
                    <input type="text" id="parkLocation"/>
                    <label htmlFor="parkImage">Image </label>
                    <input type="text" id="parkImage"/>
                    <label htmlFor="description">Description </label>
                    <textarea  id="description" cols="10" rows="5"></textarea>
                    <button>Submit</button>
                </form>
            </div>

        </div>
    )

}

export default NewPark