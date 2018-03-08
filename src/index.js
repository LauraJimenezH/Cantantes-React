import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MusicApp from './MusicApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<MusicApp />,
document.getElementById('root'));
registerServiceWorker();
