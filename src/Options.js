import React, { Component } from "react";

const FirstWindow = (props) => {
    return (
        <div className="options">
            <div className="state">
                <h2>Добро пожаловать в Крестики - Нолики!</h2>
            </div>
            <button
                className="mainButton"
                onClick={props.onPlay}>
                Играть
            </button>
        </div>
    )
}

const SecondWindow = (props) => {
    return (
        <div className="options">
            <div className="state">
                <h2>Ура! За кого предпочитаете играть?</h2>
            </div>
            <button
                className="X newButton"
                onClick={props.onSelect}>
                X
            </button>
            <button
                className="O newButton"
                onClick={props.onSelect}>
                O
            </button>
        </div>
    )
}
const ThirdWindow = (props) => {
    return (
        <div className="options">
            <h1 className="state thirdWindow">Ход {props.player}</h1>
        </div>
    )
}
const FourthWindow = (props) => {
    return (
        < div className="options" >
            <div className="state">
                {<h2>Победили {props.player === 'X' ? 'O' : 'X'}</h2>}
                <button onClick={props.reload} className="mainButton">Заново</button>
            </div>
        </div >
    )
}


class Options extends Component {
    constructor() {
        super()
        this.state = {
        }
    }
    render() {
        const window = () => {
            switch (this.props.value) {
                case 0: return <FirstWindow onPlay={this.props.onPlay} />;
                case 1: return <SecondWindow onSelect={this.props.onSelect} />;
                case 2: return <ThirdWindow player={this.props.player} />;
                case 3: return <FourthWindow player={this.props.player} reload={this.props.reload} />;
                default: return null
            }
        }
        return (<div>
            {window()}
        </div>
        )
    }
}

export default Options