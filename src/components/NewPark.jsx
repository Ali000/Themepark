import Nav from "./Nav"
import { useRef } from "react"
const NewPark = () => {

    const nameRef = useRef(null);
    const locationRef = useRef(null);
    const imageRef = useRef(null);
    const descriptionRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault()

        let formFields = {
            name: nameRef.current.value,
            location: locationRef.current.value,
            image: imageRef.current.value,
            description: descriptionRef.current.value
        }

        console.log(formFields);

    }

    return (
        <div>
            <Nav/>
            <div>
                <h2 className="new-park-title">Add New Theme Park</h2>
                <form className="new-park-form" onSubmit={handleSubmit}>
                    <label htmlFor="parkName">Name </label>
                    <input ref={nameRef} type="text" id="parkName"/>
                    <label htmlFor="parkLocation">Location </label>
                    <input ref={locationRef} type="text" id="parkLocation"/>
                    <label htmlFor="parkImage">Image </label>
                    <input ref={imageRef} type="text" id="parkImage"/>
                    <label htmlFor="description">Description </label>
                    <textarea ref={descriptionRef} id="description" cols="10" rows="5"></textarea>
                    <button>Submit</button>
                </form>
            </div>

        </div>
    )

}

export default NewPark