import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import google from "../../assets/Social icon/google.png";

const Signup = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [createUserWithEmailAndPassword, user2, loading2, error2] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  let signInError;

  if (user || user2) {
    navigate(from, { replace: true });
    console.log(user);
  }

  if (loading || updating || loading2) {
    return <Loading></Loading>;
  }

  if (error || error2 || updateError) {
    signInError = (
      <p className="text-red-500">
        <small>
          {error?.message || error?.message || updateError?.message}
        </small>
      </p>
    );
  }

  // if (token) {
  //     navigate('/appointment');
  // }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    console.log("update done");
  };

  return (
    <div className="min-h-screen">
      <div className="flex justify-center items-center">
        <div
          style={{ width: "570px", height: "457px" }}
          className="flex rounded-xl bg-base-200 flex-col justify-center items-center p-20"
        >
          <div
            style={{ width: "456px", height: "148px" }}
            className="flex flex-col justify-center items-center"
          >
            <h2
              style={{
                fontFamily: "Montserrat",
                fontSize: "24px",
                letterSpacing: "1px",
              }}
              className="text-center font-semibold pb-4"
            >
              SignUp
            </h2>


            {/* form div */}
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>

                <div  className="form-control w-96 max-w-xs">
                  
                  <input 
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered rounded-full w-full max-w-xs"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is Required",
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Provide a valid Email",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.email?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="form-control w-full max-w-xs">
                 
                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered rounded-full w-full max-w-xs"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is Required",
                      },
                      minLength: {
                        value: 6,
                        message: "Must be 6 characters or longer",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.password?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span className="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                  </label>
                </div>

                {signInError}
                <input
                  className="btn w-full rounded-full max-w-xs text-white"
                  type="submit"
                  value="Sign Up"
                />
              </form>
            </div>

            <div className="divider">OR</div>
            {/* google div */}
            <div>
              <button
                style={{ width: "400px", height: "51px" }}
                onClick={() => signInWithGoogle()}
                className="btn rounded-full  btn-outline"
              >
                <img className="w-6 mr-3" src={google} alt="" />
                Continue with Google
              </button>
              <p className="text-center py-2">
                <small>
                  Already have an account ?{" "}
                  <Link className="text-primary" to="/login">
                    Log in
                  </Link>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
