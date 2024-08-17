import { Link } from "react-router-dom";
import "../styling/Style.css"

export default function Header(){
    return(
<>
    <div>
        <header>
            <div className="HeaderOverall">
                <div className="logoHeader">
                <img src="src\components\images\reallogo.png" alt="ibanez-logo" className="logo"/>
                </div>
            </div>
                <Link to='/'>
                <p>Home</p>
                </Link>
                <Link to='/product'>
                    <p>Product</p>
                </Link>
                <Link to='/offer'>
                    <p>Offers</p>
                </Link>
        </header>
    </div>
</>
    )
}