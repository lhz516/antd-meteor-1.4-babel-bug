import React from 'react';
import { BrowserRouter as Router, Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;
import SideBar from '/imports/ui/components/layouts/main_sider';
import Nav from '/imports/ui/components/layouts/main_nav';
import MainFooter from '/imports/ui/components/layouts/main_footer';
import Index from '/imports/ui/components/index';
import About from '/imports/ui/components/about';

const MainLayout = () => (
  <div id="page-wrapper">
    <Layout>
      <SideBar />
      <Layout>
        <Header><Nav /></Header>
        <Content>
          <Route exact path="/" component={Index}/>
          <Route path="/about" component={About}/>
          {/*<Route path="/topics" component={Topics}/>*/}
        </Content>
        <Footer><MainFooter /></Footer>
      </Layout>
    </Layout>
  </div>
);

export default MainLayout;
