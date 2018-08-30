// const config = {
//   api: {
//     url: 'http://airzoneservice.airzonesl.es:3080/api/auth/v1/login',
//     user: 'fvena@altracorporacion.es',
//     password: 'foobarfoo',
//   },
// };

window.$docsify = {
  name: 'Didor Docs',
  logotype: '/static/img/logo.svg',
  basePath: '/docs',
  repo: 'https://github.com/fvena/didor-docs',
  homepage: 'home.md',
  demo: {
    css: 'docs/config/didor.css',
  },
  loadNavbar: '_navbar.md',
  loadSidebar: '_sidebar.md',
  mergeNavbar: true,
  auto2top: true,
  pagination: {
    previousText: 'Anterior',
    nextText: 'Siguiente',
  },
  versions: [
    {
      name: 'v3.0.0',
      basePath: 'v3_0_0',
      homePage: 'home',
    },
    {
      name: 'v2.0.0',
      basePath: 'v2_0_0',
      homePage: 'home',
    },
    {
      name: 'v1.0.0',
      basePath: 'v1_0_0',
      homePage: 'home',
    },
  ],
};