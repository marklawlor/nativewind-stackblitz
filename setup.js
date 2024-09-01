import init from 'lightningcss';
import fs from 'node:fs';

module.exports = async () => {
  await init(
    fs.promises.readFile('node_modules/lightningcss/lightningcss_node.wasm')
  );
}