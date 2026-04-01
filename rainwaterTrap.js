function getColor(table,row,col){
	return table.rows[row].cells[col].style.backgroundColor;
}
function setColor(table,row,col,color){
	table.rows[row].cells[col].style.backgroundColor=color;
}
function updateMap(input){
	const table=document.getElementById("grid");
	const water=document.getElementById("water");
	let w = Number(water.value);

	for(let i=table.rows.length-1;i>=table.rows.length-Number(input.value);i--){
		if(getColor(table,i,Number(input.id)) == "aqua") w--;
		setColor(table,i,Number(input.id),"black");
	}
	for(let i=table.rows.length-Number(input.value)-1;i>=0;i--){
		if(getColor(table,i,Number(input.id)) == "aqua") w--;
		setColor(table,i,Number(input.id),"white");
	}

	for(let i=4;i>=0;i--){
		for(let j=1;j<11;j++)
			if(getColor(table,i,j-1)!="white" && getColor(table,i,j)=="white"){setColor(table,i,j,"aqua");w++;}
		for(let j=10;j>0;j--)
			if(getColor(table,i,j+1)!="white" && getColor(table,i,j)=="white"){setColor(table,i,j,"aqua");w++;}
		for(let j=1;j<11;j++)
			if(getColor(table,i,j)=="aqua" && getColor(table,i,j-1)=="white")
				{setColor(table,i,j,"white");w--;}
		for(let j=10;j>0;j--)
			if(getColor(table,i,j)=="aqua" && getColor(table,i,j+1)=="white")
				{setColor(table,i,j,"white");w--;}
	}
	if (w >= 10)
		water.value = w;
		else water.value = '0' + w;
}