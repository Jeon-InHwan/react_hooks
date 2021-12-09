import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const useScroll = () => {
   
    const [state, setState] = useState({
        x: 0,
        y: 0
    });

    useEffect(() => {
        window.addEventListener("scroll", ()=>{setState({y: window.scrollY, x: window.scrollX})});
        window.removeEventListener("scroll", ()=>{setState({y: window.scrollY, x: window.scrollX})});
    }, []);

    return state;
}


const UseScroll = () => {

    const {y} = useScroll();

    return (
        <div style={{height: "1000vh"}}>
            <hr />
            <h2 style={{position: "fixed", bottom: "0px", color: y > 100 ? "red" : "blue"}}>This is for UseScroll</h2>
        </div>
    );

}


export default UseScroll;