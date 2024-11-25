function activity5() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Learning Objective: Calculate the discharge rate </p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act5();' id='temp-btn-8' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function start_act5() {
    let temp_btn = document.getElementById('temp-btn-8');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Calculate discharge", "tb7-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb7-box'>
        
        <h5>A rectanglular orifice of ${act4_b} m wide and ${act4_d} m deep. The water level on one side of the orifice is ${H1} above the top edge of the orifice, the water level is ${water_level_edge} m below its top edge. Find the discharge if c<sub>d</sub> = ${act4_cd}.  </h5>
        <br>
        <div style='text-align: center;'><img style='width: 30%;' src='./images/rect_orifice3.png'></div>
        <br>

        <h5>Discharge</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ Q = c_d * b * [H_2 - H_1] * \\sqrt{2gH} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal09-inp' > <span id='cal09-val-sp'></span> m<sup>3</sup>/s
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal10-inp' > <span id='cal10-val-sp'></span> litres/sec
        </p>
        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify8();' id='temp-btn-0' >Verify</button></div>
    </div>
    `;
    maindiv.innerHTML += text;
    internal_calculations8();
    setTimeout(() => { show_step('tb7-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function internal_calculations8() {
    //generate data
    act4_Q = act4_cd * act4_b * (act4_H2 - act4_H1) * Math.sqrt(2 * g * act4_H);
    act4_Q_lit = act4_Q * 1000;
}
function verify8() {
    let btn = document.getElementById('temp-btn-0');
    console.log("Q 4 = ", act4_Q);
    console.log("Q 4 in litre = ", act4_Q_lit);
    let inp1 = document.getElementById('cal09-inp');
    let sp1 = document.getElementById('cal09-val-sp');
    let inp2 = document.getElementById('cal10-inp');
    let sp2 = document.getElementById('cal10-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp1.value).toFixed(2)), parseFloat(act4_Q.toFixed(2)))) {
        alert('Discharge is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp2.value).toFixed(2)), parseFloat(act4_Q_lit.toFixed(2)))) {
        alert('Discharge in litres is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(act4_Q).toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${(act4_Q_lit).toFixed(4)}`;
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
    exp_complete();
}
function exp_complete() {
    let btn = (document.getElementById('temp-btn-act2-spwt'));
    btn && btn.remove();
    alert('Experiment completed');
}
//# sourceMappingURL=activity5.js.map