'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import Loader from '@/src/components/Loader';
import useFetchData from '@/src/hooks/useFetchData';
import { type IData } from '@/src/types/interfaсes';

interface IParams {
  shop: string;
  category: string;
  product: string;
}

export default function ProductPage(): JSX.Element {
  const API_HOST = process.env.NEXT_PUBLIC_API_HOST;
  const params = useParams() as unknown as IParams;

  const urls = [
    `${API_HOST}/shops/filter?shopId=${params.shop}`,
    `${API_HOST}/categories/filter?categoryId=${params.category}`,
    `${API_HOST}/products/filter?productId=${params.product}`,
    `${API_HOST}/prices-${params.shop}/filter?productId=${params.product}`,
  ];

  const { data, isLoader } = useFetchData(urls);

  // Добавляем проверки наличия данных перед их использованием
  const [shopResult = [], categoriesResult = [], productsResult = [], pricesProductResult = []] =
    data;

  function showProduct(): JSX.Element {
    return (
      <>
        <h1>
          Магазин{' '}
          <Link href={`/portal/shops/${params.shop}`}>
            «{shopResult.length > 0 && shopResult[0].name}»
          </Link>
          , категория{' '}
          <Link href={`/portal/shops/${params.shop}/${params.category}`}>
            «{categoriesResult.length > 0 && categoriesResult[0].name}»
          </Link>
          , продукт «{productsResult.length > 0 && productsResult[0].name}»
        </h1>
        <div>
          {pricesProductResult.map((price: IData) => (
            <div key={price.id}>
              {price.date} - {price.price}
            </div>
          ))}
        </div>
      </>
    );
  }

  return <>{isLoader ? showProduct() : <Loader />}</>;
}
