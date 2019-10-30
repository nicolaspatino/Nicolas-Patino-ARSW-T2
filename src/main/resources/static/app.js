app=(function(){
	return {
		getCityInfo:function(name,callback){
			$.get("/data/"+name,function(data){
				callback(data);
			});
		}
	}
	
})();