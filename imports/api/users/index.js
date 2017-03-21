import { Meteor } from 'meteor/meteor';
// import User from '../schemas/users';

const Users = Meteor.users;

Users.isInRole = function (userId, role) {
  const user = Users.findOne({_id: userId});
  return !!(user && user.roles && user.roles.indexOf(role) != -1);
};

Users.isInRoles = function (userId, roleList) {
  const user = Users.findOne({_id: userId});
  if(!user || !user.roles) {
    return false;
  }

  const granted = new Set([...roleList].filter(x => user.roles.has(x)));

  return granted && granted.length !== 0;
};

Users.isAdmin = function (userId) {
  return Users.isInRole(userId, 'admin');
};

Users.isAdminOrInRole = function (userId, role) {
  return Users.isInRole(userId, 'admin') || Users.isInRole(userId, role);
};

// Users.attachSchema(User);

export default Users;
