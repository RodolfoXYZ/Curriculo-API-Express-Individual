const express = require('express');
const { sequelize } = require('./models');
const curriculumRoutes = require('./routes/curriculumRoutes');

const app = express();
app.use(express.json());
app.use('/api', curriculumRoutes);

// Conectar ao banco de dados e iniciar o servidor
sequelize.sync({ force: false }).then(() => {
  console.log('Banco de dados sincronizado.');
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
}).catch(err => console.error('Erro ao conectar ao banco de dados:', err));
