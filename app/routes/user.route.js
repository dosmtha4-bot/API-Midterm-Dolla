module.exports = app => {
  const User= require ( "../controllers/user.Controller" );
  
  app.post( "/users", User.create );
  app.post( "/users/login", User.login );
}

