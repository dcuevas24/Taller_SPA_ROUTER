class Router {
  constructor(routes) {
    this.routes = routes;
    this._loadInitialRoute();
  }

  /*Hacer match URL con la Ruta (Unir URL a la que se quiere ir con la que nos
  esta mostrando)*/
  _matchUrlToRoute(urlSegs) {
    const matchedRoute = this.routes.find((route) => {
      const routePathSegs = route.path.split("/").slice(1);

      if (routePathSegs.length !== urlSegs.length) {
        return false;
      }

      return routePathSegs.every(
        (routePathSeg, i) => routePathSeg === urlSegs[i]
      );
    });

    return matchedRoute;
  }

  //Cargar ruta inicial del proyecto (Donde esta parado el router)
  _loadInitialRoute() {
    const pathNameSplit = window.location.pathname.split("/");
    const pathSegs = pathNameSplit.length > 1 ? pathNameSplit.slice(1) : "";

    this.loadRoute(...pathSegs);
  }
}
