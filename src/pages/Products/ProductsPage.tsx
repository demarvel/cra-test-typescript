import { cross, outerwear, underwear } from '../../orders'
import { useLocation } from 'react-router-dom'
import { Categories } from '../../components/Categories/Categories'

/** Страница со списком товаров. */
export const ProductsPage = () => {
    /** Получаем hash из строки браузера. */
    const { hash } = useLocation()

    return (
        <>
            <h5>Товары</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ad omnis tenetur reprehenderit dicta repudiandae 
                voluptas! Doloribus quia unde veniam, nulla ipsum iste quibusdam sunt odio dolor nesciunt corrupti facilis.</p>
            {hash !== '' ? (
                <>
                    {hash === '#cross' && <Categories categoryName={'Кроссовки'} ordersArray={cross} />}
                    {hash === '#outerwear' && <Categories categoryName={'Верхняя одежда'} ordersArray={outerwear} />}
                    {hash === '#underwear' && <Categories categoryName={'Нижняя одежда'} ordersArray={underwear} />}
                </>
            ) : (
                <>
                    <Categories categoryName={'Кроссовки'} ordersArray={cross} />
                    <Categories categoryName={'Верхняя одежда'} ordersArray={outerwear} />
                    <Categories categoryName={'Нижняя одежда'} ordersArray={underwear} />
                    <Categories categoryName={'Прочее'} />
                </>
            )}
        </>
    );
};
