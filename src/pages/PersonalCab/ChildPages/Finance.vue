<template>
  <div>
    <h1>Отчёт о финансах</h1>
    <canvas ref="financeChart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'

const financeParams = {
  type: "line",
  data: {
    labels: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    datasets: [
        {
          label: "",
          data: [],
          backgroundColor: "rgba(71, 183,132,.5)",
          borderColor: "#47b784",
          borderWidth: 3
        },
        {
          label: "",
          data: [],
          backgroundColor: "rgba(54,73,93,.5)",
          borderColor: "#36495d",
          borderWidth: 3
        },
    ]
  },
  options: {
    responsive: true,
    lineTension: 1,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            padding: 25
          }
        }
      ]
    }
  }
};

const dataMock = [
  {
    label: "Услуги в 2021 году",
    data: [70000, 65000, 58000, 64000, 69000, 72000, 78000, 70000, 60000, 55000, 65000, 70000],
  },
  {
    label: "Услуги в 2022 году",
    data: [75000, 73000, 64000, 69000,],
  }
]

export default {
    name: 'financeChart',
    data() {
        return {
            financeParams,
        }
    },
    methods: {
        fetchMock() {
          // идёт загрузка с сервера и приходит массив объектов {label: string, data: Array}
          dataMock.forEach((item, index) => {
            this.financeParams.data.datasets[index].label = dataMock[index].label;
            this.financeParams.data.datasets[index].data = dataMock[index].data;
          })
          
          new Chart(this.$refs.financeChart, this.financeParams);
        },
    },
    mounted() {
        this.fetchMock();
    }
}
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
}
</style>