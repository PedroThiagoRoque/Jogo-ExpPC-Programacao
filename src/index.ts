import Blockly from 'blockly';
import blocksData from '../blocks.json';

import App from './App';
import Runtime from './Runtime';

const app = new App();
app.Import(blocksData);
app.Start();

export default {};