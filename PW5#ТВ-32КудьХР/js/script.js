// Функція для розрахунку першого калькулятора
function calculate1() {
  // Отримання значень від користувача
  var switch110 = parseFloat(document.getElementById("switch110").value) || 0; 
  var PL110kV = parseFloat(document.getElementById("PL110kV").value) || 0; 
  var transformer = parseFloat(document.getElementById("transformer").value) || 0; 
  var switch10 = parseFloat(document.getElementById("switch10").value) || 0; 
  var numberconnect = parseFloat(document.getElementById("numberconnect").value) || 0; 
  const connect = 0.03;
  const tswitch110 = 30;   
  const tPL110kV = 10;    
  const t_transformer = 100; 
  const tswitch10 = 15;     
  const tnumberconnect = 2; 
  const kPmax = 43;    

  // Розрахунки для одноколової системи
  var Woc = switch110 + PL110kV + transformer + switch10 + connect * numberconnect;
  var tWoc = (switch110 * tswitch110 + PL110kV * tPL110kV + transformer * t_transformer + switch10 * tswitch10 + connect * numberconnect * tnumberconnect) / Woc;
  var kAoc = (Woc * tWoc) / 8760;  
  var kPoc = (1.2 * kPmax) / 8760;  

  // Розрахунки для двоколової системи
  var Wdk = 2 * Woc * (kAoc + kPoc);
  var Wdc = (Wdk + switch10);

  // Виведення результатів (у форматі 10^-4)
  document.getElementById("result1").innerHTML =
      "Результат: <br> Одноколова система <br> Частота відмов (рік⁻¹) " + Woc.toFixed(3) + "<br> Середній час відновлення (год) " + tWoc.toFixed(1) + "<br> Коефіцієнт аварійного простою  " + (kAoc * 10000).toFixed(2) + "<br> Коефіцієнт планового простою  " + (kPoc * 10000).toFixed(1) + "<br> Двоколова система <br> Частота відмов (рік⁻¹) " + (Wdk * 10000).toFixed(2) + "<br> Частота відмов (з секційним вимикачем) " + Wdc.toFixed(4) + "<br> Висновки: Надійність двоколової системи електропередачі є значно вище, ніж одноколової.";
}
    
    // Функція для розрахунку другого калькулятора
    function calculate2() {
        // Отримання значень від користувача
        var Zper_a = parseFloat(document.getElementById("Zper_a").value) || 0; 
        var Zper_p = parseFloat(document.getElementById("Zper_p").value) || 0; 
        var transformer = parseFloat(document.getElementById("transformer2").value) || 0; 
        var t_transformer = parseFloat(document.getElementById("t_transformer2").value) || 0; 
        const Kp = 0.004; 
        const Pm =5120;
        const Tm = 6451;
        // Розрахунки математичне сподівання
        var M_Wned_a = transformer *t_transformer * Pm * Tm;
        var M_Wned_p = Kp * Pm * Tm;
        var M_Zper = Zper_a * M_Wned_a + Zper_p * M_Wned_p;      

       document.getElementById("result2").innerHTML = "Результат: <br> Математичне сподівання аварійного недовідпущення електоенергії становить " + M_Wned_a+" <br> Математичне сподівання планового недовідпущення електоенергії становить " + M_Wned_p.toFixed(1)+ "<br> Математичне сподівання збитків від переривання електропостачання становить " + M_Zper.toFixed(0);
    }
    
