const firebase = require("firebase");

const getUsers = () => {
    const userReference = firebase.database().ref("/Phonebook/");
    return (new Promise((resolve, reject) => {
        userReference.on("value", (snapshot) => {
            const folders = snapshot.val();
            if (folders === null) {
                resolve([]);
            } else {
                const data = Object.keys(folders).map(o => Object.assign({ userName: o }, folders[o]));
                resolve(data);
            }
            userReference.off("value");
        }, (errorObject) => {
            console.log("The read failed: " + errorObject.code);
            reject("The read failed: " + errorObject.code);
        });
    }));
}

//Create new instance
const createUser = (params) => {
    const referencePath = `/Phonebook/${params.userName}/`;
    const userReference = firebase.database().ref(referencePath);
    return (new Promise((resolve, reject) => {
        userReference.set({ Name: params.Name, Nomor: params.Nomor }, (error) => {
            if (error) {
                reject("Data could not be deleted." + error);
            } else {
                resolve(params);
            }
        });
    }));
}

//Update existing instance
const updateUser = (params) => {
    const referencePath = `/Phonebook/${params.userName}/`;
    const userReference = firebase.database().ref(referencePath);
    return (new Promise((resolve, reject) => {
        userReference.update({ Name: params.Name, Nomor: params.Nomor }, (error) => {
            if (error) {
                reject("Data could not be deleted." + error);
            } else {
                resolve(params);
            }
        });
    }));
}

//Delete an instance
const deleteUser = (params) => {
    var referencePath = `/Phonebook/${params.userName}/`;
    var userReference = firebase.database().ref(referencePath);
    return (new Promise((resolve, reject) => {
        userReference.remove((error) => {
            if (error) {
                reject("Data could not be deleted." + error);
            } else {
                resolve(params);
            }
        })
    }));
}



module.exports = { getUsers, createUser, updateUser, deleteUser }