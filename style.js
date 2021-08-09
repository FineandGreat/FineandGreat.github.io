// JavaScript Document
function log(form){
	if(form.username.value=="")
	{
		alert("请输入用户名！");
		return;
	}
	else if (form.password.value=="") {
            alert("请输入密码！");
            form.password.focus();
            return;
        } 
	else {
			alert("登录成功！");
        }
}
		
	
	