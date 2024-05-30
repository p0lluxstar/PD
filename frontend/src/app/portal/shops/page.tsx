'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '@/src/components/Loader';
import { loaderActions } from '@/src/redux/slices/loaderSlice';
import { type IShop, type IStoreReducer } from '@/src/types/interfaсes';
import styles from '../../../styles/pages/shops.module.scss';

export default function ShopsPage(): JSX.Element {
  const dispatch = useDispatch();
  const isLoader = useSelector((state: IStoreReducer) => state.loader);
  const [shops, setShops] = useState<IShop[]>([]);

  const fetchData = async (): Promise<void> => {
    try {
      dispatch(loaderActions.setLoader(true));

      const response = await fetch('http://localhost:4000/shops');

      //  'http://localhost:4000/prices-shop-0001/filter?productId=product-0001'

      const result: IShop[] = await response.json();

      setShops(result);
      dispatch(loaderActions.setLoader(false));
    } catch (error) {
      console.error('err');
      dispatch(loaderActions.setLoader(false));
    }
  };

  useEffect(() => {
    void fetchData();
  }, []);

  function showShops(): JSX.Element {
    return (
      <>
        <h1>Shops</h1>
        <div className={styles.shops}>
          {shops.map((shop) => (
            <Link href={`/portal/shops/${shop.id}`} key={shop.id}>
              <div className={styles.shop}>
                <Image src={`/img/shops/${shop.id}.jpg`} width={200} height={100} alt="shop" />
                <div className={styles.name}>{shop.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  }

  return <>{isLoader ? <Loader /> : showShops()}</>;
}
