import React, {Component} from 'react'
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content, Footer} = Layout;
const SubMenu = Menu.SubMenu;
import {Link} from 'react-router'
import style from './style.css'
export default class extends Component {
    constructor() {
        super();
        this.state = {
            collapsed: false,
        }
    }

    toggle() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        return (
            <Layout className={style.wrapper}>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className={style.logo} >LOGO</div>
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={this.state.collapsed}
                    >
                        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                            <Menu.Item key="5"><Link to="/">home</Link></Menu.Item>
                            <Menu.Item key="6"><Link to="/test">test</Link></Menu.Item>
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                            <SubMenu key="sub3" title="Submenu">
                                <Menu.Item key="11">Option 11</Menu.Item>
                                <Menu.Item key="12">Option 12</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu key="sub3" title={<span><Icon type="line-chart" /><span>Navigation Three</span></span>}>
                            <Menu.Item key="5">Option 13</Menu.Item>
                            <Menu.Item key="6">Option 14</Menu.Item>
                            <Menu.Item key="7">Option 15</Menu.Item>
                            <Menu.Item key="8">Option 16</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className={style.trigger}
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle.bind(this)}
                        />
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff'}}>
                        {this.props.children}
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}