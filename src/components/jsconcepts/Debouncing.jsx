import React, { useState, useEffect, useMemo } from "react";

export default function Debouncing() {
  const [text, setText] = useState("");
  const [debouncedText, setDebouncedText] = useState("");

     

  function debounce(cb,delay=1000){
 let timer;
           return (...args)=>{
           clearTimeout(timer);
          timer= setTimeout(()=>{
              cb(...args)

            },delay)
           }

  }
 
   const updateText=useMemo(()=>  debounce((text)=>{
           setDebouncedText(text);
   }),[])

   useEffect(()=>{
              updateText(text)
   },[text])
        

  //  useEffect(()=>{
  //       const timer=setTimeout(()=>{
  //                setDebouncedText(text);
  //       },500)              

  //   return ()=> clearInterval(timer)
  //  },[text])

  return (
    <div className="p-4">
      <input
        type="search"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        className="border p-2"
      />
      <p>Without Debounced : {text}</p>
      <p className="mt-2">Debounced Value: {debouncedText}</p>
    </div>
  );
}
