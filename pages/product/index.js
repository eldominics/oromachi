import { Product } from "../../components";
import { client } from "../../lib/client";

// ./node_modules/.bin/sanity upgrade @sanity/cli
const ProductHome = ({products}) => {
    
    return (
        <>
            <div className=" products-heading">
            <h1> All The Products You Seek </h1>
            <p>Pick any of the amazing speakers you want</p>
            </div>

            <div className="products-container">
                {products?.map((item) =>
                <Product key = {item._id} product = {item}/>)}
            </div>
        </>
    )
}

export const getServerSideProps = async () =>{
    const query = `*[_type == "product"]`;
    const productsQuery =  await client.fetch(query);


    return{
        props:{ products : productsQuery}
    }

}

export default ProductHome