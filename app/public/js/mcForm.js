var mcFormApp = new Vue({
  el: '#mcForm',
  data: {
    mc: {}
  },
  methods: {
    handleSubmit() {
    fetch('api/mcentry/post.php', {
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
    this.handleReset();
  }
});

// created by pun
