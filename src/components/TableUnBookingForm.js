import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import FormFiled from './FormField';
import { connect } from 'react-redux';

class tableUnBookingForm extends Component {


    render() {
        const { onSubmit } = this.props
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(onSubmit)}>
                    <h4 className="text-warning">ยกเลิกโต๊ะ</h4>
                    <Field name="c-name" label="ใส่ชื่อผู้จอง" type="text" required={true} component={FormFiled} />
                    <button className="btn btn-block btn-info" type="submit">บันทึก</button>
                    <Field name="capacity" label="" type="hidden" required={true} component={FormFiled} />
                    <Field name="status" label="" type="hidden" required={true} component={FormFiled} />
                </form>
            </div>
        )
    }
}




function validate(values) {
    const errors = {};
    if (values["c-name"] != bookingName) {
        errors["c-name"] = "ชื่อผู้จองไม่ถูกต้อง"
    }
    return errors
}

let bookingName = null;

function mapStateToProps({ tables }) {
    if (tables && tables.id) {
        bookingName = tables.name
        return { initialValues: tables }
    }
    else return {}
}


tableUnBookingForm = reduxForm({ validate, form: "tableUnBookingForm" })(tableUnBookingForm)

export default connect(mapStateToProps)(tableUnBookingForm)