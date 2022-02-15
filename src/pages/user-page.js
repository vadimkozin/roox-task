import React from 'react'
import UserForm from 'src/components/user/user'
import withDataUser from 'src/hocs/withDataUser'

const Wrapped = withDataUser(UserForm)

const userPage = () => <Wrapped />

export default userPage
