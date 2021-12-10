const router = require('express').Router();
const path = require('path');


// HTML route to return Notes html
// get routes (/notes)
router.get('/notes', (req,res) =>{
    res.sendFile(path.join(__dirname, '../../public/notes.html'))
});



// HTML route  to return the index.html
// get route(/)
router.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname,'../../public','/index.html'))
});



module.exports = router;
