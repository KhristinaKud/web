// Функція для розрахунку першого калькулятора
function calculate1() {
        // Отримання значень від користувача
        var hp = parseFloat(document.getElementById("hp").value) || 0; // Hp
        var cp = parseFloat(document.getElementById("cp").value) || 0; // Cp
        var sp = parseFloat(document.getElementById("sp").value) || 0; // Sp
        var np = parseFloat(document.getElementById("np").value) || 0; // Np
        var op = parseFloat(document.getElementById("op").value) || 0; // Op
        var wp = parseFloat(document.getElementById("wp").value) || 0; // Wp
        var ap = parseFloat(document.getElementById("ap").value) || 0; // Ap
    
        // Розрахунок коефіцієнтів
        var krs = 100 / (100 - wp);
        var krg = 100 / (100 - wp - ap);
    
        // Розрахунок складу сухої маси палива
        var hs = hp * krs;
        var cs = cp * krs;
        var ss = sp * krs;
        var ns = np * krs;
        var os = op * krs;
        var as = ap * krs;
    
        // Розрахунок складу горючої маси палива
        var hg = hp * krg;
        var cg = cp * krg;
        var sg = sp * krg;
        var ng = np * krg;
        var og = op * krg;
    
        // Розрахунок нижчої теплоти згоряння для робочої маси
        var qrn = (339 * cp + 1030 * hp - 108.8 * (op - sp) - 25 * wp) / 1000;
        var qf = qrn;
        var qrg = (qrn + 0.025 * wp) * (100 / (100 - wp - ap));
    
        // Розрахунок нижчої теплоти згоряння для сухої маси
        var qd = (qf + 0.025 * wp) * (100 / (100 - wp));
    
        // Виведення результатів
        document.getElementById("result1").innerHTML =
            "Результат: <br> Коефіцієнт переходу від робочої до сухої маси = " + krs.toFixed(2) +
            "<br> Коефіцієнт переходу від робочої до горючої маси = " + krg.toFixed(2) +
            "<br> Склад сухої маси палива: Hc= " + hs.toFixed(2) + "%; Cc=" + cs.toFixed(2) + "%; Ss=" +
            ss.toFixed(2) + "%; Ns=" + ns.toFixed(2) + "%; Os=" + os.toFixed(2) + "%; As=" + as.toFixed(2) +
            "%;<br> Склад горючої маси палива: Hc= " + hg.toFixed(2) + "%; Cc=" + cg.toFixed(2) +
            "%; Ss=" + sg.toFixed(2) + "%; Ns=" + ng.toFixed(2) + "%; Os=" + og.toFixed(2) +
            "%;<br> Нижча теплота згоряння для робочої маси: " + qrn.toFixed(4) + " МДж/кг" +
            "<br> Нижча теплота згоряння для сухої маси: " + qd.toFixed(2) + " МДж/кг" +
            "<br> Нижча теплота згоряння для горючої маси: " + qrg.toFixed(1) + " МДж/кг";
    }
    
    // Функція для розрахунку другого калькулятора
    function calculate2() {
        // Отримання значень від користувача
        var cf = parseFloat(document.getElementById("cf").value) || 0; // Cf
        var hf = parseFloat(document.getElementById("hf").value) || 0; // Hf
        var of = parseFloat(document.getElementById("of").value) || 0; // Of
        var sf = parseFloat(document.getElementById("sf").value) || 0; // Sf
        var temp = parseFloat(document.getElementById("x1").value) || 0; // Теплота згоряння
        var vog = parseFloat(document.getElementById("x2").value) || 0; // Вологість
        var zol = parseFloat(document.getElementById("x3").value) || 0; // Зольність
        var v = parseFloat(document.getElementById("v").value) || 0; // Ванадій
    
        // Розрахунки
        var solut1 = (100 - vog - zol) / 100;
        var solut2 = (100 - vog) / 100;
    
        var cf2 = cf * solut1;
        var hf2 = hf * solut1;
        var of2 = of * solut1;
        var sf2 = sf * solut1;
        var af2 = zol * solut2;
        var  v2 = v * solut2;
         // Розрахунок нижчої теплоти згоряння мазуту на робочу масу
       var  Q = temp * ((100 - vog - af2) / 100) - 0.025 * vog;

       document.getElementById("result2").innerHTML = "Результат: <br> Склад робочої маси мазуту становитиме: Hf= " + hf2.toFixed(2) +"%; Cf=" + cf2.toFixed(2) + "%; Sf=" + sf2.toFixed(2) +"%; Of=" + of2.toFixed(2) +"%; V=" + v2.toFixed(2) + "мг/кг; Af=" + af2.toFixed(2) +"%;"+ "<br> Нижча теплота згоряння мазуту на робочу масу для робочої маси за заданим складом компонентів палива становить:" + Q.toFixed(1)+"МДж/кг";
    }
    
