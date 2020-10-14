const { GCP_VM_DATA } = require('./models/gcp')

const toDateTime = (secs) => {
  // 1970, 0, 1 -> epoch
  return new Date(1970, 0, 1).setSeconds(parseInt(secs))
}

const getStructureOfModel = (model = null, dataObject = null) => {
  if (model === null || dataObject === null) return null
  if (model.getTableName() === 'gcp_vm_data') {
    return new model({
      instance_id: dataObject.asset.resourceProperties.id.stringValue,
      creation_tls: toDateTime(dataObject.asset.createTime.seconds),
      first_seen: null,
      last_seen: null,
      vm_name: dataObject.asset.name,
      current_status: dataObject.stateChange,
      daily_runtime: null,
      mt_family: null,
      machine_type: dataObject.asset.resourceProperties.machineType.stringValue,
      cpu_type: dataObject.asset.resourceProperties.cpuPlatform.stringValue,
      cpu_num: null,
      gb_mem: null,
      pd_std_total: null,
      ps_ssd_total: null,
      local_ssd_total: null,
      vm_owner: dataObject.asset.securityCenterProperties.resourceOwners[0],
      region: null,
      zone: dataObject.asset.resourceProperties.zone.stringValue,
      project_id:
        dataObject.asset.securityCenterProperties.resourceProjectDisplayName,
    })
  }
}

module.exports = { getStructureOfModel }
