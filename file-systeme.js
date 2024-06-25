const fs = require ('fs');
// Créer un fichier welcome.txt avec le contenu "Hello Node"
fs.writeFile('welcome.txt', 'Hello Node' ,(err) => {
    if (err) throw err ;
    console.log('file created and data written.');
 // Lire le fichier welcome.txt
fs.readFile('welcome.txt', 'utf8', (err, data)=>{
    if (err) throw err;
    console.log(data);
});

});