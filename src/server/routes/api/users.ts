import * as express from 'express';
import db from '../../db';

const router = express.Router();

router.get('/test', async (req, res) => {
    try {    
        const test = await db.users.all();
        res.json(test);
    } catch (error) {
        console.log(error);
        res.status(500).json({  message: 'There was an error.', error: error.message  });
    }
});


//change --\/
router.get('/:todoid', async (req, res) => {    
    const todoid = Number(req.params.todoid);
    try {     
        res.json({ message: 'single todo by id'+ todoid });
    } catch (error) {
        console.log(error);
        res.status(500).json({  message: 'There was an error.', error: error.message  });
    }
});

router.post('/', async (req, res) => {
    const newTodo = req.body;
    try {  
        db.postChirp(req.body.text).then(results => {
            res.send(results);
    }) catch (error) {
        console.log(error);
        res.status(500).json({  message: 'There was an error.', error: error.message  });
    }
});


router.put('/:id/edit', async (req, res) => {    
    const id = Number(req.params.todoid);
    const editedTodo = req.body;
    try {  
        db.updateChirp(id, req.body.text).then(results => {
            res.send(results);
        });   
        res.json({ message: 'single chirp by id'+ id,...editedTodo });
        res.redirect('/');
    } catch (error) {
        console.log(error);
        res.status(500).json({  message: 'There was an error.', error: error.message  });
    }
});

router.delete('/:todoid', async (req, res) => {    
    const id = Number(req.params.todoid);
    try {  
        db.deleteChirp(id).then(results => {
            res.send(results);
        })   
        res.json({ message: 'deleted todo by id'+ id });
    } catch (error) {
        console.log(error);
        res.status(500).json({  message: 'There was an error.', error: error.message  });
    }
});

export default router; 