import React, { Component } from 'react';
import Header from '../components/Header';
import TableList from '../components/TableList';
import Table from '../components/Table';

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = { tableList: "" }
    }

    componentDidMount() {
        this.setState({
            tableList: [
                { tableId: 1, capacity: 1, status: true },
                { tableId: 2, capacity: 1, status: false },
                { tableId: 3, capacity: 1, status: true },
                { tableId: 4, capacity: 3, status: true },
                { tableId: 5, capacity: 3, status: false },
                { tableId: 6, capacity: 3, status: false }
            ]
        })
    }

    renderTable(capacity) {
        if (this.state.tableList && this.state.tableList.length > 0) {
            return this.state.tableList.map(table => {
                if (table.capacity == capacity) {
                    return <Table key={table.tableId} {...table} />
                }
            })
        }
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

export default Home;