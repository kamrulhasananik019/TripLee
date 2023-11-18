import React, { useContext, useState } from 'react';

import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { useForm } from 'react-hook-form';
import { AiFillEye, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const LogIn = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const [showPassword, setShowPassword] = useState(false);

    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div>
            <h1 className="text-5xl text-center font-bold py-5  text-[#50CAEB]">Find your peace by loging In !</h1>
            <hr className='my-5 container mx-auto' />
            <div>
                <div className="hero-content grid grid-cols-1 md:grid-cols-2  mx-auto">
                    <div className="text-center lg:text-left">
                        <img src="https://images.unsplash.com/photo-1585486786683-9718bc07a405?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className="rounded-lg shadow-2xl bg-base-100 p-2">
                        <form onSubmit={handleSubmit(onSubmit)}  >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? "text" : "password"} {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" className="input input-bordered" />


                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                <label className="label">
                                    <div className='flex gap-7 '>
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        <div className='pt-3'>
                                            <button
                                                type="button"
                                                className="btn btn-sm  transform -translate-y-1/2"
                                                onClick={togglePasswordVisibility}
                                            >
                                                {showPassword ? (
                                                    <AiOutlineEyeInvisible className="text-2xl" />
                                                ) : (
                                                    <AiFillEye className="text-2xl" />
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn text-white bg-[#50CAEB] hover:bg-[#719AD1]" type="submit" value="Login" />
                            </div>
                        </form>
                        <p><small>New Here? <Link className="text-blue-700" to="/signup">Create an account</Link> </small></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
