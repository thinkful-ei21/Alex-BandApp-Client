import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import App from './App'
import AppRouter from './components/app-router';
import HomeHome from './components/home-home'
import registerServiceWorker from './registerServiceWorker';
import './index.css'

ReactDOM.render(
<Provider store={store}>
<Router>
    <div id="index">
    <Route exact path="/:band" component={AppRouter} />
    <Route exact path="/" component={HomeHome} />
    {/* <Route exact path="/" render={() => <Redirect to="/home"/>} /> */}
    </div>
{/* <App /> */}
</Router>
</Provider>,
document.getElementById('root'));
registerServiceWorker();

