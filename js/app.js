$( document ).ready(function() {
	var criaOptions = function() {
		for(var i in filamentosExistentes){
			var fila = filamentosExistentes[i];
			if (fila.disponivel) {
				$('#selectFila').append($('<option>', {
					value: fila.key,
					text: fila.name
				}));
			}
		}
	};
	criaOptions();
});

var limpar = function() {
	var gramas = $('#quantGramas').val();
	var tempo = $('#tempoUtilizado').val();

	$("#total").text("");
};

var calcular = function() {
	var gramas = $('#quantGramas').val();
	var tempo = $('#tempoUtilizado').val();
	var fila = findExistFila("key", $('#selectFila').val());

	var x1 = (gramas * procentPesoSoft) * fila.preco;
	var x2 = (tempo * procentTempSoft) * precoMinutoMaquina;

	var total = x1 + x2;
	
	$("#total").text("R$ " + total.toFixed(2));
	$("#precoFinal").text("R$ " + (total.toFixed(2)*multiLucro).toFixed(2));

};