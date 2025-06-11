import './LoginPage.css'
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

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

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: zodResolver(schemaValidation) });

    const onSubmit = (formData) => console.log(formData);

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
                <button type='submit' className='search_button form_submit'>
                    Submit
                </button>
            </form>
        </section>
    );
}

export default LoginPage;