<template>
   <div class="add container">
    <Alert v-if="alert" v-bind:message="alert" />
    <h1 class="page-header">Add Question</h1>
    <form v-on:submit="addQuestion">
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
                <basic-select :options="options1" :selected-option="item1" placeholder="select item" @select="onSelect"></basic-select>
            </div>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
    import { BasicSelect } from 'vue-search-select'
    import Alert from './Alert'
    export default {
        name: 'add',
        data () {
            return {
                question: {},
                answers: [],
                alert:'',
                options1: [
                    { value: '0', text: 'Respuesta #1' },
                    { value: '1', text: 'Respuesta #2' },
                    { value: '2', text: 'Respuesta #3' },
                    { value: '3', text: 'Respuesta #4' },
                ],
                searchText: '', // If value is falsy, reset searchText & searchItem 
                item: {
                    value: '',
                }
            }
        },
        methods: {
            addQuestion(e){
                    let newQuestion = {
                        MainQuestion: this.question.MainQuestion,
                        Answer1: this.question.Answer1,
                        Answer2: this.question.Answer2,
                        Answer3: this.question.Answer3,
                        Answer4: this.question.Answer4
                    }

                    this.$http.post('http://slimapp/api/question/add', newQuestion)
                        .then(function(response){
                            this.$router.push({path: '/', query: {alert: 'Question Added'}});
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
        components: {
            Alert,
            BasicSelect
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#Contenedor{
    width: 1100px;   
}

</style>