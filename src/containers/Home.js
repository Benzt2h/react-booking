import React, { Component } from 'react';
import Header from '../components/Header';
//import TableList from '../components/TableList';
import Table from '../components/Table';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = { tableList: "" }
        this.bookingTable = this.bookingTable.bind(this)
        this.unBookingTable = this.unBookingTable.bind(this)
    }

    componentDidMount() {
        axios.get("http://localhost:3001/tableList").then(res => {
            { this.setState({ tableList: res.data }) }
        })
    }

    renderTable(capacity) {
        if (this.state.tableList && this.state.tableList.length > 0) {
            return this.state.tableList.map(table => {
                if (table.capacity == capacity) {
                    return <Table key={table.tableId} {...table} bookingTable={this.bookingTable} unBookingTable={this.unBookingTable} />
                }
            })
        }
    }

    bookingTable(tableId) {
        this.props.history.push('booking/' + tableId);
    }

    unBookingTable(tableId) {
        this.props.history.push('unbooking/' + tableId);
    }

    render() {
        return (
            <div>
                <Header />
                <hr />
                <div className="container">
                    <div className="row justify-content-center">
                        {this.renderTable(1)}
                    </div>
                    <div className="row justify-content-center">
                        {this.renderTable(3)}
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Home);