const sequelize = require('../config/database');
const { DataTypes } = require('sequelize');

// Dados Pessoais
const PersonalInfo = sequelize.define('PersonalInfo', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING },
});

// Resumo Profissional
const ProfessionalSummary = sequelize.define('ProfessionalSummary', {
  summary: { type: DataTypes.TEXT, allowNull: false },
});

// Formação Acadêmica
const Education = sequelize.define('Education', {
  degree: { type: DataTypes.STRING, allowNull: false },
  institution: { type: DataTypes.STRING, allowNull: false },
  year: { type: DataTypes.INTEGER, allowNull: false },
});

// Cursos
const Course = sequelize.define('Course', {
  title: { type: DataTypes.STRING, allowNull: false },
  institution: { type: DataTypes.STRING, allowNull: false },
  year: { type: DataTypes.INTEGER, allowNull: false },
});

// Histórico Profissional
const WorkHistory = sequelize.define('WorkHistory', {
  company: { type: DataTypes.STRING, allowNull: false },
  position: { type: DataTypes.STRING, allowNull: false },
  duration: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
});

module.exports = { sequelize, PersonalInfo, ProfessionalSummary, Education, Course, WorkHistory };
