var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
// var GraphQLInteger = require('graphql').GraphQLInteger;

// User Type
exports.userType = new GraphQLObjectType({
    name: 'phoneData',
    fields: function () {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            Name: {
                type: GraphQLString
            },
            Number: {
                type: GraphQLString
            }
        }
    }
});