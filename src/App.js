import React from 'react';
import Navbar from './components/Navbar';
import BandsList from './components/BandsList';
import Modal from './components/Modal';

class App extends React.Component {
  state = {
    bands: [],
    currentBand: {}
  };

  changeCurrentBand = band => {
    this.setState({
      currentBand: band
    });
  };

  componentDidMount() {
    fetch(
      'https://raw.githubusercontent.com/Danilovesovic/bands/master/bands_with_id.json'
    )
      .then(res => res.json())
      .then(data =>
        this.setState({
          bands: data
        })
      );
  }
  render() {
    return (
      <div>
        <Navbar />
        <BandsList
          bands={this.state.bands}
          changeCurrentBand={this.changeCurrentBand}
        />
        <Modal currentBand={this.state.currentBand} />
      </div>
    );
  }
}

export default App;
