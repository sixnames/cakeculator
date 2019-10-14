import React from "react";
import {useSpring, animated} from 'react-spring';
import * as PropTypes from "prop-types";

function AnimateOpacity({children, className, delay, ...props}) {
  const config = useSpring({
    delay,
    config: {
      tension: 220
    },
    to: {opacity: 1},
    from: {opacity: 0}});
  return <animated.div style={config} className={className ? className : ''} {...props}>{children}</animated.div>
}

AnimateOpacity.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  delay: PropTypes.number,
};

export default AnimateOpacity;