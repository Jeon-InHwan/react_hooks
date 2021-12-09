import { useCallback, useState } from "react";
import { useEffect } from "react/cjs/react.development";


const useNetwork = (onChange) => {

    const [status, setStatus] = useState(navigator.onLine);
    // navigator.onLine은 사용자가 onLine인지를 true 또는 false로 알려줌

    const handleChange = useCallback(() => {

        if(typeof onChange === "function") {
            onChange(navigator.onLine);
        }
        setStatus(navigator.onLine);
         
    }, [onChange])


    useEffect(() => {
        window.addEventListener("online", handleChange);
        window.addEventListener("offline", handleChange);
        return () => {
            window.removeEventListener("online", handleChange);
            window.removeEventListener("offline", handleChange);
        }
    }, [handleChange])

    return status;
}


const UseNetwork = () => {

    const handleNetworkChange = (online) => {
        console.log(online ? "We just went Online!" : "We Are now Offline!");
    }

    const onLine = useNetwork(handleNetworkChange);

    return (
        <div>
            <hr />
            <h1>This is UseNetwork</h1>
            <h3>{onLine ? "Online" : "Offline"}</h3>
        </div>
    );

}


export default UseNetwork;