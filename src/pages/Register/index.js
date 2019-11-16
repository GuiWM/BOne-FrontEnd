import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './styles.css'

import Person from '../../assets/register.png'
import Arrow from '../../assets/arrow.png'


const Register = () => {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [senha2, setSenha2] = useState("")
    const [data, setData] = useState("")
    const [msg, setMsg] = useState("")

    const onSubmit = (event) => {
        event.preventDefault()
        if(email === "" || senha === "" || nome ==="" || senha2 === "" || data === "") {
            setMsg("Um campo está vazio.")
        }  else if (senha !== senha2){
            setMsg("Senhas são diferentes.")
        } else {
            setMsg("")
        }
    }

    let history = useHistory();

    function handleClick() {
        history.push("/");
    }

    return (
    <div className="container">
        <input type="image" src={Arrow} alt="" className="arrowRegister" onClick={handleClick}></input>
        <div className="formBox">
            <form className="registerForm" onSubmit={onSubmit}>
                <p className="title"> 
                    Cadastro.
                </p>
                <div className="cadastro">
                        <p>
                            <label className="hidden-label" htmlFor="name">Nome</label>
                            <input type="name" id="name" name="name" placeholder="Nome Completo" value={nome} onChange={(event) => setNome(event.target.value)}></input>
                        </p>
                        <p>
                            <label className="hidden-label" htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="E-mail" value={email} onChange={(event) => setEmail(event.target.value)}></input>
                        </p>
                        <p>
                            <label className="hidden-label" htmlFor="password">Senha</label>
                            <input type="password" id="password" name="password" placeholder="Senha" value={senha} onChange={(event) => setSenha(event.target.value)}></input>
                        </p>  
                        <p>
                            <label className="hidden-label" htmlFor="password2">Senha</label>
                            <input type="password" id="password2" name="password2" placeholder="Confirme a senha" value={senha2} onChange={(event) => setSenha2(event.target.value)}></input>
                        </p>  
                        <p>
                            <label className="hidden-label" htmlFor="data">Nascimento</label>
                            <input type="date" id="data" name="data" value={data} onChange={(event) => setData(event.target.value)}></input>
                        </p>  
                        <input type="submit" value="Cadastrar"></input>
                </div>
            </form>
            <p className="alerta">{msg}</p>
        </div>
        <div className="imageRegister">
            <img src={Person} alt=""></img>
        </div>
    </div>
    )
}
export default Register