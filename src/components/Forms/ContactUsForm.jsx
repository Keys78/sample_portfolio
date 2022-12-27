import React, { useState } from 'react'
import CustomButton from '../Shared/CustomButton';
import Input from '../Shared/Input';
import TextArea from '../Shared/TextArea';

const ContactUsForm = () => {

  const initialValues = {
    name: "",
    email: "",
    message: ""
  };

  const [values, setValues] = useState(initialValues);
  const onHandleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

  };

  const sendMessage = (e) => {
    e.preventDefault()
    console.log(values)
  }

  return (
    <div className='w-full max-w-[400px]'>
      <form onSubmit={(e) => sendMessage(e)}>
        <Input name={'name'} value={values.name} label='name' type='text' required={true} onHandleInputChange={(e) => onHandleInputChange(e)} />
        <Input name={'email'} value={values.email} label='email' type='text' required={true} onHandleInputChange={(e) => onHandleInputChange(e)} />
        <TextArea name={'message'} value={values.message} label='MESSAGE' type='text' required={true} onHandleInputChange={(e) => onHandleInputChange(e)} />
        <div className='float-right clear-right'>
        <CustomButton text={'SEND MESSAGE'} />
        </div>
      </form>
    </div>
  )
}

export default ContactUsForm