import React from 'react'
import styles from './FoodElement.module.css'

export interface ICuisine{
  cuisine: string,
  url: string,
  description: string
}

export const FoodElement = ({cuisine, url, description}: ICuisine) => {
  return (
    <div className={styles.element}> 
        <h1>{cuisine}</h1>
        <img src={url} alt="there should be photo of the cuisine"  className={styles.photo} width={300}/>
        <h3 className={styles.description}>{description}</h3>
    </div>
  )
}
