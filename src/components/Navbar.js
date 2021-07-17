import "./styles/Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <img className="logo" alt="Rick and Morty logo" src={`${process.env.PUBLIC_URL}/assets/RM_logo.png`}/>
        </div>
    )
}
export default Navbar;