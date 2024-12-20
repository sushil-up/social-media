"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { errorMessage, sucessMessage } from "@/components/TostifyMessage";
import FormInput from "@/components/inputs/FormInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormValidation from "@/components/FormValidation";

const LoginForm = () => {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [loader, setLoader] = useState(false);

  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(FormValidation),
  });

  // Fetch user data from localStorage
  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      try {
        setUserData(JSON.parse(storedData));
      } catch (error) {
        console.error("Error parsing user data from localStorage", error);
      }
    }
  }, []);

  const handleFormValue = async (data) => {
    const { email, password } = data;
    setLoader(true);
    try {
      const res = await signIn("credentials", {
        email,
        password,
        userData: JSON.stringify(userData),
        redirect: false,
      });

      if (res.error) {
        console.log("Invalid Credentials");
        setLoader(false);

        errorMessage("Login Unauthorized");
        return;
      }
      setLoader(false);
      sucessMessage("Login successfully");
      router.replace("/");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div
      className="login-modal"
      style={{
        height: "auto",
        width: "320px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2>Login</h2>
      <form onSubmit={handleSubmit(handleFormValue)}>
        <div style={{ alignItems: "center", marginBottom: "25px" }}>
          <FormInput
            control={control}
            type="email"
            label="Email"
            placeholder="Please enter your email"
            name="email"
            className="email"
            errors={errors}
          />
        </div>
        <div>
          <FormInput
            control={control}
            type="password"
            label="Password"
            placeholder="Please enter your password"
            name="password"
            className="password"
            errors={errors}
          />
        </div>
        <div>
          {" "}
          {loader ? (
            "Loading..."
          ) : (
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                cursor: "pointer",
                marginTop: "15px",
              }}
            >
              Submit
            </button>
          )}
        </div>
        <div style={{ marginTop: "15px" }}>
          Don&apos;t have an account?{" "}
          <Link href={"/register"}>
            {" "}
            <span style={{ color: "#2b1a41", fontWeight: "600" }}>Sign Up</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
