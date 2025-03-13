function activity2() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Learning Objective: Calculate c<sub>d</sub> by using given data </p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2();' id='temp-btn-3' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function start_act2() {
    let temp_btn = document.getElementById('temp-btn-3');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Calculate table", "tb3-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb3-box'>

        <h5> Find the coefficient of discharge of rectangular orifice ${act2_b} m wide and ${act2_d} m deep. The water level in the tank above the top edge of the orifice is varied from 3 m to 6 m and the average discharge is noted. </h5>

        <div id='a3-2' style='display: block;'>
            <div id='a3-table' ></div>
        </div>
   
    </div>

    `;
    maindiv.innerHTML += text;
    internal_calculations3();
    setTimeout(() => { show_step('tb3-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function internal_calculations3() {
    //generate data for table 
    let hval = 2.8;
    let inc = 0.2;
    for (let i = 0; i <= 15; i++) {
        act2_H1 = hval + inc;
        inc = inc + 0.2;
        act2_H2 = act2_H1 + act2_d;
        act2_H = ((Math.pow(act2_H2, (3 / 2))) - (Math.pow(act2_H1, (3 / 2))));
        let act2_cd = parseFloat((Math.random() * 0.1 + 0.60).toFixed(2));
        act2_Q = (2 / 3) * act2_cd * b * Math.sqrt(2 * g) * act2_H;
        act2_H1_data.push(parseFloat(act2_H1.toFixed(1)));
        act2_H2_data.push(parseFloat(act2_H2.toFixed(2)));
        act2_H_data.push(parseFloat(act2_H.toFixed(2)));
        act2_Q_data.push(parseFloat(act2_Q.toFixed(2)));
        table_data.push([act2_H1_data[i], act2_Q_data[i], act2_H2_data[i]]);
    }
    //console.log("d= ",d);
    console.log(`act2 H1 => `, act2_H1_data);
    console.log(`act2 H2 => `, act2_H2_data);
    console.log(`act2 H => `, act2_H_data);
    load_a3_table();
}
function load_a3_table() {
    let ele = document.getElementById('a3-table');
    let header = ['H<sub>1</sub> (m)', 'Q (m<sup>3</sup>/s)', 'H<sub>2</sub> (m)'];
    let tab = new Verify_Rows_Cols_Custom_Fixed_Update1(header, table_data, [0, 1], [[2], [2]], '', ele, true, true, () => {
        alert('You have entered correct values');
        a3_plot();
    }, 4);
    tab.load_table();
}
function a3_plot() {
    let btn_text = get_collapse_btn_text("Plot", "plot-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='plot-box'>

        <canvas id='a3-graph' ></canvas>

        <br>
        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act3();' id='temp-btn-8' >Next</button>
   
    </div>

    `;
    maindiv.innerHTML += text;
    internal_calculations4();
    setTimeout(() => { show_step('plot-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    plot();
}
function internal_calculations4() {
    let slope = regression_linear_1variable(act2_H_data, act2_Q_data);
    console.log(`slope => ${slope}`);
    for (let x of act2_H_data) {
        let res = slope * x;
        Y.push(res);
    }
    console.log(`Y => `, Y);
}
function plot() {
    var ctx = document.getElementById('a3-graph');
    ctx.style.backgroundColor = "white";
    ctx.style.marginTop = "5px";
    ctx.style.marginLeft = "10%";
    ctx.style.padding = "10px";
    ctx.style.borderRadius = "8px";
    if (typeof chart != 'undefined') {
        chart.destroy();
    }
    // let labels = [0.004, 0.007, 0.010, 0.014, 0.020, 0.029, 0.039];
    // let data1=[82.28,96.86,104.07,108.28,112.48,117.68,125.35];//hi_expt
    // let data2=[146.90,183.50,204.11,230.09,256.89,290.83,323.49];//hi_st
    var chart = new Chart(ctx, {
        type: 'scatter',
        data: {
            labels: act2_H_data,
            datasets: [
                {
                    label: 'Discharge',
                    data: act2_Q_data,
                    fill: false,
                    borderColor: 'red',
                    tension: 0.5,
                    showLine: false
                    // yAxisID: 'A',
                    // borderWidth: 1,
                    // borderColor: "green",
                    // backgroundColor: "rgba(34, 139, 34, 0.5)",
                },
                {
                    label: 'Regression',
                    data: Y,
                    fill: false,
                    borderColor: 'blue',
                    tension: 0.5,
                    showLine: true
                    // yAxisID: 'A',
                    // borderWidth: 1,
                    // borderColor: "red",
                    // backgroundColor: "rgba(255, 0, 0, 0.5)",
                },
            ]
        },
        options: {
            maintainAspectRatio: true,
            scales: {
                y: {
                    title: {
                        display: true,
                        text: 'Discharge (m^3/s)',
                        font: { size: 14, weight: 'bold' }
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'H2^3/2 - H1^3/2',
                        font: { size: 14, weight: 'bold' }
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: `Discharge vs H2^3/2 - H1^3/2`,
                    font: { size: 18 },
                },
                legend: { labels: { font: { size: 14, weight: 'bold' } } }
            },
        }
    });
    //root.appendChild(ctx);
}
//# sourceMappingURL=activity2.js.map