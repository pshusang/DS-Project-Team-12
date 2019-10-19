var certificationEntryApp = new Vue({
  el: '#certificationEntryApp',
  data: {
    certifications: []
    //options: 'Mark'
  },
  methods: {
    fetchCertifications() {
      fetch('api/certificationEntry/index.php')
      .then(response => response.json())
      .then(json => { certificationEntryApp.certifications = json })
    }
  },
  created() {
    this.fetchCertifications();
  }
});
