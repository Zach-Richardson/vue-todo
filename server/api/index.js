const account = require('./account');
const auth = require('./auth');
const task = require('./task');

const Account = account.Account;
const Auth = auth.Auth;
const Task = task.Task;

module.exports = {
  Account,
  Auth,
  Task,
};