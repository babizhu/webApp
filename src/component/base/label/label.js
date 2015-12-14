/**
 * Created by liu_k on 2015/11/27.
 */

import React, { Component } from 'react';
import styles from './label.scss';


class Label extends Component {
  render() {
      const dot = this.props.text;
    return (
        <span className="label bg-success-400">{this.props.text}</span>
    );
  }
}

Label.propTypes = {};
Label.defaultProps = {};

export default Label;
