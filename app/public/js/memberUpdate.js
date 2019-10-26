var memberUpdateApp = new Vue({
  el: '#memberUpdateApp',
  data: {
    members: {}
  },
  methods: {
    handleUpdate() {
    fetch('api/dataUpdate/post.php', {
      method:'POST',
      body: JSON.stringify(this.members),
      headers:{
        "Content-Type": "application/json; charset=utf-8"
      }
      })
      .then( response => response.json() )
      .then ( json => {memberEntryApp.members = json} )
      .catch ( err => {
      console.log("completed this")
      console.error('WORK TRIAGE ERROR:');
      console.error(err);
      })

      this.handleReset();
},

handleReset() {
  this.members = {
    memberID:'',
    firstName: '',
    lastName: '',
    radioNo: '',
    stationNo: '',
    pos: '',
    isActive:'',
    email: '',
    phone: '',
    street:'',
    city:'',
    state:'',
    zip:'',
    dob:'',
    startDate:'',
    gender:''
  }
}

},
created() {
this.handleReset();
}
});
