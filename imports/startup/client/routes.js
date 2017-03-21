import React  from 'react';
import { BrowserRouter as Router, Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import { injectDeps } from 'react-simple-di';
import context from './context';
import actions from '/imports/ui/actions';

// Layouts
import MainLayout from '/imports/ui/components/layouts/main_layout';

// inject context & actions as dependencies
const injectDependencies = injectDeps(context, actions);
const MainLayoutDI = injectDependencies(MainLayout);

const routes = () => (
  <Router>
    <MainLayoutDI />
  </Router>
);

export default routes;
