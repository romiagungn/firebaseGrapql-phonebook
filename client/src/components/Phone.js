import React from 'react';

const Phone = (props) => {
    // console.log(props, 'ini data di component')
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
                    className="btn"
                    onClick={props.sent ? props.onDelete : props.resend}>
                    {props.sent ? 'Hapus' : 'Kirim Ulang'}
                </button>
            </td>
            {!props.sent &&
                <td style={{ color: "red", fontSize: "8px" }}>
                    network failed, please check your connections
            </td>
            }

        </tr>
    )
}

export default Phone;