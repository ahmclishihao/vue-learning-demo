<template>
<div>
    <div v-bind:class="{ active: isActive,danger: hasError }">
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
            hasError:true
        }
    }
}

</script>

<style>
    .static {
        color: #00f
    }

    .active {
        color: #000;
        background: #ff0;
    }

    .danger {
        color: #f00;
    }
</style>
