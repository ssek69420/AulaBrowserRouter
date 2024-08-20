import Caruso from "../components/Caruso"
import Header from "../Header/Header"
import Foot from "../components/Foot"
import { useState } from "react";

export default function Home(){
    const [productsList, setProductsList] = useState([
        { id: 1, title: "AZ Series", img: 'https://www.ibanez.com/common/product_artist_file/file/pm_thum_eg_az_en.png' },
        { id: 2, title: '', price: '', img: '' },
        { id: 3, title: '', price: '', img: '' },
        { id: 4, title: '', price: '', img: '' }
      ]);

    return(
        <div>
        <Header/>
        <br />
        <Caruso/>
        <br />

        <div className="container-products">
        {productsList.map((product)=>(
            <div className='product-i' key={product.id}>
                <img src={product.img}/>
                <p>{product.price}</p>
                <h2>{product.title}</h2>
            </div>
        ))}
        </div>

        <br/>

        
        <div className="aboutContainer">
            <h1 className="aboutus">ABOUT US</h1>
            <div className="aboutContent">
                <p className="abouttext">
                    Welcome to Kaike Guitars! We are a passionate team of music enthusiasts dedicated to the art of crafting, selling, and promoting high-quality guitars and guitar peripherals. Our journey began with a simple love for music and a desire to create instruments that inspire creativity and resonate with musicians worldwide.
                </p>

                <h2 className="subheading">Our Mission</h2>
                <p className="abouttext">
                    Our mission is to provide the best sounding instruments that you've ever seen. With quality and speed, we deliver everything that you need in less than a week, in perfect condition.
                </p>

                <h2 className="subheading">Our Team</h2>
                <p className="abouttext">
                    Our team is composed of seasoned luthiers, experienced musicians, and passionate guitar enthusiasts. We bring our collective expertise and love for music to every project, ensuring that every guitar we produce is crafted with care and precision.
                </p>

                <h2 className="subheading">Contact Us</h2>
                <p className="abouttext">
                    We're always here to help with any questions or inquiries you may have. Whether you're interested in a custom guitar, need advice on gear, or want to learn more about our workshops and events, feel free to reach out to us.
                </p>

                <p className="contact-info">
                    <strong>Email:</strong> support@kaikeguitars.com<br />
                    <strong>Phone:</strong> +55 67 9923-1230<br />
                    <strong>Address:</strong> Rua Teodoro Franco de Oliveira, Iná, São José dos Pinhais, Paraná (83065-190).
                </p>
        </div>
    </div>
    <Foot/>
    </div>
    )
}
