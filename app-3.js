(function () {
    'use strict';
    angular.module('ControllerAsApp', [])
    .controller('ParentController1', ParentController1)
    .controller('ChildController1', ChildController1)
    .controller('ParentController2', ParentController2)
    .controller('ChildController2', ChildController2);
    ParentController1.$inject = ['$scope'];
    function ParentController1($scope) {
    $scope.parentValue = 1;
    $scope.pc = this;
    $scope.pc.parentValue = 1;
    }
    ChildController1.$inject = ['$scope'];
    function ChildController1($scope) {
    console.log("$scope.parentValue: ", $scope.parentValue);
    console.log("CHILD $scope: ", $scope);
    }
    function ParentController2() {
    var parent = this;
    parent.value = 'Alpha@123';
    }
    ChildController2.$inject = ['$scope'];
    function ChildController2($scope) {
    var child = this;
    child.value = password;
    child.checker=function()
    {
        if(child.value==parent.value)
        {

            return false;
        }
        else
        {
           
            return true;
        }
    }
    }
    })();