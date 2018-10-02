import React, { Component } from 'react';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';
import Result from './components/Result';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            color: "red",
            fontSize: 14
        };
        this.onSetColor = this.onSetColor.bind(this);
        this.onChangeSize = this.onChangeSize.bind(this);
        this.onSettingDefault = this.onSettingDefault.bind(this);
        
    }

    // gán lại giá trị của components con cho state
    onSetColor(params) {
        this.setState({
            color : params
        });
    };

    onChangeSize(value) {
        if (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) {
            this.setState({
                fontSize: this.state.fontSize + value
            });
        }
    }

    onSettingDefault(value) {
        if (value) {
            this.setState({
                color: "red",
                fontSize: 14
            });
        }

    }
    render() {
        return (
            <div className= "container mt-50" >
                <div className="row">
                    {/*để nhận lại dữ liệu props từ components con gửi ra thì ta dùng function*/}
                   {/* onReceiveColor={this.onSetColor} nhận dữ liệu từ components con*/}
                    <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor}/>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <SizeSetting 
                            fontSize={ this.state.fontSize } 
                            onChangeSize = {this.onChangeSize}
                        />
                        <Reset onSettingDefault = {this.onSettingDefault} />
                    </div>
                    <Result color={this.state.color} fontSize = { this.state.fontSize }/>
                </div>
            </div>
        );
    }
}

export default App;
