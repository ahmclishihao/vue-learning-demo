<template>
<div>
    <button v-on:click='changeOk'>click me to chanage</button>
    <div v-if='ok === 1'>
        <h1>Hello World111</h1>
        <input type='text' >
    </div>
    <div v-else-if='ok === 2'>
        <h2>Tell me Y ? 222</h2>
        <input type='text' >
    </div>
    <div v-else-if='ok === 3'>
        <h3>Let me call333333</h3>
        <input type='text' key='3'>
    </div>
    <div v-else>
        <h4>What's happen?&nbsp;&nbsp;&nbsp;&nbsp;___</h4>
        <input type='text' key='4'>
    </div>
</div>    
</template>

<script>
export default{
    name:'demoo3',
    data(){
        return{
            ok:4,
            count:0
        }
    },
    methods:{
        changeOk: function(){
            this.count += 1
            this.ok = this.count % 5;
            console.log(this.ok);
        }
    }
}

</script>

<style>
</style>