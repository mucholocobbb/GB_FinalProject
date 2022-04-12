<template>
    <!-- <div class="row mt-5">
        <div class="offset-2 col-8">
            <ul class="progressbar">
                <li v-for="(status, key) in statuses"
                    :class="{'active': key <= statusId }"
                >
                    {{ translations[status] }}
                </li>
            </ul>
        </div>
    </div> -->

    <div class="test">
      <div class="booking_blocks">
        <div class="master_info" v-if="userName">
        <div class="master_name">{{userName}}</div>
        <div class="master_profession">{{profession}}</div>
      </div>

        <div class="workday">
        <div class="workday_text">Рабочий день {{selected_day}} ({{start_time}}:00-{{end_time}}:00)</div>
        <a class="workday_edit" href="#">Изменить</a>
      </div>

        <div v-for="time in timeIntervals" :key="time">
          <div class="event" v-if="findEvent(time)">
            <div class="client_time">{{ findEvent(time).datetime.split(/[- :]/)[3] }} :
              {{ findEvent(time).datetime.split(/[- :]/)[4] }}
            </div>
            <div class="event_info">
              <div class="client_name">{{ findEvent(time).name }} {{ findEvent(time).lastname }}</div>
              <div class="event_service">{{ findEvent(time).service.name }}</div>
            </div>
          </div>

          <div class="event empty" v-else>
            <div class="client_time">{{ time }} : 00</div>
            <div class="event_info">
              <div class="client_name"></div>
              <div class="event_service"></div>
            </div>
          </div>

          <!--<div class="event" v-for="event in events" :key="event.id">
            <div class="client_time">{{ event.datetime.split(/[- :]/)[3] }} : {{ event.datetime.split(/[- :]/)[4] }}</div>
            <div class="event_info">
              <div class="client_name">{{ event.name }} {{ event.lastname }}</div>
              <div class="event_service">{{ event.service.name }}</div>
            </div>
          </div>-->
        </div>
       <!-- <img class="img" src="@/assets/BookingPlaceholder.png" alt="111">-->

      </div>
  </div>
</template>

<script>
    import axios from "@/api/axios";

    export default {
        name: 'BookingTable',
      data() {
        return {
          events: null,
          userName: null,
          error: null,
          masterInfo: null,
          profession: "Tattoo-artist",
          selected_day: "11-04-2022",
          start_time: 10,
          end_time: 19,
          timeIntervals: [9,10,11,12,13,14,15,16,17,18,19],//сделать вычисляемым

        }
      },
      created() {

          this.getUserInfo();
      },
      methods: {
        findEvent(time){
          let el = this.events?.find(el => parseInt(el.datetime.split(/[- :]/)[3]) === time);
          if(el){
            return el;
          } else {
            return false
          }


        },
        getUserInfo(){
          axios.get('/sanctum/csrf-cookie').then(() => {
            //запрос всех событий
            // axios.get('api/master/events').then(res=>{
            //   this.events = res.data.events;
            //   this.userName = this.events[0].user.name;
            //   console.log(res.data.events[0]);
            // })

            //запрос событий на дату
            axios.post('api/master/events/oneday', {day: '2022-05-11'}).then(res=>{
              console.log(res.data);
              this.events = res.data.eventsoneday;
              this.userName = this.events[0].user.name;
              console.log(res.data.eventsoneday[0]);
            })
          })
        },


      },


    }
</script>

<style scoped>
.test {
    height: 100%;
}
.booking_blocks {
  background-color: #FFFFFF;
}
.master_info {
  background-color: #E2D8D8;
  min-height: 61px;
  padding: 17px;
  margin-bottom: 9px;
}
.master_name {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #000000;
}
.master_profession {
  text-align: center;
  color: #afafaf;
  font-size: 12px;

}
.workday {
  background-color: #E0E0E0;
  min-height: 61px;
  padding: 17px;
  margin-bottom: 9px;
}
.workday_text {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #000000;
}
.workday_edit {
  display: block;
  color: #afafaf;
  font-size: 12px;
  text-align: center;
}

.event {
  display: flex;
  background: rgba(171, 237, 170, 0.5);
  min-height: 61px;
  padding: 17px;
  border-bottom: 0.2px solid #999191;
}
.empty {
  background: #FFFFFF;
  outline: 0.2px solid #999191;
  box-sizing: border-box;
}

.client_time {
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
}
.event_info {
  margin-left: 49px;
}
.event_service{
  display: block;
  color: #afafaf;
  font-size: 12px;
  text-align: center;
}

.img {
    width: 100%;
}
</style>
