import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import './styles.css'

import Doctors from '../../assets/doctors.png';


const Login = () => {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [msg, setMsg] = useState("")
    let history = useHistory()

    const onSubmit = (event) => {


        event.preventDefault()
        if(email === "") {
            setMsg("Preencha o email")
        } else if (senha === "") {
            setMsg("Preencha a senha")
        } else {
           setMsg("Usuario logado")
           history.push("/home")
        }    
    }


    return (
    <section>
        <div className="main-body">
            <form onSubmit={onSubmit}>
                <p className="title"> 
                        Login.
                </p>
                <div className="login">
                    <p>
                        <label className="hidden-label" htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="E-mail" value={email} onChange={(event) => setEmail(event.target.value)}></input>
                    </p>
                    <p>
                        <label className="hidden-label" htmlFor="password">Senha</label>
                        <input type="password" id="password" name="password" placeholder="Senha" value={senha} onChange={(event) => setSenha(event.target.value)}></input>
                    </p>  
                    <input type="submit" value="Entrar"></input>
                    <span className="linkRegister"><Link to = {"/register"}>Cadastre-se</Link></span>
                </div>
            </form>
        </div>
        <p className="mensage">{msg}</p>
        <div className="image">
            <img src={Doctors} alt=""></img>
        </div>
    </section>
    )

}

export default Login
