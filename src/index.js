import React from "react";
import ReactDOM from "react-dom";

import './index.css';//import all the tailwind utilities.
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";

ReactDOM.render(
<ContextProvider>
    <App />
</ContextProvider> ,
document.getElementById('root')
);//hook our React application to the root div.
