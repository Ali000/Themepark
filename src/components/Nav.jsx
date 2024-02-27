import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <div className="nav-bar">
            <Link to="/"  className="link-button">
                Home
            </Link>
            <Link to="/newpark"  className="link-button">
                New Park
            </Link>
        </div>
    )
}

export default Nav