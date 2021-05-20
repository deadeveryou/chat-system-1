/*
 * @Descripttion: 
 * @version: 
 * @Author: Qyc
 * @Date: 2021-05-12 17:08:23
 * @LastEditors: Qyc
 * @LastEditTime: 2021-05-13 09:12:52
 */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import renderRoutes from '@router/renderRoutes';
// 路由数据
import { routes } from '@router/routes';
// 404页面
import NotFound from '@views/not-found/NotFound';

function App(): React.ReactElement {
  return (
    <Switch>
      {
        renderRoutes(routes)
      }
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
