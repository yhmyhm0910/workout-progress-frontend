import "./chunk-C42J3HML.js";

// src/app/views/pages/routes.ts
var routes = [
  {
    path: "404",
    loadComponent: () => import("./page404.component-VSZEK23F.js").then((m) => m.Page404Component),
    data: {
      title: "Page 404"
    }
  },
  {
    path: "500",
    loadComponent: () => import("./page500.component-TELIHZYR.js").then((m) => m.Page500Component),
    data: {
      title: "Page 500"
    }
  },
  {
    path: "login",
    loadComponent: () => import("./login.component-SUPC3HK3.js").then((m) => m.LoginComponent),
    data: {
      title: "Login Page"
    }
  }
];
export {
  routes
};
//# sourceMappingURL=routes-OFKJOVIH.js.map
