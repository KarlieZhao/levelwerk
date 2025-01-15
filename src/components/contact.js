
import NavBar from "./navbar"

export default function Contact(){
    return (
        <div>
        <NavBar showIcon={true}/>
        <main className="contact">
        
        <div >
            <h2>Come say hi! </h2>
            <p>We're always on the lookout for artists who are seeking a place to crash, have an exhibition/workshop idea, or just want to chat about art. 
            </p><br/>
                <h3>Email: levelwerk.ny@gmail.com</h3>
                <h3>Instagram: @levelwerkny</h3>
                </div>
          </main>
        </div>
);
}