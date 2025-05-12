// Функція для розрахунку першого калькулятора
function calculate1() {
        var Ph1_4 = parseFloat(document.getElementById("Ph").value) || 0; 
        var Kv24 = parseFloat(document.getElementById("Kv").value) || 0; 
        var tg13= parseFloat(document.getElementById("tg").value) || 0; 
        const Un = 0.38;
        const kPhi = 752;
        const Phi = 2330;
        const nPh = 2330;
        const nPh_2 = 96388;
        const Phtg = 657;
        const n1_4 = 4;
        const n5_6 = 2;
        const n9_12 = 4;
        const n13 = 1; 
        const n16 = 1;
        const n24 = 1;
        const n26_27 = 2;
        const n36 = 1;
        const Ph5_6 = 14;
        const Ph9_12 = 42;
        const Ph13 = 36;
        const Ph16 = 20;
        const Ph24 = 40;
        const Ph26_27 = 32;
        const Ph36 = 20;
        const Kv1_4 = 0.15;
        const Kv5_6 = 0.12;
        const Kv9_12 = 0.15;
        const Kv13 = 0.3;
        const Kv16 = 0.5;
        const Kv26_27 = 0.2;
        const Kv36 = 0.65;
        const tg1_4 = 1.33;
        const tg5_6 = 1;
        const tg9_12 = 1.33;
        const tg16 = 0.75;
        const tg24 = 1;
        const tg26_27 = 1;
        const tg36 = 0.75;
        // Розрахунки математичне сподівання
        var nPh1_4 = n1_4 * Ph1_4;
        var nPh5_6 = n5_6 * Ph5_6;
        var nPh9_12 = n9_12 * Ph9_12;
        var nPh13 = n13 * Ph13;
        var nPh16 = n16 * Ph16;
        var nPh24 = n24 * Ph24;
        var nPh26_27 = n26_27 * Ph26_27;
        var nPh36 = n36 * Ph36;
       
        var Kv1 = (nPh1_4 * Kv1_4 + nPh5_6 * Kv5_6 + nPh9_12 * Kv9_12 + nPh13 * Kv13 + nPh16 * Kv16 + nPh24 * Kv24 + nPh26_27 * Kv26_27 + nPh36 * Kv36 ) / (nPh1_4 + nPh5_6 + nPh9_12 + nPh13 + nPh16 + nPh24 + nPh26_27 + nPh36);
        
        var Ne1 = Math.pow((nPh1_4 + nPh5_6 + nPh9_12 + nPh13 + nPh16 + nPh24 + nPh26_27 + nPh36 ),2) / (n1_4 * Math.pow(Ph1_4,2) + n5_6 * Math.pow(Ph5_6,2) + n9_12* Math.pow(Ph9_12,2) + n13 * Math.pow(Ph13,2) + n16 * Math.pow(Ph16,2) + n24 * Math.pow(Ph24,2) + n26_27 * Math.pow(Ph26_27,2) + n36 * Math.pow(Ph36,2));
       
        var Pp1 = 1.25 * (nPh1_4 * Kv1_4 + nPh5_6 * Kv5_6 + nPh9_12 * Kv9_12 + nPh13 * Kv13 + nPh16 * Kv16 + nPh24 * Kv24 + nPh26_27 * Kv26_27 + nPh36 * Kv36);

        var Qp1 = 1 * (nPh1_4 * Kv1_4 * tg1_4+ nPh5_6 * Kv5_6 * tg5_6 + nPh9_12 * Kv9_12 * tg9_12 + nPh13 * Kv13 * tg13 + nPh16 * Kv16 * tg16 + nPh24 * Kv24 * tg24+ nPh26_27 * Kv26_27 * tg26_27 + nPh36 * Kv36 * tg36)
        
        var Sp1 = Math.sqrt((Math.pow(Pp1,2))+ Math.pow(Qp1,2));
        var Ip1 = Pp1 / Un;

        var Kv2 = kPhi / Phi;
        var Ne2 = Math.pow(nPh,2) / nPh_2;
        var Pp2 = 0.7 * kPhi;
        var Qp2 = 0.7 * Phtg;
        var Sp2 = Math.sqrt((Math.pow(Pp2,2))+ Math.pow(Qp2,2));
        var Ip2 = Pp2 / Un;

        document.getElementById("result1").innerHTML = " Результати:<br>  1. Груповий коефіцієнт використання для ШР1=ШР2=ШР3: " + Kv1.toFixed(4) + "<br>  2. Ефективна кількість ЕП для ШР1=ШР2=ШР3: "+Ne1.toFixed(1)+ "<br> 3. Розрахунковий коефіцієнт активної потужності для ШР1=ШР2=ШР3: 1.25<br>4. Розрахункове активне навантаження для ШР1=ШР2=ШР3: "+ Pp1.toFixed(2)+" кВт <br> 5. Розрахункове реактивне навантаження для ШР1=ШР2=ШР3:" +Qp1.toFixed(3) + "кВар<br> 6. Повна потужність для ШР1=ШР2=ШР3: " + Sp1.toFixed(4) + "кВт<br> 7. Розрахунковий груповий струм для ШР1=ШР2=ШР3: " +Ip1.toFixed(2)+ "А<br> 8. Коефіцієнти використання цеху в цілому: " +Kv2.toFixed(2) + "<br>  9. Ефективна кількість ЕП цеху в цілому: " +Ne2.toFixed(1)+"<br> 10. Розрахунковий коефіцієнт активної потужності цеху в цілому: 0.7 <br> 11. Розрахункове активне навантаження на шинах 0,38 кВ ТП:" +Pp2.toFixed(1)+ " кВт<br> 12. Розрахункове реактивне навантаження на шинах 0,38 кВ ТП: " +Qp2.toFixed(1)+"кВар<br> 13. Повна потужність на шинах 0,38 кВ ТП:"+Sp2.toFixed(1)+" кВт<br>14. Розрахунковий груповий струм на шинах 0,38 кВ ТП: "+Ip2.toFixed(3)+"А" ;
       }
    
    
