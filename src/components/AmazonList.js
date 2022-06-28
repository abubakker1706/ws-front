import React,{useState,useEffect} from 'react'
import DataItem from './DataItem'
import './DataList.css'



const AmazonList=({query,setQuery})=>{


                         const [data,setData] = useState([])

                         
                         
                         const getData = () =>{
                                                 
                                                  fetch(`http://localhost:5001/data?q=${query}`)
                                                  .then(data =>data.json())
                                                  .then((product) =>setData(product))
                         
                         }
                         
                         useEffect(getData,[query]);
                            
                         return(
                         <div>
                         
                        
                         {data.map((datas)=>{
                                                  return(
                                                  <div>
                                                  
                                                  
                                                  <DataItem
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

export default AmazonList;
