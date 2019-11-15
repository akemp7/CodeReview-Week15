import React from 'react';
import Home from './Home';
import KegList from './KegList';
import { Switch, Route } from 'react-router-dom';

function App(){
    return(
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/list" component={KegList} />
            </Switch>
        </div>
    );
}

export default App;