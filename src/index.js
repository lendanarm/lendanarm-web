import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { unregister } from "./registerServiceWorker";
unregister();

ReactDOM.render(<App />, document.getElementById("root"));
