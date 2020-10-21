eje = function(arrays,redisClient) {
	return new Promise(function(resolve, reject) {
		
		redisClient.keys("cuenta_"+arrays[0],function(err,val){
			if(val.length>0){
				redisClient.get(val[0],function(err,vals){
					if(vals!==null){
						resolve([true,JSON.parse(vals)]);						
					}else{
						reject([false,err]);
					}
				});
			}else{
				reject([false,[]]);
			}
		});
		
	});
};

module.exports = eje;