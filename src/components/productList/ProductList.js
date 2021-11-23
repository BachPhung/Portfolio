import './ProductList.css'
import Product from '../product/Product'
import { products } from '../../data'
const ProductList = () => {
    return (
        <div className='productList' id='project'>
            <div className='productList-texts'>
                <h1 className='productList-title'>PROJECT</h1>
                <h5 className='productList-desc'>
                    Here is some of my project which used React to implement
                </h5>
            </div>
            <div className='productList-list'>
                {products.map(items=>(
                <Product key={items.id} img={items.img} link={items.link}></Product>
                ))}
            </div>
        </div>
    )
}

export default ProductList
