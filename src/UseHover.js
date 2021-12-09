import { useRef } from "react";
import { useEffect } from "react/cjs/react.development";

const useHover = onHover => {
   
    const element = useRef();

    useEffect(() => {

        let elementRefValue = null;
        
        if(element.current) {
            element.current.addEventListener("mouseenter", onHover);
            elementRefValue = element.current;
        }

        return () => {
            if(elementRefValue) {
                elementRefValue.removeEventListener("mouseenter", onHover);
            }
        }
    }, [onHover]);

    if(typeof onHover !== "function") {
        return;
    }

    return element;
}

const UseHover = () => {
    
    const sayName = () => console.log("I'm XXX");
    const btn = useHover(sayName);

    return (
        <div>
            <hr />
            <input type="button" ref={btn} value="Mouse Enter Me!" />
        </div>
    );
}

export default UseHover;