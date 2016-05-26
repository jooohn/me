require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { Link, browserHistory } from 'react-router';
class AppComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    this.moveTo = this.moveTo.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);

    this.menuItems = [
      new Menu('Time Card', '/timecard'),
      new Menu('test', '/test')
    ].map((menu) =>
      <MenuItem onTouchTap={() => this.moveTo(menu.path)}>
        {menu.title}
      </MenuItem>
    );

    this.titleStyle = {cursor: 'pointer'};
  }

  moveTo(path) {
    browserHistory.push(path);
    this.closeDrawer();
  }

  toggleDrawer() {
    this.setState({open: !this.state.open});
  }

  closeDrawer() {
    this.setState({open: false});
  }

  render() {
    return (
      <div className="index">
        <AppBar
          title="jooohn.me"
          onLeftIconButtonTouchTap={this.toggleDrawer}
        />
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <AppBar
            title="jooohn.me"
            onTitleTouchTap={() => this.moveTo('/')}
            showMenuIconButton={false}
            titleStyle={this.titleStyle}
          />
          {this.menuItems}
        </Drawer>
        {this.props.children}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

class Menu {
  constructor(title, path) {
    this.title = title;
    this.path = path;
  }
}

export default AppComponent;

