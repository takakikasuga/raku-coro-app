import React,{useState} from "react";
import { Inner } from "../components/inner";
// import {useSelector} from 'react-redux'
import {selectDailyInfection} from '../features/graphs/dailyInfectionSlice'
import {useAppSelector} from '../app/hooks'
import { DailyTotalRadio } from '../components/atoms/DailyTotalRadio';
import { ReChart } from '../components/organisms/ReChart';
import { Prefecture } from '../components/atoms/Prefecture';


const PrefectureDailyInfention = () => {

  const [prefecture,setPrefecture] = useState<string>('1');
  // const [selector,setSelector] = useState(0)
  const [value, setValue] = useState<string>('0');

  const prefecture_daily_infection = useAppSelector(selectDailyInfection)

    console.log('items',prefecture_daily_infection);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue((event.target as HTMLInputElement).value);
    };

    const target_prefecture = prefecture_daily_infection.data.filter((el:any) => el.pref_code == prefecture)
    console.log(target_prefecture);

    // const select_prefecture = (e:any) => setPrefecture(e.target.value)
    // const dayOrTotal = (e:any) => setSelector(e.target.value)
    

  return (
    <>
      {prefecture_daily_infection.status === 'loading' ? 
      <Inner><p>Loading...</p></Inner>
      : (
        <Inner>
          <Prefecture prefecture={prefecture} setPrefecture={setPrefecture} />
          <DailyTotalRadio handleChange={handleChange} value={value} />
          {value === '0' ? (
            <ReChart
              targetPrefecture={target_prefecture}
              dataKey="daily_infection"
              startIndex={target_prefecture.length - 31}
              endIndex={target_prefecture.length - 1}
              value={value}
            >
              日別感染者数
            </ReChart>
          ) : (
            <ReChart
              targetPrefecture={target_prefecture}
              dataKey="total_infection"
              startIndex={0}
              endIndex={0}
              value={value}
            >
              累計感染者数
            </ReChart>
          )}
        </Inner>
      )}
    </>
    
  );
};

export default PrefectureDailyInfention;