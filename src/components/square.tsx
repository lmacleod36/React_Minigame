import * as React from 'react';

export class Square extends React.Component<any, any> {
    constructor(props: any) {
      super(props);
  }
  
    render() {
      let classString = "square group-" + this.props.groupId
      return (
        <button
          className = {classString}
          onClick = {() => this.props.onClick()}
          onMouseEnter = {() => this.props.onMouseEnter()} 
          onMouseLeave = {() => this.props.onMouseLeave()} 
        >
          {this.props.value}
        </button>
      );
    }
  }