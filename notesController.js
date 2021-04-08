const controller = {};
const connection = require('./db.config');


controller.list = (req,res) => {
    connection.query("SELECT * FROM notes", function (error, results) {
        if (error) res.status(500).json({ error })
        console.log(results)
        res.render('index', {
            data: results
        });
    });
}

controller.new = (req,res) => {
    const data = req.body;
    connection.query("INSERT INTO notes set ?", [data], function (error, results) {
        if (error) res.status(500).json({ error })
        res.redirect('/');
    });
}

controller.edit = (req,res) => {
    const { id } = req.params;
    connection.query("SELECT * FROM notes WHERE idnotes = ?", [id], function (error, results) {
        if (error) res.status(500).json({ error })
        res.render('edit_note', {data: results[0]});
    });
}

controller.save = (req,res) => {
    const { id } = req.params;    
    const updateNote = req.body;
    connection.query("UPDATE notes set ? WHERE idnotes = ?", [updateNote, id], function (error, results) {
        if (error) res.status(500).json({ error })
        res.redirect('/');
    });
}

controller.delete = (req,res) => {
    const { id } = req.params;
    connection.query("DELETE FROM notes WHERE idnotes = ?", [id], function (error, results) {
        if (error) res.status(500).json({ error })
        res.redirect('/');
    });
}

module.exports = controller;