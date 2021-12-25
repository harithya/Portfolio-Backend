module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b6a0fab917afdbf519e7c7b9539dacdd'),
  },
});
