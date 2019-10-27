var memberDetailApp = new Vue({
  el: '#memberInfo',
  data: {
    members: [],
    certifications:[],
    memberContact:[],
    filter: {
      fn: '',
      cert:'',
      sn:'',
      rn:''
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
    },

    fetchMemberContact() {
      fetch('api/memberContactFolder/')
      .then(response => response.json())
      .then(json => { memberDetailApp.memberContact = json })
    },
    displayWaitingLocalDate(d) {
      return moment.utc(d).local().format("YYYY MMM Do");
    },
    displayWaitingSince(d) {
      return moment.utc(d).local().fromNow();
    }
  },
  created() {
    this.fetchMembers();
    this.fetchCertifications();
    this.fetchMemberContact();
  }
});
