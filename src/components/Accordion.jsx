import { useState } from "react";
import {ChevronDownIcon} from "@heroicons/react/24/outline";

const data=[
    {
        id:1,
        title:"Accordion one",
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sunt. "
    },
    {
        id:2,
        title:"Accordion two",
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sunt. "
    },
    {
        id:3,
        title:"Accordion three",
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sunt. "
    }
];

function Accordion() {

    const[open,setOpen]=useState(null);

  return (
    <div className="accordion">
   {
    data.map((item)=> <AccordionItem 
    key={item.id} 
    id={item.id}
    title={item.title}
    setOpen={setOpen}
    open={open}>{item.text}</AccordionItem>)
   }
   <AccordionItem 
   id={4} 
    title="Another Accordion"
    setOpen={setOpen}
    open={open}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laboriosam, distinctio modi sint neque doloribus temporibus nostrum minus debitis? Obcaecati!</p>
    <ul>
        <li>one</li>
        <li>two</li>
    </ul>
    </AccordionItem>
    </div>
  )
}

export default Accordion;


function AccordionItem({id,title,setOpen,open,children}){

    //const [isOpen,setIsOpen]=useState(false);
 const isOpen = id===open;

    return(
        <div className={`accordion-item ${isOpen ? "accordion__expanded" : ""}`}>
        <div className='accordion-item__header' 
        onClick={()=>setOpen(open===id ? null : id)}>
            <div>{title}</div>
            <ChevronDownIcon style={
                {
                    width:"1.2rem",
                    transition:"all 0.2s ease-out",
                    rotate:isOpen ? "180deg" : "0deg" ,
                }
            }/>
        </div>
        <div className="accordion-item__content">{children}</div>
        </div>
    )
}