import * as React from 'react';
import { Square } from './square';

export class Board extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    mouseEnter(i: any) {
        let elems = document.querySelectorAll('[class*=group-' + this.props.groupings[i] + ']');
        for (let i = 0; i < elems.length; i++) {
            elems[i].classList.add('active');
        }
    }

    mouseLeave(i: any) {
        let elems = document.querySelectorAll('[class*=group-' + this.props.groupings[i] + ']');
        for (let i = 0; i < elems.length; i++) {
            elems[i].classList.remove('active');
        }
    }

    renderSquare(i: number) {
        return <Square
            value={this.props.squares[i]}
            groupId={this.props.groupings[i]}
            onClick={() => this.props.onClick(i)}
            onMouseEnter={() => this.mouseEnter(i)}
            onMouseLeave={() => this.mouseLeave(i)}
        />;
    }

    render() {
        let children = [];
        for(var i = 0; i < this.props.squares.length; i++){
            children.push(this.renderSquare(Number(i)));
        }
        return (
            <div>
                <div className="status">{status}</div>
                <div className="wrapper">
                    {children}
                </div>
            </div>
        );
    }
}
