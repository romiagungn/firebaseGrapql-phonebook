import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import Swal from "sweetalert2";

const API_URL = 'http://localhost:3000/graphql/'

const client = new ApolloClient({
    uri: API_URL
});


// start load contact data
const loadContactSuccess = (users) => ({
    type: 'LOAD_CONTACT_SUCCESS',
    users
})

const loadContactFailure = () => ({
    type: 'LOAD_CONTACT_FAILURE'
})

export const loadContact = () => {
    const contactQuery = gql`
    query { 
        users{
        id
        Name
        Number
    }
    }`;
    return async dispatch => {
        try {
            const response = await client.query({
                query: contactQuery,
            });
            console.log(response, 'ini load data men');
            dispatch(loadContactSuccess(response.data.users));
        }
        catch (error) {
            console.error(error);
            dispatch(loadContactFailure());
        }
    }
}

// end load contact data

// start post contact data

export const postContactSuccess = (Contact) => ({
    type: 'POST_CONTACT_SUCCESS',
    Contact
})

export const postContactFailure = (id) => ({
    type: 'POST_CONTACT_FAILURE', id
})

const postContactRedux = (id, Name, Number) => ({
    type: 'POST_CONTACT', id, Name, Number
})


export const postContact = (id, Name, Number) => {
    const addQuery = gql`
        mutation addContact($id: String!, $Name: String!, $Number: String!) {
            addContact(id: $id, Name: $Name, Number: $Number) {
                id
                Name
                Number
            }
        }`;
    return dispatch => {
        dispatch(postContactRedux(id, Name, Number))
        return client.mutate({
            mutation: addQuery,
            variables: {
                id,
                Name,
                Number
            }
        })
            .then(function (response) {
                Swal.fire({
                    icon: 'success',
                    title: 'Selamat',
                    text: 'Selamat Contact Berhasil ditambahkan'
                })
                console.log(response.data, 'ini hasil add data men')
                dispatch(postContactSuccess(response.data))
            })
            .catch(function (error) {
                console.error(error);
                dispatch(postContactFailure(id))
            });
    }
}

// start update contact data

export const UpdateContactSuccess = (contact) => ({
    type: 'UPDATE_CONTACT_SUCCESS',
    contact
})

export const UpdateContactFailure = (id) => ({
    type: 'UPDATE_CONTACT_FAILURE', id
})

const UpdateContactRedux = (id, Name, Number) => ({
    type: 'UPDATE_CONTACT', id, Name, Number
})

export const updateON = (id) => ({
    type: 'UPDATE_ON', id
})

export const updateOFF = (id) => ({
    type: 'UPDATE_OFF', id
})


export const UpdateContact = (id, Name, Number) => {
    const addQuery = gql`
        mutation updateContact($id: String!, $Name: String!, $Number: String!) {
            updateContact(id: $id, Name: $Name, Number: $Number) {
                id
                Name
                Number
            }
        }`;
    return dispatch => {
        dispatch(UpdateContactRedux(id, Name, Number))
        return client.mutate({
            mutation: addQuery,
            variables: {
                id,
                Name,
                Number
            }
        })
            .then(function (response) {
                // alert('data berhasil di update')
                console.log(response,'ini hasil update data')
                dispatch(UpdateContactSuccess(response.data))
            })
            .catch(function (error) {
                console.error(error);
                dispatch(UpdateContactFailure(id))
            });
    }
}

// end update contact

// start delete contact data

const deleteContactRedux = (id) => ({
    type: 'DELETE_CONTACT', id
})

export const deleteContactSuccess = (Contact) => ({
    type: 'DELETE_CONTACT_SUCCESS',
    Contact
})

export const deleteContactFailure = () => ({
    type: 'DELETE_CONTACT_FAILURE'
})


export const deleteContact = (id) => {
    const deleteQuery = gql`
    mutation removeContact($id: String!) {
    removeContact(id: $id) {
        id
    }
}`;
    return dispatch => {
        dispatch(deleteContactRedux(id))
        return client.mutate({
            mutation: deleteQuery,
            variables: {
                id
            }
        }).then(function (response) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your work has been Deleted',
                showConfirmButton: false,
                timer: 1000
            })
            dispatch(deleteContactSuccess(response))
        })
            .catch(function (error) {
                console.error(error);
                dispatch(deleteContactFailure())
            });
    }
}

// end delete contact data

export const resendContact = (id, Name, Number) => {
    const addQuery = gql`
            mutation addContact($id: String!, $Name: String!, $Number: String!) {
            addContact(id: $id, Name: $Name, Number: $Number) {
                id
                Name
                Number
            }
        }`;
    return dispatch => {
        return client.mutate({
            mutation: addQuery,
            variables: {
                id,
                Name,
                Number
            }
        })
            .then(function (response) {
                dispatch(postContactSuccess(response))
            })
            .catch(function (error) {
                console.error(error);
                dispatch(postContactFailure(id))
            });
    }
}

// Start Search data

export const searchContact = (value) => ({
    type: "SEARCH_CONTACT",
    value: value.trim()
})

export const searchContactReset = () => ({
    type: "SEARCH_CONTACT_RESET"
})

// End Search data