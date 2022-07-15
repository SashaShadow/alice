import React from 'react'
import './Projects.css'
import { BsArrowRight } from 'react-icons/bs'

const Projects = () => {
    return (
        <div className='Projects'>
            <div className='Packaging'>
                <img className='ProjectImg' src='https://res.cloudinary.com/telayna-i/image/upload/v1657911366/Alice/image_67_l3dqpp.png'/>
                <div className='TextProject'>
                    <h4>PACKAGING</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae, urna sed libero ut quisque. Tristique quis et mollis porttitor diam ut iaculis vulputate. Sociis odio vestibulum elit quis et cum ullamcorper semper. Dictum sed pretium nec amet iaculis.</p>
                    <button>Descubre más <BsArrowRight className='Arrow'/> </button>
                </div>
            </div>
            <div className='RetoqueDigital'>
                <img className='ProjectImg' src='https://res.cloudinary.com/telayna-i/image/upload/v1657911366/Alice/image_67_l3dqpp.png'/>
                <div className='TextProject'>
                    <h4>Retoque Digital</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae, urna sed libero ut quisque. Tristique quis et mollis porttitor diam ut iaculis vulputate. Sociis odio vestibulum elit quis et cum ullamcorper semper. Dictum sed pretium nec amet iaculis.</p>
                    <button>Descubre más <BsArrowRight className='Arrow'/> </button>
                </div>
            </div>
            <div className='Marcas'>
                <img src='https://res.cloudinary.com/telayna-i/image/upload/v1657913987/Alice/image_77_sgan3v.png'/>
            </div>
            <div className='Logos-Banners'>
                <img className='ProjectImg' src='https://res.cloudinary.com/telayna-i/image/upload/v1657911366/Alice/image_67_l3dqpp.png'/>
                <div className='TextProject'>
                    <h4>Logos/Banners</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae, urna sed libero ut quisque. Tristique quis et mollis porttitor diam ut iaculis vulputate. Sociis odio vestibulum elit quis et cum ullamcorper semper. Dictum sed pretium nec amet iaculis.</p>
                    <button>Descubre más <BsArrowRight className='Arrow'/> </button>
                </div>
            </div>
            <div className='Ux-Ui'>
                <img className='ProjectImg' src='https://res.cloudinary.com/telayna-i/image/upload/v1657911366/Alice/image_67_l3dqpp.png'/>
                <div className='TextProject'>
                    <h4>UX/UI Design</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae, urna sed libero ut quisque. Tristique quis et mollis porttitor diam ut iaculis vulputate. Sociis odio vestibulum elit quis et cum ullamcorper semper. Dictum sed pretium nec amet iaculis.</p>
                    <button>Descubre más <BsArrowRight className='Arrow'/> </button>
                </div>
            </div>
        </div>
    )
}

export default Projects