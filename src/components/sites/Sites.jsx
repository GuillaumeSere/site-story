import React, { useState, useEffect } from 'react';
import './sites.css';
import { BsArrowRight, BsGithub } from 'react-icons/bs';
import { MdOutlineHome } from 'react-icons/md';
import data from '../data/Data';

const Sites = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 450);
    const cardsPerPage = 6;

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 450);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Calculer l'index de début et de fin des cartes à afficher sur la page actuelle
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);

    const totalPages = Math.ceil(data.length / cardsPerPage);

    // Calcul des pages à afficher pour la pagination
    const getPageNumbers = () => {
        if (!isMobile) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }
        // Pour mobile : max 5 numéros, centrés sur la page courante
        let start = Math.max(currentPage - 2, 1);
        let end = Math.min(start + 4, totalPages);
        if (end - start < 4) {
            start = Math.max(end - 4, 1);
        }
        const pages = [];
        for (let i = start; i <= end; i++) {
            pages.push(i);
        }
        return pages;
    };

    return (
        <>
            <button
                className='btn-home'
                onClick={() => setCurrentPage(1)}>
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
                    getPageNumbers().map((pageNumber) => (
                        <button
                            key={pageNumber}
                            className={currentPage === pageNumber ? 'active' : ''}
                            onClick={() => setCurrentPage(pageNumber)}
                        >
                            {pageNumber}
                        </button>
                    ))
                )}
            </div>
        </>
    );
}

export default Sites;