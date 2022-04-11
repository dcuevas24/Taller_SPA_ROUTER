class Router {
  constructor(routes) {
    this.routes = routes;
    this._loadInitialRoute();
  }

  //Cargar ruta inicial del proyecto (Donde esta parado el router)
  _loadInitialRoute() {
    const pathNameSplit = window.location.pathname.split("/");
    const pathSegs = pathNameSplit.length > 1 ? pathNameSplit.slice(1) : "";

    this.loadRoute(...pathSegs);
  }
}
