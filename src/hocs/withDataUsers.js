import React, { useState, useEffect } from 'react'
import { useUsers } from 'src/hooks/user.hook'
import { useMountedRef } from 'src/hooks/mounted-ref.hook'
import ShowError from 'src/components/common/show-error.js'
import ShowProgress from 'src/components/common/show-progress.js'

const withDataUsers = (Component) => (props) => {
  const [data, setData] = useState(null)
  const [getUsers, error] = useUsers()
  const mounted = useMountedRef()

  useEffect(() => {
    getUsers().then((data) => {
      if (mounted.current) setData(data)
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

export default withDataUsers
