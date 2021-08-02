import { createContext, useEffect, useState } from "react";
import data from './data.json'
export const ProfileContext = createContext();
const ProfileContextProvider = ({children}) => {
    const [formInfo, setFormInfo] = useState(data)

    useEffect(() => {
        setFormInfo(formInfo)
        console.log(formInfo)
    }, [formInfo])
    return(
        <ProfileContext.Provider value={[formInfo, setFormInfo]}>{children}</ProfileContext.Provider>
    )
}
export default ProfileContextProvider;