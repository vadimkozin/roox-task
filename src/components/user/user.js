import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik, Form, useField } from 'formik'
import * as Yup from 'yup'
import styles from './user.module.scss'
import UserProfileHeader from 'src/components/user-header/user-header'
import ButtonSend from 'src/components/button/button-send'
import clsx from 'clsx'

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  const classEdit = props.disabled ? styles.is_readonly : styles.is_edit
  const classError = meta.touched && meta.error ? styles.is_error : ''

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className={clsx(classEdit, classError)} {...field} {...props} />
    </>
  )
}

const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea className='textarea-input' {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </>
  )
}

const max = (max) => `Must be ${max} characters or less`
const clearValues = (values) => {
  Object.keys(values).forEach((k) => (values[k] = ''))
  return values
}

const UserForm = ({ data }) => {
  const [isDisabled, setIsDisabled] = useState(true)
  const navigator = useNavigate()

  return (
    <>
      <Formik
        initialValues={data}
        validationSchema={Yup.object({
          name: Yup.string().max(40, max(40)).required('Required'),
          username: Yup.string().max(40, max(40)).required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          street: Yup.string().max(60, max(60)).required('Required'),
          city: Yup.string().max(60, max(60)).required('Required'),
          zipcode: Yup.string()
            .max(10, 'Must be zip-code in format: 99999-9999')
            // .matches(/^\d{5}-\d{4}$/)
            .required('Required'),
          phone: Yup.string()
            // eslint-disable-next-line
            .max(30, 'Must be phone code, ${max} characters or less')
            .required('Required'),
          website: Yup.string()
            .matches(
              /^((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
              'Enter correct url!'
            )
            .required('Please enter website'),
          comment: Yup.string().max(300, max(300)),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(false)
          console.log('values:', values)
          alert(JSON.stringify(values, null, 2))
          resetForm({ values: clearValues(values) })
          navigator('/')
        }}
      >
        <Form className={styles.form}>
          <UserProfileHeader
            header='Профиль пользователя'
            textButton='Редактировать'
            onClick={() => setIsDisabled(false)}
          />
          {/* prettier-ignore */}
          <fieldset disabled={isDisabled ? 'disabled' : null}>
            <MyTextInput label='Name' name='name' type='text' disabled={isDisabled} />
            <MyTextInput label='User name' name='username' type='text' disabled={isDisabled} />
            <MyTextInput label='E-mail' name='email' type='email' disabled={isDisabled} />
            <MyTextInput label='Street' name='street' type='text' disabled={isDisabled} />
            <MyTextInput label='City' name='city' type='text' disabled={isDisabled} />
            <MyTextInput label='Zip code' name='zipcode' type='text' disabled={isDisabled} />
            <MyTextInput label='Phone' name='phone' type='text' disabled={isDisabled} />
            <MyTextInput label='Website' name='website' type='text' disabled={isDisabled} />
            <MyTextArea label='Comment' name='comment' disabled={isDisabled} />
          </fieldset>
          <div className={styles.form__footer}>
            <ButtonSend type='submit' disabled={isDisabled ? 'disabled' : null}>
              Отправить
            </ButtonSend>
          </div>
        </Form>
      </Formik>
    </>
  )
}

export default UserForm
