import React, { Component } from 'react';
import Pie from "../../../component/echarts/pie/pie"
import "./show.css"
export class show extends Component {
    render() {
        return (
            <div className="show_div_bg">
               <Pie></Pie>
            </div>
        );
    }
}

export default show;

