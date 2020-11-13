import React, {useState}from 'react';

function ClickCountButton(){
   const  state = useState(0);
   const count= state[0];
   const setCount = state[1];




        return(
            <button onClick={()=> setCount(count + 1)}> You have clicked {count} times </button>
        );
    }




export default ClickCountButton;