import React from 'react';
import App from '@/App';
import { Props, State } from '@/type/index';

class AppRouter extends React.Component<Props, State> {
  // 处理未登录/登录
  // 直接刷新页面触发
  componentDidMount() {
    // console.log('路由不改变，直接刷新', this.props);
  }

  // 路由改变时触发
  // UNSAFE_componentWillReceiveProps(nextProps: Props) {
  //   // if (nextProps.location.pathname !== this.props.location.pathname) {
  //     console.log('路由改变', this.props);
  //   // }
  // }

  render() {
    return <App />;
  }
}

export default AppRouter;
