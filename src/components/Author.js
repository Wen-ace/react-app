import React from 'react';
import { Icon } from 'antd';
import HeaderNav from './HeaderNav';
import { connect } from 'react-redux';
import Toast from './Toast';

class Author extends React.Component {
    constructor() {
        super();
        this.state = {
            isToast: false
        }
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(e){
        this.setState({
            isToast: !this.state.isToast
        })
    }
    closeToast() {
        this.setState({
            isToast: !this.state.isToast
        })
    }
    render() {
        return (
            <div className="author-home">
                <button onClick={this.clickHandler}>test</button>
                <HeaderNav />
                {
                    this.state.isToast? 
                     <Toast
                     text='success'
                     dataName={this.state.isToast? '':'out'}
                     onClose={this.closeToast.bind(this)}
                   />
                    : ''
                }
                <div style={{ textAlign: 'center' }}>
                    <h3>Hi, welcome to Author page!</h3>
                    <article>
                        <p>Hi guys!</p>
                        <p>I am WenRJ, I am the best!</p>
                        <p>Thank you!</p>
                    </article>
                    <footer>
                        <div>
                            <p>This is my github!</p>
                            <a href="https://github.com/Wen-ace" target="_blank" rel="noopener noreferrer"><Icon type="github" /> github</a>
                        </div>
                        <div>
                            <p>This is my blog base in hexo!</p>
                            <a href="http://Wen-ace.github.io" target="_blank" rel="noopener noreferrer"><Icon type="github" /> github-hexo</a>
                        </div>
                    </footer>
                </div>
            </div>
        )
    }
}
export default connect()(Author);