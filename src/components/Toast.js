import React from 'react';
import ReactDOM from 'react-dom';
import './Toast.scss';
export default class Toast extends React.Component {
    render() {
        return ReactDOM.createPortal(
            <div className="my-def-toast">
                { this.props.text }
            </div>,
            document.getElementsByTagName('body')[0]
        )
    }
}