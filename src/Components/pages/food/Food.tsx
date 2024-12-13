import React from 'react'
import styles from './Food.module.css'
import { foods} from './Cuisine'
import { FoodElement } from 'Components/ui/foodElement/FoodElement'

export const Food = () => {
  return (    
    <div className={styles.container}>
        <div className={styles.grid}>
            {
                foods.map((food, index)=>(
                    <FoodElement
                    key={index}
                    cuisine={food.cuisine}
                    url={food.url}
                    description={food.description}/>
                ))
            }
        </div>
    </div>
  )
}
