import express from 'express';
import * as controller from './controller.js';

const router = express.Router();

router.get('/categories', async (req, res) => {
    try {
        const categories = await controller.listAll();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/categories/:id', async (req, res) => {
    try {
        const category = await controller.listOne(req.params.id);
        if (category) {
            res.json(category);
        } else {
            res.status(404).json({ error: 'Category not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/categories', async (req, res) => {
    try {
        const category = await controller.create(req.body);
        res.status(201).json(category); // 201 Created
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/categories/:id', async (req, res) => {
    try {
        const category = await controller.edit(req.params.id, req.body);
        if (category) {
            res.json(category);
        } else {
            res.status(404).json({ error: 'Category not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/categories/:id', async (req, res) => {
    try {
        await controller.destroy(req.params.id);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
