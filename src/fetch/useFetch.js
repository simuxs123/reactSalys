import {useState,useEffect} from 'react'; 
import axios from './axios'
export const useFetch=(fetchUrl)=>{   //custom hook

    const [isLoading,setIsLoading]=useState(false); 
    const [countries, setCountries]=useState([]);
    useEffect(()=>{
        setIsLoading(true);
        async function fetchData(){
            const request=await axios.get(fetchUrl)
            setCountries(request.data)
            setIsLoading(false);
        }
        fetchData();
    },[fetchUrl])
    return {countries,isLoading};
}