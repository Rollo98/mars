const { GCP_VM_DATA } = require('./models/gcp')

const modelChecker = (resourceType = null) => {
  if (resourceType === null) return null
  if (resourceType === 'google.compute.Instance') return GCP_VM_DATA
}

module.exports = { modelChecker }
