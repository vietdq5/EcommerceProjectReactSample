import './LoginPage.css'
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { login } from "../../services/userServices";
import { useState } from 'react'

const schemaValidation = z.object(
    {
        email: z
            .string()
            .email({ message: "Please entern valid email address." })
            .min(3),
        password: z
            .string()
            .min(8, { message: "Password should be at least 8 characters." })
    }
);

const LoginPage = () => {
    const [formError, setFormError] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: zodResolver(schemaValidation) });

    const onSubmit = async (formData) => {
        try {
            await login(formData);

            window.location = "/";
        } catch (err) {
            if (err.response && err.response.status === 400) {
                setFormError(err.response.data.message);
            }
        }
    };

    return (
        <section className="align_center form_page">
            <form className='authentication_form' onSubmit={handleSubmit(onSubmit)}>
                <h2>Login</h2>
                <div className="form_inputs">
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input type="email"
                            id='email'
                            className='form_text_input'
                            placeholder='Please enter your email'
                            {...register("email")} />
                        {
                            errors.email && (
                                <em className='form_error'>{errors.email.message}</em>
                            )
                        }
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input type="password"
                            id='password'
                            className='form_text_input'
                            placeholder='Please enter your password'
                            {...register("password")} />
                        {
                            errors.email && (
                                <em className='form_error'>{errors.password.message}</em>
                            )
                        }
                    </div>
                </div>
                {formError && <em className='form_error'>{formError}</em>}
                <button type='submit' className='search_button form_submit'>
                    Submit
                </button>
            </form>
        </section>
    );
}

export default LoginPage;