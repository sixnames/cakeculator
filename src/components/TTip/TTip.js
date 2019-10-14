import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from '@material-ui/core/styles';
import * as PropTypes from 'prop-types';
import styles from "./TTip.module.css";

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

function TTip({
                title = '', placement = 'top', children,
                className, onClick, classes,
                customStyles, style
              }) {
  return (
    <Tooltip
      classes={{
        popper: classes.popper,
        tooltip: customStyles ?
          `${classes.tooltip} ${customStyles}`
          : classes.tooltip
      }}
      style={{
        backgroundColor: 'red',
      }}
      title={title}
      placement={placement}
      onClick={onClick}>
      <div className={`${styles.TooltipHolder} ${className ? className : ''}`} style={style}>
        {children}
      </div>
    </Tooltip>
  );
}

TTip.propTypes = {
  className: PropTypes.string,
  title: PropTypes.node,
  placement: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  customStyles: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  style: PropTypes.object,
};

export default withStyles(custom)(TTip);
