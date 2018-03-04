/* @ngInject */
export const routesConfig = ($urlRouterProvider, $stateProvider, $locationProvider) => {
    $stateProvider    
    .state('home', {
            url: '/',
            templateUrl: 'components/dashboard/dashboard.html'
        })
        .state('dashboard', { // TODO:  Make Dashboard its own directive
            url: '/dashboard',
            templateUrl: 'components/dashboard/dashboard.html',
        })
        .state('workouts', {
            url: '/workouts',
            template: '<workouts />'
        })
        .state('goals', {
            url: '/goals',
            templateUrl: 'components/goals/goals.html'
        });
};