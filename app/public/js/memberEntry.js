var memberEntryApp = new Vue({
  el: '#memberEntryApp',
  data: {
    members: []
  },
  methods: {
    fetchMembers() {
      fetch('api/dataEntry/index.php')
      .then(response => response.json())
      .then(json => { memberEntryApp.members = json })
    },

    handleDelete() {
    fetch('api/dataDelete/post.php', {
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
    }

  },
  created() {
    this.fetchMembers();
  }
});

// created by pun
