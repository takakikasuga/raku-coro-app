import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Router from './Router';

// コンポーネント
import { Header } from './components/header';
import { fetchDailyCoronaAsync } from './features/graphs/dailyCoronaSlice';
import { BedOccupancyRate } from './templates/BedOccupancyRate';

// slice
import { fetchDailyInfectionAsync } from './features/graphs/dailyInfectionSlice';
import { fetchDailyDeadAsync } from './features/graphs/dailyDeadSlice';
import { fetchTotalCoronaAsync } from './features/graphs/totalCoronaSlice';
import { fetchTotalDethAsync } from './features/graphs/totalDethSlice';
import { fetchBedOccupancyRateAsync } from './features/graphs/bedOccupancyRateSlice';




const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDailyInfectionAsync());
    dispatch(fetchDailyDeadAsync());
    dispatch(fetchDailyCoronaAsync());
    dispatch(fetchDailyInfectionAsync());
    dispatch(fetchTotalCoronaAsync());
    dispatch(fetchTotalDethAsync());
    dispatch(fetchBedOccupancyRateAsync());
  }, []);

  return (
    <>
      <Header />
      <Router />
<<<<<<< HEAD
      <BedOccupancyRate />
=======
    
>>>>>>> 04c4a4a0819c091443e251b8664fb225b948d86f
    </>
  );
};

export default App;
