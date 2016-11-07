(function(){

        angular.module('app')
            .directive('msgShow', function () {

                return{
                    restrict: 'E',
                    template: [
                        '<button type="button" class="btn btn-lg" ng-click="addMsg()"> Large button </button>',
                        '<p class="bg-danger" ng-repeat="msg in messages">Hello, {{msg.date | date }}</p>'
                    ].join(''),
                    link: function (scope, el, attr) {

                        scope.messages = [];

                        scope.addMsg = function () {
                            scope.massages.push({
                                id: +(new Date()),
                                date: new Date()
                            })
                        }
                    }
                }

            })

})()