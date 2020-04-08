var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var UserType = require('../types/users');
var services = require('../../services');

exports.add = {
    type: UserType.userType,
    args: {
        userName: {
            type: new GraphQLNonNull(GraphQLString),
        },
        Name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        Nomor: {
            type: new GraphQLNonNull(GraphQLString),
        }
    },
    resolve(root, params) {
        return services.createUser(params);
    }
}