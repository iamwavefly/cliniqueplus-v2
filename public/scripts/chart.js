// gradient.addColorStop(1, 'rgba(0, 199, 214, 0)');
new Chart(document.getElementById("myChart"), {
    type: 'bar',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          // -------------------LINE OUTPATIENT------------------
          label: "Outpatient",
          type: "line",
          borderColor: "rgba(255, 153, 102, 0.4)",
            pointBackgroundColor: 'rgba(255, 153, 102, 0.4)',
          data: [408,547,675,734,200,212,233,500,233,900,200,400],
          fill: false
        }, 
        {
          // -------------------LINE INPATIENT------------------
          label: "Inpatient",
          type: "line",
          borderColor: "rgba(237, 50, 56, 0.521)",
            pointBackgroundColor: 'rgba(237, 50, 56, 0.521)',
          data: [133,221,783,2478,300,400,600,200,200,300,400,425],
          fill: false
        }, 
        {
          // -------------------BAR OUTPATIENT------------------
          label: "Outpatient",
          type: "bar",
          backgroundColor: "rgba(255, 153, 102, 0.4)",
          data: [408,547,675,734,200,212,233,500,233,900,200,400],
        }, 
        {
          // -------------------BAR INPATIENT------------------
          label: "Inpatient",
          type: "bar",
          backgroundColor: "#ED3237",
          backgroundColorHover: "#3e95cd",
          data: [133,221,783,2478,300,400,600,200,200,300,400,425]
        }
      ]
    },
    options: {
        animation: {
            easing: 'easeInOutQuad',
            duration: 520
        },
        scales: {
            // xAxes: [{
            //     stacked: true
            // }],
            // yAxes: [{
            //     stacked: true
            // }]
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                    },
                    gridLines: {
                        display: false,
                    }
                }],
                xAxes: [{
                    // Change here
                    barPercentage: 0.5,
                    gridLines: {
                        display: false,
                    } 
                }]
        },
        title: {
            display: false,
            text: 'Population growth (millions): Europe & Africa'
        },
        legend: { display: false },
        responsive: true,
        maintainAspectRatio: false
    }
});
// ---------------------------------------------------
//----------------FINANCIAL---------------------------
//----------------------------------------------------
new Chart(document.getElementById("chart__finance"), {
    type: 'bar',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          // -------------------LINE OUTPATIENT------------------
          label: "Income",
          type: "line",
          borderColor: "rgba(255, 153, 102, 0.4)",
            pointBackgroundColor: 'rgba(255, 153, 102, 0.4)',
          data: [408,547,675,534,400,212,133,800,233,900,200,400],
          fill: false
        }, 
        {
          // -------------------LINE INPATIENT------------------
          label: "Expenses",
          type: "line",
          borderColor: "rgba(237, 50, 56, 0.521)",
            pointBackgroundColor: 'rgba(237, 50, 56, 0.521)',
          data: [33,121,183,278,100,200,200,200,200,300,100,25],
          fill: false
        }, 
        {
          // -------------------BAR OUTPATIENT------------------
          label: "Income",
          type: "bar",
          backgroundColor: "rgba(255, 153, 102, 0.4)",
          data: [408,547,675,534,400,212,133,800,233,900,200,400],
        }, 
        {
          // -------------------BAR INPATIENT------------------
          label: "Expenses",
          type: "bar",
          backgroundColor: "#ED3237",
          backgroundColorHover: "#3e95cd",
          data: [33,121,183,278,100,200,200,200,200,300,100,25]
        }
      ]
    },
    options: {
        animation: {
            easing: 'easeInOutQuad',
            duration: 520
        },
        scales: {
            // xAxes: [{
            //     stacked: true
            // }],
            // yAxes: [{
            //     stacked: true
            // }]
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                    },
                    gridLines: {
                        display: false,
                    }
                }],
                xAxes: [{
                    // Change here
                    barPercentage: 0.7,
                    gridLines: {
                        display: false,
                    } 
                }]
        },
        title: {
            display: false,
            text: 'Population growth (millions): Europe & Africa'
        },
        legend: { display: false },
        responsive: true,
        maintainAspectRatio: false
    }
});
// ---------------------------------------------------
//----------------BY MONTH---------------------------
//----------------------------------------------------
new Chart(document.getElementById("chart-5"), {
    type: 'line',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
          // -------------------LINE OUTPATIENT------------------
          label: "Patient",
          type: "line",
          borderColor: "#147AD6",
            pointBackgroundColor: '#147AD6',
          data: [408,547,675,734,200,212, 24],
        //   fill: false
        },
      ]
    },
    options: {
        animation: {
            easing: 'easeInOutQuad',
            duration: 520
        },
        scales: {
            // xAxes: [{
            //     stacked: true
            // }],
            // yAxes: [{
            //     stacked: true
            // }]
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                    },
                    gridLines: {
                        display: false,
                    },
                    ticks: {
                        fontColor: "#f1f1f1"
                    }
                }],
                xAxes: [{
                    // Change here
                    barPercentage: 0.5,
                    gridLines: {
                        display: false,
                    },
                    ticks: {
                        fontColor: "#f1f1f1"
                    }
                }]
        },
        legend: { 
            display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
    }
});