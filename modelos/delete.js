eje = function (arrays, redisClient) {
  return new Promise(function (resolve, reject) {
    redisClient.keys("cuenta_" + arrays[0], function (err, val) {
      if (val.length > 0) {
        redisClient.del(val[0], function (err, vals) {
          if (vals == 1) {
            resolve([vals]);
          } else {
            reject([false, err]);
          }
        });
      } else {
        reject([false, []]);
      }
    });
  });
};

module.exports = eje;
