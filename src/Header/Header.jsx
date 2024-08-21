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
                <p className="headerText">HOME</p>
                </Link>
                <Link to='/product'>
                    <p className="headerText">PRODUCTS</p>
                </Link>
                <Link to='/offer'>
                    <p className="headerText">OFFERS</p>
                </Link>
            </div>
        </header>
    </div>
</>
    )
}