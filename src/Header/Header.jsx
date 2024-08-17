import { Link } from "react-router-dom";

export default function Header(){
    return(
<>
    <div>
        <header>
            <div className="header-overall">
                <div className="logoHeader">
                <img src="src\components\images\reallogo.png" alt="ibanez-logo" className="logo"/>
                </div>
                <Link to='/'>
                <p>HOME</p>
                </Link>
                <Link to='/product'>
                    <p>PRODUCT</p>
                </Link>
                <Link to='/offer'>
                    <p>OFFERS</p>
                </Link>
            </div>
        </header>
    </div>
</>
    )
}