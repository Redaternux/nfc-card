
const { sendResponse,generateId } = require("../functions/util");
const { execQuery } = require("../config/db");
const mysql = require('mysql2')


exports.createOne = async (req, res) => {
  const data = req.body;

  try {
    console.log('Received data:', data);

    const query = 'INSERT INTO contact (fullname, email, message) VALUES (?, ?, ?)';
    const values = [data.fullname,data.email, data.message];
    const search_query = mysql.format(query, values);
    console.log('SQL query:', search_query);

    const results = await execQuery(search_query);

    return sendResponse(res, 200, 'DATA_SENT', results);
  } catch (error) {
    console.error('Error sending data:', error);
    return sendResponse(res, 500, 'ERROR_SENDING_DATA');
  }
};
