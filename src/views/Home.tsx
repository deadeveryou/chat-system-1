/*
 * @Descripttion: 
 * @version: 
 * @Author: Qyc
 * @Date: 2021-05-12 17:08:23
 * @LastEditors: Qyc
 * @LastEditTime: 2021-05-14 11:04:02
 */
// import React from 'react';

// function Home(): React.ReactElement {
//   return (
//     <div className="home">home</div>
//   );
// }


// export default Home;

import React from 'react';
import { Route, Link } from 'react-router-dom';

function Bar(): React.ReactElement {
  return (
    <>
      <div className="bar">bar</div>
      <Link to="/foo">foo</Link>
    </>
  );
}

function Foo(): React.ReactElement {
  return (
    <>
      <div className="foo">foo</div>
    </>
  );
}

function Home(): React.ReactElement {
  return (
    <>
      <div className="home">测试父组件被重复加载问题</div>
      <Link to="/bar">bar</Link>
      <Route path="/bar" component={Bar} />
      <Route path="/foo" component={Foo} />
    </>
  );
}


export default Home;
