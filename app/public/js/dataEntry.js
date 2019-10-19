var dataEntryApp = new Vue({
  el: '#dataEntryApp',
  data: {
    members: []
    //options: 'Mark'
  },
  methods: {
    fetchMembers() {
      fetch('api/dataentry/index.php')
      .then(response => response.json())
      .then(json => { dataEntryApp.members = json })
    }
  },
  created() {
    this.fetchMembers();
  }
});
