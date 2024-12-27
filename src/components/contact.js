
import NavBar from "./navbar"

export default function Contact(){
    return (
        <div>
        <NavBar showIcon={true}/>
        <main className="contact">
        
        <div >
            <h2>Wants to collab with us? </h2>
            <p>We're always on the lookout for artists seeking a place to crash in Brooklyn, wanting to run a workshop, having an exhibition idea, or just like to chat about art. 
            </p><br/>
                <h3>Email: levelwerk.ny@gmail.com</h3>
                <h3>Instagram: @levelwerkny</h3>
                </div>
          </main>
        </div>
);
}