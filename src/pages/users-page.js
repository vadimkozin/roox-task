import React from 'react'
import Users from 'src/components/users/users'
import withDataUsers from 'src/hocs/withDataUsers'

const Wrapped = withDataUsers(Users)

const usersPage = () => <Wrapped />

export default usersPage
