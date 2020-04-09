import React, { Component } from 'react';
import PhoneList from '../containers/PhoneList';
import PhoneForm from '../containers/PhoneFrom';
import PhoneSearch from '../containers/PhoneSearch';

export default class PhoneBox extends Component {

    render() {
        return (
            <div className="container-fluid my-5">
                <div className="container card">
                    <div className="card-header text-center">
                        <h1> <i className="fa fa-address-book"></i> Phones Book Apps</h1>
                    </div>
                    <div className="card-body">
                        <PhoneForm /> 
                        <PhoneSearch />
                        <PhoneList />
                    </div>
                    <div className="card-footer text-center">
                    <i className="far fa-copyright"></i> Created by Romie Agung Nugraha
                    </div>
                </div>
            </div>
        )
    }
}