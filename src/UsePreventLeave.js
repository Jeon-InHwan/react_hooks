

const usePreventLeave = () => {
    
    const listener = (event) => {
        event.preventDefault();
        event.returnValue = "";
    }

    const enablePrevent = () => {
        window.addEventListener("beforeunload", listener);
    }

    const disablePrevent = () => {
        window.removeEventListener("beforeunload", listener);
    }

    return {enablePrevent, disablePrevent};
}


const UsePreventLeave = () => {

    const {enablePrevent, disablePrevent} = usePreventLeave();

    return (
        <div>
            <hr />
            <button onClick={enablePrevent}>Protect</button>
            <button onClick={disablePrevent}>Unprotect</button>
        </div>
    );
}

export default UsePreventLeave;