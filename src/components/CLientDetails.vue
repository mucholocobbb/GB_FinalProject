<template>
  <div class="client_modal">
    <div class="client_modal_win">
      <h3 class="client_modal_headtext">Данные записи</h3>
      <form class="form" @keypress.enter.prevent>
        <div class="form_leftblock">
          <div class="form_fio form_itemblock">
            <input class="form_input" id="name" type="text" v-model="name" />
            <label class="form_label" for="name">ФИО</label>
          </div>
          <div class="form_serviceselect form_itemblock">
            <select class="form_input" id="service" v-model="serviceSelect">
              <option v-for="(option, index) of serviceArr" :key="index">
                {{ option.title }}
              </option>
            </select>
            <label class="form_label" for="service">Услуга</label>
          </div>
          <div class="form_textarea form_itemblock">
            <textarea
              class="form_input form_textarea"
              name="comment"
              id="comment"
              v-model="comment"
              placeholder="Введите комментарий"
            ></textarea>
            <label class="form_label" for="comment">Комментарий</label>
          </div>
        </div>
        <div class="form_rightblock">
          <div class="form_phone form_itemblock">
            <input class="form_input" id="phone" type="text" v-model="phone" />
            <label class="form_label" for="phone">Телефон</label>
          </div>
          <div class="form_date form_itemblock">
            <input class="form_input" id="date" type="date" v-model="date" />
            <label class="form_label" for="date">Дата</label>
          </div>
          <div class="form_time form_itemblock">
            <input class="form_input" id="time" type="time" v-model="time" />
            <label class="form_label" for="time">Время</label>
          </div>
          <div class="form_stime form_itemblock">
            <select class="form_input" id="stime" v-model="serviceTime">
              <option v-for="(time, index) of timeLimits" :key="index">
                {{ time }}
              </option>
            </select>
            <label class="form_label" for="stime">Длительность</label>
          </div>
        </div>
      </form>
      {{ date }}
      <div class="client_modal__btnblock">
        <button
          @click="setItem"
          class="client_modal_savebutton client_modal_btn"
        >
          СОХРАНИТЬ
        </button>
        <button
          @click="closeModal"
          class="client_modal_closebutton client_modal_btn"
        >
          ОТМЕНА
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClientDetails",
  props: {
    actualItem: {
      type: Object,
      required: true,
    },
    actualIndex: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      date: "",
      time: "",
      service: "",
      name: "",
      phone: "",
      comment: "",
      status: "",
      isFree: false,
      serviceTime: 60,
      serviceSelect: "",
      serviceArr: [
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
    };
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    setItem(event){
        console.log(event);
        let newItem = {
            time: this.time,
            service: this.service,
            name: this.name,
            phone: this.phone,
            comment: this.comment,
            status: this.status,
            isFree: this.isFree
        }
    }
  },
  mounted() {
    this.time = this.actualItem.time;
    this.name = this.actualItem.name;
    this.service = this.actualItem.service;
    this.phone = this.actualItem.phone;
    this.comment = this.actualItem.comment;
    this.status = this.actualItem.status;
    this.isFree = this.actualItem.isFree;
    if (this.service != "") {
      ({ title: this.serviceSelect, timeLimit: this.serviceTime } =
        this.serviceArr.filter((item) => {
          return item.title == this.service;
        })[0]);
    }
  },
};
</script>

<style lang="scss" scoped>
.client_modal {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: rgb(181 205 205 / 50%);
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  &_win {
    width: 720px;
    height: 420px;
    background-color: rgba(224, 224, 224, 1);
    box-shadow: 0 0 20px -10px black;
    display: flex;
    flex-direction: column;
  }
  &_headtext {
    margin: 16px;
    align-self: center;
  }
  &__btnblock {
    margin: 16px;
    align-self: center;
  }
  &_btn {
    width: 100px;
    height: 40px;
    color: white;
    font-size: 14px;
    background-color: rgba(117, 174, 241, 1);
    margin: 8px;
    border-radius: 10px;
  }
  &_closebutton {
    transition: all 0.2s;
    &:hover {
      background-color: rgba(243, 109, 109, 1);
      box-shadow: 0 0 14px -6px black;
    }
    &:active {
      background-color: rgba(243, 109, 109, 0.5);
    }
  }
  &_savebutton {
    transition: all 0.4s;
    &:hover {
      background-color: rgba(171, 237, 170, 1);
      box-shadow: 0 0 10px -6px black;
    }
    &:active {
      background-color: rgba(171, 237, 170, 0.5);
    }
  }
  .form {
    display: flex;
    justify-content: center;
    margin: auto 0;
    &_leftblock {
      margin-right: 32px;
    }
    &_input {
      width: 200px;
      height: 32px;
      border-radius: 10px;
      padding-left: 8px;
      padding-right: 8px;
    }
    &_itemblock {
      margin: 8px;
    }
    &_textarea {
      padding-top: 8px;
      height: 74px;
    }
    &_label {
      margin: 8px;
      color: rgba(98, 98, 98, 1);
      font-size: 12px;
    }
  }
}
</style>
