import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postContact, searchContact, searchContactReset } from '../actions'

class PhoneForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            Name: "",
            Number: "",
            value: '',
            search: false
        }
        this.handleIDchange = this.handleIDchange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.handleButtonSearch = this.handleButtonSearch.bind(this)
        this.handleButtonCancel = this.handleButtonCancel.bind(this)
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

    handleButtonSearch() {
        this.setState({
            search: true
        })
    }

    handleButtonCancel() {
        this.setState({
            search: false
        })
        this.props.searchContactReset()
    }

    handleFilterChange(event) {
        let value = event.target.value
        this.setState({
            value: event.target.value
        })
        this.props.searchContact(value)
    }

    handleReset(event) {
        event.preventDefault();
        this.setState({
            value: ''
        })
        this.props.searchContactReset()
    }

    render() {
        return (
            <div>

                <form className="footer" onSubmit={this.handleSubmit}>

                    <p>
                        <button className="btn mr-2" type="button" data-toggle="collapse" data-target="#addForm" aria-expanded="false" aria-controls="addForm">
                            <i className="fas fa-plus"></i> Add
                        </button>
                        <button className="btn my-4 mr-2" onClick={this.handleButtonSearch} type="button" data-toggle="collapse" data-target="#searchForm" aria-expanded="false" aria-controls="searchForm">
                            <i className="fas fa-search"></i> Search
                        </button>
                    </p>

                    <div className="collapse" id="addForm">
                        <div className="card card-header">
                            <h5 className="card-text">Add Contact</h5>
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

                    <div className="collapse mt-3" id="searchForm">
                        <h5 className="card-header">Search Contact</h5>
                        <div className="card card-body">
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon2" htmlFor="inlineFormInputGroup"><i
                                                className="fas fa-user"></i></span>
                                        </div>
                                        <input type="text" id="inlineFormInputGroup" className="form-control" placeholder="Name / Phone Number" value={this.state.value} onChange={this.handleFilterChange} />
                                    </div>
                                </div>
                                <div className="form-group mr-2">
                                    <button type="button" onClick={this.handleReset} className="btn "><i className="fas fa-undo"></i> Reset</button>
                                </div>
                                <div className="form-group">
                                    <button type="button" onClick={this.handleButtonCancel} className="btn" data-toggle="collapse" data-target="#searchForm" aria-expanded="false" aria-controls="searchForm"><i className="fas fa-times"></i> Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    searchContact: (value) => { dispatch(searchContact(value)) },
    searchContactReset: () => { dispatch(searchContactReset()) },
    postContact: (id, Name, Number) => dispatch(postContact(id, Name, Number))
})

export default connect(
    null,
    mapDispatchToProps
)(PhoneForm)