<template>
  <div class="studentview container">
    <Alert v-if="alert" v-bind:message="alert" />
    <h1 class="page-header">Answer Exam</h1>
    <form v-on:submit="SubmitExam">
        
        <div class="well">
            <h4>Main Question</h4>
            <div class="form-group">
                <label>Aqui va la pregunta 1</label>
            </div>  
            <h4>Options</h4>
            <div class="form-group">
                <basic-select :options="options1" :selected-option="item1" placeholder="select item" @select="onSelect"></basic-select>
            </div>
        </div>

        <div class="well">
            <h4>Main Question</h4>
            <div class="form-group">
                <label>Aqui va la pregunta 2</label>
            </div>  
            <h4>Options</h4>
            <div class="form-group">
                <basic-select :options="options2" :selected-option="item2" placeholder="select item" @select="onSelect"></basic-select>
            </div>
        </div>

        <div class="well">
            <h4>Main Question</h4>
            <div class="form-group">
                <label>Aqui va la pregunta 3</label>
            </div>  
            <h4>Options</h4>
            <div class="form-group">
                <basic-select :options="options3" :selected-option="item3" placeholder="select item" @select="onSelect"></basic-select>
            </div>
        </div>

        <div class="well">
            <h4>Main Question</h4>
            <div class="form-group">
                <label>Aqui va la pregunta 4</label>
            </div>  
            <h4>Options</h4>
            <div class="form-group">
                <basic-select :options="options4" :selected-option="item4" placeholder="select item" @select="onSelect"></basic-select>
            </div>
        </div>

        <div class="well">
            <h4>Main Question</h4>
            <div class="form-group">
                <label>Aqui va la pregunta 5</label>
            </div>  
            <h4>Options</h4>
            <div class="form-group">
                <basic-select :options="options5" :selected-option="item5" placeholder="select item" @select="onSelect"></basic-select>
            </div>
        </div>

        <div class="well">
            <h4>Main Question</h4>
            <div class="form-group">
                <label>Aqui va la pregunta 6</label>
            </div>  
            <h4>Options</h4>
            <div class="form-group">
                <basic-select :options="options6" :selected-option="item6" placeholder="select item" @select="onSelect"></basic-select>
            </div>
        </div>

        <div class="well">
            <h4>Main Question</h4>
            <div class="form-group">
                <label>Aqui va la pregunta 7</label>
            </div>  
            <h4>Options</h4>
            <div class="form-group">
                <basic-select :options="options7" :selected-option="item7" placeholder="select item" @select="onSelect"></basic-select>
            </div>
        </div>

        <div class="well">
            <h4>Main Question</h4>
            <div class="form-group">
                <label>Aqui va la pregunta 8</label>
            </div>  
            <h4>Options</h4>
            <div class="form-group">
                <basic-select :options="options8" :selected-option="item8" placeholder="select item" @select="onSelect"></basic-select>
            </div>
        </div>

        <div class="well">
            <h4>Main Question</h4>
            <div class="form-group">
                <label>Aqui va la pregunta 9</label>
            </div>  
            <h4>Options</h4>
            <div class="form-group">
                <basic-select :options="options9" :selected-option="item9" placeholder="select item" @select="onSelect"></basic-select>
            </div>
        </div>

        <div class="well">
            <h4>Main Question</h4>
            <div class="form-group">
                <label>Aqui va la pregunta 10</label>
            </div>  
            <h4>Options</h4>
            <div class="form-group">
                <basic-select :options="options10" :selected-option="item10" placeholder="select item" @select="onSelect"></basic-select>
            </div>
        </div>


        <button type="submit" class="btn btn-primary">Submit Exam</button>
      </form>
    </div>
</template>

<script>
import { BasicSelect } from 'vue-search-select'
export default {
  name: 'about',
  data () {
    return {
      questions: [],
      answers: [],
      items: [],
      options1: [
          { value: '0', text: answers[0] },
          { value: '1', text: answers[1] },
          { value: '2', text: answers[2] },
          { value: '3', text: answers[3] },
        ],

        options2: [
          { value: '0', text: answers[4] },
          { value: '1', text: answers[5] },
          { value: '2', text: answers[6] },
          { value: '3', text: answers[7] },
        ],

        options3: [
          { value: '0', text: answers[8] },
          { value: '1', text: answers[9] },
          { value: '2', text: answers[10] },
          { value: '3', text: answers[11] },
        ],

        options4: [
          { value: '0', text: answers[12] },
          { value: '1', text: answers[13] },
          { value: '2', text: answers[14] },
          { value: '3', text: answers[15] },
        ],

        options5: [
          { value: '0', text: answers[16] },
          { value: '1', text: answers[17] },
          { value: '2', text: answers[18] },
          { value: '3', text: answers[19] },
        ],

        options6: [
          { value: '0', text: answers[20] },
          { value: '1', text: answers[21] },
          { value: '2', text: answers[22] },
          { value: '3', text: answers[23] },
        ],

        options7: [
          { value: '0', text: answers[24] },
          { value: '1', text: answers[25] },
          { value: '2', text: answers[26] },
          { value: '3', text: answers[27] },
        ],

        options8: [
          { value: '0', text: answers[28] },
          { value: '1', text: answers[29] },
          { value: '2', text: answers[30] },
          { value: '3', text: answers[31] },
        ],

        options9: [
          { value: '0', text: answers[32] },
          { value: '1', text: answers[33] },
          { value: '2', text: answers[34] },
          { value: '3', text: answers[35] },
        ],

        options10: [
          { value: '0', text: answers[36] },
          { value: '1', text: answers[37] },
          { value: '2', text: answers[38] },
          { value: '3', text: answers[39] },
        ],
        searchText: '', // If value is falsy, reset searchText & searchItem 
        item: {
          value: '',
        }
    }
  },
  methods: {
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
       fetchQuestion(){
            this.$http.get('http://localhost:3000/Add')
            .then(function(response){
                this.question = response.body;
            });
        },
      SubmitExam(e){
                items :[
                  {value: item1.value},
                  {value: item2.value},
                  {value: item3.value},
                  {value: item4.value},
                  {value: item5.value},
                  {value: item6.value},
                  {value: item7.value},
                  {value: item8.value},
                  {value: item9.value},
                  {value: item10.value},
                ]

                this.$http.post('http://slimapp/api/question/SubmitExam', items)
                    .then(function(response){
                        this.$router.push({path: '/', query: {alert: 'Exam submitted'}});
                    });

                e.preventDefault();
        }
    },
    components: {
      BasicSelect
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>