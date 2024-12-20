"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { sucessMessage } from "@/components/TostifyMessage";
import { useForm } from "react-hook-form";
import FormInput from "@/components/inputs/FormInput";
import FormValidation from "@/components/FormValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { signIn } from "next-auth/react";
import Link from "next/link";

const LoginForm = () => {
  const [loader, setLoader] = useState(false);

  const [users, setUsers] = useState(() => {
    if (typeof window !== "undefined") {
      const savedUsers = localStorage.getItem("userData");
      return savedUsers ? JSON.parse(savedUsers) : [];
    }
    return [];
  });

  const router = useRouter();

  const {
    handleSubmit,
    control,
      formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(FormValidation),
  });

  const handleFormValue = async (data) => {
    setLoader(true);
    const { email, password } = data;

    if (users.some((user) => user.email === email)) {
      sucessMessage("User Already Exists!");
    } else {
      // Add new user
      const newUser = { email, password };
      const updatedUsers = [...users, newUser];
      setUsers(updatedUsers);
      localStorage.setItem("userData", JSON.stringify(updatedUsers));
      setLoader(false);
      sucessMessage("User Registered Successfully!");

      // Auto login after registration

      const res = await signIn("credentials", {
        email,
        password,
        userData: JSON.stringify(updatedUsers),
        redirect: false,
      });
      res.ok ? handleCurrentLogin() : null;
    }
  };

  const handleCurrentLogin = () => {
    sucessMessage("Login successfully");
    router.replace("/");
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
      <h2>Register User</h2>
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
              style={{
                padding: "10px 20px",
                cursor: "pointer",
                marginTop: "15px",
              }}
              type="submit"
            >
              Submit
            </button>
          )}
        </div>
        <div style={{ marginTop: "15px" }}>
          Already have an account?
          <Link href={"/auth/signin"}>
            {" "}
            <span style={{ color: "#2b1a41", fontWeight: "600" }}>Sign in</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
