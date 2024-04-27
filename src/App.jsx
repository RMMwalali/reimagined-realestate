import Footer from "../components/footer/footer";
import ShowCase1 from "./showcase1";
import NavBar from "../components/navbar-component/navbar";
import Services from "./services";
import ShowCase2 from "./showcase2";
import Error404 from "./error404";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutProject from "../components/project-page-components/aboutProject";
import Products from "./products";
import About from "./about";
import Service from "./service";
import HomePage from "../components/home-page-components/homePage";
import Featured from "../components/featured-&-popluar-page-component/featrued";
import Popular from "../components/featured-&-popluar-page-component/popluar";
import Contact from "./contact";
import Results from "./results";
import WhatsAppButton from "../components/home-page-components/whatsappButton";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <HomePage />
        <WhatsAppButton/>
        <Footer />
      </>
    ),
  },
  {
    path: "/services",
    element: (
      <>
        <NavBar />
        <Services />
        <WhatsAppButton/>
        <Footer />
      </>
    ),
  },
  {
    path: "/search",
    element: (
      <>
        <NavBar navBar2={true} />
        <Results />
        <WhatsAppButton/>
        <Footer />
      </>
    ),
  },
  {
    path: "/services/:id",
    element: (
      <>
        <NavBar />
        <Service />
        <WhatsAppButton/>
        <Footer />
      </>
    ),
  },
  {
    path: "/showcases/showcase1",
    element: (
      <>
        <NavBar showCase1Page={true} />
        <ShowCase1 />
        <WhatsAppButton/>
        <Footer />
      </>
    ),
  },
  {
    path: "/gallery",
    element: (
      <>
        <NavBar />
        <ShowCase2 />
        <WhatsAppButton/>
        <Footer />
      </>
    ),
  },
  {
    path: "/featured",
    element: (
      <>
        <NavBar />
        <Featured />
        <WhatsAppButton/>
        <Footer />
      </>
    ),
  },
  {
    path: "/popular",
    element: (
      <>
        <NavBar />
        <Popular />
        <WhatsAppButton/>
        <Footer />
      </>
    ),
  },
  {
    path: "/products/:id",
    element: (
      <>
        <NavBar navBar2={true} />
        <Products />
        <WhatsAppButton/>
        <Footer />
      </>
    ),
  },
  {
    path: "/projects/:id",
    element: (
      <>
        <NavBar />
        <AboutProject />
        <WhatsAppButton/>
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <NavBar />
        <About />
        <WhatsAppButton/>
        <Footer />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <NavBar />
        <Contact />
        <WhatsAppButton/>
        <Footer />
      </>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <Error404 />
        <WhatsAppButton/>
      </>
      )
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
