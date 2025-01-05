import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useContext, useState } from "react";
import axios from "axios";
import { AdminContext } from "@/context/AdminContext";
import { toast } from "sonner";

export default function Login() {
  const [state, setState] = useState("Admin");
  const { setatoken, backendUrl } = useContext(AdminContext);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onInputChangeHandler = (e) => {
    let { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = async (e) => {
    const { email, password } = user;
    e.preventDefault();
    try {
      if (state === "Admin") {
        const { data } = await axios.post(`${backendUrl}/api/admin/login`, {
          email,
          password,
        });
        if (data.success) {
          localStorage.setItem("atoken", data.token);
          setatoken(data.token);
        } else {
          toast.error(data.message || "Login failed.");
        }
      } else {
          //
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        toast.error(
          err.response.data.message || "An error occurred during login."
        );
      } else {
        toast.error(err.message || "An error occurred during login.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-[400px]">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">{state} Login</CardTitle>
          <p className="text-sm text-muted-foreground">
            Please {state === "Sign Up" ? "Create Account" : "Login"} to book
            appointment
          </p>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={submitHandler}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                name="email"
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
              Login
            </Button>
            <div className="text-sm text-center">
              {state === "Admin" ? (
                <p className="text-muted-foreground">
                  Doctor Login?
                  <span
                    className="text-teal-600 font-bold ml-1 cursor-pointer"
                    onClick={() => setState("Doctor")}
                  >
                    Click here
                  </span>
                </p>
              ) : (
                <p className="text-muted-foreground">
                  Admin Login?
                  <span
                    className="text-teal-600 font-bold ml-1 cursor-pointer"
                    onClick={() => setState("Admin")}
                  >
                    Click here
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
