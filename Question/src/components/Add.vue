<template>
  <div class="add container">
    <Alert v-if="alert" v-bind:message="alert" />
    <h1 class="page-header">Add Question</h1>
    <form v-on:submit="addQuestion">
        <div class="well">
            <label>Exam Question</label>
            <br>
            <textarea  type = "text" class = "form-control" placeholder="Add your question"></textarea>
        </div>
        <div class="well">
            <h4>Answers</h4>
            <div class="form-group">
                <label>Answer #1</label>
                <input type="text" class="form-control" placeholder="Type option 1">
            </div>
            <div class="form-group">
                <label>Answer#2</label>
                <input type="text" class="form-control" placeholder="Type option 2">
            </div>
            <div class="form-group">
                <label>Answer#3</label>
                <input type="text" class="form-control" placeholder="Type option 3">
            </div>
            <div class="form-group">
                <label>Answer#4</label>
                <input type="text" class="form-control" placeholder="Type option 4">
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
    import Alert from './Alert'
    export default {
    name: 'add',
    data () {
        return {
        question: {},
        alert:''
        }
    },
    methods: {
        addQuestion(e){
                let newQuestion = {
                    MainQuestion: this.question.MainQuestion,
                    Answer1: this.questin.Answer1,
                    Answer2: this.questin.Answer2,
                    Answer3: this.questin.Answer3,
                    Answer4: this.questin.Answer4
                }

                this.$http.post('http://slimapp/api/question/add', newQuestion)
                    .then(function(response){
                        this.$router.push({path: '/', query: {alert: 'Question Added'}});
                    });

                e.preventDefault();
        }
    },
    components: {
        Alert
    }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
