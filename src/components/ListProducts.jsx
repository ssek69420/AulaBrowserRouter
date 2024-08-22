export default function ListProducts({list}){
    return(
        <div className="container-products">
        {list.map((product)=>(
            <div className='product-i' key={product.id}>
                <img src={product.img}/>
                <p>{product.price}</p>
                <h2>{product.title}</h2>
                <h1>{product.sign}</h1>
                <div className="btn-container">
                <button className="butn">COMPRAR</button>
                </div>
            </div>
        ))}
        </div>
    )
}