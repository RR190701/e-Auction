import {useState, useEffect} from 'react';
import axios from 'axios';
const PrivateScreen = ({history}) => {
    const [error, setError] = useState("");
    const [privateData, setPrivateData] = useState("");
useEffect(() => {
    if(!localStorage.getItem("authToken")){
        history.push("/log-in")
    }
    const fetchPrivateData = async () => {
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("authToken")}`
            },
        };
        try{
            const {data} = await axios.get("/api/private", config);
            setPrivateData(data.data)
             
        }catch (error) {
            localStorage.removeItem("authToken");
            setError('not authorized')
        }
    }
    fetchPrivateData();
},[history]);
return (
    error ? (  <span className="error-message">{error}</span>
) : (
    <>
<div style={{backgroundColor: "green"}}>{privateData}</div>
    </>
)
);
}
export default PrivateScreen;