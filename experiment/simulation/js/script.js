
const quizDiv = document.querySelector(".quiz-div");
const questionDiv = document.querySelector(".question");
const answersDiv = document.querySelector(".answers");
const questionBtnDiv = document.querySelector(".question-btn");
const practiceDiv = document.querySelector(".practice");
const canvas = document.querySelector("#simscreen");
// const ctx = canvas.getContext("2d");
let currentStepCount = 1;
let currentStep;
let currentQuestions;
let currentQuestionIndex = 0;

let animationFrameID;
// stepNo & Step TITLE
const stepNumber = document.querySelector(".practice-step-no");
const stepTitle = document.querySelector(".practice-step-info");

// buttons
const btnAxis = document.querySelector(".btn-axis");
// btnAxis.addEventListener("click", drawAxis);
const btnVPHP = document.querySelector(".btn-vp-hp");


const btnA = document.querySelector('.btn-A');

const btnBB = document.querySelector('.btn-B');

const btnB1 = document.querySelector('.btn-B1');

const btnC = document.querySelector('.btn-c');

const btnNext = document.querySelector(".btn-next");

const buttonBox = document.querySelector(".practice-step-button");

const box = document.querySelector(".box");

const dropDown = document.querySelector('.shapeDrop');


const radioButtons = document.querySelectorAll('input[name="navigation"]');

const taskTitle = document.querySelector(".task-title");

// radioButtons.style.cursor= "pointer";

radioButtons.forEach(function(radio) {
 
  radio.addEventListener('change', function() {
    btnNext.disabled = false;
    btnReset.disabled = false;
    // console.log(radio.value);
    if (radio.value === 'third') {
      // console.log("radio visible")
      dropDown.classList.remove('hide');
  } else {
    // console.log("radio non visible")

    dropDown.classList.add('hide');
  }
  }); 

});

const btnReset = document.querySelector(".btn-reset");
// btnReset.addEventListener("click", clearcanvas);
const btnTop = document.querySelector(".btn-top");
// btnTop.addEventListener("click", movetoTop);
const validateAnswer = document.createElement("span");
validateAnswer.classList.add("validate");


function displayDiv(ele) {
  const taskScreen = document.querySelectorAll(".task-screen");
  taskScreen.forEach((task) => {
    task.classList.add("hide");
    

  });
  if (ele.classList.contains("tool-objective")) {
    document.querySelector(".objective").classList.remove("hide");
    taskTitle.textContent = "Objective";
    // document.getElementById("Results").style.display = "none";
    document.getElementById("variables").style.display = "none";
    document.getElementById('instructions').style.display = 'none';
    
  
  }
  if (ele.classList.contains("tool-apparatus")) {
    document.querySelector(".apparatus").classList.remove("hide");
    taskTitle.textContent = "Apparatus";
    // document.getElementById("Results").style.display = "none";
    document.getElementById("variables").style.display = "none";
    document.getElementById('instructions').style.display = 'none';
  }
  if (ele.classList.contains("tool-help")) {
    // document.querySelector(".help").classList.remove("hide");
    taskTitle.textContent = "Help";
    // document.getElementById("Results").style.display = "none";
    document.getElementById("variables").style.display = "none";
    
  }
  if (ele.classList.contains("tool-practice")) {
    document.querySelector(".practice").classList.remove("hide");
    taskTitle.textContent = "Experiment";
    // document.getElementById("Results").style.display = "block";
    document.getElementById("variables").style.display = "block";
    document.getElementById('instructions').style.display = 'none';
    $(stepTitle).css("margin-left","5rem");
    // stepNumber.classList.add('hide');
btnTop.classList.add("hide");

    // console.log("reched here")
    // quizDiv.classList.remove('hide');
    // btnNext.addEventListener('click', nextButtonEventListener);
  
    radioButtons.forEach(radio => {
      radio.checked = false;
    
  })

  circle1 = new Path2D();
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
$(".canvas").css("display","none");
// stepTitle.textContent = "Select the Experiment:";
// btnA.classList.add('hide');
// btnBB.classList.add('hide');
// btnC.classList.add('hide');
// btnB1.classList.add('hide');
$(buttonBox).css("display","none");
// btnNext.disabled = true;
//  canvasfun1();
// console.log(i);
// stepNumber.textContent = "1";
// document.getElementById("image").style.display = "none";
// document.getElementById("image1").style.display = "none";
// document.getElementById("image3").style.display = "none";

// btnNext.removeEventListener('click',handleDropdownChange);
// btnNext.addEventListener('click', nextButtonEventListener);
//  clearcanvas();
  }
}



function lineargraph(){


  document.getElementById('IBobservation').style.display = 'none';
  document.getElementById('Vgraph').style.display = 'block';
  document.getElementById('my_Chart').style.display = 'block';
  document.getElementById('myChart').style.display = 'none';
  // document.getElementById('blocker').style.display = 'block';
  document.getElementById('finalresult').disabled=false;
  
  var trace1={
    x:[20,31,47,67,96,126,162,213,265,347,424,495,582,669,789],
    y:[9,12.25,16,20.25,25,30.25,36,42.25,49,56.25,64,72.25,81,90.25,10],
    mode:'markers',
  };
  
  var trace2={
    x:[20,616],
    y:[9,90],
  mode:'lines',
  text: 'Title of Trace 2', // add title here
  hoverinfo: 'text'
  
};


var layout = {
  autosize: true,
  title: "Slope of Graph by Linear Regression",
  xaxis: {
    title: "Phase Shift(degree)",
    showline: true, // Add showline attribute to xaxis
    autorange: false,
    range: [0, 800],
    

  },
  yaxis: {
    title: "V<sup>2</sup>/10<sup>4</sup>(Volt<sup>2</sup>)",
    linecolor:'black'
     
  },
  showlegend: false,
  shapes: [{
    type: 'line',
    xref: 'x',
    yref: 'paper',
    x0: 400,
    y0: 0.395,
    x1: 400,
    y1: 0.61,
    line: {
      color: 'gray',
      width: 1,
      dash: 'solid'
    }
  },{
    type: 'line',
    xref: 'x',
    yref: 'paper',
    x0: 253.33,
    y0: 0.396,
    x1: 253.33,
    y1: 0.40,
    line: {
      color: 'gray',
      width: 1,
      dash: 'solid'
    }
  },
  {
    type: 'line',
    xref: 'paper',
    yref: 'y',
    x0: 0.49,
    y0: 60,
    x1: 0.495,
    y1: 60,
    line: {
      color: 'gray',
      width: 1,
      dash: 'solid'
    }
  },
  {
    type: 'line',
    xref: 'paper',
    yref: 'y',
    x0: 0.32,
    y0: 40,
    x1: 0.498,
    y1: 40,
    line: {
      color: 'gray',
      width: 1,
      dash: 'solid'
    }
  },
],
  annotations: [
    {
      x: 400,
      y: 50,
      xref: 'x',
      yref: 'y',
      text: 'Slope=1.36 * 10<sup>3</sup> [volt<sup>2</sup>/degree]',
      showarrow: true,
      arrowhead: 7,
      ax: 60,
      ay: 0
    },
    
  ]
  
};
var data = [trace1,trace2];
Plotly.newPlot("my_Chart", data, layout, { responsive: true });

blurr = true;
blurring();
}


