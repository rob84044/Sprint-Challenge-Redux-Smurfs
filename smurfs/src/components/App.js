import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs, addSmurfs, updateSmurfs, deleteSmurfs } from '../actions';
import { GlobalStyle, AppContainer, H1 } from '../styles';
import SmurfVillage from './SmurfVillage';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {
        name: '',
        age: '',
        height: ''
      },
      mode: 'Add',
      id: ''
    };
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  addSmurf = event => {
    event.preventDefault();
    this.props.addSmurfs(this.state.smurf);
    this.defaultForm();
  };

  updateSmurf = () => {
    this.props.updateSmurfs(this.state.smurf, this.state.id);
    this.defaultForm();
  };

  deleteSmurf = id => {
    this.props.deleteSmurfs(id);
  };

  toggleMode = (id, name) => {
    this.setState({
      ...this.state,
      mode: 'Update',
      id: id,
      smurf: {
        ...this.state.smurf,
        name: name
      }
    });
  };

  defaultForm = () => {
    this.setState({
      ...this.state,
      mode: 'Add',
      smurf: {
        ...this.state.smurf,
        name: '',
        age: '',
        height: ''
      }
    });
  };
  handleChange = event => {
    event.preventDefault();
    this.setState({
      smurf: {
        ...this.state.smurf,
        [event.target.name]: event.target.value
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <AppContainer>
          <H1>Welcome to Smurf Village</H1>
          <SmurfVillage
            mode={this.state.mode}
            toggleMode={this.toggleMode}
            handleChange={this.handleChange}
            name={this.state.smurf.name}
            age={this.state.smurf.age}
            height={this.state.smurf.height}
            addSmurf={this.addSmurf}
            updateSmurf={this.updateSmurf}
            deleteSmurf={this.deleteSmurf}
            smurfs={this.props.smurfs}
            defaultForm={this.defaultForm}
          />
        </AppContainer>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs
});

export default connect(
  mapStateToProps,
  {
    getSmurfs,
    addSmurfs,
    updateSmurfs,
    deleteSmurfs
  }
)(App);
