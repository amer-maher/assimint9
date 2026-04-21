import { useState } from "react";
import ServicesSection from "../../components/ServicesSection/ServesSection";
const Home = () => {
    const [name,setName]= useState("");
    const handelInput=(am)=>{
        setName(am.target.value)
    }
    return (
    <>
    <input type="text" 
    value={name} 
    nChange={handelInput} 
     placeholder="Type something..."
    />
        <h1>{name}</h1>
    <ServicesSection/>
    </>)
}

export default Home;