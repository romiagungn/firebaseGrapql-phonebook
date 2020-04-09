import React from 'react';
import { connect } from 'react-redux';
import { UpdateContact, updateOFF } from '../actions';

class PhoneEditFrom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.id,
            Name: props.Name,
            Number: props.Number
        }

        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleNumberChange = this.handleNumberChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleNameChange(event) {
        this.setState({
            Name: event.target.value,
            isValid: true
        })
    }

    handleNumberChange(event) {
        this.setState({
            Number: event.target.value,
            isValid: true
        })
    }
    handleSubmit(event) {
        event.preventDefault()
            this.props.UpdateContact(this.state.id, this.state.Name, this.state.Number)
    }

    render() {
        // console.log(this.state.id === this.props.id, this.state.Name === this.props.Name , this.state.Number === this.props.Number, 'ini state dan rops')
        return (
            <tr>
                <th scope="row">{this.props.index}</th>
                <td>
                    <form className="form-row" onSubmit={this.handleSubmit}>
                        <div className="col-8">
                            <input type="text" className="form-control" name="Name" value={this.state.id} disabled={true} />
                        </div>
                    </form>
                </td>
                <td>
                    <form className="form-row" onSubmit={this.handleSubmit}>
                        <div className="col-8">
                            <input type="text" className="form-control" name="Name" value={this.state.Name} onChange={this.handleNameChange} required={true} />
                        </div>
                    </form>
                </td>
                <td>
                    <form className="form-row" onSubmit={this.handleSubmit}>
                        <div className="col-8">
                            <input type="number" className="form-control" name="Number" value={this.state.Number} onChange={this.handleNumberChange} required={true} />
                        </div>
                    </form>
                </td>
                <td>
                    <button type="submit" className="btn  mr-2" onClick={this.handleSubmit}><i className="fas fa-check"></i> Save</button>
                    <button type="button" className="btn " onClick={() => this.props.onCancel()}><i className="fas fa-times"></i> Cancel</button>
                </td>
            </tr>
        )
    }

}

// const mapDispatchToProps = (dispatch, ownProps) => ({
//     onCancel: () => dispatch(updateOFF(ownProps.id)),
//     onSave: (Name, Number) => {
//         dispatch(UpdateContact(ownProps.id, Name, Number))
//         dispatch(updateOFF(ownProps.id))
//     }
// })

const mapDispatchToProps = (dispatch, ownProps) => ({
    onCancel: () => dispatch(updateOFF(ownProps.id)),
    UpdateContact: (id, Name, Number) => {
        dispatch(UpdateContact(id, Name, Number))
        dispatch(updateOFF(ownProps.id))
    }
})

export default connect(
    null,
    mapDispatchToProps
)(PhoneEditFrom)