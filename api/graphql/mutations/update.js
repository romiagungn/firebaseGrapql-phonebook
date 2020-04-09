var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var UserType = require('../types/users');
var services = require('../../services');

exports.update = {
    type: UserType.userType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLString),
        },
        Name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        Number: {
            type: new GraphQLNonNull(GraphQLString),
        }
    },
    resolve(root, params) {
        return services.updateUser(params)
    }
}