
function calcular() {
    const A = document.querySelector(".input-value-A").value
    const B = document.querySelector(".input-value-B").value
    const C = document.querySelector(".input-value-C").value
    const Paragraph1 = document.querySelector(".result-n1")
    const Paragraph2 = document.querySelector(".result-n2")

    const delta = ( ( B * B) -4 * A * C)

    const raizDeDelta = Math.sqrt(delta)


    const resultadoN1 = ((-B - raizDeDelta) /( 2 * A))
    const resultadoN2 = ((-B  + raizDeDelta) /(2 * A))
    console.log(resultadoN1, resultadoN2)

    Paragraph1.textContent = (resultadoN1)
    Paragraph2.textContent = (resultadoN2)
}