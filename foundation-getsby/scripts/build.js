import fs from 'fs-extra';
import path from 'path';
import {fileURLToPath} from 'url';
import ReactDOMServer from 'react-dom/server';
import React from 'react';

import { philosophers } from '../src/philosophers.js';
import {App} from '../src/App.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const buildDir = path.join(__dirname, '../build');
const htmlTemplatePath = path.join(buildDir, '../src/template.html');
const outputHtmlPath = path.join(buildDir, 'index.html');

const template = fs.readFileSync(htmlTemplatePath, 'utf-8');

const appHtml = ReactDOMServer.renderToStaticMarkup(React.createElement(App,{philosophers}));

const finalHtml = template.replace('<!--app-->', appHtml);
await fs.ensureDir(buildDir);
fs.writeFileSync(outputHtmlPath, finalHtml,'utf-8');
