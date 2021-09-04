import { useState, useEffect } from "react";
import EmployeeCard from "./EmployeeCard";
import './AllEmployees.sass';

export default function AllEmployees() {

    const [employees, setEmployees] = useState([]);

    const isCurrentlyWorkingHere = employee =>
        employee.Profession !== 'Unemployed' &&
        employee.Profession !== 'Unknown';

    useEffect(() => {
        fetch('https://futuramaapi.herokuapp.com/api/v2/characters')
            .then(response => response.json())
            .then(data => setEmployees(data.filter(isCurrentlyWorkingHere).slice(0, 8)));
    }, []);

    return (
        <>
        <h3>Nuestro equipo</h3>
        <div id="employees">
        {
            employees.map(employee => 
                <EmployeeCard employee={employee} />
            )
        }
        </div>
        </>
    )
}

