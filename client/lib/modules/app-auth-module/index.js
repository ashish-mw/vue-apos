module.exports = {
  extend: 'apostrophe-custom-pages',
  label: 'auth',
  afterConstruct: function (self) {
    self.addDispatchRoutes();
  },
  construct: function (self, options) {
    self.route('post', 'login', function (req, res) {
      return res.json({
        data: {}
      });
    });

    self.route('get', 'blackhole', function (req, res) {
      return res.json({
        data: {
          books: [
            {id: 1, name: 'Fire and Blood'},
            {id: 2, name: 'Snow and Ice'},
          ]
        }
      })
    })

    self.addDispatchRoutes = function () {
      self.dispatch('/login', self.renderLogin);
      self.dispatch('/mleh', self.renderMleh);
    }

    self.renderLogin = function (req, callback) {
      return self.sendPage(req, self.renderer('login', {}));
    }

    self.renderMleh = function (req, callback) {
      return self.sendPage(req, self.renderer('mleh', {}));
    }
  }

}