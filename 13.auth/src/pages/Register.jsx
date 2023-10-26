import React from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const {register, handleSubmit, formState:{errors}} = useForm();
    const navigate = useNavigate();

    const registrar = async(data) => {
        const result = await axios.post("http://localhost:5000/users/register", data)
        console.log(result);
        navigate("/login")
    }
  return (
    <form onSubmit={handleSubmit(registrar)}>
        <input type='text' {...register('email', {
            required: "El email no puede estar vacio",
            pattern: {
                message: "el email no tiene formato correcto",
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
            }
        })} />
        {errors.email && <>
            {errors.email.type === "required" && <p>{errors.email.message}</p>}
            {errors.email.type === "pattern" && <p>{errors.email.message}</p>}
        </>}
        <input type='text' {...register('password', {
            required: "La contraseña no puede ser vacia",
            pattern: {
                message: "el password tiene que tener mayuscuala minuscula numero y simbolo y entre 8 y 12 caracteres",
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/   
            }
        })} />
        {errors.password && <>
            {errors.password.type === "required" && <p>{errors.password.message}</p>}
            {errors.password.type === "pattern" && <p>{errors.password.message}</p>}
        </>}
        <button>Registrar</button>
    </form>
  )
}

export default Register