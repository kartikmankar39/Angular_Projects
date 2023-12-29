This is an Online shopping application developed with Angular CLI runs 
on server, 
 In this application user can perform following operation’s
 
-->Registration-
    Can Register itself as user by providing details and credentials 
  like mail Id name and Password.

-->Login-
   Login with valid credential’s, credentials are checked by application 
   using custom authentication method by comparing token which generated 
   at time of registration and token which provided as header with every time 
   when user tries to login in application.
     If the email Id and token are same then only user can successfully login 
   into application else not.

-->Other user’s operation-
    After successful login user can 
     • Buy Product
     • view all product available on application
     • manage their order
     • Add product into car
