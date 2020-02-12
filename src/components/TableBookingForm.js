import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import FormFiled from './FormField';
import { connect } from 'react-redux';

class TableBookingForm extends Component {
    render() {
        const { onSubmit } = this.props
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(onSubmit)}>
                    <h4 className="text-info">จองโต๊ะ</h4>
                    <Field name="name" label="ใส่ชื่อผู้จอง" type="text" required={true} component={FormFiled} />
                    <button className="btn btn-block btn-info" type="submit">บันทึก</button>
                    <Field name="capacity" label="" type="hidden" required={true} component={FormFiled} />
                    <Field name="status" label="" type="hidden" required={true} component={FormFiled} />
                </form>
            </div>
        )
    }
}

function mapStateToProps({ tables }) {
    if (tables && tables.id)
        return { initialValues: tables }
    else return {}
}


TableBookingForm = reduxForm({ form: "tableBookingForm" })(TableBookingForm)

export default connect(mapStateToProps)(TableBookingForm)