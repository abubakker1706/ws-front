import React,{useState,useEffect} from 'react'
import FlipkartDataItem from './FlipkartDataItem'
import './Flipkart.css'


const FlipkartList =({query,setQuery})=>{
  const [flipkartdata,setFlipkartdata] =useState([])
  
  const flipkartData = () =>{
                         fetch(`http://localhost:5001/flipkartdata?q=${query}`)
                          .then(data =>data.json())
                         .then((product) =>setFlipkartdata(product))
                                                    
                         }
useEffect(flipkartData,[query])

return (

 
<div className='container'>




{flipkartdata.map((datas)=>{
                         return(
                         <div>
                         
                         
                         <FlipkartDataItem
                         name={datas.name}
                         price={datas.price}
                         image={datas.image}
                         rating={datas.rating}
                         
                         />
                         </div>
                         
                         )
    })}

</div>
)
}
export default FlipkartList










    

   
    


    