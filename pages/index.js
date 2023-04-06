import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import useCounter from '@/hooks/calculation'
import { useState, useEffect } from 'react';
import Menu from '@/components/Menu'

export default function Home() {

  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setLeft(window.innerWidth * 0.9);
    setTop(window.innerHeight * 0.1);
  }, [])

  // onKeyDown handler function
  const keyDownHandler = (event) => {
    console.log(event.code);
    if (event.code === "ArrowUp") {
      setTop((top) => top - 10);
    }

    if (event.code === "ArrowDown") {
      setTop((top) => top + 10);
    }

    if (event.code === "ArrowLeft") {
      setLeft((left) => left - 10);
    }

    if (event.code === "ArrowRight") {
      setLeft((left) => left + 10);
    }
  };

  let {counter, add} = useCounter();

  return (
    <>
      <Head>
        <title>Week 14 In Class</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.largeContainer}>

          <div className={styles.imageContainer}>
            <Image src="/images/bcit-building.png" width={550} height={800} />
            <p>&copy; Aaron Tripp</p>
          </div>
          
          <div className={styles.smallContainer}>
            <div className={styles.titleContainer}>
              <p>EDUCATION FOR A COMPLEX WORLD</p>
              <p>Your studies, your way</p>
            </div>

            <div className={styles.counterContainer}>
              <button onClick={add} className={styles.add}>Increment</button>
              <p className={styles.counter}>{counter}</p>
            </div>
          </div>

        </div>
        
        <div className={styles.menu}>
          <Menu />
        </div>
        
        <div className={styles.container} onKeyDown={keyDownHandler} tabIndex={0}>
          <div className={styles.moveable} style={{ top: top, left: left }}></div>
        </div>
      </main>
    </>
  )
}