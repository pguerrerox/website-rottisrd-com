export default [
  {
    path: "/marcas/rottis/",
    component: () => import(/* webpackChunkName: "page--src--pages--marcas--rottis-vue" */ "/Users/PedroGuerrero/Desktop/dev-web/com-rottisrd/src/pages/marcas/Rottis.vue")
  },
  {
    name: "__marcas_marcas",
    path: "/marcas/:marcas/",
    component: () => import(/* webpackChunkName: "page--src--pages--marcas--marcas-vue" */ "/Users/PedroGuerrero/Desktop/dev-web/com-rottisrd/src/pages/marcas/[marcas].vue"),
    meta: {
      dataPath: "/marcas/_marcas.json",
      dynamic: true
    }
  },
  {
    path: "/productos/",
    component: () => import(/* webpackChunkName: "page--src--pages--productos-vue" */ "/Users/PedroGuerrero/Desktop/dev-web/com-rottisrd/src/pages/Productos.vue")
  },
  {
    path: "/contacto/",
    component: () => import(/* webpackChunkName: "page--src--pages--contacto-vue" */ "/Users/PedroGuerrero/Desktop/dev-web/com-rottisrd/src/pages/Contacto.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/PedroGuerrero/Desktop/dev-web/com-rottisrd/src/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/PedroGuerrero/Desktop/dev-web/com-rottisrd/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/PedroGuerrero/Desktop/dev-web/com-rottisrd/src/pages/404.vue")
  }
]