function compareXRef(a, b) {
  const xRefA = parseInt(a.xref); // Parse the xref values as integers
  const xRefB = parseInt(b.xref);
  if (xRefA < xRefB) {
    return -1;
  }
  if (xRefA > xRefB) {
    return 1;
  }
  return 0;
}

let fun3Executed = false; // Flag to check if fun3 has been executed

let canExecute = false;






function animate(x1, y1, x2, y2, ratio) {
  ratio = ratio || 0;
  drawLine(x1, y1, x2, y2, ratio);
  if (ratio < 1) {
    animationFrameID = requestAnimationFrame(function () {
      animate(x1, y1, x2, y2, ratio + 0.02);
    });
  }
}






let circle1 = new Path2D(),
  currentFunction;
let cirX = 0,
  cirY = 0,
  cirText = "";




 var j=0;


// let hvoltage = 0;
// let blurr;
// let ibtable;
// let ibrow;
// let ibXarray = [];
// let magcount = -1;
// let tfreq;
// let pfreq;
// let cap;
// let res;
// let err;
// let pcheck;
// let resistance;
// let rows;
// let mres;
// let Empty;


let hvoltage = 0;
let magi = 300;
let halli = 0;
let concentration;
let magcount = -1;
let hallcount = -1;
let sampleXarray = [];
let sampleYarray = [];
let ibXarray = [];
let ibYarray = [];
let blurr;
let pcheck;
let table;
let ibtable;
let row;
let ibrow;
let rH = 2.33 *10^-9;
let raisedtoTen;
let lv = [];
let z=[];
let c=[];
let d=[];
let e=[];
let f=[];
let g=[];
let h=[];
let i=[];
let line=700;


function blurring() {
    if (blurr == true) {
        document.getElementById("simoptions").style.filter = 'blur(0px)';
        document.getElementById("mainsimulation").style.filter = 'blur(2px)';
        // document.getElementById("buttondown").style.filter = 'blur(2px)';
    } else if (blurr == false) {
        document.getElementById("simoptions").style.filter = 'blur(0px)';
        document.getElementById("mainsimulation").style.filter = 'blur(0px)';
        // document.getElementById("buttondown").style.filter = 'blur(0px)';
    }
}
function selection() {
    if (option == 'bjt') {

        // console.log('virtual')
    } else if (option == 'opamp') {
        // console.log('virtual lab')
    }
}

// Next button
let a = 1;

function up() {
    a += 1;
    next()
}

function down() {
    a -= 1;
    next()
}

function next() {
    if (a == 1) {
        document.getElementById("buttondown").style.display = 'none';
        document.getElementById("buttonup").style.display = 'block';
        document.getElementById("content").style.display = 'block';
        document.getElementById("content2").style.display = 'none';
    } else if (a == 2) {
        document.getElementById("buttondown").style.display = 'block';
        document.getElementById("content").style.display = 'none';
        document.getElementById("content2").style.display = 'block';
        document.getElementById("content3").style.display = 'none';
        document.getElementById("buttonup").style.display = 'none';
        // document.getElementById("observation").style.display = 'none';
    } else if (a == 3) {
        document.getElementById("buttonup").style.display = 'none';
        document.getElementById("content2").style.display = 'none';
        document.getElementById("content3").style.display = 'block';
        closeobservation();
        plotting();
    }
}


// function update() {
//   let select = document.getElementById('exp');
//   let option = select.options[select.selectedIndex].value;
//   document.getElementById("exp").disabled = true;

//   if (option == 'bjt') {
//       $(document).ready(function () {
//           // Get the window width
//           var windowWidth = $(window).width();

//           if (windowWidth <= 768) {
//               // For mobile view (width 768px or less)
//               $("#variables").css("display", "inline-block");
//               $("#variables").css("width", "100%"); // Mobile view width 200%
//           } else {
//               // For tablet or desktop view (width more than 768px)
//               $("#variables").css("display", "inline-block");
//               $("#variables").css("width", "100%"); // Set to 100% for larger screens
//           }

//           // Re-apply on window resize to keep responsiveness
//           $(window).resize(function () {
//               windowWidth = $(window).width();

//               if (windowWidth <= 945) {
//                   // For mobile view
//                   $("#variables").css("display", "inline-block");
//                   $("#variables").css("width", "100%");
//               } else {
//                   // For tablet or desktop view
//                   $("#variables").css("display", "inline-block");
//                   $("#variables").css("width", "100%"); // Set 100% for larger screens
//               }
//           });
//       });

//       // Rest of the code remains the same
//       document.getElementById('grid1').style.display = 'grid';
//       document.getElementById("Results").style.display = "block";
//       document.getElementById("insert").innerHTML = 'Trigger Button On';
//       document.getElementById("remove").innerHTML = 'Trigger Button off';

//       document.getElementById("ibjt").style.display = 'block';
//       document.getElementById("ibjt1").style.display = 'none';
//       document.getElementById("iopamp").style.display = 'none';
//       document.getElementById("iopamp1").style.display = 'none';
//       document.getElementById("exp").disabled = false;

//       document.getElementById("exp1").disabled = false;
//       document.getElementById('exp1').style.display = "block";
//       document.getElementById("exp2").disabled = false;
//       document.getElementById('mono').style.visibility = "visible";
//       document.getElementById('mono1').style.visibility = "visible";
//       document.getElementById('mono2').style.visibility = "visible";
//       document.getElementById("insert").disabled = true;

//       document.getElementById("resistance").style.display = "block";
//       document.getElementById("Capacitance").style.display = "block";
//       document.getElementById("exp2").style.display = "block";
//       document.getElementById("exp").disabled = false;

