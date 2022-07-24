import ResponsiveGallery from 'react-responsive-gallery';
import { useState, useEffect } from "react";
import Loader from './Loader';
import './PhotoGallery.css';

const PhotoGallery = ({category, setLoader, loader}) => {

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
        }).then(_ => setLoader(false))
        },[category])

    return (
        <>
         {loader ? <div className='Loading'><Loader/></div> : <ResponsiveGallery images={myPhotos}/>}
        </>
       
    )
}

export default PhotoGallery;