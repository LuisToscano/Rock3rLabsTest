'use strict';
angular.module('myApp.view2', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/analytics', {
    templateUrl: 'view2/view2.html',
    controller: 'AnalyticsCtrl'
  });
}])
.controller('AnalyticsCtrl', ['analyticsProvider', '$scope', function(analyticsProvider, $scope) {
    var myData = analyticsProvider.getData();
    var chart1; 
    
    var mySeries = [];
    
    for(var i=0; i< myData.length; i++){
      var obj = {name: myData[i].zoneId, data: [myData[i].data.count]}
      mySeries.push(obj);
    }
    
    $(function () { 
    $('#container').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Count by zones'
        },
        xAxis: {
            categories: ['Count']
        },
        yAxis: {
            title: {
                text: 'Count'
            }
        },
        series: mySeries
    });
});
}]);
