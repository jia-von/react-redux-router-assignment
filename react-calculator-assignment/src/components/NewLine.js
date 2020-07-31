import React from 'react';
import { connect } from 'react-redux';
import addNewResultLine from '../actions/addNewResultLine';

class NewLine extends React.Component
{
  render ()
  {
    return (
      <li>
        {this.props.text}
      </li>
    );
  }
}

export default connect(null)(NewLine);
