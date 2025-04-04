// Функція для розрахунку першого калькулятора
function calculate1() {
        // Вхідні дані 
        var Pc = parseFloat(document.getElementById("Pc").value)
        var vidx = parseFloat(document.getElementById("vidx").value)
        var tarif = parseFloat(document.getElementById("tarif").value)
        // Розрахунки для першої частки
        var betaW1 = 0.2
        var W1 = Pc * 24 * betaW1
        var P1 = W1 * tarif
        var W2 = Pc * 24 * (1-betaW1)
        var Sh1 = W2 * tarif;
        var Z1 = (Sh1-P1)
        // Розрахунки для другої частки 
        var betaW2 = 0.68
        var W3 = Pc * 24 * betaW2
        var P2 = W3 * tarif
        var W4 = Pc * 24 * (1-betaW2)
        var Sh2 = W4*tarif
        var Z2 = -(Sh2-P2)
         //Результат
       document.getElementById("result1").innerHTML = "Результат: <br>Для першої частки <br> Отже за 20% електроенергії становитиме " + W1.toFixed(2) +" Мтв*год. <br>Сонячна електростанція отримає Прибуток = "+ P1.toFixed(2)+ " тис грн <br> а за 80% енергії =  "+W2.toFixed(2)+"  Мвт*год.<br> Виплачує штраф = "+Sh1.toFixed(2)+" грн <br> Отже, така електростанція не є рентабельною і працює в збиток "+ Z1.toFixed(2)+"тис грн <br>Для другої частки <br> За 68% електроенергії становитиме "+W3.toFixed(2)+" Мтв*год. <br>Сонячна електростанція отримає Прибуток = "+ P2.toFixed(2)+ " тис грн <br> а за 32% енергії = "+W4.toFixed(2)+"  Мвт*год<br> Виплачує штраф = "+Sh2.toFixed(2)+" тис грн, що дозволяє отримати прибуток" +Z2.toFixed(2)+" тис грн";
    }
    
