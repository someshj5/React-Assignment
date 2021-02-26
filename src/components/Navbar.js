import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [Admin, setAdmin] = useState(true);

  const handleFlush = () => {
    localStorage.removeItem("login");
    setAdmin(false);
  };

  const getStatus = () => {
    let loggedIn = localStorage.getItem("login");
    if (loggedIn === "admin") {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  };

  useEffect(() => {
    getStatus();
  }, [Admin]);

  useEffect(() => {
    getStatus();
  });

  return (
    <div>
      <div className="bg-light border-bottom-nav">
        <div className="container">
          <div className="row py-3">
            <div className=" col-6 text-left  ff-montserrat fs-20 fw-500 ">
              <a
                className="op-9 btn ff-montserrat fs-20 fw-500 f-style-normal
              f-stretch-normal lh2-0 l-spacing-normal fc-black31 mr-1"
                href="/"
              >
                We Shop
              </a>
            </div>
            {Admin === true ? (
              <div onClick={handleFlush} className="col-6 text-right">
                <a
                  href="/"
                  className="op-9 btn ff-montserrat fs-20 fw-500 f-style-normal
                                  f-stretch-normal lh2-0 l-spacing-normal fc-black31 mr-1"
                >
                  Logout
                </a>
              </div>
            ) : (
              <>
                <div className="col-6 text-right">
                  <a
                    href="/login "
                    className="op-9 btn ff-montserrat fs-20 fw-500 f-style-normal
                                 f-stretch-normal lh2-0 l-spacing-normal fc-black31 mr-1"
                  >
                    Login
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
