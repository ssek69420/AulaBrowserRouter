import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Caruso(){
    return(
        <>
        <div className="carousel-container">
        <Carousel
        infiniteLoop={true}
        autoPlay={true}
        useKeyboardArrows={true}
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        dynamicHeight={true}
>
    <div>
        <img src="https://www.ibanez.com/images/index/mainSlide/top_sig.jpg" alt="ibanez-guitars-signature" />
        <p className="carousel-text"></p>
    </div>
    <div>
        <img src="https://www.ibanez.com/images/index/mainSlide/top_AZES2024.jpg" alt="ibanez-guitars" />
        <p className="carousel-text"></p>
    </div>

    <div>
    <img src="https://www.ibanez.com/images/index/mainSlide/top_SRD900F.jpg" alt="ibanez-bass" />
    <p className="carousel-text"></p>
    </div>

    <div>
        <img src="https://www.ibanez.com/images/index/mainSlide/top_AE2024.jpg" alt="acoustic-ibanez" />
        <p className="carousel-text"></p>
    </div>

    </Carousel>
    </div>
        </>
    )
}