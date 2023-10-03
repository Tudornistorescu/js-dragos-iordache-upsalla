var routes = [
  {
    name: 'Home',
    route: '/',
    text: 'Homepage',
  },
  {
    name: 'Contact',
    route: '/contact',
    text: 'Contact page',
  },
  {
    name: 'About',
    route: '/about',
    text: 'About page',
  },
];

<<<<<<< HEAD
var selectedRoute = '/';
=======
var selectedRoute = '/about-us';
>>>>>>> 121fc967390ceca65508113c5f6d6502daded0d6

switch (selectedRoute) {
  case '/':
    var route = routes.find(function (route) {
      return route.route === selectedRoute;
    });
    console.log(route.text);
<<<<<<< HEAD
=======
    break;

>>>>>>> 121fc967390ceca65508113c5f6d6502daded0d6
  case '/about':
    var route = routes.find(function (route) {
      return route.route === selectedRoute;
    });
    console.log(route.text);
<<<<<<< HEAD
=======
    break;

>>>>>>> 121fc967390ceca65508113c5f6d6502daded0d6
  case '/contact':
    var route = routes.find(function (route) {
      return route.route === selectedRoute;
    });
    console.log(route.text);
<<<<<<< HEAD
=======
    break;

  default:
    console.log('404');
>>>>>>> 121fc967390ceca65508113c5f6d6502daded0d6
}
