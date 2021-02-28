import './App.css';
import React, {Component}from 'react';
class App extends Component {
  
  state={
    person:{
      fullName: "LABIEDH Ali",
      bio: "Technicien supérieur en informatique expérimenté et fiable ayant une solide formation technique et d'excellentes références en matière de service à la clientèle. Capable d'effectuer plusieurs tâches de façon efficace, de gérer plusieurs installations simultanément et d'achever des projets rapidement et avec précision.",
      imgSrc: "https://media-exp1.licdn.com/dms/image/C4E03AQHa4yHpLY_FUQ/profile-displayphoto-shrink_200_200/0/1600339754380?e=1620259200&v=beta&t=VGoJsrDKOZwBZJ6kmmbr_w05C8LebfYfE75nExdIaQU",
      profession: "IT Manger"
    },
     show:true,
     date:null
  };
  componentDidMount() {
    this.timerID = setInterval(() => this.handleNewDate(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  handleNewDate() {
    this.setState({
      date: new Date()
    });
  }
  
  handleClick=() => this.setState({ show: !this.state.show })

  render() {
    return (
      <div className="App">
      {  console.log(this.state.show,this.state.date)}
        { this.state.show && (
          <div className="cart">
            <div> <h2> {this.state.person.fullName}</h2></div>
            <div> {this.state.person.bio}</div>
            <div> <img src={this.state.person.imgSrc} /></div>
            <div> <h4>{this.state.person.profession} </h4> </div>
          </div>
        )}
        <button className="cta"onClick={this.handleClick}>Toggle show</button>
        {this.state.date && (
          <p className="time">{this.state.date.toISOString()}</p>
        )}
        
      </div>
    );
  }
}

export default App;
