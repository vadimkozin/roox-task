import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Card from 'src/components/card/card'
import UsersHeader from 'src/components/users-header/users-header'
import UsersTotal from 'src/components/users-total/users-total'

const sort = (data, sortBy) => {
  switch (sortBy) {
    case 'city':
      return data.sort((a, b) => (a.address.city > b.address.city ? 1 : -1))
    case 'company':
      return data.sort((a, b) => (a.company.name > b.company.name ? 1 : -1))
    default:
      return data
  }
}

const Users = ({ data }) => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const sortBy = searchParams.get('sort')

  return (
    <>
      <UsersHeader />
      {sort(data, sortBy).map((d) => {
        return (
          <Card
            key={d.id}
            name={d.name}
            city={d.address.city}
            company={d.company.name}
            handleSelect={() => navigate(`/users/${d.id}`)}
          />
        )
      })}
      <UsersTotal count={data.length} />
    </>
  )
}

export default Users
