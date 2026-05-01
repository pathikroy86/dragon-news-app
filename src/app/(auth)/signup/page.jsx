"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

const SignupPage = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const handleLoginFunc = async (info) => {
        const { name, email, password } = info;
        const { data, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            callbackURL: "/",
        })
        if (error) {
            alert("User already exist")
        }
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card lg:card-xl bg-base-100 shadow-sm">
                <div className="card-body min-w-96">
                    <h1 className='text-[#403F3F] text-3xl font-semibold text-center mb-5'>Register</h1>
                    <hr className='mb-5 text-[#E7E7E7]' />
                    <form className='space-y-5' onSubmit={handleSubmit(handleLoginFunc)}>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Name</legend>
                            <input type="text" className="input w-full" placeholder="Enter your name"
                                {...register("name", { required: "Name is required" })}
                            />
                            {errors.name && <p className='text-error font-bold'>{errors.name.message}</p>}
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Email address</legend>
                            <input type="email" className="input w-full" placeholder="Enter your Email address"
                                {...register("email", { required: "Email is required" })}
                            />
                            {errors.email && <p className='text-error font-bold'>{errors.email.message}</p>}
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Password</legend>
                            <input type="password" className="input w-full" placeholder="Enter your password"
                                {...register("password", { required: "Password required" })}
                            />
                            {errors.password && <p className='text-error font-bold'>{errors.password.message}</p>}
                        </fieldset>
                        <button className='btn btn-block bg-[#403F3F] text-white font-medium' type="submit">Login</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default SignupPage;