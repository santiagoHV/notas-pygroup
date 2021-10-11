import { useState } from "react";

const BASE_URL = 'https://pygroup-2021-1-default-rtdb.firebaseio.com/semana'

function useFetchApi(){
    const [state, setState] = useState({
        data: [],
        loading: true,
        error: null
    })


    async function getData(endpoint){
        try {
            const response = await fetch(BASE_URL + endpoint, {
                method: 'GET',
            });

            const data = await response.json()

            if(data.error){
                setState({
                    data:null,
                    loading: false,
                    error: data.error
                })
            }else{
                let arrayData = state.data
                arrayData.push(data)
                setState({
                    data: arrayData,
                    loading: false,
                    error: null
                })

            }

        } catch (error) {
            setState({
                data: null,
                loading: false,
            })
        }
    }

    async function getAllData() {
        await getData('2.json')
        await getData('3.json')
        await getData('4.json')
        await getData('5r.json')
    }

    return [state, getAllData]
}

export default useFetchApi;