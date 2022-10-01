import { useState, useEffect} from "react";

const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      setScrollY(window.pageYOffset);
    });
  });

  return [scrollY];
}

export default useScroll;