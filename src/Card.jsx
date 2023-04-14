import React from 'react';
import"./card.css";

const Card = ({data}) => {
    
  return (
    <div className='card mx-auto '>
        <h1 className='bg-cyan-700 text-white text-base md:text-xl py-2 rounded'>My name is {data?.name}</h1>
        <div className='grid  gap-x-3 sm:grid-cols-1 sm:mx-auto sm:grid-rows-1 md:grid-cols-4 md:grid-rows-1 lg:grid-cols-3 lg:grid-rows-1 py-4' >
            <img src={ `${data.sprites.front_default}`}
                 className='mini-cards   w-2/3 justify-self-center md:col-span-4 lg:col-span-1 '
            />
  
                    <div className='mini-cards  w-full  md:col-span-2 justify-self-center  lg:col-span-1 h-fit  bg-cyan-600 mx-4 my-4 md:my-0 text-white roundex p-4'>
                        <p>Abilities</p> 
                        {data?.abilities?.map((item,i)=>{
                            
                            
                            return(
                            
                        
                                <li className="text-sm md:text-base" key={i}>{item?.ability?.name}</li>
                            
                            )
                    
                        })}
                    </div>

                    <div className='mini-cards  w-full md:col-span-2  lg:col-span-1 justify-self-center h-fit bg-cyan-600 mx-4  text-white roundex p-4'>
                        <p>Types</p> 
                        {data?.types?.map((item,i)=>{
                            
                            
                            return(
                            
                        
                                <li className="text-sm md:text-base" key={i}>{item?.type?.name}</li>
                            
                            )
                    
                        })}
                    </div>

        </div>
    </div>

  )
}

export default Card