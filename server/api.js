const { Account, Task } = require("./db.js");

Account.create({
  id: "0c14e7b4-212d-11e9-ab14-d663bd873d93",
  firstName: "Zach",
  lastName: "Richardson",
  email: "zach@forsta.io",
  password: "password"
});

Task.create({
  name: "Something to Do",
  description: "This is something I really need to do",
  done: false
});
