const http = require('http')
const fs = require('fs')
const path = require('path')

http
  .get('http://jsonplaceholder.typicode.com/posts', res => {
    let data = ''

    res.on('data', chunk => {
      data += chunk
    })

    res.on('end', () => {
      fs.mkdir(path.join(__dirname, '/result'), (err) => {
        if (err) throw err
      })
      fs.writeFile(path.join(__dirname, '/result', 'posts.json'), data, (err) => {
        if (err) throw err
        console.log('Folder writen to ...');
      })
    })
  })
  .on('error', err => {
    console.log('Error:' + err.message)
  })