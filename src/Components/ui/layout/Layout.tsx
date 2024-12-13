import React from 'react'
import styles from './Layout.module.css'
import { Header } from '../header/Header.tsx'
import { Welcome } from '../../pages/welcome/Welcome.tsx'
export const Layout = () => {
  return (
    <div >
        <Header />
        <div classname={styles.body}>
            <Welcome />
        </div>
    </div>
  )
}
