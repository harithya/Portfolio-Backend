module.exports = ({ env }) => ({
    // ...
    upload: {
        provider: 'cloudinary',
        providerOptions: {
            cloud_name: env('cv-abdi-creative'),
            api_key: env('388123733947478'),
            api_secret: env('gn9RE9EqYDlsyFW6ANMmbwqxZoc'),
        },
        actionOptions: {
            upload: {},
            delete: {},
        },
    },
    // ...
});