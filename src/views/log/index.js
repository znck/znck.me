const log = []

function importAll(r) {
  r.keys().forEach(key => log.push(...r(key)))
}

importAll(require.context('./', false, /\.yml$/, 'sync'))

export default log
