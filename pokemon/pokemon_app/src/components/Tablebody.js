import React from 'react'
const TableBody = props => {

    const rows = props.pokemon.map((row, index) => {
        return (
            <tr key={index}>
                <td>{index}</td>
                <td>{row.name}</td>
            </tr>
    )
    })
    return <tbody>{rows}</tbody>
}
export default TableBody;