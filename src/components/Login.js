import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import './Login.scss';
import HeaderNav from './HeaderNav';
import { connect } from 'react-redux';
import { login } from './../store/actions';
import history from '../router/history';

const FormItem = Form.Item;
function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends React.Component {
    componentDidMount() {
        console.log(this.props)
        if (this.props.isLogin) {
            history.push('/')
        }
        // To disabled submit button at the beginning.
        this.props.form.validateFields();

    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values); // {password:"w", userName:"w"}
                fetch(`/api/login`, {
                    method: 'post',
                    body: JSON.stringify({
                        user_name: values.userName,
                        user_password: values.password
                    })
                }).then((res) => {
                    return res.json();
                }).catch(err =>
                    console.log('err -> ', err)
                ).then((res) => {
                    if (res.code === 1) {
                        this.props.onLogin(true);
                        history.push('/');
                    }
                })
            }
        });
    }
    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        // Only show error after a field is touched.
        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        return (
            <React.Fragment>
                <HeaderNav></ HeaderNav>
                <Form layout="inline" onSubmit={this.handleSubmit} className="login-page">
                    <FormItem
                        validateStatus={userNameError ? 'error' : ''}
                        help={userNameError || ''}
                    >
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                        )}
                    </FormItem>
                    <FormItem
                        validateStatus={passwordError ? 'error' : ''}
                        help={passwordError || ''}
                    >
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                        )}
                    </FormItem>
                    <FormItem>
                        <Button
                            type="primary"
                            htmlType="submit"
                            disabled={hasErrors(getFieldsError())}
                        >
                            Log in
                        </Button>
                    </FormItem>
                </Form>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return { ...state }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onLogin(isLogin) {
            dispatch(login(isLogin))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(HorizontalLoginForm));