import { FormEvent, useState } from 'react';

export const useForm = <T>(val: T, validator?: (val: T) => undefined | T) => {
  const [values, setValues] = useState<T>(val);
  const [errors, setErrors] = useState<null | T>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>, cb?: (param: T) => void) => {
    e.preventDefault();

    const errorsExists = validator?.(values);
    if (errorsExists) {
      setErrors(errorsExists);
      return;
    }

    cb?.(values);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setValues(val);
    setIsSubmitted(false);
  };

  return {
    values,
    onChange,
    handleSubmit,
    resetForm,
    isSubmitted,
    errors,
  };
};
