var snmp = require('snmp-native');

var session = new snmp.Session({ host: '10.4.121.90', port: 161, community: 'public' });

session.get({ oid: '.1.3.6.1.4.1.2021.4.5.0'}, function (error, varbinds) {
    if (error) {
        console.log('Fail :(' + error);
    } else {
        console.log(varbinds[0].oid + ' = ' + varbinds[0].value + ' (' + varbinds[0].type + ')');
    }
});
