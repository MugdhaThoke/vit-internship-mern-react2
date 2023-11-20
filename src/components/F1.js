import Axios from "axios";
import {useEffect, useState} from "react";    

export function F1()
{

    const [data,setData] = useState([]);//initially empty array

    //HTTP request, we need to place inside the lifecycle method. 
    //But as we are workinf with functional component there is no lifecycle methods
    //Instead we have the concept called Hooks which helps us to handle the HTTP request
    //useEffect() is used to handle the side effects

    useEffect (()=>{
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            if(res.status === 200)//200 - OK 
            {
                setData(res.data);
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    },[])
    
const ListNames = ()=>{
    return data.map((val)=>{
        return <h1>{val.name}</h1>
    })
}

    return(
        <div>
            <h1>Hello</h1>
            {ListNames()}
        </div>
    )
}