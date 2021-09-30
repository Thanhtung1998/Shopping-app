import { useState, useEffect } from 'react';

const useForm = (callback: any, validate: any) => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    });

    const error: any = {}
    const [errors, setErrors] = useState(error);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleBlur = (e: any) => {
        e.preventDefault();

        setErrors(validate(values));
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();

        setErrors(validate(values));
        setIsSubmitting(true);
    };

    useEffect(
        () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                callback();
            }
        },
        [errors]
    );

    return { handleChange, handleSubmit, handleBlur, values, errors };
};

export default useForm;