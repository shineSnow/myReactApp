import React, {Component} from 'react'
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content, Footer} = Layout;
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
                    <div className={style.logo} />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="user" />
                            <span>nav 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <span>nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <span>nav 3</span>
                        </Menu.Item>
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
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
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