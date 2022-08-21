import { useForm } from "react-hook-form";
import { useRef } from "react";
import "./style-form.css";

function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSignUp = (data) => {
    console.log("data", data);
  };
  const password = useRef({});
  password.current = watch("password", "");

  return (
    <div className="form-conteiner">
      <form onSubmit={handleSubmit(onSignUp)} className="myform border p-4">
          <label className="labels fw-semibold">Name</label>
        <input
          type="text"
          className="form-control my-2"
          placeholder="Enater your name"
          {...register("name", { required: true })}
        />
        {errors?.name?.type === "required" ? (
          <p className="text-danger">Name is required</p>
        ) : (
          ""
        )}

        <label className="labels fw-semibold">Email</label>
        <input
          type="email"
          className="form-control my-2"
          placeholder="Enater your email"
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        {errors?.email?.type === "required" ? (
          <p className="text-danger">Email is required</p>
        ) : (
          ""
        )}
        {errors?.email?.type === "pattern" ? (
          <p className="text-danger">Invalid Email</p>
        ) : (
          ""
        )}
        <label className="labels fw-semibold">Phone number</label>
        <input
          type="text"
          className="form-control my-2"
          placeholder="Enater your phone number"
          {...register("phone", {
            required: true,
            pattern: {
              value: /^[0-9]{2,}$/i,
              message: "phone must contain numbers only",
            },
            minLength: 11,
            maxLength: 12,
          })}
        />
        {errors?.phone?.type === "required" ? (
          <p className="text-danger">Phone number is required</p>
        ) : (
          ""
        )}
        {errors?.phone?.type === "pattern" ? (
          <p className="text-danger">Invalid phone number</p>
        ) : (
          ""
        )}
        {errors?.phone?.type === "minLength" ? (
          <p className="text-danger">Phone number is too short</p>
        ) : (
          ""
        )}
        {errors?.phone?.type === "maxLength" ? (
          <p className="text-danger">Phone number is too long</p>
        ) : (
          ""
        )}

        <label className="labels fw-semibold">Gender</label>
        <select className="form-select my-2" {...register("gender")}>
          <option value="female">female</option>
          <option value="male">male</option>
        </select>

        <label className="labels fw-semibold">Password</label>
        <input
          type="password"
          className="form-control my-2"
          placeholder="Enater your password"
          {...register("password", {
            required: true,
            minLength: 6,
            pattern: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
          })}
        />
        {errors?.password?.type === "required" ? (
          <p className="text-danger">Password is required</p>
        ) : (
          ""
        )}
        {errors?.password?.type === "pattern" ? (
          <p className="text-danger">Password is weak</p>
        ) : (
          ""
        )}
        {errors?.password?.type === "minLength" ? (
          <p className="text-danger">Password is too short</p>
        ) : (
          ""
        )}

        <label className="labels fw-semibold">Confirm password</label>
        <input
          type="password"
          className="form-control my-2"
          placeholder="Confirm your password"
          {...register("confirmPassword", {
            required: true,
            minLength: 6,
            validate: (value) =>
              value === password.current || "The passwords do not match",
          })}
        />
        {errors?.confirmPassword?.type === "validate" ? (
          <p className="text-danger">Password does not match</p>
        ) : (
          ""
        )}
        {errors?.confirmPassword?.type === "minLength" ? (
          <p className="text-danger">Password is too short</p>
        ) : (
          ""
        )}
        <button className="btn btn-primary my-2">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
