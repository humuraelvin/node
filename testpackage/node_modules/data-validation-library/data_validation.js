

module.exports = {
  isString: function(input) {
    return typeof input === 'string';
  },
  
  isNumber: function(input) {
    return typeof input === 'number' && !isNaN(input);
  },
  
  isDate: function(input) {
    return Object.prototype.toString.call(input) === '[object Date]' && !isNaN(input.getTime());
  },
  
  isEmail: function(input) {
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  },
  
  isURL: function(input) {
    
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(input);
  }
};
