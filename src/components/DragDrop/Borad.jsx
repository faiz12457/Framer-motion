import React, { useState } from 'react'
import Column from './Column';
import BurnBarrel from './BurnBarrel';

const data=[
    { id: 1, title: "Fix the issue where users cannot reset their password via email link", column: "todo" },
    { id: 2, title: "Implement a dark mode toggle feature in the user settings panel", column: "doing" },
    { id: 3, title: "Refactor the authentication module to improve security and performance", column: "done" },
    { id: 4, title: "Optimize API calls to reduce load time and improve user experience", column: "backlog" },
    { id: 5, title: "Fix the issue where users cannot reset their password via email link", column: "todo" },
    { id: 6, title: "Implement a dark mode toggle feature in the user settings panel", column: "doing" },
    { id: 7, title: "Refactor the authentication module to improve security and performance", column: "done" },
    { id: 8, title: "Optimize API calls to reduce load time and improve user experience", column: "backlog" }
  ]
  
function Board() {
    const [cards,setCards]=useState(data);
  return (
    <div className='h-full w-full flex gap-3 p-12 box-border '>
        <Column  cards={cards} setCards={setCards} title='Backlogs' headingColor='text-neutral-500' column='backlog'/>
        <Column  cards={cards} setCards={setCards} title='Todo' headingColor='text-yellow-200' column='todo'/>
        <Column  cards={cards} setCards={setCards} title='In progress' headingColor='text-blue-200' column='doing'/>
        <Column  cards={cards} setCards={setCards} title='Complete' headingColor='text-emerald-200' column='done'/>
        <BurnBarrel  setCards={setCards} />
    </div>
  )
}

export default Board