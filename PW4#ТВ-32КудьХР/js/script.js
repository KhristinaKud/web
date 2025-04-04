// Функція для розрахунку першого калькулятора
function calculate1() {
        // Отримання значень від користувача
        var U = parseFloat(document.getElementById("U").value) || 0;
        var Ik = parseFloat(document.getElementById("Ik").value) || 0; 
        var tf = parseFloat(document.getElementById("tf").value) || 0; 
        var Sm = parseFloat(document.getElementById("Sm").value) || 0; 
      //Розв'язування по прикладу 
       var Im = (Sm / 2) / (Math.sqrt(3) * U)
       var Impa = 2 * Im
       var Sek = Im / 1.4 
       SMin = (Ik *1000 * Math.sqrt(tf)) / 92

        // Виведення результатів
        document.getElementById("result1").innerHTML =
            "Результат: <br> Розрахунковий струм для нормального режиму " + Im.toFixed(1) + " А  <br> і після аварійного режиму " + Impa.toFixed(1) + " А <br>  Економічний переріз " + Sek.toFixed(1) + " мм^2 <br> Термічна стійкість " + SMin.toFixed(1) + " мм^2";
    }
    
    // Функція для розрахунку другого калькулятора
    function calculate2() {
      // Вхідні дані
        var P = parseFloat(document.getElementById("P").value) || 0; // 
        const Ush = 10.5
        const Uk = 10.5
        const Snomt = 6.3
        // Розрахунки
        var Xc = Math.pow(Ush,2) / P
        var Xt = (Uk / 100) * (Math.pow(Ush,2)/Snomt)
        var  Xe = Xc + Xt
        var Ip0 = Ush/(Math.sqrt(3) * Xe)


       document.getElementById("result2").innerHTML = "Результат: <br> Сумариний опір для точки К1 " + Xe.toFixed(2) + " Ом <br>  Початкове діюче значення струму трифазного Кз " + Ip0.toFixed(1) + " кА";
    }
     // Функція для розрахунку третього калькулятора
     function calculate3() {
      // Вхідні дані
      var R = parseFloat(document.getElementById("R").value); 
      var Rch = parseFloat(document.getElementById("Rch").value); 
      var Xcn = parseFloat(document.getElementById("Xcn").value); 
      var RcMin = parseFloat(document.getElementById("RcMin").value);
      var XcMin = parseFloat(document.getElementById("XcMin").value);
      const Ukmax = 11.1 // напруга вальтажу 
      const Snomt = 6.3 // потужність трансформатора
      // Розрахунки
        var Xt = (Ukmax * Math.pow(R,2))/(100 * Snomt);
        var Xsh = Xcn + Xt;
        var Zsh = Math.sqrt(Math.pow(Rch,2) + Math.pow(Xsh,2));
        var XshMin = XcMin + Xt;
        var ZshMin = Math.sqrt(Math.pow(RcMin,2) + Math.pow(XshMin,2));
        var  Ish3 = (R * 1000)/(Math.sqrt(3) * Zsh)
        var Ish2 = Ish3 * (Math.sqrt(3) / 2)
        var  Ish3Min = (R * 1000)/(Math.sqrt(3) * ZshMin)
        var Ish2Min = Ish3Min * (Math.sqrt(3) / 2)

       document.getElementById("result3").innerHTML = "Результат: <br> Опір силового трансформатора " + Xt.toFixed(2) + " Ом  <br> Опори в нормальному режимі Z =" + Zsh.toFixed(2) + "Ом; X = " +Xsh.toFixed(2)+"Ом; <br> Опори в мінімальному режимі Z = " + ZshMin.toFixed(2) + "Ом; X = "+ XshMin.toFixed(2)+" Ом; <br> Струми в нормальному режимі І2 = " +Ish2.toFixed(2) + " A; I3 = "+Ish3.toFixed(2)+ " A; <br> Струми в мінімальному режимі Imin2 = "+ Ish2Min.toFixed(2) + " A; Imin3 = "+ Ish3Min.toFixed(2)+ " A;";
    }
