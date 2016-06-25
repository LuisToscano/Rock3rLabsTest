/**
 * Directiva para desplegar el saldo del usuario
 */

angular.module('myApp.view1')
    .directive('news', [function () {
        return {
        restrict: 'E',
        replace: true,
        templateUrl: 'directives/news.directive.html',
        scope: { index: '=index' },
        link: function(scope, elem, attr, ctrl) {
        },
        controllerAs: 'newsDirectiveController',
        controller: ['newsProvider', '$scope',function(newsProvider, $scope) {
            var news = newsProvider.getNews();
            var index = $scope.index;
            $scope.values = news[index];
        }]
    };
}]);
