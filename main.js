require('dotenv').config()
const csv = require('csv-parser')
const fs = require('fs')
const results= []
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
})

const tables = [
  'table1',
  'table2',
  'table3'
]

tables.forEach(name => {
  try {
    fs.createReadStream(`${name}.csv`)
      .pipe(csv({}))
      .on('data', (data) => results.push(data))
      .on('end', () => {
        
        results.forEach(element => {
          connection.query(`INSERT INTO ${name} SET ?`, element, (err, result) => {
            if (err) throw err
          })
        })
        console.log('deu bom');
        
      })
  } catch (error) {
    console.log(error)
  }
})
