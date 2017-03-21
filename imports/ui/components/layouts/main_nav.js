import React from 'react';
import { Menu, Icon, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const MainNav = () => (
  <Row type="flex" justify="center">
    <Col xs={24} sm={20} md={18} lg={14} xl={12}>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
        className="desktop-nav"
      >
        <Menu.Item key="1"><Icon type="home" /></Menu.Item>
        <Menu.Item key="2"><Link to="/">首页</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/about">简历</Link></Menu.Item>
        <Menu.Item key="4">nav 3</Menu.Item>
      </Menu>
    </Col>
  </Row>

);

export default MainNav;
