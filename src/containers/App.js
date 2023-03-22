import { Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      searchfield: '',     
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
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
    const {searchfield, people} = this.state;
    const filteredPeople = people.filter(person => {
      return person.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !this.state.people.length ?
      <h2>Loading...</h2> :
      (
        <div className='tc'>
          <div className='swf-sticky bg-purple'>
            <h1 className='f2 f1-m f-5-l tracked swf-txtshadow swf-skew10dneg swf-bright-green'>STAR WARS FUN!</h1>
            <SearchBox searchChange={this.onSearchChange} />
          </div>
          <CardList people={filteredPeople}/>
        </div>
      );
  }
}

export default App;