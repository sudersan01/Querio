(function(){
    'use strict';
    angular.module('myApp-1',[]).controller('control', function($scope){
        $scope.msg="";
        $scope.colour="";
        $scope.check = function(){
            if($scope.pwd1==$scope.pwd2)
        {
            $scope.msg="Passwords matched";
            $scope.colour="green";
        }
        else
        {
            $scope.msg="Password do not match!!!";
            $scope.colour="red";
        }
        return $scope.msg;
     }
        
       
        
     
    })
    
})();