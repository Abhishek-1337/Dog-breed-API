import React, { useEffect, useState } from 'react';
import BreedList from '../BreedList/BreedList';
import styles from './Mainbody.module.css';
import axios from 'axios';
import Dropdown from '../Dropdown/Dropdown';

export default function Mainbody() {
    const [isLoading, setIsLoading] = useState(false);
    const [ddata, setDdata] = useState([]);
    const [arrData, setArrData] = useState([]);
    const [mainBodyFlag, setMainBodyFlag] = useState(false);

    let newData = [];
    const options = {
        method: 'GET',
        url: 'https://dog-breeds2.p.rapidapi.com/dog_breeds',
        headers: {
          'X-RapidAPI-Key': 'f67fd29370msh40c96b525cf9a1ap1a8dbdjsn36c31690b32c',
          'X-RapidAPI-Host': 'dog-breeds2.p.rapidapi.com'
        }
      };
      
      const clickHandler = () => {

      }
    //   const data = axios.request(options)
    useEffect(()=>{
        axios.request(options).then(function (response) {
            const data = response.data;
            newData = data.slice(0,15).map((item)=>{
                return {
                    id:item.id,
                    breed: item.breed,
                    origin: item.origin,
                    url: item.url,
                    img : item.img
                }
            });
            const dropdownData = data.slice(15, 40).map((item)=>{
                return item.breed;
            })
            setDdata(dropdownData);
            setArrData(newData);
            setIsLoading(true);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])
  return (
        <main>
            <div className={styles.main}>
                <h1 className={styles['header-title']}>Dog breeds</h1>
                <Dropdown data={ddata}/>
                { mainBodyFlag && isLoading && <BreedList data={arrData}/> }
                <div>Hello</div>
                { !isLoading && <p>Loading...</p>}
            </div>
        </main>
  )
}
