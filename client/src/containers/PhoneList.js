import React, { Component } from 'react';
import Phone from './PhoneActive';
import { connect } from 'react-redux';
import { loadContact } from '../actions'

class PhoneList extends Component {

    componentDidMount() {
        this.props.loadContact();
    }

    render() {
        const contact = this.props.phones.map((item, index) => {
            return (
                <Phone
                    key={index}
                    id={item.id}
                    Name={item.Name}
                    Number={item.Number}
                />)
        })
        return (
            <table className="table table-striped my-3">
                <thead>
                    <tr>
                        <th scope="col">User Name</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {contact}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (state) => ({
    phones: state.phones
})

const mapDispatchToProps = (dispatch) => ({
    loadContact: () => dispatch(loadContact())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PhoneList)