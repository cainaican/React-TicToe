import React, { Component } from "react"
import Options from "./Options"
import Board from "./Board"
import { checking } from './text'
import './index.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            windowNumber: 0,
            player: '',
            opponent: '',
            step: 0,
            stepNumber: 0,
            history: Array(1).fill(Array(8).fill(null))
        }
    }
    onPlay = () => {
        this.setState({ windowNumber: 1 })
    }
    onSelect = (e) => {
        this.setState({
            windowNumber: 2,
            player: e.target.className.split(' ')[0],
            opponent: '',
            step: 1,
        })
    }
    onDraw = (e) => {
        const stepNumber = this.state.stepNumber + 1
        const unitHistory = this.state.history[stepNumber - 1].slice()
        const history = this.state.history.slice()
        unitHistory[e.target.id] = this.state.player
        history[stepNumber] = unitHistory
        if (this.state.step === 1) {
            if (e.target.innerText === '') {
                e.target.innerText = this.state.player
                this.state.player === 'X' ?
                    this.setState({
                        player: 'O',
                        step: checking(this.state.player),
                        windowNumber: checking(this.state.player) === 11 ? 3 : 2,
                        stepNumber: stepNumber,
                        history: history
                    }) :
                    this.setState({
                        player: 'X',
                        step: checking(this.state.player),
                        windowNumber: checking(this.state.player) === 11 ? 3 : 2,
                        stepNumber: stepNumber,
                        history: history
                    });
            }
        }
    }
    moves = () => this.state.history.map((x, key) => {
        return (
            <li key={key}>
                {(this.state.step > 0) ? <button className="history" id={key} onClick={this.onJump}>Ход номер: {key}</button> : <div className="history"></div>}
            </li >
        )
    })
    onJump = (e) => {
        ((+e.target.id + 1) === this.state.history.length && this.state.windowNumber !== 3) ? this.setState({ step: 1 }) : this.setState({ step: 2 })
        this.setState({ stepNumber: +e.target.id })
    }
    reload = () => {
        window.location.reload()
    }
    render() {
        console.log(this.state.history)
        return (
            <div >
                <Options player={this.state.player} reload={this.reload} onPlay={this.onPlay} value={this.state.windowNumber} onSelect={this.onSelect} />
                <Board player={this.state.player} onDraw={this.onDraw} history={this.state.history[this.state.stepNumber]} moves={this.moves()} />
            </div >
        )
    }
}

export default App