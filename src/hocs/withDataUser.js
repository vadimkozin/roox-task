import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useUser } from 'src/hooks/user.hook'
import { useMountedRef } from 'src/hooks/mounted-ref.hook'
import { userAdapter } from 'src/store/adapters'
import ShowError from 'src/components/common/show-error.js'
import ShowProgress from 'src/components/common/show-progress.js'

const withDataUser = (Component) => (props) => {
  const [data, setData] = useState(null)
  const { id } = useParams()
  const [getUsers, error] = useUser({ id })
  const mounted = useMountedRef()

  useEffect(() => {
    getUsers().then((data) => {
      if (mounted.current) setData(userAdapter.adaptToClient(data))
    })
  }, [getUsers, mounted])

  if (error) {
    return <ShowError error={error} />
  }

  if (data === null) {
    return <ShowProgress />
  }

  return <Component {...props} data={data} />
}

export default withDataUser
