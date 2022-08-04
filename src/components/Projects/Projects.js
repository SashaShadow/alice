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
                    <p>El packaging puede considerarse como la carta de presentación de tu producto. Consultame por diseños a la medida de tu emprendimiento o mira algunos trabajos que he realizado.</p>
                    <button onClick={() => {setCategory('packaging'); setLoader(true);}}>Descubre más <BsArrowRight className='Arrow'/> </button>
                </div>
            </div>
            <div className='RetoqueDigital'>
                <img className='ProjectImg' alt='retoque' src={Frame4} />
                <div className='TextProject'>
                    <h4 className='ProTitle'>Retoque Digital</h4>
                    <p>Soy experta en retoque digital, y conseguiré que tus fotografías transmitan más brindándoles colores mas realistas y foco en los detalles, asi aprovechando todo su potencial.</p>
                    <button onClick={() => {setCategory('retoquedigital'); setLoader(true);}}>Descubre más <BsArrowRight className='Arrow'/> </button>
                </div>
            </div>
            <div className='Logos-Banners'>
                <img className='ProjectImg' alt='selvanegra' src={Frame1} />
                <div className='TextProject'>
                    <h4 className='ProTitle'>Logos/Banners</h4>
                    <p>Asesoro, diseño, o hago que tu proyecto pueda volverse real al darle una imagen definida y concreta. Diseños originales e innovadores.</p>
                    <button onClick={() => {setCategory('logos'); setLoader(true);}}>Descubre más <BsArrowRight className='Arrow'/> </button>
                </div>
            </div>
            <div className='Ux-Ui'>
                <img className='ProjectImg' alt='libretacc' src={Frame3}/>
                <div className='TextProject'>
                    <h4 className='ProTitle'>Merchandising</h4>
                    <p>Encontrá productos personalizables con el logo de tu empresa o emprendimiento para merchandising y regalos empresariales.</p>
                    <button onClick={() => {setCategory('merchandising'); setLoader(true);}}>Descubre más <BsArrowRight className='Arrow'/> </button>
                </div>
            </div>
        </div>
    )
}

export default Projects