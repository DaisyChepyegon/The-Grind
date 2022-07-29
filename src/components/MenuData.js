import React from 'react'
import Menu from './Menu/Menu'

function MenuData({menus}) {
  return (
    <div className='container'>
    {menus.map((menu) => (
      <Menu 
        key={menu.id}
        name={menu.name}
        image={menu.image}
        description={menu.desc}
      />
    ))}
     
    </div>
  )
}

export default MenuData
