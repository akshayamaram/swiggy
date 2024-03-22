import { useEffect, useState } from "react"

const useUserStatus = () => {

    const [onlineStaus, setOnlineStatus] = useState(true);
    
    useEffect(() => {
      // Add an event listener when the user is online and the user is offline
      window.addEventListener("offline", () => { 
        setOnlineStatus(false);
      });

      window.addEventListener("online", () => {
        setOnlineStatus(true);
      });
    }, [])

    return onlineStaus; 
}

export default useUserStatus;