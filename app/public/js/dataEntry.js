var dataEntryApp = new Vue({
  el: '#dataEntryInfo',
  data: {
    members: []
    //options: 'Mark'
  },
  methods: {
    fetchMembers() {
      fetch('api/dataentry/')
      .then(response => response.json())
      .then(json => { dataEntryApp.members = json })
    }
  },
  created() {
    this.fetchMembers();
  }
});
