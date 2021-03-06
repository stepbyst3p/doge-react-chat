import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import "typeface-roboto";

const rootEl = document.getElementById("root");

ReactDOM.render(<App />, rootEl);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        ReactDOM.render(<App />, document.getElementById('root'))
    })
}

registerServiceWorker();
