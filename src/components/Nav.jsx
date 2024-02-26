import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <div className="nav-bar">
            <Link to="/">
                Home
            </Link>
            <Link to="/newpark">
                New Park
            </Link>
        </div>
    )
}

export default Nav