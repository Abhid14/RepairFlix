var routes = [
  { path: "/", url: "./index.html", name: "home" },
  { path: "/index.html", url: "./index.html" },
  { path: "/intro/", url: "./pages/intro.html", name: "intro" },
  { path: "/user-login/", url: "./pages/user-login.html", name: "user-login" },
  { path: "/dept-login/", url: "./pages/centre-login.html", name: "centre-login" },
  { path: "/user/", url: "./pages/user.html", name: "user" },
  { path: "/dept/", url: "./pages/centre.html", name: "centre" },
  { path: "(.*)", url: "./pages/404.html" },
];
