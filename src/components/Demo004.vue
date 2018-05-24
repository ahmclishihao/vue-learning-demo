<template>
<div>
    <ul id='forEachExm'>
        <li v-for='(value,key,index) in items' v-bind:key='index'>
            {{index}}_{{key}} : {{ value }} 
        </li>
    </ul>
    <ul>
        <li v-for='n in 10' v-if='n%2 == 0'>
            {{n}}
        </li>
    </ul>
</div>
</template>

<script>
export default{
    name:'demoo4',
    data(){
        return {
            items:[
                {message:'He'},
                {message:'llo'},
                {message:' Wor'},
                {message:'ld'}
            ]
        }
    }
}
</script>

<style>
</style>