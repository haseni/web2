function check(){
		var name = document.getElementById("name").value;
		var password = document.getElementById("pwd").value;
		
		if(name!="LZL"||password!="LZL123"){
			alert("username or password error！！！");
			//alert(name);
			return false;
		}else if(!name){
			alert("用户名为空！！！");
			return false;
		}else if(!password){
			alert("密码为空！！！");
			return false;
		}
		
		return true;
	}
