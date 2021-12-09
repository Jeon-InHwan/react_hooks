

const useNotification = (title, options) => {

    // 운영체제가 window가 아니라면 Notification이 없으므로, 멈춰야 한다!
    if(!("Notification" in window)) {
        return;
    }

    const fireNotification = () => {
        if(Notification.permission !== "granted") {
            // Notification을 위한 권한 요청
            Notification.requestPermission().then(permission => {
                if(permission === "granted") {
                    new Notification(title, options);
                } else {
                    return;
                }
            })
        } else {
            new Notification(title, options);
        }
    }

    return fireNotification;
}


const UseNotification = () => {

    const triggerNotification = useNotification("Would you allow this processs?", {body: "NO WAY!"});

    return(
        <div>
            <hr />
            <h2>This is Use Notification</h2>
            <button onClick={triggerNotification}>Ask for Notification</button>
        </div>
    );

}

export default UseNotification;