//       document.getElementById("exp1").style.display = "block";
//       document.getElementById('addbutton').style.display = "block";
//       document.getElementById('observationbutton').style.display = "block";
//       document.getElementById('finalresult').style.display = "block";
//       document.getElementById('tfreq').style.visibility = "visible";
//       document.getElementById('pfreq').style.visibility = "visible"
//       document.getElementsByClassName('result')[0].style.visibility = "visible";

//       $("#variables").css("display", "inline-block");
//       $("#Results").css("display", "block");

//       res = 15;
//       pcheck = true;
//       clearing();
//       remove();

//   } else if (option == 'opamp') {
//       document.getElementById('reset').style.display = 'inline-block';
//       document.getElementById('insert').style.display = 'inline-block';
//       document.getElementById("variables").style.width = "100%";
//       document.getElementById('grid1').style.display = 'inline';

//       $(document).ready(function () {
//           var windowWidth = $(window).width();

//           if (windowWidth <= 768) {
//               $("#variables").css("display", "inline-block");
//               $("#variables").css("width", "100%");
//           } else {
//               $("#variables").css("display", "inline-block");
//               $("#variables").css("width", "200%");
//           }

//           $(window).resize(function () {
//               windowWidth = $(window).width();

//               if (windowWidth <= 945) {
//                   $("#variables").css("display", "inline-block");
//                   $("#variables").css("width", "100%");
//               } else {
//                   $("#variables").css("display", "inline-block");
//                   $("#variables").css("width", "200%");
//               }
//           });
//       });

//       document.getElementById("Results").style.display = "none";
//       document.getElementById("insert").innerHTML = 'Trigger Button On';
//       document.getElementById("remove").innerHTML = 'Trigger Button off';
//       document.getElementById("observationbutton").disabled = true;

//       document.getElementById("iopamp").style.display = 'block';
//       document.getElementById("ibjt").style.display = 'none';
//       document.getElementById("ibjt1").style.display = 'none';
//       document.getElementById("iopamp1").style.display = 'none';

//       document.getElementById("resistance").style.display = "none";
//       document.getElementById("Capacitance").style.display = "none";
//       document.getElementById("exp2").style.display = "none";
//       document.getElementById("exp").disabled = false;

//       document.getElementById("exp1").style.display = "none";
//       document.getElementById('addbutton').style.display = "none";
//       document.getElementById('observationbutton').style.display = "none";
//       document.getElementById('finalresult').style.display = "none";
//       document.getElementById('tfreq').style.visibility = "hidden";
//       document.getElementById('pfreq').style.visibility = "hidden"
//       document.getElementsByClassName('result')[0].style.visibility = "hidden";
//       document.getElementById("insert").disabled = false;

//       res = 1;
//       pcheck = false;
//       clearing();
//       remove();
//   }
// }



function resist() {
    document.getElementById("exp").disabled = true;
    let select = document.getElementById('exp1');
    let option = select.options[select.selectedIndex].value;

    if (option == '15') {
        document.getElementById("insert").disabled = false;
        // document.getElementById("addbutton").disabled = false;
        // document.getElementById("observationbutton").disabled = false;
       
        res = 15;
        cap = 1;
        tfreq = 10.395;
        pfreq = 10.200;
        err = 1.87;
// console.log('hi')
// closeobservation()
        
} 
    else if (option == '18') {
        // console.log('bi')
        document.getElementById("insert").disabled = false;
        // document.getElementById("addbutton").disabled = false;
        // document.getElementById("observationbutton").disabled = false;
       
        
        res = 18;
        cap = 1;
        tfreq = 12.474;
        pfreq = 12.450;
        pcheck=false;
        err = 0.19;
        // clearing();
        // remove()
        // closeobservation()
    }
    else if (option == '20') {
        // console.log('hlo')
     document.getElementById("insert").disabled = false;
    //   document.getElementById("addbutton").disabled = false;
    // document.getElementById("observationbutton").disabled = false;
   
    res = 20;
    cap = 1;
    tfreq = 13.86;
    pfreq = 13.50;
    err = 2.59;
    
     pcheck=false;
    //  clearing();
    //  remove()
    //  closeobservation()
 }
}

// sensor/probe button
function insert() {
    document.getElementById("insert").style.display = 'none';
    document.getElementById("remove").style.display = 'block';
    document.getElementById("exp").disabled = true;
    
    document.getElementById("addbutton").disabled = false;
    // document.getElementById("observationbutton").disabled = false;
    document.getElementById("exp1").disabled = true;
    document.getElementById("exp2").disabled = true;

    let select = document.getElementById('exp1');
    let option = select.options[select.selectedIndex].value;


    if (pcheck==true) {
        document.getElementById("ibjt1").style.display = 'block';
        document.getElementById("ibjt").style.display = 'none';
        document.getElementById("iopamp").style.display = 'none';
        document.getElementById("iopamp1").style.display = 'none';
    }
        // document.getElementById("view").style.display = 'block';
    if (option == '15') {
        document.getElementById("ibjt1").style.display = 'block';  
        document.getElementById("ibjt").style.display = 'none';
        document.getElementById("view").style.display='block';
        // document.getElementById("close1").style.display='block';
        // document.getElementById('R1').style.display="block";
        // document.getElementById('R2').style.display="block";
        document.getElementById('arrow15').style.visibility="visible";
        document.getElementById('arrow18').style.visibility="hidden";
        document.getElementById('arrow20').style.visibility="hidden";
        document.getElementById("iopamp").style.display = 'none';
        document.getElementById("iopamp1").style.display = 'none';

    } 
    else if (option == '18') {
        document.getElementById("view1").style.display='block';
        // document.getElementById("close1").style.display='block';
        document.getElementById('arrow18').style.visibility="visible";
        document.getElementById('arrow15').style.visibility="hidden";
        document.getElementById('arrow20').style.visibility="hidden";
        document.getElementById("ibjt1").style.display = 'block';  
        document.getElementById("ibjt").style.display = 'none';
        // document.getElementById('R1').style.display="block";
        // document.getElementById('R2').style.display="block";
        document.getElementById("iopamp").style.display = 'none';
        document.getElementById("iopamp1").style.display = 'none';
      
    }
    else if (option == '20') {
        document.getElementById("ibjt1").style.display = 'block';  
        document.getElementById("ibjt").style.display = 'none';
        document.getElementById("view2").style.display='block';
        // document.getElementById("close1").style.display='block';
        document.getElementById('arrow20').style.visibility="visible";
        document.getElementById('arrow18').style.visibility="hidden";
        document.getElementById('arrow15').style.visibility="hidden";
        document.getElementById("iopamp").style.display = 'none';
        document.getElementById("iopamp1").style.display = 'none';
        // document.getElementById('R1').style.display="block";
        // document.getElementById('R2').style.display="block";
 }
    else if (pcheck==false) {
        document.getElementById("ibjt").style.display = 'none';
        document.getElementById("ibjt1").style.display = 'none';
        document.getElementById("iopamp").style.display = 'none';
        document.getElementById("iopamp1").style.display = 'block';
      
        // document.getElementById('RB1').style.display="block";
        // document.getElementById('RB2').style.display="block";
        // document.getElementById('RB3').style.display="block";
        document.getElementById("view3").style.display='block';
        // document.getElementById("close1").style.display='block';
        document.getElementById('arrowB').style.visibility="visible";
        document.getElementById('arrowB1').style.visibility="visible";
    }

}

