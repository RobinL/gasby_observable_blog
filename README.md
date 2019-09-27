Minimal template of a gatsby blog where some pages can be authored on https://observablehq.com:
- Some pages contain interactive observable notebooks.  User can select which cells to include in what order using
- Some pages are created from a json file (`src/data/mydata.json`)

## Notes/Issues

- User must install the notebook from the version 3 runtime e.g. `yarn add https://api.observablehq.com/@robin
l/gatsby-test.tgz\?v\=3`.  This will make sure you can import `define` (rather than `notebook`) from the node package.  Some tangential discussion [here](https://talk.observablehq.com/t/runtime-v3-modules/1767).

- For some reason, the yarn integrity check fails for observable notebook package on github actions (`Integrity check failed for "mypackage" (computed integrity doesn't match our records,`).  Current solution is to manually delete the `resolved` line from `yarn.lock`.
