var memberFormApp = new Vue({
  el: '#memberFormApp',
  data: {
    members: {}
  },
  methods: {
    handleSubmit() {
    fetch('api/dataEntry/post.php', {
      method:'POST',
      body: JSON.stringify(this.members),
      headers:{
        "Content-Type": "application/json; charset=utf-8"
      }
      })
      .then( response => response.json() )
      .then ( json => {memberEntryApp.members = json} )
      .catch ( err => {
      console.error('WORK TRIAGE ERROR:');
      console.error(err);
      })

      this.handleReset();
    },

    handleReset() {
      this.members = {
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

// created by pun
