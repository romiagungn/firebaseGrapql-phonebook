import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postContact } from '../actions'

class PhoneForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            Name: "",
            Number: ""
        }
        this.handleIDchange = this.handleIDchange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleIDchange(event) {
        this.setState({ id: event.target.value });
    }

    handleNameChange(event) {
        this.setState({ Name: event.target.value });
    }

    handleNumberChange(event) {
        this.setState({ Number: event.target.value });
    }

    handleSubmit(event) {
        if (this.state.id && this.state.Name && this.state.Number) {
            this.props.postContact(this.state.id, this.state.Name, this.state.Number)
            this.setState({ id: "", Name: "", Number: "" });
        }
        event.preventDefault();
    }

    render() {
        return (
            <div>

                <form className="footer" onSubmit={this.handleSubmit}>

                    <p>
                        <button className="btn" type="button" data-toggle="collapse" data-target="#addForm" aria-expanded="false" aria-controls="addForm">
                            <i className="fas fa-plus"></i> Add
                    </button>
                    </p>

                    <div className="collapse" id="addForm">
                        <div className="card card-header">
                            <p className="card-text">Add Contact</p>
                        </div>
                        <div className="card card-body">
                            <div className="row">
                                <div className="col-3">
                                    <input type="text" name="id" value={this.state.id} onChange={this.handleIDchange} className="form-control" placeholder="Username Here" required />
                                </div>
                                <div className="col-3">
                                    <input type="text" name="Name" value={this.state.Name} onChange={this.handleNameChange} className="form-control" placeholder="Full Name Here" required />
                                </div>
                                <div className="col-3">
                                    <input type="number" name="Number" value={this.state.Number} onChange={this.handleNumberChange} className="form-control" placeholder="Your Phone Number Here" required />
                                </div>
                                <button type="submit" className="btn mr-2"> <i className="fas fa-save"></i> Save</button>
                                <button type="button" onClick={this.handleButtonCancel} className="btn" data-toggle="collapse" data-target="#addForm" aria-expanded="false" aria-controls="addForm"><i className="fas fa-times"></i> Cancel</button>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    postContact: (id, Name, Number) => dispatch(postContact(id, Name, Number))
})

export default connect(
    null,
    mapDispatchToProps
)(PhoneForm)