import { useState } from "react";
import ListProducts from "../components/ListProducts";
import Header from "../Header/Header";
import Foot from "../components/Foot";

export default function Product(){
    const [productsList] = useState([
        { id: 1, title: "AZ Series", sign: "Marcelino's choice",  realprice: '$6000.00', img: 'https://www.ibanez.com/common/product_artist_file/file/pm_thum_eg_az_en.png', discount: true },
        { id: 2, title: 'AZES Series', sign: "Azali's choice",  realprice: '$2300.23', img: 'https://www.ibanez.com/common/product_artist_file/file/pm_thum_eg_azes_en.jpg', discount: true },
        { id: 3, title: 'AZS Series', sign: "Van Halen's choice",  realprice: '$3000.00', img: 'https://www.ibanez.com/common/product_artist_file/file/pm_thum_eg_azs_en.jpg', discount: true},
        { id: 4, title: 'RG Series', sign: "Scott Lepage's choice", realprice: '$8999.00', img: 'https://www.ibanez.com/common/product_artist_file/file/pm_thum_eg_rg_en.jpg', discount: true},
        { id: 6, title: 'Q Series', sign: "Ichika Nito's choice", realprice: '$2930.00', img: 'https://www.ibanez.com/common/product_artist_file/file/pm_thum_eg_q_eu.jpg', discount: true},
        { id: 8, title: 'miKro Series', price: '$9823.00', img: 'https://www.ibanez.com/common/product_artist_file/file/pm_thum_eg_mikro_guitar_en.png', discount: '80% OFF',realprice: '$1964.60' },
        { id: 11, title: 'Q52PB Series', price: '$960.00', img: 'src/components/images/products/Q52PB.png', discount: '80% OFF', realprice: '$192.00'},
        { id: 12, title: 'Q54 Series', price: '$900.00', img: 'src/components/images/products/Q54.png', discount: '90% OFF', realprice: '$90.00'},
        { id: 13, title: 'Q547PB Series', price: '$1023.00', img: 'src/components/images/products/Q547PB.png', discount: '100% OFF', realprice: 'FREE!'},
        { id: 14, title: 'RGA42EX Series', price: '$69420.00', img: 'src/components/images/products/RGA42EX.png', discount: '50% OFF', realprice: '$34710.00'},
        { id: 15, title: 'XPTB720 Series', price: '$1002.30', img: 'src/components/images/products/XPTB720.png', discount: '65% OFF', realprice: '$350.80'},
        { id: 7, title: 'X Series', price: '$2283.00', img: 'https://www.ibanez.com/common/product_artist_file/file/pm_thum_eg_x_en.jpg', discount: '20% OFF', realprice: '$1826.40'},
        { id: 16, title: 'IC420 Series', price: '$300.00', img: 'src/components/images/products/IC420.png', discount: '35% OFF', realprice: '$227.50'},
        { id: 9, title: 'Iceman Series', price: '$9292.00', img: 'https://www.ibanez.com/common/product_artist_file/file/pm_thum_eg_ic_en.jpg', discount: '80% OFF', realprice: '$1858.40'},
        { id: 10, title: 'SA Series', price: '$9100.00', img: 'https://www.ibanez.com/common/product_artist_file/file/pm_thum_eg_sa_en.png', discount: '80% OFF', realprice: '$1820.00'},
    ])
    

      return (
        <>
        <Header/>
        <div className="products-Week">
                <h2 className="products-title">PRODUCTS</h2>
        </div>
        <ListProducts list={productsList}/>
        
        <br/>
        <br/>
        <Foot title={"Buy something!"}/>
        </>
      );
}