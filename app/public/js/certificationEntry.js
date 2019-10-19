var certificationEntryApp = new Vue({
  el: '#certificationEntryApp',
  data: {
    certifications: []
    //options: 'Mark'
  },
  methods: {
    fetchMembers() {
      fetch('api/cerficationEntry/index.php')
      .then(response => response.json())
      .then(json => { certificationEntryApp.certifications = json })
    }
  },
  created() {
    this.fetchMembers();
  }
});
