import React, { Component } from 'react';
import Header from '../components/Header';
import TableUnBookingForm from '../components/TableUnBookingForm';
import { tableFetch, tableUpdate } from '../actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class TableUnBooking extends Component {

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
                    <TableUnBookingForm onSubmit={() => tableUpdate(tables.id, formValues)} />
                </div>
            </div>
        )
    }
}

function mapStateToProps({ form, tables }) {
    return { formValues: form.tableUnBookingForm ? form.tableUnBookingForm.values : null, tables }
}

export default connect(mapStateToProps, { tableFetch, tableUpdate })(TableUnBooking)