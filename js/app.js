/**
 * Created by you on 2/12/2015.
 */
var app = angular.module("myApp", ["ui.bootstrap", "ui.router" , "Mycontrollers", "Myservices"]);

app.config(function($stateProvider, $urlRouterProvider){

    $stateProvider

        .state('home', {
            url: '/home',
            views: {
                'mainArea' : {
                    templateUrl: 'templates/home.html',
                    controller: 'homecontroller'
                }
            }
        })

        .state('servicesView', {
            url: '/servicesView',
            views: {
                'mainArea' : {
                    templateUrl: 'templates/home.html'
                }
            }
        })


        .state('servicesView.chauffer', {
            url: '/chauffer',
            views: {
                'servicesArea' : {
                    templateUrl: 'templates/servicesView.chauffer.html',
                    controller: 'homecontroller'
                }
            }
        })


        .state('servicesView.entertainment', {
            url: '/entertainment',
            views: {
                'servicesArea' : {
                    templateUrl: 'templates/servicesView.entertainment.html',
                    controller: 'homecontroller'
                }
            }
        })



        .state('servicesView.mobile', {
            url: '/mobile',
            views: {
                'servicesArea' : {
                    templateUrl: 'templates/servicesView.mobile.html',
                    controller: 'homecontroller'
                }
            }
        })


        .state('servicesView.refreshment', {
            url: '/mobile',
            views: {
                'servicesArea' : {
                    templateUrl: 'templates/servicesView.refreshment.html',
                    controller: 'refreshmentcontroller'
                }
            }
        })




        .state('about', {
            url: '/about',
            views: {
                'mainArea' : {
                    templateUrl: 'templates/about.html',
                    controller: 'aboutcontroller'
                }
            }
        })

        .state('cities', {
            url: '/cities',
            views: {
                'mainArea' : {
                    templateUrl: 'templates/cities.html',
                    controller: 'citiescontroller'
                }
            }
        })

        .state('deals', {
            url: '/deals',
            views: {
                'mainArea' : {
                    templateUrl: 'templates/deals.html'
                }
            }
        })


        .state('booking', {
            url: '/booking',
            views: {
                'mainArea' : {
                    templateUrl: 'templates/booking.html'
                }
            }
        });




    $urlRouterProvider.otherwise('/home');
});