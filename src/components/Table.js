import React, { Component } from 'react';

class Table extends Component {

    tableFree(id, capacity) {
        if (capacity == 1) {
            return (
                <div>
                    <h4>โต๊ะ {id}</h4>
                    <h4>สำหรับ 1-2 คน</h4>
                    <button className="btn btn-primary btn-block" style={{ height: 100 }} onClick={() => this.props.bookingTable(this.props.id)}>จองโต๊ะ</button>
                </div>
            )
        } else if (capacity == 3) {
            return (
                <div>
                    <h4>โต๊ะ {id}</h4>
                    <h4>สำหรับ 3-4 คน</h4>
                    <button className="btn btn-primary btn-block" style={{ height: 100 }} onClick={() => this.props.bookingTable(this.props.id)}>จองโต๊ะ</button>
                </div>
            )
        }
    }

    tableUnFree(id, capacity) {
        if (capacity == 1) {
            return (
                <div>
                    <h4>โต๊ะ {id}</h4>
                    <h4>โต๊ะถูกจองแล้ว</h4>
                    <button className="btn btn-danger btn-block" style={{ height: 100 }} onClick={() => this.props.unBookingTable(this.props.id)}>ยกเลิกการจอง</button>
                </div>
            )
        } else if (capacity == 3) {
            return (
                <div>
                    <h4>โต๊ะ {id}</h4>
                    <h4>โต๊ะถูกจองแล้ว</h4>
                    <button className="btn btn-danger btn-block" style={{ height: 100 }} onClick={() => this.props.unBookingTable(this.props.id)}>ยกเลิกการจอง</button>
                </div>
            )
        }
    }

    render() {
        const { id, capacity, status } = this.props;
        return (
            <div className="ml-2">
                {
                    status == true ? this.tableFree(id, capacity) : this.tableUnFree(id, capacity)
                }
            </div>
        )
    }
}

export default Table