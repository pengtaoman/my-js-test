var snmp = require ("net-snmp");

var session = snmp.createSession ("10.4.121.90", "public");

var maxRepetitions = 20;

function feedCb (varbinds) {
    for (var i = 0; i < varbinds.length; i++) {
        if (snmp.isVarbindError (varbinds[i]))
            console.error (snmp.varbindError (varbinds[i]));
        else
            console.log (varbinds[i].oid + "|" + varbinds[i].value);
    }
}

function doneCb (error) {
    if (error)
        console.error (error.toString ());
}

session.walk (".1.3.6.1.4.1.2021.9.1.6.1", maxRepetitions, feedCb, doneCb);
/**
var oids = [{
        oid: ".1.3.6.1.4.1.2021.4.2.0",
        type: snmp.ObjectType.OctetString,
        value: "Hardware health status changed"
    }];

session.get (oids, function (error, varbinds) {
    if (error) {
        console.error (error);
    } else {
        for (var i = 0; i < varbinds.length; i++)
            if (snmp.isVarbindError (varbinds[i]))
                console.error (snmp.varbindError (varbinds[i]))
            else
                console.log (varbinds[i].oid + " = " + varbinds[i].value);
    }
});

session.trap (snmp.TrapType.LinkDown, function (error) {
    if (error)
        console.error (error);
});
*/
