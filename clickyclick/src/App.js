import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import ZodiacCard from "./components/ZodiacCard";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import zodiacs from "./zodiac.json";
import Status from "./components/Status";



class App extends Component {
    
    //initial state
    state = {
        zodiacs: zodiacs,
        points: 0,
        clicked: [],
        lost: false,
        message: "Pick Your Animal"
    }

    selected = id => {
        //Filter Zodiac onclick
        var selectedZodiac = this.state.zodiacs.filter(zodiac => (id === zodiac.id))

        //Update +1 on points per click
        var currentpoints = this.state.points;
        currentpoints++;

        // Pushing every id that has been clicked
        var existingclick = this.state.clicked;
        var currentclick = selectedZodiac[0].id;
        var allclicked = [];
        var turnLost;
    


        if (this.state.clicked.includes(selectedZodiac[0].id)){
            console.log("already exists")
            turnLost = true
            this.setState({points: 0, clicked: [], lost: turnLost})
            console.log(turnLost)

        } else {
            this.setState({message: "Pick Your Animal"})
            console.log("thid doesn't exist yet")
            existingclick.push(currentclick)
            allclicked = existingclick
            this.setState({points: currentpoints, clicked: allclicked})
       
        }
  
        if (turnLost === true){
            console.log("better Retry")
            this.setState({message: "You Lost. Let's Retry"})
        } else if (currentpoints === 12) {
            console.log("Good Job")
            this.setState({points: 0, message: "You WON! Let's Play Again"})
        } else {
            return;
        }
        
      
        
        // zodiac: selectedzodiac 필요없는거 아냐?
       
        
        // this.setState({zodiacs: selectedZodiac, points: currentpoints})
    
        //왜 이거는 안되는걸까?
        console.log("HERREEE", selectedZodiac, "cicked", this.state.clicked)

    }
    
    

    render () {

        
        var random = zodiacs.sort(function(a, b){return 0.5 - Math.random()});
        
     

        return (
        <Wrapper>
        
        <Title title = "ZODIAC SIGN" points = {this.state.points}>  </Title>

        <Status message = {this.state.message}> </Status>
        <div className="container">
        <div className="row bodyrow">
        {random.map(zodiac =>
        <ZodiacCard
        key = {zodiac.id}
        id = {zodiac.id}
        name={zodiac.name} 
        year={zodiac.year} 
        ymbol={zodiac.symbol} 
        image={zodiac.image}
        selected={this.selected}
        
        />
    
        
        )};
        
        </div>
        </div>
        </Wrapper>
        )

    }

    
}

export default App;