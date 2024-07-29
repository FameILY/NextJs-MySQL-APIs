'use client';

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  let [ count, setCount] = useState(1)

  function handler() {
    console.log('clicked')
    setCount(count+1)
  }
  
  return (
    <>
    <button onClick={handler}>Clicked {count} times</button>
    </>
  );
}
