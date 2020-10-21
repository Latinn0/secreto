eje = function (arrays, redisClient) {
    return new Promise(function (resolve, reject) {

        redisClient.keys("cuenta_" + arrays[0], function (err, val) {
            if (val.length > 0) {
                redisClient.get(val[0], function (err, vals) {
                    if (vals !== null) {
                        var ade = JSON.parse(vals);
                        console.log(ade);
                        if (ade.pass == arrays[1]){
                            console.log("si es la pasword");
                            ade.pass = arrays[2];

                            redisClient.set("cuenta_" + arrays[0], JSON.stringify(ade), function (err, val) {
                                resolve([true,vals]);

                            })  

                        }else{
                                console.log("no es la pasword");
                        }
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