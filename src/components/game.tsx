import * as React from 'react';
import { Board } from './board';
import * as Utils from './utils';


export class Game extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      history: [{
        squares: Utils.initSquareValues,
      }],
      level_id: 1,
      groupings: Utils.json_config.levels[1].dataGroupings,
      groupMagicNumber: this.pickWinner(),
      lives: Utils.maxLives,
      status: "Fail"
    };

  }

  pickWinner(){
    return Math.floor(Math.random() * Utils.json_config.levels[this.state.level_id].groupingsCount);
  }

  handleClick(i: any) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const lives = this.state.lives;

    let newStatus = this.state.status;

    if (Utils.isMatch(this.state.groupMagicNumber, this.state.groupings[i])) {
      newStatus = "Winner";
    }
    else {
      newStatus = "Fail";
    }

    let newlives = Utils.calculateLives(lives);

    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      lives: newlives,
      status: newStatus
    });
  }

  putSquareValue() {

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

