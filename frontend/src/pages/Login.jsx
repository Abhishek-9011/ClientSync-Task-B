import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";

import { login } from "../services/authService";
import { loginSchema } from "../validations/authValidation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const Login = () => {
    const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));

  setErrors((prev) => ({
    ...prev,
    [name]: "",
  }));
};

const handleSubmit = async (e) => {
  e.preventDefault();

  // Validate form
  const result = loginSchema.safeParse(formData);

  if (!result.success) {
    const fieldErrors = {};

result.error.issues.forEach((issue) => {
  fieldErrors[issue.path[0]] = issue.message;
});

setErrors(fieldErrors);
    return;
  }

  setErrors({});
  setIsLoading(true);

  try {
    const response = await login(formData);

    localStorage.setItem("token", response.data.token);

    toast.success("Login successful!");

    navigate("/admin");
  } catch (error) {
    toast.error(error.response?.data?.message || "Login failed");
  } finally {
    setIsLoading(false);
  }
};

  return (
    <div className="min-h-screen w-full bg-white lg:flex">
      {/* Left Section */}
      <div className="flex w-full items-center justify-center px-8 py-12 sm:px-12 lg:w-[55%] lg:px-20">
        <div className="w-full max-w-md">
          {/* Branding */}
          <div className="mb-10 flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="mb-6 flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600 text-lg font-bold text-white shadow-md shadow-orange-200">
                C
              </span>

              <span className="text-2xl font-semibold tracking-tight text-neutral-800">
                Client Sync
              </span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
              Welcome back
            </h1>

            <p className="mt-2 text-sm text-neutral-500">
              Login to continue managing your clients.
            </p>
          </div>

          {/* Login Card */}
          <Card className="rounded-2xl border-orange-100 bg-white shadow-xl shadow-orange-100/40">
            <CardHeader className="space-y-2 pb-6">
              <CardTitle className="text-xl font-semibold text-neutral-800">
                Admin Login
              </CardTitle>

              <CardDescription className="text-neutral-500">
                Sign in with your admin credentials.
              </CardDescription>
            </CardHeader>

            <CardContent className="px-8 pb-8">
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                noValidate
              >
                {/* Email */}
              <div className="space-y-2">
  <Label htmlFor="email">Email</Label>

  <Input
    id="email"
    name="email"
    type="email"
    value={formData.email}
    onChange={handleChange}
    className={`h-12 rounded-lg bg-neutral-50 ${
      errors.email ? "border-red-500" : "border-neutral-200"
    }`}
  />

  {errors.email && (
    <p className="text-sm text-red-500">{errors.email}</p>
  )}
</div>

                {/* Password */}
             <div className="space-y-2">
  <Label htmlFor="password">Password</Label>

  <div className="relative">
    <Input
      id="password"
      name="password"
      type={showPassword ? "text" : "password"}
      value={formData.password}
      onChange={handleChange}
      className={`h-12 rounded-lg bg-neutral-50 pr-12 ${
        errors.password ? "border-red-500" : "border-neutral-200"
      }`}
    />

    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute inset-y-0 right-0 flex w-12 items-center justify-center text-neutral-400 hover:text-orange-600"
    >
      {showPassword ? (
        <EyeOff className="h-5 w-5" />
      ) : (
        <Eye className="h-5 w-5" />
      )}
    </button>
  </div>

  {errors.password && (
    <p className="text-sm text-red-500">{errors.password}</p>
  )}
</div>
                {/* Login Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="h-12 w-full rounded-lg bg-orange-600 text-base font-medium text-white hover:bg-orange-700 active:bg-orange-800 transition-colors"
                >
                  {isLoading ? "Signing in..." : "Login"}
                </Button>

                {/* Back to Home Button */}
                <div className="pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    className="h-11 w-full rounded-lg border-neutral-200 text-neutral-600 hover:bg-orange-50 hover:text-orange-700 hover:border-orange-200 transition-colors"
                    onClick={() => navigate("/")}
                  >
                    ← Back to Home
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <p className="mt-8 text-center text-xs text-neutral-400 lg:text-left">
            © {new Date().getFullYear()} Client Sync. All rights reserved.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative hidden overflow-hidden bg-neutral-900 lg:m-6 lg:flex lg:w-[45%] lg:rounded-tl-[140px] lg:rounded-tr-3xl lg:rounded-br-[140px] lg:rounded-bl-3xl">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Orange to Dark Charcoal Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/40 via-neutral-950 to-neutral-950" />

        {/* Ambient Glows */}
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-16 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />

        <div className="relative z-10 flex w-full flex-col justify-end p-14">
          <h2 className="max-w-md text-4xl font-semibold leading-tight text-white">
            Manage every client relationship in one connected workspace.
          </h2>

          <p className="mt-5 max-w-sm text-base leading-relaxed text-neutral-300">
            Track leads, follow up on time, and keep your whole team aligned
            with a single source of truth for every customer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;