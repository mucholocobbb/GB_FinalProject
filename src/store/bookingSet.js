const state = {
    slotList: [
        {
          time: "10:00",
          service: "Сеанс-тату. Средний размер",
          name: "Антон Александров",
          phone: "8-999-544-01-40",
          comment: "Татуировка дракона - спина, взять обезбол",
          status: "past",
          isFree: false,
        },
        {
          time: "11:00",
          service: "",
          name: "",
          phone: "",
          comment: "",
          status: "freeslot",
          isFree: true,
        },
        {
          time: "12:00",
          service: "Удаление тату. Малый размер",
          name: "Елена Дмитриева",
          phone: "8-999-544-01-40",
          comment: "",
          status: "pass",
          isFree: false,
        },
        {
          time: "13:00",
          service: "Сеанс-тату. Большой размер",
          name: "Илья Иванов",
          phone: "8-999-544-01-40",
          comment: "Парковка фольксваген т143ов77",
          status: "masterbook",
          isFree: false,
        },
        {
          time: "14:00",
          service: "",
          name: "",
          phone: "",
          comment: "",
          status: "freeslot",
          isFree: true,
        },
        {
          time: "15:00",
          service: "",
          name: "",
          phone: "",
          comment: "",
          status: "freeslot",
          isFree: true,
        },
        {
          time: "16:00",
          service: "",
          name: "Дмитрий",
          phone: "8-999-544-01-40",
          comment: "Хочет партаки",
          status: "clientbook",
          isFree: false,
        },
        {
          time: "17:00",
          service: "",
          name: "",
          phone: "",
          comment: "",
          status: "freeslot",
          isFree: true,
        },
      ],
} 

const getters = {
    getSlotList: state => state.slotList,
}

const mutations = {
    setSlotList(state, newItem) {
        state.slotList[newItem.index] = newItem.item
        state.slotList = [...state.slotList]
    }
}

const actions = {
}

export default {
    state,
    mutations,
    getters,
    actions
}