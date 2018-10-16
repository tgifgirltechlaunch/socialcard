import React from "react";
import logo from '../logo.svg';
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

export default class Layout extends React.Component {
    constructor(){
        super();
        this.state = {
            title: 'Welcome',
            foottitle: 'Techlaunch React Class'
        };
    }
    
    // title method receives a value from input in Header.js and fires changeTitle which changes the state
    changeTitle(title){
        this.setState({title: title});
    }


    render(){
        
        return(
            <div>
                <img src={logo} className="App-logo" alt="logo" />
                
                {/* pass changeTitle as a title prop to header. When passing function/methods around you want to bind them to this  */}
                <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
                <Content />
                <Footer changeTitle={this.changeTitle.bind(this)} foottitle={this.state.foottitle} />
            </div>
        )
    }
}