<template>
<div>
    <div v-bind:class="[{active:isActive},hasError?'danger':'static']">
        Message
    </div>
</div>
</template>

<script>
export default{
    name: 'demoo2',
    data(){
        return {
            isActive:true,
            hasError:1000
        }
    }
}
</script>

<style>
    .static {
        font-size: 2rem
    }

    .active {
        color: #000;
        background: #ff0;
    }

    .danger {
        color: #f00;
    }
</style>
