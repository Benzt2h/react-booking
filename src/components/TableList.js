import React, { Component } from 'react';
import Table from './Table';

class TableList extends Component {

    renderTable(capacity) {
        if (this.props.tableList && this.props.tableList.length > 0) {
            const tableFree = [
                {
                    tableCountFree: this.props.tableList.filter(table => table.capacity == capacity && table.status == true).length,
                    tableFreeId: this.props.tableList.filter(table => table.capacity == capacity && table.status)
                }
            ]
            if (capacity == 1) return <Table tableCountFree={tableFree[0].tableCountFree} capacity="โต๊ะสำหรับ 1-2 คน" tableId={tableFree[0].tableFreeId[0].tableId} />
            else if (capacity == 3) return <Table tableCountFree={tableFree[0].tableCountFree} capacity="โต๊ะสำหรับ 3-4 คน" tableId={tableFree[0].tableFreeId[0].tableId} />
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        {this.renderTable(1)}
                    </div>
                    <div className="col-md-6">
                        {this.renderTable(3)}
                    </div>
                </div>
            </div>
        )
    }
}

export default TableList