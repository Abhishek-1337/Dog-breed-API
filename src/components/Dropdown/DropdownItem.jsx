import React from 'react'

export default function DropdownItem({data, setValue}) {

  const clickHandler = (e) => {
    console.log(e.target.innerText);
    setValue(e.target.innerText);
  }
  return (
    <div onClick={clickHandler}>{data}</div>
  )
}
