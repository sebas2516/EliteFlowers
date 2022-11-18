const $miCheckbox = document.querySelector("#miCheckbox"),
	/**
	 * Los siguientes elementos son botones; no tienen que
	 * ver con el checkbox, solo son para el ejemplo
	 */
	$btnMarcar = document.querySelector("#marcar"),
	$btnDesmarcar = document.querySelector("#desmarcar"),
	$btnVerEstado = document.querySelector("#verEstado");

$btnMarcar.addEventListener("click", () => {
	if ($miCheckbox.checked = true){

        console.log ("check activo")
    }
});

$btnDesmarcar.addEventListener("click", () => {
	$miCheckbox.checked = false;
});

$btnVerEstado.addEventListener("click", () => {
	if ($miCheckbox.checked) {
		alert("Marcado");
	} else {
		alert("Desmarcado");
	}
});