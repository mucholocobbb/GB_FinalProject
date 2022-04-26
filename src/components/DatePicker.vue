<template>
    <div class="datepicker">
        <form>
            <input type="date" class="picker">
        </form>
    </div>
</template>

<script>
export default {
    name: 'DatePicker',
}
</script>

<style lang="scss" scoped>
    .datepicker {
        padding: 32px 0 44px 0;

        .picker {
            width: 100%;
        }   
    }
</style>
