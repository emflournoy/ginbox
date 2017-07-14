module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/galv_msg'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/galv_msg'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
