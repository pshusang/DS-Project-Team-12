var memberDetailApp = new Vue({
  el: '#memberInfo',
  data: {
    members: [],
    certifications:[],
    filter: {
      fn: '',
      cert:''
    }
    //options: 'Mark'
  },
  methods: {
    fetchMembers() {
      fetch('api/memberDetailFolder/')
      .then(response => response.json())
      .then(json => { memberDetailApp.members = json })
    },

    fetchCertifications() {
      fetch('api/certificationDetailFolder/')
      .then(response => response.json())
      .then(json => { memberDetailApp.certifications = json })
    }
  },
  created() {
    this.fetchMembers();
    this.fetchCertifications();
  }
});
