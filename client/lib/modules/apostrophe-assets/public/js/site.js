$(function() {
  // Start with your project-level client-side javascript here.
  // JQuery and lodash (_) are both included with Apostrophe, so no need to
  // worry about including them on your own.

  // jquery requests work
  // look in public/modules/apostrophe-browser-utils/js/always.js L:137
  function bindCSRF() {
    axios.interceptors.request.use(function(req) {
      console.log(`${req.method} ${req.url}`);
      var csrfToken;
      if (!apos.csrfCookieName) {
        csrfToken = 'csrf-fallback';
      } else {
        csrfToken = $.cookie(apos.csrfCookieName);
      }
      req.headers.common['X-CSRF-TOKEN'] = csrfToken;
      // Important: request interceptors **must** return the request.
      return req;
    });

  }

  // bootstrap site.js
  bindCSRF();
});
