import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Seller from './Seller';
import Buyer from './Buyer';

class App extends React.Component {

    render() {
        return (
            <div className="shop">
                <Header />
                <Switch>
                    <Route exact path='/' component={Seller}/>
                    <Route path='/seller' component={Seller}/>
                    <Route path='/buyer' component={Buyer}/>
                </Switch>
            </div>
        );
    };
}

export default App;


