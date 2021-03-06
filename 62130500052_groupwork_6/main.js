const constraints = {
    firstname: {
        presence: true,
    },
    lastname: {
        presence: true,
    },
    age: {
        presence: true,
        numericality: {
            lessThan: 3000
        }
    },
    chosengender: {
        presence: true,
    },
    email: {
        presence: true,
        email: true
    },
    phone: {
        presence: true,
        length: {
            minimum : 10,
            message: "must be at least 10 digits"
        },        
    },
    chosensubject: {
        presence: true
    }
  }
  
  const app =Vue.createApp({
    data() {
        return {
            firstname: null,
            lastname: null,
            age: null,
            chosengender: null,
            genders: [{gender_id: 1,gender_value:'Male'},
                     {gender_id: 2,gender_value:'Female'},
                     {gender_id: 3,gender_value:'Other'}],
            email: null,
            phone: null,
            chosensubject: null,
            subject_lists: [{subject_id: 1, subject_name:'INT203'},
                            {subject_id: 2, subject_name: 'Client'},
                            {subject_id: 3, subject_name: 'Vus.js'}],
            errors: null,
        }
    },
    methods: {
        checkForm(){
            this.errors = validate({firstname: this.firstname,
                                    lastname: this.lastname,
                                    age: this.age,
                                    chosengender: this.chosengender,
                                    email: this.email,
                                    phone: this.phone,
                                    chosensubject: this.chosensubject},
                                    constraints)
            if(!this.errors){
                alert("Your profile is updated successfully.")
            }
        }
    }
  })
  
  app.mount('#app')