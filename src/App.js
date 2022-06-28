
 import './App.css';
import React,{useState} from 'react';
import AmazonList from './components/AmazonList';
import FlipkartList from './components/FlipkartList'

function App() {
  const [query,setQuery] = useState('')
  return (
    <div className="App">
    <input 
                         type='text' 
                         placeholder='Search mobile'
                          onChange={(e)=>setQuery(e.target.value)} 
                          className='input'/>
     <div className='list'>
    <AmazonList query={query} setQuery={setQuery}/>
     <FlipkartList query={query} setQuery={setQuery}/>
     </div>
    </div>
  );
}

export default App;
