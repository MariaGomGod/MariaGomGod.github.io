import { useState, useEffect } from "react";

export default function AllEmployees() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch('https://futuramaapi.herokuapp.com/api/v2/characters')
            .then(response => response.json())
            .then(data => setEmployees(data))
    }, []);

    return (
        <>
        {
            employees.map(employee => 
                <div className="card border-dark col-6">
                    <img className="card-img-top col-6 m-auto" src={employee.PicUrl} alt=""></img>
                    <div className="card-body">
                        <h3 className="card-name">{employee.Name}</h3>
                        <p>Ubicación: {employee.Planet}</p>
                        <p>Puesto: {employee.Profession}</p>
                    </div>
                </div>
            )
        };
        </>
    )
}

