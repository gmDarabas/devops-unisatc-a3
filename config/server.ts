export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['someRandomKey1', 'someRandomKey2']), //gerar chaves aleatórias com algum gerador de string segura (ex.: openssl rand -hex 32)
  },
});
