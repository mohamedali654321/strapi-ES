module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'd8b01f8e3c0996777def2f04ce7d2efb'),
    },
  },
  cron:{
    enabled:true
  }
});
