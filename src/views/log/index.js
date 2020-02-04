const log = []

function importAll(r) {
  r.keys().forEach(key => log.push(...r(key)))
}

importAll(require.context('./', false, /\.yml$/, 'sync'))

log.sort((a, b) => {
  if (!a.endDate) return -1
  if (!b.endDate) return 1

  return new Date(b.endDate).getTime() - new Date(a.endDate).getTime()
})

export default log
