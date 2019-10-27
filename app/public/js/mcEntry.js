var mcEntryApp = new Vue({
  el: '#mcEntry',
  data: {
    mcs: []
  },
  methods: {
    fetchMembers() {
      fetch('api/mcentry/index.php')
      .then(response => response.json())
      .then(json => { mcEntryApp.mcs = json })
    }

    // handleDelete() {
    // fetch('api/dataDelete/post.php', {
    //   method:'POST',
    //   body: JSON.stringify(this.member),
    //   headers:{
    //     "Content-Type": "application/json; charset=utf-8"
    //   }
    //   })
    //   .then( response => response.json() )
    //   .then ( json => {memberEntryApp.members = json} )
    //   .catch ( err => {
    //   console.error('WORK TRIAGE ERROR:');
    //   console.error(err);
    //   })
    //
    //   this.handleReset();
    // },
    //
    // handleReset() {
    //   this.member = {
    //     firstName: '',
    //     lastName: '',
    //     radioNo: '',
    //     stationNo: '',
    //     pos: '',
    //     isActive:'',
    //     email: '',
    //     phone: '',
    //     street:'',
    //     city:'',
    //     state:'',
    //     zip:'',
    //     dob:'',
    //     startDate:'',
    //     gender:''
    //   }
    // }

  },
  created() {
    this.fetchMembers();
  //  this.handleReset();
  }
});
