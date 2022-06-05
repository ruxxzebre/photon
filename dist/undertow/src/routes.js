import MainPage from "./views/MainPage.vue";
import NotesPage from "./views/NotesPage.vue";
import NotesBasePage from "./views/NotesBasePage.vue";
import EditNotePage from "./views/EditNotePage.vue";
import HelpPage from "./views/HelpPage.vue";
import HelloWorld from "./components/HelloWorld.vue";
import _ from "lodash";

export const routes = [
  {
    path: "/",
    // ! redirect "/hello", - TODO: Fix
    component: HelloWorld,
    title: "Home",
    icon: "home",
  },
  {
    path: "/notes",
    component: NotesBasePage,
    title: "Notes",
    icon: "folder",
    editableProps: {
      icon: "plus",
    },
  },
  // {
  //   path: "/hello",
  //   component: MainPage,
  //   title: "Hello",
  //   icon: "light-up",
  // },
  {
    path: "/editor",
    component: EditNotePage,
    title: "Editor",
    icon: "eye",
  },
  {
    path: "/help",
    component: HelpPage,
    title: "Help",
    icon: "help",
  },
  // {
  // 	path: '*',
  // 	redirect: '/',
  // },
];

/**
 * Gets all the routes
 * @param {string[]} arr - array of keys that won't be ommited
 * @returns
 */
export const getRoutes = (arr = null) => {
  if (!arr || !Array.isArray(arr)) {
    return routes;
  }
  return routes.map((route) => {
    return _.pickBy(route, (_, k) => !!arr.includes(k));
  });
};
