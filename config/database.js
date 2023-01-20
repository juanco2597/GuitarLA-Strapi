module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cf5d4b6n6mpopl09ovg0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_w5t5'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', '6kZzaPiOC2fb96SBrSBAdgMLHrQxl3Lh'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
