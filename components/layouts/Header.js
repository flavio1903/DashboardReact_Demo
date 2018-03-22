import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import '../../styles/header.css'
 
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: window.innerWidth > 991,
      manual_toggle : false,
      appbar_class : window.innerWidth > 991 ? 'sidebar_opened' : 'sidebar_closed',
      drawer_docked: window.innerWidth > 991,
      width: window.innerWidth
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleToggle = () => {
    this.setState({open: !this.state.open});
    this.setState({manual_toggle: true});
    if(!this.state.open){
      this.setState({appbar_class: 'sidebar_opened'});
    }else{
      this.setState({appbar_class: 'sidebar_closed'});
    }
  }

  handleSidebar = (isNotMobile) => {
    if(!this.state.manual_toggle){
      this.setState({open: isNotMobile});
    }
    this.setState({drawer_docked: isNotMobile});
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
    this.handleSidebar(this.state.width > 991);
  };

  render(){
    return (
      <div>
        <AppBar 
          className = {this.state.appbar_class}
          onLeftIconButtonClick = {this.handleToggle} 
        />
        <Drawer 
          open={this.state.open}
          docked={this.state.drawer_docked}
          onRequestChange={this.handleToggle}
        >
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}
 
export default Header;