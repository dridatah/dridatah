"use client";
import { store } from "@/rtk/app/store";
import { useEffect } from "react";
import { Provider } from "react-redux";
import ScrollToTop from "react-scroll-to-top";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <!--Essential css files--> */}
        <link rel="stylesheet" href="/assets/css/all.css" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/slick.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />

        {/* <!--favicon--> */}
        <link rel="icon" href="/assets/images/favicon.ico" />
      </head>

      <body>
        {/* main content here */}
        <Provider store={store}>
          {children}

          {/* <!--scrolltop button start--> */}
          <ScrollToTop
            className="scroll-top-btn crn-sroll-top-btn"
            smooth
            component={
              <i className="fa-solid fa-angle-up scroll-to-top-icon"></i>
            }
          />
          {/* <!--scrolltop button end--> */}
        </Provider>

        {/* <!--Esential Js Files--> */}
        <script src="/assets/js/bootstrap.min.js"></script>
        <script src="/assets/js/wow.js"></script>
        <script src="/assets/js/main.js"></script>
      </body>
    </html>
  );
}
