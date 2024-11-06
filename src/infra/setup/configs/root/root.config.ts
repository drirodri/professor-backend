import { ConfigFactory } from '@nestjs/config';
import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

interface ConfigOptions {
  isGlobal?: boolean;
  envsBasePath?: string;
  secrets?: ConfigFactory[];
}

export enum SecretsFor {
  MONGO_DB = 'mongodb',
  REDIS = 'redis',
}

export type ChassiOptions = ConfigOptions;

export const emptyConfig = () => ({});
export const configFactory = (configs: Record<string, unknown>) => () => ({
  ...configs,
});

export const root = (basePath = '.') => {
  const variaveis = yaml.load(readFileSync(join(basePath, 'config.yml'), 'utf-8')) as Record<string, unknown>;
  return configFactory(variaveis);
};
