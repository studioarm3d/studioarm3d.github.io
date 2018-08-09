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
	var minutos = $('#minutosUtilizados').val();
	var horas = $('#horasUtilizadas').val();

	$("#total").text("");
};

var calcular = function() {
	var gramas = $('#quantGramas').val();
	var horas = $('#horasUtilizadas').val();
	var minutos = $('#minutosUtilizados').val();
	var tempo = 0;
	if (horas) {
		tempo = parseInt(horas * 60);
	}
	if (minutos) {
		tempo += parseInt(minutos);
	}
	var tempoTotal = tempo * procentTempSoft;
	
	var fila = {};
	if ($('#checkUsaPersonalizado').is(':checked')) {
		fila.preco = $('#precoGramaPersonalizado').val();
	}else{
		fila = findExistFila("key", $('#selectFila').val());
	}

	var x1 = (gramas * procentPesoSoft) * fila.preco;
	var x2 = (tempoTotal) * precoMinutoMaquina;

	var total = x1 + x2;
	
	$("#total").text("R$ " + total.toFixed(2));
	tempoTotal = calculaTempo(tempoTotal);
	$("#tempoTotal").text(tempoTotal.horas + ":" + (tempoTotal.min.toFixed(0)<10?"0":"") + tempoTotal.min.toFixed(0));
	$("#precoFinal").text("R$ " + (total.toFixed(2)*multiLucro).toFixed(2));
};

var calculaTempo = function(tempoTotal) {
	var horas = 0;
	while (tempoTotal - 60 > 0) {
		tempoTotal-=60;
		horas+=1;
	}
	return {"horas": horas, "min": tempoTotal};
};