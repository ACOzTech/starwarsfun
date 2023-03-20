import { Component, Fragment } from 'react';
import CardList from './CardList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],     
    }
  }

  componentDidMount() {
    const resp = this.getData('https://swapi.py4e.com/api/people/');  
    resp.then(data => this.setState({people: data}))
        .catch(err => console.log("There was an error: \n", err));
  }
 
  getData = async function(url) {
    try {
      let arrPeople = [];
      const resp = await fetch(url);
      const characters = await resp.json();
       
      arrPeople = [].concat(characters.results);
      if (characters.next !== null && characters.next.length !== 0) {
        const data = await this.getData(characters.next);
        arrPeople = arrPeople.concat(data);
      }          
      return arrPeople;
    } catch (err) {
      console.log('Ooops! Error!\n', err);
    } 
  };

  render() {
    return !this.state.people.length ?
      <h1>Loading...</h1> :
      (
        <Fragment>
          <h1 className='fancyTitle'>STAR WARS FUN!</h1>
          <CardList people={this.state.people}/>
        </Fragment>
      );
  }
}

export default App;