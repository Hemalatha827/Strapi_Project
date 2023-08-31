// server/routes/task.js
module.exports = {
  type: 'admin',
  routes: [
    {
      method: 'GET',
      path: '/count',
      handler: 'task.count',
      config: {
        policies: [],
        auth: false,
      },
    },
    // ...

    
{
  method: "PUT",
  path: "/update/:id",
  handler: "task.update",
  config: {
    policies: [],
    auth: false,
  },
},
{
  method: "POST",
  path: "/create",
  handler: "task.create",
  config: {
    policies: [],
    auth: false,
  },
},

  ],
};