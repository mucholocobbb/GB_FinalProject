const state = {
  serviceArr: [
    {
      title: "",
      timeLimit: 60,
    },
    {
      title: "Удаление тату. Малый размер",
      timeLimit: 30,
    },
    {
      title: "Удаление тату. Большой размер",
      timeLimit: 60,
    },
    {
      title: "Сеанс-тату. Малый размер",
      timeLimit: 30,
    },
    {
      title: "Сеанс-тату. Средний размер",
      timeLimit: 30,
    },
    {
      title: "Сеанс-тату. Большой размер",
      timeLimit: 60,
    },
  ],
  timeLimits: [15, 30, 45, 60],
  workTime: {
      from: '10:00',
      to: '20:00',
  },
  workTimeList:[],
};

const getters = {
    getServiceArr: state => state.serviceArr,
    getTimeLimits: state => state.timeLimits,
    getWorkTime: state => state.workTime,
    getWorkTimeList: state => state.workTimeList
};

const mutations = {
    setWorkTimeList(state, array) {
        state.workTimeList = array
    }
};

const actions = {};

export default {
  state,
  mutations,
  getters,
  actions,
};
