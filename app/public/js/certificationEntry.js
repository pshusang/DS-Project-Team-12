var certificationEntryApp = new Vue({
  el: '#certificationEntryApp',
  data: {
    certifications: [],
    certification: {}
  },
  methods: {
    fetchCertifications() {
      fetch('api/certificationEntry/index.php')
      .then(response => response.json())
      .then(json => { certificationEntryApp.certifications = json })
    },

    handleDelete() {
    fetch('api/certificationDelete/post.php', {
      method:'POST',
      body: JSON.stringify(this.certification),
      headers:{
        "Content-Type": "application/json; charset=utf-8"
      }
      })
      .then( response => response.json() )
      .then ( json => {certificationEntryApp.certifications = json} )
      .catch ( err => {
      console.error('WORK TRIAGE ERROR:');
      console.error(err);
      })

      this.handleReset();
    },

    handleReset() {
      this.certification = {
        certificationName: '',
        certificationAgency: '',
        expirationPeriod: ''
      }
    }

  },
  created() {
    this.fetchCertifications();
    this.handleReset();
  }
});

// created by pun
