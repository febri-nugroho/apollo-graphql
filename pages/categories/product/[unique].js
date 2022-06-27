import { useQuery } from "@apollo/client";
import { GET_PRODUCT_BY_ID } from '../../categories/schema';
import { useRouter } from "next/router";
import Image from "next/image";

const ProductById = () => {
    const router = useRouter()
    const { unique } = router.query
    console.log(unique)

    const response = useQuery(GET_PRODUCT_BY_ID, {
        variables: {
            idProduct: unique
        }
    });

    const { loading, error, data } = response

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    const products = data.products
    console.log(products)
    // return null

    return (
        <>
        <div>
            <h1>Detail Product</h1>
            { products.items.map((item) =>
                <div key={ item.sku }>
                    <span> Name: { item.name }</span><br />
                    <span> Price: { item.price_range.maximum_price.regular_price.value }</span><br />
                    <span> Description: </span>
                    <div dangerouslySetInnerHTML={{ __html: item.description.html }}></div><br />
                    <span> Image: </span>
                    <div>
                        <Image 
                            src={ item.image.url } 
                            height= "100%"
                            width= "100%"
                            placeholder= 'blur'
                            blurDataURL={ item.image.url } 
                            />
                    </div>
                </div>
			)}
        </div>
        </>
    )
}

export default ProductById

