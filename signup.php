<!DOCTYPE html>
<html ng-app="myApp-1">
    <head>
        <title>Querio | Signup</title>
        <script src="angular.min.js"></script>
        <script src="app.js"></script>
        <link rel="stylesheet" href="bootstrap-4.5.2-dist/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
        <link rel="stylesheet" href="styles1.css">
    </head>
    <body>
        <div class="container mt-2 mb-4">
        <div class="row justify-content-md-center">
        <div class="col-md-6">
        <form  action="signin.html"  method = "post" class="myform" name="myform">
        <fieldset>
        <h1 style="color:darkslategray;font-weight:700;font-size:120%;margin-left:180px;">SIGN UP</h1><br>	 
        <div class="form-group">
        <label for="">NAME </label> 
        <input class="form-control" type="textbox" name="name"  required="true"  >  
        </div>	 
        <label for="">USER NAME </label> 
        <input class="form-control" type="textbox" name="username" id="username" ng-model="username" required="true" ng-minlength="5" ng-maxlength="20" ng-pattern="/^[A-z][A-z0-9]*$/" required />  
   <span ng-show="!myform.username.$error.minLength && !myform.username.$error.maxLength && myform.username.$error.pattern && myform.username.$dirty">Must start with a letter, and contain letters &amp; numbers only.</span>
   <span ng-show="!myform.username.$error.required && (myform.username.$error.minlength || myform.username.$error.maxlength) && myform.username.$dirty">Username must be between 5 and 20 characters.</span>
        <br>
        <label for="">EMAIL </label> 
        <input class="form-control" type="textbox" name="email"  required="true"  >  
       <div ng-controller='control'> 
        <div class="form-group">
        <label for="">PASSWORD </label> 
        <input class="form-control" type="text" name="password" placeholder = "Password" ng-model="pwd1" ng-style="{color:colour}" ng-minlength="8" ng-maxlength="20" ng-pattern="/(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z])/" required />
        <span ng-show="!myform.password.$error.required && (myform.password.$error.minlength || myform.password.$error.maxlength) && myform.password.$dirty">Passwords must be between 8 and 20 characters.</span>
    <span ng-show="!myform.password.$error.required && !myform.password.$error.minlength && !myform.password.$error.maxlength && myform.password.$error.pattern && myform.password.$dirty">Must contain one lower &amp; uppercase letter, and one non-alpha character (a number or a symbol.)</span>
        <div class="form-group">
        <br>
        <label for="">CONFIRM PASSWORD </label> 
        <input class="form-control" type="text" name="cpassword"  required="true"  placeholder = "Password" ng-model="pwd2" ng-keyup="check()" ng-style="{color:colour}">  
        </div>
</div>
        <p>{{msg}}</p>
        <button  class="btn btn-secondary btn-block" type="submit"   class="button btn-lg btn-block"style="font-weight:600;font-size:100%;" ng-disabled="!myform.$valid">Submit
        </button>
        </fieldset>
        </form>
        </div></div></div>
</body>
</html>