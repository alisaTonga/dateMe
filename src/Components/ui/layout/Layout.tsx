import React from 'react'
import styles from './Layout.module.css'
import { Header } from '../header/Header'
import { Food } from 'Components/pages/food/Food'
export const Layout = () => {
  return (
    <div>
        <Header />
        <div className={styles.body}>
        <Food />
        </div>
    </div>
  )
}
