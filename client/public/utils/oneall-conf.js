// var oa = document.createElement("script");
// oa.type = "text/javascript";
// oa.async = true;
// oa.src = "//final-project-gift-registry.api.oneall.com/socialize/library.js";
// var s = document.getElementsByTagName("script")[0];
// s.parentNode.insertBefore(oa, s);

var _oneall = _oneall || [];
_oneall.push([
  "social_login",
  "set_callback_uri",
  // `http://localhost:9876/api/callback?redirect=${window.location.origin}&page=${window.location.pathname}`,
  `https://final-project-gift-registry.herokuapp.com/api/callback?redirect=${window.location.origin}&page=${window.location.pathname}`,
]);
_oneall.push(["social_login", "set_providers", ["facebook", "google"]]);
_oneall.push(["social_login", "set_custom_css_uri", "https://secure.oneallcdn.com/css/api/themes/flat_w32_h32_wc_v1.css"]);
_oneall.push(["social_login", "do_render_ui", "oa_social_login"]);
