const router = require('express').Router();
const fs = require('fs');

// const router = require('.');

// API to return Notes html
// get routes (/api/notes)
router.get('/api/notes', (req, res) => {
  fs.readFile('./db/db.json', (err, data) => {
    if (err) console.log(err);
    res.status(200).json(JSON.parse(data));
  })
});


// API to read JSON and return all saved notes to JSON
// post route (/api/notes)
router.post('/api/notes', (req, res) => {
  let notesDb = []
  fs.readFile('./db/db.json', (err, data) => {
    if (err) console.log(err);
    {
      notesDb = JSON.parse(data);
      notesDb.push(req.body)
      updateNotesDb(notesDb, res)
    }
  })
});

// DELETE /api/notes/:id
router.delete('/api/notes/:id', function (req, res) {
  let notesDb = []
  fs.readFile('./db/db.json', (err, data) => {
    if (err) console.log(err)
    {
      notesDb = JSON.parse(data);
      notesDb.splice(req.params.id, 1);
      updateNotesDb(notesDb, res);

    }
  })
});

function updateNotesDb(notesDb, res) {
  let i = 1;
  notesDb.forEach(element => {
    element.id = i;
    i++;
  });
  notesDb = JSON.stringify(notesDb)
  fs.writeFile(
    "./db/db.json",
    notesDb,
    (err) => err ? console.error(err) : res.send("ok")
  )
}





module.exports = router;