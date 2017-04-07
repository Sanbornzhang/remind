const fs   = require('fs')
const path = require('path')
const yaml = require('js-yaml')
const Sequelize = require('sequelize');
vPath = path.join(__dirname,'../model')

let dirList = fs.readdirSync(vPath)
for(let i = 0; i < dirList; i++)
{

}