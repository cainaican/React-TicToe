import React, { Component } from "react";

class Board extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    draw = (e) => {
        this.props.onDraw(e)
    }
    render() {
        return (
            <main>
                <div className="board">
                    <div className="row row_0">
                        <div onClick={this.draw} className="cell 0" id='0'>{this.props.history[0]}</div>
                        <div onClick={this.draw} className="cell 1" id='1'>{this.props.history[1]}</div>
                        <div onClick={this.draw} className="cell 2" id='2'>{this.props.history[2]}</div>
                    </div>
                    <div className="row row_1">
                        <div onClick={this.draw} className="cell 3" id='3'>{this.props.history[3]}</div>
                        <div onClick={this.draw} className="cell 4" id='4'>{this.props.history[4]}</div>
                        <div onClick={this.draw} className="cell 5" id='5'>{this.props.history[5]}</div>
                    </div>
                    <div className="row row_2">
                        <div onClick={this.draw} className="cell 6" id='6'>{this.props.history[6]}</div>
                        <div onClick={this.draw} className="cell 7" id='7'>{this.props.history[7]}</div>
                        <div onClick={this.draw} className="cell 8" id='8'>{this.props.history[8]}</div>
                    </div>
                </div>
                <ul className="text">История{this.props.moves}</ul>
            </main>
        )
    }
}

export default Board