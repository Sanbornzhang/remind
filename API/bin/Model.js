const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')
const Sequelize = require('sequelize')

module.exports = (aFilePath)=>{
  let dbConfig      =  yaml.safeLoad(fs.readFileSync(path.join(__dirname,'../server/datasource.yaml')))
  let vModelDefine  = yaml.safeLoad(fs.readFileSync(aFilePath))
  let vSequelize     = undefined;
  vSequelize = new Sequelize(dbConfig.sqlite.name,null,null,{
    dialect: 'sqlite',
    storage: dbConfig.sqlite.storage
  });
  vSequelize.authenticate();
  vSequelize.sync({
  });
  const vProperties = vModelDefine.properties
  let modelProperties = {};

  for(key in vProperties)
  {
    modelProperties[key] = {};

    let vType = vProperties[key]['type'].toUpperCase();
    modelProperties[key].type = Sequelize[vType]
  }
  let vModelName = path.parse(aFilePath).name
  let Model = vSequelize.define(vModelName.toLowerCase(), modelProperties);
  return Model;
}