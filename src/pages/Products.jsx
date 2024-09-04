import { useSearchParams } from 'react-router-dom';
import { ProductList } from '../components/ProductList';
import { getProducts } from '../fakeAPI';
import { SearchBox } from '../components/SearchBox';

export const Products = () => {
    const products = getProducts();
    const [searchParams, setSearchParams] = useSearchParams();
    const productName = searchParams.get('name') ?? '';

    const visibleProducts = products.filter((product) =>
        productName.toLowerCase().includes(productName.toLowerCase())
    );

    const updateQueryString = (name) => {
        const nextParams = name !== '' ? { name } : {};
        setSearchParams(nextParams);
    }

    return (
        <main>
            <SearchBox value={productName} onChange={updateQueryString}></SearchBox>
            <ProductList products={visibleProducts} />
        </main>
    );
}