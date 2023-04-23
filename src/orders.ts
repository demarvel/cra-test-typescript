/** Описание товара. */
export interface Order { 
    /** Название товара. */
    name?: string;
    /** Описание товара. */
    description?: string;
    /** Ссылка на изображение товара. */
    imgSrc?: string;
};

/** Список кроссовок. */
export const cross: Order[] = [
    { name: 'Addidas', description: 'Кросовки Addidas для бега', imgSrc: '/images/cross1.jpg' },
    { name: 'Demix', description: 'Кросовки Demix для бега', imgSrc: '/images/cross2.jpg' },
    { name: 'Nike', description: 'Кросовки Nike для бега', imgSrc: '/images/cross3.jpg' },
    { name: 'Addidas', description: 'Кросовки Addidas2 для бега', imgSrc: '/images/cross1.jpg' },
    { name: 'Demix', description: 'Кросовки Demix2 для бега', imgSrc: '/images/cross2.jpg' },
    { name: 'Nike', description: 'Кросовки Addidas для бега', imgSrc: '/images/cross3.jpg' },
];

/** Список верхней одежды. */
export const outerwear: Order[] = [
    { name: 'Куртка1', description: 'Куртка зимняя', imgSrc: '/images/outerwear1.jpg' },
    { name: 'Куртка2', description: 'Куртка зимняя утепленная', imgSrc: '/images/outerwear2.jpg' },
];

/** Список нижней одежды. */
export const underwear: Order[] = [
    { name: 'Штаны1', description: 'Волшебные штаны', imgSrc: '/images/underwear1.jpg' },
    { name: 'Штаны2', description: 'Волшебные штаны', imgSrc: '/images/underwear2.jpg' },
    { name: 'Штаны3', description: 'Волшебные штаны', imgSrc: '/images/underwear3.jpg' },
];