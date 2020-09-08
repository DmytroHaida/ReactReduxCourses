/* eslint-disable no-useless-concat */
import React from 'react';
import { Field } from 'redux-form';
export const TextArea = ({ input, meta: { touched, error }, ...props }) => {
    const visualError = touched && error

    return (
        <div className={"FormControl" + " " + (visualError ? "error" : "")}>
            <div>
                <textarea {...input} {...props} />
            </div>
            {visualError && <span>{error}</span>}

        </div>
    );
}
export const Input = ({ input, meta: { touched, error }, ...props }) => {
    const visualError = touched && error
    return (
        <div className={"FormControl" + " " + (visualError ? "error" : "")}>
            <div>
                <input {...input} {...props} />
            </div>
            {visualError && <span>{error}</span>}

        </div>
    );
}

export const FormField = (component, type, placeholder, name, validate, someProps ) => {
    return <Field type={type} placeholder={placeholder}
        name={name} component={component} validate={validate}
        {...someProps}
        />
}