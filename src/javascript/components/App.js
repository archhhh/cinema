import React, {Component} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";


class App extends Component{
    render(){
        return (
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Header />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;