import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const API_URL = 'http://localhost:3000/graphql/'

const client = new ApolloClient({
    uri: API_URL
});


// start load contact data
export const loadContactSuccess = (users) => ({
    type: 'LOAD_CONTACT_SUCCESS',
    users
})

export const loadContactFailure = () => ({
    type: 'LOAD_CONTACT_FAILURE'
})

export const loadContact = () => {
    const phonesQuery = gql`
    {
        users {
        id
        Name
        Number
        }
    }`;
    // console.log(phonesQuery, 'ini load adta men')
    return dispatch => {
        return client.query({
            query: phonesQuery,
        })
            .then(function (response) {
                console.log(response,'ini Contact men');
                dispatch(loadContactSuccess(response.data.users))

            })
            .catch(function (error) {
                console.error(error);
                dispatch(loadContactFailure())
            });
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
                dispatch(postContactSuccess(response.data))
            })
            .catch(function (error) {
                console.error(error);
                dispatch(postContactFailure(id))
            });
    }
}

// start update contact data

export const UpdateContactSuccess = (Contact) => ({
    type: 'UPDATE_CONTACT_SUCCESS',
    Contact
})

export const UpdateContactFailure = (id) => ({
    type: 'UPDATE_CONTACT_FAILURE', id
})

const UpdateContactRedux = (id, Name, Number) => ({
    type: 'UPDATE_CONTACT', id, Name, Number
})


export const UpdateContact = (id, Name, Number) => {
    const addQuery = gql`
        mutation updateContact($id: String!, $Name: String!, $Number: String!) {
            addContact(id: $id, Name: $Name, Number: $Number) {
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
        })
            .then(function (response) {
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
            mutation updateContact($id: String!, $Name: String!, $Number: String!) {
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