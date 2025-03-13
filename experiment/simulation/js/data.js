// all variables
let g = 9.81;
// activity 1 variables
let b = parseFloat((Math.random() * 0.5 + 1.5).toFixed(1));
let d = parseFloat((Math.random() * 0.5 + 1.25).toFixed(2));
let H1 = parseFloat((Math.random() * 1.5 + 3.0).toFixed(1));
let H2 = H1 + d;
let cd = parseFloat((Math.random() * 0.1 + 0.60).toFixed(2));
let Q = 0;
let Q_lit = 0;
// activity 2 variables
let act2_b = parseFloat((Math.random() * 0.5 + 1.5).toFixed(1));
let act2_d = parseFloat((Math.random() * 0.5 + 1.25).toFixed(2));
let act2_H1;
let act2_H1_data = [];
let act2_H2;
let act2_H2_data = [];
let act2_Q = 0;
let act2_H;
let act2_H_data = [];
let act2_Q_data = [];
let calculated_cd = 0;
// activity 3
let act3_b = parseFloat((Math.random() * 0.7 + 1.8).toFixed(1));
let act3_d = parseFloat((Math.random() * 0.1 + 0.20).toFixed(2));
let act3_H = Math.floor(Math.random() * (50 + 1)) + 50;
let act3_H1 = parseFloat((Math.random() * 1.0 + 2.0).toFixed(1));
let act3_H2 = act3_H1 + act3_d;
let act3_cd = parseFloat((Math.random() * 0.1 + 0.60).toFixed(2));
let act3_Q = 0;
let act3_Q_lit = 0;
//activity 4
let act4_b = parseFloat((Math.random() * 0.7 + 1.8).toFixed(1));
let act4_d = parseFloat((Math.random() * 0.5 + 1.0).toFixed(1));
let act4_H1 = parseFloat((Math.random() * 1.5 + 3.0).toFixed(1));
let water_level_edge = parseFloat((Math.random() * 0.4 + 0.4).toFixed(1));
let act4_H = act4_H1 + water_level_edge;
let act4_cd = parseFloat((Math.random() * 0.1 + 0.60).toFixed(2));
let act4_H2 = act4_H1 + act4_d;
let act4_Q = 0;
let act4_Q_lit = 0;
let table_data = [];
//for plot 
let Y = [];
let X = [];
//for a4
let slope = 0;
//# sourceMappingURL=data.js.map