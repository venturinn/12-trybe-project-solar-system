import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    const getMission = (mission) => {
      const { name, year, country, destination } = mission;
      const n = name;
      const y = year;
      const c = country;
      const d = destination;
      return (
        <MissionCard key={ n } name={ n } year={ y } country={ c } destination={ d } /> // Variáveis extras usadas para não ultrapassar o tamanho máximo da linha do ESlint
      );
    };

    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div>
          {missions.map(getMission)}
        </div>
      </div>
    );
  }
}

export default Missions;
