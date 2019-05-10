import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ListItem extends Component {
  render() {
    return (
      <li>ListItem</li>
    )
  }
}

ListItem.propTypes = {
    abc: PropTypes.number.isRequired,
    def: PropTypes.string.isRequired,
    ghi: PropTypes.bool.isRequired
}

ListItem.defaultProps = {
    ghi: false
}