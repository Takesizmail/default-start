import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./store/create-store";
import {BrowserRouter} from 'react-router-dom'
import {Provider} from "react-redux"
import {ProjectApiProvider} from './utils/context'
import ProjectApi from "./services/project-api";


const projectApi = new ProjectApi();

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <ProjectApiProvider value={projectApi}>
            <App />
            </ProjectApiProvider>
        </Provider>
    </BrowserRouter>
    ,document.getElementById('root')
);
