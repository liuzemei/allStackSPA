const pgsql = require('pg')
const SQL = require('./sql')
const DATABASE_CONFIG = {
  host: 'localhost',
  port: 5432,
  user: 'lapsed',
  password: 'abcd1234',
  database: 'shop'
}

async function query(sql, params) {
  const client = new pgsql.Client(DATABASE_CONFIG)
  await client.connect()
  const { rows } = await client.query(sql, params)
  await client.end()
  return rows
}


async function queryList(data) {
  const client = new pgsql.Client(DATABASE_CONFIG)
  await client.connect()
  let res = []
  for (let i = 0, len = data.length; i < len; i++) {
    let { sql, params } = data[i]
    const { rows } = await client.query(sql, params)
    res.push(rows)
  }
  await client.end()
  return res
}


function _getUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

class DB {
  constructor() {
    this.SQL = SQL
  }
  // users
  async add_user({ user_id, full_name, phone }) {
    return await query(this.SQL.ADD_USER, [user_id, full_name, phone])
  }
}

module.exports = new DB()
