/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Product from '../components/Product'
const details=["16 Months","150 Ah@C10","505 x 196 x 412","Solar Tubular ","Image Urja Solar Battery.png"]
const Solarbattery = () => {
  return (
    <Product title={"Solar Battery"} details={details}/>
  )
}

export default Solarbattery