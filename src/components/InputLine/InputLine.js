import React from "react";
import * as PropTypes from "prop-types";
import classes from "./InputLine.module.css";

function InputLine({
                     name, lineClass, label, low, children, wide,
                     labelPostfix, postfix, labelLink, isRequired,
                   }) {
  
  const showInputPostfix = (postfix) => {
    switch (postfix) {
      case 'percent':
        return <div className={classes.LinePostfix}>%</div>;
      case 'currency':
        return <div className={classes.LinePostfix}>р.</div>;
      case 'amount':
        return <div className={classes.LinePostfix}>шт.</div>;
      case 'hours':
        return <div className={classes.LinePostfix}>ч.</div>;
      case 'minutes':
        return <div className={classes.LinePostfix}>мин.</div>;
      case 'human':
        return <div className={classes.LinePostfix}>чел.</div>;
      case 'days':
        return <div className={classes.LinePostfix}>дн.</div>;
      default:
        return null
    }
  };
  
  return (
    <div className={`${classes.Line} ${wide ? classes.Wide : ''} ${low ? classes.Low : ''} ${lineClass ? lineClass : ''}`}>
      {label &&
      <label
        htmlFor={name}
        className={classes.Label}>
        {label}
        {labelPostfix && <span className={classes.LabelPostfix}>{labelPostfix}</span>}
        {labelLink && <span className={classes.LabelLink}>{labelLink}</span>}
        {isRequired && <sup>*</sup>}
      </label>}
      <div className={classes.LineHolder}>
        <div className={classes.LineContent}>
          {children}
        </div>
        {showInputPostfix(postfix)}
      </div>
    </div>
  );
}

InputLine.propTypes = {
  isRequired: PropTypes.bool,
  children: PropTypes.node.isRequired,
  name: PropTypes.string,
  lineClass: PropTypes.string,
  label: PropTypes.string,
  low: PropTypes.bool,
  labelPostfix: PropTypes.string,
  postfix: PropTypes.oneOf(['percent', 'currency', 'amount', 'hours', 'days', 'human', 'minutes']),
  labelLink: PropTypes.any,
  wide: PropTypes.bool,
};

export default InputLine;
