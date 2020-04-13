import React from 'react';

const contact = (props) => {
    return (
        <tr>
            <th scope="row">{props.index}</th>
            <th scope="row">{props.id}</th>
            <th scope="row">{props.Name}</th>
            <th scope="row">{props.Number}</th>
            <td>
                {props.sent ? (
                    <div>
                        <button type="button" className="btn mr-2" onClick={props.onEdit}>
                            <i className="fas fa-pencil-alt"></i> Edit</button>
                        <button type="button" className="btn" onClick={props.onDelete}><i className="fas fa-trash"></i> Delete</button>
                    </div>
                ) :
                    <button type="button" onClick={props.resend} className="btn">
                        <i className="fas fa-sync-alt"></i> Resend</button>
                }
            </td>
        </tr>
    )
}

export default contact;