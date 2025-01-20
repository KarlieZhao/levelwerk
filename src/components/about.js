import NavBar from './navbar';
import PhotoGallery from './photogal';

export default function About() {
  return (
    <div>
      <NavBar showIcon={true} />
      <main className="about">
        <div>
          <PhotoGallery />

          <p>
            LevelWerk is an artist-run alternative space in Brooklyn, NY,
            committed to supporting both local and international artists while
            building community through its residency program. It offers a
            flexible, open environment where resident artists are encouraged to
            connect with the local community, reflect on their practices,
            experiment, host workshops, and explore the boundless possibilities
            of New Media.
          </p>
          <br />
          <p>
            We offer:
            <ul>
              <li>A full-size sofa bed</li>
              <li>Social media promotion</li>
              <li>Interview & Media coverage opportunites</li>
              <li>Online or small-scale on-site exhibitions</li>
              <li>Private workspace with Wi-Fi</li>
              <li>Full kitchen and occasional free meals</li>
              <li>
                Tools: a 3D printer, installation/sculpture toolkit, soldering
                station, projector, drop cloth, etc.
              </li>
              <li>Studio visits</li>
              <li>
                A recommendation list of our favorite coffee spots and
                galleries!
              </li>
            </ul>
          </p>
          <br />
          <br />
          <div>
            <h2>Come say hi! </h2>
            <p>
              We're always on the lookout for artists who are seeking a place to
              crash, have an exhibition/workshop idea, or just want to chat
              about art.
            </p>
            <h3>Email: levelwerk.ny@gmail.com</h3>
            <h3>Instagram: @levelwerkny</h3>
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
      </main>
    </div>
  );
}
