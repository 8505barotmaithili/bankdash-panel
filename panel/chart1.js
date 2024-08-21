
const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu','Fri'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3,15],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

        const cty = document.getElementById('myChart1');

new Chart(cty, {
  type: 'doughnut',
  data: {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu','Fri'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3,15],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const ctz = document.getElementById('myChart3');

new Chart(ctz, {
  type: 'line',
  data: {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu','Fri'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3,15],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});