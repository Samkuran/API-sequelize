import { Sequelize } from 'sequelize';

// Configuração do Sequelize
const sequelize = new Sequelize('db_digital_store', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
});

// Função para executar queries
export async function execute(sql) {
  try {
    // Conectando e sincronizando
    await sequelize.authenticate();
    
    // Executando query
    const [results, metadata] = await sequelize.query(sql);
    
    return results;
  } catch (error) {
    console.error('Erro ao executar query:', error);
    throw error;
  }
}

export default sequelize;
