const sc = require('@google-cloud/security-center')
const fs = require('fs')

const Sequelize = require('sequelize')
const sequelize = new Sequelize('sqlite::memory:')

const { DataTypes } = Sequelize

const LogWritter = async (config, filetype, Data, func) => {
  console.log(config.output.mode)

  switch (config.output.mode.toUpperCase()) {
    case 'FILE':
      try {
        fs.appendFile(
          `${config.output.path}/${func}.${filetype}`,
          Data,
          function (err) {
            if (err) return console.log(err)
            console.log(`Wrote succesfully the ${func} log`)
          }
        )
      } catch (err) {
        console.log('error: ', err)
      }

      break
    case 'MYSQL':
      JSON.parse(Data).map((eachAsset) => {
        const resourceType =
          eachAsset.asset.securityCenterProperties.resourceType
        console.log(resourceType)
      })
      break
    default:
    // code block
  }
}

module.exports = { LogWritter }
