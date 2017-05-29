<template>
  <div class="questions container">
    <Alert v-if="alert" v-bind:message="alert" />
    <h1 class="page-header">Manage Questions</h1>
    <br />
    <table class="table table-striped">
        <thead>
          <tr>
            <th>Question</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            
              <td>Pregunta1</td>
              <td><router-link class="btn btn-default" to="/QuestionDetails/">View</router-link></td>
            
        </tbody>
    </table>
  </div>
</template>

<script>
  import Alert from './Alert';
  export default {
    name: 'questions',
    data () {
      return {
        questions: [],
        alert:'',
      }
    },
    methods: {
      fetchQuestions(){
        this.$http.get('http://slimapp/api/questions')
          .then(function(response){
            this.questions = response.body;
          });
      },
    },
    created: function(){
      if(this.$route.query.alert){
        this.alert = this.$route.query.alert;
      }
      this.fetchQuestions();
    },
    updated: function(){
      this.fetchQuestions();
    },
    components: {
      Alert
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
