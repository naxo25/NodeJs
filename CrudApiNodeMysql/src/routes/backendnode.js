const express = require('express');
const router = express.Router();

const pool = require('../database');

router.post('/', async (req, res) => {
    const { title, url } = req.body;
    const newLink = {
        title,
        url
    };
    const respuesta = await pool.query('INSERT INTO nodejs set ?', [newLink]);
    newLink.id = respuesta.insertId;

    res.send(newLink);
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM nodejs WHERE ID = ?', [id]);
    res.send();
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, url } = req.body; 
    const newLink = {
        title,
        url
    };
    await pool.query('UPDATE nodejs set ? WHERE id = ?', [newLink, id]);
    res.send(req.body);
});

router.get('/', async (req, res) => {
    const nodejs = await pool.query('SELECT * FROM nodejs');
    res.send({nodejs});
});

router.put('/imagen/:id', async(req,res) => {
    const { id } = req.params;
    const foto  = req.body; 
    //await pool.query('update nodejs set ? where id = ?',[newFoto, id]);
    //res.sendFile(path.join(__dirname, "../public/img/image.png"));
});

module.exports = router;