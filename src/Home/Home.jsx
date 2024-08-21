import Caruso from "../components/Caruso"
import Header from "../Header/Header"
import Foot from "../components/Foot"
import { useState } from "react";

export default function Home(){
    const [productsList] = useState([
        { id: 1, title: "AZ Series", sign: "Marcelino's choice",  price: '$6000.00', img: 'https://www.ibanez.com/common/product_artist_file/file/pm_thum_eg_az_en.png', discount: true },
        { id: 2, title: 'AZES Series', sign: "Azali's choice",  price: '$2300.23', img: 'https://www.ibanez.com/common/product_artist_file/file/pm_thum_eg_azes_en.jpg', discount: false },
        { id: 3, title: 'AZS Series', sign: "Van Halen's choice",  price: '$3000.00', img: 'https://www.ibanez.com/common/product_artist_file/file/pm_thum_eg_azs_en.jpg', discount: false },
        { id: 4, title: 'RG Series', sign: "Scott Lepage's choice", price: '$8999.00', img: 'https://www.ibanez.com/common/product_artist_file/file/pm_thum_eg_rg_en.jpg', discount: false },
        { id: 5, title: 'Q Series', sign: "Ichika Nito's choice", price: '$2930.00', img: 'https://www.ibanez.com/common/product_artist_file/file/pm_thum_eg_q_eu.jpg', discount: false }
    ]);

    const [partnersList] = useState([
        { partner_id: 1, partner_name: "Tim Henson", img: 'https://i.scdn.co/image/ab67616100005174181a97e0b0355f077d9e3a04'},
        { partner_id: 1, partner_name: "Scott Lepage", img: 'https://www.ibanez.com/common/product_artist_file/file/a_main_ScottLePage.jpg'},
        { partner_id: 1, partner_name: "Ichika Nito", img: 'https://www.jame-world.com/media/image/2022-12/12827.jpg'},
        { partner_id: 1, partner_name: "Van Halen", img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Eddie_Van_Halen_at_the_New_Haven_Coliseum.jpg/1200px-Eddie_Van_Halen_at_the_New_Haven_Coliseum.jpg'},
        { partner_id: 1, partner_name: "Mateus Asato", img: 'https://conteudo.imguol.com.br/c/entretenimento/ef/2018/10/03/o-guitarrista-brasileiro-mateus-asato-1538598749096_v2_450x600.jpg'},
        { partner_id: 1, partner_name: "Michael Jackson (A.K.A, Kaike)", img: 'https://i.pinimg.com/originals/2d/7e/a5/2d7ea54b2663d7e5ab5078acc4dc5d65.jpg'},
    ])

    return(
        <>
        <Header/>
        <br />
        <Caruso/>
        <br />
                <div className="products-Week">
                <h2>PRODUCTS OF THE WEEK</h2>
                </div>
        <div className="container-products">
                
        {productsList.map((product)=>(
            <div className='product-i' key={product.id}>
                <img src={product.img}/>
                <p>{product.price}</p>
                <h2>{product.title}</h2>
                <h1>{product.sign}</h1>
            </div>
        ))}
        </div>
        <br/>
            <h2 className="partners">PARTNERS</h2>
            <div className="partners-container">
            {
                partnersList.map((partner) =>(
                    <div className="partner-i" key={partner.partner_id}>
                        <img src={partner.img}/>
                        <h2>{partner.partner_name}</h2>
                    </div>
                    
            
                ))
            }
            </div>




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
    </>
    )
}
