import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Profile from '../images/profile.svg'
import { useNavigate } from "react-router";
import { BiInfoCircle } from 'react-icons/bi'
import { useForm } from "react-hook-form";
import { AuthContext } from "../contexts/AuthContext";
import { yupResolver } from '@hookform/resolvers/yup'
import { object, string } from "yup";
import "../styles/Login.css";

const schema = object({
  email: string().required('Campo obrigatório'),
  password: string().required('Campo obrigatório')
})

const Login = () => {
  const { user, setUser, setUserId } = useContext(AuthContext)
  const [apiURL] = useState(process.env.REACT_APP_API_URL)
  const [errorRequest, setErrorRequest] = useState(null)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user])

  const onSubmit = (data) => {
    setErrorRequest(null)
    axios.post(`${apiURL}/auth/login`, data)
      .then((res) => {
        setUser(res.data.name)
        setUserId(res.data.id)
      })
      .catch((err) => {
        setErrorRequest(err.response.data.msg)
      })

  };

  return (
    <section className="login-page">
      <form onSubmit={handleSubmit(onSubmit)}>
        <img src={Profile} alt="Profile" className="profile-img" />
        <div className="form-group">
          <input
            type="email"
            placeholder="E-mail"
            {...register("email", { required: true })}
          />
          {errors.email && <span className="error"><BiInfoCircle /> {errors.email.message}</span>}
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="Senha"
            {...register("password", { required: true })}
          />
          {errors.password && <span className="error"><BiInfoCircle /> {errors.password.message}</span>}
        </div>

        <input type="submit" className="btn-login" value="Entrar" />
        {errorRequest && <span className="error"><BiInfoCircle /> {errorRequest}</span>}
      </form>
    </section>
  );
};

export default Login;
