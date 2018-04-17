//Métodos Db
var findExistFila = function(attr, keyWord){	
	return filamentosExistentes.find(function(aux){return aux[attr] === keyWord})

};	
var intersection = function(a, b){				
	var result = [];
	for(var i in a){
		if(b.includes(a[i])){
			result.push(a[i]);
		}
	}
	return result;
};

// Db
var procentPesoSoft = 1.2;
var procentTempSoft = 1.2;
var precoMinutoMaquina = 0.006;

var filamentosExistentes = [					
	{
		"name" 	: "3DFila - ABS Premium",		
		"key"	: "3dFilaAp",
		"disponivel" : true,
		"preco"	: 0.13
	},
	{
		"name" 	: "3DFila - ABS Premium Cristal",		
		"key"	: "3dFilaApc",
		"disponivel" : true,
		"preco"	: 0.13
	},
	{
		"name" 	: "3DFila - ABS Premium Cristal verde vagalume",		
		"key"	: "3dFilaApcvv",
		"disponivel" : true,
		"preco"	: 0.18
	},
	{
		"name" 	: "3DFila - PLA",		
		"key"	: "3dFilaPla",
		"disponivel" : true,
		"preco"	: 0.17
	},
	{
		"name" 	: "3DFila - Flexivel",		
		"key"	: "3dFilaFlex",
		"disponivel" : true,
		"preco"	: 0.21
	},
	{
		"name" 	: "3DFila - PETG",		
		"key"	: "3dFilaPetg",
		"disponivel" : true,
		"preco"	: 0.16
	},
	{
		"name" 	: "Filament2Print - Moldlay(cera)",		
		"key"	: "f2pCera",
		"disponivel" : true,
		"preco"	: 0.38
	},
	{
		"name" 	: "Sethi - ABS natural",		
		"key"	: "sethiAbsNat",
		"disponivel" : true,
		"preco"	: 0.17
	},
	
];
