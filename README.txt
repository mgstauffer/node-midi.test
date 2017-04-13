4/13/17
This project is based on the one I used for biocrowds assignment.

node-midi
This is the package I'm trying to use (https://github.com/justinlatimer/node-midi)
I've tried it two ways:

1) Installed it in this project's dir (i.e. node-midi.test dir) using 'npm install midi'. 
cd'ed into node_modules/midi and ran 'npm install' after there was a complaint that it needed this.
Ran npm test from node_modules/midi and it passed.

If I then include node-midi in main.js via 
  var midi = require('midi')

I get these warnings after running npm start, that are errors in chrome:

WARNING in ./~/midi/~/bindings/bindings.js
Critical dependencies:
76:22-40 the request of a dependency is an expression
76:43-53 the request of a dependency is an expression
 @ ./~/midi/~/bindings/bindings.js 76:22-40 76:43-53

WARNING in ./~/midi/~/bindings/package.json
Module parse failed: /Users/michael/Box Sync/Penn/MES/700-006-Procedural-Gfx-Spr-2017/final_project/node-midi.test/node_modules/midi/node_modules/bindings/package.json Unexpected token (2:9)
You may need an appropriate loader to handle this file type.
SyntaxError: Unexpected token (2:9)
    at Parser.pp$4.raise (/Users/michael/Box Sync/Penn/MES/700-006-Procedural-Gfx-Spr-2017/final_project/node-midi.test/node_modules/acorn/dist/acorn.js:2221:15)
<snip>

WARNING in ./~/midi/~/bindings/README.md
Module parse failed: /Users/michael/Box Sync/Penn/MES/700-006-Procedural-Gfx-Spr-2017/final_project/node-midi.test/node_modules/midi/node_modules/bindings/README.md Unexpected token (2:3)
You may need an appropriate loader to handle this file type.
SyntaxError: Unexpected token (2:3)
    at Parser.pp$4.raise (/Users/michael/Box Sync/Penn/MES/700-006-Procedural-Gfx-Spr-2017/final_project/node-midi.test/node_modules/acorn/dist/acorn.js:2221:15)
<snip>

2) I also tried installing node-midi in a different directory (not in this repo). I got it working that way by doing the other instructions in the node-midi readme:
  
$ git clone https://github.com/justinlatimer/node-midi.git
$ cd node-midi/
$ npm install

Running npm test also passes. But when I include it in main.js within this repo, via
  import midi from '../../libs/node-midi/midi.js'

ERROR in ../libs/node-midi/midi.js
Module build failed: Error: Couldn't find preset "es2015" relative to directory "/Users/michael/Box Sync/Penn/MES/700-006-Procedural-Gfx-Spr-2017/final_project/libs/node-midi"
    at /Users/michael/Box Sync/Penn/MES/700-006-Procedural-Gfx-Spr-2017/final_project/node-midi.test/node_modules/babel-core/lib/transformation/file/options/option-manager.js:293:19
    at Array.map (native)
    at OptionManager.resolvePresets (/Users/michael/Box Sync/Penn/MES/700-006-Procedural-Gfx-Spr-2017/final_project/node-midi.test/node_modules/babel-core/lib/transformation/file/options/option-manager.js:275:20)
    at OptionManager.mergePresets (/Users/michael/Box Sync/Penn/MES/700-006-Procedural-Gfx-Spr-2017/final_project/node-midi.test/node_modules/babel-core/lib/transformation/file/options/option-manager.js:264:10)
    at OptionManager.mergeOptions (/Users/michael/Box Sync/Penn/MES/700-006-Procedural-Gfx-Spr-2017/final_project/node-midi.test/node_modules/babel-core/lib/transformation/file/options/option-manager.js:249:14)
    at OptionManager.init (/Users/michael/Box Sync/Penn/MES/700-006-Procedural-Gfx-Spr-2017/final_project/node-midi.test/node_modules/babel-core/lib/transformation/file/options/option-manager.js:368:12)
    at File.initOptions (/Users/michael/Box Sync/Penn/MES/700-006-Procedural-Gfx-Spr-2017/final_project/node-midi.test/node_modules/babel-core/lib/transformation/file/index.js:212:65)
    at new File (/Users/michael/Box Sync/Penn/MES/700-006-Procedural-Gfx-Spr-2017/final_project/node-midi.test/node_modules/babel-core/lib/transformation/file/index.js:135:24)
    at Pipeline.transform (/Users/michael/Box Sync/Penn/MES/700-006-Procedural-Gfx-Spr-2017/final_project/node-midi.test/node_modules/babel-core/lib/transformation/pipeline.js:46:16)
    at transpile (/Users/michael/Box Sync/Penn/MES/700-006-Procedural-Gfx-Spr-2017/final_project/node-midi.test/node_modules/babel-loader/lib/index.js:46:20)
 @ ./src/main.js 12:11-50

I got this error when trying to install some other packages (that I couldn't get working either).
Googling, I tried this:
  npm install babel-cli babel-preset-es2015

Now when I 'npm start' the node-midi.test app, I get the same warning/errors as in step 1, plus this:

ERROR in ../libs/node-midi/~/bindings/bindings.js
Module not found: Error: Cannot resolve module 'fs' in /Users/michael/Box Sync/Penn/MES/700-006-Procedural-Gfx-Spr-2017/final_project/libs/node-midi/node_modules/bindings
 @ ../libs/node-midi/~/bindings/bindings.js 6:9-22

This 'fs' module error I got previously with some other modules I was trying to install. Runing 'install fs' will install an empty package, and googling suggests the fs package is obsolete and just a placeholder now. 

This is all driving me nuts! I'm guessing there's something wrong with my system or my methods here because it seems weird both this node-midi package and the other one I tried (midi-js) would both have the same problem on their own. Midi-js is old so I figured maybe the 'fs' package issue is cuz it's old, but node-midi's most recent update was only 11 months ago.

Thanks for any help!!
