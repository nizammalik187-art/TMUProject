import React, { useState, useEffect } from "react";

function TopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ...other components */}
      {showButton && (
        <a
          href="#top"
          className="btn btn-primary btn-lg-square back-to-top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <i className="fa fa-arrow-up"></i>
        </a>
      )}
    </>
  );
}

export default TopButton;
