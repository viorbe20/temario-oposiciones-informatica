module.exports = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Temario General',
      items: [
        'temas-generales/intro',
        // Aquí irás metiendo más adelante los temas generales
      ],
    },
    {
      type: 'category',
      label: 'Temario Específico',
      items: [
        'temas-especificos/intro',
        {
          type: 'doc',
          id: 'temas-especificos/analisis_diseno_sistemas_informacion/index',
          label: 'Análisis, Diseño y Construcción de SI'
        },
        // Aquí irás metiendo más temas específicos
      ],
    },
  ],
};
