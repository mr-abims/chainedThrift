import React from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { NavLink } from 'react-router-dom'

const AppSideDrawer = ({navData, open, toggleDrawer}) => {

  return (
    <Drawer
      open={open}
      onClose={toggleDrawer}
      direction='right'
    >
      <div
        className= "bg-gray-10 dark:bg-gray-8 h-full py-9 px-6"
      >
        <nav className="">
          {navData.map((item, index) => {
              return (
                <NavLink
                  key={index}
                  className={({isActive}) =>  `block font-Poppins text-base my-6 font-extrabold cursor-pointer dark:text-white-1 text-dark-1 ${isActive && " border-b-black dark:border-b-white-1 border-b-2"}`}
                  to = {item.link}
                  onClick = {toggleDrawer}
                >
                  {item.value}
                </NavLink>
              );
            })}
        </nav>
      </div>
    </Drawer>
  )
}

export default AppSideDrawer