<template>
    <div class="page_container">       

        <div class="settings">
            <div>
                <div>
                    <div class="header_form grey_border">Личные данные</div>
                    <div></div>
                </div>

                <div class="form_border">
                    <form>
                        <input type="text" ref="name" id="name" v-model="name" placeholder="Иван Иванов" name="user_name" :disabled="!nameEdit">
                        <button class="change" type="button" v-if="!nameEdit" v-on:click="toggleName()">
                            <!-- Редактировать -->
                            <svg style="width:18px;height:18px" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                            </svg>
                        </button>
                        <button class="change" type="button" v-if="nameEdit" v-on:click="toggleName()">
                            <!-- Сохранить -->
                            <svg style="width:18px;height:18px" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M17 3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H11.81C11.42 20.34 11.17 19.6 11.07 18.84C9.5 18.31 8.66 16.6 9.2 15.03C9.61 13.83 10.73 13 12 13C12.44 13 12.88 13.1 13.28 13.29C15.57 11.5 18.83 11.59 21 13.54V7L17 3M15 9H5V5H15V9M15.75 21L13 18L14.16 16.84L15.75 18.43L19.34 14.84L20.5 16.25L15.75 21" />
                            </svg>
                        </button>
                    </form>
                    <form>
                        <input type="text" ref="address" v-model="address" placeholder="Москва, ул.Московская 6" id="adds" name="user_adds" :disabled="!addressEdit">
                        <button class="change" type="button" v-if="!addressEdit" v-on:click="toggleAddress()">
                            <!-- Редактировать -->
                            <svg style="width:18px;height:18px" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                            </svg>
                        </button>
                        <button class="change" type="button" v-if="addressEdit" v-on:click="toggleAddress()">
                            <!-- Сохранить -->
                            <svg style="width:18px;height:18px" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M17 3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H11.81C11.42 20.34 11.17 19.6 11.07 18.84C9.5 18.31 8.66 16.6 9.2 15.03C9.61 13.83 10.73 13 12 13C12.44 13 12.88 13.1 13.28 13.29C15.57 11.5 18.83 11.59 21 13.54V7L17 3M15 9H5V5H15V9M15.75 21L13 18L14.16 16.84L15.75 18.43L19.34 14.84L20.5 16.25L15.75 21" />
                            </svg>
                        </button>
                    </form>
                    <form>
                        <input type="text" ref="profession" v-model="profession" placeholder="Tattoo artist" name="user_mail"  :disabled="!professionEdit">
                        <button class="change" type="button" v-if="!professionEdit" v-on:click="toggleProfession()">
                            <!-- Редактировать -->
                            <svg style="width:18px;height:18px" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                            </svg>
                        </button>
                        <button class="change" type="button" v-if="professionEdit" v-on:click="toggleProfession()">
                            <!-- Сохранить -->
                            <svg style="width:18px;height:18px" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M17 3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H11.81C11.42 20.34 11.17 19.6 11.07 18.84C9.5 18.31 8.66 16.6 9.2 15.03C9.61 13.83 10.73 13 12 13C12.44 13 12.88 13.1 13.28 13.29C15.57 11.5 18.83 11.59 21 13.54V7L17 3M15 9H5V5H15V9M15.75 21L13 18L14.16 16.84L15.75 18.43L19.34 14.84L20.5 16.25L15.75 21" />
                            </svg>
                        </button>
                    </form>
                </div>
                
            </div>
            <div>
                <div>
                    <div class="header_form grey_border">Онлайн - запись</div>
                    <div></div>
                </div>

                <div class="form_border">
                    <form>
                        <input readonly name="link" v-model="link">
                    </form>

                    <div class="header_form">Минимальный интервал для записи</div>

                    <form action="">
                        <select name="interval" v-model="interval">
                            <option value="60">60 минут</option>
                            <option value="90">90 минут</option>
                            <option value="120">120 минут</option>
                        </select>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SettingsPage",
        data: () => ({
            name: "",
            nameEdit: false,
            address: "",
            addressEdit: false,
            profession: "",
            professionEdit: false,
            link: "freebeauty.ru/kljsd4353gdfvz",
            interval: 60
        }),
        methods: {
            toggleName() {
                this.nameEdit = !this.nameEdit;
                if (this.nameEdit) {
                    setTimeout(() => this.$refs.name.focus(), 0);
                }
            },
            toggleAddress() {
                this.addressEdit = !this.addressEdit;
                if (this.addressEdit) {
                    setTimeout(() => this.$refs.address.focus(), 0);
                }
            },
            toggleProfession() {
                this.professionEdit = !this.professionEdit;
                if (this.professionEdit) {
                    setTimeout(() => this.$refs.profession.focus(), 0);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .page_container {
        .user_container {
            display: flex;
            justify-content: center;
            background: rgba(226, 216, 216, 0.69);
            margin-bottom: 8px;
            cursor: pointer;

            .user {
                padding: 16px;
                font-weight: 600;

                .specialist {
                    color: rgb(143, 140, 140);
                    line-height: 12px;
                    font-size: 10px;
                }
            }
        }

        .scheduler_container {
            display: flex;
            justify-content: center;
            background: rgb(224, 224, 224);
            margin-bottom: 8px;
            cursor: pointer;

            .scheduler {
                padding: 20px;
                font-weight: 600;
            }
        }

        .settings {
            display: flex;
            flex-direction: column;
            color: rgb(143, 140, 140);


            .header_form{
                margin-left: 20px;
                font-size: 12px;
                padding: 10px 10px 0;
            }

            .grey_border {
                border-bottom: 1px solid #898989;
                width: 234px;
            }

            form {
                padding: 1em;
                // border-radius: 1em;
                padding-left: 0px;
                margin-left: 20px;
                box-sizing: border-box;
                

                input {
                    width: 234px;
                    box-sizing: border-box;
                    border: 1px solid #999;
                    padding: 6px;
                    border-radius:10px;
                    background: #ffff;
                    border: 0.2px solid rgb(153, 145, 145, 0.55);
                    font-size: 12px;
                }

                .change {
                    font-size: 8px;
                    line-height: 12px;
                    box-sizing: border-box;
                    border: none;
                    margin-left: 10px;
                    background: none;
                    color: #797979;
                    
                }

                select {
                    width: 234px;
                    box-sizing: border-box;
                    border: 1px solid #999;
                    padding: 6px;
                    border-radius:10px;
                    background: #ffff;
                    border: 0.2px solid rgb(153, 145, 145, 0.55);
                    font-size: 12px;
                }
            }
        }
    }
</style>