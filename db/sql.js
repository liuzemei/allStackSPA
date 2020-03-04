// alter table users add actual_amount VARCHAR(128) NOT NULL DEFAULT '';
module.exports = {
  // users
  ADD_USER: 'INSERT INTO users(user_id, full_name, phone) VALUES($1::varchar, $2::varchar, $3::varchar)',
  DELETE_USER: 'DELETE FROM users WHERE user_id=$1',
  UPDATE_USER: 'UPDATE users SET full_name=$2, phone=$3 WHERE user_id=$1',
  GET_USER: 'SELECT * FROM users WHERE user_id=$1',
}

