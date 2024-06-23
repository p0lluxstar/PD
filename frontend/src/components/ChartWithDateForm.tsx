import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import useFetchChart from '../hooks/useFetchChart';
import getCurrentAndLastDateFormatted from '../utils/getCurrentAndLastDateFormatted';
import transformDataForChart from '../utils/transformDataForChart';
import ChartLine from './ChartLine';
import DateInputForm from './DateInputForm';
import Loader from './Loader';

interface IParams {
  shop: string;
  category: string;
  product: string;
}

const API_HOST = process.env.NEXT_PUBLIC_API_HOST;

export default function ChartWithDateForm(): JSX.Element {
  const params = useParams() as unknown as IParams;
  const [fetchTrigger, setFetchTrigger] = useState(0);
  const [urlsChart, setUrlsChart] = useState<string[]>([]);

  const dates = getCurrentAndLastDateFormatted();
  const getDateFormLS = localStorage.getItem('dateForm');
  const datesFromLS =
    getDateFormLS != null
      ? JSON.parse(getDateFormLS)
      : {
          startDate: dates.startDate,
          endDate: dates.endDate,
        };

  useEffect(() => {
    const createUrlsChart = (startDate: string, endDate: string): void => {
      const baseUrlsChart = [
        `${API_HOST}/prices-${params.shop}/filter?productId=${params.product}&startDate=${startDate}&endDate=${endDate}`,
      ];

      setUrlsChart(baseUrlsChart);
    };

    createUrlsChart(datesFromLS.startDate, datesFromLS.endDate);
  }, [fetchTrigger]);

  const { dataChart, isLoaderChart } = useFetchChart(urlsChart);

  const [pricesProductResult = []] = dataChart;

  const handleUpdateData = (): void => {
    setFetchTrigger((prev) => prev + 1);
  };

  console.log('dataChart', dataChart);

  const renderCharts = (): JSX.Element => {
    const chartData = transformDataForChart(pricesProductResult);
    return (
      <>
        {isLoaderChart ? <ChartLine date={chartData.date} price={chartData.prices} /> : <Loader />}
        {/* <ChartLine date={chartData.date} price={chartData.prices} /> */}
      </>
    );
  };

  return (
    <>
      <DateInputForm
        startDateProps={datesFromLS.startDate}
        endDateProps={datesFromLS.endDate}
        onUpdateData={handleUpdateData}
      />
      {renderCharts()}
    </>
  );
}
