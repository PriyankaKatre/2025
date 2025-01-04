import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [state, setState] = useState("Admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onInputChangeHandler = (e) => {
    let { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  console.log("user", user);

  const submitHandler = (e) => {
    e.preventDefault();
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
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Email</Label>
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
