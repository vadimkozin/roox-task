import { BACKEND_URL, TIMEOUT_MAX } from 'src/const'

const headers = { 'Content-Type': 'application/json;charset=utf-8' }

const fetchItems = async (id = null) => {
  const controller = new AbortController()
  setTimeout(() => controller.abort(), TIMEOUT_MAX)

  try {
    let url = `${BACKEND_URL}`
    if (id) url += `/${id}`

    const response = await fetch(url, {
      headers: headers,
      signal: controller.signal,
    })

    if (response.ok) {
      const items = await response.json()
      return items
    } else {
      const err = await response.json()
      throw err
    }
  } catch (err) {
    if (err.name === 'AbortError') {
      err.ecode = err.name
    }
    throw err
  }
}

// api/users
export const fetchUsers = () => fetchItems()
// api/users/id
export const fetchUser = (id) => fetchItems(id)
