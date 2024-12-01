let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <h5>Flow Through Large Rectangular Orifice</h5>
        <p>Learning Objective: Calculate the discharge rate</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Caculate Q", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>

        <h5> Find the discharge through a rectangular orifice ${b} m wide and ${d} m deep fitted to a water tank. The water level in the tank is ${H1} m above the top edge of the orifice. Take c<sub>d</sub> = ${cd}. </h5>

        <br>

        <div style='text-align: center;'><img style='width: 30%;' src='./images/rect_orifice1.png'></div>

        <br>

        <h5>Discharge</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ Q = \\frac{2}{3} * c_d * b * \\sqrt{2g} * [H_2^{3/2} - H_1^{3/2}] $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal01-inp' > <span id='cal01-val-sp'></span> m<sup>3</sup>/s
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal02-inp' > <span id='cal02-val-sp'></span> litres/sec
        </p>
        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify0();'  id='temp-btn-0' >Verify</button></div>
    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    internal_calculations();
}
function internal_calculations() {
    Q = (2 / 3) * cd * b * Math.sqrt(2 * g) * ((Math.pow(H2, (3 / 2))) - (Math.pow(H1, (3 / 2))));
    Q_lit = Q * 1000;
}
function verify0() {
    let btn = document.getElementById('temp-btn-0');
    console.log("H2 = ", H2);
    console.log("Q = ", Q);
    console.log("Q in litre = ", Q_lit);
    let inp1 = document.getElementById('cal01-inp');
    let sp1 = document.getElementById('cal01-val-sp');
    let inp2 = document.getElementById('cal02-inp');
    let sp2 = document.getElementById('cal02-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp1.value).toFixed(2)), parseFloat(Q.toFixed(2)))) {
        alert('Discharge is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp2.value).toFixed(2)), parseFloat(Q_lit.toFixed(2)))) {
        alert('Discharge in litres is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(Q).toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${(Q_lit).toFixed(4)}`;
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
    activity2();
}
activity1();
//# sourceMappingURL=activity1.js.map