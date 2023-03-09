import React, { useEffect, useState } from 'react';
import styles from './Dropdown.module.css';
import DropdownItem from './DropdownItem';
import axios from 'axios';

export default function Dropdown({data}) {
  const [value, setValue] = useState('Dog breed');
  const [active, setActive] = useState(false);

  useEffect(()=>{
    if(value !== 'Dog breed'){
        console.log('Hello');
        const options = {
            method: 'GET',
            url: 'https://dog-breeds2.p.rapidapi.com/dog_breeds/breed/Cretan%20Hound',
            headers: {
              'X-RapidAPI-Key': 'f67fd29370msh40c96b525cf9a1ap1a8dbdjsn36c31690b32c',
              'X-RapidAPI-Host': 'dog-breeds2.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data);
          }).catch(function (error) {
              console.error(error);
          });
    }
  }, [value]);
  return (
    <div className={styles.dropdown}>
      <button class="link"       
      onClick={()=>{setActive(!active)}}
      >{value}</button>
      <div className={`${styles['dropdown-menu']} ${active ? styles.active : ''}`}>
        {
            data.map((item)=>{
                return (<DropdownItem data={item} setValue={setValue}/>);
            })
        }
          
      </div>
    </div>
  )
}
