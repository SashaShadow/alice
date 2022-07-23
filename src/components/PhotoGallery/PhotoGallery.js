import { Link, NavLink } from "react-router-dom";
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
            if (category !== 'all') {
                const newPhotos = data.fotos.filter(elem => elem.category === category)
                setPhotos(newPhotos)
            } else {
                setPhotos(data.fotos)
            }
        })
        },[category])

    return (
        <div className="Photos">
            {myPhotos.map(elem => {
                return (
                <div className="Photo">
                    <img className="fotito" src={elem.url} key={elem._id} alt={elem.desc}/>
                </div> )
            })}
        </div>
    )
}

export default PhotoGallery;