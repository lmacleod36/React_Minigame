import * as React from 'react';
import { Square } from './square';

export class Board extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    getSquareGroupingId(i: any) {
        return this.props.groupings[Number(i)];
    }

    getAllIndexes(idArray: Array<number>, squareIndex: number) {
        var groupId = idArray[squareIndex];
        var indexes = [];
        var i;
        for (i = 0; i < idArray.length; i++) {
            if (idArray[i] === groupId) {
                indexes.push(i);
            }
        }
        return indexes;
    }

    mouseEnter(i: any) {
        let squareIndex = i;
        let elems = document.querySelectorAll('[class*=square]');
        let groupdata = this.props.groupings;
        
        let indexes = [];
        if (elems.length === groupdata.length){
            indexes = this.getAllIndexes(groupdata,squareIndex);
            for (let item of indexes){
                elems[item].classList.add('active');
            }
        }
        else{
            console.log("Datasets are not of the same length, something is wrong! Elems= " + elems.length + "And groupdata= " + groupdata.length);
        }
    }

    mouseLeave(i: any) {
        let squareIndex = i;
        let elems = document.querySelectorAll('[class*=square]');
        let groupdata = this.props.groupings;
        
        let indexes = [];
        if (elems.length === groupdata.length){
            indexes = this.getAllIndexes(groupdata,squareIndex);
            for (let item of indexes){
                elems[item].classList.remove('active');
            }
        }
        else{
            console.log("Datasets are not of the same length, something is wrong");
        }
    }

    renderSquare(i: number) {
        return <Square
            display_value={this.props.squares[i]}
            group_id={this.props.groupings[i]}
            onClick={() => this.props.onClick(i)}
            onMouseEnter={() => this.mouseEnter(i)}
            onMouseLeave={() => this.mouseLeave(i)}
        />;
    }

    render() {
        let children = [];
        for (var i = 0; i < this.props.squares.length; i++) {
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
