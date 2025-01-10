import showToast from "@/utils/toast";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const [token, setToken] = useState(
        localStorage.getItem("token") ? localStorage.getItem("token") : ""
    );
    const currencySymbol = "£";
    const backendurl = import.meta.env.VITE_BACKEND_URL;
    const [doctors, setDoctors] = useState([]);
    const [userData, setUserData] = useState(false);
    const getDoctorsList = async () => {
        try {
            const { data } = await axios.get(`${backendurl}/api/doctor/list`);
            if (data.success) {
                setDoctors(data.doctors);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const getUserData = async () => {
        try {
            const { data } = await axios.get(
                `${backendurl}/api/user/user-profile`,
                {
                    headers: {
                        token,
                    },
                }
            );
            if (data.success) {
                setUserData(data.userData);
            } else { 
                showToast("error", data.message);
            }
        } catch (err) {
            showToast('error', 'Failed to get user data')
        }
    };
    useEffect(() => {
        getDoctorsList();
    }, []);

     useEffect(() => {
         if (token) {
             getUserData();
         } else { 
             setUserData(false)
         }      
     }, [token]);

    const value = {
        doctors,
        userData,
        setUserData,
        currencySymbol,
        backendurl,
        token,
        setToken,
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};
