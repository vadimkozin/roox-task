import { useState, useCallback } from 'react'
import { fetchUsers, fetchUser } from 'src/store/api-action'

export const useUsers = () => {
  const [error, setError] = useState(null)

  const getUsers = useCallback(async () => {
    try {
      const users = await fetchUsers()
      return users
    } catch (error) {
      setError(error)
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [getUsers, error]
}


export const useUser = ({ id }) => {
  const [error, setError] = useState(null)

  const getUser = useCallback(async () => {
    try {
      const user = await fetchUser(id)
      return user
    } catch (error) {
      setError(error)
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [getUser, error]
}

