import React, { Component } from 'react';
import Header from '../components/Header';
import TableBookingForm from '../components/TableBookingForm';
import { tableFetch, tableUpdate } from '../actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class TableBooking extends Component {

    componentDidMount() {
        if (this.props.match.params.id) {
            this.props.tableFetch(this.props.match.params.id)
        }
    }

    render() {
        const { formValues, tables, tableUpdate } = this.props
        return (
            <div>
                <Header />
                <hr />
                <div className="container col-md-5">
                    {tables.saved && (
                        alert(tables.msg),
                        <Redirect to="/" />
                    )
                    }
                    <TableBookingForm onSubmit={() => tableUpdate(tables.id, formValues)} />
                </div>
            </div>
        )
    }
}

function mapStateToProps({ form, tables }) {
    return { formValues: form.tableBookingForm ? form.tableBookingForm.values : null, tables }
}

export default connect(mapStateToProps, { tableFetch, tableUpdate })(TableBooking)