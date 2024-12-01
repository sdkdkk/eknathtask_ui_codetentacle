import React, { useRef, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import image2 from '../Images/2.webp'
import image7 from '../Images/7.webp'
import image8 from '../Images/8.webp'
import image9 from '../Images/9.webp'
import image10 from '../Images/10.webp'
import image11 from '../Images/11.webp'
import image12 from '../Images/12.webp'
import astro_painter from '../Images/astro_painter.png'


const Home = () => {

    const sliderRef = useRef(null);

    const scrollToSlider = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const initialImages = [
        {
            img: image2,
            name: "The Moonshooter Series",
        },
        {
            img: image12,
            name: "Last Robits",
        },
        {
            img: image7,
            name: "The RobitesNFT series",
        },
        {
            img: image8,
            name: "La Genta",
        },
        {
            img: image9,
            name: "Moonshot",
        },
        {
            img: image10,
            name: "Technomics",
        },
        {
            img: image11,
            name: "Moonsea",
        },

    ];
    useEffect(() => {
        const particleContainer = document.querySelector('.particles');
        const starBackground = document.querySelector('.star-background');

        for (let i = 0; i < 100; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.top = `${Math.random() * 100}vh`;
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.animationDelay = `${Math.random() * 10}s`;
            particleContainer.appendChild(particle);
        }

        for (let i = 0; i < 300; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.top = `${Math.random() * 100}vh`;
            star.style.left = `${Math.random() * 100}vw`;
            starBackground.appendChild(star);
        }
    }, []);

    // Carousel
    const [images, setImages] = useState(initialImages);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            moveItems();
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const moveItems = () => {
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(nextIndex);
    };
    const handleItemClick = (index) => {
        setCurrentIndex(index);
    };


    const getCircularIndex = (index, length) => {
        return (index + length) % length;
    };



    return (
        <>
            <div className="tapbar">
                <div className="d-flex mx-5 mt-2 align-items-center">
                    <span className="me-3">
                        <i className="fas fa-arrow-left arrow-icon_top" style={{ cursor: "pointer" }}></i>
                    </span>
                    <span className="me-3">
                        <i className="fas fa-home arrow-icon_top" style={{ cursor: "pointer" }}></i>
                    </span>
                    <span className="me-3">
                        <i className="fas fa-user arrow-icon_top" style={{ cursor: "pointer" }}></i>
                    </span>
                    <span className="me-3">
                        <i className="fas fa-cog arrow-icon_top" style={{ cursor: "pointer" }}></i>
                    </span>
                    <span className="me-3">
                        <i className="fas fa-bell arrow-icon_top" style={{ cursor: "pointer" }}></i>
                    </span>
                    <span className="me-3">
                        <i className="fas fa-envelope arrow-icon_top" style={{ cursor: "pointer" }}></i>
                    </span>
                </div>
            </div>
            <div className='homebackround'>
                <div className="career-section">
                    <div className="container mt-5 mx-auto">
                        <div className="row justify-content-center">
                            <div className='col-md-8  align-item-center d-flex'>
                                <div className="col-md-6 career-image-container">
                                    <h3 className='buyMoonBoxes'>
                                        Buy MoonBoxes<span className='buyMoonBoxes_color'> and expand your NFT collection</span>
                                    </h3>
                                    <p className='buyMoonBoxes_paracolor'>Buying MoonBoxes is a unique way to acquire NFTs and build your collection.it is build on the Binance Smart Chain ,MoonRiver ,Polygon,Ethereum and DogeChain.Only available on <a className='Moonoxesio'>MoonBoxes.io</a></p>

                                    <div className='d-flex'>
                                        <div className='getapp getapp_text text-start mt-2'>
                                            <span className=''>Buy A MoonBox</span>
                                        </div>
                                        <div className='mx-5 mt-2'>
                                            <span onClick={scrollToSlider}>
                                                <i className="fas fa-arrow-down arrow-icon me-2" style={{ cursor: 'pointer' }}></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 text-center text-md-left">
                                    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img src={image2} class="d-block w-100" alt="..." width={40} height={360} />
                                            </div>
                                            <div class="carousel-item">
                                                <img src={image12} class="d-block w-100" alt="..." width={40} height={360} />
                                            </div>
                                            <div class="carousel-item">
                                                <img src={image7} class="d-block w-100" alt="..." width={40} height={360} />
                                            </div>
                                        </div>
                                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                            <span class="visually-hidden">Previous</span>
                                        </button>
                                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                            <span class="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* slider Section -------------------- */}
                        <div ref={sliderRef} className="row justify-content-center  mx-auto mt-md-4 ">
                            <div className="col-md-10 ">
                                <div className="carousel-container">
                                    <div className="d-flex flex-column">
                                        <div className="carousel-items">
                                            {Array(5)
                                                .fill()
                                                .map((_, index) => {
                                                    const imageItem =
                                                        images[
                                                        getCircularIndex(currentIndex + index - 2, images.length)
                                                        ];
                                                    return (
                                                        <div
                                                            key={index}
                                                            className={`${index === 2 ? "center" : "opacity"} ${(index === 0 || index === 4) &&
                                                                "end d-none d-md-block d-lg-block"
                                                                }
                                                 ${(index === 1 || index === 3) &&
                                                                "d-none d-md-block d-lg-block"
                                                                }`}
                                                            onClick={() =>
                                                                handleItemClick(
                                                                    getCircularIndex(currentIndex + index - 2, images.length)
                                                                )
                                                            }
                                                        >
                                                            <img src={imageItem.img} alt="item" className='caroselimge' />
                                                        </div>
                                                    );
                                                })}
                                        </div>
                                        <div>
                                            <div className="description">
                                                <p className='text-center paraheading'>{images[currentIndex].name}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-8 d-flex flex-column flex-md-row align-items-center">
                                <div className="col-12 col-md-6 career-image-container text-center text-md-start mb-3 mb-md-0">
                                    <h3 className="buyMoonBoxes">
                                        MoonBoxes io
                                        <span className="buyMoonBoxes_color"> your base to purchase NFTs</span>
                                    </h3>
                                </div>
                                <div className="col-12 col-md-6 text-center text-md-start">
                                    <p className="buyMoonBoxes_right">
                                        MoonBoxes.io
                                        <span className="buyMoonBoxes_color_right">
                                            offers you a complete overview of upcoming, active, and recent NFT drops.
                                        </span>
                                    </p>
                                    <p className="buyMoonBoxes_right_bottom">
                                        MoonBoxes.io
                                        <span className="buyMoonBoxes_color_right">
                                            will be home to collectors and amazing NFT artists.
                                        </span>
                                    </p>
                                    <div className="getapp getapp_text text-start">
                                        <span>Explore</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center mt-md-5 mb-5">
                            <div className="col-md-8 mt-md-5 pt-5 d-flex flex-column flex-md-row align-items-center">
                                <div className="col-12 col-md-6 text-center order-1 order-md-2 mb-4 mb-md-0">
                                    <img src={astro_painter} className="img-fluid" alt="Astro Painter" />
                                </div>
                                <div className="col-12 col-md-6 career-image-container text-center text-md-start order-2 order-md-1">
                                    <h3 className="buyMoonBoxes">
                                        Call for artists!
                                        <span className="buyMoonBoxes_color"> Applications are open for all artists and creators</span>
                                    </h3>
                                    <div className="contactUs contactUs_text text-start mt-4">
                                        <span>Contact Us</span>
                                    </div>
                                    <div className="getapp getapp_text text-start mt-2">
                                        <span>Application Form</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="particles"></div>
                <div className="star-background"></div>
            </div>

        </>
    )
}

export default Home
