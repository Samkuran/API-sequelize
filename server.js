import express from 'express';
import categoryRoutes from './resources/category/routes.js';
import brandRoutes from './resources/brand/routes.js';


const app = express();

app.use(express.json());
app.use('/api', categoryRoutes);
app.use('/api', brandRoutes);

app.listen(8000, () => {
    console.log('--------------');
    console.log('--- PRONTO ---');
    console.log('--------------');
});
