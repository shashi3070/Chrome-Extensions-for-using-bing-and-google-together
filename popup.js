function clickHandler(e) {
	var name;
	chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
   
	name=tabs[0].url;
	//if case
	
	
		var i=29;
	var name1="";
	
	var index = name.indexOf( "FORM" );
	if(index!==-1)
	{
		var index = name.indexOf( "q=" );
		index=index+2;
		name1=name.slice(index,name.length-1);
		
		
	}
	
	
	
	
	
	
	//else case
	else{
		
	

	
	
	while(name.charAt(i)!=='&')
	{
		if(name.charAt(i)!=='=')
		{
			
		
		if(name.charAt(i)!=='+'){
			
		
		name1=name1+name.charAt(i);
		
		}
		else{
				name1=name1+" ";
		}
		}
		
		i++;
		
		
		
	}
	}
	console.log(name1)

    chrome.tabs.update({url: "https://www.google.co.in/#q="+name1});
    window.close(); // Note: window.close(), not this.close()
	
	
});
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('click-me').addEventListener('click', clickHandler);
});