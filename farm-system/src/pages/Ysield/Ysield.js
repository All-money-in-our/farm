import React, { Component } from 'react';
import Add from './add/AddYsield'
import List from './list/Ysield'
export class Ysield extends Component {
    render() {
        return (
            <div>
                <Add></Add>
                <List></List>
            </div>
        );
    }
}

export default Ysield;
