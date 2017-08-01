const path = require('path');
const spawn = require('child_process').spawn;

// Start TypeScript compiler.
const typescript = path.resolve(__dirname, '../node_modules/typescript/bin/tsc');
const typeScriptProcess = spawn('node', [typescript, '--watch'], { stdio: 'inherit' });

// Start React Native packager.
const reactNativeScript = path.resolve(__dirname, '../node_modules/react-native-scripts/build/bin/react-native-scripts.js');
const reactNativeScriptProcess = spawn('node', [reactNativeScript, 'start'], { stdio: 'inherit' });

// Stop TypeScript compiler when React Native packager stops.
reactNativeScriptProcess.on('close', (code) => {
  typeScriptProcess.kill();
});
