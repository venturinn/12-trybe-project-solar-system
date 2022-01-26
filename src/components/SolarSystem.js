import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    const getPlanet = (planet) => {
      const { name, image } = planet;
      return (
        <PlanetCard key={ name } planetName={ name } planetImage={ image } />
      );
    };
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="solar-system">
          {planets.map(getPlanet)}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
