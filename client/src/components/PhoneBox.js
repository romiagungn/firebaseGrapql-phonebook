import React, { Component } from 'react';
import PhoneList from '../containers/PhoneList';
import PhoneForm from '../containers/PhoneFrom';

export default class PhoneBox extends Component {

    render() {
        return (
            <div className="container-fluid my-5">
                <div className="container card">
                    <div className="card-header text-center">
                        <h1> <i className="fa fa-address-book"></i> Phones Book App</h1>
                    </div>
                    <div className="card-body">
                        <PhoneForm />
                        
                        <PhoneList />
                    </div>
                    <div className="card-footer text-center">
                        Semuanya Telah Berubah sesuai keinginan masing masing
                    </div>
                </div>
            </div>
        )
    }
}