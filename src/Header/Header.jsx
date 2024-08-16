import { Link } from "react-router-dom";
export default function Header(){
    return(
<>
    <div>
        <header>
            <div className="HeaderOverall">
                <div className="logoHeader">
                <img src="../src/components/images/" alt="ibanez-logo" />
                //links
                <Link to='/'>
                <p>Home</p>
                </Link>
                <Link to='/product'>
                    <p>Product</p>
                </Link>
                <Link to='/offer'>
                    <p>Offers</p>
                </Link>
                </div>
            </div>
        </header>
    </div>
</>
    )
}