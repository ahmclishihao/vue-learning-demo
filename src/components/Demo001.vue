<template>
<div>
    <div>
        <p>{{message}}</p>
        <p>1.{{reversedMessage}}</p>
        <p>2.{{reversedMessage}}</p>
        <p>3.{{reversedMessage}}</p>
        <p>1.{{reversedMessage2()}}</p>
        <p>2.{{reversedMessage2()}}</p>
        <p>3.{{reversedMessage2()}}</p>
    </div>
    <div>
        <p> Ask a yes/no for your question:
            <input v-model="question">
        </p>
        <p>{{ answer }}</p>
    </div>
</div>
</template>

<script>
export default{
    name: 'demoo1',
    data(){
        return {
            message: 'Hello'
            ,answer:'write your question ,then i will tell you the answer'
            ,question: ''
        }
    },
    watch: {
        question: function(newQ,oldQ){
            this.answer = 'I thinking you type ' + newQ;
        }
    },
    created: function(){
        // this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },
    computed: {
        reversedMessage: function() {
            console.log('We only computed once...')
            return this.message.split('').reverse().join('|');
        }
    },
    methods: {
        reversedMessage2: function() {
            console.log('Hi ! You called once method...')
            return this.message.split('').reverse().join('_');
        }
    }
}

</script>

<style>
</style>
