import showToast from "@/utils/toast";
import axios from "axios";
import { createContext, useEffect, useMemo, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const [slotPageLocation, setLocation] = useState(null);
    const currencySymbol = "£";
    const backendurl = import.meta.env.VITE_BACKEND_URL;
    const [doctors, setDoctors] = useState([]);
    const [userData, setUserData] = useState(null); // Initialize with `null`

    const getDoctorsList = async () => {
        try {
            const { data } = await axios.get(`${backendurl}/api/doctor/list`);
            if (data.success) {
                setDoctors(data.doctors);
            } else {
                console.error("Failed to fetch doctors list:", data.message);
            }
        } catch (err) {
            console.error(
                "Error fetching doctors list:",
                err.response || err.message
            );
        }
    };

    const getUserData = async () => {
        try {
            const { data } = await axios.get(
                `${backendurl}/api/user/user-profile`,
                {
                    headers: { token },
                }
            );
            if (data.success) {
                setUserData(data.userData);
            } else {
                showToast("error", `Error: ${data.message}`);
            }
        } catch (err) {
            console.error("getUserData failed:", err.response || err.message);
            showToast("error", "Failed to get user data.");
        }
    };

    useEffect(() => {
        getDoctorsList(); // Fetch doctors list only once on mount
    }, []);

    useEffect(() => {
        if (token) {
            getUserData();
        } else {
            setUserData(null); // Reset userData when token is removed
        }
    }, [token]);

    // Sync token with localStorage
    useEffect(() => {
        if (token) {
            localStorage.setItem("token", token);
        } else {
            localStorage.removeItem("token");
        }
    }, [token]);

        const value = useMemo(
            () => ({
                doctors,
                getDoctorsList,
                getUserData,
                userData,
                setUserData,
                currencySymbol,
                backendurl,
                token,
                setToken,
                slotPageLocation,
                setLocation,
            }),
            [
                doctors,
                userData,
                currencySymbol,
                backendurl,
                token,
                slotPageLocation,
                getDoctorsList,
                getUserData,
            ]
        );
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};
