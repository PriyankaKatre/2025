import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AppContext } from "@/context/appContext";
import showToast from "@/utils/toast";
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [state, setState] = useState("Sign Up");
    const { backendurl, setToken, location } =
        useContext(AppContext);
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });
console.log("location", location);
    const onInputChangeHandler = (e) => {
        let { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            if (state === "Sign Up") {
                const response = await axios.post(
                    `${backendurl}/api/user/register`,
                    user
                );
                if (response?.data.success && response.status === 201) {
                    setToken(response?.data.token);
                    localStorage.setItem("token", response?.data.token);
                    showToast("success", response?.data?.message);
                }
            } else {
                const response = await axios.post(
                    `${backendurl}/api/user/login`,
                    { email: user.email, password: user.password }
                );
                if (response?.data.success) {
                    setToken(response?.data.token);
                    localStorage.setItem("token", response?.data.token);
                    showToast("success", response?.data?.message);                   
                }
            }
        } catch (err) {
            if (
                err.response &&
                err.response.data &&
                err.response.data.message
            ) {
                showToast(
                    "error",
                    err.response.data.message ||
                        "An error occurred during login."
                );
            } else {
                showToast(
                    "error",
                    err.message || "An error occurred during login."
                );
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <Card className="w-full max-w-[400px]">
                <CardHeader>
                    <CardTitle className="text-xl font-semibold">
                        {state === "Sign Up" ? "Create Account" : "Login"}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                        Please
                        {state === "Sign Up" ? "Create Account" : "Login"} to
                        book appointment
                    </p>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4" onSubmit={submitHandler}>
                        {state === "Sign Up" ? (
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input
                                    id="name"
                                    type="name"
                                    placeholder="Name"
                                    name="name"
                                    value={user.name}
                                    required
                                    onChange={(e) => onInputChangeHandler(e)}
                                />
                            </div>
                        ) : (
                            ""
                        )}
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={user.email}
                                required
                                onChange={(e) => onInputChangeHandler(e)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                value={user.password}
                                placeholder="Password"
                                required
                                onChange={(e) => onInputChangeHandler(e)}
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full bg-teal-600 hover:bg-teal-500"
                        >
                            {state === "Sign Up" ? "Sign Up" : "Login"}
                        </Button>
                        <div className="text-sm text-center">
                            {state === "Sign Up" ? (
                                <p className="text-muted-foreground">
                                    Already have an account?
                                    <span
                                        className="text-teal-600 font-bold ml-1 cursor-pointer"
                                        onClick={() => setState("Login")}
                                    >
                                        Login
                                    </span>
                                </p>
                            ) : (
                                <p className="text-muted-foreground">
                                    Create a new account?
                                    <span
                                        className="text-teal-600 font-bold ml-1 cursor-pointer"
                                        onClick={() => setState("Sign Up")}
                                    >
                                        Sign Up
                                    </span>
                                </p>
                            )}
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
