const {app} = require('./app');
const {db} = require('./utils/database.utils')

db.authenticate()
.then(()=>console.log('db authenticate'))
.catch(error => console.log(error));

db.sync()
.then(()=>console.log('db sync'))
.catch(error => console.log(error));

app.listen(4000, ()=>{
    console.log('Server on port 4000')
});