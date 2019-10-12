export default {
  getApiUtils (data) {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const element = data[key]
        if (element == null || element == undefined || element == '') {
          delete data[key]
        }
      }
    }
    return data
  }
}
