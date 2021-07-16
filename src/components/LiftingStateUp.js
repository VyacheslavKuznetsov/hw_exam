import React from "react";

class Car extends React.Component {
  refSpeed = React.createRef();

  render() {
    return (
      <div>
        <h1>
          Автомобиль {this.props.type} {this.props.number}
        </h1>
        <label htmlFor="carspeed">Скорость:</label>
        <input id="carspeed" type="number" defaultValue={this.props.speed} ref={this.refSpeed} onChange={() => this.props.handleSpeedChange(+this.refSpeed.current.value)} />
        <button onClick={() => this.props.handleSpeedChange(+this.refSpeed.current.value)}>Газ</button>
      </div>
    );
  }
}

class Radar extends React.Component {
  render() {
    return <div>
      <h1>Полицейский радар</h1>
      {this.props.speed > 90 && <h1 style={{color: "red"}}>Скорость превышена!!!</h1>}
      {this.props.speed <= 90 && <h1 style={{color: "green"}}>Скорость не превышена</h1>}
    </div>;
  }
}

export class LiftingStateUp extends React.Component {
  state = {
    speed: 60
  }

  handleSpeedChange = (newSpeed) => {
    this.setState({
      speed: newSpeed
    })
  }

  render() {
    return (
      <>
        <Car type="Lada Granta" number="А111АА702RUS" speed={this.state.speed} handleSpeedChange={this.handleSpeedChange} />
        <Radar speed={this.state.speed} />
      </>
    );
  }
}
