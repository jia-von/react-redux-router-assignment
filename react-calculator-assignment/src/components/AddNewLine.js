import React from 'react';
import {connect} from 'react-redux'

class AddNewLine extends React.Component
{
    render()
    {
        return (
            <li>{this.props.text}</li>
        );
    }
}
export default connect(null) (AddNewLine);