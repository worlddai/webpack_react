import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from 'antd';
import './styles/main.less'
// import 'antd/dist/antd.css';  // Add
class Text extends React.Component {

    render() {
        return (
            <div>
            <p>This is a react Component123</p>
            <div className = "my-image" ></div>
            <DatePicker/>
            </div>
        );
    }
}
ReactDOM.render(<Text />, document.getElementById('main'));