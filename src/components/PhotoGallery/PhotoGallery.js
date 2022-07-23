import { Link, NavLink } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
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
    const [open, setOpen] = useState(false);
    const handleOpen = (event) => {
        console.log(event.target)
        setOpen(true);
    }
    const handleClose = (event) => {
        event.stopPropagation()
        setOpen(false);
    }

    useEffect(() => {
        fetch(`http://localhost:8080/api/photos`)
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
                <div className="Photo" key={elem._id}>
                    <img className="fotito" src={elem.url} key={elem._id} alt={elem.desc} onClick={handleOpen}/>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description">
                        <Box sx={style}>
                        <img src={elem.url} alt={elem.desc}/>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                           {elem.desc}
                        </Typography>
                        </Box>
                    </Modal>
                </div> )
                
                // <div className="Photo">
                //     <img className="fotito" src={elem.url} key={elem._id} alt={elem.desc}/>
                // </div> 
            })}
        </div>
    )
}

export default PhotoGallery;