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
                    Answer4: this.questin.Answer4
                }

                this.$http.put('http://slimapp/api/question/update/'+this.$route.params.id, updQuestion)
                    .then(function(response){
                        this.$router.push({path: '/', query: {alert: 'Question Updated'}});
                    });
            e.preventDefault();
        }
    },
    created: function(){
        this.fetchQuestion(this.$route.params.id);
    },
    components:{
        Alert
    }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
