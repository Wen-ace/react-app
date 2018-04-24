import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Input, Button, Menu, Icon } from 'antd';
import './HeaderNav.scss';
import { connect } from 'react-redux';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class HeaderNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'mail',
            name: 'WenRJ'
        }
    }
    componentDidMount() {

    }
    componentDidUpdate() {
        console.log('updata ... ', this.props)
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    render() {
        return (
            <div className="header">
                <Row>
                    <Col className="l" span={6} >
                        <Link to='/'><span><Icon type="home" style={{ "marginRight": "10px" }} />FoulSport</span></Link>
                    </Col>
                    <Col className="r" span={18}>
                        <Row type="flex" justify="end" className="r_nav">
                            <Col className="search-bar" type="flex" justify="end" span={13}>
                                <Row>
                                    <Col span={18}><Input placeholder="default size" /></Col>
                                    <Col span={6}><Button icon="search">搜索</Button></Col>
                                </Row>
                            </Col>
                            <Col className="nav_item first-nav" span={4}>
                                <Menu
                                    className="kind"
                                    onClick={this.handleClick}
                                    selectedKeys={[this.state.current]}
                                    mode="horizontal"
                                >
                                    <SubMenu title={<span>分类列表</span>}>
                                        <MenuItemGroup title="篮球">
                                            <Menu.Item key="setting:1">进攻</Menu.Item>
                                            <Menu.Item key="setting:2">防守</Menu.Item>
                                        </MenuItemGroup>
                                        <MenuItemGroup title="足球">
                                            <Menu.Item key="setting:3">进攻</Menu.Item>
                                            <Menu.Item key="setting:4">防守</Menu.Item>
                                        </MenuItemGroup>
                                    </SubMenu>
                                </ Menu>
                            </Col>
                            <Col className="nav_item" span={2}>
                                <Link to="/about">作者</ Link>
                            </Col>
                            {/* <Col className="nav_item" span={2}>登录</Col> */}
                            <Col className="nav_item last-nav" span={4}>
                                {
                                    this.props.isLogin ?
                                        <Menu
                                            className="login"
                                            onClick={this.handleClick}
                                            selectedKeys={[this.state.current]}
                                            mode="horizontal"
                                        >
                                            <SubMenu title={<span><Icon type="user" />{this.state.name}</span>}>
                                                <Menu.Item key="option:1">
                                                    <Icon type="setting" />设置
                                                </Menu.Item>
                                                <Menu.Item key="option:2"><Icon type="logout" />登出</Menu.Item>
                                            </SubMenu>
                                        </ Menu>
                                        :
                                        <Menu
                                            className="login"
                                            onClick={this.handleClick}
                                            selectedKeys={[this.state.current]}
                                            mode="horizontal"
                                        >
                                            <SubMenu title={<span><Icon type="login" />登录</span>}>
                                                <Menu.Item key="option:1">
                                                    <Icon type="login" />
                                                    <Link className="router-link" to="/login">登录</Link>
                                                </Menu.Item>
                                                <Menu.Item key="option:2">
                                                    <Icon type="plus-circle-o" />
                                                    <Link className="router-link" to="/reg">注册</Link>
                                                </Menu.Item>
                                            </SubMenu>
                                        </ Menu>
                                }
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return { ...state }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderNav);