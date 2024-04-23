/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */


"use client"
import NavBar from '@/components/shared/navBar';
import React from 'react';
import { useForm } from 'react-hook-form';

const page = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data.roomCode)
    }
    return (
        <div>
            <NavBar></NavBar>
            <div className='w-80 mx-auto mt-20'>
                <form className='flex flex-col space-y-3' onSubmit={handleSubmit(onSubmit)}>

                    <label>Enter Your Room Code</label>
                    {/* include validation with required or other standard HTML validation rules */}
                    <input {...register("roomCode", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.roomCode && <span>Enter your room code</span>}

                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default page;