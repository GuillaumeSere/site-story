import React from 'react'
import './sites.css'
import { BsArrowRight, BsGithub } from 'react-icons/bs'
import data from '../data/Data'

const Sites = () => {

    return (
        <div className='container'>
            {
                data.map(({ id, image, title, demo,git, qr }) => {
                    return (
                        <div className="card" key={id}>
                            <div className="card-image">
                                <img src={image} alt="ilustartion site" />
                                <a href={demo} target="_blank" rel="noreferrer" className='card-link'>{title}</a>
                                <a href={git} target="_blank" rel="noreferrer"><BsGithub className='link' /></a>
                            </div>
                            <div className="card-qr">
                                <p>Scanner le<br /><br />QR Code du Site <BsArrowRight className='card-arrow' /></p>
                                <img src={qr} alt="qr code" />
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Sites
