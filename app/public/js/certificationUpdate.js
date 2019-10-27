var memberUpdateApp = new Vue({
  el: '#certificationUpdateApp',
  data: {
    certifications: {}
  },
  methods: {
    handleUpdate() {
    fetch('api/certificationDataUpdate/post.php', {
      method:'POST',
      body: JSON.stringify(this.certifications),
      headers:{
        "Content-Type": "application/json; charset=utf-8"
      }
      })
      .then( response => response.json() )
      .then ( json => {certificationEntryApp.certifications = json} )
      .catch ( err => {
      console.log("completed this")
      console.error('WORK TRIAGE ERROR:');
      console.error(err);
      })

      this.handleReset();
},

handleReset() {
  this.certifications = {
    certificationID:'',
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
