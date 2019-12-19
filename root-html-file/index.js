import 'core-js-bundle';
import 'systemjs/dist/system';
import 'systemjs/dist/extras/amd';
import 'systemjs/dist/extras/named-exports';
import 'systemjs/dist/extras/named-register';
import * as singleSpa from 'single-spa';

window.singleSpa = singleSpa;
window.SystemJS = window.System;

import 'zone.js';
