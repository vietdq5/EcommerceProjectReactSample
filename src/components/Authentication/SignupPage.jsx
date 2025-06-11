import './SignupPage.css'
import UserPicSrc from "../../assets/user.webp";

import { z } from 'zod'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const schemaValidation = z
    .object({
        name: z
            .string()
            .min(3, { message: "Name should be at least 3 characters." }),
        email: z.string().email({ message: "Please enter valid email." }),
        password: z
            .string()
            .min(8, { message: "Password must be at least 8 characters." }),
        confirmPassword: z.string(),
        deliveryAddress: z
            .string()
            .min(15, { message: "Address must be at least 15 characters." }),
    });


const SignupPage = () => {
    const [profilePic, setProfilePic] = useState(null);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: zodResolver(schemaValidation) });

    const onSubmit = (formData) => console.log(formData);

    return (
        <section className="align_center form_page">
            <form className="authentication_form signup_form" onSubmit={handleSubmit(onSubmit)}>
                <h2>SignUp</h2>
                <div className='image_input_section'>
                    <div className="image_preview">
                        <img src={
                            profilePic ? URL.createObjectURL(profilePic) : UserPicSrc
                        } alt="" id='file-ip-1-preview' />
                    </div>
                    <label htmlFor="file-ip-1" className='image_label'>Upload Image</label>
                    <input type="file" id='file-ip-1' className='image_input' onChange={(e) => setProfilePic(e.target.files[0])} />
                </div>
                <div className="form_inputs signup_form_input">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id='name' className='form_text_input' placeholder='Enter your Name' {...register("name")} />
                        {
                            errors.name && <em className='form_error'>{errors.name.message}</em>
                        }
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' className='form_text_input' placeholder='Enter your Email.' />
                        {
                            errors.email && <em className='form_error'>{errors.email.message}</em>
                        }
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' className='form_text_input' placeholder='Enter your password.' />
                        {
                            errors.password && <em className='form_error'>{errors.password.message}</em>
                        }
                    </div>
                    <div>
                        <label htmlFor="confirm_password">Confirm Password</label>
                        <input type="password" id='confirm_password' className='form_text_input' placeholder='Confirm your password again.' />
                        {
                            errors.confirmPassword && <em className='form_error'>{errors.confirmPassword.message}</em>
                        }
                    </div>
                    <div>
                        <label htmlFor="address">Name</label>
                        <textarea id='address' className='input_textarea' placeholder='Enter delivery address' />
                        {
                            errors.deliveryAddress && <em className='form_error'>{errors.deliveryAddress.message}</em>
                        }
                    </div>
                </div>
                <button className='search_button form_submit' type='submit'>
                    Submit
                </button>
            </form>
        </section>
    );
}

export default SignupPage;