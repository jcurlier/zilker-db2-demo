    var DataSource = require('loopback-datasource-juggler').DataSource;
    var dataSource = new DataSource('db2', {
        host: '192.168.1.147',
        port: 50000,
        database: 'sample',
        username: 'db2admin',
        password: 'password'
    });