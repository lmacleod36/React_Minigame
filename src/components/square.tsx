import * as React from 'react';

export class Square extends React.Component<any, any> {
    constructor(props: any) {
      super(props);
      this.state = {
        value: null,
      };
    }
  
    render() {
      return (
        <button
          className="square"
          onClick={() => this.setState({value: 'X'})}
        >
          {this.state.value}
        </button>
      );
    }
  }