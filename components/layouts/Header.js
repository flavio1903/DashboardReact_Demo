import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
 
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      drawer_docked: false,
      width: window.innerWidth
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });

    if(this.state.width < 991){
      this.setState({open: false});
      this.setState({drawer_docked: false});
    }else{
      this.setState({open: true});
      this.setState({drawer_docked: true});
    }
  };

  render(){
    return (
      <div>
        <AppBar 
          onLeftIconButtonClick = {this.handleToggle} 
        />
        <Drawer 
          open={this.state.open}
          docked={this.state.drawer_docked}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}
 
export default Header;