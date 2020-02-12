import React, { Component } from 'react';
import Header from '../components/Header';
//import TableList from '../components/TableList';
import Table from '../components/Table';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { tableFetchs } from '../actions';

class Home extends Component {

    constructor(props) {
        super(props)
        this.bookingTable = this.bookingTable.bind(this)
        this.unBookingTable = this.unBookingTable.bind(this)
    }

    componentDidMount() {
        this.props.tableFetchs();
    }

    renderTable(capacity) {
        if (this.props.tableList && this.props.tableList.length > 0) {
            return this.props.tableList.map(table => {
                if (table.capacity == capacity) {
                    return <Table key={table.id} {...table} bookingTable={this.bookingTable} unBookingTable={this.unBookingTable} />
                }
            })
        }
    }

    bookingTable(id) {
        this.props.history.push('booking/' + id);
    }

    unBookingTable(id) {
        this.props.history.push('unbooking/' + id);
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

function mapStateToProps(state) {
    return { tableList: state.tables }
}

export default withRouter(connect(mapStateToProps, { tableFetchs })(Home));