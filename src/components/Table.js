import React, { Component } from 'react';

class Table extends Component {

    tableFree(tableId, capacity) {
        if (capacity == 1) {
            return (
                <div>
                    <h4>โต๊ะ {tableId}</h4>
                    <h4>สำหรับ 1-2 คน</h4>
                    <button className="btn btn-primary btn-block" style={{ height: 100 }} onClick={() => console.log(tableId)}>จองโต๊ะ</button>
                </div>
            )
        } else if (capacity == 3) {
            return (
                <div>
                    <h4>โต๊ะ {tableId}</h4>
                    <h4>สำหรับ 3-4 คน</h4>
                    <button className="btn btn-primary btn-block" style={{ height: 100 }} onClick={() => console.log(tableId)}>จองโต๊ะ</button>
                </div>
            )
        }
    }

    tableUnFree(tableId, capacity) {
        if (capacity == 1) {
            return (
                <div>
                    <h4>โต๊ะ {tableId}</h4>
                    <h4>โต๊ะถูกจองแล้ว</h4>
                    <button className="btn btn-danger btn-block" style={{ height: 100 }} onClick={() => console.log(tableId)}>ยกเลิกการจอง</button>
                </div>
            )
        } else if (capacity == 3) {
            return (
                <div>
                    <h4>โต๊ะ {tableId}</h4>
                    <h4>โต๊ะถูกจองแล้ว</h4>
                    <button className="btn btn-danger btn-block" style={{ height: 100 }} onClick={() => console.log(tableId)}>ยกเลิกการจอง</button>
                </div>
            )
        }
    }

    render() {
        const { tableId, capacity, status } = this.props;
        return (
            <div className="ml-2">
                {
                    status == true ? this.tableFree(tableId, capacity) : this.tableUnFree(tableId, capacity)
                }
            </div>
        )
    }
}

export default Table