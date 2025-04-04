const { exec } = require('child_process');

const ipAddressToBlock = '192.168.137.141';//Replace with IP which you want to block

const command = `netsh advfirewall firewall delete rule name="Block IP ${ipAddressToBlock}`;

exec(command, (err, stdout, stderr) => {
    if (err) {
        console.error(`Error executing command: ${err.message}`);
    }
    console.log(`Command stdout: ${stdout}`);
    console.error(`Command stderr: ${stderr}`);
});
