import { useCallback } from "react";
import { useEffect } from "react/cjs/react.development";


const useBeforeLeave = (onBefore) => {


    const handle = useCallback((event) => {

        // 마우스 포인터가 위로만 벗어났을 때 작동하도록 하는 코드
        const {clientY} = event;
         if(clientY <= 0) {
            onBefore();
         }
         
    }, [onBefore])

    useEffect(() => {
        
        document.addEventListener("mouseleave", handle);
        return () => {
            document.removeEventListener("mouseleave", handle);
        }
    }, [handle]) ;

    if(typeof onBefore !== "function") {
        return;
    }

}


const UseBeforeLeave = () => {

    const begForLife = () => {
        console.log("please don't leave!");
    }

    useBeforeLeave(begForLife);

    return (
        <div>
            <hr />
            <h1>UseBeforeLeave</h1>
        </div>
    );

}

export default UseBeforeLeave;