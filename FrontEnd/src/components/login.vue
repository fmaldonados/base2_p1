  <template>
  <div id="login-form">

        <h1>Login</h1>

        <fieldset>

            <form action="javascript:void(0);" method="get">

                <input type="email" required value="Email" onBlur="if(this.value=='')this.value='Email'" onFocus="if(this.value=='Email')this.value='' " v-model="question.Answer1"> <!-- JS because of IE support; better: placeholder="Email" -->

                <input type="password" required value="Password" onBlur="if(this.value=='')this.value='Password'" onFocus="if(this.value=='Password')this.value='' " v-model="question.Answer2"> <!-- JS because of IE support; better: placeholder="Password" -->

                <input type="submit" value="Login" >

            </form>

        </fieldset>

    </div> <!-- end login-form -->
    </template>

  <script>
  	 import { BasicSelect } from 'vue-search-select'
    import Alert from './Alert'
    export default {
        name: 'add',
        data () {
            return {
                question,
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
            verifyuser(e){
                    let newQuestion = {
                        user: this.question.Answer1,
                        password: this.question.Answer2,
                          
                    }

                    this.$http.post('http://localhost:3000/login', newQuestion)
                        .then(function(response){
                            console.log("EBTRIO");
                            this.question = response.body;
                            paraver();
                            this.$router.push({path: '/', query: {alert: 'Question Added'}});
                        });

                    e.preventDefault();
            },
            paraver(){
            	if(this.question==='true'){
            		Console.log("entro");
            	}
            },
        components: {
            Alert,
            BasicSelect
        }
    }
  </script>



 <style scoped>
body {
	background: #eaeaea;
	color: #999;
	font: 100%/1.5em sans-serif;
	margin: 0;
}

h1 { margin: 0; }

a {
	color: #999;
	text-decoration: none;
}

a:hover { color: #1dabb8; }

fieldset {
	border: none;
	margin: 0;
}

input {
	border: none;
	font-family: inherit;
	font-size: inherit;
	margin: 0;
	outline: none;
	-webkit-appearance: none;
}

input[type="submit"] { cursor: pointer; }

.clearfix { *zoom: 1; }
.clearfix:before, .clearfix:after {
	content: "";
	display: table;	
}
.clearfix:after { clear: both; }

/* ---------- LOGIN-FORM ---------- */

#login-form {
	margin: 50px auto;
	width: 300px;
}

#login-form h1 {
	background-color: #282830;
	border-radius: 5px 5px 0 0;
	color: #fff;
	font-size: 14px;
	padding: 20px;
	text-align: center;
	text-transform: uppercase;
}

#login-form fieldset {
	background: #fff;
	border-radius: 0 0 5px 5px;
	padding: 20px;
	position: relative;
}

#login-form fieldset:before {
	background-color: #fff;
	content: "";
	height: 8px;
	left: 50%;
	margin: -4px 0 0 -4px;
	position: absolute;
	top: 0;
	-webkit-transform: rotate(45deg);
	-moz-transform: rotate(45deg);
	-ms-transform: rotate(45deg);
	-o-transform: rotate(45deg);
	transform: rotate(45deg);
	width: 8px;
}

#login-form input {
	font-size: 14px;
}

#login-form input[type="email"],
#login-form input[type="password"] {
	border: 1px solid #dcdcdc;
	padding: 12px 10px;
	width: 238px;
}

#login-form input[type="email"] {
	border-radius: 3px 3px 0 0;
}

#login-form input[type="password"] {
	border-top: none;
	border-radius: 0px 0px 3px 3px;
}

#login-form input[type="submit"] {
	background: #1dabb8;
	border-radius: 3px;
	color: #fff;
	float: right;
	font-weight: bold;
	margin-top: 20px;
	padding: 12px 20px;
}

#login-form input[type="submit"]:hover { background: #198d98; }

#login-form footer {
	font-size: 12px;
	margin-top: 16px;
}

.info {
	background: #e5e5e5;
	border-radius: 50%;
	display: inline-block;
	height: 20px;
	line-height: 20px;
	margin: 0 10px 0 0;
	text-align: center;
	width: 20px;
}
 </style>
