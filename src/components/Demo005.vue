<template>
<div>
    <input placeholder='please typing title,then press enterKey to add new item'
     v-on:keyup.enter='addNewItem' v-model='nextItemTitle'>
    <ul>
        <li v-for='(item,key) in items'>
            {{key}} {{item.id}} {{item.title}}
            <button v-on:click='removeItem(item.id)'>X</button>
        </li>
    </ul>
</div>
</template>

<script>
export default{
    name:'demoo5',
    data(){
        return {
            items:[
                {id:1,title:'Hello world'},
                {id:2,title:'Hello Java'},
                {id:3,title:'Hello C++'}
            ],
            nextItemId:4,
            nextItemTitle:''
        }
    },
    methods:{
        addNewItem: function (){
            this.items.push({
                id:this.nextItemId++,
                title:this.nextItemTitle
            });
            this.nextItemTitle = ''
        },
        removeItem: function (id){
            console.log(id)
            this.items = this.items.filter(element =>{
                return element.id != id;
            });
        }
    }
}
</script>

<style>
</style>