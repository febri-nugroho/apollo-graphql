import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
    query GetQueryCategories {
        categories (filters:{}) {
            items {
                id
                name
            }
        }
    }
`;

export const GET_CATEGORY_BY_ID = gql`
    query GetCategoryById($idCategory: Int) {
        category(id: $idCategory) {
            name
            products {
                items {
                    name
                    sku
                }
                total_count
            }
        }
    }
`;

export const GET_PRODUCT_BY_ID = gql`
    query GetProductById($idProduct: String) {
        products(filter: { sku: { eq: $idProduct} }) {
            items {
                sku
                name
                price_range {
                    maximum_price {
                        regular_price {
                            value
                        }
                    }
                }
                image {
                    url
                }
                description {
                    html
                }
            }
            total_count
        }
    }
`;

export const POST_SUBSCRIBE = gql`
    mutation PostSubscribe($email: String) {
        subscribe(input: {email: $email}) {
            status {
                code
                message
                response
            }
        }
    }
`;