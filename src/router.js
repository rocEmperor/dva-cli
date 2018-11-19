import React from 'react';
import { Router, Route, Switch} from 'dva/router';
import dynamic from 'dva/dynamic';
import CompanyManagementConfig from './routerConfigs/CompanyManagementConfig'

const routerList = [].concat(CompanyManagementConfig);

function RouterConfig({ history, app }) {

  const Login = dynamic({
    app,
    models: () => [
      import('./models/Login'),
    ],
    component: () => import('./components/Login/Login.js'),
  });

  const Container = dynamic({
    app,
    models: () => [
      import('./models/MainLayout'),
    ],
    component: () => import('./components/MainLayout/MainLayout.js'),
  });

  const IndexPage = dynamic({
    app,
    component: () => import('./routes/IndexPage'),
  });

  routerList.map((route,index)=>{
    return route.component = dynamic({
      app,
      models: () => [
        import('./models/'+route.models),
      ],
      component: () => import('./routes/'+route.routes),
    });
  })
  
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Container>
          <Route path="/indexPage" component={IndexPage} />
          {routerList.map((route, index) => {
            return <Route exact path={'/' + route.path} component={route.component} key={index} />
          })}
        </Container>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
