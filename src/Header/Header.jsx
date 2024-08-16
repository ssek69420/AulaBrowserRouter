import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel"


export default function Header(){
    return(
<>
    <div>
        <header>
            <div className="HeaderOverall">
                <div className="logoHeader">
                <a href="#">
                    <img src="../src/components/images/" alt="ibanez-logo" />
                </a>
                </div>
            </div>
        </header>
    </div>

    <Carousel
    infiniteLoop
    autoPlay
    usekeyboardArrows
    showArrows = {true}
    showStatus = {false}
    showThumbs = {false}
    dynamicHeight
    >
    <div>
        <img src="https://www.ibanez.com/images/index/mainSlide/top_SRD900F.jpg" alt="electric bass" />
    </div>

    <div>
        <img src="https://www.ibanez.com/images/index/mainSlide/top_AE2024.jpg" alt="acoustic ibanez" />
    </div>

    <div>
        <img src="https://www.ibanez.com/images/index/mainSlide/top_AZES2024.jpg" alt="electric stratocaster ibanez" />
    </div>

    <div>
        <img src="https://www.ibanez.com/images/index/mainSlide/top_sig.jpg" alt="overall ibanez guitars" />
    </div>
    </Carousel>
            <Link to='/'>
            <p>Home</p>
            </Link>
            <Link to='/product'>
                <p>Product</p>
            </Link>
            <Link to='/offer'>
                <p>Offers</p>
            </Link>
</>
    )
}