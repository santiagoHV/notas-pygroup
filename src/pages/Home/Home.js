import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import './Home.css'
import NotesTable from "../../components/Table/Table";
import useFetchApi from "../../hooks/useFetchApi";

const API = 'https://pygroup-2021-1-default-rtdb.firebaseio.com/semana'


const Home = () => {
    const [{data, loading}, getAllData] = useFetchApi('2.json')


    useEffect(() => {
        getAllData()
    }, [])


    if(loading) {
        return 'cargando'
    }else{
        console.log(data)
    }

    return (
        <Container id={'home'}>
            <NotesTable data={data[0]} />
            <NotesTable data={data[1]} />
            <NotesTable data={data[2]} />
            <NotesTable data={data[3]} />
        </Container>
    )
}

export default Home