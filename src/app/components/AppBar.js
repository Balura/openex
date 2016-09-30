import React, {PropTypes} from 'react';
import MUIAppBar from 'material-ui/AppBar';

export const AppBar = (props) => (
  <MUIAppBar
    title={props.title}
    titleStyle={props.titleStyle}
    onTitleTouchTap={props.onTitleTouchTap}
    onLeftIconButtonTouchTap={props.onLeftIconButtonTouchTap}
    iconElementRight={props.iconElementRight}
  />
)

AppBar.propTypes = {
  title: PropTypes.string,
  titleStyle: PropTypes.object,
  onTitleTouchTap: PropTypes.func,
  onLeftIconButtonTouchTap: PropTypes.func,
  iconElementRight: PropTypes.element
}