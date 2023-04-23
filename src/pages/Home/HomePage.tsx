import './HomePage.css'
import { Categories } from '../../components/Categories/Categories'
import { cross, outerwear, underwear } from '../../orders'

/** Главная страница. */
export const HomePage = () => {
    return (
        <>
            <h5>Главная страница</h5>
            <Categories categoryName={'Кроссовки'} ordersArray={cross} />
            <Categories categoryName={'Верхняя одежда'} ordersArray={outerwear} />
            <Categories categoryName={'Нижняя одежда'} ordersArray={underwear} />
            <Categories categoryName={'Прочее'} />
        </>
    );
};
