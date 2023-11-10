import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hook/useFetch'

function SingleCountry() {
    const { country } = useParams()
    const url = "https://restcountries.com/v3.1/name/" + country
    const {data, isPending, error} = useFetch(url)
    return <div>{country}</div>
}

export default SingleCountry