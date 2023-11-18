import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
import SocialLogin from '../Pages/Shared/SocialLogin/SocialLogin';

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const SignUp = () => {
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm();

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append('image', data.photoURL[0]);

            const imgResponse = await fetch(img_hosting_url, {
                method: 'POST',
                body: formData,
            }).then((res) => res.json());

            if (imgResponse.success) {
                const result = await createUser(data.email, data.password);
                const loggedUser = result.user;
                console.log(loggedUser);

                await updateUserProfile(data.name, imgResponse.data.url);

                const saveUser = {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    photo: imgResponse.data.url,
                };

                const response = await fetch('https://server-chi-topaz.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(saveUser),
                });

                const responseData = await response.json();
                if (responseData.insertedId) {
                    reset();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'User created successfully.',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    navigate('/');
                }
            }
        } catch (error) {
            console.error('Error during sign up:', error);
        }
    };

    const password = watch('password');

    return (
        <section className='None'>
        <h1 className='text-5xl text-center font-bold py-5 text-[#50CAEB]'>
            Find your peace by Signing up !
        </h1>
        <hr className='my-5 container mx-auto' />
        <div>
            <div className='hero-content grid grid-cols-1 md:grid-cols-2 mx-auto'>
                <div className='text-center lg:text-left'>
                    <img
                        src='https://images.unsplash.com/photo-1626239337670-dfa76e646bfe?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        alt=''
                    />
                </div>
                <div className='p-3 shadow-2xl bg-base-100'>
                    <form onSubmit={handleSubmit(onSubmit)} className=''>
                        <div className='form-control'>
                            <label className='label'>
                                <span className='label-text'>name</span>
                            </label>
                            <input
                                type='text'
                                {...register('name', { required: true })}
                                placeholder='name'
                                className='input input-bordered'
                            />
                            {errors.name && (
                                <span className='text-red-600'>This field is required</span>
                            )}
                        </div>
                        <div className='form-control'>
                            <label className='label'>
                                <span className='label-text'>Photo URL</span>
                            </label>
                            <input
                                type='file'

                                {...register('photoURL', { required: true })}
                                placeholder='photo'
                                className='input input-bordered  '

                            />
                            {errors.photoURL && (
                                <span className='text-red-600'>This field is required</span>
                            )}
                        </div>
                        <div className='form-control'>
                            <label className='label'>
                                <span className='label-text'>Email</span>
                            </label>
                            <input
                                type='email'
                                {...register('email', { required: true })}
                                placeholder='email'
                                className='input input-bordered'
                            />
                            {errors.email && (
                                <span className='text-red-600'>This field is required</span>
                            )}
                        </div>
                        <div className='form-control'>
                            <label className='label'>
                                <span className='label-text'>Password</span>
                            </label>
                            <input
                                type='password'
                                {...register('password', {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                                })}
                                placeholder='password'
                                className='input input-bordered'
                            />
                            {errors.password?.type === 'required' && (
                                <p className='text-red-600'>Password is required</p>
                            )}
                            {errors.password?.type === 'minLength' && (
                                <p className='text-red-600'>Password must be 6 characters</p>
                            )}
                            {errors.password?.type === 'maxLength' && (
                                <p className='text-red-600'>
                                    Password must be less than 20 characters
                                </p>
                            )}
                            {errors.password?.type === 'pattern' && (
                                <p className='text-red-600'>
                                    Password must have one Uppercase one lower case, one number
                                    and one special character.
                                </p>
                            )}
                        </div>
                        <div className='form-control'>
                            <label className='label'>
                                <span className='label-text'>Confirm Password</span>
                            </label>

                            <input
                                type='password'
                                {...register('confirmPassword', {
                                    required: true,
                                    validate: (value) =>
                                        value === password || 'Passwords do not match',
                                })}
                                placeholder='Confirm password'
                                className='input input-bordered'
                            />

                            {errors.confirmPassword?.type === 'required' && (
                                <span className='text-red-500'>This field is required</span>
                            )}
                            {errors.confirmPassword?.type && (
                                <span className='text-red-500'>
                                    {errors.confirmPassword.message}
                                </span>
                            )}
                        </div>
                        <div className='form-control mt-6'>
                            <input
                                className='btn text-white bg-[#50CAEB] hover:bg-[#719AD1]'
                                type='submit'
                                value='Sign Up'
                            />
                        </div>
                    </form>
                    <p>
                        <small>
                            Already have an account ?{' '}
                            <Link className='text-blue-700' to='/login'>
                                Login
                            </Link>
                        </small>
                    </p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    </section>
    );
};

export default SignUp;
