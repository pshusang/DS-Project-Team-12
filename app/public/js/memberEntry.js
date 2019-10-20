var memberEntryApp = new Vue({
  el: '#memberEntryApp',
  data: {
    members: []
    //options: 'Mark'
  },
  methods: {
    fetchMembers() {
      fetch('api/dataEntry/index.php')
      .then(response => response.json())
      .then(json => { memberEntryApp.members = json })
    }
  },
  created() {
    this.fetchMembers();
  }
});

// created by pun
