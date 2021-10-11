import React from "react";
import {Table} from "react-bootstrap";

const NotesTable = (props) => {
    const renderOne = (object) => {
        console.log(object)
        return (
            <div>
                <h2>{object.nombre}</h2>
            </div>
        )
    }

    const renderVarios = () => {
        let estudiantes = []
        for(let value in props.data){
            renderOne(props.data[value])
            estudiantes.push(props.data[value])
        }
        return(
            <tbody>
            {estudiantes.map((estudiante) => {
                return (
                    <tr key={estudiante.codigo}>
                        <td>
                            {estudiante.codigo}
                        </td>
                        <td>
                            {estudiante.nombre}
                        </td>
                        <td>
                            {estudiante.fecha}
                        </td>
                        <td>
                            {estudiante.pt}
                        </td>
                    </tr>
                )
            })}
            </tbody>
        )
    }

    console.log(props.data)
    return (
        <div>
            <Table>
                <thead>
                <tr>
                    <th>Código</th>
                    <th>Nombre</th>
                    <th>Fecha</th>
                    <th>Puntaje</th>
                </tr>
                </thead>
                {renderVarios()}
            </Table>
        </div>
    )
}

export default NotesTable