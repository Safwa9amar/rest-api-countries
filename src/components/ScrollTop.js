// ScrollToTop.jsx
import { useEffect } from "react";

const ScrollToTop = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0, "smooth");
  }, [props.ShowDetaills]);

  return <>{props.children}</>;
};

export default ScrollToTop;
