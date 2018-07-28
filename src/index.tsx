import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Game} from './components/game';
import * as Utils from './components/utils';

const config = Utils.json_config

ReactDOM.render(
  <Game level_id="0" config_data={config}/>,
  document.getElementById('root')
);