function remove() {

  
    document.getElementById("remove").style.display = 'none';
    document.getElementById("insert").style.display = 'block';

    document.getElementById("view").style.display='none';
    // document.getElementById("close1").style.display='none';
    document.getElementById("view1").style.display='none';
    document.getElementById("view2").style.display='none';
    // document.getElementById('R1').style.display="none";
    // document.getElementById('R2').style.display="none";

   // document.getElementById("observationbutton").disabled = true;
    document.getElementById("addbutton").disabled = true;
    document.getElementById("observationbutton").disabled = true;
    document.getElementById("finalresult").disabled = true;

    document.getElementById("exp1").disabled = false;
    document.getElementById("exp2").disabled = false;

    let select = document.getElementById('exp1');
    let option = select.options[select.selectedIndex].value;

    if (pcheck==true) {
        document.getElementById("ibjt1").style.display = 'block';
        document.getElementById("ibjt").style.display = 'none';
        document.getElementById("iopamp").style.display = 'none';
        document.getElementById("iopamp1").style.display = 'none';
    }
        
    if (option == '15') {
        document.getElementById("ibjt").style.display = 'block';
        document.getElementById("ibjt1").style.display = 'none';
        document.getElementById("iopamp").style.display = 'none';
        document.getElementById("iopamp1").style.display = 'none';

    } 
    else if (option == '18') {
        document.getElementById("ibjt").style.display = 'block';
        document.getElementById("ibjt1").style.display = 'none';
        document.getElementById("iopamp").style.display = 'none';
        document.getElementById("iopamp1").style.display = 'none';
    }
    else if (option == '20') {
        document.getElementById("ibjt").style.display = 'block';
        document.getElementById("ibjt1").style.display = 'none';
        document.getElementById("iopamp").style.display = 'none';
        document.getElementById("iopamp1").style.display = 'none';
       
 }
    else if (pcheck==false) {
        document.getElementById("ibjt").style.display = 'none';
        document.getElementById("ibjt1").style.display = 'none';
        document.getElementById("iopamp").style.display = 'block';
        document.getElementById("iopamp1").style.display = 'none';
        document.getElementById("view3").style.display='none';
        // document.getElementById("close1").style.display='none';
        document.getElementById('RB1').style.display="none";
        document.getElementById('RB2').style.display="none";
        document.getElementById('RB3').style.display="none";
    }

blurr = false;
blurring();
}



function calculate() {
    if(option = "opamp")
    {
        tfreq= 1/((2*Math.PI*res*cap)*(Math.pow(6,0.5)));
        tfreq= parseFloat( tfreq.toFixed(4));
        let val= tfreq*0.1;
        pfreq= practfreq(tfreq-val, tfreq+val);
        pfreq = parseFloat(pfreq.toFixed(4));
        err = (pfreq-tfreq)*100/pfreq;
        err = err.toFixed(2)
        document.getElementById("finalresult").disabled = false;
    }
    else if(option = "bjt")
    {
        tfreq= 1/((2*Math.PI*res*cap)*(Math.pow(6,0.5)));
        tfreq= parseFloat( tfreq.toFixed(4));
        let val= tfreq*0.1;
        pfreq= practfreq(tfreq-val, tfreq+val);
        pfreq = parseFloat(pfreq.toFixed(4));
        err = (pfreq-tfreq)*100/pfreq;
        err = err.toFixed(2)
        document.getElementById("finalresult").disabled = false;
    }
}

document.getElementById("cslider").addEventListener("change", slidercurrent);

function slidercurrent() {
    // current calculations
    
        document.getElementById("currentvalue").innerHTML = cslider.value;
        magi = cslider.value;
        // console.log('hi')


}


function Refresh() {
    window.location = window.location.href;
};

function openobservation() {
    document.getElementById("IBobservation").style.display = 'block';
    document.getElementById("finalresult").disabled = false;
    // document.getElementById('blocker').style.display = 'block';
    blurr = true;
    blurring();
}


function closeobservation() {
  document.getElementById("IBobservation").style.display = 'none';

  blurr = false;
 blurring();
  document.getElementById('IBgraph').style.display = 'none';
  document.getElementById('Vgraph').style.display = 'none';
  document.getElementById('blocker').style.display = 'none';
  document.getElementById('myChart').style.display = 'none';
  document.getElementById('my_Chart').style.display = 'none';
  document.getElementById('calculate').style.display = 'none';
  document.getElementById('instructions').style.display = 'none';
  
}

function AddingToArray() {
    
  document.getElementById('add').style.display = 'block';
  setTimeout(timer, 2000);
  // console.log("Adding to array for magi:", magi);


  z.push(parseFloat(magi));
  c.push(parseFloat(data[magi][0]));
  d.push(parseFloat(data[magi][1]));
  e.push(parseFloat(data[magi][2]));
  f.push(parseFloat(data[magi][3]));
  g.push(parseFloat(data[magi][4]));
  h.push(parseFloat(data[magi][5]));
  i.push(parseFloat(data[magi][6]));


  
  if (z.length > 0) {
      addobservation();
  }
}


function addobservation() {
  ibtable = document.getElementById("IBobservationTable");
  ibrow = ibtable.insertRow();
  let cell1 = ibrow.insertCell(0);
  let cell2 = ibrow.insertCell(1);
  let cell3 = ibrow.insertCell(2);
  let cell4 = ibrow.insertCell(3);
  let cell5 = ibrow.insertCell(4);
  let cell6 = ibrow.insertCell(5);
  let cell7 = ibrow.insertCell(6);
  let cell8 = ibrow.insertCell(7);
 
  cell1.innerHTML = z[z.length-1];
  cell2.innerHTML = c[c.length - 1];
  cell3.innerHTML = d[d.length - 1];
  cell4.innerHTML = e[e.length - 1];
  cell5.innerHTML = f[f.length - 1];
  cell6.innerHTML = g[g.length - 1];
  cell7.innerHTML = h[h.length - 1];
  cell8.innerHTML = i[i.length - 1];
  
  magcount = ibtable.rows.length -1;
  // console.log("Number of rows in table: " + magcount);

}


