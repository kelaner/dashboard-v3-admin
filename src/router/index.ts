import { createRouter, type RouteRecordRaw } from "vue-router";
import { flatMultiLevelRoutes, history } from "./helper";
import routeSettings from "@/config/route";

const Layouts = () => import("@/layouts/index.vue");

/**
 * 常驻路由
 * 除了 redirect/403/404/login 等隐藏页面，其他页面建议设置 Name 属性
 */
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/redirect",
    component: Layouts,
    meta: {
      hidden: true,
    },
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("@/views/redirect/index.vue"),
      },
    ],
  },
  {
    path: "/403",
    component: () => import("@/views/error-page/403.vue"),
    meta: {
      hidden: true,
    },
  },
  {
    path: "/404",
    component: () => import("@/views/error-page/404.vue"),
    meta: {
      hidden: true,
    },
    alias: "/:pathMatch(.*)*",
  },
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      hidden: true,
    },
  },
  {
    path: "/",
    component: Layouts,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/dashboard/index.vue"),
        name: "Dashboard",
        meta: {
          title: "首页",
          elIcon: "HomeFilled",
          // svgIcon: "dashboard",
          // affix: true,
        },
      },
    ],
  },
  {
    path: "/mall",
    component: Layouts,
    redirect: "/mall/product",
    name: "Mall",
    meta: {
      title: "积分商城",
      elIcon: "Shop",
    },
    children: [
      {
        path: "product",
        component: () => import("@/views/mall/product/index.vue"),
        name: "Product",
        meta: {
          title: "商品列表",
          elIcon: "GoodsFilled",
          keepAlive: true,
        },
      },
      {
        path: "order",
        component: () => import("@/views/mall/order/index.vue"),
        name: "Order",
        meta: {
          title: "订单管理",
          elIcon: "Promotion",
          keepAlive: true,
        },
      },
    ],
  },
  {
    path: "/community",
    component: Layouts,
    redirect: "/community/posts",
    name: "Community",
    meta: {
      title: "社区运营",
      elIcon: "Grid",
    },
    children: [
      {
        path: "posts",
        component: () => import("@/views/community/posts/index.vue"),
        name: "Posts",
        meta: {
          title: "帖子管理",
          elIcon: "Tickets",
          keepAlive: true,
        },
      },
      {
        path: "deletePosts",
        component: () => import("@/views/community/deletePosts/index.vue"),
        name: "DeletePosts",
        meta: {
          title: "删除记录",
          elIcon: "Delete",
          keepAlive: true,
        },
      },
      {
        path: "userList",
        component: () => import("@/views/community/userList/index.vue"),
        name: "UserList",
        meta: {
          title: "用户管理",
          elIcon: "User",
          keepAlive: true,
        },
      },
      {
        path: "pointTask",
        component: () => import("@/views/community/pointTask/index.vue"),
        name: "PointTask",
        meta: {
          title: "积分任务",
          elIcon: "Finished",
          keepAlive: true,
        },
      },
      {
        path: "userPoints",
        component: () => import("@/views/community/userPoints/index.vue"),
        name: "UserPoints",
        meta: {
          title: "用户积分管理",
          elIcon: "Coin",
          keepAlive: true,
        },
      },
    ],
  },

  // {
  //   path: "/table",
  //   component: Layouts,
  //   redirect: "/table/element-plus",
  //   name: "Table",
  //   meta: {
  //     title: "表格",
  //     elIcon: "Grid",
  //   },
  //   children: [
  //     {
  //       path: "element-plus",
  //       component: () => import("@/views/table/element-plus/index.vue"),
  //       name: "ElementPlus",
  //       meta: {
  //         title: "Element Plus",
  //         keepAlive: true,
  //       },
  //     },
  //     {
  //       path: "vxe-table",
  //       component: () => import("@/views/table/vxe-table/index.vue"),
  //       name: "VxeTable",
  //       meta: {
  //         title: "Vxe Table",
  //         keepAlive: true,
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: "/menu",
  //   component: Layouts,
  //   redirect: "/menu/menu1",
  //   name: "Menu",
  //   meta: {
  //     title: "多级路由",
  //     svgIcon: "menu",
  //   },
  //   children: [
  //     {
  //       path: "menu1",
  //       component: () => import("@/views/menu/menu1/index.vue"),
  //       redirect: "/menu/menu1/menu1-1",
  //       name: "Menu1",
  //       meta: {
  //         title: "menu1",
  //       },
  //       children: [
  //         {
  //           path: "menu1-1",
  //           component: () => import("@/views/menu/menu1/menu1-1/index.vue"),
  //           name: "Menu1-1",
  //           meta: {
  //             title: "menu1-1",
  //             keepAlive: true,
  //           },
  //         },
  //         {
  //           path: "menu1-2",
  //           component: () => import("@/views/menu/menu1/menu1-2/index.vue"),
  //           redirect: "/menu/menu1/menu1-2/menu1-2-1",
  //           name: "Menu1-2",
  //           meta: {
  //             title: "menu1-2",
  //           },
  //           children: [
  //             {
  //               path: "menu1-2-1",
  //               component: () => import("@/views/menu/menu1/menu1-2/menu1-2-1/index.vue"),
  //               name: "Menu1-2-1",
  //               meta: {
  //                 title: "menu1-2-1",
  //                 keepAlive: true,
  //               },
  //             },
  //             {
  //               path: "menu1-2-2",
  //               component: () => import("@/views/menu/menu1/menu1-2/menu1-2-2/index.vue"),
  //               name: "Menu1-2-2",
  //               meta: {
  //                 title: "menu1-2-2",
  //                 keepAlive: true,
  //               },
  //             },
  //           ],
  //         },
  //         {
  //           path: "menu1-3",
  //           component: () => import("@/views/menu/menu1/menu1-3/index.vue"),
  //           name: "Menu1-3",
  //           meta: {
  //             title: "menu1-3",
  //             keepAlive: true,
  //           },
  //         },
  //       ],
  //     },
  //     {
  //       path: "menu2",
  //       component: () => import("@/views/menu/menu2/index.vue"),
  //       name: "Menu2",
  //       meta: {
  //         title: "menu2",
  //         keepAlive: true,
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: "/hook-demo",
  //   component: Layouts,
  //   redirect: "/hook-demo/use-fetch-select",
  //   name: "HookDemo",
  //   meta: {
  //     title: "Hook 示例",
  //     elIcon: "Menu",
  //     alwaysShow: true,
  //   },
  //   children: [
  //     {
  //       path: "use-fetch-select",
  //       component: () => import("@/views/hook-demo/use-fetch-select.vue"),
  //       name: "UseFetchSelect",
  //       meta: {
  //         title: "useFetchSelect",
  //       },
  //     },
  //     {
  //       path: "use-fullscreen-loading",
  //       component: () => import("@/views/hook-demo/use-fullscreen-loading.vue"),
  //       name: "UseFullscreenLoading",
  //       meta: {
  //         title: "useFullscreenLoading",
  //       },
  //     },
  //     {
  //       path: "use-watermark",
  //       component: () => import("@/views/hook-demo/use-watermark.vue"),
  //       name: "UseWatermark",
  //       meta: {
  //         title: "useWatermark",
  //       },
  //     },
  //   ],
  // },
];

