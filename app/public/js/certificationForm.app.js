var certificationApp = new Vue({
  el: '#certicationApp',
  data: {
    certification: {}
  },
  methods: {
    handleSubmit() {
       // TODO:
    fetch('api/certificationEntry/post.php', {
    method:'POST',
    body: JSON.stringify(this.certification),
    //body in http is a string
    //this.patient is an object in memory

    headers:{
      "Content-Type": "application/json; charset=utf-8"
    }
})
    .then( response => response.json() )
    // .then ( json => {certificationApp.certications = json} )
    // .catch ( err => {
    // console.error('WORK TRIAGE ERROR:');
    // console.error(err);
    })
      // waitingApp.patients.push(this.patient);
    this.handleReset();
    },
    handleReset() {
      this.certification = {
        certificationID: '',
        certificationName: '',
        certificationAgency: '',
        expirationPeriod: ''
      }
    }
  },
  created() {
    this.handleReset();
  }
});