function clearing() {
   
  for (var i = 1; i < ibtable.rows.length;) {
      ibtable.deleteRow(i);
  }
  
  z.length = 0;
  e.length = 0;
  
  document.getElementById("finalresult").disabled = true;
  document.getElementById('coefficientvalue').innerHTML = 0;
  // document.getElementById('carriercon').innerHTML = 0;

}


function timer() {
    document.getElementById('add').style.display = 'none';
}

function sortingArray(sortarray) {
  const points = sortarray;
  return points.sort(function (a, b) {
      return a - b
  });
}

function sortingArray(sortarray) {
const points = sortarray;
return points.sort(function (a, b) {
    return a - b
});
}
function timeres() {
    document.getElementById('addres').style.display = 'none';
}
function timecap() {
    document.getElementById('addcap').style.display = 'none';
}

function disres(){
    document.getElementById('addres').style.display = 'block';
    setTimeout(timeres, 1000);
}
function discap(){
    document.getElementById('addcap').style.display = 'block';
    setTimeout(timecap, 1000);
}

// Function to generate practical frequency
function practfreq(min, max) {
    return Math.random() * (max - min) + min;
}


//Graph
function IBgraph() {
  document.getElementById('IBobservation').style.display = 'none';
  document.getElementById('IBgraph').style.display = 'block';
  document.getElementById('myChart').style.display = 'block';
  document.getElementById('blocker').style.display = 'block';
  document.getElementById('slopebutton').disabled=false;
  
  // let xValues = z;
  // let yValues = e.map(value => value * 100);

  let xyPairs = [];
  for (let i = 0; i < z.length; i++) {
    xyPairs.push({x: z[i], y: e[i] * 100});
  }

  xyPairs.sort((a, b) => a.x - b.x);

  let xValues = [];
  let yValues = [];
  for (let i = 0; i < xyPairs.length; i++) {
    xValues.push(xyPairs[i].x);
    yValues.push(xyPairs[i].y);
  }

  const shapes = [];
  const annotations = [];

  xValues.forEach(value => {
       if (value === 300) {
        shapes.push({
          type: 'line',
           xref: 'x',
           yref: 'paper',
          x0: value,
          y0: 0.03,
          x1: value,
          y1: 1,
          line: {
            color: 'gray',
            width: 1,
            dash: 'solid'
            
          },
          
        });
        annotations.push({
          xref: 'x',
          yref: 'y',
          x: 300,
          y: 100,
          text: '21<sup>0</sup>',
          textangle: '-90',
          textposition:'top',
          yshift: 10,
          showarrow: false
        });
      } else if (value === 350) {
          shapes.push({
            type: 'line',
            xref: 'x',
            yref: 'paper',
            x0: value,
            y0: 0.07,
            x1: value,
            y1: 1,
            line: {
              color: 'gray',
              width: 1,
              dash: 'solid'
            } 
          });
          annotations.push({
            xref: 'x',
            yref: 'y',
            x: 350,
            y: 100,
            text: '31<sup>0</sup>',
            textangle: '-90',
            textposition:'top',
            yshift: 10,
            showarrow: false
          });
      } else if (value === 400) {
          shapes.push({
            type: 'line',
            xref: 'x',
            yref: 'paper',
            x0: value,
            y0: 0.14,
            x1: value,
            y1: 1,
            line: {
              color: 'gray',
              width: 1,
              dash: 'solid'
            } 
          });
          annotations.push({
            xref: 'x',
            yref: 'y',
            x: 400,
            y: 100,
            text: '46<sup>0</sup>',
            textangle: '-90',
            textposition:'top',
            yshift: 10,
            showarrow: false
          });
      } else if (value === 450) {
          shapes.push({
            type: 'line',
            xref: 'x',
            yref: 'paper',
            x0: value,
            y0: 0.29,
            x1: value,
            y1: 1,
            line: {
              color: 'gray',
              width: 1,
              dash: 'solid'
            } 
          });
          annotations.push({
            xref: 'x',
            yref: 'y',
            x: 450,
            y: 100,
            text: '67<sup>0</sup>',
            textangle: '-90',
            textposition:'top',
            yshift: 10,
            showarrow: false
          });
      } else if (value === 500) {
          shapes.push({
            type: 'line',
            xref: 'x',
            yref: 'paper',
            x0: value,
            y0: 0.55,
            x1: value,
            y1: 1,
            line: {
              color: 'gray',
              width: 1,
              dash: 'solid'
            } 
          });
          annotations.push({
            xref: 'x',
            yref: 'y',
            x: 500,
            y: 100,
            text: '96<sup>0</sup>',
            textangle: '-90',
            textposition:'top',
            yshift: 10,
            showarrow: false
          });
      } else if (value === 550) {
          shapes.push({
            type: 'line',
            xref: 'x',
            yref: 'paper',
            x0: value,
            y0: 0.80,
            x1: value,
            y1: 1,
            line: {
              color: 'gray',
              width: 1,
              dash: 'solid'
            } 
          });
          annotations.push({
            xref: 'x',
            yref: 'y',
            x: 550,
            y: 100,
            text: '126<sup>0</sup>',
            textangle: '-90',
            textposition:'top',
            yshift: 10,
            showarrow: false
          });
      } else if (value === 600) {
          shapes.push({
            type: 'line',
            xref: 'x',
            yref: 'paper',
            x0: value,
            y0: 0,
            x1: value,
            y1: 1,
            line: {
              color: 'gray',
              width: 1,
              dash: 'dot'
            } 
          });
          annotations.push({
            xref: 'x',
            yref: 'y',
            x: 600,
            y: 100,
            text: '162<sup>0</sup>',
            textangle: '-90',
            textposition:'top',
            yshift: 10,
            showarrow: false
          });
          annotations.push({
            xref: 'x',
            yref: 'y',
            x: 600,
            y: 10,
            text: 'Half Wave Voltage[600V]',
            textangle: '-90',
            textposition:'bottom',
            yshift: 55,
            xshift:10,
            showarrow: false
          });
      } else if (value === 650) {
          shapes.push({
            type: 'line',
            xref: 'x',
            yref: 'paper',
            x0: value,
            y0: 0.91,
            x1: value,
            y1: 1,
            line: {
              color: 'gray',
              width: 1,
              dash: 'solid'
            } 
          });
          annotations.push({
            xref: 'x',
            yref: 'y',
            x: 650,
            y: 100,
            text: '147<sup>0</sup>',
            textangle: '-90',
            textposition:'top',
            yshift: 10,
            showarrow: false
          });
      } else if (value === 700) {
          shapes.push({
            type: 'line',
            xref: 'x',
            yref: 'paper',
            x0: value,
            y0: 0.55,
            x1: value,
            y1: 1,
            line: {
              color: 'gray',
              width: 1,
              dash: 'solid'
            } 
          });
          annotations.push({
            xref: 'x',
            yref: 'y',
            x: 700,
            y: 100,
            text: '95<sup>0</sup>',
            textangle: '-90',
            textposition:'top',
            yshift: 10,
            showarrow: false
          });
      } else if (value === 750) {
          shapes.push({
            type: 'line',
            xref: 'x',
            yref: 'paper',
            x0: value,
            y0: 0,
            x1: value,
            y1: 1,
            line: {
              color: 'gray',
              width: 1,
              dash: 'dot'
            } 
          });
          annotations.push({
            xref: 'x',
            yref: 'y',
            x: 750,
            y: 100,
            text: '13<sup>0</sup>',
            textangle: '-90',
            textposition:'top',
            yshift: 10,
            showarrow: false
          });
      } else if (value === 800) {
          shapes.push({
            type: 'line',
            xref: 'x',
            yref: 'paper',
            x0: value,
            y0: 0.29,
            x1: value,
            y1: 1,
            line: {
              color: 'gray',
              width: 1,
              dash: 'solid'
            } 
          });
          annotations.push({
            xref: 'x',
            yref: 'y',
            x: 800,
            y: 100,
            text: '64<sup>0</sup>',
            textangle: '-90',
            textposition:'top',
            yshift: 10,
            showarrow: false
          });
      } else if (value === 850) {
          shapes.push({
            type: 'line',
            xref: 'x',
            yref: 'paper',
            x0: value,
            y0: 0.85,
            x1: value,
            y1: 1,
            line: {
              color: 'gray',
              width: 1,
              dash: 'solid'
            } 
          });
          annotations.push({
            xref: 'x',
            yref: 'y',
            x: 850,
            y: 100,
            text: '135<sup>0</sup>',
            textangle: '-90',
            textposition:'top',
            yshift: 10,
            showarrow: false
          });
      } else if (value === 900) {
          shapes.push({
            type: 'line',
            xref: 'x',
            yref: 'paper',
            x0: value,
            y0: 0.86,
            x1: value,
            y1: 1,
            line: {
              color: 'gray',
              width: 1,
              dash: 'solid'
            } 
          });
          annotations.push({
            xref: 'x',
            yref: 'y',
            x: 900,
            y: 100,
            text: '138<sup>0</sup>',
            textangle: '-90',
            textposition:'top',
            yshift: 10,
            showarrow: false
          });
      } else if (value === 950) {
          shapes.push({
            type: 'line',
            xref: 'x',
            yref: 'paper',
            x0: value,
            y0: 0.20,
            x1: value,
            y1: 1,
            line: {
              color: 'gray',
              width: 1,
              dash: 'solid'
            } 
          });
          annotations.push({
            xref: 'x',
            yref: 'y',
            x: 950,
            y: 100,
            text: '51<sup>0</sup>',
            textangle: '-90',
            textposition:'top',
            yshift: 10,
            showarrow: false
          });
      } else if (value === 1000) {
          shapes.push({
            type: 'line',
            xref: 'x',
            yref: 'paper',
            x0: value,
            y0: 0.30,
            x1: value,
            y1: 1,
            line: {
              color: 'gray',
              width: 1,
              dash: 'solid'
            } 
          });
          annotations.push({
            xref: 'x',
            yref: 'y',
            x: 1000,
            y: 100,
            text: '69<sup>0</sup>',
            textangle: '-90',
            textposition:'top',
            yshift: 10,
            showarrow: false
          });

      } 
      
    });
    annotations.push({
      x: 1000,
      y: 100,
      text: 'Phase Shift: Δ/2=sin<sup>-1</sup>√I/I<sub>0</sub> (degree)',
      showarrow: true,
      arrowhead: 7,
      ax: 100,
      ay: 0,
      xshift: 20,
      
    }); 
    
    // console.log('Before sort:', shapes);
    // shapes.sort(function(a, b) {
    //   return a.x0 - b.x0;
    // });
    // console.log('After sort:', shapes);
    

  Plotly.newPlot('IBgraph', [{ 
      x: xValues,
      y: yValues,
      mode: 'lines+markers',
      name: 'linear',
      line: {shape: 'spline'},
      type: 'scatter',
      textposition: 'top center', // choose the position of the labels
      title:'graph',
      textfont: {
        family: 'Arial',
        size: 12,
        color: 'black'
      },
  }], {
      legend: {
          y: 0.5,
          traceorder: 'reversed',
          font: {size: 16},
          yref: 'paper',
          
          
      },
      title: {
        text: 'I/I<sub>0</sub> vs V Graph', // set the title text
        font: {
          size: 24 ,// set the title font size
          textposition:'center'
        }
        
      },
      xaxis: {
          title: {
              text: 'Voltage (v)',
              
              font: {
                  size: 14,
              }
          },
          showline:true,
      },
      yaxis: {
          title: {
              text: 'Relative Luminous Intensity (I/I<sub>0</sub>)',
              
              font: {
                  size: 14,
              }
          },
          tickvals: [0, 10, 20, 30, 40, 50,60,70,80,90,100],
          range: [0,100],
          showline:true,
      },
      
      shapes: shapes,
      annotations: annotations,

     
        

      
  });
  
}  
  
      

