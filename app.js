var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
   
    $routeProvider
    .when('/', {
        templateUrl: 'main.html',
        controller: 'mainController',
        activetab: 'main'
    })

    .when('/home', {
        templateUrl: 'main.html',
        controller: 'mainController',
        activetab: 'main'
    })
    
    .when('/about', {
        templateUrl: 'about.html',
        controller: 'aboutController',
        activetab: 'about'
    })
    
    .when('/experience', {
        templateUrl: 'experience.html',
        controller: 'experienceController',
        activetab: 'experience'
    })
    
    .when('/projects', {
        templateUrl: 'projects.html',
        controller: 'projectsController',
        activetab: 'projects'
    })
    
});

myApp.controller('mainController', ['$scope', '$location', '$log', '$route', function($scope, $location, $route) {
    $scope.$route = $route;
    

}]);

myApp.controller('aboutController', ['$scope', '$location', '$log', '$route', function($scope, $location, $route) {
    $scope.$route = $route;
    

}]);

myApp.controller('experienceController', ['$scope', '$location', '$log', '$route', function($scope, $location, $route) {
    $scope.$route = $route;
    

}]);

myApp.controller('projectsController', ['$scope', '$location', '$log', '$route', function($scope, $location, $route) {
    $scope.$route = $route;
    

}]);

var links = [
    {
        page: "home",
        number: 1,
        icon: "home"
    },
    {
        page: "about",
        number: 2,
        icon: "person"
    },
    {
        page: "experience",
        number: 3,
        icon: "domain"
    },
    {
        page: "projects",
        number: 4,
        icon: "folder"
    },
    
    ]

var socialLinks = [
    {
        page: "http://www.facebook.com/shinkhouse/",
        class: "social",
        image: "img/facebook.png",
        alt: "Facebook Profile"
    },
    {
        page: "http://www.twitter.com/shinkhouse/",
        class: "social",
        image: "img/twitter.png",
        alt: "Twitter Profile"
    },
    {
        page: "http://www.instagram.com/shinkhouse/",
        class: "social",
        image: "img/instagram.png",
        alt: "Instagram Profile"
    },
    {
        page: "http://www.linkedin.com/in/shinkhouse/",
        class: "social",
        image: "img/linkedin.png",
        alt: "LinkedIn Profile"
    },
    {
        page: "http://github.com/shinkhouse/",
        class: "social",
        image: "img/github.png",
        alt: "Github Profile"
    },
    {
        page: "http://www.behance.com/shinkhouse/",
        class: "social",
        image: "img/behance.png",
        alt: "Behance Profile"
    },
]
    

myApp.controller('navlinks', ['$scope', '$location', '$log', '$route', function($scope, $location, $route) {
    $scope.items = links;
}]);

myApp.controller('sociallinks', ['$scope', '$location', '$log', '$route', function($scope, $location, $route) {
    $scope.items = socialLinks;
}]);