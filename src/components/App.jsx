import React from 'react';
import Home from './Home';
import KegList from './KegList';
import OrderForm from './OrderForm';
import KegControl from './KegControl'
import AddKeg from './AddKeg';
import { Switch, Route } from 'react-router-dom';

class App  extends React.Component(){
    constructor(props){
        super(props);
        this.state = {
            MasterList: []
        };
        this.handleNewKeg = this.handleNewKeg.bind(this);
    }

    handleNewKeg(newKeg){
        let temp = this.state.MasterList.slice();
        temp.push(newKeg);
        this.setState({MasterList:temp});
    }

    render(){
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path = '/add' render={() => <AddKeg onKegCreation={this.handleNewKeg} />} />
                    <Route path='/list' render={() => <KegControl MasterKegList={this.state.MasterList}  />} />
                    
                   
                </Switch>
            </div>
        );
    }
}

export default App;