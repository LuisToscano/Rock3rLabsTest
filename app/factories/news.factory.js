
angular.module('myApp.view1').factory('newsProvider', myNewsProvider);
    
    function myNewsProvider(){
    var self = {
        getNews : getNewsArray
    };
    
    function getNewsArray(){
        return [
            {
                newspaper: 'Business Wire',
                date: 'Feb 18, 2016',
                title: 'new study shows one critical industry lagging behind in software security',
                img: 'img/business.jpg',
                summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
            },
            {
                newspaper: 'Business Wire',
                date: 'Feb 18, 2016',
                title: 'new study shows one critical industry lagging behind in software security',
                img: 'img/business.jpg',
                summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
            },
            {
                newspaper: 'Business Wire',
                date: 'Feb 18, 2016',
                title: 'new study shows one critical industry lagging behind in software security',
                img: 'img/business.jpg',
                summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
            }
        ];
    }
    return self;
}