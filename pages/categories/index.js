import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from './schema';
import Link from "next/link";

const Categories = () => {
    const { loading, error, data } = useQuery(GET_CATEGORIES);
    
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    console.log(data.categories.items);
    // return null;
    return (
        <>
            <h1>List Categories</h1>
            <ol>
				{ data.categories.items.map((item) =>
				<li key={ item.id }>
				    <Link href={{pathname: `/categories/${item.id}`}} >
								<a>{ item.name }</a>
							</Link>
						</li>
					)}
			</ol>
        </>
    )
}

export default Categories