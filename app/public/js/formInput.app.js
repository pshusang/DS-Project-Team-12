var formInputApp = new Vue({
  el: '#formInputApp',
  data: {
    memberCertications: {}
  },
  methods: {
    handleSubmit() {
       // TODO:
    fetch('api/dataentry/post.php', {
    method:'POST',
    body: JSON.stringify(this.patient),
    //body in http is a string
    //this.patient is an object in memory

    headers:{
      "Content-Type": "application/json; charset=utf-8"
    }
})
    .then( response => response.json() )
    .then ( json => {formInputApp.memberCertications = json} )
    .catch ( err => {
    console.error('WORK TRIAGE ERROR:');
    console.error(err);
    })
      // waitingApp.patients.push(this.patient);
    this.handleReset();
    },
    handleReset() {
      this.memberCertications = {
        memberID: '',
        firstName: '',
        lastName: '',
        radioNo: '',
        stationNo: '',
        pos: '',
      }
    }
  },
  created() {
    this.handleReset();
  }
});