//help button      
function help() {
    document.getElementById('instructions').style.display = 'block';
    // document.getElementById('close1').style.display = 'block';
}
let result;




let data = {
  "300":[9 * 10 ** 4,0.043,0.03399,0.00059,0.1854,10.629,21.259],
  "350":[12.25 * 10 ** 4,0.09,0.0711,0.0012, 0.2700,15.477,30.955],
  "400":[16 * 10 ** 4,0.19, 0.1501,0.0026,0.3979,22.813,46.627],
  "450":[20.25 * 10 ** 4,0.385,0.3043,0.0053,0.5843,33.499,66.998],
  "500":[25 * 10 ** 4,0.695, 0.5494,0.0095,0.8348,47.859,95.719],
  "550":[30.25 * 10 ** 4,1.005,0.7944,0.0138,1.100,63.072,126.14 ], 
  "600":[36 * 10 ** 4,1.235,0.9762,0.0170,1.416,81.182,162.36],
  "650":[42.25 * 10 ** 4,1.165,0.9209,0.0160,1.285,73.707,212.58 ],
  "700":[49 * 10 ** 4, 0.685,0.5415,0.00944,0.2869,47.404,265.19],
  "750":[56.25 * 10 **4,0.017,0.0134,0.00023,0.1161,6.660,346.67],
  "800":[64 * 10 ** 4,0.355,0.2806,0.0048,0.5583,32.004,424], 
  "850":[72.25 * 10 **4,1.085,0.8577,0.0149, 1.184,67.873,495.40],
  "900":[81 *10 **4, 1.105,0.8735,0.0152,1.207,69.202,582],
  "950":[90.25 * 10 ** 4, 0.235,0.1857,0.0032,0.4456,25.544,669],
  "1000":[10 * 10 ** 5,0.405,0.3201,0.0055,0.6014,34.477,789],
}

