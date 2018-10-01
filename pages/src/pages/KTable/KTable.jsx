import React, { Component } from 'react';
import TableFilter from './components/TableFilter';

export default class KTable extends Component {
  static displayName = 'KTable';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="k-table-page">
        <TableFilter />
      </div>
    );
  }
}
