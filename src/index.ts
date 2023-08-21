import Blockly from 'blockly';
import blocksData from '../blocks.json';

import App from './App';
import Runtime from './Runtime';
import Level from './Level';

const level = new Level;
const app = new App(level);
app.Import(blocksData);
app.Start();

export default {};