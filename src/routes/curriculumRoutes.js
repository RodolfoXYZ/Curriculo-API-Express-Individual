const express = require('express');
const { PersonalInfo, ProfessionalSummary, Education, Course, WorkHistory } = require('../models');
const router = express.Router();

// --- Dados Pessoais ---
router.post('/personal-info', async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const newPersonalInfo = await PersonalInfo.create({ name, email, phone });
    res.status(201).json(newPersonalInfo);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar dados pessoais' });
  }
});

router.get('/personal-info', async (req, res) => {
  try {
    const personalInfo = await PersonalInfo.findAll();
    res.json(personalInfo);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar dados pessoais' });
  }
});

router.put('/personal-info/:id', async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const personalInfo = await PersonalInfo.findByPk(req.params.id);
    if (personalInfo) {
      personalInfo.name = name || personalInfo.name;
      personalInfo.email = email || personalInfo.email;
      personalInfo.phone = phone || personalInfo.phone;
      await personalInfo.save();
      res.json(personalInfo);
    } else {
      res.status(404).json({ error: 'Dados pessoais não encontrados' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar dados pessoais' });
  }
});

router.delete('/personal-info/:id', async (req, res) => {
  try {
    const personalInfo = await PersonalInfo.findByPk(req.params.id);
    if (personalInfo) {
      await personalInfo.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Dados pessoais não encontrados' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar dados pessoais' });
  }
});

// --- Resumo Profissional ---
router.post('/professional-summary', async (req, res) => {
  try {
    const { summary } = req.body;
    const newSummary = await ProfessionalSummary.create({ summary });
    res.status(201).json(newSummary);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar resumo profissional' });
  }
});

router.get('/professional-summary', async (req, res) => {
  try {
    const summary = await ProfessionalSummary.findAll();
    res.json(summary);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar resumo profissional' });
  }
});

router.put('/professional-summary/:id', async (req, res) => {
  try {
    const { summary } = req.body;
    const professionalSummary = await ProfessionalSummary.findByPk(req.params.id);
    if (professionalSummary) {
      professionalSummary.summary = summary || professionalSummary.summary;
      await professionalSummary.save();
      res.json(professionalSummary);
    } else {
      res.status(404).json({ error: 'Resumo profissional não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar resumo profissional' });
  }
});

router.delete('/professional-summary/:id', async (req, res) => {
  try {
    const professionalSummary = await ProfessionalSummary.findByPk(req.params.id);
    if (professionalSummary) {
      await professionalSummary.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Resumo profissional não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar resumo profissional' });
  }
});

// --- Formação Acadêmica ---
router.post('/education', async (req, res) => {
  try {
    const { degree, institution, year } = req.body;
    const newEducation = await Education.create({ degree, institution, year });
    res.status(201).json(newEducation);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar formação acadêmica' });
  }
});

router.get('/education', async (req, res) => {
  try {
    const education = await Education.findAll();
    res.json(education);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar formação acadêmica' });
  }
});

router.put('/education/:id', async (req, res) => {
  try {
    const { degree, institution, year } = req.body;
    const education = await Education.findByPk(req.params.id);
    if (education) {
      education.degree = degree || education.degree;
      education.institution = institution || education.institution;
      education.year = year || education.year;
      await education.save();
      res.json(education);
    } else {
      res.status(404).json({ error: 'Formação acadêmica não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar formação acadêmica' });
  }
});

router.delete('/education/:id', async (req, res) => {
  try {
    const education = await Education.findByPk(req.params.id);
    if (education) {
      await education.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Formação acadêmica não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar formação acadêmica' });
  }
});

// --- Cursos ---
router.post('/courses', async (req, res) => {
  try {
    const { title, institution, year } = req.body;
    const newCourse = await Course.create({ title, institution, year });
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar curso' });
  }
});

router.get('/courses', async (req, res) => {
  try {
    const courses = await Course.findAll();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar cursos' });
  }
});

router.put('/courses/:id', async (req, res) => {
  try {
    const { title, institution, year } = req.body;
    const course = await Course.findByPk(req.params.id);
    if (course) {
      course.title = title || course.title;
      course.institution = institution || course.institution;
      course.year = year || course.year;
      await course.save();
      res.json(course);
    } else {
      res.status(404).json({ error: 'Curso não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar curso' });
  }
});

router.delete('/courses/:id', async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.id);
    if (course) {
      await course.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Curso não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar curso' });
  }
});

// --- Histórico Profissional ---
router.post('/work-history', async (req, res) => {
  try {
    const { company, position, duration, description } = req.body;
    const newWorkHistory = await WorkHistory.create({ company, position, duration, description });
    res.status(201).json(newWorkHistory);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar histórico profissional' });
  }
});

router.get('/work-history', async (req, res) => {
  try {
    const workHistory = await WorkHistory.findAll();
    res.json(workHistory);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar histórico profissional' });
  }
});

router.put('/work-history/:id', async (req, res) => {
  try {
    const { company, position, duration, description } = req.body;
    const workHistory = await WorkHistory.findByPk(req.params.id);
    if (workHistory) {
      workHistory.company = company || workHistory.company;
      workHistory.position = position || workHistory.position;
      workHistory.duration = duration || workHistory.duration;
      workHistory.description = description || workHistory.description;
      await workHistory.save();
      res.json(workHistory);
    } else {
      res.status(404).json({ error: 'Histórico profissional não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar histórico profissional' });
  }
});

router.delete('/work-history/:id', async (req, res) => {
  try {
    const workHistory = await WorkHistory.findByPk(req.params.id);
    if (workHistory) {
      await workHistory.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Histórico profissional não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar histórico profissional' });
  }
});

// --- Rota para mostrar todas as informações registradas ---
router.get('/curriculum', async (req, res) => {
  try {
    const personalInfo = await PersonalInfo.findAll();
    const summary = await ProfessionalSummary.findAll();
    const education = await Education.findAll();
    const courses = await Course.findAll();
    const workHistory = await WorkHistory.findAll();

    res.json({
      personalInfo,
      summary,
      education,
      courses,
      workHistory,
    });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar todas as informações do currículo' });
  }
});

module.exports = router;
