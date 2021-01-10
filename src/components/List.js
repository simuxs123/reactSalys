import React, {useState,useEffect} from 'react'
import Pagination from './Pagination'
import {useFetch} from '../fetch/useFetch'
import SingleCountry from './SingleCountry'
function List({fetchUrl,search}) {   
    const [filteredCountries, setFilteredCountries]=useState([]);
    const {countries,isLoading}=useFetch(fetchUrl); // siunciam filtravimo url i custom hook 
    const [currentPage,setCurrentPage]=useState(1); 
    const [countriesPerPage]=useState(12);
    const indexOfLastPost=currentPage*countriesPerPage;
    const indexOfFirstPost=indexOfLastPost-countriesPerPage;
    const currentCountries=filteredCountries.slice(indexOfFirstPost,indexOfLastPost); //pasidarome 10 saliu sarasa kiekvienam paspaustam puslapiui
    useEffect(()=>{ // filtruojame salis pagal paieskos laukeli
        setCurrentPage(1);
        setFilteredCountries(countries.filter(country=>{
            return country.name.toLowerCase().includes(search.toLowerCase());
        }))
    },[search,countries])
    const paginate = (pg)=>{ //paspausto puslapio numeris
        console.log("labas")
          setCurrentPage(pg);
    }
    
    if (isLoading){
        return <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;
    }
    return (
        <div >
            <div className="row">
                {currentCountries.map((e)=> <SingleCountry key={e.numericCode} {...e}/>)} {/* Tvarkome kiekviena sali */}                  
            </div>
            <Pagination currentPage={currentPage} countriesPerPage={countriesPerPage} totalCountries={filteredCountries.length} paginate={paginate}/>
        </div>
    )
}
export default List
