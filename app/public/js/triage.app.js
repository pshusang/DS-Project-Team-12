var patientTriageApp = new Vue({
  el: '#patientTriageApp',
  data: {
    patient: {}
  },
  methods: {
    handleSubmit() {
       // TODO:
    fetch(url, {
    method:'POST',
    body: JSON.stringify(this.patient),
    //body in http is a string
    //this.patient is an object in memory

    headers:{
      "Content-Type": "application/json; charset=utf-8"
    }
})
    .then( response => response.json() )
    .then ( json => {waitingApp.patients = json} )
    .catch ( err => {
    console.error('WORK TRIAGE ERROR:');
    console.error(err);
    })
      // waitingApp.patients.push(this.patient);
    this.handleReset();
    },
    handleReset() {
      this.patient = {
        patientGuid: '',
        firstName: '',
        lastName: '',
        dob: '',
        sexAtBirth: '',
        visitDescription: '',
        // visitDateUtc
        priority: 'low'
      }
    }
  },
  created() {
    this.handleReset();
  }
});
