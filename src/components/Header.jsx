import { Link } from "react-router-dom";

export default function Header(){
    return(
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
    )
}