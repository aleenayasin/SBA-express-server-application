const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
const middleware1 = require('./middlewares/middleware1');
const middleware2 = require('./middlewares/middleware2');
const errorHandler = require('./middlewares/errorHandler');

app.use(express.static('public')); // Serve static files
app.use(express.json()); // Parse JSON bodies
app.use(middleware1);
app.use(middleware2);
app.use(errorHandler); // Error handling middleware should come after other middlewares

// Routes
const apiRoutes = require('./routes/apiRoutes');
const viewsRoutes = require('./routes/viewsRoutes');
app.use('/api', apiRoutes);
app.use('/', viewsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
