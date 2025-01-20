import { Link } from "react-router-dom";

export default function NavBar({showIcon=true}){
    return (<div className="NavBar">
    <div role="button" className={`NavBar-button ${showIcon? "visible":"invisible"}`}>
        <Link to="/">
        LevelWerk &nbsp;
        </Link> </div>
        <div role="button" className="NavBar-button">
        <Link to="/events"> &nbsp;Residents</Link></div>
    <div role="button" className="NavBar-button">
        
    <Link to="/about">
        About
        </Link>
        </div>
  
    </div>);
}