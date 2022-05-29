import { Formik, Form, useField, useFormikContext } from "formik";
import React from "react";
import * as Yup from "yup";
import styled from "@emotion/styled";
import './style.css';
import './style-custom.css';



export default class SubForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <>
                <h1>Subscribe!</h1>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        acceptedTerms: false,
                        jobType: '',
                    }}
                    validationSchema={
                        Yup.object({
                            firstName: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
                            lastName: Yup.string().max(20, "Must be 20 characters or less").required("Required"),
                            email: Yup.string("Invalid email address").required("Required"),
                            acceptedTerms: Yup.boolean().required("Required").oneOf([true], "You must accept the terms and conditions"),
                            jobType: Yup.string().oneOf(["designer", "development", "product", "other", "Invalid Job Type"]).required("Required"),
                        })
                    }

                    onSubmit={async (values, { setSubmitting }) => {
                        await new Promise(r => setTimeout(r, 500))
                        setSubmitting(false)
                    }}
                >
                    <form >

                        <MyTextInput
                            label={'First Name'}
                            name={'firstName'}
                            type={'text'}
                            placeholder={'Jane'} />

                        <MyTextInput
                            label={'Last Name'}
                            name={'lastName'}
                            type={'text'}
                            placeholder={'Doe'} />

                        <MyTextInput
                            label={'Email Address'}
                            name={'email'}
                            type={'email'}
                            placeholder={'jane@formik.com'} />

                        <MySelect label={'Job Type'} name={'jobType'}>
                            <option value={''}>Select a job type</option>
                            <option value={'designer'}>Designer</option>
                            <option value={'development'}>Development</option>
                            <option value={'product'}>Product</option>
                            <option value={'other'}>Other</option>
                        </MySelect>

                        <MyCheckbox name="acceptedTerms">
                            I accept the term and conditions.
                        </MyCheckbox>

                    </form>


                </Formik>
            </>
        )
    }
}

const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

const MyCheckbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: "checkbox" });
    return (
        <>
            <label className="checkbox">
                <input {...field} {...props} type="checkbox" />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

const MySelect = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
        <>
            <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
            <StyledSelect {...field} {...props} />
            {meta.touched && meta.error ? (
                <StyledErrorMessage>{meta.error}</StyledErrorMessage>
            ) : null}
        </>
    );
};

const StyledLabel = styled.label`
  margin-top: 1rem;
`;

const StyledSelect = styled.select`
  color: var(--blue);
`;

const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: var(--red-600);
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: "❌ ";
    font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;