const path = require('path')
const fs = require('fs')
const directoryPath = path.join(__dirname, 'liste-objets-magiques')

fs.readdir(directoryPath, function (err, files) {
    // Gestion d'erreur
    if (err) {
        return console.log('Unable to scan directory: ' + err)
    }
    // Traitement des fichiers
    files.forEach(function (file) {
        // On ignore les répertoires
        let filePath = directoryPath+'/'+file
        if (fs.lstatSync(filePath).isFile()) {
          console.log(file)
          let dirName = file.substring(0, file.length-3)
          console.log(dirName)
          fs.readFile(filePath, {encoding:'utf-8'}, (err, filecontent) => {
            if (err) throw err
            fs.mkdir(directoryPath+'/'+dirName, (err) => {
              if (err) throw err
              fs.writeFile(directoryPath + '/' + dirName + '/' + "README.md", filecontent, function(err) {
                if(err) {
                  return console.log(err);
                }
                console.log("Saved: " + directoryPath + '/' + dirName + '/' + "README.md")
                fs.unlink(filePath, (err) => {
                  if (err) throw err
                })
              })
            })
          })
        }
    })
})