function fresult() {
    document.getElementById('tfreq').innerHTML = tfreq + " ms";
    document.getElementById('pfreq').innerHTML = pfreq + " ms";
}
function storeNumber() {
   res= document.getElementById("exp1").value;
   //Rf=29*res;
   //Rf= Rf.toFixed(2);
   cap= document.getElementById("exp2").value;
   document.getElementById("insert").disabled = false;
   calculate(); 
}

function equation(x) {
    return 5* Math.sin(2 * 10(Math.pow(-6)) * pfreq * x);
}


function note2(){
  document.getElementById("note2").style.display = 'block'; 
  document.getElementById("circuit1").style.filter = 'blur(0px)';  
  document.getElementById("circuit2").style.filter = 'blur(0px)';
  document.getElementById("circuit3").style.filter = 'blur(0px)';
  document.getElementById("circuit4").style.filter = 'blur(0px)';  
  document.getElementById("circuit5").style.filter = 'blur(0px)';
  document.getElementById("circuit6").style.filter = 'blur(0px)';
  document.getElementById("circuit7").style.filter = 'blur(0px)';  
  document.getElementById("circuit8").style.filter = 'blur(0px)';
  document.getElementById("circuit9").style.filter = 'blur(0px)';
  document.getElementById("circuit10").style.filter = 'blur(0px)';
  document.getElementById("circuit11").style.filter = 'blur(0px)';
  document.getElementById("circuit12").style.filter = 'blur(0px)';
}

function insert() {
  document.getElementById("insert").style.display = 'block';
    document.getElementById("note1").style.display = 'block';
      

}

function fade(){
  document.getElementById("circuit1").style.filter = 'blur(2px)';  
  document.getElementById("circuit2").style.filter = 'blur(2px)';
  document.getElementById("circuit3").style.filter = 'blur(2px)';
  document.getElementById("circuit4").style.filter = 'blur(2px)';  
  document.getElementById("circuit5").style.filter = 'blur(2px)';
  document.getElementById("circuit6").style.filter = 'blur(2px)';
  document.getElementById("circuit7").style.filter = 'blur(2px)';  
  document.getElementById("circuit8").style.filter = 'blur(2px)';
  document.getElementById("circuit9").style.filter = 'blur(2px)';
  document.getElementById("circuit10").style.filter = 'blur(2px)';
  document.getElementById("circuit11").style.filter = 'blur(2px)';
  document.getElementById("circuit12").style.filter = 'blur(2px)';
  document.getElementById("circuit13").style.filter = 'blur(2px)';
  document.getElementById("circuit14").style.filter = 'blur(2px)';
}

function note1(){
  document.getElementById("insert").disabled=true;
  document.getElementById("note1").style.display = 'none';
  fade();
  setTimeout(function(){
      document.getElementById("sim3").style.display = 'block';
      document.getElementById("sim2").style.display = 'block';
      document.getElementById("sim18").style.display = 'block';
      document.getElementById("notee").style.display = 'block';
      document.getElementById("sim1").style.animation =
            "moveSq 2s forwards";
      document.getElementById("sim2").style.animation =
            "moveBgMount 2s forwards";
      document.getElementById("sim18").style.animation =
            "moveArrow 2s forwards";
      document.getElementById("notee").style.animation =
            "moveAngle 2s forwards";      
        setTimeout(function(){
          document.getElementById("sim3").style.display = 'none';
          document.getElementById("sim2").style.display = 'none';
          document.getElementById("notee").style.display = 'none';
          document.getElementById("sim18").style.display = 'none';
          note2();
        },4500);
             
  },800);


        
}

function ok2(){
    document.getElementById("note2").style.display = 'none'; 
    setTimeout(function(){
      document.getElementById("sim15").style.display = 'block'; 
      document.getElementById("sim15").style.animation =
      "move_Hand 1.5s forwards"; 
     setTimeout(function(){
      document.getElementById("circuit3").style.display = 'none';
      document.getElementById("sim15").style.display = 'none';  
      document.getElementById("sim16").style.display = 'block';
      document.getElementById("sim17").style.display = 'block';
      setTimeout(function(){
        document.getElementById("sim17").style.animation="move_Pin 1.5s forwards"
        setTimeout(function(){
          document.getElementById("sim17").style.display = 'none';
          document.getElementById("sim16").style.display = 'none';
          document.getElementById("circuit4").style.display = 'none';
          document.getElementById("circuit13").style.display = 'block';
          document.getElementById("circuit14").style.display = 'block';
          light();
        },1600);  
      },1000);
     },1100);
    },1000);
    
}

function note3(){
  document.getElementById("note3").style.display = 'block'; 
  document.getElementById("grad1").style.display="none"
  document.getElementById("circuit1").style.filter = 'blur(0px)';  
  document.getElementById("circuit2").style.filter = 'blur(0px)';
  document.getElementById("circuit3").style.filter = 'blur(0px)';
  document.getElementById("circuit4").style.filter = 'blur(0px)';  
  document.getElementById("circuit5").style.filter = 'blur(0px)';
  document.getElementById("circuit6").style.filter = 'blur(0px)';
  document.getElementById("circuit7").style.filter = 'blur(0px)';  
  document.getElementById("circuit8").style.filter = 'blur(0px)';
  document.getElementById("circuit9").style.filter = 'blur(0px)';
  document.getElementById("circuit10").style.filter = 'blur(0px)';
  document.getElementById("circuit11").style.filter = 'blur(0px)';
  document.getElementById("circuit12").style.filter = 'blur(0px)';
  document.getElementById("fieldvalue").style.filter = 'blur(0px)';
  document.getElementById("circuit13").style.filter='blur(0px)';
  document.getElementById("circuit14").style.filter='blur(0px)';
}

