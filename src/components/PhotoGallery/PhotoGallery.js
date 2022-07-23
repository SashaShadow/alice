import ResponsiveGallery from 'react-responsive-gallery';
import { useState, useEffect } from "react";
import './PhotoGallery.css';

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

    return (
        <ResponsiveGallery images={myPhotos}/>
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