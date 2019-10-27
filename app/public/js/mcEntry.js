var mcEntryApp = new Vue({
  el: '#mcEntry',
  data: {
    mcs: [],
    mc:{}
  },
  methods: {
    fetchMembers() {
      fetch('api/mcentry/index.php')
      .then(response => response.json())
      .then(json => { mcEntryApp.mcs = json })
    },

    handleDelete() {
    fetch('api/mcDelete/post.php', {
      method:'POST',
      body: JSON.stringify(this.mc),
      headers:{
        "Content-Type": "application/json; charset=utf-8"
      }
      })
      .then( response => response.json() )
      .then ( json => {mcEntryApp.mcs = json} )
      .catch ( err => {
      console.error('WORK TRIAGE ERROR:');
      console.error(err);
      })

      this.handleReset();
    },

    handleReset() {
      this.mc = {
        memberID: '',
        certificationID: '',
        expDate: '',
        renewDate: ''
      }
    }


  },
  created() {
    this.fetchMembers();
    this.handleReset();
  }
});
