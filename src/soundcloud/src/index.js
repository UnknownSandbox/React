import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import App from './components/App/index';
import Callback from './components/Callback';
import Stream from './components/Stream/index';
import tracks from './data/tracks'
import registerServiceWorker from './registerServiceWorker';
import { default as SoundCloudConnect } from './API/SoundCloud';

SoundCloudConnect();

const store = configureStore();
store.dispatch(actions.setTracks(tracks));

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Stream} />
                <Route path="/" component={Stream} />
                <Route path="/callback" component={Callback} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);

module.hot.accept();

if (module.hot) {
    module.hot.accept();
}
registerServiceWorker();