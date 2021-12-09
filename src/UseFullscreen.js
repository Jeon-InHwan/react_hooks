import { useRef } from "react";


const useFullscreen = (callback) => {

    const element = useRef();

    const triggerFull = () => {
        if(element.current) {
            element.current.requestFullscreen();
            if(callback && typeof callback === "function") {
                callback(true);
            }
        }
    }

    const exitFull = () => {
        document.exitFullscreen();
        if(callback && typeof callback === "function") {
            callback(false);
        }
    }

    return {element, triggerFull, exitFull};
}


const UseFullscreen = () => {

    const onFullS = isFull => {
        console.log(isFull ? "We are full" : "We are small");
    }

    const {element, triggerFull, exitFull} = useFullscreen(onFullS);

    return (
        <div>
            <hr />
            <h2>This is forr Use Full Screen</h2>
            <div ref={element}>
                <img 
                    src="https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    style={{maxWidth: "750px", maxHeight: "500px"}}
                    alt="plz_do_not_disturb"
                ></img>
                <br />
                <button onClick={triggerFull}>Make FullScreen</button>
                <button onClick={exitFull}>Exit FullScreen</button>
            </div>
        </div>
    );
}

export default UseFullscreen;