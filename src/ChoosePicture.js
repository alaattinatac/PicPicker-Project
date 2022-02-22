import React, { Component } from 'react'

export default class ChoosePicture extends Component {
    render() {
        return (
            <div>
                <h1 > Cute Pictures </h1>
                <img src={this.props.src} alt="cute" /><br />
                <button onClick={this.props.start}>START</button>
                <button onClick={this.props.stop}>STOP</button>
            </div>
        )
    }
}
