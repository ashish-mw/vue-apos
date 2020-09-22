var appUrl = '/modules/app-auth-module';

var appLogin = new Vue({
  el: '#app-login',
  data: {
    user: {
      username: "",
      password: ""
    },
    formSubmitted: false
  },
  methods: {
    doLogin: function(event) {
      var _self = this;
      event.preventDefault()
      _self.formSubmitted = true;


      // console.log('Logging in with ', _self.user);
      axios.post(appUrl + '/login', _self.user)
        .then(function(response) {
          console.log('response ', response.data)
          _self.formSubmitted = false
        }, function(error) {
          console.log('error in request ', error);
          _self.formSubmitted = false
        })


        /*
     $.ajax({
      url: appUrl + '/login',
      type: 'post',
      dataType: 'json',
      data: _self.user,
      success: function (data) {
        console.log(data)
      },
      error: function(err) {
        console.log(err)
      },
      complete: function () {
        _self.formSubmitted = false
      }
     })
     */

    }
  }
})