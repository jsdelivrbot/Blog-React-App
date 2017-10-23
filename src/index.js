import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from './reducers';
import Posts from './containers/posts';
import SinglePost from './containers/post'
import PostNew from './containers/post_new';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <Switch>
                <Route path="/post/new" component={PostNew}/>
                <Route path="/post/:id" component={SinglePost}/>
                <Route path="/" component={Posts}/>
            </Switch>
        </BrowserRouter>
    </Provider>
, document.querySelector('.container'));
