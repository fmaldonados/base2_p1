<template>
  <div class="details container">
    <router-link to="/">Back</router-link>
    <h1 class="page-header">{{question.MainQuestion}}
        <span class="pull-right">
            <router-link class="btn btn-primary" v-bind:to="'/edit/'+question.id">Edit</router-link>
            <button class="btn btn-danger" v-on:click="deleteQuestion(question.id)">Delete</button>
            </span>
    </h1>
        <ul class="list-group">
            <li class="list-group-item"> {{question.MainQuestion}}</li>
            <li class="list-group-item">{{question.Answer1}}</li>
            <li class="list-group-item">{{question.Answer2}}</li>
            <li class="list-group-item">{{question.Answer3}}</li>
            <li class="list-group-item">{{question.Answer4}}</li>
        </ul>
  </div>
</template>

<script>
export default {
  name: 'questiondetails',
  data () {
    return {
      question: ''
    }
  },
  methods:{
      fetchQuestion(id){
          this.$http.get('http://slimapp/api/question/'+id)
          .then(function(response){
            this.question = response.body;
          });
      },
      deleteQuestion(id){
          this.$http.delete('http://slimapp/api/question/delete/'+id)
          .then(function(response){
            this.$router.push({path: '/', query: {alert: 'Question Deleted'}});
          });
      }
  },
  created: function(){
      this.fetchQuestion(this.$route.params.id);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
