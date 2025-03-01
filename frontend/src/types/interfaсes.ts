export interface IDataFromDB {
  id: string;
  name: string;
  shopName: string;
  price: string;
  date: string;
  category_id: {
    id: string;
    name: string;
  };
}

export interface IDataChartFromDB {
  date: string;
  price: number;
}

export interface IStoreReducer {
  loader: boolean;
  loaderChart: boolean;
  shops: object;
}

export type TFetchData = IDataFromDB[];

export interface IFetchData {
  data: TFetchData[];
  isLoading: boolean;
  isError?: boolean;
}
export type TFetchChartData = IDataChartFromDB[];

export interface IFetchDataChart {
  dataChart: TFetchChartData[];
  isLoaderChart: boolean;
}

export interface Dates {
  startDate: string;
  endDate: string;
}

export interface ITransformedDataForChart {
  date: string[];
  prices: number[];
}

export interface IDatesFromLS {
  startDate: string;
  endDate: string;
}

export interface IProductDataForChart {
  id: string;
  date: string;
  price: string;
  name?: string;
}

export interface IShop {
  id: string;
  name: string;
}
