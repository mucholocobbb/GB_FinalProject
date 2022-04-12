<template>
    <div class="client_modal">
      <div class="client_modal_win">
          <button @click="closeModal" class="client_modal_closedbutton"> Закрыть </button>
          {{actualItem}}
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
    }
},
methods: {
    closeModal() {
        this.$emit("closeModal")
    }
},

}
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
    width: 640px;
    height: 360px;
    background-color: rgba(224, 224, 224, 1);
    box-shadow: 0 0 20px -10px black;
    display: flex;
    flex-direction: column;
  }
  &_closedbutton {
   align-self: end;
   &:hover {
       color: red;
   }
  }
}
</style>