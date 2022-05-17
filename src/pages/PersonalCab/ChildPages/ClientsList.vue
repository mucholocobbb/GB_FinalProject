<template>
    <div class="container">
        <div class="clients-table">
            <div class="head-table">
                <div class="client-cell">ФИО</div>
                <div class="client-cell">Телефон</div>
                <div class="client-cell">История</div>
            </div>
            <div class="body-table">
                <div class="clients-info" v-for="client in clients" :key="client.id">
                    <div class="info">
                        {{client.firstName}}
                        {{client.secName}}
                        {{client.lastName}}
                    </div>

                    <div class="info">{{client.phone}}</div>
                    
                    <div class="info">
                        <div v-for="item in client.history" :key="item.date + item.time">
                            <div>
                                {{item.date}} {{item.time}},
                                {{item.comment}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ClientsList",
    data: () => ({
        clients: [
            {
                id: "120122022130525",
                firstName: "Дмитрий",
                secName: "Иванов",
                lastName: "Петрович",
                phone: "8-999-888-77-66",
                history: [
                    {
                        date: "23.04.2022",
                        time: "13.00",
                        service: "Сеанс тату-Стандартный размер",
                        price: "4000",
                        comment: "Парковка для Ford e345ке50",
                    },
                    {
                        date: "27.04.2022",
                        time: "17.00",
                        service: "Сеанс тату-Большой размер",
                        price: "8000",
                        comment: "Татуировка дракона",
                    },
                ],  
            },
            {
                id: "11012021130525",
                firstName: "Артем",
                secName: "Арасланов",
                lastName: "Дмитриевич",
                phone: "7-908-999-55-33",
                history: [
                    {
                        date: "14.03.2021",
                        time: "10.00",
                        service: "Сеанс тату-Малый размер",
                        price: "2000",
                        comment: "Клиент боится игл",
                    }
                ],
            }  
        ]
    })
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    padding: 0px 24px;
    font-size: 12px;

    .clients-table {
        font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;

        .head-table {
            font-weight: normal;
            display: flex;
            text-align: center;
            background: #ffff;
            border-radius: 10px;
            border: 0.2px solid rgb(153, 145, 145, 0.55);
            margin-bottom: 4px;

            .client-cell {
                width: 33%;
                text-align: left;
                padding: 10px 10px 10px;
            }
        }

        .body-table {
            color: grey;
            font-weight: normal;
            display: flex;
            flex-direction: column;
            line-height: 15px;
            border-radius: 10px;
            background: #ffff;
            border: 0.2px solid rgb(153, 145, 145, 0.55);

            .clients-info {
                display: flex;

                .info {
                    width: 33%;
                    text-align: left;
                    padding: 10px 10px 10px;
                }
            }
        }
    }
}
</style>