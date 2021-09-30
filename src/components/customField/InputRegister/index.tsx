import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import tw from 'twin.macro'
import PropTypes from 'prop-types'
import { FormGroup, Label, Input } from 'reactstrap'
import { ErrorMessage } from 'formik';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import '../../../css/input.css'
import axios from 'axios'
import { ShowError } from '../inputField/showError'

InputFieldRegister.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
}

InputFieldRegister.defaultProps = {
    type: "text",
    label: "",
    placeholder: "",
    disabled: false,
}

const BoxInput = styled.div`
    ${tw`
        w-full
        flex
        p-2
        items-center
        border 
        border-gray-400
        mt-2 
        mb-2
        rounded-full
        overflow-hidden
    `}

    .form-control{
        ${tw`
            flex
            h-full
            flex-1
            ml-2
            mr-5
            overflow-hidden
            bg-transparent
            focus:outline-none
            text-gray-400
        `}
    }

`


export function InputFieldRegister(props: any) {

    const { field, form, type, label, placeholder, disabled, icon } = props
    const { value, name, onChange, onBlur } = field


    // Process form validation with Yup
    const { errors, touched } = form;

    // console.log(form.status);

    const showError = errors[name] && touched[name] && !form.isValid;

    return (
        <FormGroup className="flex flex-1 flex-wrap">
            {label && (<Label className="w-full text-base mb-1 inline-block font-semibold text-gray-500 tracking-wide select-none" for={name} >{label}</Label>)}
            <BoxInput className="">
                {/* ` ${!touched[name]} ? ${} : ""` */}

                <Input
                    className=""
                    id={name}
                    type={type}
                    disabled={disabled}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    invalid={showError}
                // error={error}
                />
            </BoxInput>

            {errors[name] && < ErrorMessage name={name} component={ShowError} />}

        </FormGroup>
    )
}