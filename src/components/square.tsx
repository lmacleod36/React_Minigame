import * as React from 'react';

export class Square extends React.Component<any, any> {
    constructor(props: any) {
      super(props);
    }
  
    render() {
      return (
        <button
          className="square"
          onClick={() => this.props.onClick()}
        >
          {this.props.value}
        </button>
      );
    }
  }