/**
 * 动态路由
 * 用来放置有权限 (Roles 属性) 的路由
 * 必须带有 Name 属性
 */
export const asyncRoutes: RouteRecordRaw[] = [
  {
    path: "/permission",
    component: Layouts,
    redirect: "/permission/page",
    name: "Permission",
    meta: {
      title: "权限管理",
      svgIcon: "lock",
      roles: ["admin", "editor"], // 可以在根路由中设置角色
      alwaysShow: true, // 将始终显示根菜单
    },
    children: [
      {
        path: "adminList",
        component: () => import("@/views/permission/adminList.vue"),
        name: "AdminList",
        meta: {
          title: "管理人员列表",
          elIcon: "Avatar",
          roles: ["admin"], // 或者在子导航中设置角色
        },
      },
      {
        path: "page",
        component: () => import("@/views/permission/page.vue"),
        name: "PagePermission",
        meta: {
          title: "页面权限",
          elIcon: "Key",
          roles: ["admin"], // 或者在子导航中设置角色
        },
      },

      {
        path: "directive",
        component: () => import("@/views/permission/directive.vue"),
        name: "DirectivePermission",
        meta: {
          title: "指令权限", // 如果未设置角色，则表示：该页面不需要权限，但会继承根路由的角色
          elIcon: "EditPen",
          roles: ["admin", "editor"],
        },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*", // Must put the 'ErrorPage' route at the end, 必须将 'ErrorPage' 路由放在最后
    redirect: "/404",
    name: "ErrorPage",
    meta: {
      hidden: true,
    },
  },
];

const router = createRouter({
  history,
  routes: routeSettings.thirdLevelRouteCache ? flatMultiLevelRoutes(constantRoutes) : constantRoutes,
});

/** 重置路由 */
export function resetRouter() {
  // 注意：所有动态路由路由必须带有 Name 属性，否则可能会不能完全重置干净
  try {
    router.getRoutes().forEach((route) => {
      const { name, meta } = route;
      if (name && meta.roles?.length) {
        router.hasRoute(name) && router.removeRoute(name);
      }
    });
  } catch {
    // 强制刷新浏览器也行，只是交互体验不是很好
    window.location.reload();
  }
}

export default router;
