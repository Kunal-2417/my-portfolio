import { motion } from "framer-motion"

//variants
const stairAnimation ={
    initial:{
        top:"0%",
    },
    animate:{
        top:"100%",
    },
    exit:{
        top:["100%","0%"],
    },

};


//calculate reverse index fir staggered delay 

const reverseindex=(index)=>{
    const totalSteps=6;
    return totalSteps -index -1;
}
const Stairs = () => {
  return (
    <>
    {/* render 6 motion divs,each representing a step of the stairs 
    
    Each div will have the same animation  defined  by the stairanimation objects .
    the delay for each div is calulated dynamicaly based on it 's reverseindex ,
    creating a staggered effect with decreasing delay for each subsequents step. 
    
    
    */}
    
    {[...Array(6)].map((_,index)=>{
       return (
           
           <motion.div key={index} variants={stairAnimation} initial="initial" animate="animate" exit="exit"
           transition={{
               duration:0.4,
               ease:'easeInOut',
               delay:reverseindex(index)*0.1,
            }}
            className="h-full w-full bg-white relative"/>
        );
    })}
    </>
  )
}

export default Stairs