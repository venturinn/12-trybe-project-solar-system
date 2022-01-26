import React from 'react';
import Title from './Title';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    const altValue = `Planeta ${planetName}`;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{planetName}</p>
        <img src={ planetImage } alt={ altValue } />
      </div>
    );
  }
}

export default PlanetCard;
