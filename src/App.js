import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    console.log('componentDidMount');
  }

  handleSuccesfullLogin(msg, user){
    this.setState({loggedIn: true, currentUser: user});
  }

  logoutClicked(){
    this.setState({loggedIn: false, currentUser: null});
    window.localStorage.removeItem('loggedIn');
    window.localStorage.remoteItem('loggedInUser');
    fetch('/logout', {
      method: 'GET',
      credentials: 'include'
    })
  }

  function createMarkup() {
    return {__html: 'javascript:alert(1)'};
  }

  render() {
    return (
      <div className="App">
        <div dangerouslySetInnerHTML={createMarkup()} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
