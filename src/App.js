import React,{useState} from 'react'
import requests from './fetch/Request'
import List from './components/List'
import './App.css';

function App() {
    const [filter,setFilter]=useState(requests.fetchAll);
    const [search, setSearch]=useState("");
    const handleBtn=(e)=>{
      setFilter(e.target.value);
      setSearch("")
    }
  return (
    <div  className="container text-center text-white">
      <h1>Countries list</h1>
      <div className="row justify-content-center">
        <div className="col-12 col-md-11 col-lg-9">
          {<input type="text" className="form-control" placeholder="Country" value={search} onChange={(e)=>setSearch(e.target.value)}/>} {/* salies paieska vedant raides */}
          <div className="my-3">
            <button className="btn btn-primary m-2" value={requests.fetchAll} onClick={handleBtn }>All</button>{/* mygtukai filtravimui pagal regionus,paspaudus mygtuka value yra tam tikro regiono URL kuris veliau siunciamas axios ir is ten paimami duomenis */}
            <button className="btn btn-primary m-2" value={requests.fetchEurope} onClick={handleBtn}>Europe</button>
            <button className="btn btn-primary m-2" value={requests.fetchAsia} onClick={handleBtn}>Asia</button>
            <button className="btn btn-primary m-2" value={requests.fetchOceania} onClick={handleBtn}>Oceania</button>
            <button className="btn btn-primary m-2" value={requests.fetchAmericas} onClick={handleBtn}>Americas</button>
            <button className="btn btn-primary m-2" value={requests.fetchAfrica} onClick={handleBtn}>Africa</button>
          </div>
        </div>
      </div>
      <List fetchUrl={filter} search={search}/> {/* einam i saliu lista, siunciam paieska ir filtravimo URL */}
    </div>
  );
}

export default App;
