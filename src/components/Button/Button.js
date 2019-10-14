import React from "react";
import Icon from "../Icon/Icon";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core";
import classes from "./Button.module.css";
import * as PropTypes from "prop-types";

const custom = {
  popper: {
    opacity: 1
  },
  tooltip: {
    fontSize: '0.8em',
    color: 'white',
    backgroundColor: '#5c626e',
    boxShadow: `0 1px 10px -1px rgba(0, 0, 0, 0.4)`,
  }
};

function Button({
                  className, theme, title = '',
                  onClick, children, type, placement = 'top',
                  style, disabled, icon, iconClass, iconOnly,
                  circle = false, size = 'normal',
                  classes: tooltipClasses
                }) {
  
  let sizeClass = classes.Normal;
  if (size === 'small') {
    sizeClass = classes.Small;
  }
  if (size === 'big') {
    sizeClass = classes.Big;
  }
  
  const buttonClass = `${classes.Button} ${sizeClass} ${classes[theme]} ${circle ? classes.Circle : ''} ${className ? className : ''}`;
  
  return (
    <Tooltip
      classes={{
        popper: tooltipClasses.popper,
        tooltip: tooltipClasses.tooltip
      }}
      title={title}
      placement={placement}
      onClick={onClick}>
      <button
        disabled={disabled}
        className={buttonClass}
        type={type ? type : 'button'}
        onClick={onClick ? onClick : null}
        style={style ? style : null}>
        
        {icon &&
        <Icon
          name={icon}
          className={`${iconClass ? iconClass : ''} ${iconOnly ? classes.IconNoGap : ''}`}/>
        }
        
        {children}
      
      </button>
    </Tooltip>
  );
}

Button.propTypes = {
  theme: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any,
  type: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  name: PropTypes.string,
  circle: PropTypes.bool,
  title: PropTypes.any,
  size: PropTypes.oneOf(['small', 'normal', 'big']),
  icon: PropTypes.string,
};

export default withStyles(custom)(Button);
