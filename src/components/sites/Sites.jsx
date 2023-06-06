import React, { useState } from 'react';
import './sites.css';
import { BsArrowRight, BsGithub } from 'react-icons/bs';
import { MdOutlineHome } from 'react-icons/md';
import data from '../data/Data';

const Sites = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 6;

    // Calculer l'index de début et de fin des cartes à afficher sur la page actuelle
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);

    // Fonction pour changer de page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <button
                className='btn-home'
                onClick={() => paginate(1)}>
                <MdOutlineHome className='icon' />
            </button>
            <div className='container'>
                {currentCards.map(({ id, image, title, demo, git, qr }) => (
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
                ))}
            </div>

            {/* Afficher les boutons de pagination */}
            <div className="pagination">
                {data.length > cardsPerPage && (
                    Array.from({ length: Math.ceil(data.length / cardsPerPage) }, (_, index) => (
                        <button
                            key={index + 1}
                            className={currentPage === index + 1 ? 'active' : ''}
                            onClick={() => paginate(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))
                )}
            </div>
        </>
    );
}

export default Sites;