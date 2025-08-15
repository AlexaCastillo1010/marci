import { useEffect, useRef } from "react";
import "../components/CSS/explore.css";

export default function Explore() {
    const carouselRef = useRef(null);

    // Duplicate the content for smooth infinite scroll
    useEffect(() => {
        const carousel = carouselRef.current;
        const content = carousel.innerHTML;
        carousel.innerHTML += content; // Duplicate the items
    }, []);

    return (
        <div className="explore-container">
            <div className="explore">
                <h1>Explore Our Listings</h1>
                <p>From our real estate to commercial and residential so you can rely on our expertise</p>
                <div className="losAngeles">
                    <div className="container">
                        <img className="locationLogo" src="/location.png" alt="" />
                        <h2>Los Angeles</h2>
                    </div>
                </div>
            </div>

            {/* Infinite Carousel */}
            <div className="carousel-wrapper">
                <div className="carousel-track" ref={carouselRef}>
                    <div className="pictureCarousel">
                        <img className="firsthouse" src="/1stHouse.webp" alt="" />
                        <div className="textsPictureCarousel">
                            <p>6460 Wagon Wheel</p>
                            <div className="withlogopicture">
                                <img className="carouselLogo" src="/location.png" alt="" />
                                <p>Los Angeles</p>
                            </div>
                        </div>
                    </div>

                    <div className="pictureCarousel">
                        <img className="firsthouse" src="/1stHouse.webp" alt="" />
                        <div className="textsPictureCarousel">
                            <p>Luxury Villa</p>
                            <div className="withlogopicture">
                                <img className="carouselLogo" src="/location.png" alt="" />
                                <p>Beverly Hills</p>
                            </div>
                        </div>
                    </div>

                    <div className="pictureCarousel">
                        <img className="firsthouse" src="/1stHouse.webp" alt="" />
                        <div className="textsPictureCarousel">
                            <p>Modern Condo</p>
                            <div className="withlogopicture">
                                <img className="carouselLogo" src="/location.png" alt="" />
                                <p>Santa Monica</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
