//############### mainbody.js ###############
import React, { Component } from 'react';

//importing Components
import TopPara from './toppara.js'
import BottomPara from './bottompara.js'

export default class MainBody extends Component {
  render() {
    return (
      <div className="main-body">
        <TopPara />
        <BottomPara />
      </div>
    );
  }
}
