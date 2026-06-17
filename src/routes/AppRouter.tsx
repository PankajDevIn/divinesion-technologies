import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import AppDevelopment from "../pages/services/AppDevelopment";
import WebsiteDevelopment from "../pages/services/WebsiteDevelopment";
import EnterpriseApps from "../pages/services/EnterpriseApps";
import LogoBranding from "../pages/services/LogoBranding";
import AIAutomation from "../pages/services/AIAutomation";
import CloudSolutions from "../pages/services/CloudSolutions";
const router = createHashRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },

  { path: "/contact", element: <Contact /> },
  { path: "/services", element: <Services />,}  
  , { path: "/services/app-development", element: <AppDevelopment /> },
   { path: "/services/website-development", element: <WebsiteDevelopment /> },
    { path: "/services/enterprise-apps", element: <EnterpriseApps /> },
   { path: "/services/logo-branding", element: <LogoBranding /> },
   {
    path:"/services/ai-automation" , element:<AIAutomation/>
   },
   {
    path:"/services/cloud-solutions",element:<CloudSolutions/>
   }
 
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}