export default function ListProducts({list}){
    return(
        <div className="container-products">
        {list.map((product)=>(
            <div className='product-i' key={product.id}>
                <div className="product-i-image">
                <img src={product.img}/>
                </div>
                <div className="discount-price-container">
                <h1 className="discount-price">{product.discount}</h1>
                </div>
                <div className="product-realprice">
                    <h2>{product.realprice}</h2>
                </div>


                <p className="price">{product.price}</p>
                <h2>{product.title}</h2>
                <h1>{product.sign}</h1>
                <div className="btn-container">
                <button className="butn"><strong>COMPRAR</strong></button>
                </div>
            </div>
        ))}
        </div>
    )
}