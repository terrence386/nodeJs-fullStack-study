const crypto = require('crypto')

module.exports = {
  // MD5  签名
  MD5_suffix:'SDAerwe23解决了42$%$@大师2sdfsdwsdfdfsewer',
  md5: function(str){
    var obj = crypto.createHash('md5')
    obj.update(str)
    return obj.digest('hex')
  }
}