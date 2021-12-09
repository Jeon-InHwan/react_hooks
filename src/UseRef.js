import React, {useRef} from "react";
import { useEffect } from "react/cjs/react.development";


const UseRef = () => {

    const reference = useRef();

    useEffect(() => {
        setTimeout(() => {
            reference.current.focus()
        }, 2000)
    }, []);
    

    return (
        <div>
            <hr />
            <h1>This is useRef()</h1>
            <input ref={reference} placeholder="하하하" />
        </div>
    );

}

export default UseRef;
