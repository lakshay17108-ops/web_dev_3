import fs from 'fs'

fs.writeFile('./parent/child.js',"", (err) => {
    if (err) {
        console.error('Error creating file:', err)
    } else {
        console.log('File created successfully!')
    }
})