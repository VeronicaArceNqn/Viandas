import React from 'react'
import img from '../images/error404.png'
import { NavLink } from 'react-router-dom'


export default function Error404() {
  return (
    <div>
        <NavLink to='/'>
            <img src={img} alt="" />
        </NavLink>
    </div>
  )
}
