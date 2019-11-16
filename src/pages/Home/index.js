import React from 'react'
import { useHistory } from 'react-router-dom'

import './styles.css'

import addButton from '../../assets/addButton.png'
import exitButton from '../../assets/exit.png'

const Home = () => {


    let history = useHistory();

    function handleClick() {
        history.push("/add")
    }
    function exitClick() {
        history.push("/")
    }

    return (
        <div className="container-home">
            <input type="image" src={exitButton} alt="" className="exitButton" onClick={exitClick}></input>
            <div className="add-button">
                <input type="image" src={addButton} alt="" className="addButton" onClick={handleClick}></input>
            </div>
            <div className="vaccines-cards group">
                <article>
                        <h2>Vacina tal</h2>
                        <p>Lote: 12/07/2019</p>
                        <p>Descricao</p>
                        <p>Bibibi bobobo</p>
                </article>
                <article>
                        <h2>Vacina tal</h2>
                        <p>Lote: 12/07/2019</p>
                        <p>Descricao</p>
                        <p>Bibibi bobobo</p>
                </article>
                <article>
                        <h2>Vacina tal</h2>
                        <p>Lote: 12/07/2019</p>
                        <p>Descricao</p>
                        <p>Bibibi bobobo</p>
                </article>
                <article>
                        <h2>Vacina tal</h2>
                        <p>Lote: 12/07/2019</p>
                        <p>Descricao</p>
                        <p>Bibibi bobobo</p>
                </article>
                <article>
                        <h2>Vacina tal</h2>
                        <p>Lote: 12/07/2019</p>
                        <p>Descricao</p>
                        <p>Bibibi bobobo</p>
                </article>
                <article>
                        <h2>Vacina tal</h2>
                        <p>Lote: 12/07/2019</p>
                        <p>Descricao</p>
                        <p>Bibibi bobobo</p>
                </article>
            </div>
        </div>
    )
}

export default Home