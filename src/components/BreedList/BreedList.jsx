import React from 'react'
import styles from './BreedList.module.css';

export default function BreedList({data}) {
    console.log(data);
  return (
    <React.Fragment>
        {
            data.map((item)=>{
                return (
                    <div className={styles.card}>
                        <img src={item.img} />
                        <div className={styles['breed-info']}>
                            <div><span>Breed name : </span>{item.breed}</div>
                            <div><span>Breed origin : </span>{item.origin}</div>
                            <div><a href={item.url}>More info</a></div>
                        </div>
                    </div>
                );
            })
        }
    </React.Fragment>
  )
}
