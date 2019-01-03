import React, {Component} from "react";
import ZodiacCard from "./components/ZodiacCard";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import zodiacs from "./zodiac.json";

class App extends Component {

    //initial state
    state = {
        zodiacs: zodiacs
    }

    selected = id => {
        const selectedZodiac = this.state.zodiacs.filter(zodiac => (id === zodiac.id))
        this.setState({zodiacs: selectedZodiac})
    }
    

    render () {

        var random = zodiacs.sort(function(a, b){return 0.5 - Math.random()});
        
        return (
        <Wrapper>
            <Title title = "ZODIAC SIGN" number = "number of points">  </Title>
    
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
        </Wrapper>
        )

    } ;
}

export default App;