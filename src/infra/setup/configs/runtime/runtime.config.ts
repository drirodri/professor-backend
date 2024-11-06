export const runtime = () => {
  const variaveis = process.env;
  console.debug({
    name: 'setup.configs.runtime',
    mensagem: 'Variáveis de ambiente carregadas com sucesso.',
    variaveis,
  });
  return variaveis;
};
