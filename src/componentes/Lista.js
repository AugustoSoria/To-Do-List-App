import React, { Component } from 'react';
import "./lista.css"


class Lista extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tareaActual: "",
            tareas: [
            {titulo: "Ponte una nueva meta ☝💪", hecho: false, id: 1},
            ],
        }
    }

    agregarTarea() {
        let ids = this.state.tareas.map(tarea => tarea.id)
        if(this.state.tareaActual.length > 0){
            this.setState({
                tareas: [
                ...this.state.tareas,
                {titulo: this.state.tareaActual,
                hecho: false,
                id: Math.max(...ids) + 1}
                ],
                tareaActual: ""
            })
        }
    }

    handleInput(e) {
        this.setState({tareaActual: e.target.value})
    }

    eliminarTarea(id){
        this.setState({
            tareas: this.state.tareas.filter(tarea => tarea.id !== id)
        })
    }

    render() { 
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div className="lista">
                    <h1>To-Do List</h1>
                    <div>
                        <input type="text" placeholder="Agregar nueva tarea" onChange={(e) => this.handleInput(e)} value={this.state.tareaActual} ></input>
                        <button className="btn-agregar" onClick={() => this.agregarTarea()}> + </button>
                    </div>
                    <ul>
                        {this.state.tareas.map((tarea) => (
                            <div className='li-btn' key={tarea.id} id={tarea.id}>
                                <li className="lista-item"> {tarea.titulo} </li>
                                <button className="btn-eliminar" onClick={() => this.eliminarTarea(tarea.id)}> X </button>
                            </div>
                            )
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Lista;