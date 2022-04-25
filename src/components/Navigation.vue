<template>
    <div class="navigation">
        <ul>
            <li>
                <a><router-link to="/personalpage/bookingtable">Расписание</router-link></a>
            </li>
            <li>
                <router-link to="/personalpage/preferences">Настройки</router-link>
            </li>
            <li>
                <router-link to="/personalpage/services">Услуги</router-link>
            </li>
            <li>
                <router-link to="/personalpage/clients">Клиенты</router-link>
            </li>
            <li>
                <a href="#">Финансы</a>
            </li>
            <li>
                <a href="#">Обратная связь</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "NavigationComp",
};
</script>

<style lang="scss" scoped>
.navigation {
    font-size: 16px;
    line-height: 21px;
    color: #897e7e;
    

    li {
        margin-left: 20px;
        list-style-type: disc;
        color: #897e7e;
        &:hover {
            color: black;
        }

        a {
            text-decoration: none;
            color: #897e7e;

            &:hover {
                color: black;
            }
        }
    }
}
</style>
