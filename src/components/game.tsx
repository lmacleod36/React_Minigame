import * as React from 'react';
import { Board } from './board';
import * as Utils from './utils';

export class Game extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    let config = this.props.config_data;
    let level = Number(this.props.level_id);
    let data = this.getLevelData(level);

    this.state = {
      history: [{
        squares: data.displayValues,
        square_types: data.typeMappings
      }],
      groupings: data.dataGroupings,
      groupMagicNumber: 2,
      lives: config.maxLives,
      status: "Fail",
      defSquareTypes: config.sqaureTypes
    };
  }

  getLevelData(levelId: number){
    let config = this.props.config_data;
    let data = this.props.config_data.levels[levelId];
    return data;
  }
    
  pickWinner() {
    let config = this.props.config_data
    let level = this.props.level_id
    let range = config.levels[level].groupingsCount;
    return Math.floor(Math.random() * range);
  }

  handleClick(i: any) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const currentLives = this.state.lives;
    const square_types = current.square_types.slice();
    const square_types_labels = this.state.defSquareTypes;
    let newStatus = this.state.status;
    let newLives = currentLives;


    let current_Square_Type = this.state.defSquareTypes[square_types[i]];
    switch (current_Square_Type) {
      case square_types_labels[0]:
        console.log("None");
        break;
      case square_types_labels[1]:
        console.log("DudWord");
        newStatus = "Fail";
        newLives === 0 ? newLives = 4 : newLives -=1;
        break;
      case square_types_labels[2]:
        console.log("WinningWord");
        newStatus = "Winner";
        break;
      case square_types_labels[3]:
        console.log("BonusRemoveDud");
        break;
      case square_types_labels[4]:
        console.log("BonusResetLife");
        newLives = 4
        break;
      default:
        console.log("unreachable... something is wrong if you see this");
        break;
    }

    this.setState({
      history: history.concat([{
        squares: squares,
        square_types: square_types,
      }]),
      lives: newLives,
      status: newStatus
    });
  }

  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const lives = this.state.lives;

    let statusMessage = this.state.status;
    console.log(statusMessage);

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            groupings={this.state.groupings}
            onClick={(i: any) => this.handleClick(i)}

          />
        </div>
        <div className="game-info">
          <div>{statusMessage}</div>
          <div>{lives}</div>
        </div>
      </div>
    );
  }
}

