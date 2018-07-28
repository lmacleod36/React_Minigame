import * as React from 'react';

// export interface SquareProps{
//   display_value: string;
//   class_type: string;
//   group_id: number;
//   onClick: Function;
//   onMouseEnter: Function;
//   onMouseLeave: Function;
// }

export class Square extends React.Component<any, any> {
    constructor(props: any) {
      super(props);
      this.state = {
        history: [{
          display_value: this.props.display_value
        }],
    };
  }
  
    render() {
      let classString = "square group-" + this.props.group_id
      return (
        <button
          className = {classString}
          onClick = {() => this.props.onClick()}
          onMouseEnter = {() => this.props.onMouseEnter()} 
          onMouseLeave = {() => this.props.onMouseLeave()} 
        >
          {this.props.display_value}
        </button>
      );
    }
  }