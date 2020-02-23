import React, { Fragment, useState, useEffect } from 'react';

function EmployeeB() {

    const [planets, setPlanets] = useState({})
    const [hasError, setErrors] = useState(true)

    useEffect(async function fetchData() {
        const res = await fetch("https://swapi.co/api/planets/")
        res.json()
            .then(res => setPlanets(res))
            .catch(res => setErrors(true))

    }, [])

    return (
        <Fragment>
            <h1>EmployeeB</h1>
            <div>{JSON.stringify(planets)}</div>
            <div>{JSON.stringify(hasError)}</div>

        </Fragment>
    )
}

export default EmployeeB