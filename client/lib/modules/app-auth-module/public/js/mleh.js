var appUrl = '/modules/app-auth-module';

// component
Vue.component("mleh-item", {
  props: ["mleh"],
  template: '<li key="mleh.id" v-on:click="$emit(\'click-mleh\', mleh.id)">{{ mleh.name }}</li>',
});


function fetchMlehList() {
  var _self = this;
  $.ajax({
    url: appUrl + '/blackhole',
    type: 'get',
    success: function (data) {
      // console.log(data.data)
      _self.mlehList = data.data.books
    },
    error: function(err) {
      console.log(err)
    },
    complete: function () {
      // console.log(_self)
      _self.isLoading = false
    }
   })
}

function clickedOnMleh(id) {
  console.log('clicked on ', id);
}

var appMleh = new Vue({
  el: '#app-mleh',
  data: {
    mlehList: [],
    isLoading: true
  },
  methods: {
    fetchMlehList,
    clickedOnMleh
  },
  mounted() {
    this.fetchMlehList()
  }
})