export default {
  api: {
    siteName: 'Bonari Pizzaria',
    title: 'Bonari',
    description:
      'Borani Pizzaria - A melhor pizzaria de Aracati-CE. Utilizamos ingredientes naturais e frescos, ' +
      'massas com fermentação natural e molho italiano legítimo. Entregas em Aracati centro, Vila Grega, ' +
      'Pedregal, Sorriso de Monalisa. Localizado no Bairro Várzea da Matriz, Av.Abelardo Gurgel - Aracati-Ce. ' +
      'Em frente ao novo Minibox Aracati.',
    meta: [],
  },
  defaults: {
    namespace: process.env.NAMESPACE || 'app',
    url: process.env.HOST || 'http://localhost:3000',
    port: process.env.PORT || '3000',
  },
};
