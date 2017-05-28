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
            <label>Answers</label>

            <div class="form-group">
                <div class="btn-group" data-toggle="buttons" v-radio="value">       
                    <label class="btn btn-primary"> <input type="radio" autocomplete="off" value="0"/>Answer #1</label>
                    <br>
                    <br>
                    <input id = "Contenedor" type="text" class="form-control" placeholder="Type option 1">
                    <br>

                    <label class="btn btn-primary"> <input type="radio" autocomplete="off" value="1" />Answer #2</label>
                    <br>
                    <br>
                    <input type="text" class="form-control" placeholder="Type option 2">
                    <br>

                    <label class="btn btn-primary"> <input type="radio" autocomplete="off" value="2" />Answer #3</label>
                    <br>
                    <br>
                    <input type="text" class="form-control" placeholder="Type option 2">
                    <br>

                    <label class="btn btn-primary"> <input type="radio" autocomplete="off" value="3" />Answer #4</label>
                    <br>
                    <br>
                    <input type="text" class="form-control" placeholder="Type option 2">
                    <br>
                </div>

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

#Contenedor{
    width: 1100px;   
}

</style>
