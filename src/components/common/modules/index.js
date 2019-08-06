const files = require.context('.', true, /\.vue$/)
let modules = {}

files.keys().forEach(key => {
  let pathName = key.replace(/(\.\/|\.vue)/g, '')
  let arr = pathName.split('-')

  let nowArr = []
  arr.slice(1).forEach(element => {
    element = element.slice(0, 1).toUpperCase() + element.slice(1)
    nowArr.push(element)
  })

  let name = ''
  nowArr.forEach(element => {
    name += element
  })

  if (name.indexOf('/') != -1) {
    let more = name.split('/')
    let morePathName = pathName.split('/')
    name = more[0]
    pathName = morePathName[0]
  }

  let keyName = arr.slice(0, 1) + name

  modules[keyName] = pathName
  return modules
})

console.log(modules)

export default modules
