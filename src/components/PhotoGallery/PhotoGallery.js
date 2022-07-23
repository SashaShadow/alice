import ResponsiveGallery from 'react-responsive-gallery';
import { useState, useEffect, useCallback } from "react";
import './PhotoGallery.css';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


const PhotoGallery = ({category, setCategory}) => {

    const [myPhotos, setPhotos] = useState([]);

    useEffect(() => {
        fetch(`https://alicemichanapi.herokuapp.com/api/photos`)
        .then(response => response.json())
        .then(data => {
            const images = data.fotos.map(elem => {
                return {
                    src: elem.url,
                    category: elem.category,
                    alt: elem.desc,
                    id: elem._id
                }
            })
            if (category !== 'all') {
                const newPhotos = images.filter(elem => elem.category === category)
                setPhotos(newPhotos)
            } else {
                setPhotos(images)
            }
        })
        },[category])

        // console.log(myPhotos);
    return (
        <ResponsiveGallery useLightBox images={myPhotos}/>
        // <div className="Photos">
        //     {myPhotos.map(elem => {
        //         return (
        //         <div className="Photo">
        //             <img className="fotito" src={elem.url} key={elem._id} alt={elem.desc}/>
        //         </div> )
        //     })}
        // </div>
    )
}

export default PhotoGallery;