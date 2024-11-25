function activity4() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Learning Objective: Calculate the discharge rate </p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act4();' id='temp-btn-7' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function start_act4() {
    let temp_btn = document.getElementById('temp-btn-7');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Calculate discharge", "tb5-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb5-box'>
        
        <h5> Find the discharge through a fully submerged orifice of width ${act3_b} m. If the difference of water levels on both side of the orifice be ${act3_H} cm. The height of water from top of the orifice is ${act3_H1} m. The orifice is ${act3_d} m deep. Take c<sub>d</sub> = ${act3_cd}. </h5>

        <br>
        <div style='text-align: center;'><img style='width: 30%;' src='./images/rect_orifice2.png'></div>
        <br>

        <h5>Discharge</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ Q = c_d * b * [H_2 - H_1] * \\sqrt{2gH} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal07-inp' > <span id='cal07-val-sp'></span> m<sup>3</sup>/s
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal08-inp' > <span id='cal08-val-sp'></span> litres/sec
        </p>
        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify7();' id='temp-btn-0' >Verify</button></div>
    </div>
    `;
    maindiv.innerHTML += text;
    internal_calculations7();
    setTimeout(() => { show_step('tb5-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function internal_calculations7() {
    //generate data
    act3_Q = act3_cd * act3_b * (act3_H2 - act3_H1) * Math.sqrt(2 * g * act3_H);
    act3_Q_lit = act3_Q * 1000;
}
function verify7() {
    let btn = document.getElementById('temp-btn-0');
    console.log("Q 3 = ", act3_Q);
    console.log("Q 3 in litre = ", act3_Q_lit);
    let inp1 = document.getElementById('cal07-inp');
    let sp1 = document.getElementById('cal07-val-sp');
    let inp2 = document.getElementById('cal08-inp');
    let sp2 = document.getElementById('cal08-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp1.value).toFixed(2)), parseFloat(act3_Q.toFixed(2)))) {
        alert('Discharge is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp2.value).toFixed(2)), parseFloat(act3_Q_lit.toFixed(2)))) {
        alert('Discharge in litres is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(act3_Q).toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${(act3_Q_lit).toFixed(4)}`;
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
    activity5();
}
//# sourceMappingURL=activity4.js.map