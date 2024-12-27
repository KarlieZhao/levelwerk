import { Link } from "react-router-dom";

export default function NavBar({showIcon=true}){
    return (<div className="NavBar">
    <div role="button" className={`NavBar-button ${showIcon? "visible":"invisible"}`}>
        <Link to="/">
        LevelWerk
        </Link> </div>
    <div role="button" className="NavBar-button">
    <Link to="/about">
        About
        </Link>
        </div>
    <div role="button" className="NavBar-button">
        <a href="mailto:levelwerk.ny@gmail.com" target="_blank">Contact</a></div>
    </div>);
}