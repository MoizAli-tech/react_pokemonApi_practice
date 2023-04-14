import { useState,useEffect ,useRef,useSearchParams} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg';
import axios from "axios";
import Card from './Card.jsx';
import Err from "./Err.jsx"
import './App.css'

function App() {

  let [prm,setPrm] = useState("");
  let [data,setData] = useState({});
  let [error,setError]=useState(false);
  let [option,setOption] = useState("name");

 




  async function searchHandler(){
      try{
        let res ;

          switch(option){
            case "name":
              res= await axios.get(`https://pokeapi.co/api/v2/pokemon/${prm}`);
              let {name,types,abilities,sprites} = res.data;
              setData({name,types,abilities,sprites});
              break;
            // case "type":
            //   res = await axios.get(`https://pokeapi.co/api/v2/type/${prm}`);
            //   break;
            // case "ability":
            //   res = await axios.get(`https://pokeapi.co/api/v2/ability/${prm}`);
            //   break;
            // default:
            //   res={};

          }
        
          setError(false);
        
        }catch(error){
          console.log(error)
          if(error?.response?.status == 404){
            setError(true);
            
          }
          
        } 
        
       
  }


 


  return (
    <div  className=' app border-box flex flex-col justify-center align-center py-4'>

          
         
        <div className=' main shadow-gray-500 shadow-md border-2 w-2/3 mx-auto border-cyan-700 text-center p-8'>
          {error?  <Err/>:data.name? <Card data={data}/>:<></>}
          
          <div>
              <h1 className='text-cyan-700 text-base md:text-xl my-2 '>Enter name of the pokemon </h1>
              <input className='w-3/4 px-1 py-1 text-sm md:text-lg rounded-tl-lg  border-2 border-cyan-500 outline-none' type="text" name="name" placeholder="enter name" value={prm} onChange={(e)=>{setPrm(e.target.value.toLowerCase())}}/> 
              
              <select className='my-2 px-2 py-2  text-sm md:text-base  outline-none' value ={option} onChange={(e)=>setOption(e.target.value)}>
                <option value="type">Type</option>
                <option  value="name">Name</option>
                <option value="ability">Ability</option>
              </select>
              
              <button className="my-2 mx-1 px-2 py-1 text-sm md:text-base rounded border-2 border-cyan-500 bg-cyan-500 text-white hover:bg-transparent hover:text-cyan-700"
              onClick={searchHandler}>Search</button>
          </div>
        </div>
          
          
       
    </div>

    
  )
}

export default App
