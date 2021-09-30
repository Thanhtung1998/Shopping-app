import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import tw from 'twin.macro'
import PropTypes from 'prop-types'
import { FormGroup, Label, Input } from 'reactstrap'
import { ErrorMessage } from 'formik';
import { Icon } from '../../Icon';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import '../../../css/input.css'
import { ShowError } from './showError'
import { isFulfilled } from '@reduxjs/toolkit';
import axios from 'axios'

InputFieldLogin.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    icon: PropTypes.func,
}

InputFieldLogin.defaultProps = {
    type: "text",
    label: "",
    placeholder: "",
    disabled: false,
    icon: "",
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


export function InputFieldLogin(props: any) {

    const { field, form, type, label, placeholder, disabled, icon } = props
    const { value, name, onChange, onBlur } = field





    // Process form validation with Yup
    const { errors, touched } = form;

    // console.log(form.status);

    const [StatusLogin, setStatusLogin] = useState(false)



    const handleStatus = async (values: any) => {

        const params = {
            email: values.email,
            password: values.password,
        }

        // console.log(params);

        try {
            const res = await axios.post('/user/login', params).then(function (response) {
                return response;

            }).catch(function (error) {
                return error.response;
            });

            console.log(res);

            if (res.status === 200) {
                setStatusLogin(false);
            } else {
                setStatusLogin(true);
                setTimeout(() => {
                    setStatusLogin(false);
                }, 5000)
            }

        } catch (error) {
            console.log(error);
        }
    }

    // console.log(form);

    // console.log(form);

    const handleSummitForm = () => {
        // && form.status === "Login"
        if (form.isSubmitting) {
            const values = {
                email: form.values.Email,
                password: form.values.Password
            }
            // console.log(values);
            handleStatus(values);
        } else {
            // setStatusLogin(false);
        }
    }

    useEffect(() => {
        let isCancelled = false;
        if (form.isSubmitting) {
            handleSummitForm();
        }

        return () => {
            isCancelled = true
        }

    }, [form.isSubmitting])

    const showError = errors[name] && touched[name] && !form.isValid;

    const validate = showError ? "TypeError" : "TypeSuccess";

    const validateSubmit = !value ? "" : validate;


    return (
        <FormGroup className="flex flex-1 flex-wrap">
            {label && (<Label className="w-full text-base mb-1 inline-block font-semibold text-gray-500 tracking-wide select-none" for={name} >{label}</Label>)}
            <BoxInput className={!StatusLogin ? validateSubmit : "TypeError"}>
                {/* ` ${!touched[name]} ? ${} : ""` */}
                <Icon Icon={icon} />
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