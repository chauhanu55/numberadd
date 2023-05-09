import React, {useEffect, useState} from 'react'


function Numberadd() {
    const [num,setNum]= useState(
        sessionStorage.getItem("Number")!==null? JSON.parse(sessionStorage.getItem("Number")
        ):0
    )
        useEffect(()=>{setNum(num+1)},[]);
        sessionStorage.setItem("Number", num)


  return (
    <h1>{num}</h1>
  )
}

export default Numberadd