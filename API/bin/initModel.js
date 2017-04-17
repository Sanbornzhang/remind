const fs   = require('fs')
const path = require('path')
const yaml = require('js-yaml')
const Sequelize = require('sequelize');
const Model = require(path.join(__dirname,'Model'))

let vDataPath   = path.join(__dirname,'../server/data')
let vFolderPath = path.join(__dirname,'../model')

let dirList = fs.readdirSync(vFolderPath)
dirList.forEach((vFolderName)=>
{
  let vFileName = `${vFolderName}.yaml`
  let vFilePath = path.join(vFolderPath,vFolderName,vFileName)
  let vModel = Model(vFilePath)
  let vModeDate = yaml.safeLoad(fs.readFileSync(path.join(vDataPath,vFileName)))
  vModeDate.forEach((vDate)=>{return vModel.create(vDate)})
})