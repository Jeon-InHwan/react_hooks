import defaultAxios from "axios"
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const useAxios = (opts, axiosInstance = defaultAxios) => {
    
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    });

    const [trigger, setTrigger] = useState(0);

    const refetch = () => {
        
        setState({
            ...state,
            loading: true
        });

        setTrigger(Date.now());
    }

    console.log("I'm fetching!");

    useEffect(() => {
        axiosInstance(opts).then(data => {
            setState({
                ...state,
                loading: false,
                data
            });
        }).catch(error => {
            setState({
                ...state,
                loading: false,
                error
            });
        })
    }, [trigger]);

    if(!opts.url) {
        return;
    }

    return {...state, refetch};
}



const UseAxios = () => {

    const {loading, error, data, refetch} = useAxios({url: "https://yts.mx/api/v2/list_movies.json"});

    console.log(`loading: ${loading} \n error: ${error} \n data: ${JSON.stringify(data)}`);

    return(
        <div>
            <hr />
            <h2>This is Use Axios</h2>
            <h3>{data && data.status}</h3>
            <h4>{loading ? "Loading" : "Done"}</h4>
            <button onClick={refetch}>Refetch</button>
        </div>
    );
}


export default UseAxios;