import React, { useState, useEffect } from "react";

export default function Clock() {

const [hora, sethora] = useState(new Date() )

const tick = () =>{
 sethora(new Date())
}

useEffect(() => {
  setInterval(() => tick(), 1000)
}, [])

  return (
    <div>
       <div>
        <h1>{hora.toLocaleTimeString()}</h1>
      </div>
    </div>
  )
}
