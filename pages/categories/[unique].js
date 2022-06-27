import { useQuery } from "@apollo/client";
import { GET_CATEGORY_BY_ID } from './schema';
import { useRouter } from "next/router";
import Link from "next/link";

const CategoryById = () => {
    const router = useRouter()
    const { unique } = router.query
    console.log(unique)

    const response = useQuery(GET_CATEGORY_BY_ID, {
        variables: {
            idCategory: unique
        }
    });
    const { loading, error, data } = response

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    console.log(data.category.products)

    return (
        <>
            <h1>List Product</h1>
            <ol>
				{ data.category.products.items.map((item) =>
                    <li key={ item.sku }>
                        <Link href={{pathname: `/categories/product/${item.sku}`}} >
                                <a>{ item.name }</a>
                        </Link>
                    </li>
				)}
			</ol>
        </>
    )
}

export default CategoryById