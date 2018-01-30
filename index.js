const unzip = require('unzip')
const fs = require('fs')
const path = require('path')
const testEpub = '解忧杂货店.epub'
const unzipPath = '解忧杂货店'

fs.createReadStream(testEpub).pipe(unzip.Extract({ path: unzipPath }));
