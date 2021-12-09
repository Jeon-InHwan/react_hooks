import React, {useEffect, useRef} from "react";

// element가 Clcik 되었을 때 작동하는 Function
const useClick = (onClick) => {

    const element = useRef();

    useEffect(() => {

        let elementRefValue = null;

        if(element.current) {
            element.current.addEventListener("click", onClick)
            elementRefValue = element.current;
        }

        return () => {
            if(elementRefValue) {
                elementRefValue.removeEventListener("click", onClick)
            }
        } 

    }, [onClick]);

    if(typeof onClick !== "function") {
        return;
    }

    return element;

}

const UseClick = () => {

    const sayHello = () => console.log("holly molly");
    const title = useClick(sayHello);

    return (
        <div>
            <h1 ref={title}>Hi and Click Me!</h1>
        </div>
    );

}

export default UseClick;