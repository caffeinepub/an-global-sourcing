import {
  createRootRoute,
  createRoute,
  type createRouter,
} from "@tanstack/react-router";
import Layout from "../components/layout/Layout";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import ServicesPage from "../pages/ServicesPage";

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products",
  component: ProductsPage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: ServicesPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

export const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  productsRoute,
  servicesRoute,
  contactRoute,
]);

export type AppRouter = ReturnType<typeof createRouter<typeof routeTree>>;
