export const userAdapter = {
  adaptToClient(o) {
    return {
      name: o.name,
      username: o.username,
      email: o.email,
      street: o.address.street,
      city: o.address.city,
      zipcode: o.address.zipcode,
      phone: o.phone,
      website: o.website,
      comment: '',
    }
  },
}
