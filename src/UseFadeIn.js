import { useRef } from "react";
import { useEffect } from "react/cjs/react.development";

const useFadeIn = (duration = 1, delay = 0) => {

    const element = useRef();

    useEffect(() => {
        if(element.current) {
            const {current} = element;
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
            current.style.opacity = 1;
        }
    }, [duration, delay])

    return {ref: element, style: {opacity: 0} };

}


const UseFadeIn = () => {

    const fadeInH1 = useFadeIn(2, 4);
    const fadeInP = useFadeIn(5, 6);

    return(
        <div>
            <hr />
            <h1 {...fadeInH1}>UseFadeIn</h1>
            <p {...fadeInP}>something stupid! hahahahaha</p>
        </div>
    );
}


export default UseFadeIn;