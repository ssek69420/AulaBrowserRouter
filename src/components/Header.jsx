import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel"


export default function Header(){
    return(
<>
    <Carousel/>
        <header>
            <Link to='/home'>
            <p>Home</p>
            </Link>
            <Link to='/product'>
                <p>Product</p>
            </Link>
            <Link to='/offer'>
                <p>Offers</p>
            </Link>
        </header>
</>
    )
}