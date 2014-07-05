var environmentName = process.env.NODE_ENV || 'development',
    config = require('./' + environmentName);

config.environmentName = environmentName;

module.exports = config;
