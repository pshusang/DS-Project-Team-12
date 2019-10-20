var certificationApp = new Vue({
  el: '#certificationApp',
  data: {
    certification: {}
  },
  methods: {
    handleSubmit() {
      fetch('api/certificationEntry/post.php', {
      method:'POST',
      body: JSON.stringify(this.certification),
      headers:{
        "Content-Type": "application/json; charset=utf-8"
      }
      })
      .then( response => response.json() )
      .then ( json => {certificationEntryApp.certifications = json} )
      .catch ( err => {
      console.error('WORK TRIAGE ERROR:');
      console.error(err);
      })
      // waitingApp.patients.push(this.patient);
    this.handleReset();
    },
    handleReset() {
      this.certification = {
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

// created by pun
