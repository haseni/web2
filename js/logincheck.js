function check(){
		var name = document.getElementById("name").value;
		var password = document.getElementById("pwd").value;
		
		if(name!="LZL"||password!="LZL123"){
			alert("username or password error������");
			//alert(name);
			return false;
		}else if(!name){
			alert("�û���Ϊ�գ�����");
			return false;
		}else if(!password){
			alert("����Ϊ�գ�����");
			return false;
		}
		
		return true;
	}