function light(){
 
fade();
    setTimeout(function(){

        document.getElementById("sim3").style.display = 'block';  
        document.getElementById("sim4").style.display = 'block';
        document.getElementById("sim3").style.animation =
        "moveSq 2s forwards";
        document.getElementById("sim4").style.animation =
        "moveApp 2s forwards";
            setTimeout(function(){
                document.getElementById("sim6").style.display = 'block'
                document.getElementById("sim6").style.animation =
                "moveHand 1.5s forwards";
                setTimeout(function(){
                    document.getElementById("sim4").style.display='none';
                    document.getElementById("sim7").style.display='block';
                    document.getElementById("grad1").style.display='';
                    document.getElementById("grad1").style.animation =
                    "moveGd 2s forwards";
       
                    setTimeout(function(){
                        document.getElementById("sim3").style.display = 'none';  
                        document.getElementById("sim4").style.display = 'none'; 
                        document.getElementById("sim6").style.display = 'none'
                        document.getElementById("sim7").style.display='none';
                        document.getElementById("circuit3").style.display='none';
                        document.getElementById("sim13").style.display='block';
                        note3();  
                    },5000); 
                },1800);
            },1500);
    },1000);
}

function ok3(){
  document.getElementById("note3").style.display = 'none'; 

  document.getElementById("fieldvalue").style.display='block'; 
  document.getElementById("fieldvalue").innerText = '0'; 
  document.getElementById("field").style.display='block';
  document.getElementById("field").innerText = '0'; 
  document.getElementById("unit").style.display='block';

  note4();
}

function note4(){  
  document.getElementById("note4").style.display = 'block';     
}

function ok4(){
  document.getElementById("note4").style.display = 'none'; 
  document.getElementById("sim13").style.filter = 'blur(2px)';
  document.getElementById("unit").style.filter = 'blur(2px)';
  document.getElementById("field").style.filter = 'blur(2px)';
  document.getElementById("fieldvalue").style.display='none'; 
  fade();
  setTimeout(function(){
      document.getElementById("sim3").style.display = 'block';  
      document.getElementById("sim8").style.display = 'block';  
      document.getElementById("sim3").style.animation =
      "moveSq 2s forwards";
      document.getElementById("sim8").style.animation =
      "moveAnn 2s forwards";
        setTimeout(function(){
            document.getElementById("sim10").style.display = 'block'; 
            document.getElementById("sim10").style.animation =
          "moveAnalyser 2s forwards";
          setTimeout(function(){
            document.getElementById("sim8").style.display = 'none'; 
            document.getElementById("sim10").style.display = 'none'; 
            document.getElementById("sim9").style.display = 'block'; 
            document.getElementById("sim11").style.display = 'block';
            setTimeout(function(){
              document.getElementById("sim11").style.animation =
            "movePin 1s forwards";
            document.getElementById("sim11").tranformOrigin="50% 50%"

              setTimeout(function(){
                document.getElementById("sim9").style.display = 'none';
                document.getElementById("sim11").style.display = 'none';
                document.getElementById("sim12").style.display = 'block';
                setTimeout(function(){
                  document.getElementById("sim3").style.display = 'none'; 
                  document.getElementById("sim12").style.display = 'none';
                  document.getElementById("circuit13").style.display = 'none';
                  
                  setup();
                  document.getElementById("sim13").style.display='none';
                  document.getElementById("sim14").style.display='block'
                  note5();
                  document.getElementById("sim14").style.filter = 'blur(0px)';
                  document.getElementById("unit").style.filter = 'blur(0px)';
                  document.getElementById("field").style.filter = 'blur(0px)';
                  
                  },2200);
              },2100);
            },2000); 
          },1000);
        },1000);
      
      
  },1000);

}

function note5(){
  document.getElementById("note5").style.display = 'block'; 
}

function ok5(){  
  document.getElementById("note5").style.display = 'none'; 
  enable();    
}

function enable(){
  
  document.getElementById("addbutton").disabled = false;
    document.getElementById("observationbutton").disabled = false;
    document.getElementById("cslider").style.opacity = '1';
    document.getElementById("cslider").disabled = false; 
    document.getElementById("fieldvalue").innerText = cslider.value;
    document.getElementById("fieldvalue").style.display='block'; 
    document.getElementById("field").innerText = data[cslider.value][1];
    document.getElementById("field").style.display='block'; 

}

function setup(){
  document.getElementById("circuit1").style.filter = 'blur(0px)';  
  document.getElementById("circuit2").style.filter = 'blur(0px)';
  document.getElementById("circuit3").style.filter = 'blur(0px)';
  document.getElementById("circuit4").style.filter = 'blur(0px)';  
  document.getElementById("circuit5").style.filter = 'blur(0px)';
  document.getElementById("circuit6").style.filter = 'blur(0px)';
  document.getElementById("circuit7").style.filter = 'blur(0px)';  
  document.getElementById("circuit8").style.filter = 'blur(0px)';
  document.getElementById("circuit9").style.filter = 'blur(0px)';
  document.getElementById("circuit10").style.filter = 'blur(0px)';
  document.getElementById("circuit11").style.filter = 'blur(0px)';
  document.getElementById("circuit12").style.filter = 'blur(0px)';
  document.getElementById("circuit13").style.filter = 'blur(0px)';
  document.getElementById("circuit14").style.filter = 'blur(0px)';
}

let cslider = document.getElementById("cslider");
let coutput = document.getElementById("currentvalue");
let coutput1 = document.getElementById("fieldvalue");
let coutput2 = document.getElementById("field");
coutput.innerHTML = cslider.value;
coutput1.innerHTML = cslider.value;
coutput2.innerHTML=data[cslider.value][1]
cslider.oninput = function () {
    coutput.innerHTML = this.value;
    coutput1.innerHTML = this.value;
    coutput2.innerHTML = data[this.value][1];
}

function slider_reset() {
    document.getElementById('currentvalue').innerText = "300";
    document.getElementById('cslider').value = 300;
  
}   

function hallcovalue(){
  document.getElementById('calculate').style.display = 'block';
  document.getElementById('coefficientvalue').style.display='block'
  document.getElementById('kerConst').style.display='flex'
  document.getElementById('eq').style.display = 'block';
  document.getElementById('eq5').style.display = 'block';
  document.getElementById('eq2').style.display = 'block';
  document.getElementById('eq3').style.display = 'block';
  document.getElementById('eq4').style.display = 'block';
  document.getElementById('eq6').style.display = 'block';
}