import React from 'react'
import './sites.css'
import { BsArrowRight } from 'react-icons/bs'
import data from '../data/Data'

const Sites = () => {

    return (
        <div className='container'>
            {
                data.map(({ id, image, title, demo, qr }) => {
                    return (
                        <div className="card" key={id}>
                            <div className="card-image">
                                <img src={image} alt="" />
                                <a href={demo} target="_blank">{title}</a>
                            </div>
                            <div className="card-qr">
                                <p>Scanner le<br /><br />QR Code du Site <BsArrowRight className='card-arrow' /></p>
                                <img src={qr} alt={qr} />
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Sites
