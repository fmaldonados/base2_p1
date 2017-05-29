<template>
  <div class="edit container">
    <Alert v-if="alert" v-bind:message="alert" />
    <h1 class="page-header">Edit Question</h1>
    <form v-on:submit="updateQuestion">
        <div class="well">
            <label>Exam Question</label>
            <br>
            <textarea  type = "text" class = "form-control" placeholder="Add your question" v-model="question.MainQuestion"></textarea>
        </div>
        <div class="well">
            <h4>Answers</h4>
            <div class="form-group">
                <label>Answer #1</label>
                <input type="text" class="form-control" placeholder="Type option 1" v-model="question.Answer1">
            </div>
            <div class="form-group">
                <label>Answer#2</label>
                <input type="text" class="form-control" placeholder="Type option 2" v-model="question.Answer2">
            </div>
            <div class="form-group">
                <label>Answer#3</label>
                <input type="text" class="form-control" placeholder="Type option 3" v-model="question.Answer3">
            </div>
            <div class="form-group">
                <label>Answer#4</label>
                <input type="text" class="form-control" placeholder="Type option 4" v-model="question.Answer4">
            </div>
        </div>

        <div class="well">
            <h4>Select the correct answer</h4>
            <div class="form-group">
            </div>  
            <h4>Options</h4>
            <div class="form-group">
                <basic-select :options="options" :selected-option="item" placeholder="select item" @select="onSelect" v-model = "question.CorrectAnswer"></basic-select>
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
    import Alert from './Alert'
    import { BasicSelect } from 'vue-search-select'
    export default {
    name: 'add',
    data () {
        return {
            question: {},
            answers: [],
            alert:'',
            options: [
                { value: '0', text: 'Respuesta #1' },
                { value: '1', text: 'Respuesta #2' },
                { value: '2', text: 'Respuesta #3' },
                { value: '3', text: 'Respuesta #4' },
            ],
            searchText: '', // If value is falsy, reset searchText & searchItem 
            item: {
                value: '',
                item: '',
            }
        }
    },
    methods: {
        fetchQuestion(id){
            this.$http.get('http://slimapp/api/question/'+id)
            .then(function(response){
                this.question = response.body;
            });
        },
        updateQuestion(e){
                let updQuestion = {
                    MainQuestion: this.question.MainQuestion,
                    Answer1: this.questin.Answer1,
                    Answer2: this.questin.Answer2,
                    Answer3: this.questin.Answer3,
                    Answer4: this.questin.Answer4,
                    CorrectAnswer: this.item.value,
                }

                this.$http.put('http://slimapp/api/question/update/'+this.$route.params.id, updQuestion)
                    .then(function(response){
                        this.$router.push({path: '/', query: {alert: 'Question Updated'}});
                    });
            e.preventDefault();
        },
        onSelect (item) {
            this.item = item
        },
        reset () {
            this.item = {}
        },
        selectOption () {
        // select option from parent component 
            this.item = this.options[0]
        },
    },
    created: function(){
        this.fetchQuestion(this.$route.params.id);
    },
    components:{
        Alert,
        BasicSelect
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
