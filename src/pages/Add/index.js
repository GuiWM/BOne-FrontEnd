import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import './styles.css'

import Arrow from '../../assets/arrow.png'
import Person from '../../assets/add.png'


const Add = () => {

    const [lote, setLote] = useState("")
    const [fabricante, setFabricante] = useState("")
    const [descricao, setDescricao] = useState("")
    const [data, setData] = useState("")
    const [msg, setMsg] = useState("")
    const [vacinas, setVacinas] = useState(["Bcg", "Dengue", "Herpes", "Tetraviral", "Varicela"])
    const [vacina, setVacina] = useState("")

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(vacina)
        if(vacinas === "" || lote === "" || fabricante ==="" || descricao === "" || data === "") {
            setMsg("Um campo está vazio.")
        } else {
            setMsg("")
        }
    }

    let history = useHistory();

    function handleClick() {
        history.push("/home")
    }

    return (
        
        <div className="main-container">
            <input type="image" src={Arrow} alt="" className="arrowRegister" onClick={handleClick}></input>
            <div className="addBox">
                <form className="boxForm" onSubmit={onSubmit}>
                    <div className="title">
                        Adicionar Vacina.
                    </div>
                    <div className="addForm">
                        <div className="legendsForm">
                            <span>Nome da vacina: </span>
                            <span>Lote: </span>
                            <span>Fabricante: </span>
                            <span>Descrição: </span>
                            <span>Data de vacinação: </span>
                        </div>
                        <div className="labelsForm">
                            <p>
                                <label className="hidden-label" htmlFor="name">Nome</label>
                                <select type="name" id="name" name="name" placeholder="" value={vacina} onChange={(event) => setVacina(event.target.value)}>
                                {vacinas.map( product => (
                                    <option>{product}</option>
                                ))}
                                </select>
                            </p>
                            <p>
                                <label className="hidden-label" htmlFor="lote">Lote</label>
                                <input type="number" id="lote" name="lote" placeholder="" value={lote} onChange={(event) => setLote(event.target.value)}></input>
                            </p>
                            <p>
                                <label className="hidden-label" htmlFor="fabricante">Fabricante</label>
                                <input type="name" id="fabricante" name="fabricante" placeholder="" value={fabricante} onChange={(event) => setFabricante(event.target.value)}></input>
                            </p>  
                            <p>
                                <label className="hidden-label" htmlFor="password2">Descricao</label>
                                <input type="name" id="descricao" name="descricao" placeholder="" value={descricao} onChange={(event) => setDescricao(event.target.value)}></input>
                            </p>  
                            <p>
                                <label className="hidden-label" htmlFor="data">Data</label>
                                <input type="date" id="data" name="data" value={data} onChange={(event) => setData(event.target.value)}></input>
                            </p>  
                        </div>
                    </div>
                    <input type="submit" value="Adicionar"></input>
                </form>
                <p className="addAlert">{msg}</p>
            </div>
            <div className="imageBox">
                <img className="imageAdd" src={Person} alt=""></img>
            </div>
        </div>
    )

                                
}

export default Add