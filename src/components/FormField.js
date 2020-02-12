import React from 'react';
export default ({ input, label, type, required, meta }) => {
    return (
        <div className="form-group">
            <label>{label}</label>
            <input type={type} className="form-control" required={required} {...input} />
            {meta.error && meta.touched &&
                (
                    <div className="text-danger">{meta.error}</div>
                )
            }
        </div>
    )
}