

const notesData = require('../notes/db');


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  
  // get  data
  app.get('/api/notes', function(req, res) {
    res.json(notesData);
  });

 

  // post data
  app.post('/api/notes', function(req, res) {
      notesData.push(req.body);
      res.json(true);
  
  });

  
  // delete data
  app.delete("/api/notes/:id", function(req, res) {
    var id = req.params.id;
	notesData.forEach(function(item, index, arr) {
		if (item.id === id) {
			arr.splice(index, 1);
			res.send();
			return;
		}
	});
	res.status(404).send();
});

  

  app.post('/api/clear', function(req, res) {
    // Empty out the arrays of data
    notesData.length = 0;


    res.json({ ok: true });
  });
};
