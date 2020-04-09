import React from 'react';

const Phone = (props) => {
    return (
        <tr>
            <th scope="row">{props.id}</th>
            <td>{props.Name}</td>
            <td>{props.Number}</td>
            <td>
                <button
                    type="button"
                    className="btn mr-2">
                    Edit
                </button>
                <button
                    type="button"
                    className="btn"> Hapus
                </button>
            </td>
            
        </tr>
    )
}

export default Phone;