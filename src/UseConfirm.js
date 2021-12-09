const useconfirm = (message = "", callback, rejection) => {

    if(typeof callback !== "function") {
        return;
    }

    if(typeof rejection !== "function") {
        return;
    }

    const confirmAction = () => {
        if(window.confirm(message)) {
            callback();
        } else {
            rejection();
        }
    }

    return confirmAction;
}


const UseConfirm = () => {

    const deleteWord = () => {
        console.log("Deleting the word");
    }

    const abort = () => {
        console.log("Aborted");
    }

    const confirmDelete = useconfirm("Are you sure?", deleteWord, abort);

    return(
        <div>
            <hr />
            <button onClick={confirmDelete}>Delete the Word</button>
        </div>
    );

}

export default UseConfirm;