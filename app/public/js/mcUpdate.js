var mcUpdateApp = new Vue({
  el: '#mcUpdate',
  data: {
    mc: {}
  },
  methods: {
    handleUpdate() {
    fetch('api/mcUpdate/post.php', {
      method:'POST',
      body: JSON.stringify(this.mc),
      headers:{
        "Content-Type": "application/json; charset=utf-8"
      }
      })
      .then( response => response.json() )
      .then ( json => {mcEntryApp.mcs = json} )
      .catch ( err => {
      console.log("completed this")
      console.error('WORK TRIAGE ERROR:');
      console.error(err);
      })

      this.handleReset();
},

handleReset() {
  this.mc = {
    memberID:'',
    certificationID: '',
    expDate: '',
    renewDate: ''
  }
}

},
created() {
this.handleReset();
}
});
