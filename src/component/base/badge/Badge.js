/**
 * Created by liu_k on 2015/11/27.
 * 小红点类，由于ant design不知道如何调整字体大小，只好自己做一个
 */
import React, { Component } from 'react';
import styls from  './badge.scss';

class Badge extends Component {

  render() {
      let { count } = this.props;
      const dot = this.props.dot;

      count = count >= 100 ? '99+' : count;

      // dot mode don't need count
      if (dot) {
          count = '';
      }
    return (
        <span className="badge bg-warning-400">{count}</span>
    );
  }
}

Badge.propTypes = {};
Badge.defaultProps = {};

export default Badge;
