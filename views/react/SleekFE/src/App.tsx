import store from "./redux/store.js";
import "./App.css";
import "./build.css";

import {Provider} from "react-redux";
import Page from "./components/page.js";

function App() {
    return (
        <Provider store={store}>
            <Page></Page>
        </Provider>
    );
}

export default App;
