var ibmdb = require('ibm_db');

ibmdb.open("DRIVER={DB2};DATABASE=sample;HOSTNAME=192.168.1.147;UID=db2admin;PWD=password;PORT=50000;PROTOCOL=TCPIP", function (err,conn) {
  if (err) return console.log(err);

  var queryStr = 'select 1 from sysibm.sysdummy1'; 
  //'select * from admin.department where DEPTNO=\'B01\''
    
  conn.query('select 1 from sysibm.sysdummy1', function (err, data) {
    if (err) console.log(err);
    else console.log(data);

    conn.close(function () {
      console.log('done');
    });
  });
});