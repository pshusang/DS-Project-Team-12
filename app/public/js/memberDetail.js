var memberDetailApp = new Vue({
  el: '#memberInfo',
  data: {
    members: []
    //options: 'Mark'
  },
  methods: {
    fetchMembers() {
      fetch('api/memberDetailFolder/')
      .then(response => response.json())
      .then(json => { memberDetailApp.members = json })
    }
  },
  created() {
    this.fetchMembers();
  }
});
