import "../photoGal.css";
export default function PhotoGallery(){
const photos = Array.from({length:6},(_,i)=>"img"+(i+1)+".jpg");
    
    return(
        <div className="photo-gallery">
            <p>  
            <img src={`/gallery/img1.jpg`} alt=""/>
            <img src={`/gallery/img3.jpg`} alt=""/>
            <img src={`/gallery/img2.jpg`} alt=""/>
            <img src={`/gallery/img7.jpg`} alt=""/>
          </p>
            <p>  
            <img src={`/gallery/img6.jpg`} alt=""/>
            <img src={`/gallery/img5.jpg`} alt=""/>

            <img src={`/gallery/img4.jpg`} alt=""/>
          </p>
        </div>
    )
}