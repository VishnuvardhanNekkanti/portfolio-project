import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    let title = "Vishnu Nekkanti"; // Default title

    if (location.pathname === "/projects") {
      title = "Vishnu Nekkanti - Projects";
    } else if (location.pathname === "/resume") {
      title = "Vishnu Nekkanti - Resume";
    } else if (location.pathname === "/contact") {
      title = "Vishnu Nekkanti - Contact";
    } else if (location.pathname === "/skills") {
      title = "Vishnu Nekkanti - Skills";
    }

    document.title = title;
  }, [location.pathname]); // Runs every time the route changes

  return null; // This component doesn't render anything
};

export default DynamicTitle;
