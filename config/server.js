module.exports = ({ env }) => ({
  host: env('https://blooming-taiga-09629.herokuapp.com/'),
  port: env.int('PORT', 1337),
});
