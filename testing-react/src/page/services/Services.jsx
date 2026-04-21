import { useParams } from "react-router-dom";
const Services=()=>{
const {id} = useParams();
return(
    <>
     <h1>Service Details for ID: {id}</h1>
    </>
)

}
export default Services;