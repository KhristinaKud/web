// Функція для розрахунку першого калькулятора
function calculate1() {
        // Вхідні дані 
        var gasvog = parseFloat(document.getElementById("gasvog").value)
        var mazuta = parseFloat(document.getElementById("mazuta").value)
        var naturalGas = parseFloat(document.getElementById("natural gas").value)
        // Розрахунки
        //Показники емісії при спалюванні вугілля
        var ktvVog = (Math.pow(10,6)/20.47)*0.8*(25.20/(100-1.5))*(1-0.985)
        //Валовий викид 
        var EtvVog = Math.pow(10,-6)*ktvVog*20.47*gasvog
        //Показники емісії при спалюванні мазути
        var ktvMaz = (Math.pow(10,6)/39.48)*1*(0.15/(100-0))*(1-0.985)
        //Валовий викид 
        var EtvMAz = Math.pow(10,-6)*ktvMaz*39.48*mazuta
         //Показники емісії при спалюванні природного газу 
         var ktvGas = 0 //тому що частка золи і масовий вміст золи немає в природному газі
         //Валовий викид 
         var EtvGas = Math.pow(10,-6)*ktvGas*33.08*naturalGas
         //Результат
       document.getElementById("result1").innerHTML = "Результат: <br> Показник емісії твердих частинок при спалюванні вугілля становитиме: " + ktvVog.toFixed(2) +"г/ГДж <br>Валовий викид при спалюванні вугілля становитиме:"+ EtvVog.toFixed(2)+ "т <br> Показник емісії твердих частинок при спалюванні мазуту становитиме:"+ktvMaz.toFixed(2)+" г/ГДж<br> Валовий викид при спалюванні мазуту становитиме:"+EtvMAz.toFixed(2)+" т <br> Показник емісії твердих частинок при спалюванні прородного газу становитиме: " +ktvGas.toFixed(2) + "г/ГДж <br>Валовий викид при спалюванні прородного газу становитиме:"+ EtvGas.toFixed(2);
    }
    
