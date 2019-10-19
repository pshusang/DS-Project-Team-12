var memberFormApp = new Vue({
  el: '#memberFormApp',
  data: {
    members: {}
  },
  methods: {
    handleSubmit() {
       // TODO:
    fetch('api/dataentry/post.php', {
    method:'POST',
    body: JSON.stringify(this.members),
    //body in http is a string
    //this.patient is an object in memory

    headers:{
      "Content-Type": "application/json; charset=utf-8"
    }
})
    .then( response => response.json() )
    .then ( json => {memberFormApp.members = json} )
    //.catch ( err => {
    // console.error('WORK TRIAGE ERROR:');
    // console.error(err);
    })
      // waitingApp.patients.push(this.patient);
    this.handleReset();
    },
    handleReset() {
      this.members = {
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
