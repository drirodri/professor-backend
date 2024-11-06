import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

export const emptyConfig = () => ({});
export const configFactory = (configs: Record<string, unknown>) => () => ({
  ...configs,
});

const getEnv = (): 'local' | 'ci' | 'dev' | 'qld' | 'prd' => {
  const env = process.env.NODE_ENV || process.env.ECSEnvironment || process.env.ENVIRONMENT;
  switch (env?.toLowerCase()) {
    case 'local':
      return 'local';
    case 'ci':
      return 'ci';
    case 'dev':
    case 'development':
    case 'desenv':
      return 'dev';
    case 'qa':
    case 'qld':
    case 'hml':
    case 'uat':
      return 'qld';
    case 'prod':
    case 'production':
    case 'prd':
      return 'prd';
    default:
      throw new Error(`Ambiente não definido corretamente:  ${env}`);
  }
};

export const environment = (basePath = '.') => {
  const env = getEnv();

  console.log('Ambiente identificado: ', env);

  const envYml = yaml.load(readFileSync(join(basePath, `config.${env}.yml`), 'utf8')) as Record<string, any>;

  return configFactory({
    env,
    ...envYml,
  });
};
