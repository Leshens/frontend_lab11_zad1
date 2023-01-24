import React from "react";

export default function Pearson({person}) {
    return (
        <>
            <table>
                <tr>
                    <th colSpan={2}>
                        <img src={person.results[0].picture.large} alt="person"/>
                    </th>
                </tr>
                <tr>
                    <td>Imie</td>
                    <td>{person.results[0].name.first}</td>
                </tr>
                <tr>
                    <td>Nazwisko</td>
                    <td>{person.results[0].name.last}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{person.results[0].email}</td>
                </tr>
                <tr>
                    <td>Adres</td>
                    <td>{person.results[0].location.street.name} {person.results[0].location.street.number}, {person.results[0].location.city} ({person.results[0].location.country})</td>
                </tr>
            </table>
        </>
    );
}