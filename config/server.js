module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
});

// https://blooming-taiga-09629.herokuapp.com/
