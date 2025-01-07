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
    const getDoctorsList = async () => {
        try {
            const { data } = await axios.get(`${backendurl}/api/doctor/list`);

            setDoctors(data.doctors);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getDoctorsList();
    }, []);

    const value = {
        doctors,
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
