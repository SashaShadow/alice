import React from 'react'
import './Projects.css'
import { BsArrowRight } from 'react-icons/bs'
import Frame1 from '../../images/Frame 1.png'
import Frame2 from '../../images/Frame 2.png'
import Frame3 from '../../images/Frame 3.png'
import Frame4 from '../../images/Frame 4.png'

const Projects = ({ref3, setCategory, setLoader}) => {

    return (
        <div className='Projects' ref={ref3}>
            <div className='Packaging'>
                <img className='ProjectImg' alt='aurum' src={Frame2}/>
                <div className='TextProject'>
                    <h4 className='ProTitle'>Packaging</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae, urna sed libero ut quisque. Tristique quis et mollis porttitor diam ut iaculis vulputate. Sociis odio vestibulum elit quis et cum ullamcorper semper. Dictum sed pretium nec amet iaculis.</p>
                    <button onClick={() => {setCategory('packaging'); setLoader(true);}}>Descubre más <BsArrowRight className='Arrow'/> </button>
                </div>
            </div>
            <div className='RetoqueDigital'>
                <img className='ProjectImg' alt='retoque' src={Frame4} />
                <div className='TextProject'>
                    <h4 className='ProTitle'>Retoque Digital</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae, urna sed libero ut quisque. Tristique quis et mollis porttitor diam ut iaculis vulputate. Sociis odio vestibulum elit quis et cum ullamcorper semper. Dictum sed pretium nec amet iaculis.</p>
                    <button onClick={() => {setCategory('retoquedigital'); setLoader(true);}}>Descubre más <BsArrowRight className='Arrow'/> </button>
                </div>
            </div>
            {/* <div className='Marcas'>
                <img src='https://res.cloudinary.com/telayna-i/image/upload/v1657913987/Alice/image_77_sgan3v.png'/>
            </div> */}
            <div className='Logos-Banners'>
                <img className='ProjectImg' alt='selvanegra' src={Frame1} />
                <div className='TextProject'>
                    <h4 className='ProTitle'>Logos/Banners</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae, urna sed libero ut quisque. Tristique quis et mollis porttitor diam ut iaculis vulputate. Sociis odio vestibulum elit quis et cum ullamcorper semper. Dictum sed pretium nec amet iaculis.</p>
                    <button onClick={() => {setCategory('logos'); setLoader(true);}}>Descubre más <BsArrowRight className='Arrow'/> </button>
                </div>
            </div>
            <div className='Ux-Ui'>
                <img className='ProjectImg' alt='libretacc' src={Frame3}/>
                <div className='TextProject'>
                    <h4 className='ProTitle'>Merchandising</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae, urna sed libero ut quisque. Tristique quis et mollis porttitor diam ut iaculis vulputate. Sociis odio vestibulum elit quis et cum ullamcorper semper. Dictum sed pretium nec amet iaculis.</p>
                    <button onClick={() => {setCategory('merchandising'); setLoader(true);}}>Descubre más <BsArrowRight className='Arrow'/> </button>
                </div>
            </div>
        </div>
    )
}

export default Projects