(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js
  var require_rails_ujs = __commonJS({
    "node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js"(exports, module) {
      (function() {
        var context = this;
        (function() {
          (function() {
            this.Rails = {
              linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
              buttonClickSelector: {
                selector: "button[data-remote]:not([form]), button[data-confirm]:not([form])",
                exclude: "form button"
              },
              inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
              formSubmitSelector: "form:not([data-turbo=true])",
              formInputClickSelector: "form:not([data-turbo=true]) input[type=submit], form:not([data-turbo=true]) input[type=image], form:not([data-turbo=true]) button[type=submit], form:not([data-turbo=true]) button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
              formDisableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
              formEnableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
              fileInputSelector: "input[name][type=file]:not([disabled])",
              linkDisableSelector: "a[data-disable-with], a[data-disable]",
              buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]"
            };
          }).call(this);
        }).call(context);
        var Rails2 = context.Rails;
        (function() {
          (function() {
            var nonce;
            nonce = null;
            Rails2.loadCSPNonce = function() {
              var ref;
              return nonce = (ref = document.querySelector("meta[name=csp-nonce]")) != null ? ref.content : void 0;
            };
            Rails2.cspNonce = function() {
              return nonce != null ? nonce : Rails2.loadCSPNonce();
            };
          }).call(this);
          (function() {
            var expando, m;
            m = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector;
            Rails2.matches = function(element, selector) {
              if (selector.exclude != null) {
                return m.call(element, selector.selector) && !m.call(element, selector.exclude);
              } else {
                return m.call(element, selector);
              }
            };
            expando = "_ujsData";
            Rails2.getData = function(element, key) {
              var ref;
              return (ref = element[expando]) != null ? ref[key] : void 0;
            };
            Rails2.setData = function(element, key, value) {
              if (element[expando] == null) {
                element[expando] = {};
              }
              return element[expando][key] = value;
            };
            Rails2.$ = function(selector) {
              return Array.prototype.slice.call(document.querySelectorAll(selector));
            };
          }).call(this);
          (function() {
            var $, csrfParam, csrfToken;
            $ = Rails2.$;
            csrfToken = Rails2.csrfToken = function() {
              var meta;
              meta = document.querySelector("meta[name=csrf-token]");
              return meta && meta.content;
            };
            csrfParam = Rails2.csrfParam = function() {
              var meta;
              meta = document.querySelector("meta[name=csrf-param]");
              return meta && meta.content;
            };
            Rails2.CSRFProtection = function(xhr) {
              var token;
              token = csrfToken();
              if (token != null) {
                return xhr.setRequestHeader("X-CSRF-Token", token);
              }
            };
            Rails2.refreshCSRFTokens = function() {
              var param, token;
              token = csrfToken();
              param = csrfParam();
              if (token != null && param != null) {
                return $('form input[name="' + param + '"]').forEach(function(input) {
                  return input.value = token;
                });
              }
            };
          }).call(this);
          (function() {
            var CustomEvent2, fire, matches, preventDefault;
            matches = Rails2.matches;
            CustomEvent2 = window.CustomEvent;
            if (typeof CustomEvent2 !== "function") {
              CustomEvent2 = function(event, params) {
                var evt;
                evt = document.createEvent("CustomEvent");
                evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
                return evt;
              };
              CustomEvent2.prototype = window.Event.prototype;
              preventDefault = CustomEvent2.prototype.preventDefault;
              CustomEvent2.prototype.preventDefault = function() {
                var result;
                result = preventDefault.call(this);
                if (this.cancelable && !this.defaultPrevented) {
                  Object.defineProperty(this, "defaultPrevented", {
                    get: function() {
                      return true;
                    }
                  });
                }
                return result;
              };
            }
            fire = Rails2.fire = function(obj, name, data) {
              var event;
              event = new CustomEvent2(name, {
                bubbles: true,
                cancelable: true,
                detail: data
              });
              obj.dispatchEvent(event);
              return !event.defaultPrevented;
            };
            Rails2.stopEverything = function(e) {
              fire(e.target, "ujs:everythingStopped");
              e.preventDefault();
              e.stopPropagation();
              return e.stopImmediatePropagation();
            };
            Rails2.delegate = function(element, selector, eventType, handler) {
              return element.addEventListener(eventType, function(e) {
                var target;
                target = e.target;
                while (!(!(target instanceof Element) || matches(target, selector))) {
                  target = target.parentNode;
                }
                if (target instanceof Element && handler.call(target, e) === false) {
                  e.preventDefault();
                  return e.stopPropagation();
                }
              });
            };
          }).call(this);
          (function() {
            var AcceptHeaders, CSRFProtection, createXHR, cspNonce, fire, prepareOptions, processResponse;
            cspNonce = Rails2.cspNonce, CSRFProtection = Rails2.CSRFProtection, fire = Rails2.fire;
            AcceptHeaders = {
              "*": "*/*",
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript",
              script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            };
            Rails2.ajax = function(options) {
              var xhr;
              options = prepareOptions(options);
              xhr = createXHR(options, function() {
                var ref, response;
                response = processResponse((ref = xhr.response) != null ? ref : xhr.responseText, xhr.getResponseHeader("Content-Type"));
                if (Math.floor(xhr.status / 100) === 2) {
                  if (typeof options.success === "function") {
                    options.success(response, xhr.statusText, xhr);
                  }
                } else {
                  if (typeof options.error === "function") {
                    options.error(response, xhr.statusText, xhr);
                  }
                }
                return typeof options.complete === "function" ? options.complete(xhr, xhr.statusText) : void 0;
              });
              if (options.beforeSend != null && !options.beforeSend(xhr, options)) {
                return false;
              }
              if (xhr.readyState === XMLHttpRequest.OPENED) {
                return xhr.send(options.data);
              }
            };
            prepareOptions = function(options) {
              options.url = options.url || location.href;
              options.type = options.type.toUpperCase();
              if (options.type === "GET" && options.data) {
                if (options.url.indexOf("?") < 0) {
                  options.url += "?" + options.data;
                } else {
                  options.url += "&" + options.data;
                }
              }
              if (AcceptHeaders[options.dataType] == null) {
                options.dataType = "*";
              }
              options.accept = AcceptHeaders[options.dataType];
              if (options.dataType !== "*") {
                options.accept += ", */*; q=0.01";
              }
              return options;
            };
            createXHR = function(options, done) {
              var xhr;
              xhr = new XMLHttpRequest();
              xhr.open(options.type, options.url, true);
              xhr.setRequestHeader("Accept", options.accept);
              if (typeof options.data === "string") {
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
              }
              if (!options.crossDomain) {
                xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                CSRFProtection(xhr);
              }
              xhr.withCredentials = !!options.withCredentials;
              xhr.onreadystatechange = function() {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                  return done(xhr);
                }
              };
              return xhr;
            };
            processResponse = function(response, type) {
              var parser, script;
              if (typeof response === "string" && typeof type === "string") {
                if (type.match(/\bjson\b/)) {
                  try {
                    response = JSON.parse(response);
                  } catch (error) {
                  }
                } else if (type.match(/\b(?:java|ecma)script\b/)) {
                  script = document.createElement("script");
                  script.setAttribute("nonce", cspNonce());
                  script.text = response;
                  document.head.appendChild(script).parentNode.removeChild(script);
                } else if (type.match(/\b(xml|html|svg)\b/)) {
                  parser = new DOMParser();
                  type = type.replace(/;.+/, "");
                  try {
                    response = parser.parseFromString(response, type);
                  } catch (error) {
                  }
                }
              }
              return response;
            };
            Rails2.href = function(element) {
              return element.href;
            };
            Rails2.isCrossDomain = function(url) {
              var e, originAnchor, urlAnchor;
              originAnchor = document.createElement("a");
              originAnchor.href = location.href;
              urlAnchor = document.createElement("a");
              try {
                urlAnchor.href = url;
                return !((!urlAnchor.protocol || urlAnchor.protocol === ":") && !urlAnchor.host || originAnchor.protocol + "//" + originAnchor.host === urlAnchor.protocol + "//" + urlAnchor.host);
              } catch (error) {
                e = error;
                return true;
              }
            };
          }).call(this);
          (function() {
            var matches, toArray;
            matches = Rails2.matches;
            toArray = function(e) {
              return Array.prototype.slice.call(e);
            };
            Rails2.serializeElement = function(element, additionalParam) {
              var inputs, params;
              inputs = [element];
              if (matches(element, "form")) {
                inputs = toArray(element.elements);
              }
              params = [];
              inputs.forEach(function(input) {
                if (!input.name || input.disabled) {
                  return;
                }
                if (matches(input, "fieldset[disabled] *")) {
                  return;
                }
                if (matches(input, "select")) {
                  return toArray(input.options).forEach(function(option) {
                    if (option.selected) {
                      return params.push({
                        name: input.name,
                        value: option.value
                      });
                    }
                  });
                } else if (input.checked || ["radio", "checkbox", "submit"].indexOf(input.type) === -1) {
                  return params.push({
                    name: input.name,
                    value: input.value
                  });
                }
              });
              if (additionalParam) {
                params.push(additionalParam);
              }
              return params.map(function(param) {
                if (param.name != null) {
                  return encodeURIComponent(param.name) + "=" + encodeURIComponent(param.value);
                } else {
                  return param;
                }
              }).join("&");
            };
            Rails2.formElements = function(form, selector) {
              if (matches(form, "form")) {
                return toArray(form.elements).filter(function(el) {
                  return matches(el, selector);
                });
              } else {
                return toArray(form.querySelectorAll(selector));
              }
            };
          }).call(this);
          (function() {
            var allowAction, fire, stopEverything;
            fire = Rails2.fire, stopEverything = Rails2.stopEverything;
            Rails2.handleConfirm = function(e) {
              if (!allowAction(this)) {
                return stopEverything(e);
              }
            };
            Rails2.confirm = function(message, element) {
              return confirm(message);
            };
            allowAction = function(element) {
              var answer, callback, message;
              message = element.getAttribute("data-confirm");
              if (!message) {
                return true;
              }
              answer = false;
              if (fire(element, "confirm")) {
                try {
                  answer = Rails2.confirm(message, element);
                } catch (error) {
                }
                callback = fire(element, "confirm:complete", [answer]);
              }
              return answer && callback;
            };
          }).call(this);
          (function() {
            var disableFormElement, disableFormElements, disableLinkElement, enableFormElement, enableFormElements, enableLinkElement, formElements, getData, isXhrRedirect, matches, setData, stopEverything;
            matches = Rails2.matches, getData = Rails2.getData, setData = Rails2.setData, stopEverything = Rails2.stopEverything, formElements = Rails2.formElements;
            Rails2.handleDisabledElement = function(e) {
              var element;
              element = this;
              if (element.disabled) {
                return stopEverything(e);
              }
            };
            Rails2.enableElement = function(e) {
              var element;
              if (e instanceof Event) {
                if (isXhrRedirect(e)) {
                  return;
                }
                element = e.target;
              } else {
                element = e;
              }
              if (matches(element, Rails2.linkDisableSelector)) {
                return enableLinkElement(element);
              } else if (matches(element, Rails2.buttonDisableSelector) || matches(element, Rails2.formEnableSelector)) {
                return enableFormElement(element);
              } else if (matches(element, Rails2.formSubmitSelector)) {
                return enableFormElements(element);
              }
            };
            Rails2.disableElement = function(e) {
              var element;
              element = e instanceof Event ? e.target : e;
              if (matches(element, Rails2.linkDisableSelector)) {
                return disableLinkElement(element);
              } else if (matches(element, Rails2.buttonDisableSelector) || matches(element, Rails2.formDisableSelector)) {
                return disableFormElement(element);
              } else if (matches(element, Rails2.formSubmitSelector)) {
                return disableFormElements(element);
              }
            };
            disableLinkElement = function(element) {
              var replacement;
              if (getData(element, "ujs:disabled")) {
                return;
              }
              replacement = element.getAttribute("data-disable-with");
              if (replacement != null) {
                setData(element, "ujs:enable-with", element.innerHTML);
                element.innerHTML = replacement;
              }
              element.addEventListener("click", stopEverything);
              return setData(element, "ujs:disabled", true);
            };
            enableLinkElement = function(element) {
              var originalText;
              originalText = getData(element, "ujs:enable-with");
              if (originalText != null) {
                element.innerHTML = originalText;
                setData(element, "ujs:enable-with", null);
              }
              element.removeEventListener("click", stopEverything);
              return setData(element, "ujs:disabled", null);
            };
            disableFormElements = function(form) {
              return formElements(form, Rails2.formDisableSelector).forEach(disableFormElement);
            };
            disableFormElement = function(element) {
              var replacement;
              if (getData(element, "ujs:disabled")) {
                return;
              }
              replacement = element.getAttribute("data-disable-with");
              if (replacement != null) {
                if (matches(element, "button")) {
                  setData(element, "ujs:enable-with", element.innerHTML);
                  element.innerHTML = replacement;
                } else {
                  setData(element, "ujs:enable-with", element.value);
                  element.value = replacement;
                }
              }
              element.disabled = true;
              return setData(element, "ujs:disabled", true);
            };
            enableFormElements = function(form) {
              return formElements(form, Rails2.formEnableSelector).forEach(enableFormElement);
            };
            enableFormElement = function(element) {
              var originalText;
              originalText = getData(element, "ujs:enable-with");
              if (originalText != null) {
                if (matches(element, "button")) {
                  element.innerHTML = originalText;
                } else {
                  element.value = originalText;
                }
                setData(element, "ujs:enable-with", null);
              }
              element.disabled = false;
              return setData(element, "ujs:disabled", null);
            };
            isXhrRedirect = function(event) {
              var ref, xhr;
              xhr = (ref = event.detail) != null ? ref[0] : void 0;
              return (xhr != null ? xhr.getResponseHeader("X-Xhr-Redirect") : void 0) != null;
            };
          }).call(this);
          (function() {
            var stopEverything;
            stopEverything = Rails2.stopEverything;
            Rails2.handleMethod = function(e) {
              var csrfParam, csrfToken, form, formContent, href, link, method;
              link = this;
              method = link.getAttribute("data-method");
              if (!method) {
                return;
              }
              href = Rails2.href(link);
              csrfToken = Rails2.csrfToken();
              csrfParam = Rails2.csrfParam();
              form = document.createElement("form");
              formContent = "<input name='_method' value='" + method + "' type='hidden' />";
              if (csrfParam != null && csrfToken != null && !Rails2.isCrossDomain(href)) {
                formContent += "<input name='" + csrfParam + "' value='" + csrfToken + "' type='hidden' />";
              }
              formContent += '<input type="submit" />';
              form.method = "post";
              form.action = href;
              form.target = link.target;
              form.innerHTML = formContent;
              form.style.display = "none";
              document.body.appendChild(form);
              form.querySelector('[type="submit"]').click();
              return stopEverything(e);
            };
          }).call(this);
          (function() {
            var ajax, fire, getData, isCrossDomain, isRemote, matches, serializeElement, setData, stopEverything, slice = [].slice;
            matches = Rails2.matches, getData = Rails2.getData, setData = Rails2.setData, fire = Rails2.fire, stopEverything = Rails2.stopEverything, ajax = Rails2.ajax, isCrossDomain = Rails2.isCrossDomain, serializeElement = Rails2.serializeElement;
            isRemote = function(element) {
              var value;
              value = element.getAttribute("data-remote");
              return value != null && value !== "false";
            };
            Rails2.handleRemote = function(e) {
              var button, data, dataType, element, method, url, withCredentials;
              element = this;
              if (!isRemote(element)) {
                return true;
              }
              if (!fire(element, "ajax:before")) {
                fire(element, "ajax:stopped");
                return false;
              }
              withCredentials = element.getAttribute("data-with-credentials");
              dataType = element.getAttribute("data-type") || "script";
              if (matches(element, Rails2.formSubmitSelector)) {
                button = getData(element, "ujs:submit-button");
                method = getData(element, "ujs:submit-button-formmethod") || element.method;
                url = getData(element, "ujs:submit-button-formaction") || element.getAttribute("action") || location.href;
                if (method.toUpperCase() === "GET") {
                  url = url.replace(/\?.*$/, "");
                }
                if (element.enctype === "multipart/form-data") {
                  data = new FormData(element);
                  if (button != null) {
                    data.append(button.name, button.value);
                  }
                } else {
                  data = serializeElement(element, button);
                }
                setData(element, "ujs:submit-button", null);
                setData(element, "ujs:submit-button-formmethod", null);
                setData(element, "ujs:submit-button-formaction", null);
              } else if (matches(element, Rails2.buttonClickSelector) || matches(element, Rails2.inputChangeSelector)) {
                method = element.getAttribute("data-method");
                url = element.getAttribute("data-url");
                data = serializeElement(element, element.getAttribute("data-params"));
              } else {
                method = element.getAttribute("data-method");
                url = Rails2.href(element);
                data = element.getAttribute("data-params");
              }
              ajax({
                type: method || "GET",
                url,
                data,
                dataType,
                beforeSend: function(xhr, options) {
                  if (fire(element, "ajax:beforeSend", [xhr, options])) {
                    return fire(element, "ajax:send", [xhr]);
                  } else {
                    fire(element, "ajax:stopped");
                    return false;
                  }
                },
                success: function() {
                  var args;
                  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
                  return fire(element, "ajax:success", args);
                },
                error: function() {
                  var args;
                  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
                  return fire(element, "ajax:error", args);
                },
                complete: function() {
                  var args;
                  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
                  return fire(element, "ajax:complete", args);
                },
                crossDomain: isCrossDomain(url),
                withCredentials: withCredentials != null && withCredentials !== "false"
              });
              return stopEverything(e);
            };
            Rails2.formSubmitButtonClick = function(e) {
              var button, form;
              button = this;
              form = button.form;
              if (!form) {
                return;
              }
              if (button.name) {
                setData(form, "ujs:submit-button", {
                  name: button.name,
                  value: button.value
                });
              }
              setData(form, "ujs:formnovalidate-button", button.formNoValidate);
              setData(form, "ujs:submit-button-formaction", button.getAttribute("formaction"));
              return setData(form, "ujs:submit-button-formmethod", button.getAttribute("formmethod"));
            };
            Rails2.preventInsignificantClick = function(e) {
              var data, insignificantMetaClick, link, metaClick, method, nonPrimaryMouseClick;
              link = this;
              method = (link.getAttribute("data-method") || "GET").toUpperCase();
              data = link.getAttribute("data-params");
              metaClick = e.metaKey || e.ctrlKey;
              insignificantMetaClick = metaClick && method === "GET" && !data;
              nonPrimaryMouseClick = e.button != null && e.button !== 0;
              if (nonPrimaryMouseClick || insignificantMetaClick) {
                return e.stopImmediatePropagation();
              }
            };
          }).call(this);
          (function() {
            var $, CSRFProtection, delegate, disableElement, enableElement, fire, formSubmitButtonClick, getData, handleConfirm, handleDisabledElement, handleMethod, handleRemote, loadCSPNonce, preventInsignificantClick, refreshCSRFTokens;
            fire = Rails2.fire, delegate = Rails2.delegate, getData = Rails2.getData, $ = Rails2.$, refreshCSRFTokens = Rails2.refreshCSRFTokens, CSRFProtection = Rails2.CSRFProtection, loadCSPNonce = Rails2.loadCSPNonce, enableElement = Rails2.enableElement, disableElement = Rails2.disableElement, handleDisabledElement = Rails2.handleDisabledElement, handleConfirm = Rails2.handleConfirm, preventInsignificantClick = Rails2.preventInsignificantClick, handleRemote = Rails2.handleRemote, formSubmitButtonClick = Rails2.formSubmitButtonClick, handleMethod = Rails2.handleMethod;
            if (typeof jQuery !== "undefined" && jQuery !== null && jQuery.ajax != null) {
              if (jQuery.rails) {
                throw new Error("If you load both jquery_ujs and rails-ujs, use rails-ujs only.");
              }
              jQuery.rails = Rails2;
              jQuery.ajaxPrefilter(function(options, originalOptions, xhr) {
                if (!options.crossDomain) {
                  return CSRFProtection(xhr);
                }
              });
            }
            Rails2.start = function() {
              if (window._rails_loaded) {
                throw new Error("rails-ujs has already been loaded!");
              }
              window.addEventListener("pageshow", function() {
                $(Rails2.formEnableSelector).forEach(function(el) {
                  if (getData(el, "ujs:disabled")) {
                    return enableElement(el);
                  }
                });
                return $(Rails2.linkDisableSelector).forEach(function(el) {
                  if (getData(el, "ujs:disabled")) {
                    return enableElement(el);
                  }
                });
              });
              delegate(document, Rails2.linkDisableSelector, "ajax:complete", enableElement);
              delegate(document, Rails2.linkDisableSelector, "ajax:stopped", enableElement);
              delegate(document, Rails2.buttonDisableSelector, "ajax:complete", enableElement);
              delegate(document, Rails2.buttonDisableSelector, "ajax:stopped", enableElement);
              delegate(document, Rails2.linkClickSelector, "click", preventInsignificantClick);
              delegate(document, Rails2.linkClickSelector, "click", handleDisabledElement);
              delegate(document, Rails2.linkClickSelector, "click", handleConfirm);
              delegate(document, Rails2.linkClickSelector, "click", disableElement);
              delegate(document, Rails2.linkClickSelector, "click", handleRemote);
              delegate(document, Rails2.linkClickSelector, "click", handleMethod);
              delegate(document, Rails2.buttonClickSelector, "click", preventInsignificantClick);
              delegate(document, Rails2.buttonClickSelector, "click", handleDisabledElement);
              delegate(document, Rails2.buttonClickSelector, "click", handleConfirm);
              delegate(document, Rails2.buttonClickSelector, "click", disableElement);
              delegate(document, Rails2.buttonClickSelector, "click", handleRemote);
              delegate(document, Rails2.inputChangeSelector, "change", handleDisabledElement);
              delegate(document, Rails2.inputChangeSelector, "change", handleConfirm);
              delegate(document, Rails2.inputChangeSelector, "change", handleRemote);
              delegate(document, Rails2.formSubmitSelector, "submit", handleDisabledElement);
              delegate(document, Rails2.formSubmitSelector, "submit", handleConfirm);
              delegate(document, Rails2.formSubmitSelector, "submit", handleRemote);
              delegate(document, Rails2.formSubmitSelector, "submit", function(e) {
                return setTimeout(function() {
                  return disableElement(e);
                }, 13);
              });
              delegate(document, Rails2.formSubmitSelector, "ajax:send", disableElement);
              delegate(document, Rails2.formSubmitSelector, "ajax:complete", enableElement);
              delegate(document, Rails2.formInputClickSelector, "click", preventInsignificantClick);
              delegate(document, Rails2.formInputClickSelector, "click", handleDisabledElement);
              delegate(document, Rails2.formInputClickSelector, "click", handleConfirm);
              delegate(document, Rails2.formInputClickSelector, "click", formSubmitButtonClick);
              document.addEventListener("DOMContentLoaded", refreshCSRFTokens);
              document.addEventListener("DOMContentLoaded", loadCSPNonce);
              return window._rails_loaded = true;
            };
            if (window.Rails === Rails2 && fire(document, "rails:attachBindings")) {
              Rails2.start();
            }
          }).call(this);
        }).call(this);
        if (typeof module === "object" && module.exports) {
          module.exports = Rails2;
        } else if (typeof define === "function" && define.amd) {
          define(Rails2);
        }
      }).call(exports);
    }
  });

  // node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js
  var require_activestorage = __commonJS({
    "node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : factory(global.ActiveStorage = {});
      })(exports, function(exports2) {
        "use strict";
        function createCommonjsModule(fn, module2) {
          return module2 = {
            exports: {}
          }, fn(module2, module2.exports), module2.exports;
        }
        var sparkMd5 = createCommonjsModule(function(module2, exports3) {
          (function(factory) {
            {
              module2.exports = factory();
            }
          })(function(undefined2) {
            var hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
            function md5cycle(x, k) {
              var a = x[0], b = x[1], c = x[2], d = x[3];
              a += (b & c | ~b & d) + k[0] - 680876936 | 0;
              a = (a << 7 | a >>> 25) + b | 0;
              d += (a & b | ~a & c) + k[1] - 389564586 | 0;
              d = (d << 12 | d >>> 20) + a | 0;
              c += (d & a | ~d & b) + k[2] + 606105819 | 0;
              c = (c << 17 | c >>> 15) + d | 0;
              b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
              b = (b << 22 | b >>> 10) + c | 0;
              a += (b & c | ~b & d) + k[4] - 176418897 | 0;
              a = (a << 7 | a >>> 25) + b | 0;
              d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
              d = (d << 12 | d >>> 20) + a | 0;
              c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
              c = (c << 17 | c >>> 15) + d | 0;
              b += (c & d | ~c & a) + k[7] - 45705983 | 0;
              b = (b << 22 | b >>> 10) + c | 0;
              a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
              a = (a << 7 | a >>> 25) + b | 0;
              d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
              d = (d << 12 | d >>> 20) + a | 0;
              c += (d & a | ~d & b) + k[10] - 42063 | 0;
              c = (c << 17 | c >>> 15) + d | 0;
              b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
              b = (b << 22 | b >>> 10) + c | 0;
              a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
              a = (a << 7 | a >>> 25) + b | 0;
              d += (a & b | ~a & c) + k[13] - 40341101 | 0;
              d = (d << 12 | d >>> 20) + a | 0;
              c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
              c = (c << 17 | c >>> 15) + d | 0;
              b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
              b = (b << 22 | b >>> 10) + c | 0;
              a += (b & d | c & ~d) + k[1] - 165796510 | 0;
              a = (a << 5 | a >>> 27) + b | 0;
              d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
              d = (d << 9 | d >>> 23) + a | 0;
              c += (d & b | a & ~b) + k[11] + 643717713 | 0;
              c = (c << 14 | c >>> 18) + d | 0;
              b += (c & a | d & ~a) + k[0] - 373897302 | 0;
              b = (b << 20 | b >>> 12) + c | 0;
              a += (b & d | c & ~d) + k[5] - 701558691 | 0;
              a = (a << 5 | a >>> 27) + b | 0;
              d += (a & c | b & ~c) + k[10] + 38016083 | 0;
              d = (d << 9 | d >>> 23) + a | 0;
              c += (d & b | a & ~b) + k[15] - 660478335 | 0;
              c = (c << 14 | c >>> 18) + d | 0;
              b += (c & a | d & ~a) + k[4] - 405537848 | 0;
              b = (b << 20 | b >>> 12) + c | 0;
              a += (b & d | c & ~d) + k[9] + 568446438 | 0;
              a = (a << 5 | a >>> 27) + b | 0;
              d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
              d = (d << 9 | d >>> 23) + a | 0;
              c += (d & b | a & ~b) + k[3] - 187363961 | 0;
              c = (c << 14 | c >>> 18) + d | 0;
              b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
              b = (b << 20 | b >>> 12) + c | 0;
              a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
              a = (a << 5 | a >>> 27) + b | 0;
              d += (a & c | b & ~c) + k[2] - 51403784 | 0;
              d = (d << 9 | d >>> 23) + a | 0;
              c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
              c = (c << 14 | c >>> 18) + d | 0;
              b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
              b = (b << 20 | b >>> 12) + c | 0;
              a += (b ^ c ^ d) + k[5] - 378558 | 0;
              a = (a << 4 | a >>> 28) + b | 0;
              d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
              d = (d << 11 | d >>> 21) + a | 0;
              c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
              c = (c << 16 | c >>> 16) + d | 0;
              b += (c ^ d ^ a) + k[14] - 35309556 | 0;
              b = (b << 23 | b >>> 9) + c | 0;
              a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
              a = (a << 4 | a >>> 28) + b | 0;
              d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
              d = (d << 11 | d >>> 21) + a | 0;
              c += (d ^ a ^ b) + k[7] - 155497632 | 0;
              c = (c << 16 | c >>> 16) + d | 0;
              b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
              b = (b << 23 | b >>> 9) + c | 0;
              a += (b ^ c ^ d) + k[13] + 681279174 | 0;
              a = (a << 4 | a >>> 28) + b | 0;
              d += (a ^ b ^ c) + k[0] - 358537222 | 0;
              d = (d << 11 | d >>> 21) + a | 0;
              c += (d ^ a ^ b) + k[3] - 722521979 | 0;
              c = (c << 16 | c >>> 16) + d | 0;
              b += (c ^ d ^ a) + k[6] + 76029189 | 0;
              b = (b << 23 | b >>> 9) + c | 0;
              a += (b ^ c ^ d) + k[9] - 640364487 | 0;
              a = (a << 4 | a >>> 28) + b | 0;
              d += (a ^ b ^ c) + k[12] - 421815835 | 0;
              d = (d << 11 | d >>> 21) + a | 0;
              c += (d ^ a ^ b) + k[15] + 530742520 | 0;
              c = (c << 16 | c >>> 16) + d | 0;
              b += (c ^ d ^ a) + k[2] - 995338651 | 0;
              b = (b << 23 | b >>> 9) + c | 0;
              a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
              a = (a << 6 | a >>> 26) + b | 0;
              d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
              d = (d << 10 | d >>> 22) + a | 0;
              c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
              c = (c << 15 | c >>> 17) + d | 0;
              b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
              b = (b << 21 | b >>> 11) + c | 0;
              a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
              a = (a << 6 | a >>> 26) + b | 0;
              d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
              d = (d << 10 | d >>> 22) + a | 0;
              c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
              c = (c << 15 | c >>> 17) + d | 0;
              b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
              b = (b << 21 | b >>> 11) + c | 0;
              a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
              a = (a << 6 | a >>> 26) + b | 0;
              d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
              d = (d << 10 | d >>> 22) + a | 0;
              c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
              c = (c << 15 | c >>> 17) + d | 0;
              b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
              b = (b << 21 | b >>> 11) + c | 0;
              a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
              a = (a << 6 | a >>> 26) + b | 0;
              d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
              d = (d << 10 | d >>> 22) + a | 0;
              c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
              c = (c << 15 | c >>> 17) + d | 0;
              b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
              b = (b << 21 | b >>> 11) + c | 0;
              x[0] = a + x[0] | 0;
              x[1] = b + x[1] | 0;
              x[2] = c + x[2] | 0;
              x[3] = d + x[3] | 0;
            }
            function md5blk(s) {
              var md5blks = [], i;
              for (i = 0; i < 64; i += 4) {
                md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
              }
              return md5blks;
            }
            function md5blk_array(a) {
              var md5blks = [], i;
              for (i = 0; i < 64; i += 4) {
                md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
              }
              return md5blks;
            }
            function md51(s) {
              var n = s.length, state = [1732584193, -271733879, -1732584194, 271733878], i, length, tail, tmp, lo, hi;
              for (i = 64; i <= n; i += 64) {
                md5cycle(state, md5blk(s.substring(i - 64, i)));
              }
              s = s.substring(i - 64);
              length = s.length;
              tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
              for (i = 0; i < length; i += 1) {
                tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
              }
              tail[i >> 2] |= 128 << (i % 4 << 3);
              if (i > 55) {
                md5cycle(state, tail);
                for (i = 0; i < 16; i += 1) {
                  tail[i] = 0;
                }
              }
              tmp = n * 8;
              tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
              lo = parseInt(tmp[2], 16);
              hi = parseInt(tmp[1], 16) || 0;
              tail[14] = lo;
              tail[15] = hi;
              md5cycle(state, tail);
              return state;
            }
            function md51_array(a) {
              var n = a.length, state = [1732584193, -271733879, -1732584194, 271733878], i, length, tail, tmp, lo, hi;
              for (i = 64; i <= n; i += 64) {
                md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
              }
              a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
              length = a.length;
              tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
              for (i = 0; i < length; i += 1) {
                tail[i >> 2] |= a[i] << (i % 4 << 3);
              }
              tail[i >> 2] |= 128 << (i % 4 << 3);
              if (i > 55) {
                md5cycle(state, tail);
                for (i = 0; i < 16; i += 1) {
                  tail[i] = 0;
                }
              }
              tmp = n * 8;
              tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
              lo = parseInt(tmp[2], 16);
              hi = parseInt(tmp[1], 16) || 0;
              tail[14] = lo;
              tail[15] = hi;
              md5cycle(state, tail);
              return state;
            }
            function rhex(n) {
              var s = "", j;
              for (j = 0; j < 4; j += 1) {
                s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
              }
              return s;
            }
            function hex(x) {
              var i;
              for (i = 0; i < x.length; i += 1) {
                x[i] = rhex(x[i]);
              }
              return x.join("");
            }
            if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") ;
            if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
              (function() {
                function clamp(val, length) {
                  val = val | 0 || 0;
                  if (val < 0) {
                    return Math.max(val + length, 0);
                  }
                  return Math.min(val, length);
                }
                ArrayBuffer.prototype.slice = function(from, to) {
                  var length = this.byteLength, begin = clamp(from, length), end = length, num, target, targetArray, sourceArray;
                  if (to !== undefined2) {
                    end = clamp(to, length);
                  }
                  if (begin > end) {
                    return new ArrayBuffer(0);
                  }
                  num = end - begin;
                  target = new ArrayBuffer(num);
                  targetArray = new Uint8Array(target);
                  sourceArray = new Uint8Array(this, begin, num);
                  targetArray.set(sourceArray);
                  return target;
                };
              })();
            }
            function toUtf8(str) {
              if (/[\u0080-\uFFFF]/.test(str)) {
                str = unescape(encodeURIComponent(str));
              }
              return str;
            }
            function utf8Str2ArrayBuffer(str, returnUInt8Array) {
              var length = str.length, buff = new ArrayBuffer(length), arr = new Uint8Array(buff), i;
              for (i = 0; i < length; i += 1) {
                arr[i] = str.charCodeAt(i);
              }
              return returnUInt8Array ? arr : buff;
            }
            function arrayBuffer2Utf8Str(buff) {
              return String.fromCharCode.apply(null, new Uint8Array(buff));
            }
            function concatenateArrayBuffers(first, second, returnUInt8Array) {
              var result = new Uint8Array(first.byteLength + second.byteLength);
              result.set(new Uint8Array(first));
              result.set(new Uint8Array(second), first.byteLength);
              return returnUInt8Array ? result : result.buffer;
            }
            function hexToBinaryString(hex2) {
              var bytes = [], length = hex2.length, x;
              for (x = 0; x < length - 1; x += 2) {
                bytes.push(parseInt(hex2.substr(x, 2), 16));
              }
              return String.fromCharCode.apply(String, bytes);
            }
            function SparkMD5() {
              this.reset();
            }
            SparkMD5.prototype.append = function(str) {
              this.appendBinary(toUtf8(str));
              return this;
            };
            SparkMD5.prototype.appendBinary = function(contents) {
              this._buff += contents;
              this._length += contents.length;
              var length = this._buff.length, i;
              for (i = 64; i <= length; i += 64) {
                md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
              }
              this._buff = this._buff.substring(i - 64);
              return this;
            };
            SparkMD5.prototype.end = function(raw) {
              var buff = this._buff, length = buff.length, i, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ret;
              for (i = 0; i < length; i += 1) {
                tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
              }
              this._finish(tail, length);
              ret = hex(this._hash);
              if (raw) {
                ret = hexToBinaryString(ret);
              }
              this.reset();
              return ret;
            };
            SparkMD5.prototype.reset = function() {
              this._buff = "";
              this._length = 0;
              this._hash = [1732584193, -271733879, -1732584194, 271733878];
              return this;
            };
            SparkMD5.prototype.getState = function() {
              return {
                buff: this._buff,
                length: this._length,
                hash: this._hash
              };
            };
            SparkMD5.prototype.setState = function(state) {
              this._buff = state.buff;
              this._length = state.length;
              this._hash = state.hash;
              return this;
            };
            SparkMD5.prototype.destroy = function() {
              delete this._hash;
              delete this._buff;
              delete this._length;
            };
            SparkMD5.prototype._finish = function(tail, length) {
              var i = length, tmp, lo, hi;
              tail[i >> 2] |= 128 << (i % 4 << 3);
              if (i > 55) {
                md5cycle(this._hash, tail);
                for (i = 0; i < 16; i += 1) {
                  tail[i] = 0;
                }
              }
              tmp = this._length * 8;
              tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
              lo = parseInt(tmp[2], 16);
              hi = parseInt(tmp[1], 16) || 0;
              tail[14] = lo;
              tail[15] = hi;
              md5cycle(this._hash, tail);
            };
            SparkMD5.hash = function(str, raw) {
              return SparkMD5.hashBinary(toUtf8(str), raw);
            };
            SparkMD5.hashBinary = function(content, raw) {
              var hash = md51(content), ret = hex(hash);
              return raw ? hexToBinaryString(ret) : ret;
            };
            SparkMD5.ArrayBuffer = function() {
              this.reset();
            };
            SparkMD5.ArrayBuffer.prototype.append = function(arr) {
              var buff = concatenateArrayBuffers(this._buff.buffer, arr, true), length = buff.length, i;
              this._length += arr.byteLength;
              for (i = 64; i <= length; i += 64) {
                md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
              }
              this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
              return this;
            };
            SparkMD5.ArrayBuffer.prototype.end = function(raw) {
              var buff = this._buff, length = buff.length, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i, ret;
              for (i = 0; i < length; i += 1) {
                tail[i >> 2] |= buff[i] << (i % 4 << 3);
              }
              this._finish(tail, length);
              ret = hex(this._hash);
              if (raw) {
                ret = hexToBinaryString(ret);
              }
              this.reset();
              return ret;
            };
            SparkMD5.ArrayBuffer.prototype.reset = function() {
              this._buff = new Uint8Array(0);
              this._length = 0;
              this._hash = [1732584193, -271733879, -1732584194, 271733878];
              return this;
            };
            SparkMD5.ArrayBuffer.prototype.getState = function() {
              var state = SparkMD5.prototype.getState.call(this);
              state.buff = arrayBuffer2Utf8Str(state.buff);
              return state;
            };
            SparkMD5.ArrayBuffer.prototype.setState = function(state) {
              state.buff = utf8Str2ArrayBuffer(state.buff, true);
              return SparkMD5.prototype.setState.call(this, state);
            };
            SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
            SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;
            SparkMD5.ArrayBuffer.hash = function(arr, raw) {
              var hash = md51_array(new Uint8Array(arr)), ret = hex(hash);
              return raw ? hexToBinaryString(ret) : ret;
            };
            return SparkMD5;
          });
        });
        var classCallCheck = function(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        };
        var createClass = /* @__PURE__ */ function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var fileSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;
        var FileChecksum = function() {
          createClass(FileChecksum2, null, [{
            key: "create",
            value: function create(file, callback) {
              var instance = new FileChecksum2(file);
              instance.create(callback);
            }
          }]);
          function FileChecksum2(file) {
            classCallCheck(this, FileChecksum2);
            this.file = file;
            this.chunkSize = 2097152;
            this.chunkCount = Math.ceil(this.file.size / this.chunkSize);
            this.chunkIndex = 0;
          }
          createClass(FileChecksum2, [{
            key: "create",
            value: function create(callback) {
              var _this = this;
              this.callback = callback;
              this.md5Buffer = new sparkMd5.ArrayBuffer();
              this.fileReader = new FileReader();
              this.fileReader.addEventListener("load", function(event) {
                return _this.fileReaderDidLoad(event);
              });
              this.fileReader.addEventListener("error", function(event) {
                return _this.fileReaderDidError(event);
              });
              this.readNextChunk();
            }
          }, {
            key: "fileReaderDidLoad",
            value: function fileReaderDidLoad(event) {
              this.md5Buffer.append(event.target.result);
              if (!this.readNextChunk()) {
                var binaryDigest = this.md5Buffer.end(true);
                var base64digest = btoa(binaryDigest);
                this.callback(null, base64digest);
              }
            }
          }, {
            key: "fileReaderDidError",
            value: function fileReaderDidError(event) {
              this.callback("Error reading " + this.file.name);
            }
          }, {
            key: "readNextChunk",
            value: function readNextChunk() {
              if (this.chunkIndex < this.chunkCount || this.chunkIndex == 0 && this.chunkCount == 0) {
                var start3 = this.chunkIndex * this.chunkSize;
                var end = Math.min(start3 + this.chunkSize, this.file.size);
                var bytes = fileSlice.call(this.file, start3, end);
                this.fileReader.readAsArrayBuffer(bytes);
                this.chunkIndex++;
                return true;
              } else {
                return false;
              }
            }
          }]);
          return FileChecksum2;
        }();
        function getMetaValue(name) {
          var element = findElement(document.head, 'meta[name="' + name + '"]');
          if (element) {
            return element.getAttribute("content");
          }
        }
        function findElements(root, selector) {
          if (typeof root == "string") {
            selector = root;
            root = document;
          }
          var elements = root.querySelectorAll(selector);
          return toArray$1(elements);
        }
        function findElement(root, selector) {
          if (typeof root == "string") {
            selector = root;
            root = document;
          }
          return root.querySelector(selector);
        }
        function dispatchEvent(element, type) {
          var eventInit = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          var disabled = element.disabled;
          var bubbles = eventInit.bubbles, cancelable = eventInit.cancelable, detail = eventInit.detail;
          var event = document.createEvent("Event");
          event.initEvent(type, bubbles || true, cancelable || true);
          event.detail = detail || {};
          try {
            element.disabled = false;
            element.dispatchEvent(event);
          } finally {
            element.disabled = disabled;
          }
          return event;
        }
        function toArray$1(value) {
          if (Array.isArray(value)) {
            return value;
          } else if (Array.from) {
            return Array.from(value);
          } else {
            return [].slice.call(value);
          }
        }
        var BlobRecord = function() {
          function BlobRecord2(file, checksum, url) {
            var _this = this;
            classCallCheck(this, BlobRecord2);
            this.file = file;
            this.attributes = {
              filename: file.name,
              content_type: file.type || "application/octet-stream",
              byte_size: file.size,
              checksum
            };
            this.xhr = new XMLHttpRequest();
            this.xhr.open("POST", url, true);
            this.xhr.responseType = "json";
            this.xhr.setRequestHeader("Content-Type", "application/json");
            this.xhr.setRequestHeader("Accept", "application/json");
            this.xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            var csrfToken = getMetaValue("csrf-token");
            if (csrfToken != void 0) {
              this.xhr.setRequestHeader("X-CSRF-Token", csrfToken);
            }
            this.xhr.addEventListener("load", function(event) {
              return _this.requestDidLoad(event);
            });
            this.xhr.addEventListener("error", function(event) {
              return _this.requestDidError(event);
            });
          }
          createClass(BlobRecord2, [{
            key: "create",
            value: function create(callback) {
              this.callback = callback;
              this.xhr.send(JSON.stringify({
                blob: this.attributes
              }));
            }
          }, {
            key: "requestDidLoad",
            value: function requestDidLoad(event) {
              if (this.status >= 200 && this.status < 300) {
                var response = this.response;
                var direct_upload = response.direct_upload;
                delete response.direct_upload;
                this.attributes = response;
                this.directUploadData = direct_upload;
                this.callback(null, this.toJSON());
              } else {
                this.requestDidError(event);
              }
            }
          }, {
            key: "requestDidError",
            value: function requestDidError(event) {
              this.callback('Error creating Blob for "' + this.file.name + '". Status: ' + this.status);
            }
          }, {
            key: "toJSON",
            value: function toJSON() {
              var result = {};
              for (var key in this.attributes) {
                result[key] = this.attributes[key];
              }
              return result;
            }
          }, {
            key: "status",
            get: function get$$1() {
              return this.xhr.status;
            }
          }, {
            key: "response",
            get: function get$$1() {
              var _xhr = this.xhr, responseType = _xhr.responseType, response = _xhr.response;
              if (responseType == "json") {
                return response;
              } else {
                return JSON.parse(response);
              }
            }
          }]);
          return BlobRecord2;
        }();
        var BlobUpload = function() {
          function BlobUpload2(blob) {
            var _this = this;
            classCallCheck(this, BlobUpload2);
            this.blob = blob;
            this.file = blob.file;
            var _blob$directUploadDat = blob.directUploadData, url = _blob$directUploadDat.url, headers = _blob$directUploadDat.headers;
            this.xhr = new XMLHttpRequest();
            this.xhr.open("PUT", url, true);
            this.xhr.responseType = "text";
            for (var key in headers) {
              this.xhr.setRequestHeader(key, headers[key]);
            }
            this.xhr.addEventListener("load", function(event) {
              return _this.requestDidLoad(event);
            });
            this.xhr.addEventListener("error", function(event) {
              return _this.requestDidError(event);
            });
          }
          createClass(BlobUpload2, [{
            key: "create",
            value: function create(callback) {
              this.callback = callback;
              this.xhr.send(this.file.slice());
            }
          }, {
            key: "requestDidLoad",
            value: function requestDidLoad(event) {
              var _xhr = this.xhr, status = _xhr.status, response = _xhr.response;
              if (status >= 200 && status < 300) {
                this.callback(null, response);
              } else {
                this.requestDidError(event);
              }
            }
          }, {
            key: "requestDidError",
            value: function requestDidError(event) {
              this.callback('Error storing "' + this.file.name + '". Status: ' + this.xhr.status);
            }
          }]);
          return BlobUpload2;
        }();
        var id = 0;
        var DirectUpload = function() {
          function DirectUpload2(file, url, delegate) {
            classCallCheck(this, DirectUpload2);
            this.id = ++id;
            this.file = file;
            this.url = url;
            this.delegate = delegate;
          }
          createClass(DirectUpload2, [{
            key: "create",
            value: function create(callback) {
              var _this = this;
              FileChecksum.create(this.file, function(error, checksum) {
                if (error) {
                  callback(error);
                  return;
                }
                var blob = new BlobRecord(_this.file, checksum, _this.url);
                notify(_this.delegate, "directUploadWillCreateBlobWithXHR", blob.xhr);
                blob.create(function(error2) {
                  if (error2) {
                    callback(error2);
                  } else {
                    var upload = new BlobUpload(blob);
                    notify(_this.delegate, "directUploadWillStoreFileWithXHR", upload.xhr);
                    upload.create(function(error3) {
                      if (error3) {
                        callback(error3);
                      } else {
                        callback(null, blob.toJSON());
                      }
                    });
                  }
                });
              });
            }
          }]);
          return DirectUpload2;
        }();
        function notify(object, methodName) {
          if (object && typeof object[methodName] == "function") {
            for (var _len = arguments.length, messages = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
              messages[_key - 2] = arguments[_key];
            }
            return object[methodName].apply(object, messages);
          }
        }
        var DirectUploadController = function() {
          function DirectUploadController2(input, file) {
            classCallCheck(this, DirectUploadController2);
            this.input = input;
            this.file = file;
            this.directUpload = new DirectUpload(this.file, this.url, this);
            this.dispatch("initialize");
          }
          createClass(DirectUploadController2, [{
            key: "start",
            value: function start3(callback) {
              var _this = this;
              var hiddenInput = document.createElement("input");
              hiddenInput.type = "hidden";
              hiddenInput.name = this.input.name;
              this.input.insertAdjacentElement("beforebegin", hiddenInput);
              this.dispatch("start");
              this.directUpload.create(function(error, attributes) {
                if (error) {
                  hiddenInput.parentNode.removeChild(hiddenInput);
                  _this.dispatchError(error);
                } else {
                  hiddenInput.value = attributes.signed_id;
                }
                _this.dispatch("end");
                callback(error);
              });
            }
          }, {
            key: "uploadRequestDidProgress",
            value: function uploadRequestDidProgress(event) {
              var progress = event.loaded / event.total * 100;
              if (progress) {
                this.dispatch("progress", {
                  progress
                });
              }
            }
          }, {
            key: "dispatch",
            value: function dispatch(name) {
              var detail = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              detail.file = this.file;
              detail.id = this.directUpload.id;
              return dispatchEvent(this.input, "direct-upload:" + name, {
                detail
              });
            }
          }, {
            key: "dispatchError",
            value: function dispatchError(error) {
              var event = this.dispatch("error", {
                error
              });
              if (!event.defaultPrevented) {
                alert(error);
              }
            }
          }, {
            key: "directUploadWillCreateBlobWithXHR",
            value: function directUploadWillCreateBlobWithXHR(xhr) {
              this.dispatch("before-blob-request", {
                xhr
              });
            }
          }, {
            key: "directUploadWillStoreFileWithXHR",
            value: function directUploadWillStoreFileWithXHR(xhr) {
              var _this2 = this;
              this.dispatch("before-storage-request", {
                xhr
              });
              xhr.upload.addEventListener("progress", function(event) {
                return _this2.uploadRequestDidProgress(event);
              });
            }
          }, {
            key: "url",
            get: function get$$1() {
              return this.input.getAttribute("data-direct-upload-url");
            }
          }]);
          return DirectUploadController2;
        }();
        var inputSelector = "input[type=file][data-direct-upload-url]:not([disabled])";
        var DirectUploadsController = function() {
          function DirectUploadsController2(form) {
            classCallCheck(this, DirectUploadsController2);
            this.form = form;
            this.inputs = findElements(form, inputSelector).filter(function(input) {
              return input.files.length;
            });
          }
          createClass(DirectUploadsController2, [{
            key: "start",
            value: function start3(callback) {
              var _this = this;
              var controllers = this.createDirectUploadControllers();
              var startNextController = function startNextController2() {
                var controller = controllers.shift();
                if (controller) {
                  controller.start(function(error) {
                    if (error) {
                      callback(error);
                      _this.dispatch("end");
                    } else {
                      startNextController2();
                    }
                  });
                } else {
                  callback();
                  _this.dispatch("end");
                }
              };
              this.dispatch("start");
              startNextController();
            }
          }, {
            key: "createDirectUploadControllers",
            value: function createDirectUploadControllers() {
              var controllers = [];
              this.inputs.forEach(function(input) {
                toArray$1(input.files).forEach(function(file) {
                  var controller = new DirectUploadController(input, file);
                  controllers.push(controller);
                });
              });
              return controllers;
            }
          }, {
            key: "dispatch",
            value: function dispatch(name) {
              var detail = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              return dispatchEvent(this.form, "direct-uploads:" + name, {
                detail
              });
            }
          }]);
          return DirectUploadsController2;
        }();
        var processingAttribute = "data-direct-uploads-processing";
        var submitButtonsByForm = /* @__PURE__ */ new WeakMap();
        var started = false;
        function start2() {
          if (!started) {
            started = true;
            document.addEventListener("click", didClick, true);
            document.addEventListener("submit", didSubmitForm);
            document.addEventListener("ajax:before", didSubmitRemoteElement);
          }
        }
        function didClick(event) {
          var target = event.target;
          if ((target.tagName == "INPUT" || target.tagName == "BUTTON") && target.type == "submit" && target.form) {
            submitButtonsByForm.set(target.form, target);
          }
        }
        function didSubmitForm(event) {
          handleFormSubmissionEvent(event);
        }
        function didSubmitRemoteElement(event) {
          if (event.target.tagName == "FORM") {
            handleFormSubmissionEvent(event);
          }
        }
        function handleFormSubmissionEvent(event) {
          var form = event.target;
          if (form.hasAttribute(processingAttribute)) {
            event.preventDefault();
            return;
          }
          var controller = new DirectUploadsController(form);
          var inputs = controller.inputs;
          if (inputs.length) {
            event.preventDefault();
            form.setAttribute(processingAttribute, "");
            inputs.forEach(disable);
            controller.start(function(error) {
              form.removeAttribute(processingAttribute);
              if (error) {
                inputs.forEach(enable);
              } else {
                submitForm(form);
              }
            });
          }
        }
        function submitForm(form) {
          var button = submitButtonsByForm.get(form) || findElement(form, "input[type=submit], button[type=submit]");
          if (button) {
            var _button = button, disabled = _button.disabled;
            button.disabled = false;
            button.focus();
            button.click();
            button.disabled = disabled;
          } else {
            button = document.createElement("input");
            button.type = "submit";
            button.style.display = "none";
            form.appendChild(button);
            button.click();
            form.removeChild(button);
          }
          submitButtonsByForm.delete(form);
        }
        function disable(input) {
          input.disabled = true;
        }
        function enable(input) {
          input.disabled = false;
        }
        function autostart() {
          if (window.ActiveStorage) {
            start2();
          }
        }
        setTimeout(autostart, 1);
        exports2.start = start2;
        exports2.DirectUpload = DirectUpload;
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
      });
    }
  });

  // node_modules/chartkick/dist/chartkick.js
  var require_chartkick = __commonJS({
    "node_modules/chartkick/dist/chartkick.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Chartkick = factory());
      })(exports, function() {
        "use strict";
        function isArray(variable) {
          return Object.prototype.toString.call(variable) === "[object Array]";
        }
        function isFunction(variable) {
          return variable instanceof Function;
        }
        function isPlainObject(variable) {
          return Object.prototype.toString.call(variable) === "[object Object]" && !isFunction(variable) && variable instanceof Object;
        }
        function extend(target, source) {
          var key;
          for (key in source) {
            if (key === "__proto__") {
              continue;
            }
            if (isPlainObject(source[key]) || isArray(source[key])) {
              if (isPlainObject(source[key]) && !isPlainObject(target[key])) {
                target[key] = {};
              }
              if (isArray(source[key]) && !isArray(target[key])) {
                target[key] = [];
              }
              extend(target[key], source[key]);
            } else if (source[key] !== void 0) {
              target[key] = source[key];
            }
          }
        }
        function merge(obj1, obj2) {
          var target = {};
          extend(target, obj1);
          extend(target, obj2);
          return target;
        }
        var DATE_PATTERN = /^(\d\d\d\d)(-)?(\d\d)(-)?(\d\d)$/i;
        function negativeValues(series) {
          var i, j, data;
          for (i = 0; i < series.length; i++) {
            data = series[i].data;
            for (j = 0; j < data.length; j++) {
              if (data[j][1] < 0) {
                return true;
              }
            }
          }
          return false;
        }
        function toStr(n) {
          return "" + n;
        }
        function toFloat(n) {
          return parseFloat(n);
        }
        function toDate(n) {
          var matches, year, month, day;
          if (typeof n !== "object") {
            if (typeof n === "number") {
              n = new Date(n * 1e3);
            } else {
              n = toStr(n);
              if (matches = n.match(DATE_PATTERN)) {
                year = parseInt(matches[1], 10);
                month = parseInt(matches[3], 10) - 1;
                day = parseInt(matches[5], 10);
                return new Date(year, month, day);
              } else {
                var str = n.replace(/ /, "T").replace(" ", "").replace("UTC", "Z");
                n = new Date(Date.parse(str) || n);
              }
            }
          }
          return n;
        }
        function toArr(n) {
          if (!isArray(n)) {
            var arr = [], i;
            for (i in n) {
              if (n.hasOwnProperty(i)) {
                arr.push([i, n[i]]);
              }
            }
            n = arr;
          }
          return n;
        }
        function jsOptionsFunc(defaultOptions2, hideLegend2, setTitle2, setMin2, setMax2, setStacked2, setXtitle2, setYtitle2) {
          return function(chart, opts, chartOptions) {
            var series = chart.data;
            var options = merge({}, defaultOptions2);
            options = merge(options, chartOptions || {});
            if (chart.singleSeriesFormat || "legend" in opts) {
              hideLegend2(options, opts.legend, chart.singleSeriesFormat);
            }
            if (opts.title) {
              setTitle2(options, opts.title);
            }
            if ("min" in opts) {
              setMin2(options, opts.min);
            } else if (!negativeValues(series)) {
              setMin2(options, 0);
            }
            if (opts.max) {
              setMax2(options, opts.max);
            }
            if ("stacked" in opts) {
              setStacked2(options, opts.stacked);
            }
            if (opts.colors) {
              options.colors = opts.colors;
            }
            if (opts.xtitle) {
              setXtitle2(options, opts.xtitle);
            }
            if (opts.ytitle) {
              setYtitle2(options, opts.ytitle);
            }
            options = merge(options, opts.library || {});
            return options;
          };
        }
        function sortByTime(a, b) {
          return a[0].getTime() - b[0].getTime();
        }
        function sortByNumberSeries(a, b) {
          return a[0] - b[0];
        }
        function sortByNumber(a, b) {
          return a - b;
        }
        function isMinute(d) {
          return d.getMilliseconds() === 0 && d.getSeconds() === 0;
        }
        function isHour(d) {
          return isMinute(d) && d.getMinutes() === 0;
        }
        function isDay(d) {
          return isHour(d) && d.getHours() === 0;
        }
        function isWeek(d, dayOfWeek) {
          return isDay(d) && d.getDay() === dayOfWeek;
        }
        function isMonth(d) {
          return isDay(d) && d.getDate() === 1;
        }
        function isYear(d) {
          return isMonth(d) && d.getMonth() === 0;
        }
        function isDate(obj) {
          return !isNaN(toDate(obj)) && toStr(obj).length >= 6;
        }
        function isNumber(obj) {
          return typeof obj === "number";
        }
        var byteSuffixes = ["bytes", "KB", "MB", "GB", "TB", "PB", "EB"];
        function formatValue(pre, value, options, axis) {
          pre = pre || "";
          if (options.prefix) {
            if (value < 0) {
              value = value * -1;
              pre += "-";
            }
            pre += options.prefix;
          }
          var suffix = options.suffix || "";
          var precision = options.precision;
          var round = options.round;
          if (options.byteScale) {
            var suffixIdx;
            var baseValue = axis ? options.byteScale : value;
            if (baseValue >= 1152921504606847e3) {
              value /= 1152921504606847e3;
              suffixIdx = 6;
            } else if (baseValue >= 1125899906842624) {
              value /= 1125899906842624;
              suffixIdx = 5;
            } else if (baseValue >= 1099511627776) {
              value /= 1099511627776;
              suffixIdx = 4;
            } else if (baseValue >= 1073741824) {
              value /= 1073741824;
              suffixIdx = 3;
            } else if (baseValue >= 1048576) {
              value /= 1048576;
              suffixIdx = 2;
            } else if (baseValue >= 1024) {
              value /= 1024;
              suffixIdx = 1;
            } else {
              suffixIdx = 0;
            }
            if (precision === void 0 && round === void 0) {
              if (value >= 1023.5) {
                if (suffixIdx < byteSuffixes.length - 1) {
                  value = 1;
                  suffixIdx += 1;
                }
              }
              precision = value >= 1e3 ? 4 : 3;
            }
            suffix = " " + byteSuffixes[suffixIdx];
          }
          if (precision !== void 0 && round !== void 0) {
            throw Error("Use either round or precision, not both");
          }
          if (!axis) {
            if (precision !== void 0) {
              value = value.toPrecision(precision);
              if (!options.zeros) {
                value = parseFloat(value);
              }
            }
            if (round !== void 0) {
              if (round < 0) {
                var num = Math.pow(10, -1 * round);
                value = parseInt((1 * value / num).toFixed(0)) * num;
              } else {
                value = value.toFixed(round);
                if (!options.zeros) {
                  value = parseFloat(value);
                }
              }
            }
          }
          if (options.thousands || options.decimal) {
            value = toStr(value);
            var parts = value.split(".");
            value = parts[0];
            if (options.thousands) {
              value = value.replace(/\B(?=(\d{3})+(?!\d))/g, options.thousands);
            }
            if (parts.length > 1) {
              value += (options.decimal || ".") + parts[1];
            }
          }
          return pre + value + suffix;
        }
        function seriesOption(chart, series, option) {
          if (option in series) {
            return series[option];
          } else if (option in chart.options) {
            return chart.options[option];
          }
          return null;
        }
        function allZeros(data) {
          var i, j, d;
          for (i = 0; i < data.length; i++) {
            d = data[i].data;
            for (j = 0; j < d.length; j++) {
              if (d[j][1] != 0) {
                return false;
              }
            }
          }
          return true;
        }
        var baseOptions = {
          maintainAspectRatio: false,
          animation: false,
          plugins: {
            legend: {},
            tooltip: {
              displayColors: false,
              callbacks: {}
            },
            title: {
              font: {
                size: 20
              },
              color: "#333"
            }
          },
          interaction: {}
        };
        var defaultOptions$2 = {
          scales: {
            y: {
              ticks: {
                maxTicksLimit: 4
              },
              title: {
                font: {
                  size: 16
                },
                color: "#333"
              },
              grid: {}
            },
            x: {
              grid: {
                drawOnChartArea: false
              },
              title: {
                font: {
                  size: 16
                },
                color: "#333"
              },
              time: {},
              ticks: {}
            }
          }
        };
        var defaultColors = [
          "#3366CC",
          "#DC3912",
          "#FF9900",
          "#109618",
          "#990099",
          "#3B3EAC",
          "#0099C6",
          "#DD4477",
          "#66AA00",
          "#B82E2E",
          "#316395",
          "#994499",
          "#22AA99",
          "#AAAA11",
          "#6633CC",
          "#E67300",
          "#8B0707",
          "#329262",
          "#5574A6",
          "#651067"
        ];
        var hideLegend$2 = function(options, legend, hideLegend2) {
          if (legend !== void 0) {
            options.plugins.legend.display = !!legend;
            if (legend && legend !== true) {
              options.plugins.legend.position = legend;
            }
          } else if (hideLegend2) {
            options.plugins.legend.display = false;
          }
        };
        var setTitle$2 = function(options, title) {
          options.plugins.title.display = true;
          options.plugins.title.text = title;
        };
        var setMin$2 = function(options, min) {
          if (min !== null) {
            options.scales.y.min = toFloat(min);
          }
        };
        var setMax$2 = function(options, max) {
          options.scales.y.max = toFloat(max);
        };
        var setBarMin$1 = function(options, min) {
          if (min !== null) {
            options.scales.x.min = toFloat(min);
          }
        };
        var setBarMax$1 = function(options, max) {
          options.scales.x.max = toFloat(max);
        };
        var setStacked$2 = function(options, stacked) {
          options.scales.x.stacked = !!stacked;
          options.scales.y.stacked = !!stacked;
        };
        var setXtitle$2 = function(options, title) {
          options.scales.x.title.display = true;
          options.scales.x.title.text = title;
        };
        var setYtitle$2 = function(options, title) {
          options.scales.y.title.display = true;
          options.scales.y.title.text = title;
        };
        var addOpacity = function(hex, opacity) {
          var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
          return result ? "rgba(" + parseInt(result[1], 16) + ", " + parseInt(result[2], 16) + ", " + parseInt(result[3], 16) + ", " + opacity + ")" : hex;
        };
        var notnull = function(x) {
          return x != null;
        };
        var setLabelSize = function(chart, data, options) {
          var maxLabelSize = Math.ceil(chart.element.offsetWidth / 4 / data.labels.length);
          if (maxLabelSize > 25) {
            maxLabelSize = 25;
          } else if (maxLabelSize < 10) {
            maxLabelSize = 10;
          }
          if (!options.scales.x.ticks.callback) {
            options.scales.x.ticks.callback = function(value) {
              value = toStr(this.getLabelForValue(value));
              if (value.length > maxLabelSize) {
                return value.substring(0, maxLabelSize - 2) + "...";
              } else {
                return value;
              }
            };
          }
        };
        var setFormatOptions$1 = function(chart, options, chartType) {
          var formatOptions = {
            prefix: chart.options.prefix,
            suffix: chart.options.suffix,
            thousands: chart.options.thousands,
            decimal: chart.options.decimal,
            precision: chart.options.precision,
            round: chart.options.round,
            zeros: chart.options.zeros
          };
          if (chart.options.bytes) {
            var series = chart.data;
            if (chartType === "pie") {
              series = [{ data: series }];
            }
            var max = 0;
            for (var i = 0; i < series.length; i++) {
              var s = series[i];
              for (var j = 0; j < s.data.length; j++) {
                if (s.data[j][1] > max) {
                  max = s.data[j][1];
                }
              }
            }
            var scale = 1;
            while (max >= 1024) {
              scale *= 1024;
              max /= 1024;
            }
            formatOptions.byteScale = scale;
          }
          if (chartType !== "pie") {
            var axis = options.scales.y;
            if (chartType === "bar") {
              axis = options.scales.x;
            }
            if (formatOptions.byteScale) {
              if (!axis.ticks.stepSize) {
                axis.ticks.stepSize = formatOptions.byteScale / 2;
              }
              if (!axis.ticks.maxTicksLimit) {
                axis.ticks.maxTicksLimit = 4;
              }
            }
            if (!axis.ticks.callback) {
              axis.ticks.callback = function(value) {
                return formatValue("", value, formatOptions, true);
              };
            }
          }
          if (!options.plugins.tooltip.callbacks.label) {
            if (chartType === "scatter") {
              options.plugins.tooltip.callbacks.label = function(context) {
                var label = context.dataset.label || "";
                if (label) {
                  label += ": ";
                }
                return label + "(" + context.label + ", " + context.formattedValue + ")";
              };
            } else if (chartType === "bubble") {
              options.plugins.tooltip.callbacks.label = function(context) {
                var label = context.dataset.label || "";
                if (label) {
                  label += ": ";
                }
                var dataPoint = context.raw;
                return label + "(" + dataPoint.x + ", " + dataPoint.y + ", " + dataPoint.v + ")";
              };
            } else if (chartType === "pie") {
              options.plugins.tooltip.callbacks.label = function(context) {
                var dataLabel = context.label;
                var value = ": ";
                if (isArray(dataLabel)) {
                  dataLabel = dataLabel.slice();
                  dataLabel[0] += value;
                } else {
                  dataLabel += value;
                }
                return formatValue(dataLabel, context.parsed, formatOptions);
              };
            } else {
              var valueLabel = chartType === "bar" ? "x" : "y";
              options.plugins.tooltip.callbacks.label = function(context) {
                if (context.parsed[valueLabel] === null) {
                  return;
                }
                var label = context.dataset.label || "";
                if (label) {
                  label += ": ";
                }
                return formatValue(label, context.parsed[valueLabel], formatOptions);
              };
            }
          }
        };
        var jsOptions$2 = jsOptionsFunc(merge(baseOptions, defaultOptions$2), hideLegend$2, setTitle$2, setMin$2, setMax$2, setStacked$2, setXtitle$2, setYtitle$2);
        var createDataTable = function(chart, options, chartType) {
          var datasets = [];
          var labels = [];
          var colors = chart.options.colors || defaultColors;
          var day = true;
          var week = true;
          var dayOfWeek;
          var month = true;
          var year = true;
          var hour = true;
          var minute = true;
          var series = chart.data;
          var max = 0;
          if (chartType === "bubble") {
            for (var i$1 = 0; i$1 < series.length; i$1++) {
              var s$1 = series[i$1];
              for (var j$1 = 0; j$1 < s$1.data.length; j$1++) {
                if (s$1.data[j$1][2] > max) {
                  max = s$1.data[j$1][2];
                }
              }
            }
          }
          var i, j, s, d, key, rows = [], rows2 = [];
          if (chartType === "bar" || chartType === "column" || chart.xtype !== "number" && chart.xtype !== "bubble") {
            var sortedLabels = [];
            for (i = 0; i < series.length; i++) {
              s = series[i];
              for (j = 0; j < s.data.length; j++) {
                d = s.data[j];
                key = chart.xtype == "datetime" ? d[0].getTime() : d[0];
                if (!rows[key]) {
                  rows[key] = new Array(series.length);
                }
                rows[key][i] = toFloat(d[1]);
                if (sortedLabels.indexOf(key) === -1) {
                  sortedLabels.push(key);
                }
              }
            }
            if (chart.xtype === "datetime" || chart.xtype === "number") {
              sortedLabels.sort(sortByNumber);
            }
            for (j = 0; j < series.length; j++) {
              rows2.push([]);
            }
            var value;
            var k;
            for (k = 0; k < sortedLabels.length; k++) {
              i = sortedLabels[k];
              if (chart.xtype === "datetime") {
                value = new Date(toFloat(i));
                day = day && isDay(value);
                if (!dayOfWeek) {
                  dayOfWeek = value.getDay();
                }
                week = week && isWeek(value, dayOfWeek);
                month = month && isMonth(value);
                year = year && isYear(value);
                hour = hour && isHour(value);
                minute = minute && isMinute(value);
              } else {
                value = i;
              }
              labels.push(value);
              for (j = 0; j < series.length; j++) {
                rows2[j].push(rows[i][j] === void 0 ? null : rows[i][j]);
              }
            }
          } else {
            for (var i$2 = 0; i$2 < series.length; i$2++) {
              var s$2 = series[i$2];
              var d$1 = [];
              for (var j$2 = 0; j$2 < s$2.data.length; j$2++) {
                var point = {
                  x: toFloat(s$2.data[j$2][0]),
                  y: toFloat(s$2.data[j$2][1])
                };
                if (chartType === "bubble") {
                  point.r = toFloat(s$2.data[j$2][2]) * 20 / max;
                  point.v = s$2.data[j$2][2];
                }
                d$1.push(point);
              }
              rows2.push(d$1);
            }
          }
          var color;
          var backgroundColor;
          for (i = 0; i < series.length; i++) {
            s = series[i];
            if (chart.options.colors && chart.singleSeriesFormat && (chartType === "bar" || chartType === "column") && !s.color && isArray(chart.options.colors) && !isArray(chart.options.colors[0])) {
              color = colors;
              backgroundColor = [];
              for (var j$3 = 0; j$3 < colors.length; j$3++) {
                backgroundColor[j$3] = addOpacity(color[j$3], 0.5);
              }
            } else {
              color = s.color || colors[i];
              backgroundColor = chartType !== "line" ? addOpacity(color, 0.5) : color;
            }
            var dataset = {
              label: s.name || "",
              data: rows2[i],
              fill: chartType === "area",
              borderColor: color,
              backgroundColor,
              borderWidth: 2
            };
            var pointChart = chartType === "line" || chartType === "area" || chartType === "scatter" || chartType === "bubble";
            if (pointChart) {
              dataset.pointBackgroundColor = color;
              dataset.pointHoverBackgroundColor = color;
              dataset.pointHitRadius = 50;
            }
            if (chartType === "bubble") {
              dataset.pointBackgroundColor = backgroundColor;
              dataset.pointHoverBackgroundColor = backgroundColor;
              dataset.pointHoverBorderWidth = 2;
            }
            if (s.stack) {
              dataset.stack = s.stack;
            }
            var curve = seriesOption(chart, s, "curve");
            if (curve === false) {
              dataset.tension = 0;
            } else if (pointChart) {
              dataset.tension = 0.4;
            }
            var points = seriesOption(chart, s, "points");
            if (points === false) {
              dataset.pointRadius = 0;
              dataset.pointHoverRadius = 0;
            }
            dataset = merge(dataset, chart.options.dataset || {});
            dataset = merge(dataset, s.library || {});
            dataset = merge(dataset, s.dataset || {});
            datasets.push(dataset);
          }
          var xmin = chart.options.xmin;
          var xmax = chart.options.xmax;
          if (chart.xtype === "datetime") {
            if (notnull(xmin)) {
              options.scales.x.min = toDate(xmin).getTime();
            }
            if (notnull(xmax)) {
              options.scales.x.max = toDate(xmax).getTime();
            }
          } else if (chart.xtype === "number") {
            if (notnull(xmin)) {
              options.scales.x.min = xmin;
            }
            if (notnull(xmax)) {
              options.scales.x.max = xmax;
            }
          }
          if (chart.xtype === "datetime" && labels.length === 0) {
            if (notnull(xmin)) {
              labels.push(toDate(xmin));
            }
            if (notnull(xmax)) {
              labels.push(toDate(xmax));
            }
            day = false;
            week = false;
            month = false;
            year = false;
            hour = false;
            minute = false;
          }
          if (chart.xtype === "datetime" && labels.length > 0) {
            var minTime = (notnull(xmin) ? toDate(xmin) : labels[0]).getTime();
            var maxTime = (notnull(xmax) ? toDate(xmax) : labels[0]).getTime();
            for (i = 1; i < labels.length; i++) {
              var value$1 = labels[i].getTime();
              if (value$1 < minTime) {
                minTime = value$1;
              }
              if (value$1 > maxTime) {
                maxTime = value$1;
              }
            }
            var timeDiff = (maxTime - minTime) / (86400 * 1e3);
            if (!options.scales.x.time.unit) {
              var step;
              if (year || timeDiff > 365 * 10) {
                options.scales.x.time.unit = "year";
                step = 365;
              } else if (month || timeDiff > 30 * 10) {
                options.scales.x.time.unit = "month";
                step = 30;
              } else if (day || timeDiff > 10) {
                options.scales.x.time.unit = "day";
                step = 1;
              } else if (hour || timeDiff > 0.5) {
                options.scales.x.time.displayFormats = { hour: "MMM d, h a" };
                options.scales.x.time.unit = "hour";
                step = 1 / 24;
              } else if (minute) {
                options.scales.x.time.displayFormats = { minute: "h:mm a" };
                options.scales.x.time.unit = "minute";
                step = 1 / 24 / 60;
              }
              if (step && timeDiff > 0) {
                var width = chart.element.offsetWidth;
                if (width > 0) {
                  var unitStepSize = Math.ceil(timeDiff / step / (width / 100));
                  if (week && step === 1) {
                    unitStepSize = Math.ceil(unitStepSize / 7) * 7;
                  }
                  options.scales.x.time.stepSize = unitStepSize;
                }
              }
            }
            if (!options.scales.x.time.tooltipFormat) {
              if (day) {
                options.scales.x.time.tooltipFormat = "PP";
              } else if (hour) {
                options.scales.x.time.tooltipFormat = "MMM d, h a";
              } else if (minute) {
                options.scales.x.time.tooltipFormat = "h:mm a";
              }
            }
          }
          var data = {
            labels,
            datasets
          };
          return data;
        };
        var defaultExport$2 = function defaultExport2(library) {
          this.name = "chartjs";
          this.library = library;
        };
        defaultExport$2.prototype.renderLineChart = function renderLineChart(chart, chartType) {
          var chartOptions = {};
          if (!chart.options.max && allZeros(chart.data)) {
            chartOptions.max = 1;
          }
          var options = jsOptions$2(chart, merge(chartOptions, chart.options));
          setFormatOptions$1(chart, options, chartType);
          var data = createDataTable(chart, options, chartType || "line");
          if (chart.xtype === "number") {
            options.scales.x.type = options.scales.x.type || "linear";
            options.scales.x.position = options.scales.x.position || "bottom";
          } else {
            options.scales.x.type = chart.xtype === "string" ? "category" : "time";
          }
          this.drawChart(chart, "line", data, options);
        };
        defaultExport$2.prototype.renderPieChart = function renderPieChart(chart) {
          var options = merge({}, baseOptions);
          if (chart.options.donut) {
            options.cutout = "50%";
          }
          if ("legend" in chart.options) {
            hideLegend$2(options, chart.options.legend);
          }
          if (chart.options.title) {
            setTitle$2(options, chart.options.title);
          }
          options = merge(options, chart.options.library || {});
          setFormatOptions$1(chart, options, "pie");
          var labels = [];
          var values = [];
          for (var i = 0; i < chart.data.length; i++) {
            var point = chart.data[i];
            labels.push(point[0]);
            values.push(point[1]);
          }
          var dataset = {
            data: values,
            backgroundColor: chart.options.colors || defaultColors
          };
          dataset = merge(dataset, chart.options.dataset || {});
          var data = {
            labels,
            datasets: [dataset]
          };
          this.drawChart(chart, "pie", data, options);
        };
        defaultExport$2.prototype.renderColumnChart = function renderColumnChart(chart, chartType) {
          var options;
          if (chartType === "bar") {
            var barOptions = merge(baseOptions, defaultOptions$2);
            barOptions.indexAxis = "y";
            barOptions.scales.x.grid.drawOnChartArea = true;
            barOptions.scales.y.grid.drawOnChartArea = false;
            delete barOptions.scales.y.ticks.maxTicksLimit;
            options = jsOptionsFunc(barOptions, hideLegend$2, setTitle$2, setBarMin$1, setBarMax$1, setStacked$2, setXtitle$2, setYtitle$2)(chart, chart.options);
          } else {
            options = jsOptions$2(chart, chart.options);
          }
          setFormatOptions$1(chart, options, chartType);
          var data = createDataTable(chart, options, "column");
          if (chartType !== "bar") {
            setLabelSize(chart, data, options);
          }
          this.drawChart(chart, "bar", data, options);
        };
        defaultExport$2.prototype.renderAreaChart = function renderAreaChart(chart) {
          this.renderLineChart(chart, "area");
        };
        defaultExport$2.prototype.renderBarChart = function renderBarChart(chart) {
          this.renderColumnChart(chart, "bar");
        };
        defaultExport$2.prototype.renderScatterChart = function renderScatterChart(chart, chartType) {
          chartType = chartType || "scatter";
          var options = jsOptions$2(chart, chart.options);
          setFormatOptions$1(chart, options, chartType);
          if (!("showLine" in options)) {
            options.showLine = false;
          }
          var data = createDataTable(chart, options, chartType);
          options.scales.x.type = options.scales.x.type || "linear";
          options.scales.x.position = options.scales.x.position || "bottom";
          if (!("mode" in options.interaction)) {
            options.interaction.mode = "nearest";
          }
          this.drawChart(chart, chartType, data, options);
        };
        defaultExport$2.prototype.renderBubbleChart = function renderBubbleChart(chart) {
          this.renderScatterChart(chart, "bubble");
        };
        defaultExport$2.prototype.destroy = function destroy(chart) {
          if (chart.chart) {
            chart.chart.destroy();
          }
        };
        defaultExport$2.prototype.drawChart = function drawChart(chart, type, data, options) {
          this.destroy(chart);
          if (chart.destroyed) {
            return;
          }
          var chartOptions = {
            type,
            data,
            options
          };
          if (chart.options.code) {
            window.console.log("new Chart(ctx, " + JSON.stringify(chartOptions) + ");");
          }
          chart.element.innerHTML = "<canvas></canvas>";
          var ctx = chart.element.getElementsByTagName("CANVAS")[0];
          chart.chart = new this.library(ctx, chartOptions);
        };
        var defaultOptions$1 = {
          chart: {},
          xAxis: {
            title: {
              text: null
            },
            labels: {
              style: {
                fontSize: "12px"
              }
            }
          },
          yAxis: {
            title: {
              text: null
            },
            labels: {
              style: {
                fontSize: "12px"
              }
            }
          },
          title: {
            text: null
          },
          credits: {
            enabled: false
          },
          legend: {
            borderWidth: 0
          },
          tooltip: {
            style: {
              fontSize: "12px"
            }
          },
          plotOptions: {
            areaspline: {},
            area: {},
            series: {
              marker: {}
            }
          },
          time: {
            useUTC: false
          }
        };
        var hideLegend$1 = function(options, legend, hideLegend2) {
          if (legend !== void 0) {
            options.legend.enabled = !!legend;
            if (legend && legend !== true) {
              if (legend === "top" || legend === "bottom") {
                options.legend.verticalAlign = legend;
              } else {
                options.legend.layout = "vertical";
                options.legend.verticalAlign = "middle";
                options.legend.align = legend;
              }
            }
          } else if (hideLegend2) {
            options.legend.enabled = false;
          }
        };
        var setTitle$1 = function(options, title) {
          options.title.text = title;
        };
        var setMin$1 = function(options, min) {
          options.yAxis.min = min;
        };
        var setMax$1 = function(options, max) {
          options.yAxis.max = max;
        };
        var setStacked$1 = function(options, stacked) {
          var stackedValue = stacked ? stacked === true ? "normal" : stacked : null;
          options.plotOptions.series.stacking = stackedValue;
          options.plotOptions.area.stacking = stackedValue;
          options.plotOptions.areaspline.stacking = stackedValue;
        };
        var setXtitle$1 = function(options, title) {
          options.xAxis.title.text = title;
        };
        var setYtitle$1 = function(options, title) {
          options.yAxis.title.text = title;
        };
        var jsOptions$1 = jsOptionsFunc(defaultOptions$1, hideLegend$1, setTitle$1, setMin$1, setMax$1, setStacked$1, setXtitle$1, setYtitle$1);
        var setFormatOptions = function(chart, options, chartType) {
          var formatOptions = {
            prefix: chart.options.prefix,
            suffix: chart.options.suffix,
            thousands: chart.options.thousands,
            decimal: chart.options.decimal,
            precision: chart.options.precision,
            round: chart.options.round,
            zeros: chart.options.zeros
          };
          if (chartType !== "pie" && !options.yAxis.labels.formatter) {
            options.yAxis.labels.formatter = function() {
              return formatValue("", this.value, formatOptions);
            };
          }
          if (!options.tooltip.pointFormatter && !options.tooltip.pointFormat) {
            options.tooltip.pointFormatter = function() {
              return '<span style="color:' + this.color + '">\u25CF</span> ' + formatValue(this.series.name + ": <b>", this.y, formatOptions) + "</b><br/>";
            };
          }
        };
        var defaultExport$1 = function defaultExport2(library) {
          this.name = "highcharts";
          this.library = library;
        };
        defaultExport$1.prototype.renderLineChart = function renderLineChart(chart, chartType) {
          chartType = chartType || "spline";
          var chartOptions = {};
          if (chartType === "areaspline") {
            chartOptions = {
              plotOptions: {
                areaspline: {
                  stacking: "normal"
                },
                area: {
                  stacking: "normal"
                },
                series: {
                  marker: {
                    enabled: false
                  }
                }
              }
            };
          }
          if (chart.options.curve === false) {
            if (chartType === "areaspline") {
              chartType = "area";
            } else if (chartType === "spline") {
              chartType = "line";
            }
          }
          var options = jsOptions$1(chart, chart.options, chartOptions), data, i, j;
          if (chart.xtype === "number") {
            options.xAxis.type = options.xAxis.type || "linear";
          } else {
            options.xAxis.type = chart.xtype === "string" ? "category" : "datetime";
          }
          if (!options.chart.type) {
            options.chart.type = chartType;
          }
          setFormatOptions(chart, options, chartType);
          var series = chart.data;
          for (i = 0; i < series.length; i++) {
            series[i].name = series[i].name || "Value";
            data = series[i].data;
            if (chart.xtype === "datetime") {
              for (j = 0; j < data.length; j++) {
                data[j][0] = data[j][0].getTime();
              }
            }
            series[i].marker = { symbol: "circle" };
            if (chart.options.points === false) {
              series[i].marker.enabled = false;
            }
          }
          this.drawChart(chart, series, options);
        };
        defaultExport$1.prototype.renderScatterChart = function renderScatterChart(chart) {
          var options = jsOptions$1(chart, chart.options, {});
          options.chart.type = "scatter";
          this.drawChart(chart, chart.data, options);
        };
        defaultExport$1.prototype.renderPieChart = function renderPieChart(chart) {
          var chartOptions = merge(defaultOptions$1, {});
          if (chart.options.colors) {
            chartOptions.colors = chart.options.colors;
          }
          if (chart.options.donut) {
            chartOptions.plotOptions = { pie: { innerSize: "50%" } };
          }
          if ("legend" in chart.options) {
            hideLegend$1(chartOptions, chart.options.legend);
          }
          if (chart.options.title) {
            setTitle$1(chartOptions, chart.options.title);
          }
          var options = merge(chartOptions, chart.options.library || {});
          setFormatOptions(chart, options, "pie");
          var series = [{
            type: "pie",
            name: chart.options.label || "Value",
            data: chart.data
          }];
          this.drawChart(chart, series, options);
        };
        defaultExport$1.prototype.renderColumnChart = function renderColumnChart(chart, chartType) {
          chartType = chartType || "column";
          var series = chart.data;
          var options = jsOptions$1(chart, chart.options), i, j, s, d, rows = [], categories = [];
          options.chart.type = chartType;
          setFormatOptions(chart, options, chartType);
          for (i = 0; i < series.length; i++) {
            s = series[i];
            for (j = 0; j < s.data.length; j++) {
              d = s.data[j];
              if (!rows[d[0]]) {
                rows[d[0]] = new Array(series.length);
                categories.push(d[0]);
              }
              rows[d[0]][i] = d[1];
            }
          }
          if (chart.xtype === "number") {
            categories.sort(sortByNumber);
          }
          options.xAxis.categories = categories;
          var newSeries = [], d2;
          for (i = 0; i < series.length; i++) {
            d = [];
            for (j = 0; j < categories.length; j++) {
              d.push(rows[categories[j]][i] || 0);
            }
            d2 = {
              name: series[i].name || "Value",
              data: d
            };
            if (series[i].stack) {
              d2.stack = series[i].stack;
            }
            newSeries.push(d2);
          }
          this.drawChart(chart, newSeries, options);
        };
        defaultExport$1.prototype.renderBarChart = function renderBarChart(chart) {
          this.renderColumnChart(chart, "bar");
        };
        defaultExport$1.prototype.renderAreaChart = function renderAreaChart(chart) {
          this.renderLineChart(chart, "areaspline");
        };
        defaultExport$1.prototype.destroy = function destroy(chart) {
          if (chart.chart) {
            chart.chart.destroy();
          }
        };
        defaultExport$1.prototype.drawChart = function drawChart(chart, data, options) {
          this.destroy(chart);
          if (chart.destroyed) {
            return;
          }
          options.chart.renderTo = chart.element.id;
          options.series = data;
          if (chart.options.code) {
            window.console.log("new Highcharts.Chart(" + JSON.stringify(options) + ");");
          }
          chart.chart = new this.library.Chart(options);
        };
        var loaded = {};
        var callbacks = [];
        var defaultOptions = {
          chartArea: {},
          fontName: "'Lucida Grande', 'Lucida Sans Unicode', Verdana, Arial, Helvetica, sans-serif",
          pointSize: 6,
          legend: {
            textStyle: {
              fontSize: 12,
              color: "#444"
            },
            alignment: "center",
            position: "right"
          },
          curveType: "function",
          hAxis: {
            textStyle: {
              color: "#666",
              fontSize: 12
            },
            titleTextStyle: {},
            gridlines: {
              color: "transparent"
            },
            baselineColor: "#ccc",
            viewWindow: {}
          },
          vAxis: {
            textStyle: {
              color: "#666",
              fontSize: 12
            },
            titleTextStyle: {},
            baselineColor: "#ccc",
            viewWindow: {}
          },
          tooltip: {
            textStyle: {
              color: "#666",
              fontSize: 12
            }
          }
        };
        var hideLegend = function(options, legend, hideLegend2) {
          if (legend !== void 0) {
            var position;
            if (!legend) {
              position = "none";
            } else if (legend === true) {
              position = "right";
            } else {
              position = legend;
            }
            options.legend.position = position;
          } else if (hideLegend2) {
            options.legend.position = "none";
          }
        };
        var setTitle = function(options, title) {
          options.title = title;
          options.titleTextStyle = { color: "#333", fontSize: "20px" };
        };
        var setMin = function(options, min) {
          options.vAxis.viewWindow.min = min;
        };
        var setMax = function(options, max) {
          options.vAxis.viewWindow.max = max;
        };
        var setBarMin = function(options, min) {
          options.hAxis.viewWindow.min = min;
        };
        var setBarMax = function(options, max) {
          options.hAxis.viewWindow.max = max;
        };
        var setStacked = function(options, stacked) {
          options.isStacked = stacked ? stacked : false;
        };
        var setXtitle = function(options, title) {
          options.hAxis.title = title;
          options.hAxis.titleTextStyle.italic = false;
        };
        var setYtitle = function(options, title) {
          options.vAxis.title = title;
          options.vAxis.titleTextStyle.italic = false;
        };
        var jsOptions = jsOptionsFunc(defaultOptions, hideLegend, setTitle, setMin, setMax, setStacked, setXtitle, setYtitle);
        var resize = function(callback) {
          if (window.attachEvent) {
            window.attachEvent("onresize", callback);
          } else if (window.addEventListener) {
            window.addEventListener("resize", callback, true);
          }
          callback();
        };
        var defaultExport = function defaultExport2(library) {
          this.name = "google";
          this.library = library;
        };
        defaultExport.prototype.renderLineChart = function renderLineChart(chart) {
          var this$1 = this;
          this.waitForLoaded(chart, function() {
            var chartOptions = {};
            if (chart.options.curve === false) {
              chartOptions.curveType = "none";
            }
            if (chart.options.points === false) {
              chartOptions.pointSize = 0;
            }
            var options = jsOptions(chart, chart.options, chartOptions);
            var data = this$1.createDataTable(chart.data, chart.xtype);
            this$1.drawChart(chart, "LineChart", data, options);
          });
        };
        defaultExport.prototype.renderPieChart = function renderPieChart(chart) {
          var this$1 = this;
          this.waitForLoaded(chart, function() {
            var chartOptions = {
              chartArea: {
                top: "10%",
                height: "80%"
              },
              legend: {}
            };
            if (chart.options.colors) {
              chartOptions.colors = chart.options.colors;
            }
            if (chart.options.donut) {
              chartOptions.pieHole = 0.5;
            }
            if ("legend" in chart.options) {
              hideLegend(chartOptions, chart.options.legend);
            }
            if (chart.options.title) {
              setTitle(chartOptions, chart.options.title);
            }
            var options = merge(merge(defaultOptions, chartOptions), chart.options.library || {});
            var data = new this$1.library.visualization.DataTable();
            data.addColumn("string", "");
            data.addColumn("number", "Value");
            data.addRows(chart.data);
            this$1.drawChart(chart, "PieChart", data, options);
          });
        };
        defaultExport.prototype.renderColumnChart = function renderColumnChart(chart) {
          var this$1 = this;
          this.waitForLoaded(chart, function() {
            var options = jsOptions(chart, chart.options);
            var data = this$1.createDataTable(chart.data, chart.xtype);
            this$1.drawChart(chart, "ColumnChart", data, options);
          });
        };
        defaultExport.prototype.renderBarChart = function renderBarChart(chart) {
          var this$1 = this;
          this.waitForLoaded(chart, function() {
            var chartOptions = {
              hAxis: {
                gridlines: {
                  color: "#ccc"
                }
              }
            };
            var options = jsOptionsFunc(defaultOptions, hideLegend, setTitle, setBarMin, setBarMax, setStacked, setXtitle, setYtitle)(chart, chart.options, chartOptions);
            var data = this$1.createDataTable(chart.data, chart.xtype);
            this$1.drawChart(chart, "BarChart", data, options);
          });
        };
        defaultExport.prototype.renderAreaChart = function renderAreaChart(chart) {
          var this$1 = this;
          this.waitForLoaded(chart, function() {
            var chartOptions = {
              isStacked: true,
              pointSize: 0,
              areaOpacity: 0.5
            };
            var options = jsOptions(chart, chart.options, chartOptions);
            var data = this$1.createDataTable(chart.data, chart.xtype);
            this$1.drawChart(chart, "AreaChart", data, options);
          });
        };
        defaultExport.prototype.renderGeoChart = function renderGeoChart(chart) {
          var this$1 = this;
          this.waitForLoaded(chart, "geochart", function() {
            var chartOptions = {
              legend: "none",
              colorAxis: {
                colors: chart.options.colors || ["#f6c7b6", "#ce502d"]
              }
            };
            var options = merge(merge(defaultOptions, chartOptions), chart.options.library || {});
            var data = new this$1.library.visualization.DataTable();
            data.addColumn("string", "");
            data.addColumn("number", chart.options.label || "Value");
            data.addRows(chart.data);
            this$1.drawChart(chart, "GeoChart", data, options);
          });
        };
        defaultExport.prototype.renderScatterChart = function renderScatterChart(chart) {
          var this$1 = this;
          this.waitForLoaded(chart, function() {
            var chartOptions = {};
            var options = jsOptions(chart, chart.options, chartOptions);
            var series = chart.data, rows2 = [], i, j, data, d;
            for (i = 0; i < series.length; i++) {
              series[i].name = series[i].name || "Value";
              d = series[i].data;
              for (j = 0; j < d.length; j++) {
                var row = new Array(series.length + 1);
                row[0] = d[j][0];
                row[i + 1] = d[j][1];
                rows2.push(row);
              }
            }
            data = new this$1.library.visualization.DataTable();
            data.addColumn("number", "");
            for (i = 0; i < series.length; i++) {
              data.addColumn("number", series[i].name);
            }
            data.addRows(rows2);
            this$1.drawChart(chart, "ScatterChart", data, options);
          });
        };
        defaultExport.prototype.renderTimeline = function renderTimeline(chart) {
          var this$1 = this;
          this.waitForLoaded(chart, "timeline", function() {
            var chartOptions = {
              legend: "none"
            };
            if (chart.options.colors) {
              chartOptions.colors = chart.options.colors;
            }
            var options = merge(merge(defaultOptions, chartOptions), chart.options.library || {});
            var data = new this$1.library.visualization.DataTable();
            data.addColumn({ type: "string", id: "Name" });
            data.addColumn({ type: "date", id: "Start" });
            data.addColumn({ type: "date", id: "End" });
            data.addRows(chart.data);
            chart.element.style.lineHeight = "normal";
            this$1.drawChart(chart, "Timeline", data, options);
          });
        };
        defaultExport.prototype.destroy = function destroy(chart) {
          if (chart.chart) {
            chart.chart.clearChart();
          }
        };
        defaultExport.prototype.drawChart = function drawChart(chart, type, data, options) {
          this.destroy(chart);
          if (chart.destroyed) {
            return;
          }
          if (chart.options.code) {
            window.console.log("var data = new google.visualization.DataTable(" + data.toJSON() + ");\nvar chart = new google.visualization." + type + "(element);\nchart.draw(data, " + JSON.stringify(options) + ");");
          }
          chart.chart = new this.library.visualization[type](chart.element);
          resize(function() {
            chart.chart.draw(data, options);
          });
        };
        defaultExport.prototype.waitForLoaded = function waitForLoaded(chart, pack, callback) {
          var this$1 = this;
          if (!callback) {
            callback = pack;
            pack = "corechart";
          }
          callbacks.push({ pack, callback });
          if (loaded[pack]) {
            this.runCallbacks();
          } else {
            loaded[pack] = true;
            var loadOptions = {
              packages: [pack],
              callback: function() {
                this$1.runCallbacks();
              }
            };
            var config2 = chart.__config();
            if (config2.language) {
              loadOptions.language = config2.language;
            }
            if (pack === "geochart" && config2.mapsApiKey) {
              loadOptions.mapsApiKey = config2.mapsApiKey;
            }
            this.library.charts.load("current", loadOptions);
          }
        };
        defaultExport.prototype.runCallbacks = function runCallbacks() {
          var cb, call;
          for (var i = 0; i < callbacks.length; i++) {
            cb = callbacks[i];
            call = this.library.visualization && (cb.pack === "corechart" && this.library.visualization.LineChart || cb.pack === "timeline" && this.library.visualization.Timeline || cb.pack === "geochart" && this.library.visualization.GeoChart);
            if (call) {
              cb.callback();
              callbacks.splice(i, 1);
              i--;
            }
          }
        };
        defaultExport.prototype.createDataTable = function createDataTable2(series, columnType) {
          var i, j, s, d, key, rows = [], sortedLabels = [];
          for (i = 0; i < series.length; i++) {
            s = series[i];
            series[i].name = series[i].name || "Value";
            for (j = 0; j < s.data.length; j++) {
              d = s.data[j];
              key = columnType === "datetime" ? d[0].getTime() : d[0];
              if (!rows[key]) {
                rows[key] = new Array(series.length);
                sortedLabels.push(key);
              }
              rows[key][i] = toFloat(d[1]);
            }
          }
          var rows2 = [];
          var day = true;
          var value;
          for (j = 0; j < sortedLabels.length; j++) {
            i = sortedLabels[j];
            if (columnType === "datetime") {
              value = new Date(toFloat(i));
              day = day && isDay(value);
            } else if (columnType === "number") {
              value = toFloat(i);
            } else {
              value = i;
            }
            rows2.push([value].concat(rows[i]));
          }
          if (columnType === "datetime") {
            rows2.sort(sortByTime);
          } else if (columnType === "number") {
            rows2.sort(sortByNumberSeries);
            for (i = 0; i < rows2.length; i++) {
              rows2[i][0] = toStr(rows2[i][0]);
            }
            columnType = "string";
          }
          var data = new this.library.visualization.DataTable();
          columnType = columnType === "datetime" && day ? "date" : columnType;
          data.addColumn(columnType, "");
          for (i = 0; i < series.length; i++) {
            data.addColumn("number", series[i].name);
          }
          data.addRows(rows2);
          return data;
        };
        function formatSeriesData(data, keyType) {
          var r = [], j, keyFunc;
          if (keyType === "number") {
            keyFunc = toFloat;
          } else if (keyType === "datetime") {
            keyFunc = toDate;
          } else {
            keyFunc = toStr;
          }
          if (keyType === "bubble") {
            for (j = 0; j < data.length; j++) {
              r.push([toFloat(data[j][0]), toFloat(data[j][1]), toFloat(data[j][2])]);
            }
          } else {
            for (j = 0; j < data.length; j++) {
              r.push([keyFunc(data[j][0]), toFloat(data[j][1])]);
            }
          }
          if (keyType === "datetime") {
            r.sort(sortByTime);
          } else if (keyType === "number") {
            r.sort(sortByNumberSeries);
          }
          return r;
        }
        function detectXType(series, noDatetime, options) {
          if (dataEmpty(series)) {
            if ((options.xmin || options.xmax) && (!options.xmin || isDate(options.xmin)) && (!options.xmax || isDate(options.xmax))) {
              return "datetime";
            } else {
              return "number";
            }
          } else if (detectXTypeWithFunction(series, isNumber)) {
            return "number";
          } else if (!noDatetime && detectXTypeWithFunction(series, isDate)) {
            return "datetime";
          } else {
            return "string";
          }
        }
        function detectXTypeWithFunction(series, func) {
          var i, j, data;
          for (i = 0; i < series.length; i++) {
            data = toArr(series[i].data);
            for (j = 0; j < data.length; j++) {
              if (!func(data[j][0])) {
                return false;
              }
            }
          }
          return true;
        }
        function copySeries(series) {
          var newSeries = [], i, j;
          for (i = 0; i < series.length; i++) {
            var copy = {};
            for (j in series[i]) {
              if (series[i].hasOwnProperty(j)) {
                copy[j] = series[i][j];
              }
            }
            newSeries.push(copy);
          }
          return newSeries;
        }
        function processSeries(chart, keyType, noDatetime) {
          var i;
          var opts = chart.options;
          var series = chart.rawData;
          chart.singleSeriesFormat = !isArray(series) || typeof series[0] !== "object" || isArray(series[0]);
          if (chart.singleSeriesFormat) {
            series = [{ name: opts.label, data: series }];
          }
          series = copySeries(series);
          for (i = 0; i < series.length; i++) {
            series[i].data = toArr(series[i].data);
          }
          chart.xtype = keyType ? keyType : opts.discrete ? "string" : detectXType(series, noDatetime, opts);
          for (i = 0; i < series.length; i++) {
            series[i].data = formatSeriesData(series[i].data, chart.xtype);
          }
          return series;
        }
        function processSimple(chart) {
          var perfectData = toArr(chart.rawData), i;
          for (i = 0; i < perfectData.length; i++) {
            perfectData[i] = [toStr(perfectData[i][0]), toFloat(perfectData[i][1])];
          }
          return perfectData;
        }
        function dataEmpty(data, chartType) {
          if (chartType === "PieChart" || chartType === "GeoChart" || chartType === "Timeline") {
            return data.length === 0;
          } else {
            for (var i = 0; i < data.length; i++) {
              if (data[i].data.length > 0) {
                return false;
              }
            }
            return true;
          }
        }
        function addDownloadButton(chart) {
          var element = chart.element;
          var link = document.createElement("a");
          var download = chart.options.download;
          if (download === true) {
            download = {};
          } else if (typeof download === "string") {
            download = { filename: download };
          }
          link.download = download.filename || "chart.png";
          link.style.position = "absolute";
          link.style.top = "20px";
          link.style.right = "20px";
          link.style.zIndex = 1e3;
          link.style.lineHeight = "20px";
          link.target = "_blank";
          var image = document.createElement("img");
          image.alt = "Download";
          image.style.border = "none";
          image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAABCFBMVEUAAADMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMywEsqxAAAAV3RSTlMAAQIDBggJCgsMDQ4PERQaHB0eISIjJCouLzE0OTo/QUJHSUpLTU5PUllhYmltcHh5foWLjI+SlaCio6atr7S1t7m6vsHHyM7R2tze5Obo7fHz9ff5+/1hlxK2AAAA30lEQVQYGUXBhVYCQQBA0TdYWAt2d3d3YWAHyur7/z9xgD16Lw0DW+XKx+1GgX+FRzM3HWQWrHl5N/oapW5RPe0PkBu+UYeICvozTWZVK23Ao04B79oJrOsJDOoxkZoQPWgX29pHpCZEk7rEvQYiNSFq1UMqvlCjJkRBS1R8hb00Vb/TajtBL7nTHE1X1vyMQF732dQhyF2o6SAwrzP06iUQzvwsArlnzcOdrgBhJyHa1QOgO9U1GsKuvjUTjavliZYQ8nNPapG6sap/3nrIdJ6bOWzmX/fy0XVpfzZP3S8OJT3g9EEiJwAAAABJRU5ErkJggg==";
          link.appendChild(image);
          element.style.position = "relative";
          chart.__downloadAttached = true;
          chart.__enterEvent = addEvent(element, "mouseover", function(e) {
            var related = e.relatedTarget;
            if ((!related || related !== this && !childOf(this, related)) && chart.options.download) {
              link.href = chart.toImage(download);
              element.appendChild(link);
            }
          });
          chart.__leaveEvent = addEvent(element, "mouseout", function(e) {
            var related = e.relatedTarget;
            if (!related || related !== this && !childOf(this, related)) {
              if (link.parentNode) {
                link.parentNode.removeChild(link);
              }
            }
          });
        }
        function addEvent(elem, event, fn) {
          if (elem.addEventListener) {
            elem.addEventListener(event, fn, false);
            return fn;
          } else {
            var fn2 = function() {
              return fn.call(elem, window.event);
            };
            elem.attachEvent("on" + event, fn2);
            return fn2;
          }
        }
        function removeEvent(elem, event, fn) {
          if (elem.removeEventListener) {
            elem.removeEventListener(event, fn, false);
          } else {
            elem.detachEvent("on" + event, fn);
          }
        }
        function childOf(p, c) {
          if (p === c) {
            return false;
          }
          while (c && c !== p) {
            c = c.parentNode;
          }
          return c === p;
        }
        var pendingRequests = [], runningRequests = 0, maxRequests = 4;
        function pushRequest(url, success, error) {
          pendingRequests.push([url, success, error]);
          runNext();
        }
        function runNext() {
          if (runningRequests < maxRequests) {
            var request = pendingRequests.shift();
            if (request) {
              runningRequests++;
              getJSON(request[0], request[1], request[2]);
              runNext();
            }
          }
        }
        function requestComplete() {
          runningRequests--;
          runNext();
        }
        function getJSON(url, success, error) {
          ajaxCall(url, success, function(jqXHR, textStatus, errorThrown) {
            var message = typeof errorThrown === "string" ? errorThrown : errorThrown.message;
            error(message);
          });
        }
        function ajaxCall(url, success, error) {
          var $ = window.jQuery || window.Zepto || window.$;
          if ($ && $.ajax) {
            $.ajax({
              dataType: "json",
              url,
              success,
              error,
              complete: requestComplete
            });
          } else {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onload = function() {
              requestComplete();
              if (xhr.status === 200) {
                success(JSON.parse(xhr.responseText), xhr.statusText, xhr);
              } else {
                error(xhr, "error", xhr.statusText);
              }
            };
            xhr.send();
          }
        }
        var config = {};
        var adapters = [];
        function setText(element, text) {
          if (document.body.innerText) {
            element.innerText = text;
          } else {
            element.textContent = text;
          }
        }
        function chartError(element, message, noPrefix) {
          if (!noPrefix) {
            message = "Error Loading Chart: " + message;
          }
          setText(element, message);
          element.style.color = "#ff0000";
        }
        function errorCatcher(chart) {
          try {
            chart.__render();
          } catch (err) {
            chartError(chart.element, err.message);
            throw err;
          }
        }
        function fetchDataSource(chart, dataSource, showLoading) {
          if (showLoading && chart.options.loading && (typeof dataSource === "string" || typeof dataSource === "function")) {
            setText(chart.element, chart.options.loading);
          }
          if (typeof dataSource === "string") {
            pushRequest(dataSource, function(data) {
              chart.rawData = data;
              errorCatcher(chart);
            }, function(message) {
              chartError(chart.element, message);
            });
          } else if (typeof dataSource === "function") {
            try {
              dataSource(function(data) {
                chart.rawData = data;
                errorCatcher(chart);
              }, function(message) {
                chartError(chart.element, message, true);
              });
            } catch (err) {
              chartError(chart.element, err, true);
            }
          } else {
            chart.rawData = dataSource;
            errorCatcher(chart);
          }
        }
        function getAdapterType(library) {
          if (library) {
            if (library.product === "Highcharts") {
              return defaultExport$1;
            } else if (library.charts) {
              return defaultExport;
            } else if (isFunction(library)) {
              return defaultExport$2;
            }
          }
          throw new Error("Unknown adapter");
        }
        function addAdapter(library) {
          var adapterType = getAdapterType(library);
          var adapter = new adapterType(library);
          if (adapters.indexOf(adapter) === -1) {
            adapters.push(adapter);
          }
        }
        function loadAdapters() {
          if ("Chart" in window) {
            addAdapter(window.Chart);
          }
          if ("Highcharts" in window) {
            addAdapter(window.Highcharts);
          }
          if (window.google && window.google.charts) {
            addAdapter(window.google);
          }
        }
        function renderChart(chartType, chart) {
          if (dataEmpty(chart.data, chartType)) {
            var message = chart.options.empty || chart.options.messages && chart.options.messages.empty || "No data";
            setText(chart.element, message);
          } else {
            callAdapter(chartType, chart);
            if (chart.options.download && !chart.__downloadAttached && chart.adapter === "chartjs") {
              addDownloadButton(chart);
            }
          }
        }
        function callAdapter(chartType, chart) {
          var i, adapter, fnName, adapterName;
          fnName = "render" + chartType;
          adapterName = chart.options.adapter;
          loadAdapters();
          for (i = 0; i < adapters.length; i++) {
            adapter = adapters[i];
            if ((!adapterName || adapterName === adapter.name) && isFunction(adapter[fnName])) {
              chart.adapter = adapter.name;
              chart.__adapterObject = adapter;
              return adapter[fnName](chart);
            }
          }
          if (adapters.length > 0) {
            throw new Error("No charting library found for " + chartType);
          } else {
            throw new Error("No charting libraries found - be sure to include one before your charts");
          }
        }
        var Chart = function Chart2(element, dataSource, options) {
          var elementId;
          if (typeof element === "string") {
            elementId = element;
            element = document.getElementById(element);
            if (!element) {
              throw new Error("No element with id " + elementId);
            }
          }
          this.element = element;
          this.options = merge(Chartkick2.options, options || {});
          this.dataSource = dataSource;
          Chartkick2.charts[element.id] = this;
          fetchDataSource(this, dataSource, true);
          if (this.options.refresh) {
            this.startRefresh();
          }
        };
        Chart.prototype.getElement = function getElement() {
          return this.element;
        };
        Chart.prototype.getDataSource = function getDataSource() {
          return this.dataSource;
        };
        Chart.prototype.getData = function getData() {
          return this.data;
        };
        Chart.prototype.getOptions = function getOptions() {
          return this.options;
        };
        Chart.prototype.getChartObject = function getChartObject() {
          return this.chart;
        };
        Chart.prototype.getAdapter = function getAdapter() {
          return this.adapter;
        };
        Chart.prototype.updateData = function updateData(dataSource, options) {
          this.dataSource = dataSource;
          if (options) {
            this.__updateOptions(options);
          }
          fetchDataSource(this, dataSource, true);
        };
        Chart.prototype.setOptions = function setOptions(options) {
          this.__updateOptions(options);
          this.redraw();
        };
        Chart.prototype.redraw = function redraw() {
          fetchDataSource(this, this.rawData);
        };
        Chart.prototype.refreshData = function refreshData() {
          if (typeof this.dataSource === "string") {
            var sep = this.dataSource.indexOf("?") === -1 ? "?" : "&";
            var url = this.dataSource + sep + "_=" + (/* @__PURE__ */ new Date()).getTime();
            fetchDataSource(this, url);
          } else if (typeof this.dataSource === "function") {
            fetchDataSource(this, this.dataSource);
          }
        };
        Chart.prototype.startRefresh = function startRefresh() {
          var this$1 = this;
          var refresh = this.options.refresh;
          if (refresh && typeof this.dataSource !== "string" && typeof this.dataSource !== "function") {
            throw new Error("Data source must be a URL or callback for refresh");
          }
          if (!this.intervalId) {
            if (refresh) {
              this.intervalId = setInterval(function() {
                this$1.refreshData();
              }, refresh * 1e3);
            } else {
              throw new Error("No refresh interval");
            }
          }
        };
        Chart.prototype.stopRefresh = function stopRefresh() {
          if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
          }
        };
        Chart.prototype.toImage = function toImage(download) {
          if (this.adapter === "chartjs") {
            if (download && download.background && download.background !== "transparent") {
              var canvas = this.chart.canvas;
              var ctx = this.chart.ctx;
              var tmpCanvas = document.createElement("canvas");
              var tmpCtx = tmpCanvas.getContext("2d");
              tmpCanvas.width = ctx.canvas.width;
              tmpCanvas.height = ctx.canvas.height;
              tmpCtx.fillStyle = download.background;
              tmpCtx.fillRect(0, 0, tmpCanvas.width, tmpCanvas.height);
              tmpCtx.drawImage(canvas, 0, 0);
              return tmpCanvas.toDataURL("image/png");
            } else {
              return this.chart.toBase64Image();
            }
          } else {
            throw new Error("Feature only available for Chart.js");
          }
        };
        Chart.prototype.destroy = function destroy() {
          this.destroyed = true;
          this.stopRefresh();
          if (this.__adapterObject) {
            this.__adapterObject.destroy(this);
          }
          if (this.__enterEvent) {
            removeEvent(this.element, "mouseover", this.__enterEvent);
          }
          if (this.__leaveEvent) {
            removeEvent(this.element, "mouseout", this.__leaveEvent);
          }
        };
        Chart.prototype.__updateOptions = function __updateOptions(options) {
          var updateRefresh = options.refresh && options.refresh !== this.options.refresh;
          this.options = merge(Chartkick2.options, options);
          if (updateRefresh) {
            this.stopRefresh();
            this.startRefresh();
          }
        };
        Chart.prototype.__render = function __render() {
          this.data = this.__processData();
          renderChart(this.__chartName(), this);
        };
        Chart.prototype.__config = function __config() {
          return config;
        };
        var LineChart = /* @__PURE__ */ function(Chart2) {
          function LineChart2() {
            Chart2.apply(this, arguments);
          }
          if (Chart2) LineChart2.__proto__ = Chart2;
          LineChart2.prototype = Object.create(Chart2 && Chart2.prototype);
          LineChart2.prototype.constructor = LineChart2;
          LineChart2.prototype.__processData = function __processData() {
            return processSeries(this);
          };
          LineChart2.prototype.__chartName = function __chartName() {
            return "LineChart";
          };
          return LineChart2;
        }(Chart);
        var PieChart = /* @__PURE__ */ function(Chart2) {
          function PieChart2() {
            Chart2.apply(this, arguments);
          }
          if (Chart2) PieChart2.__proto__ = Chart2;
          PieChart2.prototype = Object.create(Chart2 && Chart2.prototype);
          PieChart2.prototype.constructor = PieChart2;
          PieChart2.prototype.__processData = function __processData() {
            return processSimple(this);
          };
          PieChart2.prototype.__chartName = function __chartName() {
            return "PieChart";
          };
          return PieChart2;
        }(Chart);
        var ColumnChart = /* @__PURE__ */ function(Chart2) {
          function ColumnChart2() {
            Chart2.apply(this, arguments);
          }
          if (Chart2) ColumnChart2.__proto__ = Chart2;
          ColumnChart2.prototype = Object.create(Chart2 && Chart2.prototype);
          ColumnChart2.prototype.constructor = ColumnChart2;
          ColumnChart2.prototype.__processData = function __processData() {
            return processSeries(this, null, true);
          };
          ColumnChart2.prototype.__chartName = function __chartName() {
            return "ColumnChart";
          };
          return ColumnChart2;
        }(Chart);
        var BarChart = /* @__PURE__ */ function(Chart2) {
          function BarChart2() {
            Chart2.apply(this, arguments);
          }
          if (Chart2) BarChart2.__proto__ = Chart2;
          BarChart2.prototype = Object.create(Chart2 && Chart2.prototype);
          BarChart2.prototype.constructor = BarChart2;
          BarChart2.prototype.__processData = function __processData() {
            return processSeries(this, null, true);
          };
          BarChart2.prototype.__chartName = function __chartName() {
            return "BarChart";
          };
          return BarChart2;
        }(Chart);
        var AreaChart = /* @__PURE__ */ function(Chart2) {
          function AreaChart2() {
            Chart2.apply(this, arguments);
          }
          if (Chart2) AreaChart2.__proto__ = Chart2;
          AreaChart2.prototype = Object.create(Chart2 && Chart2.prototype);
          AreaChart2.prototype.constructor = AreaChart2;
          AreaChart2.prototype.__processData = function __processData() {
            return processSeries(this);
          };
          AreaChart2.prototype.__chartName = function __chartName() {
            return "AreaChart";
          };
          return AreaChart2;
        }(Chart);
        var GeoChart = /* @__PURE__ */ function(Chart2) {
          function GeoChart2() {
            Chart2.apply(this, arguments);
          }
          if (Chart2) GeoChart2.__proto__ = Chart2;
          GeoChart2.prototype = Object.create(Chart2 && Chart2.prototype);
          GeoChart2.prototype.constructor = GeoChart2;
          GeoChart2.prototype.__processData = function __processData() {
            return processSimple(this);
          };
          GeoChart2.prototype.__chartName = function __chartName() {
            return "GeoChart";
          };
          return GeoChart2;
        }(Chart);
        var ScatterChart = /* @__PURE__ */ function(Chart2) {
          function ScatterChart2() {
            Chart2.apply(this, arguments);
          }
          if (Chart2) ScatterChart2.__proto__ = Chart2;
          ScatterChart2.prototype = Object.create(Chart2 && Chart2.prototype);
          ScatterChart2.prototype.constructor = ScatterChart2;
          ScatterChart2.prototype.__processData = function __processData() {
            return processSeries(this, "number");
          };
          ScatterChart2.prototype.__chartName = function __chartName() {
            return "ScatterChart";
          };
          return ScatterChart2;
        }(Chart);
        var BubbleChart = /* @__PURE__ */ function(Chart2) {
          function BubbleChart2() {
            Chart2.apply(this, arguments);
          }
          if (Chart2) BubbleChart2.__proto__ = Chart2;
          BubbleChart2.prototype = Object.create(Chart2 && Chart2.prototype);
          BubbleChart2.prototype.constructor = BubbleChart2;
          BubbleChart2.prototype.__processData = function __processData() {
            return processSeries(this, "bubble");
          };
          BubbleChart2.prototype.__chartName = function __chartName() {
            return "BubbleChart";
          };
          return BubbleChart2;
        }(Chart);
        var Timeline = /* @__PURE__ */ function(Chart2) {
          function Timeline2() {
            Chart2.apply(this, arguments);
          }
          if (Chart2) Timeline2.__proto__ = Chart2;
          Timeline2.prototype = Object.create(Chart2 && Chart2.prototype);
          Timeline2.prototype.constructor = Timeline2;
          Timeline2.prototype.__processData = function __processData() {
            var i, data = this.rawData;
            for (i = 0; i < data.length; i++) {
              data[i][1] = toDate(data[i][1]);
              data[i][2] = toDate(data[i][2]);
            }
            return data;
          };
          Timeline2.prototype.__chartName = function __chartName() {
            return "Timeline";
          };
          return Timeline2;
        }(Chart);
        var Chartkick2 = {
          LineChart,
          PieChart,
          ColumnChart,
          BarChart,
          AreaChart,
          GeoChart,
          ScatterChart,
          BubbleChart,
          Timeline,
          charts: {},
          configure: function(options) {
            for (var key in options) {
              if (options.hasOwnProperty(key)) {
                config[key] = options[key];
              }
            }
          },
          setDefaultOptions: function(opts) {
            Chartkick2.options = opts;
          },
          eachChart: function(callback) {
            for (var chartId in Chartkick2.charts) {
              if (Chartkick2.charts.hasOwnProperty(chartId)) {
                callback(Chartkick2.charts[chartId]);
              }
            }
          },
          destroyAll: function() {
            for (var chartId in Chartkick2.charts) {
              if (Chartkick2.charts.hasOwnProperty(chartId)) {
                Chartkick2.charts[chartId].destroy();
                delete Chartkick2.charts[chartId];
              }
            }
          },
          config,
          options: {},
          adapters,
          addAdapter,
          use: function(adapter) {
            addAdapter(adapter);
            return Chartkick2;
          }
        };
        if (typeof window !== "undefined" && !window.Chartkick) {
          window.Chartkick = Chartkick2;
          document.addEventListener("turbolinks:before-render", function() {
            Chartkick2.destroyAll();
          });
          document.addEventListener("turbo:before-render", function() {
            Chartkick2.destroyAll();
          });
          setTimeout(function() {
            window.dispatchEvent(new Event("chartkick:load"));
          }, 0);
        }
        Chartkick2.default = Chartkick2;
        return Chartkick2;
      });
    }
  });

  // node_modules/highcharts/highcharts.js
  var require_highcharts = __commonJS({
    "node_modules/highcharts/highcharts.js"(exports, module) {
      (function(Y, M) {
        "object" === typeof module && module.exports ? (M["default"] = M, module.exports = Y.document ? M(Y) : M) : "function" === typeof define && define.amd ? define("highcharts/highcharts", function() {
          return M(Y);
        }) : (Y.Highcharts && Y.Highcharts.error(16, true), Y.Highcharts = M(Y));
      })("undefined" !== typeof window ? window : exports, function(Y) {
        function M(a, F, f2, G) {
          a.hasOwnProperty(F) || (a[F] = G.apply(null, f2), "function" === typeof CustomEvent && Y.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", { detail: { path: F, module: a[F] } })));
        }
        var f = {};
        M(f, "Core/Globals.js", [], function() {
          var a;
          (function(a2) {
            a2.SVG_NS = "http://www.w3.org/2000/svg";
            a2.product = "Highcharts";
            a2.version = "10.0.0";
            a2.win = "undefined" !== typeof Y ? Y : {};
            a2.doc = a2.win.document;
            a2.svg = a2.doc && a2.doc.createElementNS && !!a2.doc.createElementNS(a2.SVG_NS, "svg").createSVGRect;
            a2.userAgent = a2.win.navigator && a2.win.navigator.userAgent || "";
            a2.isChrome = -1 !== a2.userAgent.indexOf("Chrome");
            a2.isFirefox = -1 !== a2.userAgent.indexOf("Firefox");
            a2.isMS = /(edge|msie|trident)/i.test(a2.userAgent) && !a2.win.opera;
            a2.isSafari = !a2.isChrome && -1 !== a2.userAgent.indexOf("Safari");
            a2.isTouchDevice = /(Mobile|Android|Windows Phone)/.test(a2.userAgent);
            a2.isWebKit = -1 !== a2.userAgent.indexOf("AppleWebKit");
            a2.deg2rad = 2 * Math.PI / 360;
            a2.hasBidiBug = a2.isFirefox && 4 > parseInt(a2.userAgent.split("Firefox/")[1], 10);
            a2.hasTouch = !!a2.win.TouchEvent;
            a2.marginNames = ["plotTop", "marginRight", "marginBottom", "plotLeft"];
            a2.noop = function() {
            };
            a2.supportsPassiveEvents = function() {
              var f2 = false;
              if (!a2.isMS) {
                var F = Object.defineProperty({}, "passive", { get: function() {
                  f2 = true;
                } });
                a2.win.addEventListener && a2.win.removeEventListener && (a2.win.addEventListener("testPassive", a2.noop, F), a2.win.removeEventListener("testPassive", a2.noop, F));
              }
              return f2;
            }();
            a2.charts = [];
            a2.dateFormats = {};
            a2.seriesTypes = {};
            a2.symbolSizes = {};
            a2.chartCount = 0;
          })(a || (a = {}));
          "";
          return a;
        });
        M(f, "Core/Utilities.js", [f["Core/Globals.js"]], function(a) {
          function f2(r, b2, c2, g2) {
            var x = b2 ? "Highcharts error" : "Highcharts warning";
            32 === r && (r = x + ": Deprecated member");
            var D = p(r), q2 = D ? x + " #" + r + ": www.highcharts.com/errors/" + r + "/" : r.toString();
            if ("undefined" !== typeof g2) {
              var d2 = "";
              D && (q2 += "?");
              v(g2, function(b3, r2) {
                d2 += "\n - " + r2 + ": " + b3;
                D && (q2 += encodeURI(r2) + "=" + encodeURI(b3));
              });
              q2 += d2;
            }
            y(a, "displayError", { chart: c2, code: r, message: q2, params: g2 }, function() {
              if (b2) throw Error(q2);
              k.console && -1 === f2.messages.indexOf(q2) && console.warn(q2);
            });
            f2.messages.push(q2);
          }
          function C(b2, c2) {
            var r = {};
            v(b2, function(x, g2) {
              if (I(b2[g2], true) && !b2.nodeType && c2[g2]) x = C(b2[g2], c2[g2]), Object.keys(x).length && (r[g2] = x);
              else if (I(b2[g2]) || b2[g2] !== c2[g2] || g2 in b2 && !(g2 in c2)) r[g2] = b2[g2];
            });
            return r;
          }
          function G(b2, c2) {
            return parseInt(
              b2,
              c2 || 10
            );
          }
          function u(b2) {
            return "string" === typeof b2;
          }
          function H(b2) {
            b2 = Object.prototype.toString.call(b2);
            return "[object Array]" === b2 || "[object Array Iterator]" === b2;
          }
          function I(b2, c2) {
            return !!b2 && "object" === typeof b2 && (!c2 || !H(b2));
          }
          function B(b2) {
            return I(b2) && "number" === typeof b2.nodeType;
          }
          function z(b2) {
            var c2 = b2 && b2.constructor;
            return !(!I(b2, true) || B(b2) || !c2 || !c2.name || "Object" === c2.name);
          }
          function p(b2) {
            return "number" === typeof b2 && !isNaN(b2) && Infinity > b2 && -Infinity < b2;
          }
          function m(b2) {
            return "undefined" !== typeof b2 && null !== b2;
          }
          function e(b2, c2, g2) {
            var r = u(c2) && !m(g2), x, D = function(c3, g3) {
              m(c3) ? b2.setAttribute(g3, c3) : r ? (x = b2.getAttribute(g3)) || "class" !== g3 || (x = b2.getAttribute(g3 + "Name")) : b2.removeAttribute(g3);
            };
            u(c2) ? D(g2, c2) : v(c2, D);
            return x;
          }
          function d(b2, c2) {
            var r;
            b2 || (b2 = {});
            for (r in c2) b2[r] = c2[r];
            return b2;
          }
          function l() {
            for (var b2 = arguments, c2 = b2.length, g2 = 0; g2 < c2; g2++) {
              var k2 = b2[g2];
              if ("undefined" !== typeof k2 && null !== k2) return k2;
            }
          }
          function h(b2, c2) {
            a.isMS && !a.svg && c2 && m(c2.opacity) && (c2.filter = "alpha(opacity=" + 100 * c2.opacity + ")");
            d(b2.style, c2);
          }
          function t(b2, c2) {
            return 1e14 < b2 ? b2 : parseFloat(b2.toPrecision(c2 || 14));
          }
          function n(b2, c2, g2) {
            var r = a.getStyle || n;
            if ("width" === c2) return c2 = Math.min(b2.offsetWidth, b2.scrollWidth), g2 = b2.getBoundingClientRect && b2.getBoundingClientRect().width, g2 < c2 && g2 >= c2 - 1 && (c2 = Math.floor(g2)), Math.max(0, c2 - (r(b2, "padding-left", true) || 0) - (r(b2, "padding-right", true) || 0));
            if ("height" === c2) return Math.max(0, Math.min(b2.offsetHeight, b2.scrollHeight) - (r(b2, "padding-top", true) || 0) - (r(b2, "padding-bottom", true) || 0));
            k.getComputedStyle || f2(27, true);
            if (b2 = k.getComputedStyle(b2, void 0)) {
              var x = b2.getPropertyValue(c2);
              l(g2, "opacity" !== c2) && (x = G(x));
            }
            return x;
          }
          function v(b2, c2, g2) {
            for (var r in b2) Object.hasOwnProperty.call(b2, r) && c2.call(g2 || b2[r], b2[r], r, b2);
          }
          function w(b2, c2, g2) {
            function r(c3, r2) {
              var L = b2.removeEventListener || a.removeEventListenerPolyfill;
              L && L.call(b2, c3, r2, false);
            }
            function x(g3) {
              var x2;
              if (b2.nodeName) {
                if (c2) {
                  var L = {};
                  L[c2] = true;
                } else L = g3;
                v(L, function(b3, c3) {
                  if (g3[c3]) for (x2 = g3[c3].length; x2--; ) r(c3, g3[c3][x2].fn);
                });
              }
            }
            var k2 = "function" === typeof b2 && b2.prototype || b2;
            if (Object.hasOwnProperty.call(k2, "hcEvents")) {
              var D = k2.hcEvents;
              c2 ? (k2 = D[c2] || [], g2 ? (D[c2] = k2.filter(function(b3) {
                return g2 !== b3.fn;
              }), r(c2, g2)) : (x(D), D[c2] = [])) : (x(D), delete k2.hcEvents);
            }
          }
          function y(b2, c2, g2, k2) {
            g2 = g2 || {};
            if (q.createEvent && (b2.dispatchEvent || b2.fireEvent && b2 !== a)) {
              var r = q.createEvent("Events");
              r.initEvent(c2, true, true);
              g2 = d(r, g2);
              b2.dispatchEvent ? b2.dispatchEvent(g2) : b2.fireEvent(c2, g2);
            } else if (b2.hcEvents) {
              g2.target || d(g2, { preventDefault: function() {
                g2.defaultPrevented = true;
              }, target: b2, type: c2 });
              r = [];
              for (var x = b2, D = false; x.hcEvents; ) Object.hasOwnProperty.call(x, "hcEvents") && x.hcEvents[c2] && (r.length && (D = true), r.unshift.apply(r, x.hcEvents[c2])), x = Object.getPrototypeOf(x);
              D && r.sort(function(b3, c3) {
                return b3.order - c3.order;
              });
              r.forEach(function(c3) {
                false === c3.fn.call(b2, g2) && g2.preventDefault();
              });
            }
            k2 && !g2.defaultPrevented && k2.call(b2, g2);
          }
          var A = a.charts, q = a.doc, k = a.win;
          (f2 || (f2 = {})).messages = [];
          Math.easeInOutSine = function(b2) {
            return -0.5 * (Math.cos(Math.PI * b2) - 1);
          };
          var c = Array.prototype.find ? function(b2, c2) {
            return b2.find(c2);
          } : function(b2, c2) {
            var r, g2 = b2.length;
            for (r = 0; r < g2; r++) if (c2(b2[r], r)) return b2[r];
          };
          v({ map: "map", each: "forEach", grep: "filter", reduce: "reduce", some: "some" }, function(b2, c2) {
            a[c2] = function(r) {
              var g2;
              f2(32, false, void 0, (g2 = {}, g2["Highcharts." + c2] = "use Array." + b2, g2));
              return Array.prototype[b2].apply(r, [].slice.call(arguments, 1));
            };
          });
          var g, b = function() {
            var b2 = Math.random().toString(36).substring(2, 9) + "-", c2 = 0;
            return function() {
              return "highcharts-" + (g ? "" : b2) + c2++;
            };
          }();
          k.jQuery && (k.jQuery.fn.highcharts = function() {
            var b2 = [].slice.call(arguments);
            if (this[0]) return b2[0] ? (new a[u(b2[0]) ? b2.shift() : "Chart"](this[0], b2[0], b2[1]), this) : A[e(this[0], "data-highcharts-chart")];
          });
          c = {
            addEvent: function(b2, c2, g2, k2) {
              void 0 === k2 && (k2 = {});
              var r = "function" === typeof b2 && b2.prototype || b2;
              Object.hasOwnProperty.call(r, "hcEvents") || (r.hcEvents = {});
              r = r.hcEvents;
              a.Point && b2 instanceof a.Point && b2.series && b2.series.chart && (b2.series.chart.runTrackerClick = true);
              var x = b2.addEventListener || a.addEventListenerPolyfill;
              x && x.call(b2, c2, g2, a.supportsPassiveEvents ? { passive: void 0 === k2.passive ? -1 !== c2.indexOf("touch") : k2.passive, capture: false } : false);
              r[c2] || (r[c2] = []);
              r[c2].push({ fn: g2, order: "number" === typeof k2.order ? k2.order : Infinity });
              r[c2].sort(function(b3, c3) {
                return b3.order - c3.order;
              });
              return function() {
                w(b2, c2, g2);
              };
            },
            arrayMax: function(b2) {
              for (var c2 = b2.length, g2 = b2[0]; c2--; ) b2[c2] > g2 && (g2 = b2[c2]);
              return g2;
            },
            arrayMin: function(b2) {
              for (var c2 = b2.length, g2 = b2[0]; c2--; ) b2[c2] < g2 && (g2 = b2[c2]);
              return g2;
            },
            attr: e,
            clamp: function(b2, c2, g2) {
              return b2 > c2 ? b2 < g2 ? b2 : g2 : c2;
            },
            cleanRecursively: C,
            clearTimeout: function(b2) {
              m(b2) && clearTimeout(b2);
            },
            correctFloat: t,
            createElement: function(b2, c2, g2, k2, n2) {
              b2 = q.createElement(b2);
              c2 && d(b2, c2);
              n2 && h(b2, { padding: "0", border: "none", margin: "0" });
              g2 && h(b2, g2);
              k2 && k2.appendChild(b2);
              return b2;
            },
            css: h,
            defined: m,
            destroyObjectProperties: function(b2, c2) {
              v(b2, function(g2, r) {
                g2 && g2 !== c2 && g2.destroy && g2.destroy();
                delete b2[r];
              });
            },
            discardElement: function(b2) {
              b2 && b2.parentElement && b2.parentElement.removeChild(b2);
            },
            erase: function(b2, c2) {
              for (var g2 = b2.length; g2--; ) if (b2[g2] === c2) {
                b2.splice(g2, 1);
                break;
              }
            },
            error: f2,
            extend: d,
            extendClass: function(b2, c2) {
              var g2 = function() {
              };
              g2.prototype = new b2();
              d(g2.prototype, c2);
              return g2;
            },
            find: c,
            fireEvent: y,
            getMagnitude: function(b2) {
              return Math.pow(10, Math.floor(Math.log(b2) / Math.LN10));
            },
            getNestedProperty: function(b2, c2) {
              for (b2 = b2.split("."); b2.length && m(c2); ) {
                var g2 = b2.shift();
                if ("undefined" === typeof g2 || "__proto__" === g2) return;
                c2 = c2[g2];
                if (!m(c2) || "function" === typeof c2 || "number" === typeof c2.nodeType || c2 === k) return;
              }
              return c2;
            },
            getStyle: n,
            inArray: function(b2, c2, g2) {
              f2(32, false, void 0, { "Highcharts.inArray": "use Array.indexOf" });
              return c2.indexOf(b2, g2);
            },
            isArray: H,
            isClass: z,
            isDOMElement: B,
            isFunction: function(b2) {
              return "function" === typeof b2;
            },
            isNumber: p,
            isObject: I,
            isString: u,
            keys: function(b2) {
              f2(32, false, void 0, { "Highcharts.keys": "use Object.keys" });
              return Object.keys(b2);
            },
            merge: function() {
              var b2, c2 = arguments, g2 = {}, k2 = function(b3, c3) {
                "object" !== typeof b3 && (b3 = {});
                v(c3, function(g3, r) {
                  "__proto__" !== r && "constructor" !== r && (!I(g3, true) || z(g3) || B(g3) ? b3[r] = c3[r] : b3[r] = k2(b3[r] || {}, g3));
                });
                return b3;
              };
              true === c2[0] && (g2 = c2[1], c2 = Array.prototype.slice.call(c2, 2));
              var q2 = c2.length;
              for (b2 = 0; b2 < q2; b2++) g2 = k2(g2, c2[b2]);
              return g2;
            },
            normalizeTickInterval: function(b2, c2, g2, k2, q2) {
              var r = b2;
              g2 = l(g2, 1);
              var d2 = b2 / g2;
              c2 || (c2 = q2 ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], false === k2 && (1 === g2 ? c2 = c2.filter(function(b3) {
                return 0 === b3 % 1;
              }) : 0.1 >= g2 && (c2 = [1 / g2])));
              for (k2 = 0; k2 < c2.length && !(r = c2[k2], q2 && r * g2 >= b2 || !q2 && d2 <= (c2[k2] + (c2[k2 + 1] || c2[k2])) / 2); k2++) ;
              return r = t(r * g2, -Math.round(Math.log(1e-3) / Math.LN10));
            },
            objectEach: v,
            offset: function(b2) {
              var c2 = q.documentElement;
              b2 = b2.parentElement || b2.parentNode ? b2.getBoundingClientRect() : { top: 0, left: 0, width: 0, height: 0 };
              return { top: b2.top + (k.pageYOffset || c2.scrollTop) - (c2.clientTop || 0), left: b2.left + (k.pageXOffset || c2.scrollLeft) - (c2.clientLeft || 0), width: b2.width, height: b2.height };
            },
            pad: function(b2, c2, g2) {
              return Array((c2 || 2) + 1 - String(b2).replace(
                "-",
                ""
              ).length).join(g2 || "0") + b2;
            },
            pick: l,
            pInt: G,
            relativeLength: function(b2, c2, g2) {
              return /%$/.test(b2) ? c2 * parseFloat(b2) / 100 + (g2 || 0) : parseFloat(b2);
            },
            removeEvent: w,
            splat: function(b2) {
              return H(b2) ? b2 : [b2];
            },
            stableSort: function(b2, c2) {
              var g2 = b2.length, k2, r;
              for (r = 0; r < g2; r++) b2[r].safeI = r;
              b2.sort(function(b3, g3) {
                k2 = c2(b3, g3);
                return 0 === k2 ? b3.safeI - g3.safeI : k2;
              });
              for (r = 0; r < g2; r++) delete b2[r].safeI;
            },
            syncTimeout: function(b2, c2, g2) {
              if (0 < c2) return setTimeout(b2, c2, g2);
              b2.call(0, g2);
              return -1;
            },
            timeUnits: {
              millisecond: 1,
              second: 1e3,
              minute: 6e4,
              hour: 36e5,
              day: 864e5,
              week: 6048e5,
              month: 24192e5,
              year: 314496e5
            },
            uniqueKey: b,
            useSerialIds: function(b2) {
              return g = l(b2, g);
            },
            wrap: function(b2, c2, g2) {
              var k2 = b2[c2];
              b2[c2] = function() {
                var b3 = Array.prototype.slice.call(arguments), c3 = arguments, r = this;
                r.proceed = function() {
                  k2.apply(r, arguments.length ? arguments : c3);
                };
                b3.unshift(k2);
                b3 = g2.apply(this, b3);
                r.proceed = null;
                return b3;
              };
            }
          };
          "";
          return c;
        });
        M(f, "Core/Chart/ChartDefaults.js", [], function() {
          return {
            alignThresholds: false,
            panning: { enabled: false, type: "x" },
            styledMode: false,
            borderRadius: 0,
            colorCount: 10,
            defaultSeriesType: "line",
            ignoreHiddenSeries: true,
            spacing: [10, 10, 15, 10],
            resetZoomButton: { theme: { zIndex: 6 }, position: { align: "right", x: -10, y: 10 } },
            zoomBySingleTouch: false,
            width: null,
            height: null,
            borderColor: "#335cad",
            backgroundColor: "#ffffff",
            plotBorderColor: "#cccccc"
          };
        });
        M(f, "Core/Color/Color.js", [f["Core/Globals.js"], f["Core/Utilities.js"]], function(a, f2) {
          var F = f2.isNumber, G = f2.merge, u = f2.pInt;
          f2 = function() {
            function f3(F2) {
              this.rgba = [NaN, NaN, NaN, NaN];
              this.input = F2;
              var B = a.Color;
              if (B && B !== f3) return new B(F2);
              if (!(this instanceof f3)) return new f3(F2);
              this.init(F2);
            }
            f3.parse = function(a2) {
              return a2 ? new f3(a2) : f3.None;
            };
            f3.prototype.init = function(a2) {
              var B;
              if ("object" === typeof a2 && "undefined" !== typeof a2.stops) this.stops = a2.stops.map(function(e) {
                return new f3(e[1]);
              });
              else if ("string" === typeof a2) {
                this.input = a2 = f3.names[a2.toLowerCase()] || a2;
                if ("#" === a2.charAt(0)) {
                  var z = a2.length;
                  var p = parseInt(a2.substr(1), 16);
                  7 === z ? B = [(p & 16711680) >> 16, (p & 65280) >> 8, p & 255, 1] : 4 === z && (B = [(p & 3840) >> 4 | (p & 3840) >> 8, (p & 240) >> 4 | p & 240, (p & 15) << 4 | p & 15, 1]);
                }
                if (!B) for (p = f3.parsers.length; p-- && !B; ) {
                  var m = f3.parsers[p];
                  (z = m.regex.exec(a2)) && (B = m.parse(z));
                }
              }
              B && (this.rgba = B);
            };
            f3.prototype.get = function(a2) {
              var B = this.input, z = this.rgba;
              if ("object" === typeof B && "undefined" !== typeof this.stops) {
                var p = G(B);
                p.stops = [].slice.call(p.stops);
                this.stops.forEach(function(m, e) {
                  p.stops[e] = [p.stops[e][0], m.get(a2)];
                });
                return p;
              }
              return z && F(z[0]) ? "rgb" === a2 || !a2 && 1 === z[3] ? "rgb(" + z[0] + "," + z[1] + "," + z[2] + ")" : "a" === a2 ? "" + z[3] : "rgba(" + z.join(",") + ")" : B;
            };
            f3.prototype.brighten = function(a2) {
              var B = this.rgba;
              if (this.stops) this.stops.forEach(function(p) {
                p.brighten(a2);
              });
              else if (F(a2) && 0 !== a2) for (var z = 0; 3 > z; z++) B[z] += u(255 * a2), 0 > B[z] && (B[z] = 0), 255 < B[z] && (B[z] = 255);
              return this;
            };
            f3.prototype.setOpacity = function(a2) {
              this.rgba[3] = a2;
              return this;
            };
            f3.prototype.tweenTo = function(a2, B) {
              var z = this.rgba, p = a2.rgba;
              if (!F(z[0]) || !F(p[0])) return a2.input || "none";
              a2 = 1 !== p[3] || 1 !== z[3];
              return (a2 ? "rgba(" : "rgb(") + Math.round(p[0] + (z[0] - p[0]) * (1 - B)) + "," + Math.round(p[1] + (z[1] - p[1]) * (1 - B)) + "," + Math.round(p[2] + (z[2] - p[2]) * (1 - B)) + (a2 ? "," + (p[3] + (z[3] - p[3]) * (1 - B)) : "") + ")";
            };
            f3.names = { white: "#ffffff", black: "#000000" };
            f3.parsers = [{ regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/, parse: function(a2) {
              return [u(a2[1]), u(a2[2]), u(a2[3]), parseFloat(a2[4], 10)];
            } }, { regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/, parse: function(a2) {
              return [u(a2[1]), u(a2[2]), u(a2[3]), 1];
            } }];
            f3.None = new f3("");
            return f3;
          }();
          "";
          return f2;
        });
        M(f, "Core/Color/Palettes.js", [], function() {
          return { colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" ") };
        });
        M(f, "Core/Time.js", [f["Core/Globals.js"], f["Core/Utilities.js"]], function(a, f2) {
          var F = a.win, G = f2.defined, u = f2.error, H = f2.extend, I = f2.isObject, B = f2.merge, z = f2.objectEach, p = f2.pad, m = f2.pick, e = f2.splat, d = f2.timeUnits, l = a.isSafari && F.Intl && F.Intl.DateTimeFormat.prototype.formatRange, h = a.isSafari && F.Intl && !F.Intl.DateTimeFormat.prototype.formatRange;
          f2 = function() {
            function t(d2) {
              this.options = {};
              this.variableTimezone = this.useUTC = false;
              this.Date = F.Date;
              this.getTimezoneOffset = this.timezoneOffsetFunction();
              this.update(d2);
            }
            t.prototype.get = function(d2, e2) {
              if (this.variableTimezone || this.timezoneOffset) {
                var n = e2.getTime(), l2 = n - this.getTimezoneOffset(e2);
                e2.setTime(l2);
                d2 = e2["getUTC" + d2]();
                e2.setTime(n);
                return d2;
              }
              return this.useUTC ? e2["getUTC" + d2]() : e2["get" + d2]();
            };
            t.prototype.set = function(d2, e2, h2) {
              if (this.variableTimezone || this.timezoneOffset) {
                if ("Milliseconds" === d2 || "Seconds" === d2 || "Minutes" === d2 && 0 === this.getTimezoneOffset(e2) % 36e5) return e2["setUTC" + d2](h2);
                var n = this.getTimezoneOffset(e2);
                n = e2.getTime() - n;
                e2.setTime(n);
                e2["setUTC" + d2](h2);
                d2 = this.getTimezoneOffset(e2);
                n = e2.getTime() + d2;
                return e2.setTime(n);
              }
              return this.useUTC || l && "FullYear" === d2 ? e2["setUTC" + d2](h2) : e2["set" + d2](h2);
            };
            t.prototype.update = function(d2) {
              var e2 = m(d2 && d2.useUTC, true);
              this.options = d2 = B(true, this.options || {}, d2);
              this.Date = d2.Date || F.Date || Date;
              this.timezoneOffset = (this.useUTC = e2) && d2.timezoneOffset;
              this.getTimezoneOffset = this.timezoneOffsetFunction();
              this.variableTimezone = e2 && !(!d2.getTimezoneOffset && !d2.timezone);
            };
            t.prototype.makeTime = function(d2, e2, l2, t2, A, q) {
              if (this.useUTC) {
                var k = this.Date.UTC.apply(0, arguments);
                var c = this.getTimezoneOffset(k);
                k += c;
                var g = this.getTimezoneOffset(k);
                c !== g ? k += g - c : c - 36e5 !== this.getTimezoneOffset(k - 36e5) || h || (k -= 36e5);
              } else k = new this.Date(d2, e2, m(l2, 1), m(t2, 0), m(A, 0), m(q, 0)).getTime();
              return k;
            };
            t.prototype.timezoneOffsetFunction = function() {
              var d2 = this, e2 = this.options, l2 = e2.getTimezoneOffset, h2 = e2.moment || F.moment;
              if (!this.useUTC) return function(d3) {
                return 6e4 * new Date(d3.toString()).getTimezoneOffset();
              };
              if (e2.timezone) {
                if (h2) return function(d3) {
                  return 6e4 * -h2.tz(d3, e2.timezone).utcOffset();
                };
                u(25);
              }
              return this.useUTC && l2 ? function(d3) {
                return 6e4 * l2(d3.valueOf());
              } : function() {
                return 6e4 * (d2.timezoneOffset || 0);
              };
            };
            t.prototype.dateFormat = function(d2, e2, l2) {
              if (!G(e2) || isNaN(e2)) return a.defaultOptions.lang && a.defaultOptions.lang.invalidDate || "";
              d2 = m(d2, "%Y-%m-%d %H:%M:%S");
              var h2 = this, n = new this.Date(e2), q = this.get("Hours", n), k = this.get("Day", n), c = this.get("Date", n), g = this.get("Month", n), b = this.get("FullYear", n), r = a.defaultOptions.lang, x = r && r.weekdays, D = r && r.shortWeekdays;
              n = H({
                a: D ? D[k] : x[k].substr(0, 3),
                A: x[k],
                d: p(c),
                e: p(c, 2, " "),
                w: k,
                b: r.shortMonths[g],
                B: r.months[g],
                m: p(g + 1),
                o: g + 1,
                y: b.toString().substr(2, 2),
                Y: b,
                H: p(q),
                k: q,
                I: p(q % 12 || 12),
                l: q % 12 || 12,
                M: p(this.get("Minutes", n)),
                p: 12 > q ? "AM" : "PM",
                P: 12 > q ? "am" : "pm",
                S: p(n.getSeconds()),
                L: p(Math.floor(e2 % 1e3), 3)
              }, a.dateFormats);
              z(n, function(b2, c2) {
                for (; -1 !== d2.indexOf("%" + c2); ) d2 = d2.replace("%" + c2, "function" === typeof b2 ? b2.call(h2, e2) : b2);
              });
              return l2 ? d2.substr(0, 1).toUpperCase() + d2.substr(1) : d2;
            };
            t.prototype.resolveDTLFormat = function(d2) {
              return I(d2, true) ? d2 : (d2 = e(d2), { main: d2[0], from: d2[1], to: d2[2] });
            };
            t.prototype.getTimeTicks = function(e2, l2, h2, t2) {
              var n = this, q = [], k = {}, c = new n.Date(l2), g = e2.unitRange, b = e2.count || 1, r;
              t2 = m(t2, 1);
              if (G(l2)) {
                n.set("Milliseconds", c, g >= d.second ? 0 : b * Math.floor(n.get("Milliseconds", c) / b));
                g >= d.second && n.set("Seconds", c, g >= d.minute ? 0 : b * Math.floor(n.get("Seconds", c) / b));
                g >= d.minute && n.set("Minutes", c, g >= d.hour ? 0 : b * Math.floor(n.get("Minutes", c) / b));
                g >= d.hour && n.set("Hours", c, g >= d.day ? 0 : b * Math.floor(n.get("Hours", c) / b));
                g >= d.day && n.set("Date", c, g >= d.month ? 1 : Math.max(1, b * Math.floor(n.get("Date", c) / b)));
                if (g >= d.month) {
                  n.set("Month", c, g >= d.year ? 0 : b * Math.floor(n.get("Month", c) / b));
                  var x = n.get("FullYear", c);
                }
                g >= d.year && n.set("FullYear", c, x - x % b);
                g === d.week && (x = n.get("Day", c), n.set("Date", c, n.get("Date", c) - x + t2 + (x < t2 ? -7 : 0)));
                x = n.get("FullYear", c);
                t2 = n.get("Month", c);
                var D = n.get("Date", c), y = n.get("Hours", c);
                l2 = c.getTime();
                !n.variableTimezone && n.useUTC || !G(h2) || (r = h2 - l2 > 4 * d.month || n.getTimezoneOffset(l2) !== n.getTimezoneOffset(h2));
                l2 = c.getTime();
                for (c = 1; l2 < h2; ) q.push(l2), l2 = g === d.year ? n.makeTime(x + c * b, 0) : g === d.month ? n.makeTime(
                  x,
                  t2 + c * b
                ) : !r || g !== d.day && g !== d.week ? r && g === d.hour && 1 < b ? n.makeTime(x, t2, D, y + c * b) : l2 + g * b : n.makeTime(x, t2, D + c * b * (g === d.day ? 1 : 7)), c++;
                q.push(l2);
                g <= d.hour && 1e4 > q.length && q.forEach(function(b2) {
                  0 === b2 % 18e5 && "000000000" === n.dateFormat("%H%M%S%L", b2) && (k[b2] = "day");
                });
              }
              q.info = H(e2, { higherRanks: k, totalRange: g * b });
              return q;
            };
            t.prototype.getDateFormat = function(e2, l2, h2, t2) {
              var n = this.dateFormat("%m-%d %H:%M:%S.%L", l2), q = { millisecond: 15, second: 12, minute: 9, hour: 6, day: 3 }, k = "millisecond";
              for (c in d) {
                if (e2 === d.week && +this.dateFormat(
                  "%w",
                  l2
                ) === h2 && "00:00:00.000" === n.substr(6)) {
                  var c = "week";
                  break;
                }
                if (d[c] > e2) {
                  c = k;
                  break;
                }
                if (q[c] && n.substr(q[c]) !== "01-01 00:00:00.000".substr(q[c])) break;
                "week" !== c && (k = c);
              }
              if (c) var g = this.resolveDTLFormat(t2[c]).main;
              return g;
            };
            return t;
          }();
          "";
          return f2;
        });
        M(f, "Core/DefaultOptions.js", [f["Core/Chart/ChartDefaults.js"], f["Core/Color/Color.js"], f["Core/Globals.js"], f["Core/Color/Palettes.js"], f["Core/Time.js"], f["Core/Utilities.js"]], function(a, f2, C, G, u, H) {
          f2 = f2.parse;
          var F = H.merge, B = { colors: G.colors, symbols: [
            "circle",
            "diamond",
            "square",
            "triangle",
            "triangle-down"
          ], lang: { loading: "Loading...", months: "January February March April May June July August September October November December".split(" "), shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), decimalPoint: ".", numericSymbols: "kMGTPE".split(""), resetZoom: "Reset zoom", resetZoomTitle: "Reset zoom level 1:1", thousandsSep: " " }, global: {}, time: {
            Date: void 0,
            getTimezoneOffset: void 0,
            timezone: void 0,
            timezoneOffset: 0,
            useUTC: true
          }, chart: a, title: { text: "Chart title", align: "center", margin: 15, widthAdjust: -44 }, subtitle: { text: "", align: "center", widthAdjust: -44 }, caption: { margin: 15, text: "", align: "left", verticalAlign: "bottom" }, plotOptions: {}, labels: { style: { position: "absolute", color: "#333333" } }, legend: { enabled: true, align: "center", alignColumns: true, className: "highcharts-no-tooltip", layout: "horizontal", labelFormatter: function() {
            return this.name;
          }, borderColor: "#999999", borderRadius: 0, navigation: {
            activeColor: "#003399",
            inactiveColor: "#cccccc"
          }, itemStyle: { color: "#333333", cursor: "pointer", fontSize: "12px", fontWeight: "bold", textOverflow: "ellipsis" }, itemHoverStyle: { color: "#000000" }, itemHiddenStyle: { color: "#cccccc" }, shadow: false, itemCheckboxStyle: { position: "absolute", width: "13px", height: "13px" }, squareSymbol: true, symbolPadding: 5, verticalAlign: "bottom", x: 0, y: 0, title: { style: { fontWeight: "bold" } } }, loading: { labelStyle: { fontWeight: "bold", position: "relative", top: "45%" }, style: {
            position: "absolute",
            backgroundColor: "#ffffff",
            opacity: 0.5,
            textAlign: "center"
          } }, tooltip: {
            enabled: true,
            animation: C.svg,
            borderRadius: 3,
            dateTimeLabelFormats: { millisecond: "%A, %b %e, %H:%M:%S.%L", second: "%A, %b %e, %H:%M:%S", minute: "%A, %b %e, %H:%M", hour: "%A, %b %e, %H:%M", day: "%A, %b %e, %Y", week: "Week from %A, %b %e, %Y", month: "%B %Y", year: "%Y" },
            footerFormat: "",
            headerShape: "callout",
            hideDelay: 500,
            padding: 8,
            shape: "callout",
            shared: false,
            snap: C.isTouchDevice ? 25 : 10,
            headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
            pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
            backgroundColor: f2("#f7f7f7").setOpacity(0.85).get(),
            borderWidth: 1,
            shadow: true,
            stickOnContact: false,
            style: { color: "#333333", cursor: "default", fontSize: "12px", whiteSpace: "nowrap" },
            useHTML: false
          }, credits: { enabled: true, href: "https://www.highcharts.com?credits", position: { align: "right", x: -10, verticalAlign: "bottom", y: -5 }, style: { cursor: "pointer", color: "#999999", fontSize: "9px" }, text: "Highcharts.com" } };
          B.chart.styledMode = false;
          "";
          var z = new u(F(B.global, B.time));
          a = {
            defaultOptions: B,
            defaultTime: z,
            getOptions: function() {
              return B;
            },
            setOptions: function(p) {
              F(true, B, p);
              if (p.time || p.global) C.time ? C.time.update(F(B.global, B.time, p.global, p.time)) : C.time = z;
              return B;
            }
          };
          "";
          return a;
        });
        M(f, "Core/Animation/Fx.js", [f["Core/Color/Color.js"], f["Core/Globals.js"], f["Core/Utilities.js"]], function(a, f2, C) {
          var F = a.parse, u = f2.win, H = C.isNumber, I = C.objectEach;
          return function() {
            function a2(a3, p, m) {
              this.pos = NaN;
              this.options = p;
              this.elem = a3;
              this.prop = m;
            }
            a2.prototype.dSetter = function() {
              var a3 = this.paths, p = a3 && a3[0];
              a3 = a3 && a3[1];
              var m = this.now || 0, e = [];
              if (1 !== m && p && a3) if (p.length === a3.length && 1 > m) for (var d = 0; d < a3.length; d++) {
                for (var l = p[d], h = a3[d], t = [], n = 0; n < h.length; n++) {
                  var v = l[n], w = h[n];
                  H(v) && H(w) && ("A" !== h[0] || 4 !== n && 5 !== n) ? t[n] = v + m * (w - v) : t[n] = w;
                }
                e.push(t);
              }
              else e = a3;
              else e = this.toD || [];
              this.elem.attr("d", e, void 0, true);
            };
            a2.prototype.update = function() {
              var a3 = this.elem, p = this.prop, m = this.now, e = this.options.step;
              if (this[p + "Setter"]) this[p + "Setter"]();
              else a3.attr ? a3.element && a3.attr(p, m, null, true) : a3.style[p] = m + this.unit;
              e && e.call(a3, m, this);
            };
            a2.prototype.run = function(z, p, m) {
              var e = this, d = e.options, l = function(d2) {
                return l.stopped ? false : e.step(d2);
              }, h = u.requestAnimationFrame || function(d2) {
                setTimeout(d2, 13);
              }, t = function() {
                for (var d2 = 0; d2 < a2.timers.length; d2++) a2.timers[d2]() || a2.timers.splice(d2--, 1);
                a2.timers.length && h(t);
              };
              z !== p || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +/* @__PURE__ */ new Date(), this.start = z, this.end = p, this.unit = m, this.now = this.start, this.pos = 0, l.elem = this.elem, l.prop = this.prop, l() && 1 === a2.timers.push(l) && h(t)) : (delete d.curAnim[this.prop], d.complete && 0 === Object.keys(d.curAnim).length && d.complete.call(this.elem));
            };
            a2.prototype.step = function(a3) {
              var p = +/* @__PURE__ */ new Date(), m = this.options, e = this.elem, d = m.complete, l = m.duration, h = m.curAnim;
              if (e.attr && !e.element) a3 = false;
              else if (a3 || p >= l + this.startTime) {
                this.now = this.end;
                this.pos = 1;
                this.update();
                var t = h[this.prop] = true;
                I(h, function(d2) {
                  true !== d2 && (t = false);
                });
                t && d && d.call(e);
                a3 = false;
              } else this.pos = m.easing((p - this.startTime) / l), this.now = this.start + (this.end - this.start) * this.pos, this.update(), a3 = true;
              return a3;
            };
            a2.prototype.initPath = function(a3, p, m) {
              function e(d2, q) {
                for (; d2.length < y; ) {
                  var k = d2[0], c = q[y - d2.length];
                  c && "M" === k[0] && (d2[0] = "C" === c[0] ? ["C", k[1], k[2], k[1], k[2], k[1], k[2]] : ["L", k[1], k[2]]);
                  d2.unshift(k);
                  t && (k = d2.pop(), d2.push(d2[d2.length - 1], k));
                }
              }
              function d(d2, q) {
                for (; d2.length < y; ) if (q = d2[Math.floor(d2.length / n) - 1].slice(), "C" === q[0] && (q[1] = q[5], q[2] = q[6]), t) {
                  var k = d2[Math.floor(d2.length / n)].slice();
                  d2.splice(d2.length / 2, 0, q, k);
                } else d2.push(q);
              }
              var l = a3.startX, h = a3.endX;
              m = m.slice();
              var t = a3.isArea, n = t ? 2 : 1;
              p = p && p.slice();
              if (!p) return [m, m];
              if (l && h && h.length) {
                for (a3 = 0; a3 < l.length; a3++) if (l[a3] === h[0]) {
                  var v = a3;
                  break;
                } else if (l[0] === h[h.length - l.length + a3]) {
                  v = a3;
                  var w = true;
                  break;
                } else if (l[l.length - 1] === h[h.length - l.length + a3]) {
                  v = l.length - a3;
                  break;
                }
                "undefined" === typeof v && (p = []);
              }
              if (p.length && H(v)) {
                var y = m.length + v * n;
                w ? (e(p, m), d(m, p)) : (e(m, p), d(p, m));
              }
              return [p, m];
            };
            a2.prototype.fillSetter = function() {
              a2.prototype.strokeSetter.apply(this, arguments);
            };
            a2.prototype.strokeSetter = function() {
              this.elem.attr(this.prop, F(this.start).tweenTo(F(this.end), this.pos), void 0, true);
            };
            a2.timers = [];
            return a2;
          }();
        });
        M(f, "Core/Animation/AnimationUtilities.js", [
          f["Core/Animation/Fx.js"],
          f["Core/Utilities.js"]
        ], function(a, f2) {
          function F(d) {
            return z(d) ? p({ duration: 500, defer: 0 }, d) : { duration: d ? 500 : 0, defer: 0 };
          }
          function G(d, e2) {
            for (var l = a.timers.length; l--; ) a.timers[l].elem !== d || e2 && e2 !== a.timers[l].prop || (a.timers[l].stopped = true);
          }
          var u = f2.defined, H = f2.getStyle, I = f2.isArray, B = f2.isNumber, z = f2.isObject, p = f2.merge, m = f2.objectEach, e = f2.pick;
          return { animate: function(d, e2, h) {
            var l, n = "", v, w;
            if (!z(h)) {
              var y = arguments;
              h = { duration: y[2], easing: y[3], complete: y[4] };
            }
            B(h.duration) || (h.duration = 400);
            h.easing = "function" === typeof h.easing ? h.easing : Math[h.easing] || Math.easeInOutSine;
            h.curAnim = p(e2);
            m(e2, function(t, q) {
              G(d, q);
              w = new a(d, h, q);
              v = void 0;
              "d" === q && I(e2.d) ? (w.paths = w.initPath(d, d.pathArray, e2.d), w.toD = e2.d, l = 0, v = 1) : d.attr ? l = d.attr(q) : (l = parseFloat(H(d, q)) || 0, "opacity" !== q && (n = "px"));
              v || (v = t);
              "string" === typeof v && v.match("px") && (v = v.replace(/px/g, ""));
              w.run(l, v, n);
            });
          }, animObject: F, getDeferredAnimation: function(d, e2, h) {
            var l = F(e2), n = 0, a2 = 0;
            (h ? [h] : d.series).forEach(function(d2) {
              d2 = F(d2.options.animation);
              n = e2 && u(e2.defer) ? l.defer : Math.max(n, d2.duration + d2.defer);
              a2 = Math.min(l.duration, d2.duration);
            });
            d.renderer.forExport && (n = 0);
            return { defer: Math.max(0, n - a2), duration: Math.min(n, a2) };
          }, setAnimation: function(d, l) {
            l.renderer.globalAnimation = e(d, l.options.chart.animation, true);
          }, stop: G };
        });
        M(f, "Core/Renderer/HTML/AST.js", [f["Core/Globals.js"], f["Core/Utilities.js"]], function(a, f2) {
          var F = a.SVG_NS, G = f2.attr, u = f2.createElement, H = f2.css, I = f2.error, B = f2.isFunction, z = f2.isString, p = f2.objectEach, m = f2.splat, e = (f2 = a.win.trustedTypes) && B(f2.createPolicy) && f2.createPolicy(
            "highcharts",
            { createHTML: function(d2) {
              return d2;
            } }
          ), d = e ? e.createHTML("") : "";
          try {
            var l = !!new DOMParser().parseFromString(d, "text/html");
          } catch (h) {
            l = false;
          }
          B = function() {
            function h(d2) {
              this.nodes = "string" === typeof d2 ? this.parseMarkup(d2) : d2;
            }
            h.filterUserAttributes = function(d2) {
              p(d2, function(e2, l2) {
                var n = true;
                -1 === h.allowedAttributes.indexOf(l2) && (n = false);
                -1 !== ["background", "dynsrc", "href", "lowsrc", "src"].indexOf(l2) && (n = z(e2) && h.allowedReferences.some(function(d3) {
                  return 0 === e2.indexOf(d3);
                }));
                n || (I("Highcharts warning: Invalid attribute '" + l2 + "' in config"), delete d2[l2]);
              });
              return d2;
            };
            h.parseStyle = function(d2) {
              return d2.split(";").reduce(function(d3, e2) {
                e2 = e2.split(":").map(function(d4) {
                  return d4.trim();
                });
                var l2 = e2[0].replace(/-([a-z])/g, function(d4) {
                  return d4[1].toUpperCase();
                });
                e2[1] && (d3[l2] = e2[1]);
                return d3;
              }, {});
            };
            h.setElementHTML = function(d2, e2) {
              d2.innerHTML = h.emptyHTML;
              e2 && new h(e2).addToDOM(d2);
            };
            h.prototype.addToDOM = function(d2) {
              function e2(d3, l2) {
                var n;
                m(d3).forEach(function(d4) {
                  var q = d4.tagName, k = d4.textContent ? a.doc.createTextNode(d4.textContent) : void 0, c = h.bypassHTMLFiltering;
                  if (q) if ("#text" === q) var g = k;
                  else if (-1 !== h.allowedTags.indexOf(q) || c) {
                    q = a.doc.createElementNS("svg" === q ? F : l2.namespaceURI || F, q);
                    var b = d4.attributes || {};
                    p(d4, function(c2, g2) {
                      "tagName" !== g2 && "attributes" !== g2 && "children" !== g2 && "style" !== g2 && "textContent" !== g2 && (b[g2] = c2);
                    });
                    G(q, c ? b : h.filterUserAttributes(b));
                    d4.style && H(q, d4.style);
                    k && q.appendChild(k);
                    e2(d4.children || [], q);
                    g = q;
                  } else I("Highcharts warning: Invalid tagName " + q + " in config");
                  g && l2.appendChild(g);
                  n = g;
                });
                return n;
              }
              return e2(this.nodes, d2);
            };
            h.prototype.parseMarkup = function(d2) {
              var n = [];
              d2 = d2.trim().replace(/ style="/g, ' data-style="');
              if (l) d2 = new DOMParser().parseFromString(e ? e.createHTML(d2) : d2, "text/html");
              else {
                var a2 = u("div");
                a2.innerHTML = d2;
                d2 = { body: a2 };
              }
              var t = function(d3, e2) {
                var q = d3.nodeName.toLowerCase(), k = { tagName: q };
                "#text" === q && (k.textContent = d3.textContent || "");
                if (q = d3.attributes) {
                  var c = {};
                  [].forEach.call(q, function(b) {
                    "data-style" === b.name ? k.style = h.parseStyle(b.value) : c[b.name] = b.value;
                  });
                  k.attributes = c;
                }
                if (d3.childNodes.length) {
                  var g = [];
                  [].forEach.call(
                    d3.childNodes,
                    function(b) {
                      t(b, g);
                    }
                  );
                  g.length && (k.children = g);
                }
                e2.push(k);
              };
              [].forEach.call(d2.body.childNodes, function(d3) {
                return t(d3, n);
              });
              return n;
            };
            h.allowedAttributes = "aria-controls aria-describedby aria-expanded aria-haspopup aria-hidden aria-label aria-labelledby aria-live aria-pressed aria-readonly aria-roledescription aria-selected class clip-path color colspan cx cy d dx dy disabled fill height href id in markerHeight markerWidth offset opacity orient padding paddingLeft paddingRight patternUnits r refX refY role scope slope src startOffset stdDeviation stroke stroke-linecap stroke-width style tableValues result rowspan summary target tabindex text-align textAnchor textLength title type valign width x x1 x2 y y1 y2 zIndex".split(" ");
            h.allowedReferences = "https:// http:// mailto: / ../ ./ #".split(" ");
            h.allowedTags = "a abbr b br button caption circle clipPath code dd defs div dl dt em feComponentTransfer feFuncA feFuncB feFuncG feFuncR feGaussianBlur feOffset feMerge feMergeNode filter h1 h2 h3 h4 h5 h6 hr i img li linearGradient marker ol p path pattern pre rect small span stop strong style sub sup svg table text thead tbody tspan td th tr u ul #text".split(" ");
            h.emptyHTML = d;
            h.bypassHTMLFiltering = false;
            return h;
          }();
          "";
          return B;
        });
        M(f, "Core/FormatUtilities.js", [f["Core/DefaultOptions.js"], f["Core/Utilities.js"]], function(a, f2) {
          function F(a2, m, e, d) {
            a2 = +a2 || 0;
            m = +m;
            var l = G.lang, h = (a2.toString().split(".")[1] || "").split("e")[0].length, t = a2.toString().split("e"), n = m;
            if (-1 === m) m = Math.min(h, 20);
            else if (!I(m)) m = 2;
            else if (m && t[1] && 0 > t[1]) {
              var v = m + +t[1];
              0 <= v ? (t[0] = (+t[0]).toExponential(v).split("e")[0], m = v) : (t[0] = t[0].split(".")[0] || 0, a2 = 20 > m ? (t[0] * Math.pow(10, t[1])).toFixed(m) : 0, t[1] = 0);
            }
            v = (Math.abs(t[1] ? t[0] : a2) + Math.pow(10, -Math.max(m, h) - 1)).toFixed(m);
            h = String(z(v));
            var w = 3 < h.length ? h.length % 3 : 0;
            e = B(e, l.decimalPoint);
            d = B(d, l.thousandsSep);
            a2 = (0 > a2 ? "-" : "") + (w ? h.substr(0, w) + d : "");
            a2 = 0 > +t[1] && !n ? "0" : a2 + h.substr(w).replace(/(\d{3})(?=\d)/g, "$1" + d);
            m && (a2 += e + v.slice(-m));
            t[1] && 0 !== +a2 && (a2 += "e" + t[1]);
            return a2;
          }
          var G = a.defaultOptions, u = a.defaultTime, H = f2.getNestedProperty, I = f2.isNumber, B = f2.pick, z = f2.pInt;
          return { dateFormat: function(a2, m, e) {
            return u.dateFormat(a2, m, e);
          }, format: function(a2, m, e) {
            var d = "{", l = false, h = /f$/, t = /\.([0-9])/, n = G.lang, v = e && e.time || u;
            e = e && e.numberFormatter || F;
            for (var w = []; a2; ) {
              var y = a2.indexOf(d);
              if (-1 === y) break;
              var A = a2.slice(0, y);
              if (l) {
                A = A.split(":");
                d = H(A.shift() || "", m);
                if (A.length && "number" === typeof d) if (A = A.join(":"), h.test(A)) {
                  var q = parseInt((A.match(t) || ["", "-1"])[1], 10);
                  null !== d && (d = e(d, q, n.decimalPoint, -1 < A.indexOf(",") ? n.thousandsSep : ""));
                } else d = v.dateFormat(A, d);
                w.push(d);
              } else w.push(A);
              a2 = a2.slice(y + 1);
              d = (l = !l) ? "}" : "{";
            }
            w.push(a2);
            return w.join("");
          }, numberFormat: F };
        });
        M(
          f,
          "Core/Renderer/RendererUtilities.js",
          [f["Core/Utilities.js"]],
          function(a) {
            var f2 = a.clamp, C = a.pick, G = a.stableSort, u;
            (function(a2) {
              function F(a3, z, p) {
                var m = a3, e = m.reducedLen || z, d = function(d2, e2) {
                  return (e2.rank || 0) - (d2.rank || 0);
                }, l = function(d2, e2) {
                  return d2.target - e2.target;
                }, h, t = true, n = [], v = 0;
                for (h = a3.length; h--; ) v += a3[h].size;
                if (v > e) {
                  G(a3, d);
                  for (v = h = 0; v <= e; ) v += a3[h].size, h++;
                  n = a3.splice(h - 1, a3.length);
                }
                G(a3, l);
                for (a3 = a3.map(function(d2) {
                  return { size: d2.size, targets: [d2.target], align: C(d2.align, 0.5) };
                }); t; ) {
                  for (h = a3.length; h--; ) e = a3[h], d = (Math.min.apply(0, e.targets) + Math.max.apply(0, e.targets)) / 2, e.pos = f2(d - e.size * e.align, 0, z - e.size);
                  h = a3.length;
                  for (t = false; h--; ) 0 < h && a3[h - 1].pos + a3[h - 1].size > a3[h].pos && (a3[h - 1].size += a3[h].size, a3[h - 1].targets = a3[h - 1].targets.concat(a3[h].targets), a3[h - 1].align = 0.5, a3[h - 1].pos + a3[h - 1].size > z && (a3[h - 1].pos = z - a3[h - 1].size), a3.splice(h, 1), t = true);
                }
                m.push.apply(m, n);
                h = 0;
                a3.some(function(d2) {
                  var e2 = 0;
                  return (d2.targets || []).some(function() {
                    m[h].pos = d2.pos + e2;
                    if ("undefined" !== typeof p && Math.abs(m[h].pos - m[h].target) > p) return m.slice(0, h + 1).forEach(function(d3) {
                      return delete d3.pos;
                    }), m.reducedLen = (m.reducedLen || z) - 0.1 * z, m.reducedLen > 0.1 * z && F(m, z, p), true;
                    e2 += m[h].size;
                    h++;
                    return false;
                  });
                });
                G(m, l);
                return m;
              }
              a2.distribute = F;
            })(u || (u = {}));
            return u;
          }
        );
        M(f, "Core/Renderer/SVG/SVGElement.js", [f["Core/Animation/AnimationUtilities.js"], f["Core/Renderer/HTML/AST.js"], f["Core/Color/Color.js"], f["Core/Globals.js"], f["Core/Utilities.js"]], function(a, f2, C, G, u) {
          var F = a.animate, I = a.animObject, B = a.stop, z = G.deg2rad, p = G.doc, m = G.noop, e = G.svg, d = G.SVG_NS, l = G.win, h = u.addEvent, t = u.attr, n = u.createElement, v = u.css, w = u.defined, y = u.erase, A = u.extend, q = u.fireEvent, k = u.isArray, c = u.isFunction, g = u.isNumber, b = u.isString, r = u.merge, x = u.objectEach, D = u.pick, K = u.pInt, P = u.syncTimeout, Q = u.uniqueKey;
          a = function() {
            function a2() {
              this.element = void 0;
              this.onEvents = {};
              this.opacity = 1;
              this.renderer = void 0;
              this.SVG_NS = d;
              this.symbolCustomAttribs = "x y width height r start end innerR anchorX anchorY rounded".split(" ");
            }
            a2.prototype._defaultGetter = function(b2) {
              b2 = D(this[b2 + "Value"], this[b2], this.element ? this.element.getAttribute(b2) : null, 0);
              /^[\-0-9\.]+$/.test(b2) && (b2 = parseFloat(b2));
              return b2;
            };
            a2.prototype._defaultSetter = function(b2, c2, g2) {
              g2.setAttribute(c2, b2);
            };
            a2.prototype.add = function(b2) {
              var c2 = this.renderer, g2 = this.element;
              b2 && (this.parentGroup = b2);
              this.parentInverted = b2 && b2.inverted;
              "undefined" !== typeof this.textStr && "text" === this.element.nodeName && c2.buildText(this);
              this.added = true;
              if (!b2 || b2.handleZ || this.zIndex) var d2 = this.zIndexSetter();
              d2 || (b2 ? b2.element : c2.box).appendChild(g2);
              if (this.onAdd) this.onAdd();
              return this;
            };
            a2.prototype.addClass = function(b2, c2) {
              var g2 = c2 ? "" : this.attr("class") || "";
              b2 = (b2 || "").split(/ /g).reduce(function(b3, c3) {
                -1 === g2.indexOf(c3) && b3.push(c3);
                return b3;
              }, g2 ? [g2] : []).join(" ");
              b2 !== g2 && this.attr("class", b2);
              return this;
            };
            a2.prototype.afterSetters = function() {
              this.doTransform && (this.updateTransform(), this.doTransform = false);
            };
            a2.prototype.align = function(c2, g2, d2) {
              var L = {}, k2 = this.renderer, r2 = k2.alignedObjects, e2, q2, E;
              if (c2) {
                if (this.alignOptions = c2, this.alignByTranslate = g2, !d2 || b(d2)) this.alignTo = e2 = d2 || "renderer", y(r2, this), r2.push(this), d2 = void 0;
              } else c2 = this.alignOptions, g2 = this.alignByTranslate, e2 = this.alignTo;
              d2 = D(d2, k2[e2], "scrollablePlotBox" === e2 ? k2.plotBox : void 0, k2);
              e2 = c2.align;
              var a3 = c2.verticalAlign;
              k2 = (d2.x || 0) + (c2.x || 0);
              r2 = (d2.y || 0) + (c2.y || 0);
              "right" === e2 ? q2 = 1 : "center" === e2 && (q2 = 2);
              q2 && (k2 += (d2.width - (c2.width || 0)) / q2);
              L[g2 ? "translateX" : "x"] = Math.round(k2);
              "bottom" === a3 ? E = 1 : "middle" === a3 && (E = 2);
              E && (r2 += (d2.height - (c2.height || 0)) / E);
              L[g2 ? "translateY" : "y"] = Math.round(r2);
              this[this.placed ? "animate" : "attr"](L);
              this.placed = true;
              this.alignAttr = L;
              return this;
            };
            a2.prototype.alignSetter = function(b2) {
              var c2 = {
                left: "start",
                center: "middle",
                right: "end"
              };
              c2[b2] && (this.alignValue = b2, this.element.setAttribute("text-anchor", c2[b2]));
            };
            a2.prototype.animate = function(b2, c2, g2) {
              var d2 = this, L = I(D(c2, this.renderer.globalAnimation, true));
              c2 = L.defer;
              D(p.hidden, p.msHidden, p.webkitHidden, false) && (L.duration = 0);
              0 !== L.duration ? (g2 && (L.complete = g2), P(function() {
                d2.element && F(d2, b2, L);
              }, c2)) : (this.attr(b2, void 0, g2 || L.complete), x(b2, function(b3, c3) {
                L.step && L.step.call(this, b3, { prop: c3, pos: 1, elem: this });
              }, this));
              return this;
            };
            a2.prototype.applyTextOutline = function(b2) {
              var c2 = this.element;
              -1 !== b2.indexOf("contrast") && (b2 = b2.replace(/contrast/g, this.renderer.getContrast(c2.style.fill)));
              var g2 = b2.split(" ");
              b2 = g2[g2.length - 1];
              if ((g2 = g2[0]) && "none" !== g2 && G.svg) {
                this.fakeTS = true;
                this.ySetter = this.xSetter;
                g2 = g2.replace(/(^[\d\.]+)(.*?)$/g, function(b3, c3, g3) {
                  return 2 * Number(c3) + g3;
                });
                this.removeTextOutline();
                var k2 = p.createElementNS(d, "tspan");
                t(k2, { "class": "highcharts-text-outline", fill: b2, stroke: b2, "stroke-width": g2, "stroke-linejoin": "round" });
                [].forEach.call(c2.childNodes, function(b3) {
                  var c3 = b3.cloneNode(true);
                  c3.removeAttribute && ["fill", "stroke", "stroke-width", "stroke"].forEach(function(b4) {
                    return c3.removeAttribute(b4);
                  });
                  k2.appendChild(c3);
                });
                var r2 = p.createElementNS(d, "tspan");
                r2.textContent = "\u200B";
                ["x", "y"].forEach(function(b3) {
                  var g3 = c2.getAttribute(b3);
                  g3 && r2.setAttribute(b3, g3);
                });
                k2.appendChild(r2);
                c2.insertBefore(k2, c2.firstChild);
              }
            };
            a2.prototype.attr = function(b2, c2, g2, d2) {
              var L = this.element, k2 = this.symbolCustomAttribs, r2, J = this, E, e2;
              if ("string" === typeof b2 && "undefined" !== typeof c2) {
                var q2 = b2;
                b2 = {};
                b2[q2] = c2;
              }
              "string" === typeof b2 ? J = (this[b2 + "Getter"] || this._defaultGetter).call(this, b2, L) : (x(b2, function(c3, g3) {
                E = false;
                d2 || B(this, g3);
                this.symbolName && -1 !== k2.indexOf(g3) && (r2 || (this.symbolAttr(b2), r2 = true), E = true);
                !this.rotation || "x" !== g3 && "y" !== g3 || (this.doTransform = true);
                E || (e2 = this[g3 + "Setter"] || this._defaultSetter, e2.call(this, c3, g3, L), !this.styledMode && this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(g3) && this.updateShadows(g3, c3, e2));
              }, this), this.afterSetters());
              g2 && g2.call(this);
              return J;
            };
            a2.prototype.clip = function(b2) {
              return this.attr("clip-path", b2 ? "url(" + this.renderer.url + "#" + b2.id + ")" : "none");
            };
            a2.prototype.crisp = function(b2, c2) {
              c2 = c2 || b2.strokeWidth || 0;
              var g2 = Math.round(c2) % 2 / 2;
              b2.x = Math.floor(b2.x || this.x || 0) + g2;
              b2.y = Math.floor(b2.y || this.y || 0) + g2;
              b2.width = Math.floor((b2.width || this.width || 0) - 2 * g2);
              b2.height = Math.floor((b2.height || this.height || 0) - 2 * g2);
              w(b2.strokeWidth) && (b2.strokeWidth = c2);
              return b2;
            };
            a2.prototype.complexColor = function(b2, c2, g2) {
              var d2 = this.renderer, L, e2, a3, l2, E, n2, h2, D2, t2, m2, y2 = [], A2;
              q(this.renderer, "complexColor", { args: arguments }, function() {
                b2.radialGradient ? e2 = "radialGradient" : b2.linearGradient && (e2 = "linearGradient");
                if (e2) {
                  a3 = b2[e2];
                  E = d2.gradients;
                  n2 = b2.stops;
                  t2 = g2.radialReference;
                  k(a3) && (b2[e2] = a3 = { x1: a3[0], y1: a3[1], x2: a3[2], y2: a3[3], gradientUnits: "userSpaceOnUse" });
                  "radialGradient" === e2 && t2 && !w(a3.gradientUnits) && (l2 = a3, a3 = r(a3, d2.getRadialAttr(t2, l2), { gradientUnits: "userSpaceOnUse" }));
                  x(a3, function(b3, c3) {
                    "id" !== c3 && y2.push(c3, b3);
                  });
                  x(n2, function(b3) {
                    y2.push(b3);
                  });
                  y2 = y2.join(",");
                  if (E[y2]) m2 = E[y2].attr("id");
                  else {
                    a3.id = m2 = Q();
                    var J = E[y2] = d2.createElement(e2).attr(a3).add(d2.defs);
                    J.radAttr = l2;
                    J.stops = [];
                    n2.forEach(function(b3) {
                      0 === b3[1].indexOf("rgba") ? (L = C.parse(b3[1]), h2 = L.get("rgb"), D2 = L.get("a")) : (h2 = b3[1], D2 = 1);
                      b3 = d2.createElement("stop").attr({ offset: b3[0], "stop-color": h2, "stop-opacity": D2 }).add(J);
                      J.stops.push(b3);
                    });
                  }
                  A2 = "url(" + d2.url + "#" + m2 + ")";
                  g2.setAttribute(c2, A2);
                  g2.gradient = y2;
                  b2.toString = function() {
                    return A2;
                  };
                }
              });
            };
            a2.prototype.css = function(b2) {
              var c2 = this.styles, g2 = {}, d2 = this.element, k2 = !c2;
              b2.color && (b2.fill = b2.color);
              c2 && x(b2, function(b3, d3) {
                c2 && c2[d3] !== b3 && (g2[d3] = b3, k2 = true);
              });
              if (k2) {
                c2 && (b2 = A(c2, g2));
                if (null === b2.width || "auto" === b2.width) delete this.textWidth;
                else if ("text" === d2.nodeName.toLowerCase() && b2.width) var a3 = this.textWidth = K(b2.width);
                this.styles = b2;
                a3 && !e && this.renderer.forExport && delete b2.width;
                var q2 = r(b2);
                d2.namespaceURI === this.SVG_NS && ["textOutline", "textOverflow", "width"].forEach(function(b3) {
                  return q2 && delete q2[b3];
                });
                v(d2, q2);
                this.added && ("text" === this.element.nodeName && this.renderer.buildText(this), b2.textOutline && this.applyTextOutline(b2.textOutline));
              }
              return this;
            };
            a2.prototype.dashstyleSetter = function(b2) {
              var c2 = this["stroke-width"];
              "inherit" === c2 && (c2 = 1);
              if (b2 = b2 && b2.toLowerCase()) {
                var g2 = b2.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
                for (b2 = g2.length; b2--; ) g2[b2] = "" + K(g2[b2]) * D(c2, NaN);
                b2 = g2.join(",").replace(/NaN/g, "none");
                this.element.setAttribute("stroke-dasharray", b2);
              }
            };
            a2.prototype.destroy = function() {
              var b2 = this, c2 = b2.element || {}, g2 = b2.renderer, d2 = c2.ownerSVGElement, k2 = g2.isSVG && "SPAN" === c2.nodeName && b2.parentGroup || void 0;
              c2.onclick = c2.onmouseout = c2.onmouseover = c2.onmousemove = c2.point = null;
              B(b2);
              if (b2.clipPath && d2) {
                var r2 = b2.clipPath;
                [].forEach.call(d2.querySelectorAll("[clip-path],[CLIP-PATH]"), function(b3) {
                  -1 < b3.getAttribute("clip-path").indexOf(r2.element.id) && b3.removeAttribute("clip-path");
                });
                b2.clipPath = r2.destroy();
              }
              if (b2.stops) {
                for (d2 = 0; d2 < b2.stops.length; d2++) b2.stops[d2].destroy();
                b2.stops.length = 0;
                b2.stops = void 0;
              }
              b2.safeRemoveChild(c2);
              for (g2.styledMode || b2.destroyShadows(); k2 && k2.div && 0 === k2.div.childNodes.length; ) c2 = k2.parentGroup, b2.safeRemoveChild(k2.div), delete k2.div, k2 = c2;
              b2.alignTo && y(g2.alignedObjects, b2);
              x(b2, function(c3, g3) {
                b2[g3] && b2[g3].parentGroup === b2 && b2[g3].destroy && b2[g3].destroy();
                delete b2[g3];
              });
            };
            a2.prototype.destroyShadows = function() {
              (this.shadows || []).forEach(function(b2) {
                this.safeRemoveChild(b2);
              }, this);
              this.shadows = void 0;
            };
            a2.prototype.destroyTextPath = function(b2, c2) {
              var g2 = b2.getElementsByTagName("text")[0];
              if (g2) {
                if (g2.removeAttribute("dx"), g2.removeAttribute("dy"), c2.element.setAttribute("id", ""), this.textPathWrapper && g2.getElementsByTagName("textPath").length) {
                  for (b2 = this.textPathWrapper.element.childNodes; b2.length; ) g2.appendChild(b2[0]);
                  g2.removeChild(this.textPathWrapper.element);
                }
              } else if (b2.getAttribute("dx") || b2.getAttribute("dy")) b2.removeAttribute("dx"), b2.removeAttribute("dy");
              this.textPathWrapper && (this.textPathWrapper = this.textPathWrapper.destroy());
            };
            a2.prototype.dSetter = function(b2, c2, g2) {
              k(b2) && ("string" === typeof b2[0] && (b2 = this.renderer.pathToSegments(b2)), this.pathArray = b2, b2 = b2.reduce(function(b3, c3, g3) {
                return c3 && c3.join ? (g3 ? b3 + " " : "") + c3.join(" ") : (c3 || "").toString();
              }, ""));
              /(NaN| {2}|^$)/.test(b2) && (b2 = "M 0 0");
              this[c2] !== b2 && (g2.setAttribute(c2, b2), this[c2] = b2);
            };
            a2.prototype.fadeOut = function(b2) {
              var c2 = this;
              c2.animate({ opacity: 0 }, { duration: D(b2, 150), complete: function() {
                c2.attr({ y: -9999 }).hide();
              } });
            };
            a2.prototype.fillSetter = function(b2, c2, g2) {
              "string" === typeof b2 ? g2.setAttribute(c2, b2) : b2 && this.complexColor(b2, c2, g2);
            };
            a2.prototype.getBBox = function(b2, g2) {
              var d2 = this.renderer, k2 = this.element, r2 = this.styles, e2 = this.textStr, q2 = d2.cache, l2 = d2.cacheKeys, E = k2.namespaceURI === this.SVG_NS;
              g2 = D(g2, this.rotation, 0);
              var n2 = d2.styledMode ? k2 && a2.prototype.getStyle.call(k2, "font-size") : r2 && r2.fontSize, x2;
              if (w(e2)) {
                var h2 = e2.toString();
                -1 === h2.indexOf("<") && (h2 = h2.replace(/[0-9]/g, "0"));
                h2 += ["", g2, n2, this.textWidth, r2 && r2.textOverflow, r2 && r2.fontWeight].join();
              }
              h2 && !b2 && (x2 = q2[h2]);
              if (!x2) {
                if (E || d2.forExport) {
                  try {
                    var t2 = this.fakeTS && function(b3) {
                      var c2 = k2.querySelector(".highcharts-text-outline");
                      c2 && v(c2, { display: b3 });
                    };
                    c(t2) && t2("none");
                    x2 = k2.getBBox ? A({}, k2.getBBox()) : { width: k2.offsetWidth, height: k2.offsetHeight };
                    c(t2) && t2("");
                  } catch (X) {
                    "";
                  }
                  if (!x2 || 0 > x2.width) x2 = { width: 0, height: 0 };
                } else x2 = this.htmlGetBBox();
                d2.isSVG && (b2 = x2.width, d2 = x2.height, E && (x2.height = d2 = { "11px,17": 14, "13px,20": 16 }[(n2 || "") + "," + Math.round(d2)] || d2), g2 && (E = g2 * z, x2.width = Math.abs(d2 * Math.sin(E)) + Math.abs(b2 * Math.cos(E)), x2.height = Math.abs(d2 * Math.cos(E)) + Math.abs(b2 * Math.sin(E))));
                if (h2 && ("" === e2 || 0 < x2.height)) {
                  for (; 250 < l2.length; ) delete q2[l2.shift()];
                  q2[h2] || l2.push(h2);
                  q2[h2] = x2;
                }
              }
              return x2;
            };
            a2.prototype.getStyle = function(b2) {
              return l.getComputedStyle(this.element || this, "").getPropertyValue(b2);
            };
            a2.prototype.hasClass = function(b2) {
              return -1 !== ("" + this.attr("class")).split(" ").indexOf(b2);
            };
            a2.prototype.hide = function(b2) {
              b2 ? this.attr({ y: -9999 }) : this.attr({ visibility: "hidden" });
              return this;
            };
            a2.prototype.htmlGetBBox = function() {
              return { height: 0, width: 0, x: 0, y: 0 };
            };
            a2.prototype.init = function(b2, c2) {
              this.element = "span" === c2 ? n(c2) : p.createElementNS(this.SVG_NS, c2);
              this.renderer = b2;
              q(this, "afterInit");
            };
            a2.prototype.invert = function(b2) {
              this.inverted = b2;
              this.updateTransform();
              return this;
            };
            a2.prototype.on = function(b2, c2) {
              var g2 = this.onEvents;
              if (g2[b2]) g2[b2]();
              g2[b2] = h(this.element, b2, c2);
              return this;
            };
            a2.prototype.opacitySetter = function(b2, c2, g2) {
              this.opacity = b2 = Number(Number(b2).toFixed(3));
              g2.setAttribute(c2, b2);
            };
            a2.prototype.removeClass = function(c2) {
              return this.attr("class", ("" + this.attr("class")).replace(b(c2) ? new RegExp("(^| )" + c2 + "( |$)") : c2, " ").replace(/ +/g, " ").trim());
            };
            a2.prototype.removeTextOutline = function() {
              var b2 = this.element.querySelector("tspan.highcharts-text-outline");
              b2 && this.safeRemoveChild(b2);
            };
            a2.prototype.safeRemoveChild = function(b2) {
              var c2 = b2.parentNode;
              c2 && c2.removeChild(b2);
            };
            a2.prototype.setRadialReference = function(b2) {
              var c2 = this.element.gradient && this.renderer.gradients[this.element.gradient];
              this.element.radialReference = b2;
              c2 && c2.radAttr && c2.animate(this.renderer.getRadialAttr(b2, c2.radAttr));
              return this;
            };
            a2.prototype.setTextPath = function(b2, c2) {
              var d2 = this.element, k2 = this.text ? this.text.element : d2, e2 = { textAnchor: "text-anchor" }, q2 = false, a3 = this.textPathWrapper, n2 = !a3;
              c2 = r(true, { enabled: true, attributes: { dy: -5, startOffset: "50%", textAnchor: "middle" } }, c2);
              var E = f2.filterUserAttributes(c2.attributes);
              if (b2 && c2 && c2.enabled) {
                a3 && null === a3.element.parentNode ? (n2 = true, a3 = a3.destroy()) : a3 && this.removeTextOutline.call(a3.parentGroup);
                this.options && this.options.padding && (E.dx = -this.options.padding);
                a3 || (this.textPathWrapper = a3 = this.renderer.createElement("textPath"), q2 = true);
                var h2 = a3.element;
                (c2 = b2.element.getAttribute("id")) || b2.element.setAttribute("id", c2 = Q());
                if (n2) for (k2.setAttribute("y", 0), g(E.dx) && k2.setAttribute("x", -E.dx), b2 = [].slice.call(k2.childNodes), n2 = 0; n2 < b2.length; n2++) {
                  var D2 = b2[n2];
                  D2.nodeType !== l.Node.TEXT_NODE && "tspan" !== D2.nodeName || h2.appendChild(D2);
                }
                q2 && a3 && a3.add({ element: k2 });
                h2.setAttributeNS("http://www.w3.org/1999/xlink", "href", this.renderer.url + "#" + c2);
                w(E.dy) && (h2.parentNode.setAttribute("dy", E.dy), delete E.dy);
                w(E.dx) && (h2.parentNode.setAttribute("dx", E.dx), delete E.dx);
                x(E, function(b3, c3) {
                  h2.setAttribute(e2[c3] || c3, b3);
                });
                d2.removeAttribute("transform");
                this.removeTextOutline.call(a3);
                this.text && !this.renderer.styledMode && this.attr({ fill: "none", "stroke-width": 0 });
                this.applyTextOutline = this.updateTransform = m;
              } else a3 && (delete this.updateTransform, delete this.applyTextOutline, this.destroyTextPath(d2, b2), this.updateTransform(), this.options && this.options.rotation && this.applyTextOutline(this.options.style.textOutline));
              return this;
            };
            a2.prototype.shadow = function(b2, c2, g2) {
              var d2 = [], k2 = this.element, L = this.oldShadowOptions, r2 = { color: "#000000", offsetX: this.parentInverted ? -1 : 1, offsetY: this.parentInverted ? -1 : 1, opacity: 0.15, width: 3 }, e2 = false, E;
              true === b2 ? E = r2 : "object" === typeof b2 && (E = A(r2, b2));
              E && (E && L && x(E, function(b3, c3) {
                b3 !== L[c3] && (e2 = true);
              }), e2 && this.destroyShadows(), this.oldShadowOptions = E);
              if (!E) this.destroyShadows();
              else if (!this.shadows) {
                var a3 = E.opacity / E.width;
                var q2 = this.parentInverted ? "translate(" + E.offsetY + ", " + E.offsetX + ")" : "translate(" + E.offsetX + ", " + E.offsetY + ")";
                for (r2 = 1; r2 <= E.width; r2++) {
                  var l2 = k2.cloneNode(false);
                  var n2 = 2 * E.width + 1 - 2 * r2;
                  t(l2, { stroke: b2.color || "#000000", "stroke-opacity": a3 * r2, "stroke-width": n2, transform: q2, fill: "none" });
                  l2.setAttribute("class", (l2.getAttribute("class") || "") + " highcharts-shadow");
                  g2 && (t(l2, "height", Math.max(t(l2, "height") - n2, 0)), l2.cutHeight = n2);
                  c2 ? c2.element.appendChild(l2) : k2.parentNode && k2.parentNode.insertBefore(l2, k2);
                  d2.push(l2);
                }
                this.shadows = d2;
              }
              return this;
            };
            a2.prototype.show = function(b2) {
              return this.attr({ visibility: b2 ? "inherit" : "visible" });
            };
            a2.prototype.strokeSetter = function(b2, c2, g2) {
              this[c2] = b2;
              this.stroke && this["stroke-width"] ? (a2.prototype.fillSetter.call(this, this.stroke, "stroke", g2), g2.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = true) : "stroke-width" === c2 && 0 === b2 && this.hasStroke ? (g2.removeAttribute("stroke"), this.hasStroke = false) : this.renderer.styledMode && this["stroke-width"] && (g2.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = true);
            };
            a2.prototype.strokeWidth = function() {
              if (!this.renderer.styledMode) return this["stroke-width"] || 0;
              var b2 = this.getStyle("stroke-width"), c2 = 0;
              if (b2.indexOf("px") === b2.length - 2) c2 = K(b2);
              else if ("" !== b2) {
                var g2 = p.createElementNS(d, "rect");
                t(g2, { width: b2, "stroke-width": 0 });
                this.element.parentNode.appendChild(g2);
                c2 = g2.getBBox().width;
                g2.parentNode.removeChild(g2);
              }
              return c2;
            };
            a2.prototype.symbolAttr = function(b2) {
              var c2 = this;
              "x y r start end width height innerR anchorX anchorY clockwise".split(" ").forEach(function(g2) {
                c2[g2] = D(b2[g2], c2[g2]);
              });
              c2.attr({ d: c2.renderer.symbols[c2.symbolName](c2.x, c2.y, c2.width, c2.height, c2) });
            };
            a2.prototype.textSetter = function(b2) {
              b2 !== this.textStr && (delete this.textPxLength, this.textStr = b2, this.added && this.renderer.buildText(this));
            };
            a2.prototype.titleSetter = function(b2) {
              var c2 = this.element, g2 = c2.getElementsByTagName("title")[0] || p.createElementNS(this.SVG_NS, "title");
              c2.insertBefore ? c2.insertBefore(g2, c2.firstChild) : c2.appendChild(g2);
              g2.textContent = String(D(b2, "")).replace(/<[^>]*>/g, "").replace(/&lt;/g, "<").replace(
                /&gt;/g,
                ">"
              );
            };
            a2.prototype.toFront = function() {
              var b2 = this.element;
              b2.parentNode.appendChild(b2);
              return this;
            };
            a2.prototype.translate = function(b2, c2) {
              return this.attr({ translateX: b2, translateY: c2 });
            };
            a2.prototype.updateShadows = function(b2, c2, g2) {
              var d2 = this.shadows;
              if (d2) for (var k2 = d2.length; k2--; ) g2.call(d2[k2], "height" === b2 ? Math.max(c2 - (d2[k2].cutHeight || 0), 0) : "d" === b2 ? this.d : c2, b2, d2[k2]);
            };
            a2.prototype.updateTransform = function() {
              var b2 = this.scaleX, c2 = this.scaleY, g2 = this.inverted, d2 = this.rotation, k2 = this.matrix, r2 = this.element, e2 = this.translateX || 0, a3 = this.translateY || 0;
              g2 && (e2 += this.width, a3 += this.height);
              e2 = ["translate(" + e2 + "," + a3 + ")"];
              w(k2) && e2.push("matrix(" + k2.join(",") + ")");
              g2 ? e2.push("rotate(90) scale(-1,1)") : d2 && e2.push("rotate(" + d2 + " " + D(this.rotationOriginX, r2.getAttribute("x"), 0) + " " + D(this.rotationOriginY, r2.getAttribute("y") || 0) + ")");
              (w(b2) || w(c2)) && e2.push("scale(" + D(b2, 1) + " " + D(c2, 1) + ")");
              e2.length && r2.setAttribute("transform", e2.join(" "));
            };
            a2.prototype.visibilitySetter = function(b2, c2, g2) {
              "inherit" === b2 ? g2.removeAttribute(c2) : this[c2] !== b2 && g2.setAttribute(
                c2,
                b2
              );
              this[c2] = b2;
            };
            a2.prototype.xGetter = function(b2) {
              "circle" === this.element.nodeName && ("x" === b2 ? b2 = "cx" : "y" === b2 && (b2 = "cy"));
              return this._defaultGetter(b2);
            };
            a2.prototype.zIndexSetter = function(b2, c2) {
              var g2 = this.renderer, d2 = this.parentGroup, k2 = (d2 || g2).element || g2.box, r2 = this.element;
              g2 = k2 === g2.box;
              var e2 = false;
              var a3 = this.added;
              var E;
              w(b2) ? (r2.setAttribute("data-z-index", b2), b2 = +b2, this[c2] === b2 && (a3 = false)) : w(this[c2]) && r2.removeAttribute("data-z-index");
              this[c2] = b2;
              if (a3) {
                (b2 = this.zIndex) && d2 && (d2.handleZ = true);
                c2 = k2.childNodes;
                for (E = c2.length - 1; 0 <= E && !e2; E--) {
                  d2 = c2[E];
                  a3 = d2.getAttribute("data-z-index");
                  var q2 = !w(a3);
                  if (d2 !== r2) {
                    if (0 > b2 && q2 && !g2 && !E) k2.insertBefore(r2, c2[E]), e2 = true;
                    else if (K(a3) <= b2 || q2 && (!w(b2) || 0 <= b2)) k2.insertBefore(r2, c2[E + 1] || null), e2 = true;
                  }
                }
                e2 || (k2.insertBefore(r2, c2[g2 ? 3 : 0] || null), e2 = true);
              }
              return e2;
            };
            return a2;
          }();
          a.prototype["stroke-widthSetter"] = a.prototype.strokeSetter;
          a.prototype.yGetter = a.prototype.xGetter;
          a.prototype.matrixSetter = a.prototype.rotationOriginXSetter = a.prototype.rotationOriginYSetter = a.prototype.rotationSetter = a.prototype.scaleXSetter = a.prototype.scaleYSetter = a.prototype.translateXSetter = a.prototype.translateYSetter = a.prototype.verticalAlignSetter = function(b2, c2) {
            this[c2] = b2;
            this.doTransform = true;
          };
          "";
          return a;
        });
        M(f, "Core/Renderer/RendererRegistry.js", [f["Core/Globals.js"]], function(a) {
          var f2;
          (function(f3) {
            f3.rendererTypes = {};
            var F;
            f3.getRendererType = function(a2) {
              void 0 === a2 && (a2 = F);
              return f3.rendererTypes[a2] || f3.rendererTypes[F];
            };
            f3.registerRendererType = function(u, C, I) {
              f3.rendererTypes[u] = C;
              if (!F || I) F = u, a.Renderer = C;
            };
          })(f2 || (f2 = {}));
          return f2;
        });
        M(
          f,
          "Core/Renderer/SVG/SVGLabel.js",
          [f["Core/Renderer/SVG/SVGElement.js"], f["Core/Utilities.js"]],
          function(a, f2) {
            var F = this && this.__extends || /* @__PURE__ */ function() {
              var a2 = function(m, e) {
                a2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, e2) {
                  d.__proto__ = e2;
                } || function(d, e2) {
                  for (var a3 in e2) e2.hasOwnProperty(a3) && (d[a3] = e2[a3]);
                };
                return a2(m, e);
              };
              return function(m, e) {
                function d() {
                  this.constructor = m;
                }
                a2(m, e);
                m.prototype = null === e ? Object.create(e) : (d.prototype = e.prototype, new d());
              };
            }(), G = f2.defined, u = f2.extend, H = f2.isNumber, I = f2.merge, B = f2.pick, z = f2.removeEvent;
            return function(p) {
              function m(e, d, a2, h, t, n, v, w, y, A) {
                var q = p.call(this) || this;
                q.paddingLeftSetter = q.paddingSetter;
                q.paddingRightSetter = q.paddingSetter;
                q.init(e, "g");
                q.textStr = d;
                q.x = a2;
                q.y = h;
                q.anchorX = n;
                q.anchorY = v;
                q.baseline = y;
                q.className = A;
                q.addClass("button" === A ? "highcharts-no-tooltip" : "highcharts-label");
                A && q.addClass("highcharts-" + A);
                q.text = e.text(void 0, 0, 0, w).attr({ zIndex: 1 });
                var k;
                "string" === typeof t && ((k = /^url\((.*?)\)$/.test(t)) || q.renderer.symbols[t]) && (q.symbolKey = t);
                q.bBox = m.emptyBBox;
                q.padding = 3;
                q.baselineOffset = 0;
                q.needsBox = e.styledMode || k;
                q.deferredAttr = {};
                q.alignFactor = 0;
                return q;
              }
              F(m, p);
              m.prototype.alignSetter = function(e) {
                e = { left: 0, center: 0.5, right: 1 }[e];
                e !== this.alignFactor && (this.alignFactor = e, this.bBox && H(this.xSetting) && this.attr({ x: this.xSetting }));
              };
              m.prototype.anchorXSetter = function(e, d) {
                this.anchorX = e;
                this.boxAttr(d, Math.round(e) - this.getCrispAdjust() - this.xSetting);
              };
              m.prototype.anchorYSetter = function(e, d) {
                this.anchorY = e;
                this.boxAttr(d, e - this.ySetting);
              };
              m.prototype.boxAttr = function(e, d) {
                this.box ? this.box.attr(e, d) : this.deferredAttr[e] = d;
              };
              m.prototype.css = function(e) {
                if (e) {
                  var d = {};
                  e = I(e);
                  m.textProps.forEach(function(a2) {
                    "undefined" !== typeof e[a2] && (d[a2] = e[a2], delete e[a2]);
                  });
                  this.text.css(d);
                  var l = "width" in d;
                  "fontSize" in d || "fontWeight" in d ? this.updateTextPadding() : l && this.updateBoxSize();
                }
                return a.prototype.css.call(this, e);
              };
              m.prototype.destroy = function() {
                z(this.element, "mouseenter");
                z(this.element, "mouseleave");
                this.text && this.text.destroy();
                this.box && (this.box = this.box.destroy());
                a.prototype.destroy.call(this);
              };
              m.prototype.fillSetter = function(e, d) {
                e && (this.needsBox = true);
                this.fill = e;
                this.boxAttr(d, e);
              };
              m.prototype.getBBox = function() {
                this.textStr && 0 === this.bBox.width && 0 === this.bBox.height && this.updateBoxSize();
                var e = this.padding, d = B(this.paddingLeft, e);
                return { width: this.width, height: this.height, x: this.bBox.x - d, y: this.bBox.y - e };
              };
              m.prototype.getCrispAdjust = function() {
                return this.renderer.styledMode && this.box ? this.box.strokeWidth() % 2 / 2 : (this["stroke-width"] ? parseInt(
                  this["stroke-width"],
                  10
                ) : 0) % 2 / 2;
              };
              m.prototype.heightSetter = function(e) {
                this.heightSetting = e;
              };
              m.prototype.onAdd = function() {
                var e = this.textStr;
                this.text.add(this);
                this.attr({ text: G(e) ? e : "", x: this.x, y: this.y });
                this.box && G(this.anchorX) && this.attr({ anchorX: this.anchorX, anchorY: this.anchorY });
              };
              m.prototype.paddingSetter = function(e, d) {
                H(e) ? e !== this[d] && (this[d] = e, this.updateTextPadding()) : this[d] = void 0;
              };
              m.prototype.rSetter = function(e, d) {
                this.boxAttr(d, e);
              };
              m.prototype.shadow = function(e) {
                e && !this.renderer.styledMode && (this.updateBoxSize(), this.box && this.box.shadow(e));
                return this;
              };
              m.prototype.strokeSetter = function(e, d) {
                this.stroke = e;
                this.boxAttr(d, e);
              };
              m.prototype["stroke-widthSetter"] = function(e, d) {
                e && (this.needsBox = true);
                this["stroke-width"] = e;
                this.boxAttr(d, e);
              };
              m.prototype["text-alignSetter"] = function(e) {
                this.textAlign = e;
              };
              m.prototype.textSetter = function(e) {
                "undefined" !== typeof e && this.text.attr({ text: e });
                this.updateTextPadding();
              };
              m.prototype.updateBoxSize = function() {
                var e = this.text.element.style, d = {}, a2 = this.padding, h = this.bBox = H(this.widthSetting) && H(this.heightSetting) && !this.textAlign || !G(this.text.textStr) ? m.emptyBBox : this.text.getBBox();
                this.width = this.getPaddedWidth();
                this.height = (this.heightSetting || h.height || 0) + 2 * a2;
                e = this.renderer.fontMetrics(e && e.fontSize, this.text);
                this.baselineOffset = a2 + Math.min((this.text.firstLineMetrics || e).b, h.height || Infinity);
                this.heightSetting && (this.baselineOffset += (this.heightSetting - e.h) / 2);
                this.needsBox && (this.box || (a2 = this.box = this.symbolKey ? this.renderer.symbol(this.symbolKey) : this.renderer.rect(), a2.addClass(("button" === this.className ? "" : "highcharts-label-box") + (this.className ? " highcharts-" + this.className + "-box" : "")), a2.add(this)), a2 = this.getCrispAdjust(), d.x = a2, d.y = (this.baseline ? -this.baselineOffset : 0) + a2, d.width = Math.round(this.width), d.height = Math.round(this.height), this.box.attr(u(d, this.deferredAttr)), this.deferredAttr = {});
              };
              m.prototype.updateTextPadding = function() {
                var a2 = this.text;
                this.updateBoxSize();
                var d = this.baseline ? 0 : this.baselineOffset, l = B(this.paddingLeft, this.padding);
                G(this.widthSetting) && this.bBox && ("center" === this.textAlign || "right" === this.textAlign) && (l += { center: 0.5, right: 1 }[this.textAlign] * (this.widthSetting - this.bBox.width));
                if (l !== a2.x || d !== a2.y) a2.attr("x", l), a2.hasBoxWidthChanged && (this.bBox = a2.getBBox(true)), "undefined" !== typeof d && a2.attr("y", d);
                a2.x = l;
                a2.y = d;
              };
              m.prototype.widthSetter = function(a2) {
                this.widthSetting = H(a2) ? a2 : void 0;
              };
              m.prototype.getPaddedWidth = function() {
                var a2 = this.padding, d = B(this.paddingLeft, a2);
                a2 = B(this.paddingRight, a2);
                return (this.widthSetting || this.bBox.width || 0) + d + a2;
              };
              m.prototype.xSetter = function(a2) {
                this.x = a2;
                this.alignFactor && (a2 -= this.alignFactor * this.getPaddedWidth(), this["forceAnimate:x"] = true);
                this.xSetting = Math.round(a2);
                this.attr("translateX", this.xSetting);
              };
              m.prototype.ySetter = function(a2) {
                this.ySetting = this.y = Math.round(a2);
                this.attr("translateY", this.ySetting);
              };
              m.emptyBBox = { width: 0, height: 0, x: 0, y: 0 };
              m.textProps = "color direction fontFamily fontSize fontStyle fontWeight lineHeight textAlign textDecoration textOutline textOverflow width".split(" ");
              return m;
            }(a);
          }
        );
        M(
          f,
          "Core/Renderer/SVG/Symbols.js",
          [f["Core/Utilities.js"]],
          function(a) {
            function f2(a2, f3, p, m, e) {
              var d = [];
              if (e) {
                var l = e.start || 0, h = I(e.r, p);
                p = I(e.r, m || p);
                var t = (e.end || 0) - 1e-3;
                m = e.innerR;
                var n = I(e.open, 1e-3 > Math.abs((e.end || 0) - l - 2 * Math.PI)), v = Math.cos(l), w = Math.sin(l), y = Math.cos(t), A = Math.sin(t);
                l = I(e.longArc, 1e-3 > t - l - Math.PI ? 0 : 1);
                d.push(["M", a2 + h * v, f3 + p * w], ["A", h, p, 0, l, I(e.clockwise, 1), a2 + h * y, f3 + p * A]);
                u(m) && d.push(n ? ["M", a2 + m * y, f3 + m * A] : ["L", a2 + m * y, f3 + m * A], ["A", m, m, 0, l, u(e.clockwise) ? 1 - e.clockwise : 0, a2 + m * v, f3 + m * w]);
                n || d.push(["Z"]);
              }
              return d;
            }
            function C(a2, f3, p, m, e) {
              return e && e.r ? G(a2, f3, p, m, e) : [["M", a2, f3], ["L", a2 + p, f3], ["L", a2 + p, f3 + m], ["L", a2, f3 + m], ["Z"]];
            }
            function G(a2, f3, p, m, e) {
              e = e && e.r || 0;
              return [["M", a2 + e, f3], ["L", a2 + p - e, f3], ["C", a2 + p, f3, a2 + p, f3, a2 + p, f3 + e], ["L", a2 + p, f3 + m - e], ["C", a2 + p, f3 + m, a2 + p, f3 + m, a2 + p - e, f3 + m], ["L", a2 + e, f3 + m], ["C", a2, f3 + m, a2, f3 + m, a2, f3 + m - e], ["L", a2, f3 + e], ["C", a2, f3, a2, f3, a2 + e, f3]];
            }
            var u = a.defined, H = a.isNumber, I = a.pick;
            return { arc: f2, callout: function(a2, f3, p, m, e) {
              var d = Math.min(e && e.r || 0, p, m), l = d + 6, h = e && e.anchorX;
              e = e && e.anchorY || 0;
              var t = G(a2, f3, p, m, { r: d });
              if (!H(h)) return t;
              a2 + h >= p ? e > f3 + l && e < f3 + m - l ? t.splice(3, 1, ["L", a2 + p, e - 6], ["L", a2 + p + 6, e], ["L", a2 + p, e + 6], ["L", a2 + p, f3 + m - d]) : t.splice(3, 1, ["L", a2 + p, m / 2], ["L", h, e], ["L", a2 + p, m / 2], ["L", a2 + p, f3 + m - d]) : 0 >= a2 + h ? e > f3 + l && e < f3 + m - l ? t.splice(7, 1, ["L", a2, e + 6], ["L", a2 - 6, e], ["L", a2, e - 6], ["L", a2, f3 + d]) : t.splice(7, 1, ["L", a2, m / 2], ["L", h, e], ["L", a2, m / 2], ["L", a2, f3 + d]) : e && e > m && h > a2 + l && h < a2 + p - l ? t.splice(5, 1, ["L", h + 6, f3 + m], ["L", h, f3 + m + 6], ["L", h - 6, f3 + m], ["L", a2 + d, f3 + m]) : e && 0 > e && h > a2 + l && h < a2 + p - l && t.splice(1, 1, ["L", h - 6, f3], ["L", h, f3 - 6], ["L", h + 6, f3], ["L", p - d, f3]);
              return t;
            }, circle: function(a2, z, p, m) {
              return f2(a2 + p / 2, z + m / 2, p / 2, m / 2, { start: 0.5 * Math.PI, end: 2.5 * Math.PI, open: false });
            }, diamond: function(a2, f3, p, m) {
              return [["M", a2 + p / 2, f3], ["L", a2 + p, f3 + m / 2], ["L", a2 + p / 2, f3 + m], ["L", a2, f3 + m / 2], ["Z"]];
            }, rect: C, roundedRect: G, square: C, triangle: function(a2, f3, p, m) {
              return [["M", a2 + p / 2, f3], ["L", a2 + p, f3 + m], ["L", a2, f3 + m], ["Z"]];
            }, "triangle-down": function(a2, f3, p, m) {
              return [["M", a2, f3], ["L", a2 + p, f3], ["L", a2 + p / 2, f3 + m], ["Z"]];
            } };
          }
        );
        M(f, "Core/Renderer/SVG/TextBuilder.js", [f["Core/Renderer/HTML/AST.js"], f["Core/Globals.js"], f["Core/Utilities.js"]], function(a, f2, C) {
          var F = f2.doc, u = f2.SVG_NS, H = f2.win, I = C.attr, B = C.extend, z = C.isString, p = C.objectEach, m = C.pick;
          return function() {
            function e(d) {
              var a2 = d.styles;
              this.renderer = d.renderer;
              this.svgElement = d;
              this.width = d.textWidth;
              this.textLineHeight = a2 && a2.lineHeight;
              this.textOutline = a2 && a2.textOutline;
              this.ellipsis = !(!a2 || "ellipsis" !== a2.textOverflow);
              this.noWrap = !(!a2 || "nowrap" !== a2.whiteSpace);
              this.fontSize = a2 && a2.fontSize;
            }
            e.prototype.buildSVG = function() {
              var d = this.svgElement, e2 = d.element, h = d.renderer, t = m(d.textStr, "").toString(), n = -1 !== t.indexOf("<"), f3 = e2.childNodes;
              h = this.width && !d.added && h.box;
              var w = /<br.*?>/g, y = [t, this.ellipsis, this.noWrap, this.textLineHeight, this.textOutline, this.fontSize, this.width].join();
              if (y !== d.textCache) {
                d.textCache = y;
                delete d.actualWidth;
                for (y = f3.length; y--; ) e2.removeChild(f3[y]);
                n || this.ellipsis || this.width || -1 !== t.indexOf(" ") && (!this.noWrap || w.test(t)) ? "" !== t && (h && h.appendChild(e2), t = new a(t), this.modifyTree(t.nodes), t.addToDOM(d.element), this.modifyDOM(), this.ellipsis && -1 !== (e2.textContent || "").indexOf("\u2026") && d.attr("title", this.unescapeEntities(d.textStr || "", ["&lt;", "&gt;"])), h && h.removeChild(e2)) : e2.appendChild(F.createTextNode(this.unescapeEntities(t)));
                z(this.textOutline) && d.applyTextOutline && d.applyTextOutline(this.textOutline);
              }
            };
            e.prototype.modifyDOM = function() {
              var d = this, a2 = this.svgElement, e2 = I(a2.element, "x");
              a2.firstLineMetrics = void 0;
              for (var t; t = a2.element.firstChild; ) if (/^[\s\u200B]*$/.test(t.textContent || " ")) a2.element.removeChild(t);
              else break;
              [].forEach.call(
                a2.element.querySelectorAll("tspan.highcharts-br"),
                function(n2, h) {
                  n2.nextSibling && n2.previousSibling && (0 === h && 1 === n2.previousSibling.nodeType && (a2.firstLineMetrics = a2.renderer.fontMetrics(void 0, n2.previousSibling)), I(n2, { dy: d.getLineHeight(n2.nextSibling), x: e2 }));
                }
              );
              var n = this.width || 0;
              if (n) {
                var f3 = function(h, l) {
                  var q = h.textContent || "", k = q.replace(/([^\^])-/g, "$1- ").split(" "), c = !d.noWrap && (1 < k.length || 1 < a2.element.childNodes.length), g = d.getLineHeight(l), b = 0, r = a2.actualWidth;
                  if (d.ellipsis) q && d.truncate(h, q, void 0, 0, Math.max(0, n - parseInt(d.fontSize || 12, 10)), function(b2, c2) {
                    return b2.substring(0, c2) + "\u2026";
                  });
                  else if (c) {
                    q = [];
                    for (c = []; l.firstChild && l.firstChild !== h; ) c.push(l.firstChild), l.removeChild(l.firstChild);
                    for (; k.length; ) k.length && !d.noWrap && 0 < b && (q.push(h.textContent || ""), h.textContent = k.join(" ").replace(/- /g, "-")), d.truncate(h, void 0, k, 0 === b ? r || 0 : 0, n, function(b2, c2) {
                      return k.slice(0, c2).join(" ").replace(/- /g, "-");
                    }), r = a2.actualWidth, b++;
                    c.forEach(function(b2) {
                      l.insertBefore(b2, h);
                    });
                    q.forEach(function(b2) {
                      l.insertBefore(F.createTextNode(b2), h);
                      b2 = F.createElementNS(
                        u,
                        "tspan"
                      );
                      b2.textContent = "\u200B";
                      I(b2, { dy: g, x: e2 });
                      l.insertBefore(b2, h);
                    });
                  }
                }, m2 = function(d2) {
                  [].slice.call(d2.childNodes).forEach(function(e3) {
                    e3.nodeType === H.Node.TEXT_NODE ? f3(e3, d2) : (-1 !== e3.className.baseVal.indexOf("highcharts-br") && (a2.actualWidth = 0), m2(e3));
                  });
                };
                m2(a2.element);
              }
            };
            e.prototype.getLineHeight = function(d) {
              var a2;
              d = d.nodeType === H.Node.TEXT_NODE ? d.parentElement : d;
              this.renderer.styledMode || (a2 = d && /(px|em)$/.test(d.style.fontSize) ? d.style.fontSize : this.fontSize || this.renderer.style.fontSize || 12);
              return this.textLineHeight ? parseInt(this.textLineHeight.toString(), 10) : this.renderer.fontMetrics(a2, d || this.svgElement.element).h;
            };
            e.prototype.modifyTree = function(d) {
              var a2 = this, e2 = function(h, n) {
                var l = h.attributes;
                l = void 0 === l ? {} : l;
                var f3 = h.children, t = h.style;
                t = void 0 === t ? {} : t;
                var m2 = h.tagName, q = a2.renderer.styledMode;
                if ("b" === m2 || "strong" === m2) q ? l["class"] = "highcharts-strong" : t.fontWeight = "bold";
                else if ("i" === m2 || "em" === m2) q ? l["class"] = "highcharts-emphasized" : t.fontStyle = "italic";
                t && t.color && (t.fill = t.color);
                "br" === m2 ? (l["class"] = "highcharts-br", h.textContent = "\u200B", (n = d[n + 1]) && n.textContent && (n.textContent = n.textContent.replace(/^ +/gm, ""))) : "a" === m2 && f3 && f3.some(function(d2) {
                  return "#text" === d2.tagName;
                }) && (h.children = [{ children: f3, tagName: "tspan" }]);
                "#text" !== m2 && "a" !== m2 && (h.tagName = "tspan");
                B(h, { attributes: l, style: t });
                f3 && f3.filter(function(d2) {
                  return "#text" !== d2.tagName;
                }).forEach(e2);
              };
              d.forEach(e2);
            };
            e.prototype.truncate = function(d, a2, e2, t, n, f3) {
              var h = this.svgElement, l = h.renderer, m2 = h.rotation, q = [], k = e2 ? 1 : 0, c = (a2 || e2 || "").length, g = c, b, r = function(b2, c2) {
                c2 = c2 || b2;
                var g2 = d.parentNode;
                if (g2 && "undefined" === typeof q[c2]) if (g2.getSubStringLength) try {
                  q[c2] = t + g2.getSubStringLength(0, e2 ? c2 + 1 : c2);
                } catch (Q) {
                  "";
                }
                else l.getSpanWidth && (d.textContent = f3(a2 || e2, b2), q[c2] = t + l.getSpanWidth(h, d));
                return q[c2];
              };
              h.rotation = 0;
              var x = r(d.textContent.length);
              if (t + x > n) {
                for (; k <= c; ) g = Math.ceil((k + c) / 2), e2 && (b = f3(e2, g)), x = r(g, b && b.length - 1), k === c ? k = c + 1 : x > n ? c = g - 1 : k = g;
                0 === c ? d.textContent = "" : a2 && c === a2.length - 1 || (d.textContent = b || f3(a2 || e2, g));
              }
              e2 && e2.splice(0, g);
              h.actualWidth = x;
              h.rotation = m2;
            };
            e.prototype.unescapeEntities = function(d, a2) {
              p(this.renderer.escapes, function(e2, l) {
                a2 && -1 !== a2.indexOf(e2) || (d = d.toString().replace(new RegExp(e2, "g"), l));
              });
              return d;
            };
            return e;
          }();
        });
        M(f, "Core/Renderer/SVG/SVGRenderer.js", [f["Core/Renderer/HTML/AST.js"], f["Core/Color/Color.js"], f["Core/Globals.js"], f["Core/Renderer/RendererRegistry.js"], f["Core/Renderer/SVG/SVGElement.js"], f["Core/Renderer/SVG/SVGLabel.js"], f["Core/Renderer/SVG/Symbols.js"], f["Core/Renderer/SVG/TextBuilder.js"], f["Core/Utilities.js"]], function(a, f2, C, G, u, H, I, B, z) {
          var p = C.charts, m = C.deg2rad, e = C.doc, d = C.isFirefox, l = C.isMS, h = C.isWebKit, t = C.noop, n = C.SVG_NS, v = C.symbolSizes, w = C.win, y = z.addEvent, A = z.attr, q = z.createElement, k = z.css, c = z.defined, g = z.destroyObjectProperties, b = z.extend, r = z.isArray, x = z.isNumber, D = z.isObject, K = z.isString, P = z.merge, Q = z.pick, O = z.pInt, F = z.uniqueKey, Z;
          C = function() {
            function L(b2, c2, g2, d2, a2, k2, e2) {
              this.width = this.url = this.style = this.isSVG = this.imgCount = this.height = this.gradients = this.globalAnimation = this.defs = this.chartIndex = this.cacheKeys = this.cache = this.boxWrapper = this.box = this.alignedObjects = void 0;
              this.init(b2, c2, g2, d2, a2, k2, e2);
            }
            L.prototype.init = function(b2, c2, g2, a2, r2, E, L2) {
              var q2 = this.createElement("svg").attr({ version: "1.1", "class": "highcharts-root" }), J = q2.element;
              L2 || q2.css(this.getStyle(a2));
              b2.appendChild(J);
              A(b2, "dir", "ltr");
              -1 === b2.innerHTML.indexOf("xmlns") && A(J, "xmlns", this.SVG_NS);
              this.isSVG = true;
              this.box = J;
              this.boxWrapper = q2;
              this.alignedObjects = [];
              this.url = this.getReferenceURL();
              this.createElement("desc").add().element.appendChild(e.createTextNode("Created with Highcharts 10.0.0"));
              this.defs = this.createElement("defs").add();
              this.allowHTML = E;
              this.forExport = r2;
              this.styledMode = L2;
              this.gradients = {};
              this.cache = {};
              this.cacheKeys = [];
              this.imgCount = 0;
              this.setSize(c2, g2, false);
              var n2;
              d && b2.getBoundingClientRect && (c2 = function() {
                k(b2, { left: 0, top: 0 });
                n2 = b2.getBoundingClientRect();
                k(b2, { left: Math.ceil(n2.left) - n2.left + "px", top: Math.ceil(n2.top) - n2.top + "px" });
              }, c2(), this.unSubPixelFix = y(w, "resize", c2));
            };
            L.prototype.definition = function(b2) {
              return new a([b2]).addToDOM(this.defs.element);
            };
            L.prototype.getReferenceURL = function() {
              if ((d || h) && e.getElementsByTagName("base").length) {
                if (!c(Z)) {
                  var b2 = F();
                  b2 = new a([{ tagName: "svg", attributes: { width: 8, height: 8 }, children: [{ tagName: "defs", children: [{ tagName: "clipPath", attributes: { id: b2 }, children: [{ tagName: "rect", attributes: { width: 4, height: 4 } }] }] }, { tagName: "rect", attributes: { id: "hitme", width: 8, height: 8, "clip-path": "url(#" + b2 + ")", fill: "rgba(0,0,0,0.001)" } }] }]).addToDOM(e.body);
                  k(b2, { position: "fixed", top: 0, left: 0, zIndex: 9e5 });
                  var g2 = e.elementFromPoint(6, 6);
                  Z = "hitme" === (g2 && g2.id);
                  e.body.removeChild(b2);
                }
                if (Z) return w.location.href.split("#")[0].replace(/<[^>]*>/g, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20");
              }
              return "";
            };
            L.prototype.getStyle = function(c2) {
              return this.style = b({ fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif', fontSize: "12px" }, c2);
            };
            L.prototype.setStyle = function(b2) {
              this.boxWrapper.css(this.getStyle(b2));
            };
            L.prototype.isHidden = function() {
              return !this.boxWrapper.getBBox().width;
            };
            L.prototype.destroy = function() {
              var b2 = this.defs;
              this.box = null;
              this.boxWrapper = this.boxWrapper.destroy();
              g(this.gradients || {});
              this.gradients = null;
              b2 && (this.defs = b2.destroy());
              this.unSubPixelFix && this.unSubPixelFix();
              return this.alignedObjects = null;
            };
            L.prototype.createElement = function(b2) {
              var c2 = new this.Element();
              c2.init(this, b2);
              return c2;
            };
            L.prototype.getRadialAttr = function(b2, c2) {
              return { cx: b2[0] - b2[2] / 2 + (c2.cx || 0) * b2[2], cy: b2[1] - b2[2] / 2 + (c2.cy || 0) * b2[2], r: (c2.r || 0) * b2[2] };
            };
            L.prototype.buildText = function(b2) {
              new B(b2).buildSVG();
            };
            L.prototype.getContrast = function(b2) {
              b2 = f2.parse(b2).rgba;
              b2[0] *= 1;
              b2[1] *= 1.2;
              b2[2] *= 0.5;
              return 459 < b2[0] + b2[1] + b2[2] ? "#000000" : "#FFFFFF";
            };
            L.prototype.button = function(c2, g2, d2, k2, e2, r2, L2, q2, n2, h2) {
              var E = this.label(c2, g2, d2, n2, void 0, void 0, h2, void 0, "button"), x2 = this.styledMode, J = 0, f3 = e2 ? P(e2) : {}, t2 = P({ color: "#333333", cursor: "pointer", fontWeight: "normal" }, f3.style);
              delete f3.style;
              f3 = a.filterUserAttributes(f3);
              E.attr(P({ padding: 8, r: 2 }, f3));
              if (!x2) {
                f3 = P({ fill: "#f7f7f7", stroke: "#cccccc", "stroke-width": 1 }, f3);
                r2 = P(f3, { fill: "#e6e6e6" }, a.filterUserAttributes(r2 || {}));
                var N = r2.style;
                delete r2.style;
                L2 = P(f3, { fill: "#e6ebf5", style: { color: "#000000", fontWeight: "bold" } }, a.filterUserAttributes(L2 || {}));
                var m2 = L2.style;
                delete L2.style;
                q2 = P(f3, { style: { color: "#cccccc" } }, a.filterUserAttributes(q2 || {}));
                var w2 = q2.style;
                delete q2.style;
              }
              y(E.element, l ? "mouseover" : "mouseenter", function() {
                3 !== J && E.setState(1);
              });
              y(E.element, l ? "mouseout" : "mouseleave", function() {
                3 !== J && E.setState(J);
              });
              E.setState = function(b2) {
                1 !== b2 && (E.state = J = b2);
                E.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][b2 || 0]);
                x2 || (E.attr([f3, r2, L2, q2][b2 || 0]), b2 = [t2, N, m2, w2][b2 || 0], D(b2) && E.css(b2));
              };
              x2 || E.attr(f3).css(b({ cursor: "default" }, t2));
              return E.on("touchstart", function(b2) {
                return b2.stopPropagation();
              }).on("click", function(b2) {
                3 !== J && k2.call(E, b2);
              });
            };
            L.prototype.crispLine = function(b2, g2, d2) {
              void 0 === d2 && (d2 = "round");
              var a2 = b2[0], k2 = b2[1];
              c(a2[1]) && a2[1] === k2[1] && (a2[1] = k2[1] = Math[d2](a2[1]) - g2 % 2 / 2);
              c(a2[2]) && a2[2] === k2[2] && (a2[2] = k2[2] = Math[d2](a2[2]) + g2 % 2 / 2);
              return b2;
            };
            L.prototype.path = function(c2) {
              var g2 = this.styledMode ? {} : { fill: "none" };
              r(c2) ? g2.d = c2 : D(c2) && b(g2, c2);
              return this.createElement("path").attr(g2);
            };
            L.prototype.circle = function(b2, c2, g2) {
              b2 = D(b2) ? b2 : "undefined" === typeof b2 ? {} : { x: b2, y: c2, r: g2 };
              c2 = this.createElement("circle");
              c2.xSetter = c2.ySetter = function(b3, c3, g3) {
                g3.setAttribute("c" + c3, b3);
              };
              return c2.attr(b2);
            };
            L.prototype.arc = function(b2, c2, g2, d2, a2, k2) {
              D(b2) ? (d2 = b2, c2 = d2.y, g2 = d2.r, b2 = d2.x) : d2 = { innerR: d2, start: a2, end: k2 };
              b2 = this.symbol("arc", b2, c2, g2, g2, d2);
              b2.r = g2;
              return b2;
            };
            L.prototype.rect = function(b2, c2, g2, d2, a2, k2) {
              a2 = D(b2) ? b2.r : a2;
              var e2 = this.createElement("rect");
              b2 = D(b2) ? b2 : "undefined" === typeof b2 ? {} : { x: b2, y: c2, width: Math.max(g2, 0), height: Math.max(d2, 0) };
              this.styledMode || ("undefined" !== typeof k2 && (b2["stroke-width"] = k2, b2 = e2.crisp(b2)), b2.fill = "none");
              a2 && (b2.r = a2);
              e2.rSetter = function(b3, c3, g3) {
                e2.r = b3;
                A(g3, { rx: b3, ry: b3 });
              };
              e2.rGetter = function() {
                return e2.r || 0;
              };
              return e2.attr(b2);
            };
            L.prototype.setSize = function(b2, c2, g2) {
              this.width = b2;
              this.height = c2;
              this.boxWrapper.animate({ width: b2, height: c2 }, { step: function() {
                this.attr({ viewBox: "0 0 " + this.attr("width") + " " + this.attr("height") });
              }, duration: Q(
                g2,
                true
              ) ? void 0 : 0 });
              this.alignElements();
            };
            L.prototype.g = function(b2) {
              var c2 = this.createElement("g");
              return b2 ? c2.attr({ "class": "highcharts-" + b2 }) : c2;
            };
            L.prototype.image = function(b2, c2, g2, d2, a2, k2) {
              var e2 = { preserveAspectRatio: "none" }, r2 = function(b3, c3) {
                b3.setAttributeNS ? b3.setAttributeNS("http://www.w3.org/1999/xlink", "href", c3) : b3.setAttribute("hc-svg-href", c3);
              };
              x(c2) && (e2.x = c2);
              x(g2) && (e2.y = g2);
              x(d2) && (e2.width = d2);
              x(a2) && (e2.height = a2);
              var E = this.createElement("image").attr(e2);
              c2 = function(c3) {
                r2(E.element, b2);
                k2.call(E, c3);
              };
              k2 ? (r2(
                E.element,
                "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
              ), g2 = new w.Image(), y(g2, "load", c2), g2.src = b2, g2.complete && c2({})) : r2(E.element, b2);
              return E;
            };
            L.prototype.symbol = function(g2, d2, a2, r2, L2, E) {
              var n2 = this, h2 = /^url\((.*?)\)$/, x2 = h2.test(g2), l2 = !x2 && (this.symbols[g2] ? g2 : "circle"), D2 = l2 && this.symbols[l2], f3;
              if (D2) {
                "number" === typeof d2 && (f3 = D2.call(this.symbols, Math.round(d2 || 0), Math.round(a2 || 0), r2 || 0, L2 || 0, E));
                var t2 = this.path(f3);
                n2.styledMode || t2.attr("fill", "none");
                b(t2, { symbolName: l2 || void 0, x: d2, y: a2, width: r2, height: L2 });
                E && b(t2, E);
              } else if (x2) {
                var m2 = g2.match(h2)[1];
                var J = t2 = this.image(m2);
                J.imgwidth = Q(v[m2] && v[m2].width, E && E.width);
                J.imgheight = Q(v[m2] && v[m2].height, E && E.height);
                var y2 = function(b2) {
                  return b2.attr({ width: b2.width, height: b2.height });
                };
                ["width", "height"].forEach(function(b2) {
                  J[b2 + "Setter"] = function(b3, g3) {
                    var d3 = this["img" + g3];
                    this[g3] = b3;
                    c(d3) && (E && "within" === E.backgroundSize && this.width && this.height && (d3 = Math.round(d3 * Math.min(this.width / this.imgwidth, this.height / this.imgheight))), this.element && this.element.setAttribute(g3, d3), this.alignByTranslate || (b3 = ((this[g3] || 0) - d3) / 2, this.attr("width" === g3 ? { translateX: b3 } : { translateY: b3 })));
                  };
                });
                c(d2) && J.attr({ x: d2, y: a2 });
                J.isImg = true;
                c(J.imgwidth) && c(J.imgheight) ? y2(J) : (J.attr({ width: 0, height: 0 }), q("img", { onload: function() {
                  var b2 = p[n2.chartIndex];
                  0 === this.width && (k(this, { position: "absolute", top: "-999em" }), e.body.appendChild(this));
                  v[m2] = { width: this.width, height: this.height };
                  J.imgwidth = this.width;
                  J.imgheight = this.height;
                  J.element && y2(J);
                  this.parentNode && this.parentNode.removeChild(this);
                  n2.imgCount--;
                  if (!n2.imgCount && b2 && !b2.hasLoaded) b2.onload();
                }, src: m2 }), this.imgCount++);
              }
              return t2;
            };
            L.prototype.clipRect = function(b2, c2, g2, d2) {
              var a2 = F() + "-", k2 = this.createElement("clipPath").attr({ id: a2 }).add(this.defs);
              b2 = this.rect(b2, c2, g2, d2, 0).add(k2);
              b2.id = a2;
              b2.clipPath = k2;
              b2.count = 0;
              return b2;
            };
            L.prototype.text = function(b2, g2, d2, a2) {
              var k2 = {};
              if (a2 && (this.allowHTML || !this.forExport)) return this.html(b2, g2, d2);
              k2.x = Math.round(g2 || 0);
              d2 && (k2.y = Math.round(d2));
              c(b2) && (k2.text = b2);
              b2 = this.createElement("text").attr(k2);
              if (!a2 || this.forExport && !this.allowHTML) b2.xSetter = function(b3, c2, g3) {
                for (var d3 = g3.getElementsByTagName("tspan"), a3 = g3.getAttribute(c2), k3 = 0, e2; k3 < d3.length; k3++) e2 = d3[k3], e2.getAttribute(c2) === a3 && e2.setAttribute(c2, b3);
                g3.setAttribute(c2, b3);
              };
              return b2;
            };
            L.prototype.fontMetrics = function(b2, c2) {
              b2 = !this.styledMode && /px/.test(b2) || !w.getComputedStyle ? b2 || c2 && c2.style && c2.style.fontSize || this.style && this.style.fontSize : c2 && u.prototype.getStyle.call(c2, "font-size");
              b2 = /px/.test(b2) ? O(b2) : 12;
              c2 = 24 > b2 ? b2 + 3 : Math.round(1.2 * b2);
              return { h: c2, b: Math.round(0.8 * c2), f: b2 };
            };
            L.prototype.rotCorr = function(b2, c2, g2) {
              var d2 = b2;
              c2 && g2 && (d2 = Math.max(d2 * Math.cos(c2 * m), 4));
              return { x: -b2 / 3 * Math.sin(c2 * m), y: d2 };
            };
            L.prototype.pathToSegments = function(b2) {
              for (var c2 = [], g2 = [], d2 = { A: 8, C: 7, H: 2, L: 3, M: 3, Q: 5, S: 5, T: 3, V: 2 }, a2 = 0; a2 < b2.length; a2++) K(g2[0]) && x(b2[a2]) && g2.length === d2[g2[0].toUpperCase()] && b2.splice(a2, 0, g2[0].replace("M", "L").replace("m", "l")), "string" === typeof b2[a2] && (g2.length && c2.push(g2.slice(0)), g2.length = 0), g2.push(b2[a2]);
              c2.push(g2.slice(0));
              return c2;
            };
            L.prototype.label = function(b2, c2, g2, d2, a2, k2, e2, r2, L2) {
              return new H(this, b2, c2, g2, d2, a2, k2, e2, r2, L2);
            };
            L.prototype.alignElements = function() {
              this.alignedObjects.forEach(function(b2) {
                return b2.align();
              });
            };
            return L;
          }();
          b(C.prototype, { Element: u, SVG_NS: n, escapes: { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }, symbols: I, draw: t });
          G.registerRendererType("svg", C, true);
          "";
          return C;
        });
        M(f, "Core/Renderer/HTML/HTMLElement.js", [f["Core/Globals.js"], f["Core/Renderer/SVG/SVGElement.js"], f["Core/Utilities.js"]], function(a, f2, C) {
          var F = this && this.__extends || /* @__PURE__ */ function() {
            var d2 = function(a2, e2) {
              d2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, a3) {
                d3.__proto__ = a3;
              } || function(d3, a3) {
                for (var e3 in a3) a3.hasOwnProperty(e3) && (d3[e3] = a3[e3]);
              };
              return d2(a2, e2);
            };
            return function(a2, e2) {
              function n() {
                this.constructor = a2;
              }
              d2(a2, e2);
              a2.prototype = null === e2 ? Object.create(e2) : (n.prototype = e2.prototype, new n());
            };
          }(), u = a.isFirefox, H = a.isMS, I = a.isWebKit, B = a.win, z = C.css, p = C.defined, m = C.extend, e = C.pick, d = C.pInt;
          return function(a2) {
            function h() {
              return null !== a2 && a2.apply(this, arguments) || this;
            }
            F(h, a2);
            h.compose = function(d2) {
              if (-1 === h.composedClasses.indexOf(d2)) {
                h.composedClasses.push(d2);
                var a3 = h.prototype, e2 = d2.prototype;
                e2.getSpanCorrection = a3.getSpanCorrection;
                e2.htmlCss = a3.htmlCss;
                e2.htmlGetBBox = a3.htmlGetBBox;
                e2.htmlUpdateTransform = a3.htmlUpdateTransform;
                e2.setSpanRotation = a3.setSpanRotation;
              }
              return d2;
            };
            h.prototype.getSpanCorrection = function(d2, a3, e2) {
              this.xCorr = -d2 * e2;
              this.yCorr = -a3;
            };
            h.prototype.htmlCss = function(d2) {
              var a3 = "SPAN" === this.element.tagName && d2 && "width" in d2, h2 = e(a3 && d2.width, void 0);
              if (a3) {
                delete d2.width;
                this.textWidth = h2;
                var l = true;
              }
              d2 && "ellipsis" === d2.textOverflow && (d2.whiteSpace = "nowrap", d2.overflow = "hidden");
              this.styles = m(this.styles, d2);
              z(this.element, d2);
              l && this.htmlUpdateTransform();
              return this;
            };
            h.prototype.htmlGetBBox = function() {
              var d2 = this.element;
              return { x: d2.offsetLeft, y: d2.offsetTop, width: d2.offsetWidth, height: d2.offsetHeight };
            };
            h.prototype.htmlUpdateTransform = function() {
              if (this.added) {
                var a3 = this.renderer, e2 = this.element, h2 = this.translateX || 0, l = this.translateY || 0, f3 = this.x || 0, m2 = this.y || 0, q = this.textAlign || "left", k = { left: 0, center: 0.5, right: 1 }[q], c = this.styles;
                c = c && c.whiteSpace;
                z(e2, { marginLeft: h2, marginTop: l });
                !a3.styledMode && this.shadows && this.shadows.forEach(function(b2) {
                  z(b2, { marginLeft: h2 + 1, marginTop: l + 1 });
                });
                this.inverted && [].forEach.call(e2.childNodes, function(b2) {
                  a3.invertChild(b2, e2);
                });
                if ("SPAN" === e2.tagName) {
                  var g = this.rotation, b = this.textWidth && d(this.textWidth), r = [g, q, e2.innerHTML, this.textWidth, this.textAlign].join(), x = void 0;
                  x = false;
                  if (b !== this.oldTextWidth) {
                    if (this.textPxLength) var D = this.textPxLength;
                    else z(e2, { width: "", whiteSpace: c || "nowrap" }), D = e2.offsetWidth;
                    (b > this.oldTextWidth || D > b) && (/[ \-]/.test(e2.textContent || e2.innerText) || "ellipsis" === e2.style.textOverflow) && (z(e2, { width: D > b || g ? b + "px" : "auto", display: "block", whiteSpace: c || "normal" }), this.oldTextWidth = b, x = true);
                  }
                  this.hasBoxWidthChanged = x;
                  r !== this.cTT && (x = a3.fontMetrics(e2.style.fontSize, e2).b, !p(g) || g === (this.oldRotation || 0) && q === this.oldAlign || this.setSpanRotation(g, k, x), this.getSpanCorrection(!p(g) && this.textPxLength || e2.offsetWidth, x, k, g, q));
                  z(e2, { left: f3 + (this.xCorr || 0) + "px", top: m2 + (this.yCorr || 0) + "px" });
                  this.cTT = r;
                  this.oldRotation = g;
                  this.oldAlign = q;
                }
              } else this.alignOnAdd = true;
            };
            h.prototype.setSpanRotation = function(d2, a3, e2) {
              var h2 = {}, n = H && !/Edge/.test(B.navigator.userAgent) ? "-ms-transform" : I ? "-webkit-transform" : u ? "MozTransform" : B.opera ? "-o-transform" : void 0;
              n && (h2[n] = h2.transform = "rotate(" + d2 + "deg)", h2[n + (u ? "Origin" : "-origin")] = h2.transformOrigin = 100 * a3 + "% " + e2 + "px", z(this.element, h2));
            };
            h.composedClasses = [];
            return h;
          }(f2);
        });
        M(
          f,
          "Core/Renderer/HTML/HTMLRenderer.js",
          [f["Core/Renderer/HTML/AST.js"], f["Core/Renderer/SVG/SVGElement.js"], f["Core/Renderer/SVG/SVGRenderer.js"], f["Core/Utilities.js"]],
          function(a, f2, C, G) {
            var F = this && this.__extends || /* @__PURE__ */ function() {
              var a2 = function(f3, e) {
                a2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, a3) {
                  d.__proto__ = a3;
                } || function(d, a3) {
                  for (var e2 in a3) a3.hasOwnProperty(e2) && (d[e2] = a3[e2]);
                };
                return a2(f3, e);
              };
              return function(f3, e) {
                function d() {
                  this.constructor = f3;
                }
                a2(f3, e);
                f3.prototype = null === e ? Object.create(e) : (d.prototype = e.prototype, new d());
              };
            }(), H = G.attr, I = G.createElement, B = G.extend, z = G.pick;
            return function(p) {
              function m() {
                return null !== p && p.apply(this, arguments) || this;
              }
              F(m, p);
              m.compose = function(a2) {
                -1 === m.composedClasses.indexOf(a2) && (m.composedClasses.push(a2), a2.prototype.html = m.prototype.html);
                return a2;
              };
              m.prototype.html = function(e, d, l) {
                var h = this.createElement("span"), m2 = h.element, n = h.renderer, p2 = n.isSVG, w = function(d2, a2) {
                  ["opacity", "visibility"].forEach(function(e2) {
                    d2[e2 + "Setter"] = function(k, c, g) {
                      var b = d2.div ? d2.div.style : a2;
                      f2.prototype[e2 + "Setter"].call(this, k, c, g);
                      b && (b[c] = k);
                    };
                  });
                  d2.addedSetters = true;
                };
                h.textSetter = function(d2) {
                  d2 !== this.textStr && (delete this.bBox, delete this.oldTextWidth, a.setElementHTML(this.element, z(d2, "")), this.textStr = d2, h.doTransform = true);
                };
                p2 && w(h, h.element.style);
                h.xSetter = h.ySetter = h.alignSetter = h.rotationSetter = function(d2, a2) {
                  "align" === a2 ? h.alignValue = h.textAlign = d2 : h[a2] = d2;
                  h.doTransform = true;
                };
                h.afterSetters = function() {
                  this.doTransform && (this.htmlUpdateTransform(), this.doTransform = false);
                };
                h.attr({ text: e, x: Math.round(d), y: Math.round(l) }).css({ position: "absolute" });
                n.styledMode || h.css({ fontFamily: this.style.fontFamily, fontSize: this.style.fontSize });
                m2.style.whiteSpace = "nowrap";
                h.css = h.htmlCss;
                p2 && (h.add = function(d2) {
                  var a2 = n.box.parentNode, e2 = [];
                  if (this.parentGroup = d2) {
                    var k = d2.div;
                    if (!k) {
                      for (; d2; ) e2.push(d2), d2 = d2.parentGroup;
                      e2.reverse().forEach(function(c) {
                        function g(b2, g2) {
                          c[g2] = b2;
                          "translateX" === g2 ? q.left = b2 + "px" : q.top = b2 + "px";
                          c.doTransform = true;
                        }
                        var b = H(c.element, "class"), d3 = c.styles || {};
                        k = c.div = c.div || I("div", b ? { className: b } : void 0, {
                          position: "absolute",
                          left: (c.translateX || 0) + "px",
                          top: (c.translateY || 0) + "px",
                          display: c.display,
                          opacity: c.opacity,
                          cursor: d3.cursor,
                          pointerEvents: d3.pointerEvents,
                          visibility: c.visibility
                        }, k || a2);
                        var q = k.style;
                        B(c, { classSetter: /* @__PURE__ */ function(b2) {
                          return function(c2) {
                            this.element.setAttribute("class", c2);
                            b2.className = c2;
                          };
                        }(k), on: function() {
                          e2[0].div && h.on.apply({ element: e2[0].div, onEvents: c.onEvents }, arguments);
                          return c;
                        }, translateXSetter: g, translateYSetter: g });
                        c.addedSetters || w(c);
                      });
                    }
                  } else k = a2;
                  k.appendChild(m2);
                  h.added = true;
                  h.alignOnAdd && h.htmlUpdateTransform();
                  return h;
                });
                return h;
              };
              m.composedClasses = [];
              return m;
            }(C);
          }
        );
        M(f, "Core/Axis/AxisDefaults.js", [], function() {
          var a;
          (function(a2) {
            a2.defaultXAxisOptions = { alignTicks: true, allowDecimals: void 0, panningEnabled: true, zIndex: 2, zoomEnabled: true, dateTimeLabelFormats: { millisecond: { main: "%H:%M:%S.%L", range: false }, second: { main: "%H:%M:%S", range: false }, minute: { main: "%H:%M", range: false }, hour: { main: "%H:%M", range: false }, day: { main: "%e. %b" }, week: { main: "%e. %b" }, month: { main: "%b '%y" }, year: { main: "%Y" } }, endOnTick: false, gridLineDashStyle: "Solid", gridZIndex: 1, labels: {
              autoRotation: void 0,
              autoRotationLimit: 80,
              distance: void 0,
              enabled: true,
              indentation: 10,
              overflow: "justify",
              padding: 5,
              reserveSpace: void 0,
              rotation: void 0,
              staggerLines: 0,
              step: 0,
              useHTML: false,
              x: 0,
              zIndex: 7,
              style: { color: "#666666", cursor: "default", fontSize: "11px" }
            }, maxPadding: 0.01, minorGridLineDashStyle: "Solid", minorTickLength: 2, minorTickPosition: "outside", minPadding: 0.01, offset: void 0, opposite: false, reversed: void 0, reversedStacks: false, showEmpty: true, showFirstLabel: true, showLastLabel: true, startOfWeek: 1, startOnTick: false, tickLength: 10, tickPixelInterval: 100, tickmarkPlacement: "between", tickPosition: "outside", title: {
              align: "middle",
              rotation: 0,
              useHTML: false,
              x: 0,
              y: 0,
              style: { color: "#666666" }
            }, type: "linear", uniqueNames: true, visible: true, minorGridLineColor: "#f2f2f2", minorGridLineWidth: 1, minorTickColor: "#999999", lineColor: "#ccd6eb", lineWidth: 1, gridLineColor: "#e6e6e6", gridLineWidth: void 0, tickColor: "#ccd6eb" };
            a2.defaultYAxisOptions = { reversedStacks: true, endOnTick: true, maxPadding: 0.05, minPadding: 0.05, tickPixelInterval: 72, showLastLabel: true, labels: { x: -8 }, startOnTick: true, title: { rotation: 270, text: "Values" }, stackLabels: {
              animation: {},
              allowOverlap: false,
              enabled: false,
              crop: true,
              overflow: "justify",
              formatter: function() {
                var a3 = this.axis.chart.numberFormatter;
                return a3(this.total, -1);
              },
              style: { color: "#000000", fontSize: "11px", fontWeight: "bold", textOutline: "1px contrast" }
            }, gridLineWidth: 1, lineWidth: 0 };
            a2.defaultLeftAxisOptions = { labels: { x: -15 }, title: { rotation: 270 } };
            a2.defaultRightAxisOptions = { labels: { x: 15 }, title: { rotation: 90 } };
            a2.defaultBottomAxisOptions = { labels: { autoRotation: [-45], x: 0 }, margin: 15, title: { rotation: 0 } };
            a2.defaultTopAxisOptions = { labels: { autoRotation: [-45], x: 0 }, margin: 15, title: { rotation: 0 } };
          })(a || (a = {}));
          return a;
        });
        M(f, "Core/Foundation.js", [f["Core/Utilities.js"]], function(a) {
          var f2 = a.addEvent, C = a.isFunction, G = a.objectEach, u = a.removeEvent, H;
          (function(a2) {
            a2.registerEventOptions = function(a3, z) {
              a3.eventOptions = a3.eventOptions || {};
              G(z.events, function(p, m) {
                a3.eventOptions[m] !== p && (a3.eventOptions[m] && (u(a3, m, a3.eventOptions[m]), delete a3.eventOptions[m]), C(p) && (a3.eventOptions[m] = p, f2(a3, m, p)));
              });
            };
          })(H || (H = {}));
          return H;
        });
        M(
          f,
          "Core/Axis/Tick.js",
          [f["Core/FormatUtilities.js"], f["Core/Globals.js"], f["Core/Utilities.js"]],
          function(a, f2, C) {
            var F = f2.deg2rad, u = C.clamp, H = C.correctFloat, I = C.defined, B = C.destroyObjectProperties, z = C.extend, p = C.fireEvent, m = C.isNumber, e = C.merge, d = C.objectEach, l = C.pick;
            f2 = function() {
              function h(d2, a2, e2, h2, f3) {
                this.isNewLabel = this.isNew = true;
                this.axis = d2;
                this.pos = a2;
                this.type = e2 || "";
                this.parameters = f3 || {};
                this.tickmarkOffset = this.parameters.tickmarkOffset;
                this.options = this.parameters.options;
                p(this, "init");
                e2 || h2 || this.addLabel();
              }
              h.prototype.addLabel = function() {
                var d2 = this, e2 = d2.axis, h2 = e2.options, f3 = e2.chart, y = e2.categories, A = e2.logarithmic, q = e2.names, k = d2.pos, c = l(d2.options && d2.options.labels, h2.labels), g = e2.tickPositions, b = k === g[0], r = k === g[g.length - 1], x = (!c.step || 1 === c.step) && 1 === e2.tickInterval;
                g = g.info;
                var D = d2.label, K;
                y = this.parameters.category || (y ? l(y[k], q[k], k) : k);
                A && m(y) && (y = H(A.lin2log(y)));
                if (e2.dateTime) if (g) {
                  var P = f3.time.resolveDTLFormat(h2.dateTimeLabelFormats[!h2.grid && g.higherRanks[k] || g.unitName]);
                  var Q = P.main;
                } else m(y) && (Q = e2.dateTime.getXDateFormat(y, h2.dateTimeLabelFormats || {}));
                d2.isFirst = b;
                d2.isLast = r;
                var O = {
                  axis: e2,
                  chart: f3,
                  dateTimeLabelFormat: Q,
                  isFirst: b,
                  isLast: r,
                  pos: k,
                  tick: d2,
                  tickPositionInfo: g,
                  value: y
                };
                p(this, "labelFormat", O);
                var B2 = function(b2) {
                  return c.formatter ? c.formatter.call(b2, b2) : c.format ? (b2.text = e2.defaultLabelFormatter.call(b2), a.format(c.format, b2, f3)) : e2.defaultLabelFormatter.call(b2, b2);
                };
                h2 = B2.call(O, O);
                var F2 = P && P.list;
                d2.shortenLabel = F2 ? function() {
                  for (K = 0; K < F2.length; K++) if (z(O, { dateTimeLabelFormat: F2[K] }), D.attr({ text: B2.call(O, O) }), D.getBBox().width < e2.getSlotWidth(d2) - 2 * c.padding) return;
                  D.attr({ text: "" });
                } : void 0;
                x && e2._addedPlotLB && d2.moveLabel(h2, c);
                I(D) || d2.movedLabel ? D && D.textStr !== h2 && !x && (!D.textWidth || c.style.width || D.styles.width || D.css({ width: null }), D.attr({ text: h2 }), D.textPxLength = D.getBBox().width) : (d2.label = D = d2.createLabel({ x: 0, y: 0 }, h2, c), d2.rotation = 0);
              };
              h.prototype.createLabel = function(d2, a2, h2) {
                var f3 = this.axis, n = f3.chart;
                if (d2 = I(a2) && h2.enabled ? n.renderer.text(a2, d2.x, d2.y, h2.useHTML).add(f3.labelGroup) : null) n.styledMode || d2.css(e(h2.style)), d2.textPxLength = d2.getBBox().width;
                return d2;
              };
              h.prototype.destroy = function() {
                B(
                  this,
                  this.axis
                );
              };
              h.prototype.getPosition = function(d2, a2, e2, h2) {
                var f3 = this.axis, n = f3.chart, q = h2 && n.oldChartHeight || n.chartHeight;
                d2 = { x: d2 ? H(f3.translate(a2 + e2, null, null, h2) + f3.transB) : f3.left + f3.offset + (f3.opposite ? (h2 && n.oldChartWidth || n.chartWidth) - f3.right - f3.left : 0), y: d2 ? q - f3.bottom + f3.offset - (f3.opposite ? f3.height : 0) : H(q - f3.translate(a2 + e2, null, null, h2) - f3.transB) };
                d2.y = u(d2.y, -1e5, 1e5);
                p(this, "afterGetPosition", { pos: d2 });
                return d2;
              };
              h.prototype.getLabelPosition = function(d2, a2, e2, h2, f3, l2, q, k) {
                var c = this.axis, g = c.transA, b = c.isLinked && c.linkedParent ? c.linkedParent.reversed : c.reversed, r = c.staggerLines, x = c.tickRotCorr || { x: 0, y: 0 }, n = h2 || c.reserveSpaceDefault ? 0 : -c.labelOffset * ("center" === c.labelAlign ? 0.5 : 1), m2 = {}, t = f3.y;
                I(t) || (t = 0 === c.side ? e2.rotation ? -8 : -e2.getBBox().height : 2 === c.side ? x.y + 8 : Math.cos(e2.rotation * F) * (x.y - e2.getBBox(false, 0).height / 2));
                d2 = d2 + f3.x + n + x.x - (l2 && h2 ? l2 * g * (b ? -1 : 1) : 0);
                a2 = a2 + t - (l2 && !h2 ? l2 * g * (b ? 1 : -1) : 0);
                r && (e2 = q / (k || 1) % r, c.opposite && (e2 = r - e2 - 1), a2 += c.labelOffset / r * e2);
                m2.x = d2;
                m2.y = Math.round(a2);
                p(this, "afterGetLabelPosition", { pos: m2, tickmarkOffset: l2, index: q });
                return m2;
              };
              h.prototype.getLabelSize = function() {
                return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0;
              };
              h.prototype.getMarkPath = function(d2, a2, e2, h2, f3, l2) {
                return l2.crispLine([["M", d2, a2], ["L", d2 + (f3 ? 0 : -e2), a2 + (f3 ? e2 : 0)]], h2);
              };
              h.prototype.handleOverflow = function(d2) {
                var a2 = this.axis, e2 = a2.options.labels, h2 = d2.x, f3 = a2.chart.chartWidth, m2 = a2.chart.spacing, q = l(a2.labelLeft, Math.min(a2.pos, m2[3]));
                m2 = l(a2.labelRight, Math.max(a2.isRadial ? 0 : a2.pos + a2.len, f3 - m2[1]));
                var k = this.label, c = this.rotation, g = { left: 0, center: 0.5, right: 1 }[a2.labelAlign || k.attr("align")], b = k.getBBox().width, r = a2.getSlotWidth(this), x = {}, D = r, p2 = 1, t;
                if (c || "justify" !== e2.overflow) 0 > c && h2 - g * b < q ? t = Math.round(h2 / Math.cos(c * F) - q) : 0 < c && h2 + g * b > m2 && (t = Math.round((f3 - h2) / Math.cos(c * F)));
                else if (f3 = h2 + (1 - g) * b, h2 - g * b < q ? D = d2.x + D * (1 - g) - q : f3 > m2 && (D = m2 - d2.x + D * g, p2 = -1), D = Math.min(r, D), D < r && "center" === a2.labelAlign && (d2.x += p2 * (r - D - g * (r - Math.min(b, D)))), b > D || a2.autoRotation && (k.styles || {}).width) t = D;
                t && (this.shortenLabel ? this.shortenLabel() : (x.width = Math.floor(t) + "px", (e2.style || {}).textOverflow || (x.textOverflow = "ellipsis"), k.css(x)));
              };
              h.prototype.moveLabel = function(a2, e2) {
                var h2 = this, f3 = h2.label, l2 = h2.axis, n = l2.reversed, q = false;
                f3 && f3.textStr === a2 ? (h2.movedLabel = f3, q = true, delete h2.label) : d(l2.ticks, function(c) {
                  q || c.isNew || c === h2 || !c.label || c.label.textStr !== a2 || (h2.movedLabel = c.label, q = true, c.labelPos = h2.movedLabel.xy, delete c.label);
                });
                if (!q && (h2.labelPos || f3)) {
                  var k = h2.labelPos || f3.xy;
                  f3 = l2.horiz ? n ? 0 : l2.width + l2.left : k.x;
                  l2 = l2.horiz ? k.y : n ? l2.width + l2.left : 0;
                  h2.movedLabel = h2.createLabel({ x: f3, y: l2 }, a2, e2);
                  h2.movedLabel && h2.movedLabel.attr({ opacity: 0 });
                }
              };
              h.prototype.render = function(d2, a2, e2) {
                var h2 = this.axis, f3 = h2.horiz, n = this.pos, q = l(this.tickmarkOffset, h2.tickmarkOffset);
                n = this.getPosition(f3, n, q, a2);
                q = n.x;
                var k = n.y;
                h2 = f3 && q === h2.pos + h2.len || !f3 && k === h2.pos ? -1 : 1;
                f3 = l(e2, this.label && this.label.newOpacity, 1);
                e2 = l(e2, 1);
                this.isActive = true;
                this.renderGridLine(a2, e2, h2);
                this.renderMark(n, e2, h2);
                this.renderLabel(n, a2, f3, d2);
                this.isNew = false;
                p(this, "afterRender");
              };
              h.prototype.renderGridLine = function(d2, a2, e2) {
                var h2 = this.axis, f3 = h2.options, n = {}, q = this.pos, k = this.type, c = l(
                  this.tickmarkOffset,
                  h2.tickmarkOffset
                ), g = h2.chart.renderer, b = this.gridLine, r = f3.gridLineWidth, x = f3.gridLineColor, D = f3.gridLineDashStyle;
                "minor" === this.type && (r = f3.minorGridLineWidth, x = f3.minorGridLineColor, D = f3.minorGridLineDashStyle);
                b || (h2.chart.styledMode || (n.stroke = x, n["stroke-width"] = r || 0, n.dashstyle = D), k || (n.zIndex = 1), d2 && (a2 = 0), this.gridLine = b = g.path().attr(n).addClass("highcharts-" + (k ? k + "-" : "") + "grid-line").add(h2.gridGroup));
                if (b && (e2 = h2.getPlotLinePath({ value: q + c, lineWidth: b.strokeWidth() * e2, force: "pass", old: d2 }))) b[d2 || this.isNew ? "attr" : "animate"]({ d: e2, opacity: a2 });
              };
              h.prototype.renderMark = function(d2, a2, e2) {
                var h2 = this.axis, f3 = h2.options, n = h2.chart.renderer, q = this.type, k = h2.tickSize(q ? q + "Tick" : "tick"), c = d2.x;
                d2 = d2.y;
                var g = l(f3["minor" !== q ? "tickWidth" : "minorTickWidth"], !q && h2.isXAxis ? 1 : 0);
                f3 = f3["minor" !== q ? "tickColor" : "minorTickColor"];
                var b = this.mark, r = !b;
                k && (h2.opposite && (k[0] = -k[0]), b || (this.mark = b = n.path().addClass("highcharts-" + (q ? q + "-" : "") + "tick").add(h2.axisGroup), h2.chart.styledMode || b.attr({ stroke: f3, "stroke-width": g })), b[r ? "attr" : "animate"]({ d: this.getMarkPath(
                  c,
                  d2,
                  k[0],
                  b.strokeWidth() * e2,
                  h2.horiz,
                  n
                ), opacity: a2 }));
              };
              h.prototype.renderLabel = function(d2, a2, e2, h2) {
                var f3 = this.axis, n = f3.horiz, q = f3.options, k = this.label, c = q.labels, g = c.step;
                f3 = l(this.tickmarkOffset, f3.tickmarkOffset);
                var b = d2.x;
                d2 = d2.y;
                var r = true;
                k && m(b) && (k.xy = d2 = this.getLabelPosition(b, d2, k, n, c, f3, h2, g), this.isFirst && !this.isLast && !q.showFirstLabel || this.isLast && !this.isFirst && !q.showLastLabel ? r = false : !n || c.step || c.rotation || a2 || 0 === e2 || this.handleOverflow(d2), g && h2 % g && (r = false), r && m(d2.y) ? (d2.opacity = e2, k[this.isNewLabel ? "attr" : "animate"](d2), this.isNewLabel = false) : (k.attr("y", -9999), this.isNewLabel = true));
              };
              h.prototype.replaceMovedLabel = function() {
                var d2 = this.label, a2 = this.axis, e2 = a2.reversed;
                if (d2 && !this.isNew) {
                  var h2 = a2.horiz ? e2 ? a2.left : a2.width + a2.left : d2.xy.x;
                  e2 = a2.horiz ? d2.xy.y : e2 ? a2.width + a2.top : a2.top;
                  d2.animate({ x: h2, y: e2, opacity: 0 }, void 0, d2.destroy);
                  delete this.label;
                }
                a2.isDirty = true;
                this.label = this.movedLabel;
                delete this.movedLabel;
              };
              return h;
            }();
            "";
            return f2;
          }
        );
        M(f, "Core/Axis/Axis.js", [
          f["Core/Animation/AnimationUtilities.js"],
          f["Core/Axis/AxisDefaults.js"],
          f["Core/Color/Color.js"],
          f["Core/DefaultOptions.js"],
          f["Core/Foundation.js"],
          f["Core/Globals.js"],
          f["Core/Axis/Tick.js"],
          f["Core/Utilities.js"]
        ], function(a, f2, C, G, u, H, I, B) {
          var z = a.animObject, p = G.defaultOptions, m = u.registerEventOptions, e = H.deg2rad, d = B.arrayMax, l = B.arrayMin, h = B.clamp, t = B.correctFloat, n = B.defined, v = B.destroyObjectProperties, w = B.erase, y = B.error, A = B.extend, q = B.fireEvent, k = B.getMagnitude, c = B.isArray, g = B.isNumber, b = B.isString, r = B.merge, x = B.normalizeTickInterval, D = B.objectEach, K = B.pick, P = B.relativeLength, Q = B.removeEvent, O = B.splat, W = B.syncTimeout;
          a = function() {
            function a2(b2, c2) {
              this.zoomEnabled = this.width = this.visible = this.userOptions = this.translationSlope = this.transB = this.transA = this.top = this.ticks = this.tickRotCorr = this.tickPositions = this.tickmarkOffset = this.tickInterval = this.tickAmount = this.side = this.series = this.right = this.positiveValuesOnly = this.pos = this.pointRangePadding = this.pointRange = this.plotLinesAndBandsGroups = this.plotLinesAndBands = this.paddedTicks = this.overlap = this.options = this.offset = this.names = this.minPixelPadding = this.minorTicks = this.minorTickInterval = this.min = this.maxLabelLength = this.max = this.len = this.left = this.labelFormatter = this.labelEdge = this.isLinked = this.height = this.hasVisibleSeries = this.hasNames = this.eventOptions = this.coll = this.closestPointRange = this.chart = this.bottom = this.alternateBands = void 0;
              this.init(b2, c2);
            }
            a2.prototype.init = function(b2, c2) {
              var a3 = c2.isX;
              this.chart = b2;
              this.horiz = b2.inverted && !this.isZAxis ? !a3 : a3;
              this.isXAxis = a3;
              this.coll = this.coll || (a3 ? "xAxis" : "yAxis");
              q(this, "init", { userOptions: c2 });
              this.opposite = K(c2.opposite, this.opposite);
              this.side = K(c2.side, this.side, this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3);
              this.setOptions(c2);
              var d2 = this.options, e2 = d2.labels, k2 = d2.type;
              this.userOptions = c2;
              this.minPixelPadding = 0;
              this.reversed = K(d2.reversed, this.reversed);
              this.visible = d2.visible;
              this.zoomEnabled = d2.zoomEnabled;
              this.hasNames = "category" === k2 || true === d2.categories;
              this.categories = d2.categories || (this.hasNames ? [] : void 0);
              this.names || (this.names = [], this.names.keys = {});
              this.plotLinesAndBandsGroups = {};
              this.positiveValuesOnly = !!this.logarithmic;
              this.isLinked = n(d2.linkedTo);
              this.ticks = {};
              this.labelEdge = [];
              this.minorTicks = {};
              this.plotLinesAndBands = [];
              this.alternateBands = {};
              this.len = 0;
              this.minRange = this.userMinRange = d2.minRange || d2.maxZoom;
              this.range = d2.range;
              this.offset = d2.offset || 0;
              this.min = this.max = null;
              c2 = K(d2.crosshair, O(b2.options.tooltip.crosshairs)[a3 ? 0 : 1]);
              this.crosshair = true === c2 ? {} : c2;
              -1 === b2.axes.indexOf(this) && (a3 ? b2.axes.splice(b2.xAxis.length, 0, this) : b2.axes.push(this), b2[this.coll].push(this));
              this.series = this.series || [];
              b2.inverted && !this.isZAxis && a3 && "undefined" === typeof this.reversed && (this.reversed = true);
              this.labelRotation = g(e2.rotation) ? e2.rotation : void 0;
              m(this, d2);
              q(this, "afterInit");
            };
            a2.prototype.setOptions = function(b2) {
              this.options = r(f2.defaultXAxisOptions, "yAxis" === this.coll && f2.defaultYAxisOptions, [f2.defaultTopAxisOptions, f2.defaultRightAxisOptions, f2.defaultBottomAxisOptions, f2.defaultLeftAxisOptions][this.side], r(p[this.coll], b2));
              q(this, "afterSetOptions", { userOptions: b2 });
            };
            a2.prototype.defaultLabelFormatter = function(b2) {
              var c2 = this.axis;
              b2 = this.chart.numberFormatter;
              var a3 = g(this.value) ? this.value : NaN, d2 = c2.chart.time, e2 = this.dateTimeLabelFormat, k2 = p.lang, r2 = k2.numericSymbols;
              k2 = k2.numericSymbolMagnitude || 1e3;
              var h2 = c2.logarithmic ? Math.abs(a3) : c2.tickInterval, q2 = r2 && r2.length;
              if (c2.categories) var L = "" + this.value;
              else if (e2) L = d2.dateFormat(e2, a3);
              else if (q2 && 1e3 <= h2) for (; q2-- && "undefined" === typeof L; ) c2 = Math.pow(k2, q2 + 1), h2 >= c2 && 0 === 10 * a3 % c2 && null !== r2[q2] && 0 !== a3 && (L = b2(a3 / c2, -1) + r2[q2]);
              "undefined" === typeof L && (L = 1e4 <= Math.abs(a3) ? b2(a3, -1) : b2(
                a3,
                -1,
                void 0,
                ""
              ));
              return L;
            };
            a2.prototype.getSeriesExtremes = function() {
              var b2 = this, c2 = b2.chart, a3;
              q(this, "getSeriesExtremes", null, function() {
                b2.hasVisibleSeries = false;
                b2.dataMin = b2.dataMax = b2.threshold = null;
                b2.softThreshold = !b2.isXAxis;
                b2.stacking && b2.stacking.buildStacks();
                b2.series.forEach(function(d2) {
                  if (d2.visible || !c2.options.chart.ignoreHiddenSeries) {
                    var e2 = d2.options, k2 = e2.threshold;
                    b2.hasVisibleSeries = true;
                    b2.positiveValuesOnly && 0 >= k2 && (k2 = null);
                    if (b2.isXAxis) {
                      if (e2 = d2.xData, e2.length) {
                        e2 = b2.logarithmic ? e2.filter(b2.validatePositiveValue) : e2;
                        a3 = d2.getXExtremes(e2);
                        var r2 = a3.min;
                        var h2 = a3.max;
                        g(r2) || r2 instanceof Date || (e2 = e2.filter(g), a3 = d2.getXExtremes(e2), r2 = a3.min, h2 = a3.max);
                        e2.length && (b2.dataMin = Math.min(K(b2.dataMin, r2), r2), b2.dataMax = Math.max(K(b2.dataMax, h2), h2));
                      }
                    } else if (d2 = d2.applyExtremes(), g(d2.dataMin) && (r2 = d2.dataMin, b2.dataMin = Math.min(K(b2.dataMin, r2), r2)), g(d2.dataMax) && (h2 = d2.dataMax, b2.dataMax = Math.max(K(b2.dataMax, h2), h2)), n(k2) && (b2.threshold = k2), !e2.softThreshold || b2.positiveValuesOnly) b2.softThreshold = false;
                  }
                });
              });
              q(this, "afterGetSeriesExtremes");
            };
            a2.prototype.translate = function(b2, c2, a3, d2, e2, k2) {
              var r2 = this.linkedParent || this, h2 = d2 && r2.old ? r2.old.min : r2.min, q2 = r2.minPixelPadding;
              e2 = (r2.isOrdinal || r2.brokenAxis && r2.brokenAxis.hasBreaks || r2.logarithmic && e2) && r2.lin2val;
              var f3 = 1, L = 0;
              d2 = d2 && r2.old ? r2.old.transA : r2.transA;
              d2 || (d2 = r2.transA);
              a3 && (f3 *= -1, L = r2.len);
              r2.reversed && (f3 *= -1, L -= f3 * (r2.sector || r2.len));
              c2 ? (k2 = (b2 * f3 + L - q2) / d2 + h2, e2 && (k2 = r2.lin2val(k2))) : (e2 && (b2 = r2.val2lin(b2)), b2 = f3 * (b2 - h2) * d2, k2 = g(h2) ? (r2.isRadial ? b2 : t(b2)) + L + f3 * q2 + (g(k2) ? d2 * k2 : 0) : void 0);
              return k2;
            };
            a2.prototype.toPixels = function(b2, c2) {
              return this.translate(
                b2,
                false,
                !this.horiz,
                null,
                true
              ) + (c2 ? 0 : this.pos);
            };
            a2.prototype.toValue = function(b2, c2) {
              return this.translate(b2 - (c2 ? 0 : this.pos), true, !this.horiz, null, true);
            };
            a2.prototype.getPlotLinePath = function(b2) {
              function c2(b3, c3, a4) {
                if ("pass" !== m2 && b3 < c3 || b3 > a4) m2 ? b3 = h(b3, c3, a4) : w2 = true;
                return b3;
              }
              var a3 = this, d2 = a3.chart, e2 = a3.left, k2 = a3.top, r2 = b2.old, f3 = b2.value, L = b2.lineWidth, l2 = r2 && d2.oldChartHeight || d2.chartHeight, x2 = r2 && d2.oldChartWidth || d2.chartWidth, D2 = a3.transB, n2 = b2.translatedValue, m2 = b2.force, p2, t2, A2, P2, w2;
              b2 = {
                value: f3,
                lineWidth: L,
                old: r2,
                force: m2,
                acrossPanes: b2.acrossPanes,
                translatedValue: n2
              };
              q(this, "getPlotLinePath", b2, function(b3) {
                n2 = K(n2, a3.translate(f3, null, null, r2));
                n2 = h(n2, -1e5, 1e5);
                p2 = A2 = Math.round(n2 + D2);
                t2 = P2 = Math.round(l2 - n2 - D2);
                g(n2) ? a3.horiz ? (t2 = k2, P2 = l2 - a3.bottom, p2 = A2 = c2(p2, e2, e2 + a3.width)) : (p2 = e2, A2 = x2 - a3.right, t2 = P2 = c2(t2, k2, k2 + a3.height)) : (w2 = true, m2 = false);
                b3.path = w2 && !m2 ? null : d2.renderer.crispLine([["M", p2, t2], ["L", A2, P2]], L || 1);
              });
              return b2.path;
            };
            a2.prototype.getLinearTickPositions = function(b2, c2, a3) {
              var d2 = t(Math.floor(c2 / b2) * b2);
              a3 = t(Math.ceil(a3 / b2) * b2);
              var g2 = [], e2;
              t(d2 + b2) === d2 && (e2 = 20);
              if (this.single) return [c2];
              for (c2 = d2; c2 <= a3; ) {
                g2.push(c2);
                c2 = t(c2 + b2, e2);
                if (c2 === k2) break;
                var k2 = c2;
              }
              return g2;
            };
            a2.prototype.getMinorTickInterval = function() {
              var b2 = this.options;
              return true === b2.minorTicks ? K(b2.minorTickInterval, "auto") : false === b2.minorTicks ? null : b2.minorTickInterval;
            };
            a2.prototype.getMinorTickPositions = function() {
              var b2 = this.options, c2 = this.tickPositions, a3 = this.minorTickInterval, d2 = this.pointRangePadding || 0, g2 = this.min - d2;
              d2 = this.max + d2;
              var e2 = d2 - g2, k2 = [];
              if (e2 && e2 / a3 < this.len / 3) {
                var r2 = this.logarithmic;
                if (r2) this.paddedTicks.forEach(function(b3, c3, d3) {
                  c3 && k2.push.apply(
                    k2,
                    r2.getLogTickPositions(a3, d3[c3 - 1], d3[c3], true)
                  );
                });
                else if (this.dateTime && "auto" === this.getMinorTickInterval()) k2 = k2.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(a3), g2, d2, b2.startOfWeek));
                else for (b2 = g2 + (c2[0] - g2) % a3; b2 <= d2 && b2 !== k2[0]; b2 += a3) k2.push(b2);
              }
              0 !== k2.length && this.trimTicks(k2);
              return k2;
            };
            a2.prototype.adjustForMinRange = function() {
              var b2 = this.options, c2 = this.logarithmic, a3 = this.min, g2 = this.max, e2 = 0, k2, r2, h2, q2;
              this.isXAxis && "undefined" === typeof this.minRange && !c2 && (n(b2.min) || n(b2.max) || n(b2.floor) || n(b2.ceiling) ? this.minRange = null : (this.series.forEach(function(b3) {
                h2 = b3.xData;
                q2 = b3.xIncrement ? 1 : h2.length - 1;
                if (1 < h2.length) {
                  for (k2 = q2; 0 < k2; k2--) if (r2 = h2[k2] - h2[k2 - 1], !e2 || r2 < e2) e2 = r2;
                }
              }), this.minRange = Math.min(5 * e2, this.dataMax - this.dataMin)));
              if (g2 - a3 < this.minRange) {
                var f3 = this.dataMax - this.dataMin >= this.minRange;
                var x2 = this.minRange;
                var D2 = (x2 - g2 + a3) / 2;
                D2 = [a3 - D2, K(b2.min, a3 - D2)];
                f3 && (D2[2] = this.logarithmic ? this.logarithmic.log2lin(this.dataMin) : this.dataMin);
                a3 = d(D2);
                g2 = [a3 + x2, K(b2.max, a3 + x2)];
                f3 && (g2[2] = c2 ? c2.log2lin(this.dataMax) : this.dataMax);
                g2 = l(g2);
                g2 - a3 < x2 && (D2[0] = g2 - x2, D2[1] = K(b2.min, g2 - x2), a3 = d(D2));
              }
              this.min = a3;
              this.max = g2;
            };
            a2.prototype.getClosest = function() {
              var b2;
              this.categories ? b2 = 1 : this.series.forEach(function(c2) {
                var a3 = c2.closestPointRange, d2 = c2.visible || !c2.chart.options.chart.ignoreHiddenSeries;
                !c2.noSharedTooltip && n(a3) && d2 && (b2 = n(b2) ? Math.min(b2, a3) : a3);
              });
              return b2;
            };
            a2.prototype.nameToX = function(b2) {
              var a3 = c(this.options.categories), d2 = a3 ? this.categories : this.names, g2 = b2.options.x;
              b2.series.requireSorting = false;
              n(g2) || (g2 = this.options.uniqueNames && d2 ? a3 ? d2.indexOf(b2.name) : K(
                d2.keys[b2.name],
                -1
              ) : b2.series.autoIncrement());
              if (-1 === g2) {
                if (!a3 && d2) var e2 = d2.length;
              } else e2 = g2;
              "undefined" !== typeof e2 && (this.names[e2] = b2.name, this.names.keys[b2.name] = e2);
              return e2;
            };
            a2.prototype.updateNames = function() {
              var b2 = this, c2 = this.names;
              0 < c2.length && (Object.keys(c2.keys).forEach(function(b3) {
                delete c2.keys[b3];
              }), c2.length = 0, this.minRange = this.userMinRange, (this.series || []).forEach(function(c3) {
                c3.xIncrement = null;
                if (!c3.points || c3.isDirtyData) b2.max = Math.max(b2.max, c3.xData.length - 1), c3.processData(), c3.generatePoints();
                c3.data.forEach(function(a3, d2) {
                  if (a3 && a3.options && "undefined" !== typeof a3.name) {
                    var g2 = b2.nameToX(a3);
                    "undefined" !== typeof g2 && g2 !== a3.x && (a3.x = g2, c3.xData[d2] = g2);
                  }
                });
              }));
            };
            a2.prototype.setAxisTranslation = function() {
              var c2 = this, a3 = c2.max - c2.min, d2 = c2.linkedParent, g2 = !!c2.categories, e2 = c2.isXAxis, k2 = c2.axisPointRange || 0, r2 = 0, h2 = 0, f3 = c2.transA;
              if (e2 || g2 || k2) {
                var x2 = c2.getClosest();
                d2 ? (r2 = d2.minPointOffset, h2 = d2.pointRangePadding) : c2.series.forEach(function(a4) {
                  var d3 = g2 ? 1 : e2 ? K(a4.options.pointRange, x2, 0) : c2.axisPointRange || 0, q2 = a4.options.pointPlacement;
                  k2 = Math.max(k2, d3);
                  if (!c2.single || g2) a4 = a4.is("xrange") ? !e2 : e2, r2 = Math.max(r2, a4 && b(q2) ? 0 : d3 / 2), h2 = Math.max(h2, a4 && "on" === q2 ? 0 : d3);
                });
                d2 = c2.ordinal && c2.ordinal.slope && x2 ? c2.ordinal.slope / x2 : 1;
                c2.minPointOffset = r2 *= d2;
                c2.pointRangePadding = h2 *= d2;
                c2.pointRange = Math.min(k2, c2.single && g2 ? 1 : a3);
                e2 && (c2.closestPointRange = x2);
              }
              c2.translationSlope = c2.transA = f3 = c2.staticScale || c2.len / (a3 + h2 || 1);
              c2.transB = c2.horiz ? c2.left : c2.bottom;
              c2.minPixelPadding = f3 * r2;
              q(this, "afterSetAxisTranslation");
            };
            a2.prototype.minFromRange = function() {
              return this.max - this.range;
            };
            a2.prototype.setTickInterval = function(b2) {
              var c2 = this.chart, a3 = this.logarithmic, d2 = this.options, e2 = this.isXAxis, r2 = this.isLinked, h2 = d2.tickPixelInterval, f3 = this.categories, l2 = this.softThreshold, D2 = d2.maxPadding, m2 = d2.minPadding, L = g(d2.tickInterval) && 0 <= d2.tickInterval ? d2.tickInterval : void 0, p2 = g(this.threshold) ? this.threshold : null;
              this.dateTime || f3 || r2 || this.getTickAmount();
              var A2 = K(this.userMin, d2.min);
              var P2 = K(this.userMax, d2.max);
              if (r2) {
                this.linkedParent = c2[this.coll][d2.linkedTo];
                var w2 = this.linkedParent.getExtremes();
                this.min = K(w2.min, w2.dataMin);
                this.max = K(w2.max, w2.dataMax);
                d2.type !== this.linkedParent.options.type && y(11, 1, c2);
              } else {
                if (l2 && n(p2)) {
                  if (this.dataMin >= p2) w2 = p2, m2 = 0;
                  else if (this.dataMax <= p2) {
                    var v2 = p2;
                    D2 = 0;
                  }
                }
                this.min = K(A2, w2, this.dataMin);
                this.max = K(P2, v2, this.dataMax);
              }
              a3 && (this.positiveValuesOnly && !b2 && 0 >= Math.min(this.min, K(this.dataMin, this.min)) && y(10, 1, c2), this.min = t(a3.log2lin(this.min), 16), this.max = t(a3.log2lin(this.max), 16));
              this.range && n(this.max) && (this.userMin = this.min = A2 = Math.max(this.dataMin, this.minFromRange()), this.userMax = P2 = this.max, this.range = null);
              q(this, "foundExtremes");
              this.beforePadding && this.beforePadding();
              this.adjustForMinRange();
              !(f3 || this.axisPointRange || this.stacking && this.stacking.usePercentage || r2) && n(this.min) && n(this.max) && (c2 = this.max - this.min) && (!n(A2) && m2 && (this.min -= c2 * m2), !n(P2) && D2 && (this.max += c2 * D2));
              g(this.userMin) || (g(d2.softMin) && d2.softMin < this.min && (this.min = A2 = d2.softMin), g(d2.floor) && (this.min = Math.max(this.min, d2.floor)));
              g(this.userMax) || (g(d2.softMax) && d2.softMax > this.max && (this.max = P2 = d2.softMax), g(d2.ceiling) && (this.max = Math.min(this.max, d2.ceiling)));
              l2 && n(this.dataMin) && (p2 = p2 || 0, !n(A2) && this.min < p2 && this.dataMin >= p2 ? this.min = this.options.minRange ? Math.min(p2, this.max - this.minRange) : p2 : !n(P2) && this.max > p2 && this.dataMax <= p2 && (this.max = this.options.minRange ? Math.max(p2, this.min + this.minRange) : p2));
              g(this.min) && g(this.max) && !this.chart.polar && this.min > this.max && (n(this.options.min) ? this.max = this.min : n(this.options.max) && (this.min = this.max));
              this.tickInterval = this.min === this.max || "undefined" === typeof this.min || "undefined" === typeof this.max ? 1 : r2 && this.linkedParent && !L && h2 === this.linkedParent.options.tickPixelInterval ? L = this.linkedParent.tickInterval : K(L, this.tickAmount ? (this.max - this.min) / Math.max(this.tickAmount - 1, 1) : void 0, f3 ? 1 : (this.max - this.min) * h2 / Math.max(this.len, h2));
              if (e2 && !b2) {
                var Q2 = this.min !== (this.old && this.old.min) || this.max !== (this.old && this.old.max);
                this.series.forEach(function(b3) {
                  b3.forceCrop = b3.forceCropping && b3.forceCropping();
                  b3.processData(Q2);
                });
                q(this, "postProcessData", { hasExtemesChanged: Q2 });
              }
              this.setAxisTranslation();
              q(this, "initialAxisTranslation");
              this.pointRange && !L && (this.tickInterval = Math.max(this.pointRange, this.tickInterval));
              b2 = K(d2.minTickInterval, this.dateTime && !this.series.some(function(b3) {
                return b3.noSharedTooltip;
              }) ? this.closestPointRange : 0);
              !L && this.tickInterval < b2 && (this.tickInterval = b2);
              this.dateTime || this.logarithmic || L || (this.tickInterval = x(this.tickInterval, void 0, k(this.tickInterval), K(d2.allowDecimals, 0.5 > this.tickInterval || void 0 !== this.tickAmount), !!this.tickAmount));
              this.tickAmount || (this.tickInterval = this.unsquish());
              this.setTickPositions();
            };
            a2.prototype.setTickPositions = function() {
              var b2 = this.options, c2 = b2.tickPositions, a3 = this.getMinorTickInterval(), d2 = this.hasVerticalPanning(), g2 = "colorAxis" === this.coll, e2 = (g2 || !d2) && b2.startOnTick;
              d2 = (g2 || !d2) && b2.endOnTick;
              g2 = b2.tickPositioner;
              this.tickmarkOffset = this.categories && "between" === b2.tickmarkPlacement && 1 === this.tickInterval ? 0.5 : 0;
              this.minorTickInterval = "auto" === a3 && this.tickInterval ? this.tickInterval / 5 : a3;
              this.single = this.min === this.max && n(this.min) && !this.tickAmount && (parseInt(this.min, 10) === this.min || false !== b2.allowDecimals);
              this.tickPositions = a3 = c2 && c2.slice();
              !a3 && (this.ordinal && this.ordinal.positions || !((this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200)) ? a3 = this.dateTime ? this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(this.tickInterval, b2.units), this.min, this.max, b2.startOfWeek, this.ordinal && this.ordinal.positions, this.closestPointRange, true) : this.logarithmic ? this.logarithmic.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(
                this.tickInterval,
                this.min,
                this.max
              ) : (a3 = [this.min, this.max], y(19, false, this.chart)), a3.length > this.len && (a3 = [a3[0], a3.pop()], a3[0] === a3[1] && (a3.length = 1)), this.tickPositions = a3, g2 && (g2 = g2.apply(this, [this.min, this.max]))) && (this.tickPositions = a3 = g2);
              this.paddedTicks = a3.slice(0);
              this.trimTicks(a3, e2, d2);
              this.isLinked || (this.single && 2 > a3.length && !this.categories && !this.series.some(function(b3) {
                return b3.is("heatmap") && "between" === b3.options.pointPlacement;
              }) && (this.min -= 0.5, this.max += 0.5), c2 || g2 || this.adjustTickAmount());
              q(this, "afterSetTickPositions");
            };
            a2.prototype.trimTicks = function(b2, c2, a3) {
              var d2 = b2[0], g2 = b2[b2.length - 1], e2 = !this.isOrdinal && this.minPointOffset || 0;
              q(this, "trimTicks");
              if (!this.isLinked) {
                if (c2 && -Infinity !== d2) this.min = d2;
                else for (; this.min - e2 > b2[0]; ) b2.shift();
                if (a3) this.max = g2;
                else for (; this.max + e2 < b2[b2.length - 1]; ) b2.pop();
                0 === b2.length && n(d2) && !this.options.tickPositions && b2.push((g2 + d2) / 2);
              }
            };
            a2.prototype.alignToOthers = function() {
              var b2 = this, c2 = [this], a3 = b2.options, d2 = "yAxis" === this.coll && this.chart.options.chart.alignThresholds, e2 = [], k2;
              b2.thresholdAlignment = void 0;
              if ((false !== this.chart.options.chart.alignTicks && a3.alignTicks || d2) && false !== a3.startOnTick && false !== a3.endOnTick && !b2.logarithmic) {
                var r2 = function(b3) {
                  var c3 = b3.options;
                  return [b3.horiz ? c3.left : c3.top, c3.width, c3.height, c3.pane].join();
                }, h2 = r2(this);
                this.chart[this.coll].forEach(function(a4) {
                  var d3 = a4.series;
                  d3.length && d3.some(function(b3) {
                    return b3.visible;
                  }) && a4 !== b2 && r2(a4) === h2 && (k2 = true, c2.push(a4));
                });
              }
              if (k2 && d2) {
                c2.forEach(function(c3) {
                  c3 = c3.getThresholdAlignment(b2);
                  g(c3) && e2.push(c3);
                });
                var q2 = 1 < e2.length ? e2.reduce(
                  function(b3, c3) {
                    return b3 + c3;
                  },
                  0
                ) / e2.length : void 0;
                c2.forEach(function(b3) {
                  b3.thresholdAlignment = q2;
                });
              }
              return k2;
            };
            a2.prototype.getThresholdAlignment = function(b2) {
              (!g(this.dataMin) || this !== b2 && this.series.some(function(b3) {
                return b3.isDirty || b3.isDirtyData;
              })) && this.getSeriesExtremes();
              if (g(this.threshold)) return b2 = h((this.threshold - (this.dataMin || 0)) / ((this.dataMax || 0) - (this.dataMin || 0)), 0, 1), this.options.reversed && (b2 = 1 - b2), b2;
            };
            a2.prototype.getTickAmount = function() {
              var b2 = this.options, c2 = b2.tickPixelInterval, a3 = b2.tickAmount;
              !n(b2.tickInterval) && !a3 && this.len < c2 && !this.isRadial && !this.logarithmic && b2.startOnTick && b2.endOnTick && (a3 = 2);
              !a3 && this.alignToOthers() && (a3 = Math.ceil(this.len / c2) + 1);
              4 > a3 && (this.finalTickAmt = a3, a3 = 5);
              this.tickAmount = a3;
            };
            a2.prototype.adjustTickAmount = function() {
              var b2 = this, c2 = b2.finalTickAmt, a3 = b2.max, d2 = b2.min, e2 = b2.options, k2 = b2.tickPositions, r2 = b2.tickAmount, h2 = b2.thresholdAlignment, q2 = k2 && k2.length, f3 = K(b2.threshold, b2.softThreshold ? 0 : null);
              var x2 = b2.tickInterval;
              if (g(h2)) {
                var l2 = 0.5 > h2 ? Math.ceil(h2 * (r2 - 1)) : Math.floor(h2 * (r2 - 1));
                e2.reversed && (l2 = r2 - 1 - l2);
              }
              if (b2.hasData() && g(d2) && g(a3)) {
                h2 = function() {
                  b2.transA *= (q2 - 1) / (r2 - 1);
                  b2.min = e2.startOnTick ? k2[0] : Math.min(d2, k2[0]);
                  b2.max = e2.endOnTick ? k2[k2.length - 1] : Math.max(a3, k2[k2.length - 1]);
                };
                if (g(l2) && g(b2.threshold)) {
                  for (; k2[l2] !== f3 || k2.length !== r2 || k2[0] > d2 || k2[k2.length - 1] < a3; ) {
                    k2.length = 0;
                    for (k2.push(b2.threshold); k2.length < r2; ) void 0 === k2[l2] || k2[l2] > b2.threshold ? k2.unshift(t(k2[0] - x2)) : k2.push(t(k2[k2.length - 1] + x2));
                    if (x2 > 8 * b2.tickInterval) break;
                    x2 *= 2;
                  }
                  h2();
                } else if (q2 < r2) {
                  for (; k2.length < r2; ) k2.length % 2 || d2 === f3 ? k2.push(t(k2[k2.length - 1] + x2)) : k2.unshift(t(k2[0] - x2));
                  h2();
                } else q2 > r2 && (b2.tickInterval *= 2, b2.setTickPositions());
                if (n(c2)) {
                  for (x2 = f3 = k2.length; x2--; ) (3 === c2 && 1 === x2 % 2 || 2 >= c2 && 0 < x2 && x2 < f3 - 1) && k2.splice(x2, 1);
                  b2.finalTickAmt = void 0;
                }
              }
            };
            a2.prototype.setScale = function() {
              var b2 = false, c2 = false;
              this.series.forEach(function(a4) {
                b2 = b2 || a4.isDirtyData || a4.isDirty;
                c2 = c2 || a4.xAxis && a4.xAxis.isDirty || false;
              });
              this.setAxisSize();
              var a3 = this.len !== (this.old && this.old.len);
              a3 || b2 || c2 || this.isLinked || this.forceRedraw || this.userMin !== (this.old && this.old.userMin) || this.userMax !== (this.old && this.old.userMax) || this.alignToOthers() ? (this.stacking && this.stacking.resetStacks(), this.forceRedraw = false, this.getSeriesExtremes(), this.setTickInterval(), this.isDirty || (this.isDirty = a3 || this.min !== (this.old && this.old.min) || this.max !== (this.old && this.old.max))) : this.stacking && this.stacking.cleanStacks();
              b2 && this.panningState && (this.panningState.isDirty = true);
              q(this, "afterSetScale");
            };
            a2.prototype.setExtremes = function(b2, c2, a3, d2, g2) {
              var e2 = this, k2 = e2.chart;
              a3 = K(a3, true);
              e2.series.forEach(function(b3) {
                delete b3.kdTree;
              });
              g2 = A(g2, { min: b2, max: c2 });
              q(
                e2,
                "setExtremes",
                g2,
                function() {
                  e2.userMin = b2;
                  e2.userMax = c2;
                  e2.eventArgs = g2;
                  a3 && k2.redraw(d2);
                }
              );
            };
            a2.prototype.zoom = function(b2, c2) {
              var a3 = this, d2 = this.dataMin, g2 = this.dataMax, e2 = this.options, k2 = Math.min(d2, K(e2.min, d2)), r2 = Math.max(g2, K(e2.max, g2));
              b2 = { newMin: b2, newMax: c2 };
              q(this, "zoom", b2, function(b3) {
                var c3 = b3.newMin, e3 = b3.newMax;
                if (c3 !== a3.min || e3 !== a3.max) a3.allowZoomOutside || (n(d2) && (c3 < k2 && (c3 = k2), c3 > r2 && (c3 = r2)), n(g2) && (e3 < k2 && (e3 = k2), e3 > r2 && (e3 = r2))), a3.displayBtn = "undefined" !== typeof c3 || "undefined" !== typeof e3, a3.setExtremes(c3, e3, false, void 0, { trigger: "zoom" });
                b3.zoomed = true;
              });
              return b2.zoomed;
            };
            a2.prototype.setAxisSize = function() {
              var b2 = this.chart, c2 = this.options, a3 = c2.offsets || [0, 0, 0, 0], d2 = this.horiz, g2 = this.width = Math.round(P(K(c2.width, b2.plotWidth - a3[3] + a3[1]), b2.plotWidth)), e2 = this.height = Math.round(P(K(c2.height, b2.plotHeight - a3[0] + a3[2]), b2.plotHeight)), k2 = this.top = Math.round(P(K(c2.top, b2.plotTop + a3[0]), b2.plotHeight, b2.plotTop));
              c2 = this.left = Math.round(P(K(c2.left, b2.plotLeft + a3[3]), b2.plotWidth, b2.plotLeft));
              this.bottom = b2.chartHeight - e2 - k2;
              this.right = b2.chartWidth - g2 - c2;
              this.len = Math.max(d2 ? g2 : e2, 0);
              this.pos = d2 ? c2 : k2;
            };
            a2.prototype.getExtremes = function() {
              var b2 = this.logarithmic;
              return { min: b2 ? t(b2.lin2log(this.min)) : this.min, max: b2 ? t(b2.lin2log(this.max)) : this.max, dataMin: this.dataMin, dataMax: this.dataMax, userMin: this.userMin, userMax: this.userMax };
            };
            a2.prototype.getThreshold = function(b2) {
              var c2 = this.logarithmic, a3 = c2 ? c2.lin2log(this.min) : this.min;
              c2 = c2 ? c2.lin2log(this.max) : this.max;
              null === b2 || -Infinity === b2 ? b2 = a3 : Infinity === b2 ? b2 = c2 : a3 > b2 ? b2 = a3 : c2 < b2 && (b2 = c2);
              return this.translate(b2, 0, 1, 0, 1);
            };
            a2.prototype.autoLabelAlign = function(b2) {
              var c2 = (K(b2, 0) - 90 * this.side + 720) % 360;
              b2 = { align: "center" };
              q(this, "autoLabelAlign", b2, function(b3) {
                15 < c2 && 165 > c2 ? b3.align = "right" : 195 < c2 && 345 > c2 && (b3.align = "left");
              });
              return b2.align;
            };
            a2.prototype.tickSize = function(b2) {
              var c2 = this.options, a3 = K(c2["tick" === b2 ? "tickWidth" : "minorTickWidth"], "tick" === b2 && this.isXAxis && !this.categories ? 1 : 0), d2 = c2["tick" === b2 ? "tickLength" : "minorTickLength"];
              if (a3 && d2) {
                "inside" === c2[b2 + "Position"] && (d2 = -d2);
                var g2 = [d2, a3];
              }
              b2 = { tickSize: g2 };
              q(this, "afterTickSize", b2);
              return b2.tickSize;
            };
            a2.prototype.labelMetrics = function() {
              var b2 = this.tickPositions && this.tickPositions[0] || 0;
              return this.chart.renderer.fontMetrics(this.options.labels.style.fontSize, this.ticks[b2] && this.ticks[b2].label);
            };
            a2.prototype.unsquish = function() {
              var b2 = this.options.labels, c2 = this.horiz, a3 = this.tickInterval, d2 = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / a3), k2 = b2.rotation, r2 = this.labelMetrics(), h2 = Math.max(this.max - this.min, 0), q2 = function(b3) {
                var c3 = b3 / (d2 || 1);
                c3 = 1 < c3 ? Math.ceil(c3) : 1;
                c3 * a3 > h2 && Infinity !== b3 && Infinity !== d2 && h2 && (c3 = Math.ceil(h2 / a3));
                return t(c3 * a3);
              }, f3 = a3, x2, l2, D2 = Number.MAX_VALUE;
              if (c2) {
                if (!b2.staggerLines && !b2.step) if (g(k2)) var n2 = [k2];
                else d2 < b2.autoRotationLimit && (n2 = b2.autoRotation);
                n2 && n2.forEach(function(b3) {
                  if (b3 === k2 || b3 && -90 <= b3 && 90 >= b3) {
                    l2 = q2(Math.abs(r2.h / Math.sin(e * b3)));
                    var c3 = l2 + Math.abs(b3 / 360);
                    c3 < D2 && (D2 = c3, x2 = b3, f3 = l2);
                  }
                });
              } else b2.step || (f3 = q2(r2.h));
              this.autoRotation = n2;
              this.labelRotation = K(x2, g(k2) ? k2 : 0);
              return f3;
            };
            a2.prototype.getSlotWidth = function(b2) {
              var c2 = this.chart, a3 = this.horiz, d2 = this.options.labels, e2 = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1), k2 = c2.margin[3];
              if (b2 && g(b2.slotWidth)) return b2.slotWidth;
              if (a3 && 2 > d2.step) return d2.rotation ? 0 : (this.staggerLines || 1) * this.len / e2;
              if (!a3) {
                b2 = d2.style.width;
                if (void 0 !== b2) return parseInt(String(b2), 10);
                if (k2) return k2 - c2.spacing[3];
              }
              return 0.33 * c2.chartWidth;
            };
            a2.prototype.renderUnsquish = function() {
              var c2 = this.chart, a3 = c2.renderer, d2 = this.tickPositions, g2 = this.ticks, e2 = this.options.labels, k2 = e2.style, r2 = this.horiz, h2 = this.getSlotWidth(), q2 = Math.max(1, Math.round(h2 - 2 * e2.padding)), f3 = {}, x2 = this.labelMetrics(), l2 = k2.textOverflow, D2 = 0;
              b(e2.rotation) || (f3.rotation = e2.rotation || 0);
              d2.forEach(function(b2) {
                b2 = g2[b2];
                b2.movedLabel && b2.replaceMovedLabel();
                b2 && b2.label && b2.label.textPxLength > D2 && (D2 = b2.label.textPxLength);
              });
              this.maxLabelLength = D2;
              if (this.autoRotation) D2 > q2 && D2 > x2.h ? f3.rotation = this.labelRotation : this.labelRotation = 0;
              else if (h2) {
                var n2 = q2;
                if (!l2) {
                  var m2 = "clip";
                  for (q2 = d2.length; !r2 && q2--; ) {
                    var p2 = d2[q2];
                    if (p2 = g2[p2].label) p2.styles && "ellipsis" === p2.styles.textOverflow ? p2.css({ textOverflow: "clip" }) : p2.textPxLength > h2 && p2.css({ width: h2 + "px" }), p2.getBBox().height > this.len / d2.length - (x2.h - x2.f) && (p2.specificTextOverflow = "ellipsis");
                  }
                }
              }
              f3.rotation && (n2 = D2 > 0.5 * c2.chartHeight ? 0.33 * c2.chartHeight : D2, l2 || (m2 = "ellipsis"));
              if (this.labelAlign = e2.align || this.autoLabelAlign(this.labelRotation)) f3.align = this.labelAlign;
              d2.forEach(function(b2) {
                var c3 = (b2 = g2[b2]) && b2.label, a4 = k2.width, d3 = {};
                c3 && (c3.attr(f3), b2.shortenLabel ? b2.shortenLabel() : n2 && !a4 && "nowrap" !== k2.whiteSpace && (n2 < c3.textPxLength || "SPAN" === c3.element.tagName) ? (d3.width = n2 + "px", l2 || (d3.textOverflow = c3.specificTextOverflow || m2), c3.css(d3)) : c3.styles && c3.styles.width && !d3.width && !a4 && c3.css({ width: null }), delete c3.specificTextOverflow, b2.rotation = f3.rotation);
              }, this);
              this.tickRotCorr = a3.rotCorr(x2.b, this.labelRotation || 0, 0 !== this.side);
            };
            a2.prototype.hasData = function() {
              return this.series.some(function(b2) {
                return b2.hasData();
              }) || this.options.showEmpty && n(this.min) && n(this.max);
            };
            a2.prototype.addTitle = function(b2) {
              var c2 = this.chart.renderer, a3 = this.horiz, d2 = this.opposite, g2 = this.options.title, e2 = this.chart.styledMode, k2;
              this.axisTitle || ((k2 = g2.textAlign) || (k2 = (a3 ? { low: "left", middle: "center", high: "right" } : { low: d2 ? "right" : "left", middle: "center", high: d2 ? "left" : "right" })[g2.align]), this.axisTitle = c2.text(g2.text || "", 0, 0, g2.useHTML).attr({ zIndex: 7, rotation: g2.rotation, align: k2 }).addClass("highcharts-axis-title"), e2 || this.axisTitle.css(r(g2.style)), this.axisTitle.add(this.axisGroup), this.axisTitle.isNew = true);
              e2 || g2.style.width || this.isRadial || this.axisTitle.css({ width: this.len + "px" });
              this.axisTitle[b2 ? "show" : "hide"](b2);
            };
            a2.prototype.generateTick = function(b2) {
              var c2 = this.ticks;
              c2[b2] ? c2[b2].addLabel() : c2[b2] = new I(this, b2);
            };
            a2.prototype.getOffset = function() {
              var b2 = this, c2 = this, a3 = c2.chart, d2 = c2.horiz, g2 = c2.options, e2 = c2.side, k2 = c2.ticks, r2 = c2.tickPositions, h2 = c2.coll, f3 = c2.axisParent, x2 = a3.renderer, l2 = a3.inverted && !c2.isZAxis ? [1, 0, 3, 2][e2] : e2, m2 = c2.hasData(), p2 = g2.title, t2 = g2.labels, A2 = a3.axisOffset;
              a3 = a3.clipOffset;
              var P2 = [-1, 1, 1, -1][e2], w2 = g2.className, y2, v2 = 0, ja = 0, ca = 0;
              c2.showAxis = y2 = m2 || g2.showEmpty;
              c2.staggerLines = c2.horiz && t2.staggerLines || void 0;
              if (!c2.axisGroup) {
                var Q2 = function(c3, a4, d3) {
                  return x2.g(c3).attr({ zIndex: d3 }).addClass("highcharts-" + h2.toLowerCase() + a4 + " " + (b2.isRadial ? "highcharts-radial-axis" + a4 + " " : "") + (w2 || "")).add(f3);
                };
                c2.gridGroup = Q2("grid", "-grid", g2.gridZIndex);
                c2.axisGroup = Q2("axis", "", g2.zIndex);
                c2.labelGroup = Q2("axis-labels", "-labels", t2.zIndex);
              }
              m2 || c2.isLinked ? (r2.forEach(function(b3) {
                c2.generateTick(b3);
              }), c2.renderUnsquish(), c2.reserveSpaceDefault = 0 === e2 || 2 === e2 || { 1: "left", 3: "right" }[e2] === c2.labelAlign, K(t2.reserveSpace, "center" === c2.labelAlign ? true : null, c2.reserveSpaceDefault) && r2.forEach(function(b3) {
                ca = Math.max(k2[b3].getLabelSize(), ca);
              }), c2.staggerLines && (ca *= c2.staggerLines), c2.labelOffset = ca * (c2.opposite ? -1 : 1)) : D(k2, function(b3, c3) {
                b3.destroy();
                delete k2[c3];
              });
              if (p2 && p2.text && false !== p2.enabled && (c2.addTitle(y2), y2 && false !== p2.reserveSpace)) {
                c2.titleOffset = v2 = c2.axisTitle.getBBox()[d2 ? "height" : "width"];
                var O2 = p2.offset;
                ja = n(O2) ? 0 : K(p2.margin, d2 ? 5 : 10);
              }
              c2.renderLine();
              c2.offset = P2 * K(g2.offset, A2[e2] ? A2[e2] + (g2.margin || 0) : 0);
              c2.tickRotCorr = c2.tickRotCorr || { x: 0, y: 0 };
              p2 = 0 === e2 ? -c2.labelMetrics().h : 2 === e2 ? c2.tickRotCorr.y : 0;
              m2 = Math.abs(ca) + ja;
              ca && (m2 = m2 - p2 + P2 * (d2 ? K(t2.y, c2.tickRotCorr.y + 8 * P2) : t2.x));
              c2.axisTitleMargin = K(O2, m2);
              c2.getMaxLabelDimensions && (c2.maxLabelDimensions = c2.getMaxLabelDimensions(k2, r2));
              "colorAxis" !== h2 && (d2 = this.tickSize("tick"), A2[e2] = Math.max(A2[e2], (c2.axisTitleMargin || 0) + v2 + P2 * c2.offset, m2, r2 && r2.length && d2 ? d2[0] + P2 * c2.offset : 0), g2 = !c2.axisLine || g2.offset ? 0 : 2 * Math.floor(c2.axisLine.strokeWidth() / 2), a3[l2] = Math.max(a3[l2], g2));
              q(this, "afterGetOffset");
            };
            a2.prototype.getLinePath = function(b2) {
              var c2 = this.chart, a3 = this.opposite, d2 = this.offset, g2 = this.horiz, e2 = this.left + (a3 ? this.width : 0) + d2;
              d2 = c2.chartHeight - this.bottom - (a3 ? this.height : 0) + d2;
              a3 && (b2 *= -1);
              return c2.renderer.crispLine([["M", g2 ? this.left : e2, g2 ? d2 : this.top], ["L", g2 ? c2.chartWidth - this.right : e2, g2 ? d2 : c2.chartHeight - this.bottom]], b2);
            };
            a2.prototype.renderLine = function() {
              this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.chart.styledMode || this.axisLine.attr({ stroke: this.options.lineColor, "stroke-width": this.options.lineWidth, zIndex: 7 }));
            };
            a2.prototype.getTitlePosition = function() {
              var b2 = this.horiz, c2 = this.left, a3 = this.top, d2 = this.len, g2 = this.options.title, e2 = b2 ? c2 : a3, k2 = this.opposite, r2 = this.offset, h2 = g2.x, f3 = g2.y, x2 = this.axisTitle, l2 = this.chart.renderer.fontMetrics(g2.style.fontSize, x2);
              x2 = Math.max(x2.getBBox(null, 0).height - l2.h - 1, 0);
              d2 = { low: e2 + (b2 ? 0 : d2), middle: e2 + d2 / 2, high: e2 + (b2 ? d2 : 0) }[g2.align];
              c2 = (b2 ? a3 + this.height : c2) + (b2 ? 1 : -1) * (k2 ? -1 : 1) * this.axisTitleMargin + [-x2, x2, l2.f, -x2][this.side];
              b2 = { x: b2 ? d2 + h2 : c2 + (k2 ? this.width : 0) + r2 + h2, y: b2 ? c2 + f3 - (k2 ? this.height : 0) + r2 : d2 + f3 };
              q(this, "afterGetTitlePosition", { titlePosition: b2 });
              return b2;
            };
            a2.prototype.renderMinorTick = function(b2, c2) {
              var a3 = this.minorTicks;
              a3[b2] || (a3[b2] = new I(this, b2, "minor"));
              c2 && a3[b2].isNew && a3[b2].render(null, true);
              a3[b2].render(null, false, 1);
            };
            a2.prototype.renderTick = function(b2, c2, a3) {
              var d2 = this.ticks;
              if (!this.isLinked || b2 >= this.min && b2 <= this.max || this.grid && this.grid.isColumn) d2[b2] || (d2[b2] = new I(this, b2)), a3 && d2[b2].isNew && d2[b2].render(c2, true, -1), d2[b2].render(c2);
            };
            a2.prototype.render = function() {
              var b2 = this, c2 = b2.chart, a3 = b2.logarithmic, d2 = b2.options, e2 = b2.isLinked, k2 = b2.tickPositions, r2 = b2.axisTitle, h2 = b2.ticks, f3 = b2.minorTicks, x2 = b2.alternateBands, l2 = d2.stackLabels, n2 = d2.alternateGridColor, m2 = b2.tickmarkOffset, p2 = b2.axisLine, t2 = b2.showAxis, K2 = z(c2.renderer.globalAnimation), A2, P2;
              b2.labelEdge.length = 0;
              b2.overlap = false;
              [h2, f3, x2].forEach(function(b3) {
                D(b3, function(b4) {
                  b4.isActive = false;
                });
              });
              if (b2.hasData() || e2) {
                var w2 = b2.chart.hasRendered && b2.old && g(b2.old.min);
                b2.minorTickInterval && !b2.categories && b2.getMinorTickPositions().forEach(function(c3) {
                  b2.renderMinorTick(c3, w2);
                });
                k2.length && (k2.forEach(function(c3, a4) {
                  b2.renderTick(c3, a4, w2);
                }), m2 && (0 === b2.min || b2.single) && (h2[-1] || (h2[-1] = new I(b2, -1, null, true)), h2[-1].render(-1)));
                n2 && k2.forEach(function(d3, g2) {
                  P2 = "undefined" !== typeof k2[g2 + 1] ? k2[g2 + 1] + m2 : b2.max - m2;
                  0 === g2 % 2 && d3 < b2.max && P2 <= b2.max + (c2.polar ? -m2 : m2) && (x2[d3] || (x2[d3] = new H.PlotLineOrBand(b2)), A2 = d3 + m2, x2[d3].options = { from: a3 ? a3.lin2log(A2) : A2, to: a3 ? a3.lin2log(P2) : P2, color: n2, className: "highcharts-alternate-grid" }, x2[d3].render(), x2[d3].isActive = true);
                });
                b2._addedPlotLB || (b2._addedPlotLB = true, (d2.plotLines || []).concat(d2.plotBands || []).forEach(function(c3) {
                  b2.addPlotBandOrLine(c3);
                }));
              }
              [h2, f3, x2].forEach(function(b3) {
                var a4 = [], d3 = K2.duration;
                D(b3, function(b4, c3) {
                  b4.isActive || (b4.render(c3, false, 0), b4.isActive = false, a4.push(c3));
                });
                W(function() {
                  for (var c3 = a4.length; c3--; ) b3[a4[c3]] && !b3[a4[c3]].isActive && (b3[a4[c3]].destroy(), delete b3[a4[c3]]);
                }, b3 !== x2 && c2.hasRendered && d3 ? d3 : 0);
              });
              p2 && (p2[p2.isPlaced ? "animate" : "attr"]({ d: this.getLinePath(p2.strokeWidth()) }), p2.isPlaced = true, p2[t2 ? "show" : "hide"](t2));
              r2 && t2 && (d2 = b2.getTitlePosition(), g(d2.y) ? (r2[r2.isNew ? "attr" : "animate"](d2), r2.isNew = false) : (r2.attr("y", -9999), r2.isNew = true));
              l2 && l2.enabled && b2.stacking && b2.stacking.renderStackTotals();
              b2.old = { len: b2.len, max: b2.max, min: b2.min, transA: b2.transA, userMax: b2.userMax, userMin: b2.userMin };
              b2.isDirty = false;
              q(this, "afterRender");
            };
            a2.prototype.redraw = function() {
              this.visible && (this.render(), this.plotLinesAndBands.forEach(function(b2) {
                b2.render();
              }));
              this.series.forEach(function(b2) {
                b2.isDirty = true;
              });
            };
            a2.prototype.getKeepProps = function() {
              return this.keepProps || a2.keepProps;
            };
            a2.prototype.destroy = function(b2) {
              var c2 = this, a3 = c2.plotLinesAndBands, d2 = this.eventOptions;
              q(this, "destroy", { keepEvents: b2 });
              b2 || Q(c2);
              [c2.ticks, c2.minorTicks, c2.alternateBands].forEach(function(b3) {
                v(b3);
              });
              if (a3) for (b2 = a3.length; b2--; ) a3[b2].destroy();
              "axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach(function(b3) {
                c2[b3] && (c2[b3] = c2[b3].destroy());
              });
              for (var g2 in c2.plotLinesAndBandsGroups) c2.plotLinesAndBandsGroups[g2] = c2.plotLinesAndBandsGroups[g2].destroy();
              D(c2, function(b3, a4) {
                -1 === c2.getKeepProps().indexOf(a4) && delete c2[a4];
              });
              this.eventOptions = d2;
            };
            a2.prototype.drawCrosshair = function(b2, c2) {
              var a3 = this.crosshair, d2 = K(a3 && a3.snap, true), g2 = this.chart, e2, k2 = this.cross;
              q(this, "drawCrosshair", { e: b2, point: c2 });
              b2 || (b2 = this.cross && this.cross.e);
              if (a3 && false !== (n(c2) || !d2)) {
                d2 ? n(c2) && (e2 = K("colorAxis" !== this.coll ? c2.crosshairPos : null, this.isXAxis ? c2.plotX : this.len - c2.plotY)) : e2 = b2 && (this.horiz ? b2.chartX - this.pos : this.len - b2.chartY + this.pos);
                if (n(e2)) {
                  var r2 = { value: c2 && (this.isXAxis ? c2.x : K(c2.stackY, c2.y)), translatedValue: e2 };
                  g2.polar && A(r2, { isCrosshair: true, chartX: b2 && b2.chartX, chartY: b2 && b2.chartY, point: c2 });
                  r2 = this.getPlotLinePath(r2) || null;
                }
                if (!n(r2)) {
                  this.hideCrosshair();
                  return;
                }
                d2 = this.categories && !this.isRadial;
                k2 || (this.cross = k2 = g2.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (d2 ? "category " : "thin ") + (a3.className || "")).attr({ zIndex: K(a3.zIndex, 2) }).add(), g2.styledMode || (k2.attr({ stroke: a3.color || (d2 ? C.parse("#ccd6eb").setOpacity(0.25).get() : "#cccccc"), "stroke-width": K(a3.width, 1) }).css({ "pointer-events": "none" }), a3.dashStyle && k2.attr({ dashstyle: a3.dashStyle })));
                k2.show().attr({ d: r2 });
                d2 && !a3.width && k2.attr({ "stroke-width": this.transA });
                this.cross.e = b2;
              } else this.hideCrosshair();
              q(this, "afterDrawCrosshair", { e: b2, point: c2 });
            };
            a2.prototype.hideCrosshair = function() {
              this.cross && this.cross.hide();
              q(this, "afterHideCrosshair");
            };
            a2.prototype.hasVerticalPanning = function() {
              var b2 = this.chart.options.chart.panning;
              return !!(b2 && b2.enabled && /y/.test(b2.type));
            };
            a2.prototype.validatePositiveValue = function(b2) {
              return g(b2) && 0 < b2;
            };
            a2.prototype.update = function(b2, c2) {
              var a3 = this.chart;
              b2 = r(this.userOptions, b2);
              this.destroy(true);
              this.init(a3, b2);
              a3.isDirtyBox = true;
              K(c2, true) && a3.redraw();
            };
            a2.prototype.remove = function(b2) {
              for (var c2 = this.chart, a3 = this.coll, d2 = this.series, g2 = d2.length; g2--; ) d2[g2] && d2[g2].remove(false);
              w(c2.axes, this);
              w(c2[a3], this);
              c2[a3].forEach(function(b3, c3) {
                b3.options.index = b3.userOptions.index = c3;
              });
              this.destroy();
              c2.isDirtyBox = true;
              K(b2, true) && c2.redraw();
            };
            a2.prototype.setTitle = function(b2, c2) {
              this.update({ title: b2 }, c2);
            };
            a2.prototype.setCategories = function(b2, c2) {
              this.update({ categories: b2 }, c2);
            };
            a2.defaultOptions = f2.defaultXAxisOptions;
            a2.keepProps = "extKey hcEvents names series userMax userMin".split(" ");
            return a2;
          }();
          "";
          return a;
        });
        M(f, "Core/Axis/DateTimeAxis.js", [f["Core/Utilities.js"]], function(a) {
          var f2 = a.addEvent, C = a.getMagnitude, G = a.normalizeTickInterval, u = a.timeUnits, H;
          (function(a2) {
            function B() {
              return this.chart.time.getTimeTicks.apply(this.chart.time, arguments);
            }
            function z(a3) {
              "datetime" !== a3.userOptions.type ? this.dateTime = void 0 : this.dateTime || (this.dateTime = new m(this));
            }
            var p = [];
            a2.compose = function(a3) {
              -1 === p.indexOf(a3) && (p.push(a3), a3.keepProps.push("dateTime"), a3.prototype.getTimeTicks = B, f2(a3, "init", z));
              return a3;
            };
            var m = function() {
              function a3(a4) {
                this.axis = a4;
              }
              a3.prototype.normalizeTimeTickInterval = function(a4, e) {
                var d = e || [
                  ["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
                  ["second", [1, 2, 5, 10, 15, 30]],
                  ["minute", [1, 2, 5, 10, 15, 30]],
                  ["hour", [1, 2, 3, 4, 6, 8, 12]],
                  ["day", [1, 2]],
                  ["week", [1, 2]],
                  ["month", [1, 2, 3, 4, 6]],
                  ["year", null]
                ];
                e = d[d.length - 1];
                var f3 = u[e[0]], l = e[1], m2;
                for (m2 = 0; m2 < d.length && !(e = d[m2], f3 = u[e[0]], l = e[1], d[m2 + 1] && a4 <= (f3 * l[l.length - 1] + u[d[m2 + 1][0]]) / 2); m2++) ;
                f3 === u.year && a4 < 5 * f3 && (l = [1, 2, 5]);
                a4 = G(a4 / f3, l, "year" === e[0] ? Math.max(C(a4 / f3), 1) : 1);
                return { unitRange: f3, count: a4, unitName: e[0] };
              };
              a3.prototype.getXDateFormat = function(a4, e) {
                var d = this.axis;
                return d.closestPointRange ? d.chart.time.getDateFormat(d.closestPointRange, a4, d.options.startOfWeek, e) || e.year : e.day;
              };
              return a3;
            }();
            a2.Additions = m;
          })(H || (H = {}));
          return H;
        });
        M(f, "Core/Axis/LogarithmicAxis.js", [f["Core/Utilities.js"]], function(a) {
          var f2 = a.addEvent, C = a.getMagnitude, G = a.normalizeTickInterval, u = a.pick, H;
          (function(a2) {
            function B(a3) {
              var d = this.logarithmic;
              "logarithmic" !== a3.userOptions.type ? this.logarithmic = void 0 : d || (this.logarithmic = new m(this));
            }
            function z() {
              var a3 = this.logarithmic;
              a3 && (this.lin2val = function(d) {
                return a3.lin2log(d);
              }, this.val2lin = function(d) {
                return a3.log2lin(d);
              });
            }
            var p = [];
            a2.compose = function(a3) {
              -1 === p.indexOf(a3) && (p.push(a3), a3.keepProps.push("logarithmic"), f2(a3, "init", B), f2(a3, "afterInit", z));
              return a3;
            };
            var m = function() {
              function a3(a4) {
                this.axis = a4;
              }
              a3.prototype.getLogTickPositions = function(a4, e, h, f3) {
                var d = this.axis, l = d.len, m2 = d.options, p2 = [];
                f3 || (this.minorAutoInterval = void 0);
                if (0.5 <= a4) a4 = Math.round(a4), p2 = d.getLinearTickPositions(a4, e, h);
                else if (0.08 <= a4) {
                  var t = Math.floor(e), q, k = m2 = void 0;
                  for (l = 0.3 < a4 ? [1, 2, 4] : 0.15 < a4 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; t < h + 1 && !k; t++) {
                    var c = l.length;
                    for (q = 0; q < c && !k; q++) {
                      var g = this.log2lin(this.lin2log(t) * l[q]);
                      g > e && (!f3 || m2 <= h) && "undefined" !== typeof m2 && p2.push(m2);
                      m2 > h && (k = true);
                      m2 = g;
                    }
                  }
                } else e = this.lin2log(e), h = this.lin2log(h), a4 = f3 ? d.getMinorTickInterval() : m2.tickInterval, a4 = u("auto" === a4 ? null : a4, this.minorAutoInterval, m2.tickPixelInterval / (f3 ? 5 : 1) * (h - e) / ((f3 ? l / d.tickPositions.length : l) || 1)), a4 = G(a4, void 0, C(a4)), p2 = d.getLinearTickPositions(a4, e, h).map(this.log2lin), f3 || (this.minorAutoInterval = a4 / 5);
                f3 || (d.tickInterval = a4);
                return p2;
              };
              a3.prototype.lin2log = function(a4) {
                return Math.pow(10, a4);
              };
              a3.prototype.log2lin = function(a4) {
                return Math.log(a4) / Math.LN10;
              };
              return a3;
            }();
            a2.Additions = m;
          })(H || (H = {}));
          return H;
        });
        M(f, "Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js", [f["Core/Utilities.js"]], function(a) {
          var f2 = a.erase, C = a.extend, G = a.isNumber, u;
          (function(a2) {
            var u2 = [], B;
            a2.compose = function(a3, f3) {
              B || (B = a3);
              -1 === u2.indexOf(f3) && (u2.push(f3), C(f3.prototype, z.prototype));
              return f3;
            };
            var z = function() {
              function a3() {
              }
              a3.prototype.getPlotBandPath = function(a4, e, d) {
                void 0 === d && (d = this.options);
                var f3 = this.getPlotLinePath({ value: e, force: true, acrossPanes: d.acrossPanes }), h = [], m = this.horiz;
                e = !G(this.min) || !G(this.max) || a4 < this.min && e < this.min || a4 > this.max && e > this.max;
                a4 = this.getPlotLinePath({ value: a4, force: true, acrossPanes: d.acrossPanes });
                d = 1;
                if (a4 && f3) {
                  if (e) {
                    var n = a4.toString() === f3.toString();
                    d = 0;
                  }
                  for (e = 0; e < a4.length; e += 2) {
                    var p = a4[e], w = a4[e + 1], y = f3[e], A = f3[e + 1];
                    "M" !== p[0] && "L" !== p[0] || "M" !== w[0] && "L" !== w[0] || "M" !== y[0] && "L" !== y[0] || "M" !== A[0] && "L" !== A[0] || (m && y[1] === p[1] ? (y[1] += d, A[1] += d) : m || y[2] !== p[2] || (y[2] += d, A[2] += d), h.push(["M", p[1], p[2]], ["L", w[1], w[2]], ["L", A[1], A[2]], ["L", y[1], y[2]], ["Z"]));
                    h.isFlat = n;
                  }
                }
                return h;
              };
              a3.prototype.addPlotBand = function(a4) {
                return this.addPlotBandOrLine(a4, "plotBands");
              };
              a3.prototype.addPlotLine = function(a4) {
                return this.addPlotBandOrLine(a4, "plotLines");
              };
              a3.prototype.addPlotBandOrLine = function(a4, e) {
                var d = this, f3 = this.userOptions, h = new B(this, a4);
                this.visible && (h = h.render());
                if (h) {
                  this._addedPlotLB || (this._addedPlotLB = true, (f3.plotLines || []).concat(f3.plotBands || []).forEach(function(a5) {
                    d.addPlotBandOrLine(a5);
                  }));
                  if (e) {
                    var m = f3[e] || [];
                    m.push(a4);
                    f3[e] = m;
                  }
                  this.plotLinesAndBands.push(h);
                }
                return h;
              };
              a3.prototype.removePlotBandOrLine = function(a4) {
                var e = this.plotLinesAndBands, d = this.options, l = this.userOptions;
                if (e) {
                  for (var h = e.length; h--; ) e[h].id === a4 && e[h].destroy();
                  [d.plotLines || [], l.plotLines || [], d.plotBands || [], l.plotBands || []].forEach(function(d2) {
                    for (h = d2.length; h--; ) (d2[h] || {}).id === a4 && f2(d2, d2[h]);
                  });
                }
              };
              a3.prototype.removePlotBand = function(a4) {
                this.removePlotBandOrLine(a4);
              };
              a3.prototype.removePlotLine = function(a4) {
                this.removePlotBandOrLine(a4);
              };
              return a3;
            }();
          })(u || (u = {}));
          return u;
        });
        M(
          f,
          "Core/Axis/PlotLineOrBand/PlotLineOrBand.js",
          [f["Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js"], f["Core/Utilities.js"]],
          function(a, f2) {
            var F = f2.arrayMax, G = f2.arrayMin, u = f2.defined, H = f2.destroyObjectProperties, I = f2.erase, B = f2.fireEvent, z = f2.merge, p = f2.objectEach, m = f2.pick;
            f2 = function() {
              function e(a2, e2) {
                this.axis = a2;
                e2 && (this.options = e2, this.id = e2.id);
              }
              e.compose = function(d) {
                return a.compose(e, d);
              };
              e.prototype.render = function() {
                B(this, "render");
                var a2 = this, e2 = a2.axis, f3 = e2.horiz, t = e2.logarithmic, n = a2.options, v = n.color, w = m(n.zIndex, 0), y = n.events, A = {}, q = e2.chart.renderer, k = n.label, c = a2.label, g = n.to, b = n.from, r = n.value, x = a2.svgElem, D = [], K = u(b) && u(g);
                D = u(r);
                var P = !x, Q = { "class": "highcharts-plot-" + (K ? "band " : "line ") + (n.className || "") }, O = K ? "bands" : "lines";
                t && (b = t.log2lin(b), g = t.log2lin(g), r = t.log2lin(r));
                e2.chart.styledMode || (D ? (Q.stroke = v || "#999999", Q["stroke-width"] = m(n.width, 1), n.dashStyle && (Q.dashstyle = n.dashStyle)) : K && (Q.fill = v || "#e6ebf5", n.borderWidth && (Q.stroke = n.borderColor, Q["stroke-width"] = n.borderWidth)));
                A.zIndex = w;
                O += "-" + w;
                (t = e2.plotLinesAndBandsGroups[O]) || (e2.plotLinesAndBandsGroups[O] = t = q.g("plot-" + O).attr(A).add());
                P && (a2.svgElem = x = q.path().attr(Q).add(t));
                if (D) D = e2.getPlotLinePath({ value: r, lineWidth: x.strokeWidth(), acrossPanes: n.acrossPanes });
                else if (K) D = e2.getPlotBandPath(b, g, n);
                else return;
                !a2.eventsAdded && y && (p(y, function(b2, c2) {
                  x.on(c2, function(b3) {
                    y[c2].apply(a2, [b3]);
                  });
                }), a2.eventsAdded = true);
                (P || !x.d) && D && D.length ? x.attr({ d: D }) : x && (D ? (x.show(true), x.animate({ d: D })) : x.d && (x.hide(), c && (a2.label = c = c.destroy())));
                k && (u(k.text) || u(k.formatter)) && D && D.length && 0 < e2.width && 0 < e2.height && !D.isFlat ? (k = z({ align: f3 && K && "center", x: f3 ? !K && 4 : 10, verticalAlign: !f3 && K && "middle", y: f3 ? K ? 16 : 10 : K ? 6 : -4, rotation: f3 && !K && 90 }, k), this.renderLabel(k, D, K, w)) : c && c.hide();
                return a2;
              };
              e.prototype.renderLabel = function(a2, e2, f3, m2) {
                var d = this.axis, h = d.chart.renderer, l = this.label;
                l || (this.label = l = h.text(this.getLabelText(a2), 0, 0, a2.useHTML).attr({ align: a2.textAlign || a2.align, rotation: a2.rotation, "class": "highcharts-plot-" + (f3 ? "band" : "line") + "-label " + (a2.className || ""), zIndex: m2 }).add(), d.chart.styledMode || l.css(z(
                  { textOverflow: "ellipsis" },
                  a2.style
                )));
                m2 = e2.xBounds || [e2[0][1], e2[1][1], f3 ? e2[2][1] : e2[0][1]];
                e2 = e2.yBounds || [e2[0][2], e2[1][2], f3 ? e2[2][2] : e2[0][2]];
                f3 = G(m2);
                h = G(e2);
                l.align(a2, false, { x: f3, y: h, width: F(m2) - f3, height: F(e2) - h });
                l.alignValue && "left" !== l.alignValue || l.css({ width: (90 === l.rotation ? d.height - (l.alignAttr.y - d.top) : d.width - (l.alignAttr.x - d.left)) + "px" });
                l.show(true);
              };
              e.prototype.getLabelText = function(a2) {
                return u(a2.formatter) ? a2.formatter.call(this) : a2.text;
              };
              e.prototype.destroy = function() {
                I(this.axis.plotLinesAndBands, this);
                delete this.axis;
                H(this);
              };
              return e;
            }();
            "";
            "";
            return f2;
          }
        );
        M(f, "Core/Tooltip.js", [f["Core/FormatUtilities.js"], f["Core/Globals.js"], f["Core/Renderer/RendererUtilities.js"], f["Core/Renderer/RendererRegistry.js"], f["Core/Utilities.js"]], function(a, f2, C, G, u) {
          var F = a.format, I = f2.doc, B = C.distribute, z = u.addEvent, p = u.clamp, m = u.css, e = u.defined, d = u.discardElement, l = u.extend, h = u.fireEvent, t = u.isArray, n = u.isNumber, v = u.isString, w = u.merge, y = u.pick, A = u.splat, q = u.syncTimeout;
          a = function() {
            function a2(c, a3) {
              this.allowShared = true;
              this.container = void 0;
              this.crosshairs = [];
              this.distance = 0;
              this.isHidden = true;
              this.isSticky = false;
              this.now = {};
              this.options = {};
              this.outside = false;
              this.chart = c;
              this.init(c, a3);
            }
            a2.prototype.applyFilter = function() {
              var c = this.chart;
              c.renderer.definition({ tagName: "filter", attributes: { id: "drop-shadow-" + c.index, opacity: 0.5 }, children: [
                { tagName: "feGaussianBlur", attributes: { "in": "SourceAlpha", stdDeviation: 1 } },
                { tagName: "feOffset", attributes: { dx: 1, dy: 1 } },
                { tagName: "feComponentTransfer", children: [{ tagName: "feFuncA", attributes: { type: "linear", slope: 0.3 } }] },
                { tagName: "feMerge", children: [{ tagName: "feMergeNode" }, { tagName: "feMergeNode", attributes: { "in": "SourceGraphic" } }] }
              ] });
            };
            a2.prototype.bodyFormatter = function(c) {
              return c.map(function(c2) {
                var b = c2.series.tooltipOptions;
                return (b[(c2.point.formatPrefix || "point") + "Formatter"] || c2.point.tooltipFormatter).call(c2.point, b[(c2.point.formatPrefix || "point") + "Format"] || "");
              });
            };
            a2.prototype.cleanSplit = function(c) {
              this.chart.series.forEach(function(a3) {
                var b = a3 && a3.tt;
                b && (!b.isActive || c ? a3.tt = b.destroy() : b.isActive = false);
              });
            };
            a2.prototype.defaultFormatter = function(c) {
              var a3 = this.points || A(this);
              var b = [c.tooltipFooterHeaderFormatter(a3[0])];
              b = b.concat(c.bodyFormatter(a3));
              b.push(c.tooltipFooterHeaderFormatter(a3[0], true));
              return b;
            };
            a2.prototype.destroy = function() {
              this.label && (this.label = this.label.destroy());
              this.split && this.tt && (this.cleanSplit(true), this.tt = this.tt.destroy());
              this.renderer && (this.renderer = this.renderer.destroy(), d(this.container));
              u.clearTimeout(this.hideTimer);
              u.clearTimeout(this.tooltipTimeout);
            };
            a2.prototype.getAnchor = function(c, a3) {
              var b = this.chart, d2 = b.pointer, g = b.inverted, e2 = b.plotTop, k = b.plotLeft, f3, h2, q2 = 0, l2 = 0;
              c = A(c);
              this.followPointer && a3 ? ("undefined" === typeof a3.chartX && (a3 = d2.normalize(a3)), d2 = [a3.chartX - k, a3.chartY - e2]) : c[0].tooltipPos ? d2 = c[0].tooltipPos : (c.forEach(function(c2) {
                f3 = c2.series.yAxis;
                h2 = c2.series.xAxis;
                q2 += c2.plotX || 0;
                l2 += c2.plotLow ? (c2.plotLow + (c2.plotHigh || 0)) / 2 : c2.plotY || 0;
                h2 && f3 && (g ? (q2 += e2 + b.plotHeight - h2.len - h2.pos, l2 += k + b.plotWidth - f3.len - f3.pos) : (q2 += h2.pos - k, l2 += f3.pos - e2));
              }), q2 /= c.length, l2 /= c.length, d2 = [g ? b.plotWidth - l2 : q2, g ? b.plotHeight - q2 : l2], this.shared && 1 < c.length && a3 && (g ? d2[0] = a3.chartX - k : d2[1] = a3.chartY - e2));
              return d2.map(Math.round);
            };
            a2.prototype.getLabel = function() {
              var c = this, a3 = this.chart.styledMode, b = this.options, d2 = this.split && this.allowShared, k = "tooltip" + (e(b.className) ? " " + b.className : ""), h2 = b.style.pointerEvents || (!this.followPointer && b.stickOnContact ? "auto" : "none"), q2 = function() {
                c.inContact = true;
              }, l2 = function(b2) {
                var a4 = c.chart.hoverSeries;
                c.inContact = c.shouldStickOnContact() && c.chart.pointer.inClass(b2.relatedTarget, "highcharts-tooltip");
                if (!c.inContact && a4 && a4.onMouseOut) a4.onMouseOut();
              }, n2, p2 = this.chart.renderer;
              if (c.label) {
                var t2 = !c.label.hasClass("highcharts-label");
                (d2 && !t2 || !d2 && t2) && c.destroy();
              }
              if (!this.label) {
                if (this.outside) {
                  t2 = this.chart.options.chart.style;
                  var A2 = G.getRendererType();
                  this.container = n2 = f2.doc.createElement("div");
                  n2.className = "highcharts-tooltip-container";
                  m(n2, { position: "absolute", top: "1px", pointerEvents: h2, zIndex: Math.max(this.options.style.zIndex || 0, (t2 && t2.zIndex || 0) + 3) });
                  z(n2, "mouseenter", q2);
                  z(n2, "mouseleave", l2);
                  f2.doc.body.appendChild(n2);
                  this.renderer = p2 = new A2(n2, 0, 0, t2, void 0, void 0, p2.styledMode);
                }
                d2 ? this.label = p2.g(k) : (this.label = p2.label("", 0, 0, b.shape, void 0, void 0, b.useHTML, void 0, k).attr({ padding: b.padding, r: b.borderRadius }), a3 || this.label.attr({ fill: b.backgroundColor, "stroke-width": b.borderWidth }).css(b.style).css({ pointerEvents: h2 }).shadow(b.shadow));
                a3 && b.shadow && (this.applyFilter(), this.label.attr({ filter: "url(#drop-shadow-" + this.chart.index + ")" }));
                if (c.outside && !c.split) {
                  var w2 = this.label, y2 = w2.xSetter, v2 = w2.ySetter;
                  w2.xSetter = function(b2) {
                    y2.call(
                      w2,
                      c.distance
                    );
                    n2.style.left = b2 + "px";
                  };
                  w2.ySetter = function(b2) {
                    v2.call(w2, c.distance);
                    n2.style.top = b2 + "px";
                  };
                }
                this.label.on("mouseenter", q2).on("mouseleave", l2).attr({ zIndex: 8 }).add();
              }
              return this.label;
            };
            a2.prototype.getPosition = function(c, a3, b) {
              var d2 = this.chart, g = this.distance, e2 = {}, k = d2.inverted && b.h || 0, f3 = this.outside, h2 = f3 ? I.documentElement.clientWidth - 2 * g : d2.chartWidth, q2 = f3 ? Math.max(I.body.scrollHeight, I.documentElement.scrollHeight, I.body.offsetHeight, I.documentElement.offsetHeight, I.documentElement.clientHeight) : d2.chartHeight, l2 = d2.pointer.getChartPosition(), m2 = function(e3) {
                var k2 = "x" === e3;
                return [e3, k2 ? h2 : q2, k2 ? c : a3].concat(f3 ? [k2 ? c * l2.scaleX : a3 * l2.scaleY, k2 ? l2.left - g + (b.plotX + d2.plotLeft) * l2.scaleX : l2.top - g + (b.plotY + d2.plotTop) * l2.scaleY, 0, k2 ? h2 : q2] : [k2 ? c : a3, k2 ? b.plotX + d2.plotLeft : b.plotY + d2.plotTop, k2 ? d2.plotLeft : d2.plotTop, k2 ? d2.plotLeft + d2.plotWidth : d2.plotTop + d2.plotHeight]);
              }, n2 = m2("y"), p2 = m2("x"), t2;
              m2 = !!b.negative;
              !d2.polar && d2.hoverSeries && d2.hoverSeries.yAxis && d2.hoverSeries.yAxis.reversed && (m2 = !m2);
              var A2 = !this.followPointer && y(b.ttBelow, !d2.inverted === m2), w2 = function(b2, c2, a4, d3, r, h3, q3) {
                var x = f3 ? "y" === b2 ? g * l2.scaleY : g * l2.scaleX : g, m3 = (a4 - d3) / 2, E2 = d3 < r - g, n3 = r + g + d3 < c2, D = r - x - a4 + m3;
                r = r + x - m3;
                if (A2 && n3) e2[b2] = r;
                else if (!A2 && E2) e2[b2] = D;
                else if (E2) e2[b2] = Math.min(q3 - d3, 0 > D - k ? D : D - k);
                else if (n3) e2[b2] = Math.max(h3, r + k + a4 > c2 ? r : r + k);
                else return false;
              }, v2 = function(b2, c2, a4, d3, k2) {
                var r;
                k2 < g || k2 > c2 - g ? r = false : e2[b2] = k2 < a4 / 2 ? 1 : k2 > c2 - d3 / 2 ? c2 - d3 - 2 : k2 - a4 / 2;
                return r;
              }, E = function(b2) {
                var c2 = n2;
                n2 = p2;
                p2 = c2;
                t2 = b2;
              }, T = function() {
                false !== w2.apply(0, n2) ? false !== v2.apply(0, p2) || t2 || (E(true), T()) : t2 ? e2.x = e2.y = 0 : (E(true), T());
              };
              (d2.inverted || 1 < this.len) && E();
              T();
              return e2;
            };
            a2.prototype.hide = function(c) {
              var a3 = this;
              u.clearTimeout(this.hideTimer);
              c = y(c, this.options.hideDelay);
              this.isHidden || (this.hideTimer = q(function() {
                a3.getLabel().fadeOut(c ? void 0 : c);
                a3.isHidden = true;
              }, c));
            };
            a2.prototype.init = function(c, a3) {
              this.chart = c;
              this.options = a3;
              this.crosshairs = [];
              this.now = { x: 0, y: 0 };
              this.isHidden = true;
              this.split = a3.split && !c.inverted && !c.polar;
              this.shared = a3.shared || this.split;
              this.outside = y(a3.outside, !(!c.scrollablePixelsX && !c.scrollablePixelsY));
            };
            a2.prototype.shouldStickOnContact = function() {
              return !(this.followPointer || !this.options.stickOnContact);
            };
            a2.prototype.isStickyOnContact = function() {
              return !(!this.shouldStickOnContact() || !this.inContact);
            };
            a2.prototype.move = function(c, a3, b, d2) {
              var g = this, e2 = g.now, k = false !== g.options.animation && !g.isHidden && (1 < Math.abs(c - e2.x) || 1 < Math.abs(a3 - e2.y)), r = g.followPointer || 1 < g.len;
              l(e2, { x: k ? (2 * e2.x + c) / 3 : c, y: k ? (e2.y + a3) / 2 : a3, anchorX: r ? void 0 : k ? (2 * e2.anchorX + b) / 3 : b, anchorY: r ? void 0 : k ? (e2.anchorY + d2) / 2 : d2 });
              g.getLabel().attr(e2);
              g.drawTracker();
              k && (u.clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function() {
                g && g.move(c, a3, b, d2);
              }, 32));
            };
            a2.prototype.refresh = function(c, a3) {
              var b = this.chart, d2 = this.options, g = A(c), e2 = g[0], k = [], f3 = d2.formatter || this.defaultFormatter, q2 = this.shared, l2 = b.styledMode, m2 = {};
              if (d2.enabled && e2.series) {
                u.clearTimeout(this.hideTimer);
                this.allowShared = !(!t(c) && c.series && c.series.noSharedTooltip);
                this.followPointer = !this.split && e2.series.tooltipOptions.followPointer;
                c = this.getAnchor(c, a3);
                var n2 = c[0], p2 = c[1];
                q2 && this.allowShared ? (b.pointer.applyInactiveState(g), g.forEach(function(b2) {
                  b2.setState("hover");
                  k.push(b2.getLabelConfig());
                }), m2 = { x: e2.category, y: e2.y }, m2.points = k) : m2 = e2.getLabelConfig();
                this.len = k.length;
                f3 = f3.call(m2, this);
                q2 = e2.series;
                this.distance = y(q2.tooltipOptions.distance, 16);
                if (false === f3) this.hide();
                else {
                  if (this.split && this.allowShared) this.renderSplit(f3, g);
                  else {
                    var w2 = n2, v2 = p2;
                    a3 && b.pointer.isDirectTouch && (w2 = a3.chartX - b.plotLeft, v2 = a3.chartY - b.plotTop);
                    if (b.polar || false === q2.options.clip || g.some(function(b2) {
                      return b2.series.shouldShowTooltip(w2, v2);
                    })) a3 = this.getLabel(), d2.style.width && !l2 || a3.css({ width: this.chart.spacingBox.width + "px" }), a3.attr({ text: f3 && f3.join ? f3.join("") : f3 }), a3.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-" + y(e2.colorIndex, q2.colorIndex)), l2 || a3.attr({ stroke: d2.borderColor || e2.color || q2.color || "#666666" }), this.updatePosition({ plotX: n2, plotY: p2, negative: e2.negative, ttBelow: e2.ttBelow, h: c[2] || 0 });
                    else {
                      this.hide();
                      return;
                    }
                  }
                  this.isHidden && this.label && this.label.attr({ opacity: 1 }).show();
                  this.isHidden = false;
                }
                h(this, "refresh");
              }
            };
            a2.prototype.renderSplit = function(c, a3) {
              function b(b2, c2, a4, g2, e3) {
                void 0 === e3 && (e3 = true);
                a4 ? (c2 = X ? 0 : H, b2 = p(b2 - g2 / 2, N.left, N.right - g2 - (d2.outside ? S : 0))) : (c2 -= C2, b2 = e3 ? b2 - g2 - F2 : b2 + F2, b2 = p(b2, e3 ? b2 : N.left, N.right));
                return { x: b2, y: c2 };
              }
              var d2 = this, g = d2.chart, e2 = d2.chart, k = e2.chartWidth, f3 = e2.chartHeight, h2 = e2.plotHeight, q2 = e2.plotLeft, m2 = e2.plotTop, n2 = e2.pointer, t2 = e2.scrollablePixelsY;
              t2 = void 0 === t2 ? 0 : t2;
              var A2 = e2.scrollablePixelsX, w2 = e2.scrollingContainer;
              w2 = void 0 === w2 ? { scrollLeft: 0, scrollTop: 0 } : w2;
              var z2 = w2.scrollLeft;
              w2 = w2.scrollTop;
              var u2 = e2.styledMode, F2 = d2.distance, E = d2.options, T = d2.options.positioner, N = d2.outside && "number" !== typeof A2 ? I.documentElement.getBoundingClientRect() : { left: z2, right: z2 + k, top: w2, bottom: w2 + f3 }, U = d2.getLabel(), V = this.renderer || g.renderer, X = !(!g.xAxis[0] || !g.xAxis[0].opposite);
              g = n2.getChartPosition();
              var S = g.left;
              g = g.top;
              var C2 = m2 + w2, aa = 0, H = h2 - t2;
              v(c) && (c = [false, c]);
              c = c.slice(0, a3.length + 1).reduce(function(c2, g2, e3) {
                if (false !== g2 && "" !== g2) {
                  e3 = a3[e3 - 1] || { isHeader: true, plotX: a3[0].plotX, plotY: h2, series: {} };
                  var k2 = e3.isHeader, f4 = k2 ? d2 : e3.series;
                  g2 = g2.toString();
                  var r = f4.tt, l2 = e3.isHeader;
                  var x = e3.series;
                  var n3 = "highcharts-color-" + y(e3.colorIndex, x.colorIndex, "none");
                  r || (r = { padding: E.padding, r: E.borderRadius }, u2 || (r.fill = E.backgroundColor, r["stroke-width"] = E.borderWidth), r = V.label("", 0, 0, E[l2 ? "headerShape" : "shape"], void 0, void 0, E.useHTML).addClass((l2 ? "highcharts-tooltip-header " : "") + "highcharts-tooltip-box " + n3).attr(r).add(U));
                  r.isActive = true;
                  r.attr({ text: g2 });
                  u2 || r.css(E.style).shadow(E.shadow).attr({ stroke: E.borderColor || e3.color || x.color || "#333333" });
                  f4 = f4.tt = r;
                  l2 = f4.getBBox();
                  g2 = l2.width + f4.strokeWidth();
                  k2 && (aa = l2.height, H += aa, X && (C2 -= aa));
                  x = e3.plotX;
                  x = void 0 === x ? 0 : x;
                  n3 = e3.plotY;
                  n3 = void 0 === n3 ? 0 : n3;
                  r = e3.series;
                  if (e3.isHeader) {
                    x = q2 + x;
                    var D = m2 + h2 / 2;
                  } else {
                    var t3 = r.xAxis, A3 = r.yAxis;
                    x = t3.pos + p(x, -F2, t3.len + F2);
                    r.shouldShowTooltip(0, A3.pos - m2 + n3, { ignoreX: true }) && (D = A3.pos + n3);
                  }
                  x = p(x, N.left - F2, N.right + F2);
                  "number" === typeof D ? (l2 = l2.height + 1, n3 = T ? T.call(d2, g2, l2, e3) : b(x, D, k2, g2), c2.push({ align: T ? 0 : void 0, anchorX: x, anchorY: D, boxWidth: g2, point: e3, rank: y(n3.rank, k2 ? 1 : 0), size: l2, target: n3.y, tt: f4, x: n3.x })) : f4.isActive = false;
                }
                return c2;
              }, []);
              !T && c.some(function(b2) {
                var c2 = (d2.outside ? S : 0) + b2.anchorX;
                return c2 < N.left && c2 + b2.boxWidth < N.right ? true : c2 < S - N.left + b2.boxWidth && N.right - c2 > c2;
              }) && (c = c.map(function(c2) {
                var a4 = b(c2.anchorX, c2.anchorY, c2.point.isHeader, c2.boxWidth, false);
                return l(c2, { target: a4.y, x: a4.x });
              }));
              d2.cleanSplit();
              B(c, H);
              var G2 = S, ba = S;
              c.forEach(function(b2) {
                var c2 = b2.x, a4 = b2.boxWidth;
                b2 = b2.isHeader;
                b2 || (d2.outside && S + c2 < G2 && (G2 = S + c2), !b2 && d2.outside && G2 + a4 > ba && (ba = S + c2));
              });
              c.forEach(function(b2) {
                var c2 = b2.x, a4 = b2.anchorX, g2 = b2.pos, e3 = b2.point.isHeader;
                g2 = { visibility: "undefined" === typeof g2 ? "hidden" : "inherit", x: c2, y: g2 + C2, anchorX: a4, anchorY: b2.anchorY };
                if (d2.outside && c2 < a4) {
                  var k2 = S - G2;
                  0 < k2 && (e3 || (g2.x = c2 + k2, g2.anchorX = a4 + k2), e3 && (g2.x = (ba - G2) / 2, g2.anchorX = a4 + k2));
                }
                b2.tt.attr(g2);
              });
              c = d2.container;
              t2 = d2.renderer;
              d2.outside && c && t2 && (e2 = U.getBBox(), t2.setSize(e2.width + e2.x, e2.height + e2.y, false), c.style.left = G2 + "px", c.style.top = g + "px");
            };
            a2.prototype.drawTracker = function() {
              if (this.followPointer || !this.options.stickOnContact) this.tracker && this.tracker.destroy();
              else {
                var c = this.chart, a3 = this.label, b = this.shared ? c.hoverPoints : c.hoverPoint;
                if (a3 && b) {
                  var d2 = { x: 0, y: 0, width: 0, height: 0 };
                  b = this.getAnchor(b);
                  var e2 = a3.getBBox();
                  b[0] += c.plotLeft - a3.translateX;
                  b[1] += c.plotTop - a3.translateY;
                  d2.x = Math.min(0, b[0]);
                  d2.y = Math.min(0, b[1]);
                  d2.width = 0 > b[0] ? Math.max(Math.abs(b[0]), e2.width - b[0]) : Math.max(Math.abs(b[0]), e2.width);
                  d2.height = 0 > b[1] ? Math.max(Math.abs(b[1]), e2.height - Math.abs(b[1])) : Math.max(Math.abs(b[1]), e2.height);
                  this.tracker ? this.tracker.attr(d2) : (this.tracker = a3.renderer.rect(d2).addClass("highcharts-tracker").add(a3), c.styledMode || this.tracker.attr({ fill: "rgba(0,0,0,0)" }));
                }
              }
            };
            a2.prototype.styledModeFormat = function(c) {
              return c.replace('style="font-size: 10px"', 'class="highcharts-header"').replace(
                /style="color:{(point|series)\.color}"/g,
                'class="highcharts-color-{$1.colorIndex}"'
              );
            };
            a2.prototype.tooltipFooterHeaderFormatter = function(c, a3) {
              var b = c.series, d2 = b.tooltipOptions, g = b.xAxis, e2 = g && g.dateTime;
              g = { isFooter: a3, labelConfig: c };
              var k = d2.xDateFormat, f3 = d2[a3 ? "footerFormat" : "headerFormat"];
              h(this, "headerFormatter", g, function(a4) {
                e2 && !k && n(c.key) && (k = e2.getXDateFormat(c.key, d2.dateTimeLabelFormats));
                e2 && k && (c.point && c.point.tooltipDateKeys || ["key"]).forEach(function(b2) {
                  f3 = f3.replace("{point." + b2 + "}", "{point." + b2 + ":" + k + "}");
                });
                b.chart.styledMode && (f3 = this.styledModeFormat(f3));
                a4.text = F(f3, { point: c, series: b }, this.chart);
              });
              return g.text;
            };
            a2.prototype.update = function(c) {
              this.destroy();
              w(true, this.chart.options.tooltip.userOptions, c);
              this.init(this.chart, w(true, this.options, c));
            };
            a2.prototype.updatePosition = function(c) {
              var a3 = this.chart, b = this.options, d2 = a3.pointer, e2 = this.getLabel();
              d2 = d2.getChartPosition();
              var k = (b.positioner || this.getPosition).call(this, e2.width, e2.height, c), f3 = c.plotX + a3.plotLeft;
              c = c.plotY + a3.plotTop;
              if (this.outside) {
                b = b.borderWidth + 2 * this.distance;
                this.renderer.setSize(e2.width + b, e2.height + b, false);
                if (1 !== d2.scaleX || 1 !== d2.scaleY) m(this.container, { transform: "scale(" + d2.scaleX + ", " + d2.scaleY + ")" }), f3 *= d2.scaleX, c *= d2.scaleY;
                f3 += d2.left - k.x;
                c += d2.top - k.y;
              }
              this.move(Math.round(k.x), Math.round(k.y || 0), f3, c);
            };
            return a2;
          }();
          "";
          return a;
        });
        M(f, "Core/Series/Point.js", [f["Core/Renderer/HTML/AST.js"], f["Core/Animation/AnimationUtilities.js"], f["Core/DefaultOptions.js"], f["Core/FormatUtilities.js"], f["Core/Utilities.js"]], function(a, f2, C, G, u) {
          var F = f2.animObject, I = C.defaultOptions, B = G.format, z = u.addEvent, p = u.defined, m = u.erase, e = u.extend, d = u.fireEvent, l = u.getNestedProperty, h = u.isArray, t = u.isFunction, n = u.isNumber, v = u.isObject, w = u.merge, y = u.objectEach, A = u.pick, q = u.syncTimeout, k = u.removeEvent, c = u.uniqueKey;
          f2 = function() {
            function g() {
              this.colorIndex = this.category = void 0;
              this.formatPrefix = "point";
              this.id = void 0;
              this.isNull = false;
              this.percentage = this.options = this.name = void 0;
              this.selected = false;
              this.total = this.series = void 0;
              this.visible = true;
              this.x = void 0;
            }
            g.prototype.animateBeforeDestroy = function() {
              var b = this, c2 = { x: b.startXPos, opacity: 0 }, a2 = b.getGraphicalProps();
              a2.singular.forEach(function(a3) {
                b[a3] = b[a3].animate("dataLabel" === a3 ? { x: b[a3].startXPos, y: b[a3].startYPos, opacity: 0 } : c2);
              });
              a2.plural.forEach(function(c3) {
                b[c3].forEach(function(c4) {
                  c4.element && c4.animate(e({ x: b.startXPos }, c4.startYPos ? { x: c4.startXPos, y: c4.startYPos } : {}));
                });
              });
            };
            g.prototype.applyOptions = function(b, c2) {
              var a2 = this.series, d2 = a2.options.pointValKey || a2.pointValKey;
              b = g.prototype.optionsToObject.call(this, b);
              e(this, b);
              this.options = this.options ? e(
                this.options,
                b
              ) : b;
              b.group && delete this.group;
              b.dataLabels && delete this.dataLabels;
              d2 && (this.y = g.prototype.getNestedProperty.call(this, d2));
              this.formatPrefix = (this.isNull = A(this.isValid && !this.isValid(), null === this.x || !n(this.y))) ? "null" : "point";
              this.selected && (this.state = "select");
              "name" in this && "undefined" === typeof c2 && a2.xAxis && a2.xAxis.hasNames && (this.x = a2.xAxis.nameToX(this));
              "undefined" === typeof this.x && a2 ? this.x = "undefined" === typeof c2 ? a2.autoIncrement() : c2 : n(b.x) && a2.options.relativeXValue && (this.x = a2.autoIncrement(b.x));
              return this;
            };
            g.prototype.destroy = function() {
              function b() {
                if (c2.graphic || c2.dataLabel || c2.dataLabels) k(c2), c2.destroyElements();
                for (f3 in c2) c2[f3] = null;
              }
              var c2 = this, a2 = c2.series, d2 = a2.chart;
              a2 = a2.options.dataSorting;
              var g2 = d2.hoverPoints, e2 = F(c2.series.chart.renderer.globalAnimation), f3;
              c2.legendItem && d2.legend.destroyItem(c2);
              g2 && (c2.setState(), m(g2, c2), g2.length || (d2.hoverPoints = null));
              if (c2 === d2.hoverPoint) c2.onMouseOut();
              a2 && a2.enabled ? (this.animateBeforeDestroy(), q(b, e2.duration)) : b();
              d2.pointCount--;
            };
            g.prototype.destroyElements = function(b) {
              var c2 = this;
              b = c2.getGraphicalProps(b);
              b.singular.forEach(function(b2) {
                c2[b2] = c2[b2].destroy();
              });
              b.plural.forEach(function(b2) {
                c2[b2].forEach(function(b3) {
                  b3.element && b3.destroy();
                });
                delete c2[b2];
              });
            };
            g.prototype.firePointEvent = function(b, c2, a2) {
              var g2 = this, e2 = this.series.options;
              (e2.point.events[b] || g2.options && g2.options.events && g2.options.events[b]) && g2.importEvents();
              "click" === b && e2.allowPointSelect && (a2 = function(b2) {
                g2.select && g2.select(null, b2.ctrlKey || b2.metaKey || b2.shiftKey);
              });
              d(g2, b, c2, a2);
            };
            g.prototype.getClassName = function() {
              return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + ("undefined" !== typeof this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "");
            };
            g.prototype.getGraphicalProps = function(b) {
              var c2 = this, a2 = [], d2 = { singular: [], plural: [] }, g2;
              b = b || { graphic: 1, dataLabel: 1 };
              b.graphic && a2.push("graphic", "upperGraphic", "shadowGroup");
              b.dataLabel && a2.push("dataLabel", "dataLabelUpper", "connector");
              for (g2 = a2.length; g2--; ) {
                var e2 = a2[g2];
                c2[e2] && d2.singular.push(e2);
              }
              ["dataLabel", "connector"].forEach(function(a3) {
                var g3 = a3 + "s";
                b[a3] && c2[g3] && d2.plural.push(g3);
              });
              return d2;
            };
            g.prototype.getLabelConfig = function() {
              return { x: this.category, y: this.y, color: this.color, colorIndex: this.colorIndex, key: this.name || this.category, series: this.series, point: this, percentage: this.percentage, total: this.total || this.stackTotal };
            };
            g.prototype.getNestedProperty = function(b) {
              if (b) return 0 === b.indexOf("custom.") ? l(b, this.options) : this[b];
            };
            g.prototype.getZone = function() {
              var b = this.series, c2 = b.zones;
              b = b.zoneAxis || "y";
              var a2, d2 = 0;
              for (a2 = c2[d2]; this[b] >= a2.value; ) a2 = c2[++d2];
              this.nonZonedColor || (this.nonZonedColor = this.color);
              this.color = a2 && a2.color && !this.options.color ? a2.color : this.nonZonedColor;
              return a2;
            };
            g.prototype.hasNewShapeType = function() {
              return (this.graphic && (this.graphic.symbolName || this.graphic.element.nodeName)) !== this.shapeType;
            };
            g.prototype.init = function(b, a2, g2) {
              this.series = b;
              this.applyOptions(a2, g2);
              this.id = p(this.id) ? this.id : c();
              this.resolveColor();
              b.chart.pointCount++;
              d(this, "afterInit");
              return this;
            };
            g.prototype.optionsToObject = function(b) {
              var c2 = this.series, a2 = c2.options.keys, d2 = a2 || c2.pointArrayMap || ["y"], e2 = d2.length, k2 = {}, f3 = 0, q2 = 0;
              if (n(b) || null === b) k2[d2[0]] = b;
              else if (h(b)) for (!a2 && b.length > e2 && (c2 = typeof b[0], "string" === c2 ? k2.name = b[0] : "number" === c2 && (k2.x = b[0]), f3++); q2 < e2; ) a2 && "undefined" === typeof b[f3] || (0 < d2[q2].indexOf(".") ? g.prototype.setNestedProperty(
                k2,
                b[f3],
                d2[q2]
              ) : k2[d2[q2]] = b[f3]), f3++, q2++;
              else "object" === typeof b && (k2 = b, b.dataLabels && (c2._hasPointLabels = true), b.marker && (c2._hasPointMarkers = true));
              return k2;
            };
            g.prototype.resolveColor = function() {
              var b = this.series, c2 = b.chart.styledMode;
              var a2 = b.chart.options.chart.colorCount;
              delete this.nonZonedColor;
              if (b.options.colorByPoint) {
                if (!c2) {
                  a2 = b.options.colors || b.chart.options.colors;
                  var d2 = a2[b.colorCounter];
                  a2 = a2.length;
                }
                c2 = b.colorCounter;
                b.colorCounter++;
                b.colorCounter === a2 && (b.colorCounter = 0);
              } else c2 || (d2 = b.color), c2 = b.colorIndex;
              this.colorIndex = A(this.options.colorIndex, c2);
              this.color = A(this.options.color, d2);
            };
            g.prototype.setNestedProperty = function(b, c2, a2) {
              a2.split(".").reduce(function(b2, a3, d2, g2) {
                b2[a3] = g2.length - 1 === d2 ? c2 : v(b2[a3], true) ? b2[a3] : {};
                return b2[a3];
              }, b);
              return b;
            };
            g.prototype.tooltipFormatter = function(b) {
              var c2 = this.series, a2 = c2.tooltipOptions, d2 = A(a2.valueDecimals, ""), g2 = a2.valuePrefix || "", e2 = a2.valueSuffix || "";
              c2.chart.styledMode && (b = c2.chart.tooltip.styledModeFormat(b));
              (c2.pointArrayMap || ["y"]).forEach(function(c3) {
                c3 = "{point." + c3;
                if (g2 || e2) b = b.replace(RegExp(c3 + "}", "g"), g2 + c3 + "}" + e2);
                b = b.replace(RegExp(c3 + "}", "g"), c3 + ":,." + d2 + "f}");
              });
              return B(b, { point: this, series: this.series }, c2.chart);
            };
            g.prototype.update = function(b, c2, a2, d2) {
              function g2() {
                e2.applyOptions(b);
                var d3 = f3 && e2.hasDummyGraphic;
                d3 = null === e2.y ? !d3 : d3;
                f3 && d3 && (e2.graphic = f3.destroy(), delete e2.hasDummyGraphic);
                v(b, true) && (f3 && f3.element && b && b.marker && "undefined" !== typeof b.marker.symbol && (e2.graphic = f3.destroy()), b && b.dataLabels && e2.dataLabel && (e2.dataLabel = e2.dataLabel.destroy()), e2.connector && (e2.connector = e2.connector.destroy()));
                r = e2.index;
                k2.updateParallelArrays(e2, r);
                q2.data[r] = v(q2.data[r], true) || v(b, true) ? e2.options : A(b, q2.data[r]);
                k2.isDirty = k2.isDirtyData = true;
                !k2.fixedBox && k2.hasCartesianSeries && (h2.isDirtyBox = true);
                "point" === q2.legendType && (h2.isDirtyLegend = true);
                c2 && h2.redraw(a2);
              }
              var e2 = this, k2 = e2.series, f3 = e2.graphic, h2 = k2.chart, q2 = k2.options, r;
              c2 = A(c2, true);
              false === d2 ? g2() : e2.firePointEvent("update", { options: b }, g2);
            };
            g.prototype.remove = function(b, c2) {
              this.series.removePoint(this.series.data.indexOf(this), b, c2);
            };
            g.prototype.select = function(b, c2) {
              var a2 = this, d2 = a2.series, g2 = d2.chart;
              this.selectedStaging = b = A(b, !a2.selected);
              a2.firePointEvent(b ? "select" : "unselect", { accumulate: c2 }, function() {
                a2.selected = a2.options.selected = b;
                d2.options.data[d2.data.indexOf(a2)] = a2.options;
                a2.setState(b && "select");
                c2 || g2.getSelectedPoints().forEach(function(b2) {
                  var c3 = b2.series;
                  b2.selected && b2 !== a2 && (b2.selected = b2.options.selected = false, c3.options.data[c3.data.indexOf(b2)] = b2.options, b2.setState(g2.hoverPoints && c3.options.inactiveOtherPoints ? "inactive" : ""), b2.firePointEvent("unselect"));
                });
              });
              delete this.selectedStaging;
            };
            g.prototype.onMouseOver = function(b) {
              var c2 = this.series.chart, a2 = c2.pointer;
              b = b ? a2.normalize(b) : a2.getChartCoordinatesFromPoint(this, c2.inverted);
              a2.runPointActions(b, this);
            };
            g.prototype.onMouseOut = function() {
              var b = this.series.chart;
              this.firePointEvent("mouseOut");
              this.series.options.inactiveOtherPoints || (b.hoverPoints || []).forEach(function(b2) {
                b2.setState();
              });
              b.hoverPoints = b.hoverPoint = null;
            };
            g.prototype.importEvents = function() {
              if (!this.hasImportedEvents) {
                var b = this, c2 = w(b.series.options.point, b.options).events;
                b.events = c2;
                y(c2, function(c3, a2) {
                  t(c3) && z(b, a2, c3);
                });
                this.hasImportedEvents = true;
              }
            };
            g.prototype.setState = function(b, c2) {
              var g2 = this.series, k2 = this.state, f3 = g2.options.states[b || "normal"] || {}, h2 = I.plotOptions[g2.type].marker && g2.options.marker, q2 = h2 && false === h2.enabled, r = h2 && h2.states && h2.states[b || "normal"] || {}, l2 = false === r.enabled, m2 = this.marker || {}, p2 = g2.chart, t2 = h2 && g2.markerAttribs, w2 = g2.halo, y2, v2 = g2.stateMarkerGraphic;
              b = b || "";
              if (!(b === this.state && !c2 || this.selected && "select" !== b || false === f3.enabled || b && (l2 || q2 && false === r.enabled) || b && m2.states && m2.states[b] && false === m2.states[b].enabled)) {
                this.state = b;
                t2 && (y2 = g2.markerAttribs(this, b));
                if (this.graphic && !this.hasDummyGraphic) {
                  k2 && this.graphic.removeClass("highcharts-point-" + k2);
                  b && this.graphic.addClass("highcharts-point-" + b);
                  if (!p2.styledMode) {
                    var z2 = g2.pointAttribs(this, b);
                    var E = A(p2.options.chart.animation, f3.animation);
                    g2.options.inactiveOtherPoints && n(z2.opacity) && ((this.dataLabels || []).forEach(function(b2) {
                      b2 && b2.animate({ opacity: z2.opacity }, E);
                    }), this.connector && this.connector.animate(
                      { opacity: z2.opacity },
                      E
                    ));
                    this.graphic.animate(z2, E);
                  }
                  y2 && this.graphic.animate(y2, A(p2.options.chart.animation, r.animation, h2.animation));
                  v2 && v2.hide();
                } else {
                  if (b && r) {
                    k2 = m2.symbol || g2.symbol;
                    v2 && v2.currentSymbol !== k2 && (v2 = v2.destroy());
                    if (y2) if (v2) v2[c2 ? "animate" : "attr"]({ x: y2.x, y: y2.y });
                    else k2 && (g2.stateMarkerGraphic = v2 = p2.renderer.symbol(k2, y2.x, y2.y, y2.width, y2.height).add(g2.markerGroup), v2.currentSymbol = k2);
                    !p2.styledMode && v2 && "inactive" !== this.state && v2.attr(g2.pointAttribs(this, b));
                  }
                  v2 && (v2[b && this.isInside ? "show" : "hide"](), v2.element.point = this, v2.addClass(
                    this.getClassName(),
                    true
                  ));
                }
                f3 = f3.halo;
                y2 = (v2 = this.graphic || v2) && v2.visibility || "inherit";
                f3 && f3.size && v2 && "hidden" !== y2 && !this.isCluster ? (w2 || (g2.halo = w2 = p2.renderer.path().add(v2.parentGroup)), w2.show()[c2 ? "animate" : "attr"]({ d: this.haloPath(f3.size) }), w2.attr({ "class": "highcharts-halo highcharts-color-" + A(this.colorIndex, g2.colorIndex) + (this.className ? " " + this.className : ""), visibility: y2, zIndex: -1 }), w2.point = this, p2.styledMode || w2.attr(e({ fill: this.color || g2.color, "fill-opacity": f3.opacity }, a.filterUserAttributes(f3.attributes || {})))) : w2 && w2.point && w2.point.haloPath && w2.animate({ d: w2.point.haloPath(0) }, null, w2.hide);
                d(this, "afterSetState", { state: b });
              }
            };
            g.prototype.haloPath = function(b) {
              return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX) - b, this.plotY - b, 2 * b, 2 * b);
            };
            return g;
          }();
          "";
          return f2;
        });
        M(f, "Core/Pointer.js", [f["Core/Color/Color.js"], f["Core/Globals.js"], f["Core/Tooltip.js"], f["Core/Utilities.js"]], function(a, f2, C, G) {
          var u = a.parse, F = f2.charts, I = f2.noop, B = G.addEvent, z = G.attr, p = G.css, m = G.defined, e = G.extend, d = G.find, l = G.fireEvent, h = G.isNumber, t = G.isObject, n = G.objectEach, v = G.offset, w = G.pick, y = G.splat;
          a = function() {
            function a2(a3, d2) {
              this.lastValidTouch = {};
              this.pinchDown = [];
              this.runChartClick = false;
              this.eventsToUnbind = [];
              this.chart = a3;
              this.hasDragged = false;
              this.options = d2;
              this.init(a3, d2);
            }
            a2.prototype.applyInactiveState = function(a3) {
              var d2 = [], c;
              (a3 || []).forEach(function(a4) {
                c = a4.series;
                d2.push(c);
                c.linkedParent && d2.push(c.linkedParent);
                c.linkedSeries && (d2 = d2.concat(c.linkedSeries));
                c.navigatorSeries && d2.push(c.navigatorSeries);
              });
              this.chart.series.forEach(function(c2) {
                -1 === d2.indexOf(c2) ? c2.setState("inactive", true) : c2.options.inactiveOtherPoints && c2.setAllPointsToState("inactive");
              });
            };
            a2.prototype.destroy = function() {
              var d2 = this;
              this.eventsToUnbind.forEach(function(a3) {
                return a3();
              });
              this.eventsToUnbind = [];
              f2.chartCount || (a2.unbindDocumentMouseUp && (a2.unbindDocumentMouseUp = a2.unbindDocumentMouseUp()), a2.unbindDocumentTouchEnd && (a2.unbindDocumentTouchEnd = a2.unbindDocumentTouchEnd()));
              clearInterval(d2.tooltipTimeout);
              n(d2, function(a3, c) {
                d2[c] = void 0;
              });
            };
            a2.prototype.drag = function(a3) {
              var d2 = this.chart, c = d2.options.chart, g = this.zoomHor, b = this.zoomVert, e2 = d2.plotLeft, f3 = d2.plotTop, h2 = d2.plotWidth, q = d2.plotHeight, l2 = this.mouseDownX || 0, m2 = this.mouseDownY || 0, n2 = t(c.panning) ? c.panning && c.panning.enabled : c.panning, p2 = c.panKey && a3[c.panKey + "Key"], w2 = a3.chartX, y2 = a3.chartY, v2 = this.selectionMarker;
              if (!v2 || !v2.touch) {
                if (w2 < e2 ? w2 = e2 : w2 > e2 + h2 && (w2 = e2 + h2), y2 < f3 ? y2 = f3 : y2 > f3 + q && (y2 = f3 + q), this.hasDragged = Math.sqrt(Math.pow(l2 - w2, 2) + Math.pow(m2 - y2, 2)), 10 < this.hasDragged) {
                  var A = d2.isInsidePlot(l2 - e2, m2 - f3, { visiblePlotOnly: true });
                  !d2.hasCartesianSeries && !d2.mapView || !this.zoomX && !this.zoomY || !A || p2 || v2 || (this.selectionMarker = v2 = d2.renderer.rect(e2, f3, g ? 1 : h2, b ? 1 : q, 0).attr({ "class": "highcharts-selection-marker", zIndex: 7 }).add(), d2.styledMode || v2.attr({ fill: c.selectionMarkerFill || u("#335cad").setOpacity(0.25).get() }));
                  v2 && g && (g = w2 - l2, v2.attr({ width: Math.abs(g), x: (0 < g ? 0 : g) + l2 }));
                  v2 && b && (g = y2 - m2, v2.attr({ height: Math.abs(g), y: (0 < g ? 0 : g) + m2 }));
                  A && !v2 && n2 && d2.pan(a3, c.panning);
                }
              }
            };
            a2.prototype.dragStart = function(a3) {
              var d2 = this.chart;
              d2.mouseIsDown = a3.type;
              d2.cancelClick = false;
              d2.mouseDownX = this.mouseDownX = a3.chartX;
              d2.mouseDownY = this.mouseDownY = a3.chartY;
            };
            a2.prototype.drop = function(a3) {
              var d2 = this, c = this.chart, g = this.hasPinched;
              if (this.selectionMarker) {
                var b = this.selectionMarker, f3 = b.attr ? b.attr("x") : b.x, q = b.attr ? b.attr("y") : b.y, n2 = b.attr ? b.attr("width") : b.width, t2 = b.attr ? b.attr("height") : b.height, w2 = { originalEvent: a3, xAxis: [], yAxis: [], x: f3, y: q, width: n2, height: t2 }, y2 = !!c.mapView;
                if (this.hasDragged || g) c.axes.forEach(function(b2) {
                  if (b2.zoomEnabled && m(b2.min) && (g || d2[{ xAxis: "zoomX", yAxis: "zoomY" }[b2.coll]]) && h(f3) && h(q)) {
                    var c2 = b2.horiz, e2 = "touchend" === a3.type ? b2.minPixelPadding : 0, k = b2.toValue((c2 ? f3 : q) + e2);
                    c2 = b2.toValue((c2 ? f3 + n2 : q + t2) - e2);
                    w2[b2.coll].push({ axis: b2, min: Math.min(k, c2), max: Math.max(k, c2) });
                    y2 = true;
                  }
                }), y2 && l(c, "selection", w2, function(b2) {
                  c.zoom(e(b2, g ? { animation: false } : null));
                });
                h(c.index) && (this.selectionMarker = this.selectionMarker.destroy());
                g && this.scaleGroups();
              }
              c && h(c.index) && (p(c.container, { cursor: c._cursor }), c.cancelClick = 10 < this.hasDragged, c.mouseIsDown = this.hasDragged = this.hasPinched = false, this.pinchDown = []);
            };
            a2.prototype.findNearestKDPoint = function(a3, d2, c) {
              var g = this.chart, b = g.hoverPoint;
              g = g.tooltip;
              if (b && g && g.isStickyOnContact()) return b;
              var e2;
              a3.forEach(function(b2) {
                var a4 = !(b2.noSharedTooltip && d2) && 0 > b2.options.findNearestPointBy.indexOf("y");
                b2 = b2.searchPoint(c, a4);
                if ((a4 = t(b2, true) && b2.series) && !(a4 = !t(e2, true))) {
                  a4 = e2.distX - b2.distX;
                  var g2 = e2.dist - b2.dist, k = (b2.series.group && b2.series.group.zIndex) - (e2.series.group && e2.series.group.zIndex);
                  a4 = 0 < (0 !== a4 && d2 ? a4 : 0 !== g2 ? g2 : 0 !== k ? k : e2.series.index > b2.series.index ? -1 : 1);
                }
                a4 && (e2 = b2);
              });
              return e2;
            };
            a2.prototype.getChartCoordinatesFromPoint = function(a3, d2) {
              var c = a3.series, g = c.xAxis;
              c = c.yAxis;
              var b = a3.shapeArgs;
              if (g && c) {
                var e2 = w(a3.clientX, a3.plotX), k = a3.plotY || 0;
                a3.isNode && b && h(b.x) && h(b.y) && (e2 = b.x, k = b.y);
                return d2 ? { chartX: c.len + c.pos - k, chartY: g.len + g.pos - e2 } : { chartX: e2 + g.pos, chartY: k + c.pos };
              }
              if (b && b.x && b.y) return { chartX: b.x, chartY: b.y };
            };
            a2.prototype.getChartPosition = function() {
              if (this.chartPosition) return this.chartPosition;
              var a3 = this.chart.container, d2 = v(a3);
              this.chartPosition = { left: d2.left, top: d2.top, scaleX: 1, scaleY: 1 };
              var c = a3.offsetWidth;
              a3 = a3.offsetHeight;
              2 < c && 2 < a3 && (this.chartPosition.scaleX = d2.width / c, this.chartPosition.scaleY = d2.height / a3);
              return this.chartPosition;
            };
            a2.prototype.getCoordinates = function(a3) {
              var d2 = { xAxis: [], yAxis: [] };
              this.chart.axes.forEach(function(c) {
                d2[c.isXAxis ? "xAxis" : "yAxis"].push({ axis: c, value: c.toValue(a3[c.horiz ? "chartX" : "chartY"]) });
              });
              return d2;
            };
            a2.prototype.getHoverData = function(a3, e2, c, g, b, f3) {
              var k = [];
              g = !(!g || !a3);
              var h2 = { chartX: f3 ? f3.chartX : void 0, chartY: f3 ? f3.chartY : void 0, shared: b };
              l(this, "beforeGetHoverData", h2);
              var q = e2 && !e2.stickyTracking ? [e2] : c.filter(function(a4) {
                return h2.filter ? h2.filter(a4) : a4.visible && !(!b && a4.directTouch) && w(a4.options.enableMouseTracking, true) && a4.stickyTracking;
              });
              var r = g || !f3 ? a3 : this.findNearestKDPoint(q, b, f3);
              e2 = r && r.series;
              r && (b && !e2.noSharedTooltip ? (q = c.filter(function(a4) {
                return h2.filter ? h2.filter(a4) : a4.visible && !(!b && a4.directTouch) && w(a4.options.enableMouseTracking, true) && !a4.noSharedTooltip;
              }), q.forEach(function(b2) {
                var a4 = d(b2.points, function(b3) {
                  return b3.x === r.x && !b3.isNull;
                });
                t(a4) && (b2.chart.isBoosting && (a4 = b2.getPoint(a4)), k.push(a4));
              })) : k.push(r));
              h2 = { hoverPoint: r };
              l(this, "afterGetHoverData", h2);
              return { hoverPoint: h2.hoverPoint, hoverSeries: e2, hoverPoints: k };
            };
            a2.prototype.getPointFromEvent = function(a3) {
              a3 = a3.target;
              for (var d2; a3 && !d2; ) d2 = a3.point, a3 = a3.parentNode;
              return d2;
            };
            a2.prototype.onTrackerMouseOut = function(a3) {
              a3 = a3.relatedTarget || a3.toElement;
              var d2 = this.chart.hoverSeries;
              this.isDirectTouch = false;
              if (!(!d2 || !a3 || d2.stickyTracking || this.inClass(a3, "highcharts-tooltip") || this.inClass(a3, "highcharts-series-" + d2.index) && this.inClass(a3, "highcharts-tracker"))) d2.onMouseOut();
            };
            a2.prototype.inClass = function(a3, d2) {
              for (var c; a3; ) {
                if (c = z(a3, "class")) {
                  if (-1 !== c.indexOf(d2)) return true;
                  if (-1 !== c.indexOf("highcharts-container")) return false;
                }
                a3 = a3.parentElement;
              }
            };
            a2.prototype.init = function(a3, d2) {
              this.options = d2;
              this.chart = a3;
              this.runChartClick = !(!d2.chart.events || !d2.chart.events.click);
              this.pinchDown = [];
              this.lastValidTouch = {};
              C && (a3.tooltip = new C(a3, d2.tooltip), this.followTouchMove = w(d2.tooltip.followTouchMove, true));
              this.setDOMEvents();
            };
            a2.prototype.normalize = function(a3, d2) {
              var c = a3.touches, g = c ? c.length ? c.item(0) : w(c.changedTouches, a3.changedTouches)[0] : a3;
              d2 || (d2 = this.getChartPosition());
              c = g.pageX - d2.left;
              g = g.pageY - d2.top;
              c /= d2.scaleX;
              g /= d2.scaleY;
              return e(a3, { chartX: Math.round(c), chartY: Math.round(g) });
            };
            a2.prototype.onContainerClick = function(a3) {
              var d2 = this.chart, c = d2.hoverPoint;
              a3 = this.normalize(a3);
              var g = d2.plotLeft, b = d2.plotTop;
              d2.cancelClick || (c && this.inClass(a3.target, "highcharts-tracker") ? (l(c.series, "click", e(a3, { point: c })), d2.hoverPoint && c.firePointEvent("click", a3)) : (e(a3, this.getCoordinates(a3)), d2.isInsidePlot(a3.chartX - g, a3.chartY - b, { visiblePlotOnly: true }) && l(d2, "click", a3)));
            };
            a2.prototype.onContainerMouseDown = function(a3) {
              var d2 = 1 === ((a3.buttons || a3.button) & 1);
              a3 = this.normalize(a3);
              if (f2.isFirefox && 0 !== a3.button) this.onContainerMouseMove(a3);
              if ("undefined" === typeof a3.button || d2) this.zoomOption(a3), d2 && a3.preventDefault && a3.preventDefault(), this.dragStart(a3);
            };
            a2.prototype.onContainerMouseLeave = function(d2) {
              var e2 = F[w(a2.hoverChartIndex, -1)], c = this.chart.tooltip;
              c && c.shouldStickOnContact() && this.inClass(d2.relatedTarget, "highcharts-tooltip-container") || (d2 = this.normalize(d2), e2 && (d2.relatedTarget || d2.toElement) && (e2.pointer.reset(), e2.pointer.chartPosition = void 0), c && !c.isHidden && this.reset());
            };
            a2.prototype.onContainerMouseEnter = function(a3) {
              delete this.chartPosition;
            };
            a2.prototype.onContainerMouseMove = function(a3) {
              var d2 = this.chart;
              a3 = this.normalize(a3);
              this.setHoverChartIndex();
              a3.preventDefault || (a3.returnValue = false);
              ("mousedown" === d2.mouseIsDown || this.touchSelect(a3)) && this.drag(a3);
              d2.openMenu || !this.inClass(a3.target, "highcharts-tracker") && !d2.isInsidePlot(a3.chartX - d2.plotLeft, a3.chartY - d2.plotTop, { visiblePlotOnly: true }) || (this.inClass(a3.target, "highcharts-no-tooltip") ? this.reset(false, 0) : this.runPointActions(a3));
            };
            a2.prototype.onDocumentTouchEnd = function(d2) {
              var e2 = F[w(a2.hoverChartIndex, -1)];
              e2 && e2.pointer.drop(d2);
            };
            a2.prototype.onContainerTouchMove = function(a3) {
              if (this.touchSelect(a3)) this.onContainerMouseMove(a3);
              else this.touch(a3);
            };
            a2.prototype.onContainerTouchStart = function(a3) {
              if (this.touchSelect(a3)) this.onContainerMouseDown(a3);
              else this.zoomOption(a3), this.touch(a3, true);
            };
            a2.prototype.onDocumentMouseMove = function(a3) {
              var d2 = this.chart, c = this.chartPosition;
              a3 = this.normalize(a3, c);
              var g = d2.tooltip;
              !c || g && g.isStickyOnContact() || d2.isInsidePlot(a3.chartX - d2.plotLeft, a3.chartY - d2.plotTop, { visiblePlotOnly: true }) || this.inClass(a3.target, "highcharts-tracker") || this.reset();
            };
            a2.prototype.onDocumentMouseUp = function(d2) {
              var e2 = F[w(a2.hoverChartIndex, -1)];
              e2 && e2.pointer.drop(d2);
            };
            a2.prototype.pinch = function(a3) {
              var d2 = this, c = d2.chart, g = d2.pinchDown, b = a3.touches || [], f3 = b.length, h2 = d2.lastValidTouch, q = d2.hasZoom, m2 = {}, n2 = 1 === f3 && (d2.inClass(
                a3.target,
                "highcharts-tracker"
              ) && c.runTrackerClick || d2.runChartClick), p2 = {}, t2 = d2.selectionMarker;
              1 < f3 ? d2.initiated = true : 1 === f3 && this.followTouchMove && (d2.initiated = false);
              q && d2.initiated && !n2 && false !== a3.cancelable && a3.preventDefault();
              [].map.call(b, function(b2) {
                return d2.normalize(b2);
              });
              "touchstart" === a3.type ? ([].forEach.call(b, function(b2, a4) {
                g[a4] = { chartX: b2.chartX, chartY: b2.chartY };
              }), h2.x = [g[0].chartX, g[1] && g[1].chartX], h2.y = [g[0].chartY, g[1] && g[1].chartY], c.axes.forEach(function(b2) {
                if (b2.zoomEnabled) {
                  var a4 = c.bounds[b2.horiz ? "h" : "v"], d3 = b2.minPixelPadding, g2 = b2.toPixels(Math.min(w(b2.options.min, b2.dataMin), b2.dataMin)), e2 = b2.toPixels(Math.max(w(b2.options.max, b2.dataMax), b2.dataMax)), f4 = Math.max(g2, e2);
                  a4.min = Math.min(b2.pos, Math.min(g2, e2) - d3);
                  a4.max = Math.max(b2.pos + b2.len, f4 + d3);
                }
              }), d2.res = true) : d2.followTouchMove && 1 === f3 ? this.runPointActions(d2.normalize(a3)) : g.length && (l(c, "touchpan", { originalEvent: a3 }, function() {
                t2 || (d2.selectionMarker = t2 = e({ destroy: I, touch: true }, c.plotBox));
                d2.pinchTranslate(g, b, m2, t2, p2, h2);
                d2.hasPinched = q;
                d2.scaleGroups(m2, p2);
              }), d2.res && (d2.res = false, this.reset(
                false,
                0
              )));
            };
            a2.prototype.pinchTranslate = function(a3, d2, c, g, b, e2) {
              this.zoomHor && this.pinchTranslateDirection(true, a3, d2, c, g, b, e2);
              this.zoomVert && this.pinchTranslateDirection(false, a3, d2, c, g, b, e2);
            };
            a2.prototype.pinchTranslateDirection = function(a3, d2, c, g, b, e2, f3, h2) {
              var k = this.chart, r = a3 ? "x" : "y", l2 = a3 ? "X" : "Y", m2 = "chart" + l2, q = a3 ? "width" : "height", n2 = k["plot" + (a3 ? "Left" : "Top")], p2 = k.inverted, x = k.bounds[a3 ? "h" : "v"], t2 = 1 === d2.length, D = d2[0][m2], w2 = !t2 && d2[1][m2];
              d2 = function() {
                "number" === typeof A && 20 < Math.abs(D - w2) && (v2 = h2 || Math.abs(N - A) / Math.abs(D - w2));
                E = (n2 - N) / v2 + D;
                y2 = k["plot" + (a3 ? "Width" : "Height")] / v2;
              };
              var y2, E, v2 = h2 || 1, N = c[0][m2], A = !t2 && c[1][m2];
              d2();
              c = E;
              if (c < x.min) {
                c = x.min;
                var z2 = true;
              } else c + y2 > x.max && (c = x.max - y2, z2 = true);
              z2 ? (N -= 0.8 * (N - f3[r][0]), "number" === typeof A && (A -= 0.8 * (A - f3[r][1])), d2()) : f3[r] = [N, A];
              p2 || (e2[r] = E - n2, e2[q] = y2);
              e2 = p2 ? 1 / v2 : v2;
              b[q] = y2;
              b[r] = c;
              g[p2 ? a3 ? "scaleY" : "scaleX" : "scale" + l2] = v2;
              g["translate" + l2] = e2 * n2 + (N - e2 * D);
            };
            a2.prototype.reset = function(a3, d2) {
              var c = this.chart, g = c.hoverSeries, b = c.hoverPoint, e2 = c.hoverPoints, f3 = c.tooltip, k = f3 && f3.shared ? e2 : b;
              a3 && k && y(k).forEach(function(b2) {
                b2.series.isCartesian && "undefined" === typeof b2.plotX && (a3 = false);
              });
              if (a3) f3 && k && y(k).length && (f3.refresh(k), f3.shared && e2 ? e2.forEach(function(b2) {
                b2.setState(b2.state, true);
                b2.series.isCartesian && (b2.series.xAxis.crosshair && b2.series.xAxis.drawCrosshair(null, b2), b2.series.yAxis.crosshair && b2.series.yAxis.drawCrosshair(null, b2));
              }) : b && (b.setState(b.state, true), c.axes.forEach(function(a4) {
                a4.crosshair && b.series[a4.coll] === a4 && a4.drawCrosshair(null, b);
              })));
              else {
                if (b) b.onMouseOut();
                e2 && e2.forEach(function(b2) {
                  b2.setState();
                });
                if (g) g.onMouseOut();
                f3 && f3.hide(d2);
                this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove());
                c.axes.forEach(function(b2) {
                  b2.hideCrosshair();
                });
                this.hoverX = c.hoverPoints = c.hoverPoint = null;
              }
            };
            a2.prototype.runPointActions = function(e2, f3) {
              var c = this.chart, g = c.tooltip && c.tooltip.options.enabled ? c.tooltip : void 0, b = g ? g.shared : false, k = f3 || c.hoverPoint, h2 = k && k.series || c.hoverSeries;
              f3 = this.getHoverData(k, h2, c.series, (!e2 || "touchmove" !== e2.type) && (!!f3 || h2 && h2.directTouch && this.isDirectTouch), b, e2);
              k = f3.hoverPoint;
              h2 = f3.hoverSeries;
              var l2 = f3.hoverPoints;
              f3 = h2 && h2.tooltipOptions.followPointer && !h2.tooltipOptions.split;
              var m2 = b && h2 && !h2.noSharedTooltip;
              if (k && (k !== c.hoverPoint || g && g.isHidden)) {
                (c.hoverPoints || []).forEach(function(b2) {
                  -1 === l2.indexOf(b2) && b2.setState();
                });
                if (c.hoverSeries !== h2) h2.onMouseOver();
                this.applyInactiveState(l2);
                (l2 || []).forEach(function(b2) {
                  b2.setState("hover");
                });
                c.hoverPoint && c.hoverPoint.firePointEvent("mouseOut");
                if (!k.series) return;
                c.hoverPoints = l2;
                c.hoverPoint = k;
                k.firePointEvent("mouseOver", void 0, function() {
                  g && k && g.refresh(m2 ? l2 : k, e2);
                });
              } else f3 && g && !g.isHidden && (b = g.getAnchor([{}], e2), c.isInsidePlot(b[0], b[1], { visiblePlotOnly: true }) && g.updatePosition({ plotX: b[0], plotY: b[1] }));
              this.unDocMouseMove || (this.unDocMouseMove = B(c.container.ownerDocument, "mousemove", function(b2) {
                var c2 = F[a2.hoverChartIndex];
                if (c2) c2.pointer.onDocumentMouseMove(b2);
              }), this.eventsToUnbind.push(this.unDocMouseMove));
              c.axes.forEach(function(b2) {
                var a3 = w((b2.crosshair || {}).snap, true), g2;
                a3 && ((g2 = c.hoverPoint) && g2.series[b2.coll] === b2 || (g2 = d(l2, function(a4) {
                  return a4.series && a4.series[b2.coll] === b2;
                })));
                g2 || !a3 ? b2.drawCrosshair(e2, g2) : b2.hideCrosshair();
              });
            };
            a2.prototype.scaleGroups = function(a3, d2) {
              var c = this.chart;
              c.series.forEach(function(g) {
                var b = a3 || g.getPlotBox();
                g.group && (g.xAxis && g.xAxis.zoomEnabled || c.mapView) && (g.group.attr(b), g.markerGroup && (g.markerGroup.attr(b), g.markerGroup.clip(d2 ? c.clipRect : null)), g.dataLabelsGroup && g.dataLabelsGroup.attr(b));
              });
              c.clipRect.attr(d2 || c.clipBox);
            };
            a2.prototype.setDOMEvents = function() {
              var d2 = this, e2 = this.chart.container, c = e2.ownerDocument;
              e2.onmousedown = this.onContainerMouseDown.bind(this);
              e2.onmousemove = this.onContainerMouseMove.bind(this);
              e2.onclick = this.onContainerClick.bind(this);
              this.eventsToUnbind.push(B(e2, "mouseenter", this.onContainerMouseEnter.bind(this)));
              this.eventsToUnbind.push(B(e2, "mouseleave", this.onContainerMouseLeave.bind(this)));
              a2.unbindDocumentMouseUp || (a2.unbindDocumentMouseUp = B(c, "mouseup", this.onDocumentMouseUp.bind(this)));
              for (var g = this.chart.renderTo.parentElement; g && "BODY" !== g.tagName; ) this.eventsToUnbind.push(B(g, "scroll", function() {
                delete d2.chartPosition;
              })), g = g.parentElement;
              f2.hasTouch && (this.eventsToUnbind.push(B(e2, "touchstart", this.onContainerTouchStart.bind(this), { passive: false })), this.eventsToUnbind.push(B(e2, "touchmove", this.onContainerTouchMove.bind(this), { passive: false })), a2.unbindDocumentTouchEnd || (a2.unbindDocumentTouchEnd = B(c, "touchend", this.onDocumentTouchEnd.bind(this), { passive: false })));
            };
            a2.prototype.setHoverChartIndex = function() {
              var d2 = this.chart, e2 = f2.charts[w(a2.hoverChartIndex, -1)];
              if (e2 && e2 !== d2) e2.pointer.onContainerMouseLeave({ relatedTarget: d2.container });
              e2 && e2.mouseIsDown || (a2.hoverChartIndex = d2.index);
            };
            a2.prototype.touch = function(a3, d2) {
              var c = this.chart, e2;
              this.setHoverChartIndex();
              if (1 === a3.touches.length) if (a3 = this.normalize(a3), (e2 = c.isInsidePlot(a3.chartX - c.plotLeft, a3.chartY - c.plotTop, { visiblePlotOnly: true })) && !c.openMenu) {
                d2 && this.runPointActions(a3);
                if ("touchmove" === a3.type) {
                  d2 = this.pinchDown;
                  var b = d2[0] ? 4 <= Math.sqrt(Math.pow(d2[0].chartX - a3.chartX, 2) + Math.pow(d2[0].chartY - a3.chartY, 2)) : false;
                }
                w(b, true) && this.pinch(a3);
              } else d2 && this.reset();
              else 2 === a3.touches.length && this.pinch(a3);
            };
            a2.prototype.touchSelect = function(a3) {
              return !(!this.chart.options.chart.zoomBySingleTouch || !a3.touches || 1 !== a3.touches.length);
            };
            a2.prototype.zoomOption = function(a3) {
              var d2 = this.chart, c = d2.options.chart;
              d2 = d2.inverted;
              var e2 = c.zoomType || "";
              /touch/.test(a3.type) && (e2 = w(c.pinchType, e2));
              this.zoomX = a3 = /x/.test(e2);
              this.zoomY = c = /y/.test(e2);
              this.zoomHor = a3 && !d2 || c && d2;
              this.zoomVert = c && !d2 || a3 && d2;
              this.hasZoom = a3 || c;
            };
            return a2;
          }();
          "";
          return a;
        });
        M(
          f,
          "Core/MSPointer.js",
          [f["Core/Globals.js"], f["Core/Pointer.js"], f["Core/Utilities.js"]],
          function(a, f2, C) {
            function F() {
              var a2 = [];
              a2.item = function(a3) {
                return this[a3];
              };
              d(h, function(d2) {
                a2.push({ pageX: d2.pageX, pageY: d2.pageY, target: d2.target });
              });
              return a2;
            }
            function u(a2, d2, e2, h2) {
              var l2 = I[f2.hoverChartIndex || NaN];
              "touch" !== a2.pointerType && a2.pointerType !== a2.MSPOINTER_TYPE_TOUCH || !l2 || (l2 = l2.pointer, h2(a2), l2[d2]({ type: e2, target: a2.currentTarget, preventDefault: z, touches: F() }));
            }
            var H = this && this.__extends || /* @__PURE__ */ function() {
              var a2 = function(d2, e2) {
                a2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a3, d3) {
                  a3.__proto__ = d3;
                } || function(a3, d3) {
                  for (var e3 in d3) d3.hasOwnProperty(e3) && (a3[e3] = d3[e3]);
                };
                return a2(d2, e2);
              };
              return function(d2, e2) {
                function f3() {
                  this.constructor = d2;
                }
                a2(d2, e2);
                d2.prototype = null === e2 ? Object.create(e2) : (f3.prototype = e2.prototype, new f3());
              };
            }(), I = a.charts, B = a.doc, z = a.noop, p = a.win, m = C.addEvent, e = C.css, d = C.objectEach, l = C.removeEvent, h = {}, t = !!p.PointerEvent;
            return function(d2) {
              function f3() {
                return null !== d2 && d2.apply(this, arguments) || this;
              }
              H(f3, d2);
              f3.isRequired = function() {
                return !(a.hasTouch || !p.PointerEvent && !p.MSPointerEvent);
              };
              f3.prototype.batchMSEvents = function(a2) {
                a2(this.chart.container, t ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown);
                a2(this.chart.container, t ? "pointermove" : "MSPointerMove", this.onContainerPointerMove);
                a2(B, t ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp);
              };
              f3.prototype.destroy = function() {
                this.batchMSEvents(l);
                d2.prototype.destroy.call(this);
              };
              f3.prototype.init = function(a2, f4) {
                d2.prototype.init.call(this, a2, f4);
                this.hasZoom && e(a2.container, { "-ms-touch-action": "none", "touch-action": "none" });
              };
              f3.prototype.onContainerPointerDown = function(a2) {
                u(a2, "onContainerTouchStart", "touchstart", function(a3) {
                  h[a3.pointerId] = { pageX: a3.pageX, pageY: a3.pageY, target: a3.currentTarget };
                });
              };
              f3.prototype.onContainerPointerMove = function(a2) {
                u(a2, "onContainerTouchMove", "touchmove", function(a3) {
                  h[a3.pointerId] = { pageX: a3.pageX, pageY: a3.pageY };
                  h[a3.pointerId].target || (h[a3.pointerId].target = a3.currentTarget);
                });
              };
              f3.prototype.onDocumentPointerUp = function(a2) {
                u(a2, "onDocumentTouchEnd", "touchend", function(a3) {
                  delete h[a3.pointerId];
                });
              };
              f3.prototype.setDOMEvents = function() {
                d2.prototype.setDOMEvents.call(this);
                (this.hasZoom || this.followTouchMove) && this.batchMSEvents(m);
              };
              return f3;
            }(f2);
          }
        );
        M(f, "Core/Legend/Legend.js", [f["Core/Animation/AnimationUtilities.js"], f["Core/FormatUtilities.js"], f["Core/Globals.js"], f["Core/Series/Point.js"], f["Core/Renderer/RendererUtilities.js"], f["Core/Utilities.js"]], function(a, f2, C, G, u, H) {
          var F = a.animObject, B = a.setAnimation, z = f2.format;
          a = C.isFirefox;
          var p = C.marginNames;
          C = C.win;
          var m = u.distribute, e = H.addEvent, d = H.createElement, l = H.css, h = H.defined, t = H.discardElement, n = H.find, v = H.fireEvent, w = H.isNumber, y = H.merge, A = H.pick, q = H.relativeLength, k = H.stableSort, c = H.syncTimeout;
          u = H.wrap;
          H = function() {
            function a2(b, a3) {
              this.allItems = [];
              this.contentGroup = this.box = void 0;
              this.display = false;
              this.group = void 0;
              this.offsetWidth = this.maxLegendWidth = this.maxItemWidth = this.legendWidth = this.legendHeight = this.lastLineHeight = this.lastItemY = this.itemY = this.itemX = this.itemMarginTop = this.itemMarginBottom = this.itemHeight = this.initialItemY = 0;
              this.options = void 0;
              this.padding = 0;
              this.pages = [];
              this.proximate = false;
              this.scrollGroup = void 0;
              this.widthOption = this.totalItemWidth = this.titleHeight = this.symbolWidth = this.symbolHeight = 0;
              this.chart = b;
              this.init(b, a3);
            }
            a2.prototype.init = function(b, a3) {
              this.chart = b;
              this.setOptions(a3);
              a3.enabled && (this.render(), e(this.chart, "endResize", function() {
                this.legend.positionCheckboxes();
              }), this.proximate ? this.unchartrender = e(this.chart, "render", function() {
                this.legend.proximatePositions();
                this.legend.positionItems();
              }) : this.unchartrender && this.unchartrender());
            };
            a2.prototype.setOptions = function(b) {
              var a3 = A(
                b.padding,
                8
              );
              this.options = b;
              this.chart.styledMode || (this.itemStyle = b.itemStyle, this.itemHiddenStyle = y(this.itemStyle, b.itemHiddenStyle));
              this.itemMarginTop = b.itemMarginTop || 0;
              this.itemMarginBottom = b.itemMarginBottom || 0;
              this.padding = a3;
              this.initialItemY = a3 - 5;
              this.symbolWidth = A(b.symbolWidth, 16);
              this.pages = [];
              this.proximate = "proximate" === b.layout && !this.chart.inverted;
              this.baseline = void 0;
            };
            a2.prototype.update = function(b, a3) {
              var c2 = this.chart;
              this.setOptions(y(true, this.options, b));
              this.destroy();
              c2.isDirtyLegend = c2.isDirtyBox = true;
              A(a3, true) && c2.redraw();
              v(this, "afterUpdate");
            };
            a2.prototype.colorizeItem = function(b, a3) {
              b.legendGroup[a3 ? "removeClass" : "addClass"]("highcharts-legend-item-hidden");
              if (!this.chart.styledMode) {
                var c2 = this.options, d2 = b.legendItem, e2 = b.legendLine, g = b.legendSymbol, f3 = this.itemHiddenStyle.color;
                c2 = a3 ? c2.itemStyle.color : f3;
                var k2 = a3 ? b.color || f3 : f3, h2 = b.options && b.options.marker, l2 = { fill: k2 };
                d2 && d2.css({ fill: c2, color: c2 });
                e2 && e2.attr({ stroke: k2 });
                g && (h2 && g.isMarker && (l2 = b.pointAttribs(), a3 || (l2.stroke = l2.fill = f3)), g.attr(l2));
              }
              v(
                this,
                "afterColorizeItem",
                { item: b, visible: a3 }
              );
            };
            a2.prototype.positionItems = function() {
              this.allItems.forEach(this.positionItem, this);
              this.chart.isResizing || this.positionCheckboxes();
            };
            a2.prototype.positionItem = function(b) {
              var a3 = this, c2 = this.options, d2 = c2.symbolPadding, e2 = !c2.rtl, g = b._legendItemPos;
              c2 = g[0];
              g = g[1];
              var f3 = b.checkbox, k2 = b.legendGroup;
              k2 && k2.element && (d2 = { translateX: e2 ? c2 : this.legendWidth - c2 - 2 * d2 - 4, translateY: g }, e2 = function() {
                v(a3, "afterPositionItem", { item: b });
              }, h(k2.translateY) ? k2.animate(d2, void 0, e2) : (k2.attr(d2), e2()));
              f3 && (f3.x = c2, f3.y = g);
            };
            a2.prototype.destroyItem = function(b) {
              var a3 = b.checkbox;
              ["legendItem", "legendLine", "legendSymbol", "legendGroup"].forEach(function(a4) {
                b[a4] && (b[a4] = b[a4].destroy());
              });
              a3 && t(b.checkbox);
            };
            a2.prototype.destroy = function() {
              function b(b2) {
                this[b2] && (this[b2] = this[b2].destroy());
              }
              this.getAllItems().forEach(function(a3) {
                ["legendItem", "legendGroup"].forEach(b, a3);
              });
              "clipRect up down pager nav box title group".split(" ").forEach(b, this);
              this.display = null;
            };
            a2.prototype.positionCheckboxes = function() {
              var b = this.group && this.group.alignAttr, a3 = this.clipHeight || this.legendHeight, c2 = this.titleHeight;
              if (b) {
                var d2 = b.translateY;
                this.allItems.forEach(function(e2) {
                  var g = e2.checkbox;
                  if (g) {
                    var f3 = d2 + c2 + g.y + (this.scrollOffset || 0) + 3;
                    l(g, { left: b.translateX + e2.checkboxOffset + g.x - 20 + "px", top: f3 + "px", display: this.proximate || f3 > d2 - 6 && f3 < d2 + a3 - 6 ? "" : "none" });
                  }
                }, this);
              }
            };
            a2.prototype.renderTitle = function() {
              var b = this.options, a3 = this.padding, c2 = b.title, d2 = 0;
              c2.text && (this.title || (this.title = this.chart.renderer.label(c2.text, a3 - 3, a3 - 4, void 0, void 0, void 0, b.useHTML, void 0, "legend-title").attr({ zIndex: 1 }), this.chart.styledMode || this.title.css(c2.style), this.title.add(this.group)), c2.width || this.title.css({ width: this.maxLegendWidth + "px" }), b = this.title.getBBox(), d2 = b.height, this.offsetWidth = b.width, this.contentGroup.attr({ translateY: d2 }));
              this.titleHeight = d2;
            };
            a2.prototype.setText = function(b) {
              var a3 = this.options;
              b.legendItem.attr({ text: a3.labelFormat ? z(a3.labelFormat, b, this.chart) : a3.labelFormatter.call(b) });
            };
            a2.prototype.renderItem = function(b) {
              var a3 = this.chart, c2 = a3.renderer, d2 = this.options, e2 = this.symbolWidth, g = d2.symbolPadding || 0, f3 = this.itemStyle, k2 = this.itemHiddenStyle, h2 = "horizontal" === d2.layout ? A(d2.itemDistance, 20) : 0, l2 = !d2.rtl, m2 = !b.series, n2 = !m2 && b.series.drawLegendSymbol ? b.series : b, q2 = n2.options, p2 = this.createCheckboxForItem && q2 && q2.showCheckbox, t2 = d2.useHTML, w2 = b.options.className, E = b.legendItem;
              q2 = e2 + g + h2 + (p2 ? 20 : 0);
              E || (b.legendGroup = c2.g("legend-item").addClass("highcharts-" + n2.type + "-series highcharts-color-" + b.colorIndex + (w2 ? " " + w2 : "") + (m2 ? " highcharts-series-" + b.index : "")).attr({ zIndex: 1 }).add(this.scrollGroup), b.legendItem = E = c2.text(
                "",
                l2 ? e2 + g : -g,
                this.baseline || 0,
                t2
              ), a3.styledMode || E.css(y(b.visible ? f3 : k2)), E.attr({ align: l2 ? "left" : "right", zIndex: 2 }).add(b.legendGroup), this.baseline || (this.fontMetrics = c2.fontMetrics(a3.styledMode ? 12 : f3.fontSize, E), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, E.attr("y", this.baseline), this.symbolHeight = d2.symbolHeight || this.fontMetrics.f, d2.squareSymbol && (this.symbolWidth = A(d2.symbolWidth, Math.max(this.symbolHeight, 16)), q2 = this.symbolWidth + g + h2 + (p2 ? 20 : 0), l2 && E.attr("x", this.symbolWidth + g))), n2.drawLegendSymbol(
                this,
                b
              ), this.setItemEvents && this.setItemEvents(b, E, t2));
              p2 && !b.checkbox && this.createCheckboxForItem && this.createCheckboxForItem(b);
              this.colorizeItem(b, b.visible);
              !a3.styledMode && f3.width || E.css({ width: (d2.itemWidth || this.widthOption || a3.spacingBox.width) - q2 + "px" });
              this.setText(b);
              a3 = E.getBBox();
              c2 = this.fontMetrics && this.fontMetrics.h || 0;
              b.itemWidth = b.checkboxOffset = d2.itemWidth || b.legendItemWidth || a3.width + q2;
              this.maxItemWidth = Math.max(this.maxItemWidth, b.itemWidth);
              this.totalItemWidth += b.itemWidth;
              this.itemHeight = b.itemHeight = Math.round(b.legendItemHeight || (a3.height > 1.5 * c2 ? a3.height : c2));
            };
            a2.prototype.layoutItem = function(b) {
              var a3 = this.options, c2 = this.padding, d2 = "horizontal" === a3.layout, e2 = b.itemHeight, g = this.itemMarginBottom, f3 = this.itemMarginTop, k2 = d2 ? A(a3.itemDistance, 20) : 0, h2 = this.maxLegendWidth;
              a3 = a3.alignColumns && this.totalItemWidth > h2 ? this.maxItemWidth : b.itemWidth;
              d2 && this.itemX - c2 + a3 > h2 && (this.itemX = c2, this.lastLineHeight && (this.itemY += f3 + this.lastLineHeight + g), this.lastLineHeight = 0);
              this.lastItemY = f3 + this.itemY + g;
              this.lastLineHeight = Math.max(e2, this.lastLineHeight);
              b._legendItemPos = [this.itemX, this.itemY];
              d2 ? this.itemX += a3 : (this.itemY += f3 + e2 + g, this.lastLineHeight = e2);
              this.offsetWidth = this.widthOption || Math.max((d2 ? this.itemX - c2 - (b.checkbox ? 0 : k2) : a3) + c2, this.offsetWidth);
            };
            a2.prototype.getAllItems = function() {
              var b = [];
              this.chart.series.forEach(function(a3) {
                var c2 = a3 && a3.options;
                a3 && A(c2.showInLegend, h(c2.linkedTo) ? false : void 0, true) && (b = b.concat(a3.legendItems || ("point" === c2.legendType ? a3.data : a3)));
              });
              v(this, "afterGetAllItems", { allItems: b });
              return b;
            };
            a2.prototype.getAlignment = function() {
              var b = this.options;
              return this.proximate ? b.align.charAt(0) + "tv" : b.floating ? "" : b.align.charAt(0) + b.verticalAlign.charAt(0) + b.layout.charAt(0);
            };
            a2.prototype.adjustMargins = function(b, a3) {
              var c2 = this.chart, d2 = this.options, e2 = this.getAlignment();
              e2 && [/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/].forEach(function(g, f3) {
                g.test(e2) && !h(b[f3]) && (c2[p[f3]] = Math.max(c2[p[f3]], c2.legend[(f3 + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][f3] * d2[f3 % 2 ? "x" : "y"] + A(d2.margin, 12) + a3[f3] + (c2.titleOffset[f3] || 0)));
              });
            };
            a2.prototype.proximatePositions = function() {
              var b = this.chart, a3 = [], c2 = "left" === this.options.align;
              this.allItems.forEach(function(d2) {
                var e2;
                var g = c2;
                if (d2.yAxis) {
                  d2.xAxis.options.reversed && (g = !g);
                  d2.points && (e2 = n(g ? d2.points : d2.points.slice(0).reverse(), function(b2) {
                    return w(b2.plotY);
                  }));
                  g = this.itemMarginTop + d2.legendItem.getBBox().height + this.itemMarginBottom;
                  var f3 = d2.yAxis.top - b.plotTop;
                  d2.visible ? (e2 = e2 ? e2.plotY : d2.yAxis.height, e2 += f3 - 0.3 * g) : e2 = f3 + d2.yAxis.height;
                  a3.push({ target: e2, size: g, item: d2 });
                }
              }, this);
              m(a3, b.plotHeight).forEach(function(a4) {
                a4.item._legendItemPos && (a4.item._legendItemPos[1] = b.plotTop - b.spacing[0] + a4.pos);
              });
            };
            a2.prototype.render = function() {
              var b = this.chart, a3 = b.renderer, c2 = this.options, d2 = this.padding, e2 = this.getAllItems(), g = this.group, f3 = this.box;
              this.itemX = d2;
              this.itemY = this.initialItemY;
              this.lastItemY = this.offsetWidth = 0;
              this.widthOption = q(c2.width, b.spacingBox.width - d2);
              var h2 = b.spacingBox.width - 2 * d2 - c2.x;
              -1 < ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) && (h2 /= 2);
              this.maxLegendWidth = this.widthOption || h2;
              g || (this.group = g = a3.g("legend").addClass(c2.className || "").attr({ zIndex: 7 }).add(), this.contentGroup = a3.g().attr({ zIndex: 1 }).add(g), this.scrollGroup = a3.g().add(this.contentGroup));
              this.renderTitle();
              k(e2, function(b2, a4) {
                return (b2.options && b2.options.legendIndex || 0) - (a4.options && a4.options.legendIndex || 0);
              });
              c2.reversed && e2.reverse();
              this.allItems = e2;
              this.display = h2 = !!e2.length;
              this.itemHeight = this.totalItemWidth = this.maxItemWidth = this.lastLineHeight = 0;
              e2.forEach(this.renderItem, this);
              e2.forEach(this.layoutItem, this);
              e2 = (this.widthOption || this.offsetWidth) + d2;
              var l2 = this.lastItemY + this.lastLineHeight + this.titleHeight;
              l2 = this.handleOverflow(l2);
              l2 += d2;
              f3 || (this.box = f3 = a3.rect().addClass("highcharts-legend-box").attr({ r: c2.borderRadius }).add(g));
              b.styledMode || f3.attr({ stroke: c2.borderColor, "stroke-width": c2.borderWidth || 0, fill: c2.backgroundColor || "none" }).shadow(c2.shadow);
              if (0 < e2 && 0 < l2) f3[f3.placed ? "animate" : "attr"](f3.crisp.call({}, { x: 0, y: 0, width: e2, height: l2 }, f3.strokeWidth()));
              f3[h2 ? "show" : "hide"]();
              b.styledMode && "none" === g.getStyle("display") && (e2 = l2 = 0);
              this.legendWidth = e2;
              this.legendHeight = l2;
              h2 && this.align();
              this.proximate || this.positionItems();
              v(this, "afterRender");
            };
            a2.prototype.align = function(b) {
              void 0 === b && (b = this.chart.spacingBox);
              var a3 = this.chart, c2 = this.options, d2 = b.y;
              /(lth|ct|rth)/.test(this.getAlignment()) && 0 < a3.titleOffset[0] ? d2 += a3.titleOffset[0] : /(lbh|cb|rbh)/.test(this.getAlignment()) && 0 < a3.titleOffset[2] && (d2 -= a3.titleOffset[2]);
              d2 !== b.y && (b = y(b, { y: d2 }));
              a3.hasRendered || (this.group.placed = false);
              this.group.align(y(c2, { width: this.legendWidth, height: this.legendHeight, verticalAlign: this.proximate ? "top" : c2.verticalAlign }), true, b);
            };
            a2.prototype.handleOverflow = function(b) {
              var a3 = this, c2 = this.chart, d2 = c2.renderer, e2 = this.options, g = e2.y, f3 = "top" === e2.verticalAlign, k2 = this.padding, h2 = e2.maxHeight, l2 = e2.navigation, m2 = A(l2.animation, true), n2 = l2.arrowSize || 12, q2 = this.pages, p2 = this.allItems, t2 = function(b2) {
                "number" === typeof b2 ? v2.attr({ height: b2 }) : v2 && (a3.clipRect = v2.destroy(), a3.contentGroup.clip());
                a3.contentGroup.div && (a3.contentGroup.div.style.clip = b2 ? "rect(" + k2 + "px,9999px," + (k2 + b2) + "px,0)" : "auto");
              }, w2 = function(b2) {
                a3[b2] = d2.circle(0, 0, 1.3 * n2).translate(n2 / 2, n2 / 2).add(N);
                c2.styledMode || a3[b2].attr("fill", "rgba(0,0,0,0.0001)");
                return a3[b2];
              }, E, y2;
              g = c2.spacingBox.height + (f3 ? -g : g) - k2;
              var N = this.nav, v2 = this.clipRect;
              "horizontal" !== e2.layout || "middle" === e2.verticalAlign || e2.floating || (g /= 2);
              h2 && (g = Math.min(g, h2));
              q2.length = 0;
              b && 0 < g && b > g && false !== l2.enabled ? (this.clipHeight = E = Math.max(g - 20 - this.titleHeight - k2, 0), this.currentPage = A(this.currentPage, 1), this.fullHeight = b, p2.forEach(function(b2, a4) {
                var c3 = b2._legendItemPos[1], d3 = Math.round(b2.legendItem.getBBox().height), e3 = q2.length;
                if (!e3 || c3 - q2[e3 - 1] > E && (y2 || c3) !== q2[e3 - 1]) q2.push(y2 || c3), e3++;
                b2.pageIx = e3 - 1;
                y2 && (p2[a4 - 1].pageIx = e3 - 1);
                a4 === p2.length - 1 && c3 + d3 - q2[e3 - 1] > E && d3 <= E && (q2.push(c3), b2.pageIx = e3);
                c3 !== y2 && (y2 = c3);
              }), v2 || (v2 = a3.clipRect = d2.clipRect(0, k2, 9999, 0), a3.contentGroup.clip(v2)), t2(E), N || (this.nav = N = d2.g().attr({ zIndex: 1 }).add(this.group), this.up = d2.symbol("triangle", 0, 0, n2, n2).add(N), w2("upTracker").on("click", function() {
                a3.scroll(-1, m2);
              }), this.pager = d2.text("", 15, 10).addClass("highcharts-legend-navigation"), !c2.styledMode && l2.style && this.pager.css(l2.style), this.pager.add(N), this.down = d2.symbol("triangle-down", 0, 0, n2, n2).add(N), w2("downTracker").on("click", function() {
                a3.scroll(1, m2);
              })), a3.scroll(0), b = g) : N && (t2(), this.nav = N.destroy(), this.scrollGroup.attr({ translateY: 1 }), this.clipHeight = 0);
              return b;
            };
            a2.prototype.scroll = function(b, a3) {
              var d2 = this, e2 = this.chart, g = this.pages, f3 = g.length, k2 = this.clipHeight, h2 = this.options.navigation, l2 = this.pager, m2 = this.padding, n2 = this.currentPage + b;
              n2 > f3 && (n2 = f3);
              0 < n2 && ("undefined" !== typeof a3 && B(a3, e2), this.nav.attr({ translateX: m2, translateY: k2 + this.padding + 7 + this.titleHeight, visibility: "visible" }), [this.up, this.upTracker].forEach(function(b2) {
                b2.attr({ "class": 1 === n2 ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" });
              }), l2.attr({ text: n2 + "/" + f3 }), [this.down, this.downTracker].forEach(function(b2) {
                b2.attr({ x: 18 + this.pager.getBBox().width, "class": n2 === f3 ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" });
              }, this), e2.styledMode || (this.up.attr({ fill: 1 === n2 ? h2.inactiveColor : h2.activeColor }), this.upTracker.css({ cursor: 1 === n2 ? "default" : "pointer" }), this.down.attr({ fill: n2 === f3 ? h2.inactiveColor : h2.activeColor }), this.downTracker.css({ cursor: n2 === f3 ? "default" : "pointer" })), this.scrollOffset = -g[n2 - 1] + this.initialItemY, this.scrollGroup.animate({ translateY: this.scrollOffset }), this.currentPage = n2, this.positionCheckboxes(), b = F(A(a3, e2.renderer.globalAnimation, true)), c(function() {
                v(d2, "afterScroll", { currentPage: n2 });
              }, b.duration));
            };
            a2.prototype.setItemEvents = function(b, a3, c2) {
              var d2 = this, e2 = d2.chart.renderer.boxWrapper, g = b instanceof G, f3 = "highcharts-legend-" + (g ? "point" : "series") + "-active", k2 = d2.chart.styledMode, h2 = function(a4) {
                d2.allItems.forEach(function(c3) {
                  b !== c3 && [c3].concat(c3.linkedSeries || []).forEach(function(b2) {
                    b2.setState(a4, !g);
                  });
                });
              };
              (c2 ? [a3, b.legendSymbol] : [b.legendGroup]).forEach(function(c3) {
                if (c3) c3.on("mouseover", function() {
                  b.visible && h2("inactive");
                  b.setState("hover");
                  b.visible && e2.addClass(f3);
                  k2 || a3.css(d2.options.itemHoverStyle);
                }).on("mouseout", function() {
                  d2.chart.styledMode || a3.css(y(b.visible ? d2.itemStyle : d2.itemHiddenStyle));
                  h2("");
                  e2.removeClass(f3);
                  b.setState();
                }).on(
                  "click",
                  function(a4) {
                    var c4 = function() {
                      b.setVisible && b.setVisible();
                      h2(b.visible ? "inactive" : "");
                    };
                    e2.removeClass(f3);
                    a4 = { browserEvent: a4 };
                    b.firePointEvent ? b.firePointEvent("legendItemClick", a4, c4) : v(b, "legendItemClick", a4, c4);
                  }
                );
              });
            };
            a2.prototype.createCheckboxForItem = function(b) {
              b.checkbox = d("input", { type: "checkbox", className: "highcharts-legend-checkbox", checked: b.selected, defaultChecked: b.selected }, this.options.itemCheckboxStyle, this.chart.container);
              e(b.checkbox, "click", function(a3) {
                v(b.series || b, "checkboxClick", {
                  checked: a3.target.checked,
                  item: b
                }, function() {
                  b.select();
                });
              });
            };
            return a2;
          }();
          (/Trident\/7\.0/.test(C.navigator && C.navigator.userAgent) || a) && u(H.prototype, "positionItem", function(a2, b) {
            var c2 = this, d2 = function() {
              b._legendItemPos && a2.call(c2, b);
            };
            d2();
            c2.bubbleLegend || setTimeout(d2);
          });
          "";
          return H;
        });
        M(f, "Core/Series/SeriesRegistry.js", [f["Core/Globals.js"], f["Core/DefaultOptions.js"], f["Core/Series/Point.js"], f["Core/Utilities.js"]], function(a, f2, C, G) {
          var u = f2.defaultOptions, F = G.error, I = G.extendClass, B = G.merge, z;
          (function(f3) {
            function m(a2, d) {
              var e = u.plotOptions || {}, h = d.defaultOptions;
              d.prototype.pointClass || (d.prototype.pointClass = C);
              d.prototype.type = a2;
              h && (e[a2] = h);
              f3.seriesTypes[a2] = d;
            }
            f3.seriesTypes = a.seriesTypes;
            f3.getSeries = function(a2, d) {
              void 0 === d && (d = {});
              var e = a2.options.chart;
              e = d.type || e.type || e.defaultSeriesType || "";
              var h = f3.seriesTypes[e];
              f3 || F(17, true, a2, { missingModuleFor: e });
              e = new h();
              "function" === typeof e.init && e.init(a2, d);
              return e;
            };
            f3.registerSeriesType = m;
            f3.seriesType = function(a2, d, l, h, p) {
              var e = u.plotOptions || {};
              d = d || "";
              e[a2] = B(e[d], l);
              m(a2, I(f3.seriesTypes[d] || function() {
              }, h));
              f3.seriesTypes[a2].prototype.type = a2;
              p && (f3.seriesTypes[a2].prototype.pointClass = I(C, p));
              return f3.seriesTypes[a2];
            };
          })(z || (z = {}));
          return z;
        });
        M(f, "Core/Chart/Chart.js", [
          f["Core/Animation/AnimationUtilities.js"],
          f["Core/Axis/Axis.js"],
          f["Core/FormatUtilities.js"],
          f["Core/Foundation.js"],
          f["Core/Globals.js"],
          f["Core/Legend/Legend.js"],
          f["Core/MSPointer.js"],
          f["Core/DefaultOptions.js"],
          f["Core/Pointer.js"],
          f["Core/Renderer/RendererRegistry.js"],
          f["Core/Series/SeriesRegistry.js"],
          f["Core/Renderer/SVG/SVGRenderer.js"],
          f["Core/Time.js"],
          f["Core/Utilities.js"],
          f["Core/Renderer/HTML/AST.js"]
        ], function(a, f2, C, G, u, H, I, B, z, p, m, e, d, l, h) {
          var t = a.animate, n = a.animObject, v = a.setAnimation, w = C.numberFormat, y = G.registerEventOptions, A = u.charts, q = u.doc, k = u.marginNames, c = u.svg, g = u.win, b = B.defaultOptions, r = B.defaultTime, x = m.seriesTypes, D = l.addEvent, K = l.attr, F = l.cleanRecursively, Q = l.createElement, O = l.css, W = l.defined, Z = l.discardElement, L = l.erase, J = l.error, M2 = l.extend, da = l.find, R = l.fireEvent, ea = l.getStyle, E = l.isArray, T = l.isNumber, N = l.isObject, U = l.isString, V = l.merge, X = l.objectEach, S = l.pick, fa = l.pInt, aa = l.relativeLength, ia = l.removeEvent, ha = l.splat, ba = l.syncTimeout, ka = l.uniqueKey;
          a = function() {
            function a2(b2, a3, c2) {
              this.series = this.renderTo = this.renderer = this.pointer = this.pointCount = this.plotWidth = this.plotTop = this.plotLeft = this.plotHeight = this.plotBox = this.options = this.numberFormatter = this.margin = this.legend = this.labelCollectors = this.isResizing = this.index = this.eventOptions = this.container = this.colorCounter = this.clipBox = this.chartWidth = this.chartHeight = this.bounds = this.axisOffset = this.axes = void 0;
              this.sharedClips = {};
              this.yAxis = this.xAxis = this.userOptions = this.titleOffset = this.time = this.symbolCounter = this.spacingBox = this.spacing = void 0;
              this.getArgs(b2, a3, c2);
            }
            a2.chart = function(b2, c2, d2) {
              return new a2(b2, c2, d2);
            };
            a2.prototype.getArgs = function(b2, a3, c2) {
              U(b2) || b2.nodeName ? (this.renderTo = b2, this.init(a3, c2)) : this.init(b2, a3);
            };
            a2.prototype.init = function(a3, c2) {
              var e2 = a3.plotOptions || {};
              R(this, "init", { args: arguments }, function() {
                var g2 = V(b, a3), f3 = g2.chart;
                X(
                  g2.plotOptions,
                  function(b2, a4) {
                    N(b2) && (b2.tooltip = e2[a4] && V(e2[a4].tooltip) || void 0);
                  }
                );
                g2.tooltip.userOptions = a3.chart && a3.chart.forExport && a3.tooltip.userOptions || a3.tooltip;
                this.userOptions = a3;
                this.margin = [];
                this.spacing = [];
                this.bounds = { h: {}, v: {} };
                this.labelCollectors = [];
                this.callback = c2;
                this.isResizing = 0;
                this.options = g2;
                this.axes = [];
                this.series = [];
                this.time = a3.time && Object.keys(a3.time).length ? new d(a3.time) : u.time;
                this.numberFormatter = f3.numberFormatter || w;
                this.styledMode = f3.styledMode;
                this.hasCartesianSeries = f3.showAxes;
                this.index = A.length;
                A.push(this);
                u.chartCount++;
                y(this, f3);
                this.xAxis = [];
                this.yAxis = [];
                this.pointCount = this.colorCounter = this.symbolCounter = 0;
                R(this, "afterInit");
                this.firstRender();
              });
            };
            a2.prototype.initSeries = function(b2) {
              var a3 = this.options.chart;
              a3 = b2.type || a3.type || a3.defaultSeriesType;
              var c2 = x[a3];
              c2 || J(17, true, this, { missingModuleFor: a3 });
              a3 = new c2();
              "function" === typeof a3.init && a3.init(this, b2);
              return a3;
            };
            a2.prototype.setSeriesData = function() {
              this.getSeriesOrderByLinks().forEach(function(b2) {
                b2.points || b2.data || !b2.enabledDataSorting || b2.setData(b2.options.data, false);
              });
            };
            a2.prototype.getSeriesOrderByLinks = function() {
              return this.series.concat().sort(function(b2, a3) {
                return b2.linkedSeries.length || a3.linkedSeries.length ? a3.linkedSeries.length - b2.linkedSeries.length : 0;
              });
            };
            a2.prototype.orderSeries = function(b2) {
              var a3 = this.series;
              b2 = b2 || 0;
              for (var c2 = a3.length; b2 < c2; ++b2) a3[b2] && (a3[b2].index = b2, a3[b2].name = a3[b2].getName());
            };
            a2.prototype.isInsidePlot = function(b2, a3, c2) {
              void 0 === c2 && (c2 = {});
              var d2 = this.inverted, e2 = this.plotBox, g2 = this.plotLeft, f3 = this.plotTop, k2 = this.scrollablePlotBox, h2 = 0;
              var l2 = 0;
              c2.visiblePlotOnly && this.scrollingContainer && (l2 = this.scrollingContainer, h2 = l2.scrollLeft, l2 = l2.scrollTop);
              var m2 = c2.series;
              e2 = c2.visiblePlotOnly && k2 || e2;
              k2 = c2.inverted ? a3 : b2;
              a3 = c2.inverted ? b2 : a3;
              b2 = { x: k2, y: a3, isInsidePlot: true };
              if (!c2.ignoreX) {
                var n2 = m2 && (d2 ? m2.yAxis : m2.xAxis) || { pos: g2, len: Infinity };
                k2 = c2.paneCoordinates ? n2.pos + k2 : g2 + k2;
                k2 >= Math.max(h2 + g2, n2.pos) && k2 <= Math.min(h2 + g2 + e2.width, n2.pos + n2.len) || (b2.isInsidePlot = false);
              }
              !c2.ignoreY && b2.isInsidePlot && (d2 = m2 && (d2 ? m2.xAxis : m2.yAxis) || { pos: f3, len: Infinity }, c2 = c2.paneCoordinates ? d2.pos + a3 : f3 + a3, c2 >= Math.max(l2 + f3, d2.pos) && c2 <= Math.min(l2 + f3 + e2.height, d2.pos + d2.len) || (b2.isInsidePlot = false));
              R(this, "afterIsInsidePlot", b2);
              return b2.isInsidePlot;
            };
            a2.prototype.redraw = function(b2) {
              R(this, "beforeRedraw");
              var a3 = this.hasCartesianSeries ? this.axes : this.colorAxis || [], c2 = this.series, d2 = this.pointer, e2 = this.legend, g2 = this.userOptions.legend, f3 = this.renderer, k2 = f3.isHidden(), h2 = [], l2 = this.isDirtyBox, m2 = this.isDirtyLegend;
              this.setResponsive && this.setResponsive(false);
              v(this.hasRendered ? b2 : false, this);
              k2 && this.temporaryDisplay();
              this.layOutTitles();
              for (b2 = c2.length; b2--; ) {
                var n2 = c2[b2];
                if (n2.options.stacking || n2.options.centerInCategory) {
                  var q2 = true;
                  if (n2.isDirty) {
                    var E2 = true;
                    break;
                  }
                }
              }
              if (E2) for (b2 = c2.length; b2--; ) n2 = c2[b2], n2.options.stacking && (n2.isDirty = true);
              c2.forEach(function(b3) {
                b3.isDirty && ("point" === b3.options.legendType ? ("function" === typeof b3.updateTotals && b3.updateTotals(), m2 = true) : g2 && (g2.labelFormatter || g2.labelFormat) && (m2 = true));
                b3.isDirtyData && R(b3, "updatedData");
              });
              m2 && e2 && e2.options.enabled && (e2.render(), this.isDirtyLegend = false);
              q2 && this.getStacks();
              a3.forEach(function(b3) {
                b3.updateNames();
                b3.setScale();
              });
              this.getMargins();
              a3.forEach(function(b3) {
                b3.isDirty && (l2 = true);
              });
              a3.forEach(function(b3) {
                var a4 = b3.min + "," + b3.max;
                b3.extKey !== a4 && (b3.extKey = a4, h2.push(function() {
                  R(b3, "afterSetExtremes", M2(b3.eventArgs, b3.getExtremes()));
                  delete b3.eventArgs;
                }));
                (l2 || q2) && b3.redraw();
              });
              l2 && this.drawChartBox();
              R(this, "predraw");
              c2.forEach(function(b3) {
                (l2 || b3.isDirty) && b3.visible && b3.redraw();
                b3.isDirtyData = false;
              });
              d2 && d2.reset(true);
              f3.draw();
              R(this, "redraw");
              R(this, "render");
              k2 && this.temporaryDisplay(true);
              h2.forEach(function(b3) {
                b3.call();
              });
            };
            a2.prototype.get = function(b2) {
              function a3(a4) {
                return a4.id === b2 || a4.options && a4.options.id === b2;
              }
              for (var c2 = this.series, d2 = da(this.axes, a3) || da(this.series, a3), e2 = 0; !d2 && e2 < c2.length; e2++) d2 = da(c2[e2].points || [], a3);
              return d2;
            };
            a2.prototype.getAxes = function() {
              var b2 = this, a3 = this.options, c2 = a3.xAxis = ha(a3.xAxis || {});
              a3 = a3.yAxis = ha(a3.yAxis || {});
              R(this, "getAxes");
              c2.forEach(function(b3, a4) {
                b3.index = a4;
                b3.isX = true;
              });
              a3.forEach(function(b3, a4) {
                b3.index = a4;
              });
              c2.concat(a3).forEach(function(a4) {
                new f2(b2, a4);
              });
              R(this, "afterGetAxes");
            };
            a2.prototype.getSelectedPoints = function() {
              return this.series.reduce(function(b2, a3) {
                a3.getPointsCollection().forEach(function(a4) {
                  S(a4.selectedStaging, a4.selected) && b2.push(a4);
                });
                return b2;
              }, []);
            };
            a2.prototype.getSelectedSeries = function() {
              return this.series.filter(function(b2) {
                return b2.selected;
              });
            };
            a2.prototype.setTitle = function(b2, a3, c2) {
              this.applyDescription("title", b2);
              this.applyDescription("subtitle", a3);
              this.applyDescription("caption", void 0);
              this.layOutTitles(c2);
            };
            a2.prototype.applyDescription = function(b2, a3) {
              var c2 = this, d2 = "title" === b2 ? {
                color: "#333333",
                fontSize: this.options.isStock ? "16px" : "18px"
              } : { color: "#666666" };
              d2 = this.options[b2] = V(!this.styledMode && { style: d2 }, this.options[b2], a3);
              var e2 = this[b2];
              e2 && a3 && (this[b2] = e2 = e2.destroy());
              d2 && !e2 && (e2 = this.renderer.text(d2.text, 0, 0, d2.useHTML).attr({ align: d2.align, "class": "highcharts-" + b2, zIndex: d2.zIndex || 4 }).add(), e2.update = function(a4) {
                c2[{ title: "setTitle", subtitle: "setSubtitle", caption: "setCaption" }[b2]](a4);
              }, this.styledMode || e2.css(d2.style), this[b2] = e2);
            };
            a2.prototype.layOutTitles = function(b2) {
              var a3 = [0, 0, 0], c2 = this.renderer, d2 = this.spacingBox;
              ["title", "subtitle", "caption"].forEach(function(b3) {
                var e3 = this[b3], g2 = this.options[b3], f3 = g2.verticalAlign || "top";
                b3 = "title" === b3 ? "top" === f3 ? -3 : 0 : "top" === f3 ? a3[0] + 2 : 0;
                var k2;
                if (e3) {
                  this.styledMode || (k2 = g2.style && g2.style.fontSize);
                  k2 = c2.fontMetrics(k2, e3).b;
                  e3.css({ width: (g2.width || d2.width + (g2.widthAdjust || 0)) + "px" });
                  var h2 = Math.round(e3.getBBox(g2.useHTML).height);
                  e3.align(M2({ y: "bottom" === f3 ? k2 : b3 + k2, height: h2 }, g2), false, "spacingBox");
                  g2.floating || ("top" === f3 ? a3[0] = Math.ceil(a3[0] + h2) : "bottom" === f3 && (a3[2] = Math.ceil(a3[2] + h2)));
                }
              }, this);
              a3[0] && "top" === (this.options.title.verticalAlign || "top") && (a3[0] += this.options.title.margin);
              a3[2] && "bottom" === this.options.caption.verticalAlign && (a3[2] += this.options.caption.margin);
              var e2 = !this.titleOffset || this.titleOffset.join(",") !== a3.join(",");
              this.titleOffset = a3;
              R(this, "afterLayOutTitles");
              !this.isDirtyBox && e2 && (this.isDirtyBox = this.isDirtyLegend = e2, this.hasRendered && S(b2, true) && this.isDirtyBox && this.redraw());
            };
            a2.prototype.getChartSize = function() {
              var b2 = this.options.chart, a3 = b2.width;
              b2 = b2.height;
              var c2 = this.renderTo;
              W(a3) || (this.containerWidth = ea(c2, "width"));
              W(b2) || (this.containerHeight = ea(c2, "height"));
              this.chartWidth = Math.max(0, a3 || this.containerWidth || 600);
              this.chartHeight = Math.max(0, aa(b2, this.chartWidth) || (1 < this.containerHeight ? this.containerHeight : 400));
            };
            a2.prototype.temporaryDisplay = function(b2) {
              var a3 = this.renderTo;
              if (b2) for (; a3 && a3.style; ) a3.hcOrigStyle && (O(a3, a3.hcOrigStyle), delete a3.hcOrigStyle), a3.hcOrigDetached && (q.body.removeChild(a3), a3.hcOrigDetached = false), a3 = a3.parentNode;
              else for (; a3 && a3.style; ) {
                q.body.contains(a3) || a3.parentNode || (a3.hcOrigDetached = true, q.body.appendChild(a3));
                if ("none" === ea(a3, "display", false) || a3.hcOricDetached) a3.hcOrigStyle = { display: a3.style.display, height: a3.style.height, overflow: a3.style.overflow }, b2 = { display: "block", overflow: "hidden" }, a3 !== this.renderTo && (b2.height = 0), O(a3, b2), a3.offsetWidth || a3.style.setProperty("display", "block", "important");
                a3 = a3.parentNode;
                if (a3 === q.body) break;
              }
            };
            a2.prototype.setClassName = function(b2) {
              this.container.className = "highcharts-container " + (b2 || "");
            };
            a2.prototype.getContainer = function() {
              var b2 = this.options, a3 = b2.chart, d2 = ka(), g2, f3 = this.renderTo;
              f3 || (this.renderTo = f3 = a3.renderTo);
              U(f3) && (this.renderTo = f3 = q.getElementById(f3));
              f3 || J(13, true, this);
              var k2 = fa(K(f3, "data-highcharts-chart"));
              T(k2) && A[k2] && A[k2].hasRendered && A[k2].destroy();
              K(f3, "data-highcharts-chart", this.index);
              f3.innerHTML = h.emptyHTML;
              a3.skipClone || f3.offsetWidth || this.temporaryDisplay();
              this.getChartSize();
              k2 = this.chartWidth;
              var l2 = this.chartHeight;
              O(f3, { overflow: "hidden" });
              this.styledMode || (g2 = M2({
                position: "relative",
                overflow: "hidden",
                width: k2 + "px",
                height: l2 + "px",
                textAlign: "left",
                lineHeight: "normal",
                zIndex: 0,
                "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                userSelect: "none",
                "touch-action": "manipulation",
                outline: "none"
              }, a3.style || {}));
              this.container = d2 = Q("div", { id: d2 }, g2, f3);
              this._cursor = d2.style.cursor;
              this.renderer = new (a3.renderer || !c ? p.getRendererType(a3.renderer) : e)(d2, k2, l2, void 0, a3.forExport, b2.exporting && b2.exporting.allowHTML, this.styledMode);
              v(void 0, this);
              this.setClassName(a3.className);
              if (this.styledMode) for (var m2 in b2.defs) this.renderer.definition(b2.defs[m2]);
              else this.renderer.setStyle(a3.style);
              this.renderer.chartIndex = this.index;
              R(this, "afterGetContainer");
            };
            a2.prototype.getMargins = function(b2) {
              var a3 = this.spacing, c2 = this.margin, d2 = this.titleOffset;
              this.resetMargins();
              d2[0] && !W(c2[0]) && (this.plotTop = Math.max(this.plotTop, d2[0] + a3[0]));
              d2[2] && !W(c2[2]) && (this.marginBottom = Math.max(this.marginBottom, d2[2] + a3[2]));
              this.legend && this.legend.display && this.legend.adjustMargins(c2, a3);
              R(this, "getMargins");
              b2 || this.getAxisMargins();
            };
            a2.prototype.getAxisMargins = function() {
              var b2 = this, a3 = b2.axisOffset = [0, 0, 0, 0], c2 = b2.colorAxis, d2 = b2.margin, e2 = function(b3) {
                b3.forEach(function(b4) {
                  b4.visible && b4.getOffset();
                });
              };
              b2.hasCartesianSeries ? e2(b2.axes) : c2 && c2.length && e2(c2);
              k.forEach(function(c3, e3) {
                W(d2[e3]) || (b2[c3] += a3[e3]);
              });
              b2.setChartSize();
            };
            a2.prototype.reflow = function(b2) {
              var a3 = this, c2 = a3.options.chart, d2 = a3.renderTo, e2 = W(c2.width) && W(c2.height), f3 = c2.width || ea(d2, "width");
              c2 = c2.height || ea(d2, "height");
              d2 = b2 ? b2.target : g;
              delete a3.pointer.chartPosition;
              if (!e2 && !a3.isPrinting && f3 && c2 && (d2 === g || d2 === q)) {
                if (f3 !== a3.containerWidth || c2 !== a3.containerHeight) l.clearTimeout(a3.reflowTimeout), a3.reflowTimeout = ba(function() {
                  a3.container && a3.setSize(void 0, void 0, false);
                }, b2 ? 100 : 0);
                a3.containerWidth = f3;
                a3.containerHeight = c2;
              }
            };
            a2.prototype.setReflow = function(b2) {
              var a3 = this;
              false === b2 || this.unbindReflow ? false === b2 && this.unbindReflow && (this.unbindReflow = this.unbindReflow()) : (this.unbindReflow = D(g, "resize", function(b3) {
                a3.options && a3.reflow(b3);
              }), D(this, "destroy", this.unbindReflow));
            };
            a2.prototype.setSize = function(b2, a3, c2) {
              var d2 = this, e2 = d2.renderer;
              d2.isResizing += 1;
              v(c2, d2);
              c2 = e2.globalAnimation;
              d2.oldChartHeight = d2.chartHeight;
              d2.oldChartWidth = d2.chartWidth;
              "undefined" !== typeof b2 && (d2.options.chart.width = b2);
              "undefined" !== typeof a3 && (d2.options.chart.height = a3);
              d2.getChartSize();
              d2.styledMode || (c2 ? t : O)(d2.container, { width: d2.chartWidth + "px", height: d2.chartHeight + "px" }, c2);
              d2.setChartSize(true);
              e2.setSize(d2.chartWidth, d2.chartHeight, c2);
              d2.axes.forEach(function(b3) {
                b3.isDirty = true;
                b3.setScale();
              });
              d2.isDirtyLegend = true;
              d2.isDirtyBox = true;
              d2.layOutTitles();
              d2.getMargins();
              d2.redraw(c2);
              d2.oldChartHeight = null;
              R(
                d2,
                "resize"
              );
              ba(function() {
                d2 && R(d2, "endResize", null, function() {
                  --d2.isResizing;
                });
              }, n(c2).duration);
            };
            a2.prototype.setChartSize = function(b2) {
              var a3 = this.inverted, c2 = this.renderer, d2 = this.chartWidth, e2 = this.chartHeight, g2 = this.options.chart, f3 = this.spacing, k2 = this.clipOffset, h2, l2, m2, n2;
              this.plotLeft = h2 = Math.round(this.plotLeft);
              this.plotTop = l2 = Math.round(this.plotTop);
              this.plotWidth = m2 = Math.max(0, Math.round(d2 - h2 - this.marginRight));
              this.plotHeight = n2 = Math.max(0, Math.round(e2 - l2 - this.marginBottom));
              this.plotSizeX = a3 ? n2 : m2;
              this.plotSizeY = a3 ? m2 : n2;
              this.plotBorderWidth = g2.plotBorderWidth || 0;
              this.spacingBox = c2.spacingBox = { x: f3[3], y: f3[0], width: d2 - f3[3] - f3[1], height: e2 - f3[0] - f3[2] };
              this.plotBox = c2.plotBox = { x: h2, y: l2, width: m2, height: n2 };
              a3 = 2 * Math.floor(this.plotBorderWidth / 2);
              d2 = Math.ceil(Math.max(a3, k2[3]) / 2);
              e2 = Math.ceil(Math.max(a3, k2[0]) / 2);
              this.clipBox = { x: d2, y: e2, width: Math.floor(this.plotSizeX - Math.max(a3, k2[1]) / 2 - d2), height: Math.max(0, Math.floor(this.plotSizeY - Math.max(a3, k2[2]) / 2 - e2)) };
              b2 || (this.axes.forEach(function(b3) {
                b3.setAxisSize();
                b3.setAxisTranslation();
              }), c2.alignElements());
              R(this, "afterSetChartSize", { skipAxes: b2 });
            };
            a2.prototype.resetMargins = function() {
              R(this, "resetMargins");
              var b2 = this, a3 = b2.options.chart;
              ["margin", "spacing"].forEach(function(c2) {
                var d2 = a3[c2], e2 = N(d2) ? d2 : [d2, d2, d2, d2];
                ["Top", "Right", "Bottom", "Left"].forEach(function(d3, g2) {
                  b2[c2][g2] = S(a3[c2 + d3], e2[g2]);
                });
              });
              k.forEach(function(a4, c2) {
                b2[a4] = S(b2.margin[c2], b2.spacing[c2]);
              });
              b2.axisOffset = [0, 0, 0, 0];
              b2.clipOffset = [0, 0, 0, 0];
            };
            a2.prototype.drawChartBox = function() {
              var b2 = this.options.chart, a3 = this.renderer, c2 = this.chartWidth, d2 = this.chartHeight, e2 = this.styledMode, g2 = this.plotBGImage, f3 = b2.backgroundColor, k2 = b2.plotBackgroundColor, h2 = b2.plotBackgroundImage, l2 = this.plotLeft, m2 = this.plotTop, n2 = this.plotWidth, q2 = this.plotHeight, E2 = this.plotBox, r2 = this.clipRect, p2 = this.clipBox, t2 = this.chartBackground, N2 = this.plotBackground, w2 = this.plotBorder, y2, v2 = "animate";
              t2 || (this.chartBackground = t2 = a3.rect().addClass("highcharts-background").add(), v2 = "attr");
              if (e2) var A2 = y2 = t2.strokeWidth();
              else {
                A2 = b2.borderWidth || 0;
                y2 = A2 + (b2.shadow ? 8 : 0);
                f3 = { fill: f3 || "none" };
                if (A2 || t2["stroke-width"]) f3.stroke = b2.borderColor, f3["stroke-width"] = A2;
                t2.attr(f3).shadow(b2.shadow);
              }
              t2[v2]({ x: y2 / 2, y: y2 / 2, width: c2 - y2 - A2 % 2, height: d2 - y2 - A2 % 2, r: b2.borderRadius });
              v2 = "animate";
              N2 || (v2 = "attr", this.plotBackground = N2 = a3.rect().addClass("highcharts-plot-background").add());
              N2[v2](E2);
              e2 || (N2.attr({ fill: k2 || "none" }).shadow(b2.plotShadow), h2 && (g2 ? (h2 !== g2.attr("href") && g2.attr("href", h2), g2.animate(E2)) : this.plotBGImage = a3.image(h2, l2, m2, n2, q2).add()));
              r2 ? r2.animate({ width: p2.width, height: p2.height }) : this.clipRect = a3.clipRect(p2);
              v2 = "animate";
              w2 || (v2 = "attr", this.plotBorder = w2 = a3.rect().addClass("highcharts-plot-border").attr({ zIndex: 1 }).add());
              e2 || w2.attr({ stroke: b2.plotBorderColor, "stroke-width": b2.plotBorderWidth || 0, fill: "none" });
              w2[v2](w2.crisp({ x: l2, y: m2, width: n2, height: q2 }, -w2.strokeWidth()));
              this.isDirtyBox = false;
              R(this, "afterDrawChartBox");
            };
            a2.prototype.propFromSeries = function() {
              var b2 = this, a3 = b2.options.chart, c2 = b2.options.series, d2, e2, g2;
              ["inverted", "angular", "polar"].forEach(function(f3) {
                e2 = x[a3.type || a3.defaultSeriesType];
                g2 = a3[f3] || e2 && e2.prototype[f3];
                for (d2 = c2 && c2.length; !g2 && d2--; ) (e2 = x[c2[d2].type]) && e2.prototype[f3] && (g2 = true);
                b2[f3] = g2;
              });
            };
            a2.prototype.linkSeries = function() {
              var b2 = this, a3 = b2.series;
              a3.forEach(function(b3) {
                b3.linkedSeries.length = 0;
              });
              a3.forEach(function(a4) {
                var c2 = a4.options.linkedTo;
                U(c2) && (c2 = ":previous" === c2 ? b2.series[a4.index - 1] : b2.get(c2)) && c2.linkedParent !== a4 && (c2.linkedSeries.push(a4), a4.linkedParent = c2, c2.enabledDataSorting && a4.setDataSortingOptions(), a4.visible = S(a4.options.visible, c2.options.visible, a4.visible));
              });
              R(this, "afterLinkSeries");
            };
            a2.prototype.renderSeries = function() {
              this.series.forEach(function(b2) {
                b2.translate();
                b2.render();
              });
            };
            a2.prototype.renderLabels = function() {
              var b2 = this, a3 = b2.options.labels;
              a3.items && a3.items.forEach(function(c2) {
                var d2 = M2(a3.style, c2.style), e2 = fa(d2.left) + b2.plotLeft, g2 = fa(d2.top) + b2.plotTop + 12;
                delete d2.left;
                delete d2.top;
                b2.renderer.text(c2.html, e2, g2).attr({ zIndex: 2 }).css(d2).add();
              });
            };
            a2.prototype.render = function() {
              var b2 = this.axes, a3 = this.colorAxis, c2 = this.renderer, d2 = this.options, e2 = function(b3) {
                b3.forEach(function(b4) {
                  b4.visible && b4.render();
                });
              }, g2 = 0;
              this.setTitle();
              this.legend = new H(this, d2.legend);
              this.getStacks && this.getStacks();
              this.getMargins(true);
              this.setChartSize();
              d2 = this.plotWidth;
              b2.some(function(b3) {
                if (b3.horiz && b3.visible && b3.options.labels.enabled && b3.series.length) return g2 = 21, true;
              });
              var f3 = this.plotHeight = Math.max(this.plotHeight - g2, 0);
              b2.forEach(function(b3) {
                b3.setScale();
              });
              this.getAxisMargins();
              var k2 = 1.1 < d2 / this.plotWidth, h2 = 1.05 < f3 / this.plotHeight;
              if (k2 || h2) b2.forEach(function(b3) {
                (b3.horiz && k2 || !b3.horiz && h2) && b3.setTickInterval(true);
              }), this.getMargins();
              this.drawChartBox();
              this.hasCartesianSeries ? e2(b2) : a3 && a3.length && e2(a3);
              this.seriesGroup || (this.seriesGroup = c2.g("series-group").attr({ zIndex: 3 }).add());
              this.renderSeries();
              this.renderLabels();
              this.addCredits();
              this.setResponsive && this.setResponsive();
              this.hasRendered = true;
            };
            a2.prototype.addCredits = function(b2) {
              var a3 = this, c2 = V(true, this.options.credits, b2);
              c2.enabled && !this.credits && (this.credits = this.renderer.text(c2.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function() {
                c2.href && (g.location.href = c2.href);
              }).attr({ align: c2.position.align, zIndex: 8 }), a3.styledMode || this.credits.css(c2.style), this.credits.add().align(c2.position), this.credits.update = function(b3) {
                a3.credits = a3.credits.destroy();
                a3.addCredits(b3);
              });
            };
            a2.prototype.destroy = function() {
              var b2 = this, a3 = b2.axes, c2 = b2.series, d2 = b2.container, e2 = d2 && d2.parentNode, g2;
              R(b2, "destroy");
              b2.renderer.forExport ? L(A, b2) : A[b2.index] = void 0;
              u.chartCount--;
              b2.renderTo.removeAttribute("data-highcharts-chart");
              ia(b2);
              for (g2 = a3.length; g2--; ) a3[g2] = a3[g2].destroy();
              this.scroller && this.scroller.destroy && this.scroller.destroy();
              for (g2 = c2.length; g2--; ) c2[g2] = c2[g2].destroy();
              "title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach(function(a4) {
                var c3 = b2[a4];
                c3 && c3.destroy && (b2[a4] = c3.destroy());
              });
              d2 && (d2.innerHTML = h.emptyHTML, ia(d2), e2 && Z(d2));
              X(b2, function(a4, c3) {
                delete b2[c3];
              });
            };
            a2.prototype.firstRender = function() {
              var b2 = this, a3 = b2.options;
              if (!b2.isReadyToRender || b2.isReadyToRender()) {
                b2.getContainer();
                b2.resetMargins();
                b2.setChartSize();
                b2.propFromSeries();
                b2.getAxes();
                (E(a3.series) ? a3.series : []).forEach(function(a4) {
                  b2.initSeries(a4);
                });
                b2.linkSeries();
                b2.setSeriesData();
                R(b2, "beforeRender");
                z && (I.isRequired() ? b2.pointer = new I(b2, a3) : b2.pointer = new z(b2, a3));
                b2.render();
                b2.pointer.getChartPosition();
                if (!b2.renderer.imgCount && !b2.hasLoaded) b2.onload();
                b2.temporaryDisplay(true);
              }
            };
            a2.prototype.onload = function() {
              this.callbacks.concat([this.callback]).forEach(function(b2) {
                b2 && "undefined" !== typeof this.index && b2.apply(this, [this]);
              }, this);
              R(this, "load");
              R(this, "render");
              W(this.index) && this.setReflow(this.options.chart.reflow);
              this.hasLoaded = true;
            };
            a2.prototype.addSeries = function(b2, a3, c2) {
              var d2 = this, e2;
              b2 && (a3 = S(a3, true), R(d2, "addSeries", { options: b2 }, function() {
                e2 = d2.initSeries(b2);
                d2.isDirtyLegend = true;
                d2.linkSeries();
                e2.enabledDataSorting && e2.setData(b2.data, false);
                R(d2, "afterAddSeries", { series: e2 });
                a3 && d2.redraw(c2);
              }));
              return e2;
            };
            a2.prototype.addAxis = function(b2, a3, c2, d2) {
              return this.createAxis(a3 ? "xAxis" : "yAxis", { axis: b2, redraw: c2, animation: d2 });
            };
            a2.prototype.addColorAxis = function(b2, a3, c2) {
              return this.createAxis(
                "colorAxis",
                { axis: b2, redraw: a3, animation: c2 }
              );
            };
            a2.prototype.createAxis = function(b2, a3) {
              b2 = new f2(this, V(a3.axis, { index: this[b2].length, isX: "xAxis" === b2 }));
              S(a3.redraw, true) && this.redraw(a3.animation);
              return b2;
            };
            a2.prototype.showLoading = function(b2) {
              var a3 = this, c2 = a3.options, d2 = c2.loading, e2 = function() {
                g2 && O(g2, { left: a3.plotLeft + "px", top: a3.plotTop + "px", width: a3.plotWidth + "px", height: a3.plotHeight + "px" });
              }, g2 = a3.loadingDiv, f3 = a3.loadingSpan;
              g2 || (a3.loadingDiv = g2 = Q("div", { className: "highcharts-loading highcharts-loading-hidden" }, null, a3.container));
              f3 || (a3.loadingSpan = f3 = Q("span", { className: "highcharts-loading-inner" }, null, g2), D(a3, "redraw", e2));
              g2.className = "highcharts-loading";
              h.setElementHTML(f3, S(b2, c2.lang.loading, ""));
              a3.styledMode || (O(g2, M2(d2.style, { zIndex: 10 })), O(f3, d2.labelStyle), a3.loadingShown || (O(g2, { opacity: 0, display: "" }), t(g2, { opacity: d2.style.opacity || 0.5 }, { duration: d2.showDuration || 0 })));
              a3.loadingShown = true;
              e2();
            };
            a2.prototype.hideLoading = function() {
              var b2 = this.options, a3 = this.loadingDiv;
              a3 && (a3.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || t(a3, { opacity: 0 }, { duration: b2.loading.hideDuration || 100, complete: function() {
                O(a3, { display: "none" });
              } }));
              this.loadingShown = false;
            };
            a2.prototype.update = function(b2, a3, c2, e2) {
              var g2 = this, f3 = { credits: "addCredits", title: "setTitle", subtitle: "setSubtitle", caption: "setCaption" }, k2 = b2.isResponsiveOptions, h2 = [], l2, m2;
              R(g2, "update", { options: b2 });
              k2 || g2.setResponsive(false, true);
              b2 = F(b2, g2.options);
              g2.userOptions = V(g2.userOptions, b2);
              var n2 = b2.chart;
              if (n2) {
                V(true, g2.options.chart, n2);
                "className" in n2 && g2.setClassName(n2.className);
                "reflow" in n2 && g2.setReflow(n2.reflow);
                if ("inverted" in n2 || "polar" in n2 || "type" in n2) {
                  g2.propFromSeries();
                  var q2 = true;
                }
                "alignTicks" in n2 && (q2 = true);
                "events" in n2 && y(this, n2);
                X(n2, function(b3, a4) {
                  -1 !== g2.propsRequireUpdateSeries.indexOf("chart." + a4) && (l2 = true);
                  -1 !== g2.propsRequireDirtyBox.indexOf(a4) && (g2.isDirtyBox = true);
                  -1 !== g2.propsRequireReflow.indexOf(a4) && (k2 ? g2.isDirtyBox = true : m2 = true);
                });
                !g2.styledMode && n2.style && g2.renderer.setStyle(g2.options.chart.style || {});
              }
              !g2.styledMode && b2.colors && (this.options.colors = b2.colors);
              b2.time && (this.time === r && (this.time = new d(b2.time)), V(
                true,
                g2.options.time,
                b2.time
              ));
              X(b2, function(a4, c3) {
                if (g2[c3] && "function" === typeof g2[c3].update) g2[c3].update(a4, false);
                else if ("function" === typeof g2[f3[c3]]) g2[f3[c3]](a4);
                else "colors" !== c3 && -1 === g2.collectionsWithUpdate.indexOf(c3) && V(true, g2.options[c3], b2[c3]);
                "chart" !== c3 && -1 !== g2.propsRequireUpdateSeries.indexOf(c3) && (l2 = true);
              });
              this.collectionsWithUpdate.forEach(function(a4) {
                if (b2[a4]) {
                  var d2 = [];
                  g2[a4].forEach(function(b3, a5) {
                    b3.options.isInternal || d2.push(S(b3.options.index, a5));
                  });
                  ha(b2[a4]).forEach(function(b3, e3) {
                    var f4 = W(b3.id), k3;
                    f4 && (k3 = g2.get(b3.id));
                    !k3 && g2[a4] && (k3 = g2[a4][d2 ? d2[e3] : e3]) && f4 && W(k3.options.id) && (k3 = void 0);
                    k3 && k3.coll === a4 && (k3.update(b3, false), c2 && (k3.touched = true));
                    !k3 && c2 && g2.collectionsWithInit[a4] && (g2.collectionsWithInit[a4][0].apply(g2, [b3].concat(g2.collectionsWithInit[a4][1] || []).concat([false])).touched = true);
                  });
                  c2 && g2[a4].forEach(function(b3) {
                    b3.touched || b3.options.isInternal ? delete b3.touched : h2.push(b3);
                  });
                }
              });
              h2.forEach(function(b3) {
                b3.chart && b3.remove && b3.remove(false);
              });
              q2 && g2.axes.forEach(function(b3) {
                b3.update({}, false);
              });
              l2 && g2.getSeriesOrderByLinks().forEach(function(b3) {
                b3.chart && b3.update({}, false);
              }, this);
              q2 = n2 && n2.width;
              n2 = n2 && (U(n2.height) ? aa(n2.height, q2 || g2.chartWidth) : n2.height);
              m2 || T(q2) && q2 !== g2.chartWidth || T(n2) && n2 !== g2.chartHeight ? g2.setSize(q2, n2, e2) : S(a3, true) && g2.redraw(e2);
              R(g2, "afterUpdate", { options: b2, redraw: a3, animation: e2 });
            };
            a2.prototype.setSubtitle = function(b2, a3) {
              this.applyDescription("subtitle", b2);
              this.layOutTitles(a3);
            };
            a2.prototype.setCaption = function(b2, a3) {
              this.applyDescription("caption", b2);
              this.layOutTitles(a3);
            };
            a2.prototype.showResetZoom = function() {
              function a3() {
                c2.zoomOut();
              }
              var c2 = this, d2 = b.lang, e2 = c2.options.chart.resetZoomButton, g2 = e2.theme, f3 = g2.states, k2 = "chart" === e2.relativeTo || "spacingBox" === e2.relativeTo ? null : "scrollablePlotBox";
              R(this, "beforeShowResetZoom", null, function() {
                c2.resetZoomButton = c2.renderer.button(d2.resetZoom, null, null, a3, g2, f3 && f3.hover).attr({ align: e2.position.align, title: d2.resetZoomTitle }).addClass("highcharts-reset-zoom").add().align(e2.position, false, k2);
              });
              R(this, "afterShowResetZoom");
            };
            a2.prototype.zoomOut = function() {
              R(this, "selection", { resetSelection: true }, this.zoom);
            };
            a2.prototype.zoom = function(b2) {
              var a3 = this, c2 = a3.pointer, d2 = a3.inverted ? c2.mouseDownX : c2.mouseDownY, e2 = false, g2;
              !b2 || b2.resetSelection ? (a3.axes.forEach(function(b3) {
                g2 = b3.zoom();
              }), c2.initiated = false) : b2.xAxis.concat(b2.yAxis).forEach(function(b3) {
                var f4 = b3.axis, k2 = a3.inverted ? f4.left : f4.top, h2 = a3.inverted ? k2 + f4.width : k2 + f4.height, l2 = f4.isXAxis, n2 = false;
                if (!l2 && d2 >= k2 && d2 <= h2 || l2 || !W(d2)) n2 = true;
                c2[l2 ? "zoomX" : "zoomY"] && n2 && (g2 = f4.zoom(b3.min, b3.max), f4.displayBtn && (e2 = true));
              });
              var f3 = a3.resetZoomButton;
              e2 && !f3 ? a3.showResetZoom() : !e2 && N(f3) && (a3.resetZoomButton = f3.destroy());
              g2 && a3.redraw(S(
                a3.options.chart.animation,
                b2 && b2.animation,
                100 > a3.pointCount
              ));
            };
            a2.prototype.pan = function(b2, a3) {
              var c2 = this, d2 = c2.hoverPoints;
              a3 = "object" === typeof a3 ? a3 : { enabled: a3, type: "x" };
              var e2 = c2.options.chart, g2 = c2.options.mapNavigation && c2.options.mapNavigation.enabled;
              e2 && e2.panning && (e2.panning = a3);
              var f3 = a3.type, k2;
              R(this, "pan", { originalEvent: b2 }, function() {
                d2 && d2.forEach(function(b3) {
                  b3.setState();
                });
                var a4 = c2.xAxis;
                "xy" === f3 ? a4 = a4.concat(c2.yAxis) : "y" === f3 && (a4 = c2.yAxis);
                var e3 = {};
                a4.forEach(function(a5) {
                  if (a5.options.panningEnabled && !a5.options.isInternal) {
                    var d3 = a5.horiz, h2 = b2[d3 ? "chartX" : "chartY"];
                    d3 = d3 ? "mouseDownX" : "mouseDownY";
                    var l2 = c2[d3], n2 = a5.minPointOffset || 0, m2 = a5.reversed && !c2.inverted || !a5.reversed && c2.inverted ? -1 : 1, q2 = a5.getExtremes(), E2 = a5.toValue(l2 - h2, true) + n2 * m2, r2 = a5.toValue(l2 + a5.len - h2, true) - (n2 * m2 || a5.isXAxis && a5.pointRangePadding || 0), p2 = r2 < E2;
                    m2 = a5.hasVerticalPanning();
                    l2 = p2 ? r2 : E2;
                    E2 = p2 ? E2 : r2;
                    var t2 = a5.panningState;
                    !m2 || a5.isXAxis || t2 && !t2.isDirty || a5.series.forEach(function(b3) {
                      var a6 = b3.getProcessedData(true);
                      a6 = b3.getExtremes(a6.yData, true);
                      t2 || (t2 = { startMin: Number.MAX_VALUE, startMax: -Number.MAX_VALUE });
                      T(a6.dataMin) && T(a6.dataMax) && (t2.startMin = Math.min(S(b3.options.threshold, Infinity), a6.dataMin, t2.startMin), t2.startMax = Math.max(S(b3.options.threshold, -Infinity), a6.dataMax, t2.startMax));
                    });
                    m2 = Math.min(S(t2 && t2.startMin, q2.dataMin), n2 ? q2.min : a5.toValue(a5.toPixels(q2.min) - a5.minPixelPadding));
                    r2 = Math.max(S(t2 && t2.startMax, q2.dataMax), n2 ? q2.max : a5.toValue(a5.toPixels(q2.max) + a5.minPixelPadding));
                    a5.panningState = t2;
                    a5.isOrdinal || (n2 = m2 - l2, 0 < n2 && (E2 += n2, l2 = m2), n2 = E2 - r2, 0 < n2 && (E2 = r2, l2 -= n2), a5.series.length && l2 !== q2.min && E2 !== q2.max && l2 >= m2 && E2 <= r2 && (a5.setExtremes(
                      l2,
                      E2,
                      false,
                      false,
                      { trigger: "pan" }
                    ), c2.resetZoomButton || g2 || l2 === m2 || E2 === r2 || !f3.match("y") || (c2.showResetZoom(), a5.displayBtn = false), k2 = true), e3[d3] = h2);
                  }
                });
                X(e3, function(b3, a5) {
                  c2[a5] = b3;
                });
                k2 && c2.redraw(false);
                O(c2.container, { cursor: "move" });
              });
            };
            return a2;
          }();
          M2(a.prototype, {
            callbacks: [],
            collectionsWithInit: { xAxis: [a.prototype.addAxis, [true]], yAxis: [a.prototype.addAxis, [false]], series: [a.prototype.addSeries] },
            collectionsWithUpdate: ["xAxis", "yAxis", "series"],
            propsRequireDirtyBox: "backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
            propsRequireReflow: "margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(" "),
            propsRequireUpdateSeries: "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" ")
          });
          "";
          return a;
        });
        M(f, "Core/Legend/LegendSymbol.js", [f["Core/Utilities.js"]], function(a) {
          var f2 = a.merge, C = a.pick, G;
          (function(a2) {
            a2.drawLineMarker = function(a3) {
              var u = this.options, B = a3.symbolWidth, z = a3.symbolHeight, p = z / 2, m = this.chart.renderer, e = this.legendGroup;
              a3 = a3.baseline - Math.round(0.3 * a3.fontMetrics.b);
              var d = {}, l = u.marker;
              this.chart.styledMode || (d = { "stroke-width": u.lineWidth || 0 }, u.dashStyle && (d.dashstyle = u.dashStyle));
              this.legendLine = m.path([["M", 0, a3], ["L", B, a3]]).addClass("highcharts-graph").attr(d).add(e);
              l && false !== l.enabled && B && (u = Math.min(C(l.radius, p), p), 0 === this.symbol.indexOf("url") && (l = f2(l, { width: z, height: z }), u = 0), this.legendSymbol = B = m.symbol(this.symbol, B / 2 - u, a3 - u, 2 * u, 2 * u, l).addClass("highcharts-point").add(e), B.isMarker = true);
            };
            a2.drawRectangle = function(a3, f3) {
              var u = a3.symbolHeight, z = a3.options.squareSymbol;
              f3.legendSymbol = this.chart.renderer.rect(z ? (a3.symbolWidth - u) / 2 : 0, a3.baseline - u + 1, z ? u : a3.symbolWidth, u, C(a3.options.symbolRadius, u / 2)).addClass("highcharts-point").attr({ zIndex: 3 }).add(f3.legendGroup);
            };
          })(G || (G = {}));
          return G;
        });
        M(f, "Core/Series/SeriesDefaults.js", [], function() {
          return { lineWidth: 2, allowPointSelect: false, crisp: true, showCheckbox: false, animation: { duration: 1e3 }, events: {}, marker: { enabledThreshold: 2, lineColor: "#ffffff", lineWidth: 0, radius: 4, states: {
            normal: { animation: true },
            hover: { animation: { duration: 50 }, enabled: true, radiusPlus: 2, lineWidthPlus: 1 },
            select: { fillColor: "#cccccc", lineColor: "#000000", lineWidth: 2 }
          } }, point: { events: {} }, dataLabels: { animation: {}, align: "center", defer: true, formatter: function() {
            var a = this.series.chart.numberFormatter;
            return "number" !== typeof this.y ? "" : a(this.y, -1);
          }, padding: 5, style: { fontSize: "11px", fontWeight: "bold", color: "contrast", textOutline: "1px contrast" }, verticalAlign: "bottom", x: 0, y: 0 }, cropThreshold: 300, opacity: 1, pointRange: 0, softThreshold: true, states: {
            normal: { animation: true },
            hover: { animation: { duration: 50 }, lineWidthPlus: 1, marker: {}, halo: { size: 10, opacity: 0.25 } },
            select: { animation: { duration: 0 } },
            inactive: { animation: { duration: 50 }, opacity: 0.2 }
          }, stickyTracking: true, turboThreshold: 1e3, findNearestPointBy: "x" };
        });
        M(f, "Core/Series/Series.js", [
          f["Core/Animation/AnimationUtilities.js"],
          f["Core/DefaultOptions.js"],
          f["Core/Foundation.js"],
          f["Core/Globals.js"],
          f["Core/Legend/LegendSymbol.js"],
          f["Core/Series/Point.js"],
          f["Core/Series/SeriesDefaults.js"],
          f["Core/Series/SeriesRegistry.js"],
          f["Core/Renderer/SVG/SVGElement.js"],
          f["Core/Utilities.js"]
        ], function(a, f2, C, G, u, H, I, B, z, p) {
          var m = a.animObject, e = a.setAnimation, d = f2.defaultOptions, l = C.registerEventOptions, h = G.hasTouch, t = G.svg, n = G.win, v = B.seriesTypes, w = p.addEvent, y = p.arrayMax, A = p.arrayMin, q = p.clamp, k = p.cleanRecursively, c = p.correctFloat, g = p.defined, b = p.erase, r = p.error, x = p.extend, D = p.find, K = p.fireEvent, F = p.getNestedProperty, Q = p.isArray, O = p.isNumber, W = p.isString, Z = p.merge, L = p.objectEach, J = p.pick, M2 = p.removeEvent, da = p.splat, R = p.syncTimeout;
          a = function() {
            function a2() {
              this.zones = this.yAxis = this.xAxis = this.userOptions = this.tooltipOptions = this.processedYData = this.processedXData = this.points = this.options = this.linkedSeries = this.index = this.eventsToUnbind = this.eventOptions = this.data = this.chart = this._i = void 0;
            }
            a2.prototype.init = function(a3, b2) {
              K(this, "init", { options: b2 });
              var c2 = this, d2 = a3.series;
              this.eventsToUnbind = [];
              c2.chart = a3;
              c2.options = c2.setOptions(b2);
              b2 = c2.options;
              c2.linkedSeries = [];
              c2.bindAxes();
              x(c2, { name: b2.name, state: "", visible: false !== b2.visible, selected: true === b2.selected });
              l(this, b2);
              var e2 = b2.events;
              if (e2 && e2.click || b2.point && b2.point.events && b2.point.events.click || b2.allowPointSelect) a3.runTrackerClick = true;
              c2.getColor();
              c2.getSymbol();
              c2.parallelArrays.forEach(function(a4) {
                c2[a4 + "Data"] || (c2[a4 + "Data"] = []);
              });
              c2.isCartesian && (a3.hasCartesianSeries = true);
              var g2;
              d2.length && (g2 = d2[d2.length - 1]);
              c2._i = J(g2 && g2._i, -1) + 1;
              c2.opacity = c2.options.opacity;
              a3.orderSeries(this.insert(d2));
              b2.dataSorting && b2.dataSorting.enabled ? c2.setDataSortingOptions() : c2.points || c2.data || c2.setData(b2.data, false);
              K(this, "afterInit");
            };
            a2.prototype.is = function(a3) {
              return v[a3] && this instanceof v[a3];
            };
            a2.prototype.insert = function(a3) {
              var b2 = this.options.index, c2;
              if (O(b2)) {
                for (c2 = a3.length; c2--; ) if (b2 >= J(a3[c2].options.index, a3[c2]._i)) {
                  a3.splice(c2 + 1, 0, this);
                  break;
                }
                -1 === c2 && a3.unshift(this);
                c2 += 1;
              } else a3.push(this);
              return J(c2, a3.length - 1);
            };
            a2.prototype.bindAxes = function() {
              var a3 = this, b2 = a3.options, c2 = a3.chart, d2;
              K(this, "bindAxes", null, function() {
                (a3.axisTypes || []).forEach(function(e2) {
                  var g2 = 0;
                  c2[e2].forEach(function(c3) {
                    d2 = c3.options;
                    if (b2[e2] === g2 && !d2.isInternal || "undefined" !== typeof b2[e2] && b2[e2] === d2.id || "undefined" === typeof b2[e2] && 0 === d2.index) a3.insert(c3.series), a3[e2] = c3, c3.isDirty = true;
                    d2.isInternal || g2++;
                  });
                  a3[e2] || a3.optionalAxis === e2 || r(18, true, c2);
                });
              });
              K(this, "afterBindAxes");
            };
            a2.prototype.updateParallelArrays = function(a3, b2) {
              var c2 = a3.series, d2 = arguments, e2 = O(b2) ? function(d3) {
                var e3 = "y" === d3 && c2.toYData ? c2.toYData(a3) : a3[d3];
                c2[d3 + "Data"][b2] = e3;
              } : function(a4) {
                Array.prototype[b2].apply(c2[a4 + "Data"], Array.prototype.slice.call(d2, 2));
              };
              c2.parallelArrays.forEach(e2);
            };
            a2.prototype.hasData = function() {
              return this.visible && "undefined" !== typeof this.dataMax && "undefined" !== typeof this.dataMin || this.visible && this.yData && 0 < this.yData.length;
            };
            a2.prototype.autoIncrement = function(a3) {
              var b2 = this.options, c2 = b2.pointIntervalUnit, d2 = b2.relativeXValue, e2 = this.chart.time, g2 = this.xIncrement, f3;
              g2 = J(g2, b2.pointStart, 0);
              this.pointInterval = f3 = J(this.pointInterval, b2.pointInterval, 1);
              d2 && O(a3) && (f3 *= a3);
              c2 && (b2 = new e2.Date(g2), "day" === c2 ? e2.set("Date", b2, e2.get("Date", b2) + f3) : "month" === c2 ? e2.set("Month", b2, e2.get("Month", b2) + f3) : "year" === c2 && e2.set("FullYear", b2, e2.get("FullYear", b2) + f3), f3 = b2.getTime() - g2);
              if (d2 && O(a3)) return g2 + f3;
              this.xIncrement = g2 + f3;
              return g2;
            };
            a2.prototype.setDataSortingOptions = function() {
              var a3 = this.options;
              x(this, { requireSorting: false, sorted: false, enabledDataSorting: true, allowDG: false });
              g(a3.pointRange) || (a3.pointRange = 1);
            };
            a2.prototype.setOptions = function(a3) {
              var b2 = this.chart, c2 = b2.options, e2 = c2.plotOptions, f3 = b2.userOptions || {};
              a3 = Z(a3);
              b2 = b2.styledMode;
              var k2 = { plotOptions: e2, userOptions: a3 };
              K(this, "setOptions", k2);
              var h2 = k2.plotOptions[this.type], l2 = f3.plotOptions || {};
              this.userOptions = k2.userOptions;
              f3 = Z(h2, e2.series, f3.plotOptions && f3.plotOptions[this.type], a3);
              this.tooltipOptions = Z(d.tooltip, d.plotOptions.series && d.plotOptions.series.tooltip, d.plotOptions[this.type].tooltip, c2.tooltip.userOptions, e2.series && e2.series.tooltip, e2[this.type].tooltip, a3.tooltip);
              this.stickyTracking = J(a3.stickyTracking, l2[this.type] && l2[this.type].stickyTracking, l2.series && l2.series.stickyTracking, this.tooltipOptions.shared && !this.noSharedTooltip ? true : f3.stickyTracking);
              null === h2.marker && delete f3.marker;
              this.zoneAxis = f3.zoneAxis;
              e2 = this.zones = (f3.zones || []).slice();
              !f3.negativeColor && !f3.negativeFillColor || f3.zones || (c2 = { value: f3[this.zoneAxis + "Threshold"] || f3.threshold || 0, className: "highcharts-negative" }, b2 || (c2.color = f3.negativeColor, c2.fillColor = f3.negativeFillColor), e2.push(c2));
              e2.length && g(e2[e2.length - 1].value) && e2.push(b2 ? {} : { color: this.color, fillColor: this.fillColor });
              K(this, "afterSetOptions", { options: f3 });
              return f3;
            };
            a2.prototype.getName = function() {
              return J(this.options.name, "Series " + (this.index + 1));
            };
            a2.prototype.getCyclic = function(a3, b2, c2) {
              var d2 = this.chart, e2 = this.userOptions, f3 = a3 + "Index", k2 = a3 + "Counter", h2 = c2 ? c2.length : J(d2.options.chart[a3 + "Count"], d2[a3 + "Count"]);
              if (!b2) {
                var l2 = J(e2[f3], e2["_" + f3]);
                g(l2) || (d2.series.length || (d2[k2] = 0), e2["_" + f3] = l2 = d2[k2] % h2, d2[k2] += 1);
                c2 && (b2 = c2[l2]);
              }
              "undefined" !== typeof l2 && (this[f3] = l2);
              this[a3] = b2;
            };
            a2.prototype.getColor = function() {
              this.chart.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.color = "#cccccc" : this.getCyclic("color", this.options.color || d.plotOptions[this.type].color, this.chart.options.colors);
            };
            a2.prototype.getPointsCollection = function() {
              return (this.hasGroupedData ? this.points : this.data) || [];
            };
            a2.prototype.getSymbol = function() {
              this.getCyclic("symbol", this.options.marker.symbol, this.chart.options.symbols);
            };
            a2.prototype.findPointIndex = function(a3, b2) {
              var c2 = a3.id, d2 = a3.x, e2 = this.points, g2 = this.options.dataSorting, f3, k2;
              if (c2) g2 = this.chart.get(c2), g2 instanceof H && (f3 = g2);
              else if (this.linkedParent || this.enabledDataSorting || this.options.relativeXValue) {
                if (f3 = function(b3) {
                  return !b3.touched && b3.index === a3.index;
                }, g2 && g2.matchByName ? f3 = function(b3) {
                  return !b3.touched && b3.name === a3.name;
                } : this.options.relativeXValue && (f3 = function(b3) {
                  return !b3.touched && b3.options.x === a3.x;
                }), f3 = D(e2, f3), !f3) return;
              }
              if (f3) {
                var h2 = f3 && f3.index;
                "undefined" !== typeof h2 && (k2 = true);
              }
              "undefined" === typeof h2 && O(d2) && (h2 = this.xData.indexOf(d2, b2));
              -1 !== h2 && "undefined" !== typeof h2 && this.cropped && (h2 = h2 >= this.cropStart ? h2 - this.cropStart : h2);
              !k2 && O(h2) && e2[h2] && e2[h2].touched && (h2 = void 0);
              return h2;
            };
            a2.prototype.updateData = function(a3, b2) {
              var c2 = this.options, d2 = c2.dataSorting, e2 = this.points, f3 = [], k2 = this.requireSorting, h2 = a3.length === e2.length, l2, n2, m2, q2 = true;
              this.xIncrement = null;
              a3.forEach(function(a4, b3) {
                var n3 = g(a4) && this.pointClass.prototype.optionsToObject.call({ series: this }, a4) || {}, q3 = n3.x;
                if (n3.id || O(q3)) {
                  if (n3 = this.findPointIndex(n3, m2), -1 === n3 || "undefined" === typeof n3 ? f3.push(a4) : e2[n3] && a4 !== c2.data[n3] ? (e2[n3].update(a4, false, null, false), e2[n3].touched = true, k2 && (m2 = n3 + 1)) : e2[n3] && (e2[n3].touched = true), !h2 || b3 !== n3 || d2 && d2.enabled || this.hasDerivedData) l2 = true;
                } else f3.push(a4);
              }, this);
              if (l2) for (a3 = e2.length; a3--; ) (n2 = e2[a3]) && !n2.touched && n2.remove && n2.remove(false, b2);
              else !h2 || d2 && d2.enabled ? q2 = false : (a3.forEach(function(a4, b3) {
                a4 !== e2[b3].y && e2[b3].update && e2[b3].update(
                  a4,
                  false,
                  null,
                  false
                );
              }), f3.length = 0);
              e2.forEach(function(a4) {
                a4 && (a4.touched = false);
              });
              if (!q2) return false;
              f3.forEach(function(a4) {
                this.addPoint(a4, false, null, null, false);
              }, this);
              null === this.xIncrement && this.xData && this.xData.length && (this.xIncrement = y(this.xData), this.autoIncrement());
              return true;
            };
            a2.prototype.setData = function(a3, b2, c2, d2) {
              var e2 = this, g2 = e2.points, f3 = g2 && g2.length || 0, k2 = e2.options, h2 = e2.chart, l2 = k2.dataSorting, n2 = e2.xAxis, m2 = k2.turboThreshold, q2 = this.xData, p2 = this.yData, E = e2.pointArrayMap;
              E = E && E.length;
              var t2 = k2.keys, w2, y2 = 0, v2 = 1, A2 = null;
              a3 = a3 || [];
              var x2 = a3.length;
              b2 = J(b2, true);
              l2 && l2.enabled && (a3 = this.sortData(a3));
              false !== d2 && x2 && f3 && !e2.cropped && !e2.hasGroupedData && e2.visible && !e2.isSeriesBoosting && (w2 = this.updateData(a3, c2));
              if (!w2) {
                e2.xIncrement = null;
                e2.colorCounter = 0;
                this.parallelArrays.forEach(function(a4) {
                  e2[a4 + "Data"].length = 0;
                });
                if (m2 && x2 > m2) if (A2 = e2.getFirstValidPoint(a3), O(A2)) for (c2 = 0; c2 < x2; c2++) q2[c2] = this.autoIncrement(), p2[c2] = a3[c2];
                else if (Q(A2)) if (E) if (A2.length === E) for (c2 = 0; c2 < x2; c2++) q2[c2] = this.autoIncrement(), p2[c2] = a3[c2];
                else for (c2 = 0; c2 < x2; c2++) d2 = a3[c2], q2[c2] = d2[0], p2[c2] = d2.slice(
                  1,
                  E + 1
                );
                else if (t2 && (y2 = t2.indexOf("x"), v2 = t2.indexOf("y"), y2 = 0 <= y2 ? y2 : 0, v2 = 0 <= v2 ? v2 : 1), 1 === A2.length && (v2 = 0), y2 === v2) for (c2 = 0; c2 < x2; c2++) q2[c2] = this.autoIncrement(), p2[c2] = a3[c2][v2];
                else for (c2 = 0; c2 < x2; c2++) d2 = a3[c2], q2[c2] = d2[y2], p2[c2] = d2[v2];
                else r(12, false, h2);
                else for (c2 = 0; c2 < x2; c2++) "undefined" !== typeof a3[c2] && (d2 = { series: e2 }, e2.pointClass.prototype.applyOptions.apply(d2, [a3[c2]]), e2.updateParallelArrays(d2, c2));
                p2 && W(p2[0]) && r(14, true, h2);
                e2.data = [];
                e2.options.data = e2.userOptions.data = a3;
                for (c2 = f3; c2--; ) g2[c2] && g2[c2].destroy && g2[c2].destroy();
                n2 && (n2.minRange = n2.userMinRange);
                e2.isDirty = h2.isDirtyBox = true;
                e2.isDirtyData = !!g2;
                c2 = false;
              }
              "point" === k2.legendType && (this.processData(), this.generatePoints());
              b2 && h2.redraw(c2);
            };
            a2.prototype.sortData = function(a3) {
              var b2 = this, c2 = b2.options.dataSorting.sortKey || "y", d2 = function(a4, b3) {
                return g(b3) && a4.pointClass.prototype.optionsToObject.call({ series: a4 }, b3) || {};
              };
              a3.forEach(function(c3, e2) {
                a3[e2] = d2(b2, c3);
                a3[e2].index = e2;
              }, this);
              a3.concat().sort(function(a4, b3) {
                a4 = F(c2, a4);
                b3 = F(c2, b3);
                return b3 < a4 ? -1 : b3 > a4 ? 1 : 0;
              }).forEach(function(a4, b3) {
                a4.x = b3;
              }, this);
              b2.linkedSeries && b2.linkedSeries.forEach(function(b3) {
                var c3 = b3.options, e2 = c3.data;
                c3.dataSorting && c3.dataSorting.enabled || !e2 || (e2.forEach(function(c4, g2) {
                  e2[g2] = d2(b3, c4);
                  a3[g2] && (e2[g2].x = a3[g2].x, e2[g2].index = g2);
                }), b3.setData(e2, false));
              });
              return a3;
            };
            a2.prototype.getProcessedData = function(a3) {
              var b2 = this.xAxis, c2 = this.options, d2 = c2.cropThreshold, e2 = a3 || this.getExtremesFromAll || c2.getExtremesFromAll, g2 = this.isCartesian;
              a3 = b2 && b2.val2lin;
              c2 = !(!b2 || !b2.logarithmic);
              var f3 = 0, k2 = this.xData, h2 = this.yData, l2 = this.requireSorting;
              var n2 = false;
              var m2 = k2.length;
              if (b2) {
                n2 = b2.getExtremes();
                var q2 = n2.min;
                var p2 = n2.max;
                n2 = !(!b2.categories || b2.names.length);
              }
              if (g2 && this.sorted && !e2 && (!d2 || m2 > d2 || this.forceCrop)) {
                if (k2[m2 - 1] < q2 || k2[0] > p2) k2 = [], h2 = [];
                else if (this.yData && (k2[0] < q2 || k2[m2 - 1] > p2)) {
                  var E = this.cropData(this.xData, this.yData, q2, p2);
                  k2 = E.xData;
                  h2 = E.yData;
                  f3 = E.start;
                  E = true;
                }
              }
              for (d2 = k2.length || 1; --d2; ) if (b2 = c2 ? a3(k2[d2]) - a3(k2[d2 - 1]) : k2[d2] - k2[d2 - 1], 0 < b2 && ("undefined" === typeof t2 || b2 < t2)) var t2 = b2;
              else 0 > b2 && l2 && !n2 && (r(15, false, this.chart), l2 = false);
              return { xData: k2, yData: h2, cropped: E, cropStart: f3, closestPointRange: t2 };
            };
            a2.prototype.processData = function(a3) {
              var b2 = this.xAxis;
              if (this.isCartesian && !this.isDirty && !b2.isDirty && !this.yAxis.isDirty && !a3) return false;
              a3 = this.getProcessedData();
              this.cropped = a3.cropped;
              this.cropStart = a3.cropStart;
              this.processedXData = a3.xData;
              this.processedYData = a3.yData;
              this.closestPointRange = this.basePointRange = a3.closestPointRange;
              K(this, "afterProcessData");
            };
            a2.prototype.cropData = function(a3, b2, c2, d2, e2) {
              var g2 = a3.length, f3, k2 = 0, h2 = g2;
              e2 = J(e2, this.cropShoulder);
              for (f3 = 0; f3 < g2; f3++) if (a3[f3] >= c2) {
                k2 = Math.max(0, f3 - e2);
                break;
              }
              for (c2 = f3; c2 < g2; c2++) if (a3[c2] > d2) {
                h2 = c2 + e2;
                break;
              }
              return { xData: a3.slice(k2, h2), yData: b2.slice(
                k2,
                h2
              ), start: k2, end: h2 };
            };
            a2.prototype.generatePoints = function() {
              var a3 = this.options, b2 = this.processedData || a3.data, c2 = this.processedXData, d2 = this.processedYData, e2 = this.pointClass, g2 = c2.length, f3 = this.cropStart || 0, k2 = this.hasGroupedData, h2 = a3.keys, l2 = [];
              a3 = a3.dataGrouping && a3.dataGrouping.groupAll ? f3 : 0;
              var n2, m2, q2 = this.data;
              if (!q2 && !k2) {
                var p2 = [];
                p2.length = b2.length;
                q2 = this.data = p2;
              }
              h2 && k2 && (this.options.keys = false);
              for (m2 = 0; m2 < g2; m2++) {
                p2 = f3 + m2;
                if (k2) {
                  var r2 = new e2().init(this, [c2[m2]].concat(da(d2[m2])));
                  r2.dataGroup = this.groupMap[a3 + m2];
                  r2.dataGroup.options && (r2.options = r2.dataGroup.options, x(r2, r2.dataGroup.options), delete r2.dataLabels);
                } else (r2 = q2[p2]) || "undefined" === typeof b2[p2] || (q2[p2] = r2 = new e2().init(this, b2[p2], c2[m2]));
                r2 && (r2.index = k2 ? a3 + m2 : p2, l2[m2] = r2);
              }
              this.options.keys = h2;
              if (q2 && (g2 !== (n2 = q2.length) || k2)) for (m2 = 0; m2 < n2; m2++) m2 !== f3 || k2 || (m2 += g2), q2[m2] && (q2[m2].destroyElements(), q2[m2].plotX = void 0);
              this.data = q2;
              this.points = l2;
              K(this, "afterGeneratePoints");
            };
            a2.prototype.getXExtremes = function(a3) {
              return { min: A(a3), max: y(a3) };
            };
            a2.prototype.getExtremes = function(a3, b2) {
              var c2 = this.xAxis, d2 = this.yAxis, e2 = this.processedXData || this.xData, g2 = [], f3 = this.requireSorting ? this.cropShoulder : 0;
              d2 = d2 ? d2.positiveValuesOnly : false;
              var k2, h2 = 0, l2 = 0, n2 = 0;
              a3 = a3 || this.stackedYData || this.processedYData || [];
              var m2 = a3.length;
              if (c2) {
                var q2 = c2.getExtremes();
                h2 = q2.min;
                l2 = q2.max;
              }
              for (k2 = 0; k2 < m2; k2++) {
                var r2 = e2[k2];
                q2 = a3[k2];
                var p2 = (O(q2) || Q(q2)) && (q2.length || 0 < q2 || !d2);
                r2 = b2 || this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || !c2 || (e2[k2 + f3] || r2) >= h2 && (e2[k2 - f3] || r2) <= l2;
                if (p2 && r2) if (p2 = q2.length) for (; p2--; ) O(q2[p2]) && (g2[n2++] = q2[p2]);
                else g2[n2++] = q2;
              }
              a3 = {
                activeYData: g2,
                dataMin: A(g2),
                dataMax: y(g2)
              };
              K(this, "afterGetExtremes", { dataExtremes: a3 });
              return a3;
            };
            a2.prototype.applyExtremes = function() {
              var a3 = this.getExtremes();
              this.dataMin = a3.dataMin;
              this.dataMax = a3.dataMax;
              return a3;
            };
            a2.prototype.getFirstValidPoint = function(a3) {
              for (var b2 = a3.length, c2 = 0, d2 = null; null === d2 && c2 < b2; ) d2 = a3[c2], c2++;
              return d2;
            };
            a2.prototype.translate = function() {
              this.processedXData || this.processData();
              this.generatePoints();
              var a3 = this.options, b2 = a3.stacking, d2 = this.xAxis, e2 = d2.categories, f3 = this.enabledDataSorting, k2 = this.yAxis, h2 = this.points, l2 = h2.length, n2 = this.pointPlacementToXValue(), m2 = !!n2, r2 = a3.threshold, p2 = a3.startFromThreshold ? r2 : 0, t2 = this.zoneAxis || "y", w2, y2, v2 = Number.MAX_VALUE;
              for (w2 = 0; w2 < l2; w2++) {
                var A2 = h2[w2], x2 = A2.x, D2 = void 0, z2 = void 0, u2 = A2.y, B2 = A2.low, F2 = b2 && k2.stacking && k2.stacking.stacks[(this.negStacks && u2 < (p2 ? 0 : r2) ? "-" : "") + this.stackKey];
                if (k2.positiveValuesOnly && !k2.validatePositiveValue(u2) || d2.positiveValuesOnly && !d2.validatePositiveValue(x2)) A2.isNull = true;
                A2.plotX = y2 = c(q(d2.translate(x2, 0, 0, 0, 1, n2, "flags" === this.type), -1e5, 1e5));
                if (b2 && this.visible && F2 && F2[x2]) {
                  var C2 = this.getStackIndicator(C2, x2, this.index);
                  A2.isNull || (D2 = F2[x2], z2 = D2.points[C2.key]);
                }
                Q(z2) && (B2 = z2[0], u2 = z2[1], B2 === p2 && C2.key === F2[x2].base && (B2 = J(O(r2) && r2, k2.min)), k2.positiveValuesOnly && 0 >= B2 && (B2 = null), A2.total = A2.stackTotal = D2.total, A2.percentage = D2.total && A2.y / D2.total * 100, A2.stackY = u2, this.irregularWidths || D2.setOffset(this.pointXOffset || 0, this.barW || 0));
                A2.yBottom = g(B2) ? q(k2.translate(B2, 0, 1, 0, 1), -1e5, 1e5) : null;
                this.dataModify && (u2 = this.dataModify.modifyValue(u2, w2));
                A2.plotY = void 0;
                O(u2) && (D2 = k2.translate(u2, false, true, false, true), "undefined" !== typeof D2 && (A2.plotY = q(D2, -1e5, 1e5)));
                A2.isInside = this.isPointInside(A2);
                A2.clientX = m2 ? c(d2.translate(x2, 0, 0, 0, 1, n2)) : y2;
                A2.negative = A2[t2] < (a3[t2 + "Threshold"] || r2 || 0);
                A2.category = J(e2 && e2[A2.x], A2.x);
                if (!A2.isNull && false !== A2.visible) {
                  "undefined" !== typeof G2 && (v2 = Math.min(v2, Math.abs(y2 - G2)));
                  var G2 = y2;
                }
                A2.zone = this.zones.length ? A2.getZone() : void 0;
                !A2.graphic && this.group && f3 && (A2.isNew = true);
              }
              this.closestPointRangePx = v2;
              K(this, "afterTranslate");
            };
            a2.prototype.getValidPoints = function(a3, b2, c2) {
              var d2 = this.chart;
              return (a3 || this.points || []).filter(function(a4) {
                return b2 && !d2.isInsidePlot(a4.plotX, a4.plotY, { inverted: d2.inverted }) ? false : false !== a4.visible && (c2 || !a4.isNull);
              });
            };
            a2.prototype.getClipBox = function() {
              var a3 = this.chart, b2 = this.xAxis, c2 = this.yAxis, d2 = Z(a3.clipBox);
              b2 && b2.len !== a3.plotSizeX && (d2.width = b2.len);
              c2 && c2.len !== a3.plotSizeY && (d2.height = c2.len);
              return d2;
            };
            a2.prototype.getSharedClipKey = function() {
              return this.sharedClipKey = (this.options.xAxis || 0) + "," + (this.options.yAxis || 0);
            };
            a2.prototype.setClip = function() {
              var a3 = this.chart, b2 = this.group, c2 = this.markerGroup, d2 = a3.sharedClips;
              a3 = a3.renderer;
              var e2 = this.getClipBox(), g2 = this.getSharedClipKey(), f3 = d2[g2];
              f3 ? f3.animate(e2) : d2[g2] = f3 = a3.clipRect(e2);
              b2 && b2.clip(false === this.options.clip ? void 0 : f3);
              c2 && c2.clip();
            };
            a2.prototype.animate = function(a3) {
              var b2 = this.chart, c2 = this.group, d2 = this.markerGroup, e2 = b2.inverted, g2 = m(this.options.animation), f3 = [this.getSharedClipKey(), g2.duration, g2.easing, g2.defer].join(), k2 = b2.sharedClips[f3], h2 = b2.sharedClips[f3 + "m"];
              if (a3 && c2) g2 = this.getClipBox(), k2 ? k2.attr("height", g2.height) : (g2.width = 0, e2 && (g2.x = b2.plotHeight), k2 = b2.renderer.clipRect(g2), b2.sharedClips[f3] = k2, h2 = b2.renderer.clipRect({ x: e2 ? (b2.plotSizeX || 0) + 99 : -99, y: e2 ? -b2.plotLeft : -b2.plotTop, width: 99, height: e2 ? b2.chartWidth : b2.chartHeight }), b2.sharedClips[f3 + "m"] = h2), c2.clip(k2), d2 && d2.clip(h2);
              else if (k2 && !k2.hasClass("highcharts-animating")) {
                b2 = this.getClipBox();
                var l2 = g2.step;
                d2 && d2.element.childNodes.length && (g2.step = function(a4, b3) {
                  l2 && l2.apply(b3, arguments);
                  h2 && h2.element && h2.attr(b3.prop, "width" === b3.prop ? a4 + 99 : a4);
                });
                k2.addClass("highcharts-animating").animate(b2, g2);
              }
            };
            a2.prototype.afterAnimate = function() {
              var a3 = this;
              this.setClip();
              L(this.chart.sharedClips, function(b2, c2, d2) {
                b2 && !a3.chart.container.querySelector('[clip-path="url(#' + b2.id + ')"]') && (b2.destroy(), delete d2[c2]);
              });
              this.finishedAnimating = true;
              K(this, "afterAnimate");
            };
            a2.prototype.drawPoints = function() {
              var a3 = this.points, b2 = this.chart, c2 = this.options.marker, d2 = this[this.specialGroup] || this.markerGroup, e2 = this.xAxis, g2 = J(c2.enabled, !e2 || e2.isRadial ? true : null, this.closestPointRangePx >= c2.enabledThreshold * c2.radius), f3, k2;
              if (false !== c2.enabled || this._hasPointMarkers) for (f3 = 0; f3 < a3.length; f3++) {
                var h2 = a3[f3];
                var l2 = (k2 = h2.graphic) ? "animate" : "attr";
                var n2 = h2.marker || {};
                var m2 = !!h2.marker;
                if ((g2 && "undefined" === typeof n2.enabled || n2.enabled) && !h2.isNull && false !== h2.visible) {
                  var q2 = J(n2.symbol, this.symbol, "rect");
                  var r2 = this.markerAttribs(h2, h2.selected && "select");
                  this.enabledDataSorting && (h2.startXPos = e2.reversed ? -(r2.width || 0) : e2.width);
                  var p2 = false !== h2.isInside;
                  k2 ? k2[p2 ? "show" : "hide"](p2).animate(r2) : p2 && (0 < (r2.width || 0) || h2.hasImage) && (h2.graphic = k2 = b2.renderer.symbol(q2, r2.x, r2.y, r2.width, r2.height, m2 ? n2 : c2).add(d2), this.enabledDataSorting && b2.hasRendered && (k2.attr({ x: h2.startXPos }), l2 = "animate"));
                  k2 && "animate" === l2 && k2[p2 ? "show" : "hide"](p2).animate(r2);
                  if (k2 && !b2.styledMode) k2[l2](this.pointAttribs(h2, h2.selected && "select"));
                  k2 && k2.addClass(h2.getClassName(), true);
                } else k2 && (h2.graphic = k2.destroy());
              }
            };
            a2.prototype.markerAttribs = function(a3, b2) {
              var c2 = this.options, d2 = c2.marker, e2 = a3.marker || {}, g2 = e2.symbol || d2.symbol, f3 = J(e2.radius, d2 && d2.radius);
              b2 && (d2 = d2.states[b2], b2 = e2.states && e2.states[b2], f3 = J(b2 && b2.radius, d2 && d2.radius, f3 && f3 + (d2 && d2.radiusPlus || 0)));
              a3.hasImage = g2 && 0 === g2.indexOf("url");
              a3.hasImage && (f3 = 0);
              a3 = O(f3) ? { x: c2.crisp ? Math.floor(a3.plotX - f3) : a3.plotX - f3, y: a3.plotY - f3 } : {};
              f3 && (a3.width = a3.height = 2 * f3);
              return a3;
            };
            a2.prototype.pointAttribs = function(a3, b2) {
              var c2 = this.options.marker, d2 = a3 && a3.options, e2 = d2 && d2.marker || {}, g2 = d2 && d2.color, f3 = a3 && a3.color, k2 = a3 && a3.zone && a3.zone.color, h2 = this.color;
              a3 = J(e2.lineWidth, c2.lineWidth);
              d2 = 1;
              h2 = g2 || k2 || f3 || h2;
              g2 = e2.fillColor || c2.fillColor || h2;
              f3 = e2.lineColor || c2.lineColor || h2;
              b2 = b2 || "normal";
              c2 = c2.states[b2] || {};
              b2 = e2.states && e2.states[b2] || {};
              a3 = J(b2.lineWidth, c2.lineWidth, a3 + J(
                b2.lineWidthPlus,
                c2.lineWidthPlus,
                0
              ));
              g2 = b2.fillColor || c2.fillColor || g2;
              f3 = b2.lineColor || c2.lineColor || f3;
              d2 = J(b2.opacity, c2.opacity, d2);
              return { stroke: f3, "stroke-width": a3, fill: g2, opacity: d2 };
            };
            a2.prototype.destroy = function(a3) {
              var c2 = this, d2 = c2.chart, e2 = /AppleWebKit\/533/.test(n.navigator.userAgent), g2 = c2.data || [], f3, k2, h2, l2;
              K(c2, "destroy", { keepEventsForUpdate: a3 });
              this.removeEvents(a3);
              (c2.axisTypes || []).forEach(function(a4) {
                (l2 = c2[a4]) && l2.series && (b(l2.series, c2), l2.isDirty = l2.forceRedraw = true);
              });
              c2.legendItem && c2.chart.legend.destroyItem(c2);
              for (k2 = g2.length; k2--; ) (h2 = g2[k2]) && h2.destroy && h2.destroy();
              c2.clips && c2.clips.forEach(function(a4) {
                return a4.destroy();
              });
              p.clearTimeout(c2.animationTimeout);
              L(c2, function(a4, b2) {
                a4 instanceof z && !a4.survive && (f3 = e2 && "group" === b2 ? "hide" : "destroy", a4[f3]());
              });
              d2.hoverSeries === c2 && (d2.hoverSeries = void 0);
              b(d2.series, c2);
              d2.orderSeries();
              L(c2, function(b2, d3) {
                a3 && "hcEvents" === d3 || delete c2[d3];
              });
            };
            a2.prototype.applyZones = function() {
              var a3 = this, b2 = this.chart, c2 = b2.renderer, d2 = this.zones, e2 = this.clips || [], g2 = this.graph, f3 = this.area, k2 = Math.max(b2.chartWidth, b2.chartHeight), h2 = this[(this.zoneAxis || "y") + "Axis"], l2 = b2.inverted, n2, m2, r2, p2, t2, w2, A2, y2, v2 = false;
              if (d2.length && (g2 || f3) && h2 && "undefined" !== typeof h2.min) {
                var x2 = h2.reversed;
                var D2 = h2.horiz;
                g2 && !this.showLine && g2.hide();
                f3 && f3.hide();
                var z2 = h2.getExtremes();
                d2.forEach(function(d3, E) {
                  n2 = x2 ? D2 ? b2.plotWidth : 0 : D2 ? 0 : h2.toPixels(z2.min) || 0;
                  n2 = q(J(m2, n2), 0, k2);
                  m2 = q(Math.round(h2.toPixels(J(d3.value, z2.max), true) || 0), 0, k2);
                  v2 && (n2 = m2 = h2.toPixels(z2.max));
                  p2 = Math.abs(n2 - m2);
                  t2 = Math.min(n2, m2);
                  w2 = Math.max(n2, m2);
                  h2.isXAxis ? (r2 = { x: l2 ? w2 : t2, y: 0, width: p2, height: k2 }, D2 || (r2.x = b2.plotHeight - r2.x)) : (r2 = {
                    x: 0,
                    y: l2 ? w2 : t2,
                    width: k2,
                    height: p2
                  }, D2 && (r2.y = b2.plotWidth - r2.y));
                  l2 && c2.isVML && (r2 = h2.isXAxis ? { x: 0, y: x2 ? t2 : w2, height: r2.width, width: b2.chartWidth } : { x: r2.y - b2.plotLeft - b2.spacingBox.x, y: 0, width: r2.height, height: b2.chartHeight });
                  e2[E] ? e2[E].animate(r2) : e2[E] = c2.clipRect(r2);
                  A2 = a3["zone-area-" + E];
                  y2 = a3["zone-graph-" + E];
                  g2 && y2 && y2.clip(e2[E]);
                  f3 && A2 && A2.clip(e2[E]);
                  v2 = d3.value > z2.max;
                  a3.resetZones && 0 === m2 && (m2 = void 0);
                });
                this.clips = e2;
              } else a3.visible && (g2 && g2.show(true), f3 && f3.show(true));
            };
            a2.prototype.invertGroups = function(a3) {
              function b2() {
                ["group", "markerGroup"].forEach(function(b3) {
                  c2[b3] && (d2.renderer.isVML && c2[b3].attr({ width: c2.yAxis.len, height: c2.xAxis.len }), c2[b3].width = c2.yAxis.len, c2[b3].height = c2.xAxis.len, c2[b3].invert(c2.isRadialSeries ? false : a3));
                });
              }
              var c2 = this, d2 = c2.chart;
              c2.xAxis && (c2.eventsToUnbind.push(w(d2, "resize", b2)), b2(), c2.invertGroups = b2);
            };
            a2.prototype.plotGroup = function(a3, b2, c2, d2, e2) {
              var f3 = this[a3], k2 = !f3;
              c2 = { visibility: c2, zIndex: d2 || 0.1 };
              "undefined" === typeof this.opacity || this.chart.styledMode || "inactive" === this.state || (c2.opacity = this.opacity);
              k2 && (this[a3] = f3 = this.chart.renderer.g().add(e2));
              f3.addClass("highcharts-" + b2 + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (g(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (f3.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), true);
              f3.attr(c2)[k2 ? "attr" : "animate"](this.getPlotBox());
              return f3;
            };
            a2.prototype.getPlotBox = function() {
              var a3 = this.chart, b2 = this.xAxis, c2 = this.yAxis;
              a3.inverted && (b2 = c2, c2 = this.xAxis);
              return { translateX: b2 ? b2.left : a3.plotLeft, translateY: c2 ? c2.top : a3.plotTop, scaleX: 1, scaleY: 1 };
            };
            a2.prototype.removeEvents = function(a3) {
              a3 || M2(this);
              this.eventsToUnbind.length && (this.eventsToUnbind.forEach(function(a4) {
                a4();
              }), this.eventsToUnbind.length = 0);
            };
            a2.prototype.render = function() {
              var a3 = this, b2 = a3.chart, c2 = a3.options, d2 = m(c2.animation), e2 = a3.visible ? "inherit" : "hidden", g2 = c2.zIndex, f3 = a3.hasRendered, k2 = b2.seriesGroup, h2 = b2.inverted;
              b2 = !a3.finishedAnimating && b2.renderer.isSVG ? d2.duration : 0;
              K(this, "render");
              var l2 = a3.plotGroup("group", "series", e2, g2, k2);
              a3.markerGroup = a3.plotGroup("markerGroup", "markers", e2, g2, k2);
              false !== c2.clip && a3.setClip();
              a3.animate && b2 && a3.animate(true);
              l2.inverted = J(a3.invertible, a3.isCartesian) ? h2 : false;
              a3.drawGraph && (a3.drawGraph(), a3.applyZones());
              a3.visible && a3.drawPoints();
              a3.drawDataLabels && a3.drawDataLabels();
              a3.redrawPoints && a3.redrawPoints();
              a3.drawTracker && false !== a3.options.enableMouseTracking && a3.drawTracker();
              a3.invertGroups(h2);
              a3.animate && b2 && a3.animate();
              f3 || (b2 && d2.defer && (b2 += d2.defer), a3.animationTimeout = R(function() {
                a3.afterAnimate();
              }, b2 || 0));
              a3.isDirty = false;
              a3.hasRendered = true;
              K(a3, "afterRender");
            };
            a2.prototype.redraw = function() {
              var a3 = this.chart, b2 = this.isDirty || this.isDirtyData, c2 = this.group, d2 = this.xAxis, e2 = this.yAxis;
              c2 && (a3.inverted && c2.attr({ width: a3.plotWidth, height: a3.plotHeight }), c2.animate({ translateX: J(d2 && d2.left, a3.plotLeft), translateY: J(e2 && e2.top, a3.plotTop) }));
              this.translate();
              this.render();
              b2 && delete this.kdTree;
            };
            a2.prototype.searchPoint = function(a3, b2) {
              var c2 = this.xAxis, d2 = this.yAxis, e2 = this.chart.inverted;
              return this.searchKDTree({ clientX: e2 ? c2.len - a3.chartY + c2.pos : a3.chartX - c2.pos, plotY: e2 ? d2.len - a3.chartX + d2.pos : a3.chartY - d2.pos }, b2, a3);
            };
            a2.prototype.buildKDTree = function(a3) {
              function b2(a4, d3, e2) {
                var g2 = a4 && a4.length;
                if (g2) {
                  var f3 = c2.kdAxisArray[d3 % e2];
                  a4.sort(function(a5, b3) {
                    return a5[f3] - b3[f3];
                  });
                  g2 = Math.floor(g2 / 2);
                  return { point: a4[g2], left: b2(a4.slice(0, g2), d3 + 1, e2), right: b2(a4.slice(g2 + 1), d3 + 1, e2) };
                }
              }
              this.buildingKdTree = true;
              var c2 = this, d2 = -1 < c2.options.findNearestPointBy.indexOf("y") ? 2 : 1;
              delete c2.kdTree;
              R(function() {
                c2.kdTree = b2(c2.getValidPoints(null, !c2.directTouch), d2, d2);
                c2.buildingKdTree = false;
              }, c2.options.kdNow || a3 && "touchstart" === a3.type ? 0 : 1);
            };
            a2.prototype.searchKDTree = function(a3, b2, c2) {
              function d2(a4, b3, c3, l2) {
                var n2 = b3.point, m2 = e2.kdAxisArray[c3 % l2], q2 = n2, r2 = g(a4[f3]) && g(n2[f3]) ? Math.pow(a4[f3] - n2[f3], 2) : null;
                var p2 = g(a4[k2]) && g(n2[k2]) ? Math.pow(a4[k2] - n2[k2], 2) : null;
                p2 = (r2 || 0) + (p2 || 0);
                n2.dist = g(p2) ? Math.sqrt(p2) : Number.MAX_VALUE;
                n2.distX = g(r2) ? Math.sqrt(r2) : Number.MAX_VALUE;
                m2 = a4[m2] - n2[m2];
                p2 = 0 > m2 ? "left" : "right";
                r2 = 0 > m2 ? "right" : "left";
                b3[p2] && (p2 = d2(a4, b3[p2], c3 + 1, l2), q2 = p2[h2] < q2[h2] ? p2 : n2);
                b3[r2] && Math.sqrt(m2 * m2) < q2[h2] && (a4 = d2(a4, b3[r2], c3 + 1, l2), q2 = a4[h2] < q2[h2] ? a4 : q2);
                return q2;
              }
              var e2 = this, f3 = this.kdAxisArray[0], k2 = this.kdAxisArray[1], h2 = b2 ? "distX" : "dist";
              b2 = -1 < e2.options.findNearestPointBy.indexOf("y") ? 2 : 1;
              this.kdTree || this.buildingKdTree || this.buildKDTree(c2);
              if (this.kdTree) return d2(a3, this.kdTree, b2, b2);
            };
            a2.prototype.pointPlacementToXValue = function() {
              var a3 = this.options, b2 = a3.pointRange, c2 = this.xAxis;
              a3 = a3.pointPlacement;
              "between" === a3 && (a3 = c2.reversed ? -0.5 : 0.5);
              return O(a3) ? a3 * (b2 || c2.pointRange) : 0;
            };
            a2.prototype.isPointInside = function(a3) {
              var b2 = this.chart, c2 = this.xAxis, d2 = this.yAxis;
              return "undefined" !== typeof a3.plotY && "undefined" !== typeof a3.plotX && 0 <= a3.plotY && a3.plotY <= (d2 ? d2.len : b2.plotHeight) && 0 <= a3.plotX && a3.plotX <= (c2 ? c2.len : b2.plotWidth);
            };
            a2.prototype.drawTracker = function() {
              var a3 = this, b2 = a3.options, c2 = b2.trackByArea, d2 = [].concat(c2 ? a3.areaPath : a3.graphPath), e2 = a3.chart, g2 = e2.pointer, f3 = e2.renderer, k2 = e2.options.tooltip.snap, l2 = a3.tracker, n2 = function(b3) {
                if (e2.hoverSeries !== a3) a3.onMouseOver();
              }, m2 = "rgba(192,192,192," + (t ? 1e-4 : 2e-3) + ")";
              l2 ? l2.attr({ d: d2 }) : a3.graph && (a3.tracker = f3.path(d2).attr({ visibility: a3.visible ? "visible" : "hidden", zIndex: 2 }).addClass(c2 ? "highcharts-tracker-area" : "highcharts-tracker-line").add(a3.group), e2.styledMode || a3.tracker.attr({
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                stroke: m2,
                fill: c2 ? m2 : "none",
                "stroke-width": a3.graph.strokeWidth() + (c2 ? 0 : 2 * k2)
              }), [a3.tracker, a3.markerGroup, a3.dataLabelsGroup].forEach(function(a4) {
                if (a4 && (a4.addClass("highcharts-tracker").on("mouseover", n2).on("mouseout", function(a5) {
                  g2.onTrackerMouseOut(a5);
                }), b2.cursor && !e2.styledMode && a4.css({ cursor: b2.cursor }), h)) a4.on("touchstart", n2);
              }));
              K(this, "afterDrawTracker");
            };
            a2.prototype.addPoint = function(a3, b2, c2, d2, e2) {
              var g2 = this.options, f3 = this.data, k2 = this.chart, h2 = this.xAxis;
              h2 = h2 && h2.hasNames && h2.names;
              var l2 = g2.data, n2 = this.xData, m2;
              b2 = J(b2, true);
              var q2 = { series: this };
              this.pointClass.prototype.applyOptions.apply(q2, [a3]);
              var r2 = q2.x;
              var p2 = n2.length;
              if (this.requireSorting && r2 < n2[p2 - 1]) for (m2 = true; p2 && n2[p2 - 1] > r2; ) p2--;
              this.updateParallelArrays(q2, "splice", p2, 0, 0);
              this.updateParallelArrays(q2, p2);
              h2 && q2.name && (h2[r2] = q2.name);
              l2.splice(p2, 0, a3);
              if (m2 || this.processedData) this.data.splice(p2, 0, null), this.processData();
              "point" === g2.legendType && this.generatePoints();
              c2 && (f3[0] && f3[0].remove ? f3[0].remove(false) : (f3.shift(), this.updateParallelArrays(
                q2,
                "shift"
              ), l2.shift()));
              false !== e2 && K(this, "addPoint", { point: q2 });
              this.isDirtyData = this.isDirty = true;
              b2 && k2.redraw(d2);
            };
            a2.prototype.removePoint = function(a3, b2, c2) {
              var d2 = this, g2 = d2.data, f3 = g2[a3], k2 = d2.points, h2 = d2.chart, l2 = function() {
                k2 && k2.length === g2.length && k2.splice(a3, 1);
                g2.splice(a3, 1);
                d2.options.data.splice(a3, 1);
                d2.updateParallelArrays(f3 || { series: d2 }, "splice", a3, 1);
                f3 && f3.destroy();
                d2.isDirty = true;
                d2.isDirtyData = true;
                b2 && h2.redraw();
              };
              e(c2, h2);
              b2 = J(b2, true);
              f3 ? f3.firePointEvent("remove", null, l2) : l2();
            };
            a2.prototype.remove = function(a3, b2, c2, d2) {
              function e2() {
                g2.destroy(d2);
                f3.isDirtyLegend = f3.isDirtyBox = true;
                f3.linkSeries();
                J(a3, true) && f3.redraw(b2);
              }
              var g2 = this, f3 = g2.chart;
              false !== c2 ? K(g2, "remove", null, e2) : e2();
            };
            a2.prototype.update = function(a3, b2) {
              a3 = k(a3, this.userOptions);
              K(this, "update", { options: a3 });
              var c2 = this, d2 = c2.chart, e2 = c2.userOptions, g2 = c2.initialType || c2.type, f3 = d2.options.plotOptions, h2 = v[g2].prototype, l2 = c2.finishedAnimating && { animation: false }, n2 = {}, m2, q2 = ["eventOptions", "navigatorSeries", "baseSeries"], p2 = a3.type || e2.type || d2.options.chart.type, t2 = !(this.hasDerivedData || p2 && p2 !== this.type || "undefined" !== typeof a3.pointStart || "undefined" !== typeof a3.pointInterval || "undefined" !== typeof a3.relativeXValue || a3.joinBy || a3.mapData || c2.hasOptionChanged("dataGrouping") || c2.hasOptionChanged("pointStart") || c2.hasOptionChanged("pointInterval") || c2.hasOptionChanged("pointIntervalUnit") || c2.hasOptionChanged("keys"));
              p2 = p2 || g2;
              t2 && (q2.push(
                "data",
                "isDirtyData",
                "points",
                "processedXData",
                "processedYData",
                "xIncrement",
                "cropped",
                "_hasPointMarkers",
                "_hasPointLabels",
                "clips",
                "nodes",
                "layout",
                "level",
                "mapMap",
                "mapData",
                "minY",
                "maxY",
                "minX",
                "maxX"
              ), false !== a3.visible && q2.push("area", "graph"), c2.parallelArrays.forEach(function(a4) {
                q2.push(a4 + "Data");
              }), a3.data && (a3.dataSorting && x(c2.options.dataSorting, a3.dataSorting), this.setData(a3.data, false)));
              a3 = Z(e2, l2, { index: "undefined" === typeof e2.index ? c2.index : e2.index, pointStart: J(f3 && f3.series && f3.series.pointStart, e2.pointStart, c2.xData[0]) }, !t2 && { data: c2.options.data }, a3);
              t2 && a3.data && (a3.data = c2.options.data);
              q2 = ["group", "markerGroup", "dataLabelsGroup", "transformGroup"].concat(q2);
              q2.forEach(function(a4) {
                q2[a4] = c2[a4];
                delete c2[a4];
              });
              f3 = false;
              if (v[p2]) {
                if (f3 = p2 !== c2.type, c2.remove(false, false, false, true), f3) if (Object.setPrototypeOf) Object.setPrototypeOf(c2, v[p2].prototype);
                else {
                  l2 = Object.hasOwnProperty.call(c2, "hcEvents") && c2.hcEvents;
                  for (m2 in h2) c2[m2] = void 0;
                  x(c2, v[p2].prototype);
                  l2 ? c2.hcEvents = l2 : delete c2.hcEvents;
                }
              } else r(17, true, d2, { missingModuleFor: p2 });
              q2.forEach(function(a4) {
                c2[a4] = q2[a4];
              });
              c2.init(d2, a3);
              if (t2 && this.points) {
                var w2 = c2.options;
                false === w2.visible ? (n2.graphic = 1, n2.dataLabel = 1) : c2._hasPointLabels || (a3 = w2.marker, h2 = w2.dataLabels, !a3 || false !== a3.enabled && (e2.marker && e2.marker.symbol) === a3.symbol || (n2.graphic = 1), h2 && false === h2.enabled && (n2.dataLabel = 1));
                this.points.forEach(function(a4) {
                  a4 && a4.series && (a4.resolveColor(), Object.keys(n2).length && a4.destroyElements(n2), false === w2.showInLegend && a4.legendItem && d2.legend.destroyItem(a4));
                }, this);
              }
              c2.initialType = g2;
              d2.linkSeries();
              f3 && c2.linkedSeries.length && (c2.isDirtyData = true);
              K(this, "afterUpdate");
              J(b2, true) && d2.redraw(t2 ? void 0 : false);
            };
            a2.prototype.setName = function(a3) {
              this.name = this.options.name = this.userOptions.name = a3;
              this.chart.isDirtyLegend = true;
            };
            a2.prototype.hasOptionChanged = function(a3) {
              var b2 = this.options[a3], c2 = this.chart.options.plotOptions, d2 = this.userOptions[a3];
              return d2 ? b2 !== d2 : b2 !== J(c2 && c2[this.type] && c2[this.type][a3], c2 && c2.series && c2.series[a3], b2);
            };
            a2.prototype.onMouseOver = function() {
              var a3 = this.chart, b2 = a3.hoverSeries;
              a3.pointer.setHoverChartIndex();
              if (b2 && b2 !== this) b2.onMouseOut();
              this.options.events.mouseOver && K(this, "mouseOver");
              this.setState("hover");
              a3.hoverSeries = this;
            };
            a2.prototype.onMouseOut = function() {
              var a3 = this.options, b2 = this.chart, c2 = b2.tooltip, d2 = b2.hoverPoint;
              b2.hoverSeries = null;
              if (d2) d2.onMouseOut();
              this && a3.events.mouseOut && K(this, "mouseOut");
              !c2 || this.stickyTracking || c2.shared && !this.noSharedTooltip || c2.hide();
              b2.series.forEach(function(a4) {
                a4.setState("", true);
              });
            };
            a2.prototype.setState = function(a3, b2) {
              var c2 = this, d2 = c2.options, e2 = c2.graph, g2 = d2.inactiveOtherPoints, f3 = d2.states, k2 = J(f3[a3 || "normal"] && f3[a3 || "normal"].animation, c2.chart.options.chart.animation), h2 = d2.lineWidth, l2 = 0, n2 = d2.opacity;
              a3 = a3 || "";
              if (c2.state !== a3 && ([c2.group, c2.markerGroup, c2.dataLabelsGroup].forEach(function(b3) {
                b3 && (c2.state && b3.removeClass("highcharts-series-" + c2.state), a3 && b3.addClass("highcharts-series-" + a3));
              }), c2.state = a3, !c2.chart.styledMode)) {
                if (f3[a3] && false === f3[a3].enabled) return;
                a3 && (h2 = f3[a3].lineWidth || h2 + (f3[a3].lineWidthPlus || 0), n2 = J(f3[a3].opacity, n2));
                if (e2 && !e2.dashstyle) for (d2 = { "stroke-width": h2 }, e2.animate(d2, k2); c2["zone-graph-" + l2]; ) c2["zone-graph-" + l2].animate(d2, k2), l2 += 1;
                g2 || [c2.group, c2.markerGroup, c2.dataLabelsGroup, c2.labelBySeries].forEach(function(a4) {
                  a4 && a4.animate({ opacity: n2 }, k2);
                });
              }
              b2 && g2 && c2.points && c2.setAllPointsToState(a3 || void 0);
            };
            a2.prototype.setAllPointsToState = function(a3) {
              this.points.forEach(function(b2) {
                b2.setState && b2.setState(a3);
              });
            };
            a2.prototype.setVisible = function(a3, b2) {
              var c2 = this, d2 = c2.chart, e2 = c2.legendItem, g2 = d2.options.chart.ignoreHiddenSeries, f3 = c2.visible, k2 = (c2.visible = a3 = c2.options.visible = c2.userOptions.visible = "undefined" === typeof a3 ? !f3 : a3) ? "show" : "hide";
              ["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"].forEach(function(a4) {
                if (c2[a4]) c2[a4][k2]();
              });
              if (d2.hoverSeries === c2 || (d2.hoverPoint && d2.hoverPoint.series) === c2) c2.onMouseOut();
              e2 && d2.legend.colorizeItem(c2, a3);
              c2.isDirty = true;
              c2.options.stacking && d2.series.forEach(function(a4) {
                a4.options.stacking && a4.visible && (a4.isDirty = true);
              });
              c2.linkedSeries.forEach(function(b3) {
                b3.setVisible(a3, false);
              });
              g2 && (d2.isDirtyBox = true);
              K(c2, k2);
              false !== b2 && d2.redraw();
            };
            a2.prototype.show = function() {
              this.setVisible(true);
            };
            a2.prototype.hide = function() {
              this.setVisible(false);
            };
            a2.prototype.select = function(a3) {
              this.selected = a3 = this.options.selected = "undefined" === typeof a3 ? !this.selected : a3;
              this.checkbox && (this.checkbox.checked = a3);
              K(this, a3 ? "select" : "unselect");
            };
            a2.prototype.shouldShowTooltip = function(a3, b2, c2) {
              void 0 === c2 && (c2 = {});
              c2.series = this;
              c2.visiblePlotOnly = true;
              return this.chart.isInsidePlot(a3, b2, c2);
            };
            a2.defaultOptions = I;
            return a2;
          }();
          x(a.prototype, { axisTypes: ["xAxis", "yAxis"], coll: "series", colorCounter: 0, cropShoulder: 1, directTouch: false, drawLegendSymbol: u.drawLineMarker, isCartesian: true, kdAxisArray: ["clientX", "plotY"], parallelArrays: ["x", "y"], pointClass: H, requireSorting: true, sorted: true });
          B.series = a;
          "";
          "";
          return a;
        });
        M(f, "Extensions/ScrollablePlotArea.js", [
          f["Core/Animation/AnimationUtilities.js"],
          f["Core/Axis/Axis.js"],
          f["Core/Chart/Chart.js"],
          f["Core/Series/Series.js"],
          f["Core/Renderer/RendererRegistry.js"],
          f["Core/Utilities.js"]
        ], function(a, f2, C, G, u, H) {
          var F = a.stop, B = H.addEvent, z = H.createElement, p = H.merge, m = H.pick;
          B(C, "afterSetChartSize", function(a2) {
            var d = this.options.chart.scrollablePlotArea, e = d && d.minWidth;
            d = d && d.minHeight;
            if (!this.renderer.forExport) {
              if (e) {
                if (this.scrollablePixelsX = e = Math.max(0, e - this.chartWidth)) {
                  this.scrollablePlotBox = this.renderer.scrollablePlotBox = p(this.plotBox);
                  this.plotBox.width = this.plotWidth += e;
                  this.inverted ? this.clipBox.height += e : this.clipBox.width += e;
                  var h = { 1: { name: "right", value: e } };
                }
              } else d && (this.scrollablePixelsY = e = Math.max(0, d - this.chartHeight)) && (this.scrollablePlotBox = this.renderer.scrollablePlotBox = p(this.plotBox), this.plotBox.height = this.plotHeight += e, this.inverted ? this.clipBox.width += e : this.clipBox.height += e, h = { 2: { name: "bottom", value: e } });
              h && !a2.skipAxes && this.axes.forEach(function(a3) {
                h[a3.side] ? a3.getPlotLinePath = function() {
                  var d2 = h[a3.side].name, e2 = this[d2];
                  this[d2] = e2 - h[a3.side].value;
                  var l = f2.prototype.getPlotLinePath.apply(this, arguments);
                  this[d2] = e2;
                  return l;
                } : (a3.setAxisSize(), a3.setAxisTranslation());
              });
            }
          });
          B(C, "render", function() {
            this.scrollablePixelsX || this.scrollablePixelsY ? (this.setUpScrolling && this.setUpScrolling(), this.applyFixed()) : this.fixedDiv && this.applyFixed();
          });
          C.prototype.setUpScrolling = function() {
            var a2 = this, d = { WebkitOverflowScrolling: "touch", overflowX: "hidden", overflowY: "hidden" };
            this.scrollablePixelsX && (d.overflowX = "auto");
            this.scrollablePixelsY && (d.overflowY = "auto");
            this.scrollingParent = z(
              "div",
              { className: "highcharts-scrolling-parent" },
              { position: "relative" },
              this.renderTo
            );
            this.scrollingContainer = z("div", { className: "highcharts-scrolling" }, d, this.scrollingParent);
            B(this.scrollingContainer, "scroll", function() {
              a2.pointer && delete a2.pointer.chartPosition;
            });
            this.innerContainer = z("div", { className: "highcharts-inner-container" }, null, this.scrollingContainer);
            this.innerContainer.appendChild(this.container);
            this.setUpScrolling = null;
          };
          C.prototype.moveFixedElements = function() {
            var a2 = this.container, d = this.fixedRenderer, f3 = ".highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-legend-checkbox .highcharts-navigator-series .highcharts-navigator-xaxis .highcharts-navigator-yaxis .highcharts-navigator .highcharts-reset-zoom .highcharts-drillup-button .highcharts-scrollbar .highcharts-subtitle .highcharts-title".split(" "), h;
            this.scrollablePixelsX && !this.inverted ? h = ".highcharts-yaxis" : this.scrollablePixelsX && this.inverted ? h = ".highcharts-xaxis" : this.scrollablePixelsY && !this.inverted ? h = ".highcharts-xaxis" : this.scrollablePixelsY && this.inverted && (h = ".highcharts-yaxis");
            h && f3.push(h + ":not(.highcharts-radial-axis)", h + "-labels:not(.highcharts-radial-axis-labels)");
            f3.forEach(function(e) {
              [].forEach.call(a2.querySelectorAll(e), function(a3) {
                (a3.namespaceURI === d.SVG_NS ? d.box : d.box.parentNode).appendChild(a3);
                a3.style.pointerEvents = "auto";
              });
            });
          };
          C.prototype.applyFixed = function() {
            var a2 = !this.fixedDiv, d = this.options.chart, f3 = d.scrollablePlotArea, h = u.getRendererType();
            a2 ? (this.fixedDiv = z("div", { className: "highcharts-fixed" }, { position: "absolute", overflow: "hidden", pointerEvents: "none", zIndex: (d.style && d.style.zIndex || 0) + 2, top: 0 }, null, true), this.scrollingContainer && this.scrollingContainer.parentNode.insertBefore(this.fixedDiv, this.scrollingContainer), this.renderTo.style.overflow = "visible", this.fixedRenderer = d = new h(
              this.fixedDiv,
              this.chartWidth,
              this.chartHeight,
              this.options.chart.style
            ), this.scrollableMask = d.path().attr({ fill: this.options.chart.backgroundColor || "#fff", "fill-opacity": m(f3.opacity, 0.85), zIndex: -1 }).addClass("highcharts-scrollable-mask").add(), B(this, "afterShowResetZoom", this.moveFixedElements), B(this, "afterApplyDrilldown", this.moveFixedElements), B(this, "afterLayOutTitles", this.moveFixedElements)) : this.fixedRenderer.setSize(this.chartWidth, this.chartHeight);
            if (this.scrollableDirty || a2) this.scrollableDirty = false, this.moveFixedElements();
            d = this.chartWidth + (this.scrollablePixelsX || 0);
            h = this.chartHeight + (this.scrollablePixelsY || 0);
            F(this.container);
            this.container.style.width = d + "px";
            this.container.style.height = h + "px";
            this.renderer.boxWrapper.attr({ width: d, height: h, viewBox: [0, 0, d, h].join(" ") });
            this.chartBackground.attr({ width: d, height: h });
            this.scrollingContainer.style.height = this.chartHeight + "px";
            a2 && (f3.scrollPositionX && (this.scrollingContainer.scrollLeft = this.scrollablePixelsX * f3.scrollPositionX), f3.scrollPositionY && (this.scrollingContainer.scrollTop = this.scrollablePixelsY * f3.scrollPositionY));
            h = this.axisOffset;
            a2 = this.plotTop - h[0] - 1;
            f3 = this.plotLeft - h[3] - 1;
            d = this.plotTop + this.plotHeight + h[2] + 1;
            h = this.plotLeft + this.plotWidth + h[1] + 1;
            var p2 = this.plotLeft + this.plotWidth - (this.scrollablePixelsX || 0), n = this.plotTop + this.plotHeight - (this.scrollablePixelsY || 0);
            a2 = this.scrollablePixelsX ? [["M", 0, a2], ["L", this.plotLeft - 1, a2], ["L", this.plotLeft - 1, d], ["L", 0, d], ["Z"], ["M", p2, a2], ["L", this.chartWidth, a2], ["L", this.chartWidth, d], ["L", p2, d], ["Z"]] : this.scrollablePixelsY ? [["M", f3, 0], ["L", f3, this.plotTop - 1], ["L", h, this.plotTop - 1], ["L", h, 0], ["Z"], ["M", f3, n], ["L", f3, this.chartHeight], ["L", h, this.chartHeight], ["L", h, n], ["Z"]] : [["M", 0, 0]];
            "adjustHeight" !== this.redrawTrigger && this.scrollableMask.attr({ d: a2 });
          };
          B(f2, "afterInit", function() {
            this.chart.scrollableDirty = true;
          });
          B(G, "show", function() {
            this.chart.scrollableDirty = true;
          });
          "";
        });
        M(f, "Core/Axis/StackingAxis.js", [f["Core/Animation/AnimationUtilities.js"], f["Core/Axis/Axis.js"], f["Core/Utilities.js"]], function(a, f2, C) {
          var F = a.getDeferredAnimation, u = C.addEvent, H = C.destroyObjectProperties, I = C.fireEvent, B = C.isNumber, z = C.objectEach, p;
          (function(a2) {
            function e() {
              var a3 = this.stacking;
              if (a3) {
                var d2 = a3.stacks;
                z(d2, function(a4, e2) {
                  H(a4);
                  d2[e2] = null;
                });
                a3 && a3.stackTotalGroup && a3.stackTotalGroup.destroy();
              }
            }
            function d() {
              this.stacking || (this.stacking = new h(this));
            }
            var f3 = [];
            a2.compose = function(a3) {
              -1 === f3.indexOf(a3) && (f3.push(a3), u(a3, "init", d), u(a3, "destroy", e));
              return a3;
            };
            var h = function() {
              function a3(a4) {
                this.oldStacks = {};
                this.stacks = {};
                this.stacksTouched = 0;
                this.axis = a4;
              }
              a3.prototype.buildStacks = function() {
                var a4 = this.axis, d2 = a4.series, e2 = a4.options.reversedStacks, f4 = d2.length, h2;
                if (!a4.isXAxis) {
                  this.usePercentage = false;
                  for (h2 = f4; h2--; ) {
                    var l = d2[e2 ? h2 : f4 - h2 - 1];
                    l.setStackedPoints();
                    l.setGroupedPoints();
                  }
                  for (h2 = 0; h2 < f4; h2++) d2[h2].modifyStacks();
                  I(a4, "afterBuildStacks");
                }
              };
              a3.prototype.cleanStacks = function() {
                if (!this.axis.isXAxis) {
                  if (this.oldStacks) var a4 = this.stacks = this.oldStacks;
                  z(a4, function(a5) {
                    z(a5, function(a6) {
                      a6.cumulative = a6.total;
                    });
                  });
                }
              };
              a3.prototype.resetStacks = function() {
                var a4 = this, d2 = a4.stacks;
                a4.axis.isXAxis || z(d2, function(d3) {
                  z(
                    d3,
                    function(e2, f4) {
                      B(e2.touched) && e2.touched < a4.stacksTouched ? (e2.destroy(), delete d3[f4]) : (e2.total = null, e2.cumulative = null);
                    }
                  );
                });
              };
              a3.prototype.renderStackTotals = function() {
                var a4 = this.axis, d2 = a4.chart, e2 = d2.renderer, f4 = this.stacks;
                a4 = F(d2, a4.options.stackLabels && a4.options.stackLabels.animation || false);
                var h2 = this.stackTotalGroup = this.stackTotalGroup || e2.g("stack-labels").attr({ visibility: "visible", zIndex: 6, opacity: 0 }).add();
                h2.translate(d2.plotLeft, d2.plotTop);
                z(f4, function(a5) {
                  z(a5, function(a6) {
                    a6.render(h2);
                  });
                });
                h2.animate(
                  { opacity: 1 },
                  a4
                );
              };
              return a3;
            }();
            a2.Additions = h;
          })(p || (p = {}));
          return p;
        });
        M(f, "Extensions/Stacking.js", [f["Core/Axis/Axis.js"], f["Core/Chart/Chart.js"], f["Core/FormatUtilities.js"], f["Core/Globals.js"], f["Core/Series/Series.js"], f["Core/Axis/StackingAxis.js"], f["Core/Utilities.js"]], function(a, f2, C, G, u, H, I) {
          var B = C.format, z = I.correctFloat, p = I.defined, m = I.destroyObjectProperties, e = I.isArray, d = I.isNumber, l = I.objectEach, h = I.pick, t = function() {
            function a2(a3, d2, e2, f3, h2) {
              var k = a3.chart.inverted;
              this.axis = a3;
              this.isNegative = e2;
              this.options = d2 = d2 || {};
              this.x = f3;
              this.total = null;
              this.points = {};
              this.hasValidPoints = false;
              this.stack = h2;
              this.rightCliff = this.leftCliff = 0;
              this.alignOptions = { align: d2.align || (k ? e2 ? "left" : "right" : "center"), verticalAlign: d2.verticalAlign || (k ? "middle" : e2 ? "bottom" : "top"), y: d2.y, x: d2.x };
              this.textAlign = d2.textAlign || (k ? e2 ? "right" : "left" : "center");
            }
            a2.prototype.destroy = function() {
              m(this, this.axis);
            };
            a2.prototype.render = function(a3) {
              var d2 = this.axis.chart, e2 = this.options, f3 = e2.format;
              f3 = f3 ? B(f3, this, d2) : e2.formatter.call(this);
              this.label ? this.label.attr({
                text: f3,
                visibility: "hidden"
              }) : (this.label = d2.renderer.label(f3, null, null, e2.shape, null, null, e2.useHTML, false, "stack-labels"), f3 = { r: e2.borderRadius || 0, text: f3, rotation: e2.rotation, padding: h(e2.padding, 5), visibility: "hidden" }, d2.styledMode || (f3.fill = e2.backgroundColor, f3.stroke = e2.borderColor, f3["stroke-width"] = e2.borderWidth, this.label.css(e2.style)), this.label.attr(f3), this.label.added || this.label.add(a3));
              this.label.labelrank = d2.plotSizeY;
            };
            a2.prototype.setOffset = function(a3, e2, f3, l2, m2) {
              var k = this.axis, c = k.chart;
              l2 = k.translate(k.stacking.usePercentage ? 100 : l2 ? l2 : this.total, 0, 0, 0, 1);
              f3 = k.translate(f3 ? f3 : 0);
              f3 = p(l2) && Math.abs(l2 - f3);
              a3 = h(m2, c.xAxis[0].translate(this.x)) + a3;
              k = p(l2) && this.getStackBox(c, this, a3, l2, e2, f3, k);
              e2 = this.label;
              f3 = this.isNegative;
              a3 = "justify" === h(this.options.overflow, "justify");
              var g = this.textAlign;
              e2 && k && (m2 = e2.getBBox(), l2 = e2.padding, g = "left" === g ? c.inverted ? -l2 : l2 : "right" === g ? m2.width : c.inverted && "center" === g ? m2.width / 2 : c.inverted ? f3 ? m2.width + l2 : -l2 : m2.width / 2, f3 = c.inverted ? m2.height / 2 : f3 ? -l2 : m2.height, this.alignOptions.x = h(this.options.x, 0), this.alignOptions.y = h(this.options.y, 0), k.x -= g, k.y -= f3, e2.align(this.alignOptions, null, k), c.isInsidePlot(e2.alignAttr.x + g - this.alignOptions.x, e2.alignAttr.y + f3 - this.alignOptions.y) ? e2.show() : (e2.alignAttr.y = -9999, a3 = false), a3 && u.prototype.justifyDataLabel.call(this.axis, e2, this.alignOptions, e2.alignAttr, m2, k), e2.attr({ x: e2.alignAttr.x, y: e2.alignAttr.y }), h(!a3 && this.options.crop, true) && ((c = d(e2.x) && d(e2.y) && c.isInsidePlot(e2.x - l2 + e2.width, e2.y) && c.isInsidePlot(e2.x + l2, e2.y)) || e2.hide()));
            };
            a2.prototype.getStackBox = function(a3, d2, e2, f3, h2, k, c) {
              var g = d2.axis.reversed, b = a3.inverted, l2 = c.height + c.pos - (b ? a3.plotLeft : a3.plotTop);
              d2 = d2.isNegative && !g || !d2.isNegative && g;
              return { x: b ? d2 ? f3 - c.right : f3 - k + c.pos - a3.plotLeft : e2 + a3.xAxis[0].transB - a3.plotLeft, y: b ? c.height - e2 - h2 : d2 ? l2 - f3 - k : l2 - f3, width: b ? k : h2, height: b ? h2 : k };
            };
            return a2;
          }();
          f2.prototype.getStacks = function() {
            var a2 = this, d2 = a2.inverted;
            a2.yAxis.forEach(function(a3) {
              a3.stacking && a3.stacking.stacks && a3.hasVisibleSeries && (a3.stacking.oldStacks = a3.stacking.stacks);
            });
            a2.series.forEach(function(e2) {
              var f3 = e2.xAxis && e2.xAxis.options || {};
              !e2.options.stacking || true !== e2.visible && false !== a2.options.chart.ignoreHiddenSeries || (e2.stackKey = [e2.type, h(e2.options.stack, ""), d2 ? f3.top : f3.left, d2 ? f3.height : f3.width].join());
            });
          };
          H.compose(a);
          u.prototype.setGroupedPoints = function() {
            var a2 = this.yAxis.stacking;
            this.options.centerInCategory && (this.is("column") || this.is("columnrange")) && !this.options.stacking && 1 < this.chart.series.length ? u.prototype.setStackedPoints.call(this, "group") : a2 && l(a2.stacks, function(d2, e2) {
              "group" === e2.slice(-5) && (l(d2, function(a3) {
                return a3.destroy();
              }), delete a2.stacks[e2]);
            });
          };
          u.prototype.setStackedPoints = function(a2) {
            var d2 = a2 || this.options.stacking;
            if (d2 && (true === this.visible || false === this.chart.options.chart.ignoreHiddenSeries)) {
              var f3 = this.processedXData, l2 = this.processedYData, m2 = [], n = l2.length, k = this.options, c = k.threshold, g = h(k.startFromThreshold && c, 0);
              k = k.stack;
              a2 = a2 ? this.type + "," + d2 : this.stackKey;
              var b = "-" + a2, r = this.negStacks, x = this.yAxis, D = x.stacking.stacks, u2 = x.stacking.oldStacks, B2, F;
              x.stacking.stacksTouched += 1;
              for (F = 0; F < n; F++) {
                var C2 = f3[F];
                var G2 = l2[F];
                var I2 = this.getStackIndicator(
                  I2,
                  C2,
                  this.index
                );
                var H2 = I2.key;
                var J = (B2 = r && G2 < (g ? 0 : c)) ? b : a2;
                D[J] || (D[J] = {});
                D[J][C2] || (u2[J] && u2[J][C2] ? (D[J][C2] = u2[J][C2], D[J][C2].total = null) : D[J][C2] = new t(x, x.options.stackLabels, B2, C2, k));
                J = D[J][C2];
                null !== G2 ? (J.points[H2] = J.points[this.index] = [h(J.cumulative, g)], p(J.cumulative) || (J.base = H2), J.touched = x.stacking.stacksTouched, 0 < I2.index && false === this.singleStacks && (J.points[H2][0] = J.points[this.index + "," + C2 + ",0"][0])) : J.points[H2] = J.points[this.index] = null;
                "percent" === d2 ? (B2 = B2 ? a2 : b, r && D[B2] && D[B2][C2] ? (B2 = D[B2][C2], J.total = B2.total = Math.max(B2.total, J.total) + Math.abs(G2) || 0) : J.total = z(J.total + (Math.abs(G2) || 0))) : "group" === d2 ? (e(G2) && (G2 = G2[0]), null !== G2 && (J.total = (J.total || 0) + 1)) : J.total = z(J.total + (G2 || 0));
                J.cumulative = "group" === d2 ? (J.total || 1) - 1 : h(J.cumulative, g) + (G2 || 0);
                null !== G2 && (J.points[H2].push(J.cumulative), m2[F] = J.cumulative, J.hasValidPoints = true);
              }
              "percent" === d2 && (x.stacking.usePercentage = true);
              "group" !== d2 && (this.stackedYData = m2);
              x.stacking.oldStacks = {};
            }
          };
          u.prototype.modifyStacks = function() {
            var a2 = this, d2 = a2.stackKey, e2 = a2.yAxis.stacking.stacks, f3 = a2.processedXData, h2, l2 = a2.options.stacking;
            a2[l2 + "Stacker"] && [d2, "-" + d2].forEach(function(d3) {
              for (var c = f3.length, g, b; c--; ) if (g = f3[c], h2 = a2.getStackIndicator(h2, g, a2.index, d3), b = (g = e2[d3] && e2[d3][g]) && g.points[h2.key]) a2[l2 + "Stacker"](b, g, c);
            });
          };
          u.prototype.percentStacker = function(a2, d2, e2) {
            d2 = d2.total ? 100 / d2.total : 0;
            a2[0] = z(a2[0] * d2);
            a2[1] = z(a2[1] * d2);
            this.stackedYData[e2] = a2[1];
          };
          u.prototype.getStackIndicator = function(a2, d2, e2, f3) {
            !p(a2) || a2.x !== d2 || f3 && a2.stackKey !== f3 ? a2 = { x: d2, index: 0, key: f3, stackKey: f3 } : a2.index++;
            a2.key = [e2, d2, a2.index].join();
            return a2;
          };
          G.StackItem = t;
          "";
          return G.StackItem;
        });
        M(f, "Series/Line/LineSeries.js", [f["Core/Series/Series.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function(a, f2, C) {
          var F = this && this.__extends || /* @__PURE__ */ function() {
            var a2 = function(f3, z) {
              a2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a3, f4) {
                a3.__proto__ = f4;
              } || function(a3, f4) {
                for (var e in f4) f4.hasOwnProperty(e) && (a3[e] = f4[e]);
              };
              return a2(f3, z);
            };
            return function(f3, z) {
              function p() {
                this.constructor = f3;
              }
              a2(f3, z);
              f3.prototype = null === z ? Object.create(z) : (p.prototype = z.prototype, new p());
            };
          }(), u = C.defined, H = C.merge;
          C = function(f3) {
            function B() {
              var a2 = null !== f3 && f3.apply(this, arguments) || this;
              a2.data = void 0;
              a2.options = void 0;
              a2.points = void 0;
              return a2;
            }
            F(B, f3);
            B.prototype.drawGraph = function() {
              var a2 = this, f4 = this.options, m = (this.gappedPath || this.getGraphPath).call(this), e = this.chart.styledMode, d = [["graph", "highcharts-graph"]];
              e || d[0].push(f4.lineColor || this.color || "#cccccc", f4.dashStyle);
              d = a2.getZonesGraphs(d);
              d.forEach(function(d2, h) {
                var l = d2[0], n = a2[l], p = n ? "animate" : "attr";
                n ? (n.endX = a2.preventGraphAnimation ? null : m.xMap, n.animate({ d: m })) : m.length && (a2[l] = n = a2.chart.renderer.path(m).addClass(d2[1]).attr({ zIndex: 1 }).add(a2.group));
                n && !e && (l = { stroke: d2[2], "stroke-width": f4.lineWidth, fill: a2.fillGraph && a2.color || "none" }, d2[3] ? l.dashstyle = d2[3] : "square" !== f4.linecap && (l["stroke-linecap"] = l["stroke-linejoin"] = "round"), n[p](l).shadow(2 > h && f4.shadow));
                n && (n.startX = m.xMap, n.isArea = m.isArea);
              });
            };
            B.prototype.getGraphPath = function(a2, f4, m) {
              var e = this, d = e.options, l = [], h = [], p, n = d.step;
              a2 = a2 || e.points;
              var v = a2.reversed;
              v && a2.reverse();
              (n = { right: 1, center: 2 }[n] || n && 3) && v && (n = 4 - n);
              a2 = this.getValidPoints(a2, false, !(d.connectNulls && !f4 && !m));
              a2.forEach(function(t, y) {
                var A = t.plotX, q = t.plotY, k = a2[y - 1];
                (t.leftCliff || k && k.rightCliff) && !m && (p = true);
                t.isNull && !u(f4) && 0 < y ? p = !d.connectNulls : t.isNull && !f4 ? p = true : (0 === y || p ? y = [["M", t.plotX, t.plotY]] : e.getPointSpline ? y = [e.getPointSpline(a2, t, y)] : n ? (y = 1 === n ? [["L", k.plotX, q]] : 2 === n ? [["L", (k.plotX + A) / 2, k.plotY], ["L", (k.plotX + A) / 2, q]] : [["L", A, k.plotY]], y.push(["L", A, q])) : y = [[
                  "L",
                  A,
                  q
                ]], h.push(t.x), n && (h.push(t.x), 2 === n && h.push(t.x)), l.push.apply(l, y), p = false);
              });
              l.xMap = h;
              return e.graphPath = l;
            };
            B.prototype.getZonesGraphs = function(a2) {
              this.zones.forEach(function(f4, m) {
                m = ["zone-graph-" + m, "highcharts-graph highcharts-zone-graph-" + m + " " + (f4.className || "")];
                this.chart.styledMode || m.push(f4.color || this.color, f4.dashStyle || this.options.dashStyle);
                a2.push(m);
              }, this);
              return a2;
            };
            B.defaultOptions = H(a.defaultOptions, {});
            return B;
          }(a);
          f2.registerSeriesType("line", C);
          "";
          return C;
        });
        M(
          f,
          "Series/Area/AreaSeries.js",
          [f["Core/Color/Color.js"], f["Core/Legend/LegendSymbol.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]],
          function(a, f2, C, G) {
            var u = this && this.__extends || /* @__PURE__ */ function() {
              var a2 = function(e, d) {
                a2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a3, d2) {
                  a3.__proto__ = d2;
                } || function(a3, d2) {
                  for (var e2 in d2) d2.hasOwnProperty(e2) && (a3[e2] = d2[e2]);
                };
                return a2(e, d);
              };
              return function(e, d) {
                function f3() {
                  this.constructor = e;
                }
                a2(e, d);
                e.prototype = null === d ? Object.create(d) : (f3.prototype = d.prototype, new f3());
              };
            }(), F = a.parse, I = C.seriesTypes.line;
            a = G.extend;
            var B = G.merge, z = G.objectEach, p = G.pick;
            G = function(a2) {
              function e() {
                var d = null !== a2 && a2.apply(this, arguments) || this;
                d.data = void 0;
                d.options = void 0;
                d.points = void 0;
                return d;
              }
              u(e, a2);
              e.prototype.drawGraph = function() {
                this.areaPath = [];
                a2.prototype.drawGraph.apply(this);
                var d = this, e2 = this.areaPath, f3 = this.options, m = [["area", "highcharts-area", this.color, f3.fillColor]];
                this.zones.forEach(function(a3, e3) {
                  m.push(["zone-area-" + e3, "highcharts-area highcharts-zone-area-" + e3 + " " + a3.className, a3.color || d.color, a3.fillColor || f3.fillColor]);
                });
                m.forEach(function(a3) {
                  var h = a3[0], l = d[h], m2 = l ? "animate" : "attr", n = {};
                  l ? (l.endX = d.preventGraphAnimation ? null : e2.xMap, l.animate({ d: e2 })) : (n.zIndex = 0, l = d[h] = d.chart.renderer.path(e2).addClass(a3[1]).add(d.group), l.isArea = true);
                  d.chart.styledMode || (n.fill = p(a3[3], F(a3[2]).setOpacity(p(f3.fillOpacity, 0.75)).get()));
                  l[m2](n);
                  l.startX = e2.xMap;
                  l.shiftUnit = f3.step ? 2 : 1;
                });
              };
              e.prototype.getGraphPath = function(a3) {
                var d = I.prototype.getGraphPath, e2 = this.options, f3 = e2.stacking, m = this.yAxis, v, w = [], y = [], A = this.index, q = m.stacking.stacks[this.stackKey], k = e2.threshold, c = Math.round(m.getThreshold(e2.threshold));
                e2 = p(e2.connectNulls, "percent" === f3);
                var g = function(b2, d2, e3) {
                  var g2 = a3[b2];
                  b2 = f3 && q[g2.x].points[A];
                  var h = g2[e3 + "Null"] || 0;
                  e3 = g2[e3 + "Cliff"] || 0;
                  g2 = true;
                  if (e3 || h) {
                    var l = (h ? b2[0] : b2[1]) + e3;
                    var n = b2[0] + e3;
                    g2 = !!h;
                  } else !f3 && a3[d2] && a3[d2].isNull && (l = n = k);
                  "undefined" !== typeof l && (y.push({ plotX: r, plotY: null === l ? c : m.getThreshold(l), isNull: g2, isCliff: true }), w.push({ plotX: r, plotY: null === n ? c : m.getThreshold(n), doCurve: false }));
                };
                a3 = a3 || this.points;
                f3 && (a3 = this.getStackPoints(a3));
                for (v = 0; v < a3.length; v++) {
                  f3 || (a3[v].leftCliff = a3[v].rightCliff = a3[v].leftNull = a3[v].rightNull = void 0);
                  var b = a3[v].isNull;
                  var r = p(a3[v].rectPlotX, a3[v].plotX);
                  var x = f3 ? p(a3[v].yBottom, c) : c;
                  if (!b || e2) e2 || g(v, v - 1, "left"), b && !f3 && e2 || (y.push(a3[v]), w.push({ x: v, plotX: r, plotY: x })), e2 || g(v, v + 1, "right");
                }
                v = d.call(this, y, true, true);
                w.reversed = true;
                b = d.call(this, w, true, true);
                (x = b[0]) && "M" === x[0] && (b[0] = ["L", x[1], x[2]]);
                b = v.concat(b);
                b.length && b.push(["Z"]);
                d = d.call(this, y, false, e2);
                b.xMap = v.xMap;
                this.areaPath = b;
                return d;
              };
              e.prototype.getStackPoints = function(a3) {
                var d = this, e2 = [], f3 = [], m = this.xAxis, v = this.yAxis, w = v.stacking.stacks[this.stackKey], y = {}, A = v.series, q = A.length, k = v.options.reversedStacks ? 1 : -1, c = A.indexOf(d);
                a3 = a3 || this.points;
                if (this.options.stacking) {
                  for (var g = 0; g < a3.length; g++) a3[g].leftNull = a3[g].rightNull = void 0, y[a3[g].x] = a3[g];
                  z(w, function(a4, b2) {
                    null !== a4.total && f3.push(b2);
                  });
                  f3.sort(function(a4, b2) {
                    return a4 - b2;
                  });
                  var b = A.map(function(a4) {
                    return a4.visible;
                  });
                  f3.forEach(function(a4, g2) {
                    var h = 0, l, n;
                    if (y[a4] && !y[a4].isNull) e2.push(y[a4]), [-1, 1].forEach(function(e3) {
                      var h2 = 1 === e3 ? "rightNull" : "leftNull", m2 = 0, p2 = w[f3[g2 + e3]];
                      if (p2) for (var r2 = c; 0 <= r2 && r2 < q; ) {
                        var t = A[r2].index;
                        l = p2.points[t];
                        l || (t === d.index ? y[a4][h2] = true : b[r2] && (n = w[a4].points[t]) && (m2 -= n[1] - n[0]));
                        r2 += k;
                      }
                      y[a4][1 === e3 ? "rightCliff" : "leftCliff"] = m2;
                    });
                    else {
                      for (var r = c; 0 <= r && r < q; ) {
                        if (l = w[a4].points[A[r].index]) {
                          h = l[1];
                          break;
                        }
                        r += k;
                      }
                      h = p(h, 0);
                      h = v.translate(h, 0, 1, 0, 1);
                      e2.push({ isNull: true, plotX: m.translate(a4, 0, 0, 0, 1), x: a4, plotY: h, yBottom: h });
                    }
                  });
                }
                return e2;
              };
              e.defaultOptions = B(I.defaultOptions, { threshold: 0 });
              return e;
            }(I);
            a(G.prototype, { singleStacks: false, drawLegendSymbol: f2.drawRectangle });
            C.registerSeriesType("area", G);
            "";
            return G;
          }
        );
        M(f, "Series/Spline/SplineSeries.js", [f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function(a, f2) {
          var F = this && this.__extends || /* @__PURE__ */ function() {
            var a2 = function(f3, z) {
              a2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a3, f4) {
                a3.__proto__ = f4;
              } || function(a3, f4) {
                for (var e in f4) f4.hasOwnProperty(e) && (a3[e] = f4[e]);
              };
              return a2(f3, z);
            };
            return function(f3, z) {
              function p() {
                this.constructor = f3;
              }
              a2(
                f3,
                z
              );
              f3.prototype = null === z ? Object.create(z) : (p.prototype = z.prototype, new p());
            };
          }(), G = a.seriesTypes.line, u = f2.merge, H = f2.pick;
          f2 = function(a2) {
            function f3() {
              var f4 = null !== a2 && a2.apply(this, arguments) || this;
              f4.data = void 0;
              f4.options = void 0;
              f4.points = void 0;
              return f4;
            }
            F(f3, a2);
            f3.prototype.getPointSpline = function(a3, f4, m) {
              var e = f4.plotX || 0, d = f4.plotY || 0, l = a3[m - 1];
              m = a3[m + 1];
              if (l && !l.isNull && false !== l.doCurve && !f4.isCliff && m && !m.isNull && false !== m.doCurve && !f4.isCliff) {
                a3 = l.plotY || 0;
                var h = m.plotX || 0;
                m = m.plotY || 0;
                var p = 0;
                var n = (1.5 * e + (l.plotX || 0)) / 2.5;
                var v = (1.5 * d + a3) / 2.5;
                h = (1.5 * e + h) / 2.5;
                var w = (1.5 * d + m) / 2.5;
                h !== n && (p = (w - v) * (h - e) / (h - n) + d - w);
                v += p;
                w += p;
                v > a3 && v > d ? (v = Math.max(a3, d), w = 2 * d - v) : v < a3 && v < d && (v = Math.min(a3, d), w = 2 * d - v);
                w > m && w > d ? (w = Math.max(m, d), v = 2 * d - w) : w < m && w < d && (w = Math.min(m, d), v = 2 * d - w);
                f4.rightContX = h;
                f4.rightContY = w;
              }
              f4 = ["C", H(l.rightContX, l.plotX, 0), H(l.rightContY, l.plotY, 0), H(n, e, 0), H(v, d, 0), e, d];
              l.rightContX = l.rightContY = void 0;
              return f4;
            };
            f3.defaultOptions = u(G.defaultOptions);
            return f3;
          }(G);
          a.registerSeriesType("spline", f2);
          "";
          return f2;
        });
        M(f, "Series/AreaSpline/AreaSplineSeries.js", [f["Series/Area/AreaSeries.js"], f["Series/Spline/SplineSeries.js"], f["Core/Legend/LegendSymbol.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function(a, f2, C, G, u) {
          var F = this && this.__extends || /* @__PURE__ */ function() {
            var a2 = function(f3, e) {
              a2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a3, e2) {
                a3.__proto__ = e2;
              } || function(a3, e2) {
                for (var d in e2) e2.hasOwnProperty(d) && (a3[d] = e2[d]);
              };
              return a2(f3, e);
            };
            return function(f3, e) {
              function d() {
                this.constructor = f3;
              }
              a2(
                f3,
                e
              );
              f3.prototype = null === e ? Object.create(e) : (d.prototype = e.prototype, new d());
            };
          }(), I = a.prototype, B = u.extend, z = u.merge;
          u = function(p) {
            function m() {
              var a2 = null !== p && p.apply(this, arguments) || this;
              a2.data = void 0;
              a2.points = void 0;
              a2.options = void 0;
              return a2;
            }
            F(m, p);
            m.defaultOptions = z(f2.defaultOptions, a.defaultOptions);
            return m;
          }(f2);
          B(u.prototype, { getGraphPath: I.getGraphPath, getStackPoints: I.getStackPoints, drawGraph: I.drawGraph, drawLegendSymbol: C.drawRectangle });
          G.registerSeriesType("areaspline", u);
          "";
          return u;
        });
        M(
          f,
          "Series/Column/ColumnSeries.js",
          [f["Core/Animation/AnimationUtilities.js"], f["Core/Color/Color.js"], f["Core/Globals.js"], f["Core/Legend/LegendSymbol.js"], f["Core/Series/Series.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]],
          function(a, f2, C, G, u, H, I) {
            var B = this && this.__extends || /* @__PURE__ */ function() {
              var a2 = function(d2, c) {
                a2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a3, b) {
                  a3.__proto__ = b;
                } || function(a3, b) {
                  for (var c2 in b) b.hasOwnProperty(c2) && (a3[c2] = b[c2]);
                };
                return a2(d2, c);
              };
              return function(d2, c) {
                function e2() {
                  this.constructor = d2;
                }
                a2(d2, c);
                d2.prototype = null === c ? Object.create(c) : (e2.prototype = c.prototype, new e2());
              };
            }(), z = a.animObject, p = f2.parse, m = C.hasTouch;
            a = C.noop;
            var e = I.clamp, d = I.css, l = I.defined, h = I.extend, t = I.fireEvent, n = I.isArray, v = I.isNumber, w = I.merge, y = I.pick, A = I.objectEach;
            I = function(a2) {
              function f3() {
                var c = null !== a2 && a2.apply(this, arguments) || this;
                c.borderWidth = void 0;
                c.data = void 0;
                c.group = void 0;
                c.options = void 0;
                c.points = void 0;
                return c;
              }
              B(f3, a2);
              f3.prototype.animate = function(a3) {
                var c = this, b = this.yAxis, d2 = c.options, f4 = this.chart.inverted, k = {}, l2 = f4 ? "translateX" : "translateY";
                if (a3) k.scaleY = 1e-3, a3 = e(b.toPixels(d2.threshold), b.pos, b.pos + b.len), f4 ? k.translateX = a3 - b.len : k.translateY = a3, c.clipBox && c.setClip(), c.group.attr(k);
                else {
                  var m2 = Number(c.group.attr(l2));
                  c.group.animate({ scaleY: 1 }, h(z(c.options.animation), { step: function(a4, d3) {
                    c.group && (k[l2] = m2 + d3.pos * (b.pos - m2), c.group.attr(k));
                  } }));
                }
              };
              f3.prototype.init = function(c, d2) {
                a2.prototype.init.apply(this, arguments);
                var b = this;
                c = b.chart;
                c.hasRendered && c.series.forEach(function(a3) {
                  a3.type === b.type && (a3.isDirty = true);
                });
              };
              f3.prototype.getColumnMetrics = function() {
                var a3 = this, d2 = a3.options, b = a3.xAxis, e2 = a3.yAxis, f4 = b.options.reversedStacks;
                f4 = b.reversed && !f4 || !b.reversed && f4;
                var k = {}, h2, l2 = 0;
                false === d2.grouping ? l2 = 1 : a3.chart.series.forEach(function(b2) {
                  var c = b2.yAxis, d3 = b2.options;
                  if (b2.type === a3.type && (b2.visible || !a3.chart.options.chart.ignoreHiddenSeries) && e2.len === c.len && e2.pos === c.pos) {
                    if (d3.stacking && "group" !== d3.stacking) {
                      h2 = b2.stackKey;
                      "undefined" === typeof k[h2] && (k[h2] = l2++);
                      var f5 = k[h2];
                    } else false !== d3.grouping && (f5 = l2++);
                    b2.columnIndex = f5;
                  }
                });
                var m2 = Math.min(Math.abs(b.transA) * (b.ordinal && b.ordinal.slope || d2.pointRange || b.closestPointRange || b.tickInterval || 1), b.len), n2 = m2 * d2.groupPadding, q = (m2 - 2 * n2) / (l2 || 1);
                d2 = Math.min(d2.maxPointWidth || b.len, y(d2.pointWidth, q * (1 - 2 * d2.pointPadding)));
                a3.columnMetrics = { width: d2, offset: (q - d2) / 2 + (n2 + ((a3.columnIndex || 0) + (f4 ? 1 : 0)) * q - m2 / 2) * (f4 ? -1 : 1), paddedWidth: q, columnCount: l2 };
                return a3.columnMetrics;
              };
              f3.prototype.crispCol = function(a3, d2, b, e2) {
                var c = this.chart, f4 = this.borderWidth, g = -(f4 % 2 ? 0.5 : 0);
                f4 = f4 % 2 ? 0.5 : 1;
                c.inverted && c.renderer.isVML && (f4 += 1);
                this.options.crisp && (b = Math.round(a3 + b) + g, a3 = Math.round(a3) + g, b -= a3);
                e2 = Math.round(d2 + e2) + f4;
                g = 0.5 >= Math.abs(d2) && 0.5 < e2;
                d2 = Math.round(d2) + f4;
                e2 -= d2;
                g && e2 && (--d2, e2 += 1);
                return { x: a3, y: d2, width: b, height: e2 };
              };
              f3.prototype.adjustForMissingColumns = function(a3, d2, b, e2) {
                var c = this, f4 = this.options.stacking;
                if (!b.isNull && 1 < e2.columnCount) {
                  var g = this.yAxis.options.reversedStacks, k = 0, h2 = g ? 0 : -e2.columnCount;
                  A(this.yAxis.stacking && this.yAxis.stacking.stacks, function(a4) {
                    if ("number" === typeof b.x && (a4 = a4[b.x.toString()])) {
                      var d3 = a4.points[c.index], e3 = a4.total;
                      f4 ? (d3 && (k = h2), a4.hasValidPoints && (g ? h2++ : h2--)) : n(d3) && (k = d3[1], h2 = e3 || 0);
                    }
                  });
                  a3 = (b.plotX || 0) + ((h2 - 1) * e2.paddedWidth + d2) / 2 - d2 - k * e2.paddedWidth;
                }
                return a3;
              };
              f3.prototype.translate = function() {
                var a3 = this, d2 = a3.chart, b = a3.options, f4 = a3.dense = 2 > a3.closestPointRange * a3.xAxis.transA;
                f4 = a3.borderWidth = y(b.borderWidth, f4 ? 0 : 1);
                var k = a3.xAxis, h2 = a3.yAxis, m2 = b.threshold, n2 = a3.translatedThreshold = h2.getThreshold(m2), q = y(b.minPointLength, 5), p2 = a3.getColumnMetrics(), t2 = p2.width, A2 = a3.pointXOffset = p2.offset, w2 = a3.dataMin, z2 = a3.dataMax, B2 = a3.barW = Math.max(
                  t2,
                  1 + 2 * f4
                );
                d2.inverted && (n2 -= 0.5);
                b.pointPadding && (B2 = Math.ceil(B2));
                u.prototype.translate.apply(a3);
                a3.points.forEach(function(c) {
                  var f5 = y(c.yBottom, n2), g = 999 + Math.abs(f5), r = c.plotX || 0;
                  g = e(c.plotY, -g, h2.len + g);
                  var x = Math.min(g, f5), D = Math.max(g, f5) - x, u2 = t2, F = r + A2, C2 = B2;
                  q && Math.abs(D) < q && (D = q, r = !h2.reversed && !c.negative || h2.reversed && c.negative, v(m2) && v(z2) && c.y === m2 && z2 <= m2 && (h2.min || 0) < m2 && (w2 !== z2 || (h2.max || 0) <= m2) && (r = !r), x = Math.abs(x - n2) > q ? f5 - q : n2 - (r ? q : 0));
                  l(c.options.pointWidth) && (u2 = C2 = Math.ceil(c.options.pointWidth), F -= Math.round((u2 - t2) / 2));
                  b.centerInCategory && (F = a3.adjustForMissingColumns(F, u2, c, p2));
                  c.barX = F;
                  c.pointWidth = u2;
                  c.tooltipPos = d2.inverted ? [e(h2.len + h2.pos - d2.plotLeft - g, h2.pos - d2.plotLeft, h2.len + h2.pos - d2.plotLeft), k.len + k.pos - d2.plotTop - F - C2 / 2, D] : [k.left - d2.plotLeft + F + C2 / 2, e(g + h2.pos - d2.plotTop, h2.pos - d2.plotTop, h2.len + h2.pos - d2.plotTop), D];
                  c.shapeType = a3.pointClass.prototype.shapeType || "rect";
                  c.shapeArgs = a3.crispCol.apply(a3, c.isNull ? [F, n2, C2, 0] : [F, x, C2, D]);
                });
              };
              f3.prototype.drawGraph = function() {
                this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data");
              };
              f3.prototype.pointAttribs = function(a3, d2) {
                var b = this.options, c = this.pointAttrToOptions || {}, e2 = c.stroke || "borderColor", f4 = c["stroke-width"] || "borderWidth", g = a3 && a3.color || this.color, k = a3 && a3[e2] || b[e2] || g;
                c = a3 && a3.options.dashStyle || b.dashStyle;
                var h2 = a3 && a3[f4] || b[f4] || this[f4] || 0, l2 = y(a3 && a3.opacity, b.opacity, 1);
                if (a3 && this.zones.length) {
                  var m2 = a3.getZone();
                  g = a3.options.color || m2 && (m2.color || a3.nonZonedColor) || this.color;
                  m2 && (k = m2.borderColor || k, c = m2.dashStyle || c, h2 = m2.borderWidth || h2);
                }
                d2 && a3 && (a3 = w(b.states[d2], a3.options.states && a3.options.states[d2] || {}), d2 = a3.brightness, g = a3.color || "undefined" !== typeof d2 && p(g).brighten(a3.brightness).get() || g, k = a3[e2] || k, h2 = a3[f4] || h2, c = a3.dashStyle || c, l2 = y(a3.opacity, l2));
                e2 = { fill: g, stroke: k, "stroke-width": h2, opacity: l2 };
                c && (e2.dashstyle = c);
                return e2;
              };
              f3.prototype.drawPoints = function() {
                var a3 = this, d2 = this.chart, b = a3.options, e2 = d2.renderer, f4 = b.animationLimit || 250, k;
                a3.points.forEach(function(c) {
                  var g = c.graphic, h2 = !!g, l2 = g && d2.pointCount < f4 ? "animate" : "attr";
                  if (v(c.plotY) && null !== c.y) {
                    k = c.shapeArgs;
                    g && c.hasNewShapeType() && (g = g.destroy());
                    a3.enabledDataSorting && (c.startXPos = a3.xAxis.reversed ? -(k ? k.width || 0 : 0) : a3.xAxis.width);
                    g || (c.graphic = g = e2[c.shapeType](k).add(c.group || a3.group)) && a3.enabledDataSorting && d2.hasRendered && d2.pointCount < f4 && (g.attr({ x: c.startXPos }), h2 = true, l2 = "animate");
                    if (g && h2) g[l2](w(k));
                    if (b.borderRadius) g[l2]({ r: b.borderRadius });
                    d2.styledMode || g[l2](a3.pointAttribs(c, c.selected && "select")).shadow(false !== c.allowShadow && b.shadow, null, b.stacking && !b.borderRadius);
                    g && (g.addClass(c.getClassName(), true), g.attr({ visibility: c.visible ? "inherit" : "hidden" }));
                  } else g && (c.graphic = g.destroy());
                });
              };
              f3.prototype.drawTracker = function() {
                var a3 = this, e2 = a3.chart, b = e2.pointer, f4 = function(a4) {
                  var c = b.getPointFromEvent(a4);
                  "undefined" !== typeof c && (b.isDirectTouch = true, c.onMouseOver(a4));
                }, k;
                a3.points.forEach(function(a4) {
                  k = n(a4.dataLabels) ? a4.dataLabels : a4.dataLabel ? [a4.dataLabel] : [];
                  a4.graphic && (a4.graphic.element.point = a4);
                  k.forEach(function(b2) {
                    b2.div ? b2.div.point = a4 : b2.element.point = a4;
                  });
                });
                a3._hasTracking || (a3.trackerGroups.forEach(function(c) {
                  if (a3[c]) {
                    a3[c].addClass("highcharts-tracker").on(
                      "mouseover",
                      f4
                    ).on("mouseout", function(a4) {
                      b.onTrackerMouseOut(a4);
                    });
                    if (m) a3[c].on("touchstart", f4);
                    !e2.styledMode && a3.options.cursor && a3[c].css(d).css({ cursor: a3.options.cursor });
                  }
                }), a3._hasTracking = true);
                t(this, "afterDrawTracker");
              };
              f3.prototype.remove = function() {
                var a3 = this, d2 = a3.chart;
                d2.hasRendered && d2.series.forEach(function(b) {
                  b.type === a3.type && (b.isDirty = true);
                });
                u.prototype.remove.apply(a3, arguments);
              };
              f3.defaultOptions = w(u.defaultOptions, {
                borderRadius: 0,
                centerInCategory: false,
                groupPadding: 0.2,
                marker: null,
                pointPadding: 0.1,
                minPointLength: 0,
                cropThreshold: 50,
                pointRange: null,
                states: { hover: { halo: false, brightness: 0.1 }, select: { color: "#cccccc", borderColor: "#000000" } },
                dataLabels: { align: void 0, verticalAlign: void 0, y: void 0 },
                startFromThreshold: true,
                stickyTracking: false,
                tooltip: { distance: 6 },
                threshold: 0,
                borderColor: "#ffffff"
              });
              return f3;
            }(u);
            h(I.prototype, { cropShoulder: 0, directTouch: true, drawLegendSymbol: G.drawRectangle, getSymbol: a, negStacks: true, trackerGroups: ["group", "dataLabelsGroup"] });
            H.registerSeriesType("column", I);
            "";
            "";
            return I;
          }
        );
        M(
          f,
          "Core/Series/DataLabel.js",
          [f["Core/Animation/AnimationUtilities.js"], f["Core/FormatUtilities.js"], f["Core/Utilities.js"]],
          function(a, f2, C) {
            var F = a.getDeferredAnimation, u = f2.format, H = C.defined, I = C.extend, B = C.fireEvent, z = C.isArray, p = C.merge, m = C.objectEach, e = C.pick, d = C.splat, l;
            (function(a2) {
              function f3(a3, c, d2, b, f4) {
                var g = this, k = this.chart, h2 = this.isCartesian && k.inverted, l3 = this.enabledDataSorting, m2 = e(a3.dlBox && a3.dlBox.centerX, a3.plotX, -9999), n = e(a3.plotY, -9999), q2 = c.getBBox(), p2 = d2.rotation, r = d2.align, t = k.isInsidePlot(m2, Math.round(n), {
                  inverted: h2,
                  paneCoordinates: true,
                  series: g
                }), A2 = function(b2) {
                  l3 && g.xAxis && !y2 && g.setDataLabelStartPos(a3, c, f4, t, b2);
                }, y2 = "justify" === e(d2.overflow, l3 ? "none" : "justify"), w2 = this.visible && false !== a3.visible && (a3.series.forceDL || l3 && !y2 || t || e(d2.inside, !!this.options.stacking) && b && k.isInsidePlot(m2, h2 ? b.x + 1 : b.y + b.height - 1, { inverted: h2, paneCoordinates: true, series: g }));
                if (w2) {
                  var v = k.renderer.fontMetrics(k.styledMode ? void 0 : d2.style.fontSize, c).b;
                  b = I({ x: h2 ? this.yAxis.len - n : m2, y: Math.round(h2 ? this.xAxis.len - m2 : n), width: 0, height: 0 }, b);
                  I(d2, {
                    width: q2.width,
                    height: q2.height
                  });
                  p2 ? (y2 = false, m2 = k.renderer.rotCorr(v, p2), m2 = { x: b.x + (d2.x || 0) + b.width / 2 + m2.x, y: b.y + (d2.y || 0) + { top: 0, middle: 0.5, bottom: 1 }[d2.verticalAlign] * b.height }, A2(m2), c[f4 ? "attr" : "animate"](m2).attr({ align: r }), A2 = (p2 + 720) % 360, A2 = 180 < A2 && 360 > A2, "left" === r ? m2.y -= A2 ? q2.height : 0 : "center" === r ? (m2.x -= q2.width / 2, m2.y -= q2.height / 2) : "right" === r && (m2.x -= q2.width, m2.y -= A2 ? 0 : q2.height), c.placed = true, c.alignAttr = m2) : (A2(b), c.align(d2, void 0, b), m2 = c.alignAttr);
                  y2 && 0 <= b.height ? this.justifyDataLabel(c, d2, m2, q2, b, f4) : e(d2.crop, true) && (w2 = k.isInsidePlot(
                    m2.x,
                    m2.y,
                    { paneCoordinates: true, series: g }
                  ) && k.isInsidePlot(m2.x + q2.width, m2.y + q2.height, { paneCoordinates: true, series: g }));
                  if (d2.shape && !p2) c[f4 ? "attr" : "animate"]({ anchorX: h2 ? k.plotWidth - a3.plotY : a3.plotX, anchorY: h2 ? k.plotHeight - a3.plotX : a3.plotY });
                }
                f4 && l3 && (c.placed = false);
                w2 || l3 && !y2 || (c.hide(true), c.placed = false);
              }
              function h(a3, c) {
                var d2 = c.filter;
                return d2 ? (c = d2.operator, a3 = a3[d2.property], d2 = d2.value, ">" === c && a3 > d2 || "<" === c && a3 < d2 || ">=" === c && a3 >= d2 || "<=" === c && a3 <= d2 || "==" === c && a3 == d2 || "===" === c && a3 === d2 ? true : false) : true;
              }
              function l2() {
                var a3 = this, c = a3.chart, f4 = a3.options, b = a3.points, l3 = a3.hasRendered || 0, n = c.renderer, q2 = f4.dataLabels, p2, t = q2.animation;
                t = q2.defer ? F(c, t, a3) : { defer: 0, duration: 0 };
                q2 = y(y(c.options.plotOptions && c.options.plotOptions.series && c.options.plotOptions.series.dataLabels, c.options.plotOptions && c.options.plotOptions[a3.type] && c.options.plotOptions[a3.type].dataLabels), q2);
                B(this, "drawDataLabels");
                if (z(q2) || q2.enabled || a3._hasPointLabels) {
                  var A2 = a3.plotGroup("dataLabelsGroup", "data-labels", l3 ? "inherit" : "hidden", q2.zIndex || 6);
                  A2.attr({ opacity: +l3 });
                  !l3 && (l3 = a3.dataLabelsGroup) && (a3.visible && A2.show(true), l3[f4.animation ? "animate" : "attr"]({ opacity: 1 }, t));
                  b.forEach(function(b2) {
                    p2 = d(y(q2, b2.dlOptions || b2.options && b2.options.dataLabels));
                    p2.forEach(function(d2, g) {
                      var k = d2.enabled && (!b2.isNull || b2.dataLabelOnNull) && h(b2, d2), l4 = b2.connectors ? b2.connectors[g] : b2.connector, q3 = b2.dataLabels ? b2.dataLabels[g] : b2.dataLabel, p3 = !q3, r = e(d2.distance, b2.labelDistance);
                      if (k) {
                        var t2 = b2.getLabelConfig();
                        var y2 = e(d2[b2.formatPrefix + "Format"], d2.format);
                        t2 = H(y2) ? u(y2, t2, c) : (d2[b2.formatPrefix + "Formatter"] || d2.formatter).call(t2, d2);
                        y2 = d2.style;
                        var x = d2.rotation;
                        c.styledMode || (y2.color = e(d2.color, y2.color, a3.color, "#000000"), "contrast" === y2.color ? (b2.contrastColor = n.getContrast(b2.color || a3.color), y2.color = !H(r) && d2.inside || 0 > r || f4.stacking ? b2.contrastColor : "#000000") : delete b2.contrastColor, f4.cursor && (y2.cursor = f4.cursor));
                        var w2 = { r: d2.borderRadius || 0, rotation: x, padding: d2.padding, zIndex: 1 };
                        c.styledMode || (w2.fill = d2.backgroundColor, w2.stroke = d2.borderColor, w2["stroke-width"] = d2.borderWidth);
                        m(w2, function(a4, b3) {
                          "undefined" === typeof a4 && delete w2[b3];
                        });
                      }
                      !q3 || k && H(t2) && !!q3.div === !!d2.useHTML && (q3.rotation && d2.rotation || q3.rotation === d2.rotation) || (p3 = true, b2.dataLabel = q3 = b2.dataLabel && b2.dataLabel.destroy(), b2.dataLabels && (1 === b2.dataLabels.length ? delete b2.dataLabels : delete b2.dataLabels[g]), g || delete b2.dataLabel, l4 && (b2.connector = b2.connector.destroy(), b2.connectors && (1 === b2.connectors.length ? delete b2.connectors : delete b2.connectors[g])));
                      k && H(t2) && (q3 ? w2.text = t2 : (b2.dataLabels = b2.dataLabels || [], q3 = b2.dataLabels[g] = x ? n.text(t2, 0, -9999, d2.useHTML).addClass("highcharts-data-label") : n.label(
                        t2,
                        0,
                        -9999,
                        d2.shape,
                        null,
                        null,
                        d2.useHTML,
                        null,
                        "data-label"
                      ), g || (b2.dataLabel = q3), q3.addClass(" highcharts-data-label-color-" + b2.colorIndex + " " + (d2.className || "") + (d2.useHTML ? " highcharts-tracker" : ""))), q3.options = d2, q3.attr(w2), c.styledMode || q3.css(y2).shadow(d2.shadow), q3.added || q3.add(A2), d2.textPath && !d2.useHTML && (q3.setTextPath(b2.getDataLabelPath && b2.getDataLabelPath(q3) || b2.graphic, d2.textPath), b2.dataLabelPath && !d2.textPath.enabled && (b2.dataLabelPath = b2.dataLabelPath.destroy())), a3.alignDataLabel(b2, q3, d2, null, p3));
                    });
                  });
                }
                B(this, "afterDrawDataLabels");
              }
              function w(a3, c, d2, b, e2, f4) {
                var g = this.chart, h2 = c.align, k = c.verticalAlign, l3 = a3.box ? 0 : a3.padding || 0, m2 = c.x;
                m2 = void 0 === m2 ? 0 : m2;
                var q2 = c.y;
                q2 = void 0 === q2 ? 0 : q2;
                var n = (d2.x || 0) + l3;
                if (0 > n) {
                  "right" === h2 && 0 <= m2 ? (c.align = "left", c.inside = true) : m2 -= n;
                  var p2 = true;
                }
                n = (d2.x || 0) + b.width - l3;
                n > g.plotWidth && ("left" === h2 && 0 >= m2 ? (c.align = "right", c.inside = true) : m2 += g.plotWidth - n, p2 = true);
                n = d2.y + l3;
                0 > n && ("bottom" === k && 0 <= q2 ? (c.verticalAlign = "top", c.inside = true) : q2 -= n, p2 = true);
                n = (d2.y || 0) + b.height - l3;
                n > g.plotHeight && ("top" === k && 0 >= q2 ? (c.verticalAlign = "bottom", c.inside = true) : q2 += g.plotHeight - n, p2 = true);
                p2 && (c.x = m2, c.y = q2, a3.placed = !f4, a3.align(c, void 0, e2));
                return p2;
              }
              function y(a3, c) {
                var d2 = [], b;
                if (z(a3) && !z(c)) d2 = a3.map(function(a4) {
                  return p(a4, c);
                });
                else if (z(c) && !z(a3)) d2 = c.map(function(b2) {
                  return p(a3, b2);
                });
                else if (z(a3) || z(c)) for (b = Math.max(a3.length, c.length); b--; ) d2[b] = p(a3[b], c[b]);
                else d2 = p(a3, c);
                return d2;
              }
              function A(a3, c, d2, b, e2) {
                var f4 = this.chart, g = f4.inverted, h2 = this.xAxis, k = h2.reversed, l3 = g ? c.height / 2 : c.width / 2;
                a3 = (a3 = a3.pointWidth) ? a3 / 2 : 0;
                c.startXPos = g ? e2.x : k ? -l3 - a3 : h2.width - l3 + a3;
                c.startYPos = g ? k ? this.yAxis.height - l3 + a3 : -l3 - a3 : e2.y;
                b ? "hidden" === c.visibility && (c.show(), c.attr({ opacity: 0 }).animate({ opacity: 1 })) : c.attr({ opacity: 1 }).animate({ opacity: 0 }, void 0, c.hide);
                f4.hasRendered && (d2 && c.attr({ x: c.startXPos, y: c.startYPos }), c.placed = true);
              }
              var q = [];
              a2.compose = function(a3) {
                if (-1 === q.indexOf(a3)) {
                  var c = a3.prototype;
                  q.push(a3);
                  c.alignDataLabel = f3;
                  c.drawDataLabels = l2;
                  c.justifyDataLabel = w;
                  c.setDataLabelStartPos = A;
                }
              };
            })(l || (l = {}));
            "";
            return l;
          }
        );
        M(f, "Series/Column/ColumnDataLabel.js", [
          f["Core/Series/DataLabel.js"],
          f["Core/Series/SeriesRegistry.js"],
          f["Core/Utilities.js"]
        ], function(a, f2, C) {
          var F = f2.series, u = C.merge, H = C.pick, I;
          (function(f3) {
            function z(a2, e, d, f4, h) {
              var l = this.chart.inverted, m = a2.series, p2 = (m.xAxis ? m.xAxis.len : this.chart.plotSizeX) || 0;
              m = (m.yAxis ? m.yAxis.len : this.chart.plotSizeY) || 0;
              var w = a2.dlBox || a2.shapeArgs, y = H(a2.below, a2.plotY > H(this.translatedThreshold, m)), A = H(d.inside, !!this.options.stacking);
              w && (f4 = u(w), 0 > f4.y && (f4.height += f4.y, f4.y = 0), w = f4.y + f4.height - m, 0 < w && w < f4.height && (f4.height -= w), l && (f4 = {
                x: m - f4.y - f4.height,
                y: p2 - f4.x - f4.width,
                width: f4.height,
                height: f4.width
              }), A || (l ? (f4.x += y ? 0 : f4.width, f4.width = 0) : (f4.y += y ? f4.height : 0, f4.height = 0)));
              d.align = H(d.align, !l || A ? "center" : y ? "right" : "left");
              d.verticalAlign = H(d.verticalAlign, l || A ? "middle" : y ? "top" : "bottom");
              F.prototype.alignDataLabel.call(this, a2, e, d, f4, h);
              d.inside && a2.contrastColor && e.css({ color: a2.contrastColor });
            }
            var p = [];
            f3.compose = function(f4) {
              a.compose(F);
              -1 === p.indexOf(f4) && (p.push(f4), f4.prototype.alignDataLabel = z);
            };
          })(I || (I = {}));
          return I;
        });
        M(f, "Series/Bar/BarSeries.js", [
          f["Series/Column/ColumnSeries.js"],
          f["Core/Series/SeriesRegistry.js"],
          f["Core/Utilities.js"]
        ], function(a, f2, C) {
          var F = this && this.__extends || /* @__PURE__ */ function() {
            var a2 = function(f3, u2) {
              a2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a3, f4) {
                a3.__proto__ = f4;
              } || function(a3, f4) {
                for (var e in f4) f4.hasOwnProperty(e) && (a3[e] = f4[e]);
              };
              return a2(f3, u2);
            };
            return function(f3, u2) {
              function p() {
                this.constructor = f3;
              }
              a2(f3, u2);
              f3.prototype = null === u2 ? Object.create(u2) : (p.prototype = u2.prototype, new p());
            };
          }(), u = C.extend, H = C.merge;
          C = function(f3) {
            function u2() {
              var a2 = null !== f3 && f3.apply(
                this,
                arguments
              ) || this;
              a2.data = void 0;
              a2.options = void 0;
              a2.points = void 0;
              return a2;
            }
            F(u2, f3);
            u2.defaultOptions = H(a.defaultOptions, {});
            return u2;
          }(a);
          u(C.prototype, { inverted: true });
          f2.registerSeriesType("bar", C);
          "";
          return C;
        });
        M(f, "Series/Scatter/ScatterSeries.js", [f["Series/Column/ColumnSeries.js"], f["Series/Line/LineSeries.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function(a, f2, C, G) {
          var u = this && this.__extends || /* @__PURE__ */ function() {
            var a2 = function(f3, m) {
              a2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a3, d) {
                a3.__proto__ = d;
              } || function(a3, d) {
                for (var e in d) d.hasOwnProperty(e) && (a3[e] = d[e]);
              };
              return a2(f3, m);
            };
            return function(f3, m) {
              function e() {
                this.constructor = f3;
              }
              a2(f3, m);
              f3.prototype = null === m ? Object.create(m) : (e.prototype = m.prototype, new e());
            };
          }(), F = G.addEvent, I = G.extend, B = G.merge;
          G = function(a2) {
            function p() {
              var f3 = null !== a2 && a2.apply(this, arguments) || this;
              f3.data = void 0;
              f3.options = void 0;
              f3.points = void 0;
              return f3;
            }
            u(p, a2);
            p.prototype.applyJitter = function() {
              var a3 = this, e = this.options.jitter, d = this.points.length;
              e && this.points.forEach(function(f3, h) {
                ["x", "y"].forEach(function(l, m) {
                  var n = "plot" + l.toUpperCase();
                  if (e[l] && !f3.isNull) {
                    var p2 = a3[l + "Axis"];
                    var t = e[l] * p2.transA;
                    if (p2 && !p2.isLog) {
                      var A = Math.max(0, f3[n] - t);
                      p2 = Math.min(p2.len, f3[n] + t);
                      m = 1e4 * Math.sin(h + m * d);
                      f3[n] = A + (p2 - A) * (m - Math.floor(m));
                      "x" === l && (f3.clientX = f3.plotX);
                    }
                  }
                });
              });
            };
            p.prototype.drawGraph = function() {
              this.options.lineWidth ? a2.prototype.drawGraph.call(this) : this.graph && (this.graph = this.graph.destroy());
            };
            p.defaultOptions = B(f2.defaultOptions, {
              lineWidth: 0,
              findNearestPointBy: "xy",
              jitter: { x: 0, y: 0 },
              marker: { enabled: true },
              tooltip: { headerFormat: '<span style="color:{point.color}">\u25CF</span> <span style="font-size: 10px"> {series.name}</span><br/>', pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>" }
            });
            return p;
          }(f2);
          I(G.prototype, { drawTracker: a.prototype.drawTracker, sorted: false, requireSorting: false, noSharedTooltip: true, trackerGroups: ["group", "markerGroup", "dataLabelsGroup"], takeOrdinalPosition: false });
          F(G, "afterTranslate", function() {
            this.applyJitter();
          });
          C.registerSeriesType(
            "scatter",
            G
          );
          "";
          return G;
        });
        M(f, "Series/CenteredUtilities.js", [f["Core/Globals.js"], f["Core/Series/Series.js"], f["Core/Utilities.js"]], function(a, f2, C) {
          var F = a.deg2rad, u = C.isNumber, H = C.pick, I = C.relativeLength, B;
          (function(a2) {
            a2.getCenter = function() {
              var a3 = this.options, m = this.chart, e = 2 * (a3.slicedOffset || 0), d = m.plotWidth - 2 * e, l = m.plotHeight - 2 * e, h = a3.center, t = Math.min(d, l), n = a3.size, v = a3.innerSize || 0;
              "string" === typeof n && (n = parseFloat(n));
              "string" === typeof v && (v = parseFloat(v));
              a3 = [H(h[0], "50%"), H(h[1], "50%"), H(n && 0 > n ? void 0 : a3.size, "100%"), H(v && 0 > v ? void 0 : a3.innerSize || 0, "0%")];
              !m.angular || this instanceof f2 || (a3[3] = 0);
              for (h = 0; 4 > h; ++h) n = a3[h], m = 2 > h || 2 === h && /%$/.test(n), a3[h] = I(n, [d, l, t, a3[2]][h]) + (m ? e : 0);
              a3[3] > a3[2] && (a3[3] = a3[2]);
              return a3;
            };
            a2.getStartAndEndRadians = function(a3, f3) {
              a3 = u(a3) ? a3 : 0;
              f3 = u(f3) && f3 > a3 && 360 > f3 - a3 ? f3 : a3 + 360;
              return { start: F * (a3 + -90), end: F * (f3 + -90) };
            };
          })(B || (B = {}));
          "";
          return B;
        });
        M(f, "Series/Pie/PiePoint.js", [f["Core/Animation/AnimationUtilities.js"], f["Core/Series/Point.js"], f["Core/Utilities.js"]], function(a, f2, C) {
          var F = this && this.__extends || /* @__PURE__ */ function() {
            var a2 = function(e, d) {
              a2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a3, d2) {
                a3.__proto__ = d2;
              } || function(a3, d2) {
                for (var e2 in d2) d2.hasOwnProperty(e2) && (a3[e2] = d2[e2]);
              };
              return a2(e, d);
            };
            return function(e, d) {
              function f3() {
                this.constructor = e;
              }
              a2(e, d);
              e.prototype = null === d ? Object.create(d) : (f3.prototype = d.prototype, new f3());
            };
          }(), u = a.setAnimation, H = C.addEvent, I = C.defined;
          a = C.extend;
          var B = C.isNumber, z = C.pick, p = C.relativeLength;
          f2 = function(a2) {
            function e() {
              var d = null !== a2 && a2.apply(this, arguments) || this;
              d.labelDistance = void 0;
              d.options = void 0;
              d.series = void 0;
              return d;
            }
            F(e, a2);
            e.prototype.getConnectorPath = function() {
              var a3 = this.labelPosition, e2 = this.series.options.dataLabels, f3 = this.connectorShapes, m = e2.connectorShape;
              f3[m] && (m = f3[m]);
              return m.call(this, { x: a3.final.x, y: a3.final.y, alignment: a3.alignment }, a3.connectorPosition, e2);
            };
            e.prototype.getTranslate = function() {
              return this.sliced ? this.slicedTranslation : { translateX: 0, translateY: 0 };
            };
            e.prototype.haloPath = function(a3) {
              var d = this.shapeArgs;
              return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(d.x, d.y, d.r + a3, d.r + a3, { innerR: d.r - 1, start: d.start, end: d.end });
            };
            e.prototype.init = function() {
              var d = this;
              a2.prototype.init.apply(this, arguments);
              this.name = z(this.name, "Slice");
              var e2 = function(a3) {
                d.slice("select" === a3.type);
              };
              H(this, "select", e2);
              H(this, "unselect", e2);
              return this;
            };
            e.prototype.isValid = function() {
              return B(this.y) && 0 <= this.y;
            };
            e.prototype.setVisible = function(a3, e2) {
              var d = this, f3 = this.series, m = f3.chart, l = f3.options.ignoreHiddenPoint;
              e2 = z(e2, l);
              a3 !== this.visible && (this.visible = this.options.visible = a3 = "undefined" === typeof a3 ? !this.visible : a3, f3.options.data[f3.data.indexOf(this)] = this.options, ["graphic", "dataLabel", "connector", "shadowGroup"].forEach(function(e3) {
                if (d[e3]) d[e3][a3 ? "show" : "hide"](a3);
              }), this.legendItem && m.legend.colorizeItem(this, a3), a3 || "hover" !== this.state || this.setState(""), l && (f3.isDirty = true), e2 && m.redraw());
            };
            e.prototype.slice = function(a3, e2, f3) {
              var d = this.series;
              u(f3, d.chart);
              z(e2, true);
              this.sliced = this.options.sliced = I(a3) ? a3 : !this.sliced;
              d.options.data[d.data.indexOf(this)] = this.options;
              this.graphic && this.graphic.animate(this.getTranslate());
              this.shadowGroup && this.shadowGroup.animate(this.getTranslate());
            };
            return e;
          }(f2);
          a(f2.prototype, { connectorShapes: { fixedOffset: function(a2, e, d) {
            var f3 = e.breakAt;
            e = e.touchingSliceAt;
            return [["M", a2.x, a2.y], d.softConnector ? ["C", a2.x + ("left" === a2.alignment ? -5 : 5), a2.y, 2 * f3.x - e.x, 2 * f3.y - e.y, f3.x, f3.y] : ["L", f3.x, f3.y], ["L", e.x, e.y]];
          }, straight: function(a2, e) {
            e = e.touchingSliceAt;
            return [["M", a2.x, a2.y], ["L", e.x, e.y]];
          }, crookedLine: function(a2, e, d) {
            e = e.touchingSliceAt;
            var f3 = this.series, h = f3.center[0], m = f3.chart.plotWidth, n = f3.chart.plotLeft;
            f3 = a2.alignment;
            var u2 = this.shapeArgs.r;
            d = p(d.crookDistance, 1);
            m = "left" === f3 ? h + u2 + (m + n - h - u2) * (1 - d) : n + (h - u2) * d;
            d = ["L", m, a2.y];
            h = true;
            if ("left" === f3 ? m > a2.x || m < e.x : m < a2.x || m > e.x) h = false;
            a2 = [["M", a2.x, a2.y]];
            h && a2.push(d);
            a2.push(["L", e.x, e.y]);
            return a2;
          } } });
          return f2;
        });
        M(f, "Series/Pie/PieSeries.js", [
          f["Series/CenteredUtilities.js"],
          f["Series/Column/ColumnSeries.js"],
          f["Core/Globals.js"],
          f["Core/Legend/LegendSymbol.js"],
          f["Series/Pie/PiePoint.js"],
          f["Core/Series/Series.js"],
          f["Core/Series/SeriesRegistry.js"],
          f["Core/Renderer/SVG/Symbols.js"],
          f["Core/Utilities.js"]
        ], function(a, f2, C, G, u, H, I, B, z) {
          var p = this && this.__extends || /* @__PURE__ */ function() {
            var a2 = function(d2, e2) {
              a2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a3, d3) {
                a3.__proto__ = d3;
              } || function(a3, d3) {
                for (var e3 in d3) d3.hasOwnProperty(e3) && (a3[e3] = d3[e3]);
              };
              return a2(d2, e2);
            };
            return function(d2, e2) {
              function f3() {
                this.constructor = d2;
              }
              a2(d2, e2);
              d2.prototype = null === e2 ? Object.create(e2) : (f3.prototype = e2.prototype, new f3());
            };
          }(), m = a.getStartAndEndRadians;
          C = C.noop;
          var e = z.clamp, d = z.extend, l = z.fireEvent, h = z.merge, t = z.pick, n = z.relativeLength;
          z = function(a2) {
            function d2() {
              var d3 = null !== a2 && a2.apply(this, arguments) || this;
              d3.center = void 0;
              d3.data = void 0;
              d3.maxLabelDistance = void 0;
              d3.options = void 0;
              d3.points = void 0;
              return d3;
            }
            p(d2, a2);
            d2.prototype.animate = function(a3) {
              var d3 = this, e2 = d3.points, f3 = d3.startAngleRad;
              a3 || e2.forEach(function(a4) {
                var c = a4.graphic, b = a4.shapeArgs;
                c && b && (c.attr({ r: t(a4.startR, d3.center && d3.center[3] / 2), start: f3, end: f3 }), c.animate(
                  { r: b.r, start: b.start, end: b.end },
                  d3.options.animation
                ));
              });
            };
            d2.prototype.drawEmpty = function() {
              var a3 = this.startAngleRad, d3 = this.endAngleRad, e2 = this.options;
              if (0 === this.total && this.center) {
                var f3 = this.center[0];
                var c = this.center[1];
                this.graph || (this.graph = this.chart.renderer.arc(f3, c, this.center[1] / 2, 0, a3, d3).addClass("highcharts-empty-series").add(this.group));
                this.graph.attr({ d: B.arc(f3, c, this.center[2] / 2, 0, { start: a3, end: d3, innerR: this.center[3] / 2 }) });
                this.chart.styledMode || this.graph.attr({
                  "stroke-width": e2.borderWidth,
                  fill: e2.fillColor || "none",
                  stroke: e2.color || "#cccccc"
                });
              } else this.graph && (this.graph = this.graph.destroy());
            };
            d2.prototype.drawPoints = function() {
              var a3 = this.chart.renderer;
              this.points.forEach(function(d3) {
                d3.graphic && d3.hasNewShapeType() && (d3.graphic = d3.graphic.destroy());
                d3.graphic || (d3.graphic = a3[d3.shapeType](d3.shapeArgs).add(d3.series.group), d3.delayedRendering = true);
              });
            };
            d2.prototype.generatePoints = function() {
              a2.prototype.generatePoints.call(this);
              this.updateTotals();
            };
            d2.prototype.getX = function(a3, d3, f3) {
              var h2 = this.center, c = this.radii ? this.radii[f3.index] || 0 : h2[2] / 2;
              a3 = Math.asin(e((a3 - h2[1]) / (c + f3.labelDistance), -1, 1));
              return h2[0] + (d3 ? -1 : 1) * Math.cos(a3) * (c + f3.labelDistance) + (0 < f3.labelDistance ? (d3 ? -1 : 1) * this.options.dataLabels.padding : 0);
            };
            d2.prototype.hasData = function() {
              return !!this.processedXData.length;
            };
            d2.prototype.redrawPoints = function() {
              var a3 = this, d3 = a3.chart, e2 = d3.renderer, f3 = a3.options.shadow, c, g, b, m2;
              this.drawEmpty();
              !f3 || a3.shadowGroup || d3.styledMode || (a3.shadowGroup = e2.g("shadow").attr({ zIndex: -1 }).add(a3.group));
              a3.points.forEach(function(k) {
                var l2 = {};
                g = k.graphic;
                if (!k.isNull && g) {
                  var n2 = void 0;
                  m2 = k.shapeArgs;
                  c = k.getTranslate();
                  d3.styledMode || (n2 = k.shadowGroup, f3 && !n2 && (n2 = k.shadowGroup = e2.g("shadow").add(a3.shadowGroup)), n2 && n2.attr(c), b = a3.pointAttribs(k, k.selected && "select"));
                  k.delayedRendering ? (g.setRadialReference(a3.center).attr(m2).attr(c), d3.styledMode || g.attr(b).attr({ "stroke-linejoin": "round" }).shadow(f3, n2), k.delayedRendering = false) : (g.setRadialReference(a3.center), d3.styledMode || h(true, l2, b), h(true, l2, m2, c), g.animate(l2));
                  g.attr({ visibility: k.visible ? "inherit" : "hidden" });
                  g.addClass(
                    k.getClassName(),
                    true
                  );
                } else g && (k.graphic = g.destroy());
              });
            };
            d2.prototype.sortByAngle = function(a3, d3) {
              a3.sort(function(a4, e2) {
                return "undefined" !== typeof a4.angle && (e2.angle - a4.angle) * d3;
              });
            };
            d2.prototype.translate = function(a3) {
              this.generatePoints();
              var d3 = this.options, e2 = d3.slicedOffset, f3 = e2 + (d3.borderWidth || 0), c = m(d3.startAngle, d3.endAngle), g = this.startAngleRad = c.start;
              c = (this.endAngleRad = c.end) - g;
              var b = this.points, h2 = d3.dataLabels.distance;
              d3 = d3.ignoreHiddenPoint;
              var p2 = b.length, u2, w = 0;
              a3 || (this.center = a3 = this.getCenter());
              for (u2 = 0; u2 < p2; u2++) {
                var v = b[u2];
                var y = g + w * c;
                !v.isValid() || d3 && !v.visible || (w += v.percentage / 100);
                var z2 = g + w * c;
                var B2 = { x: a3[0], y: a3[1], r: a3[2] / 2, innerR: a3[3] / 2, start: Math.round(1e3 * y) / 1e3, end: Math.round(1e3 * z2) / 1e3 };
                v.shapeType = "arc";
                v.shapeArgs = B2;
                v.labelDistance = t(v.options.dataLabels && v.options.dataLabels.distance, h2);
                v.labelDistance = n(v.labelDistance, B2.r);
                this.maxLabelDistance = Math.max(this.maxLabelDistance || 0, v.labelDistance);
                z2 = (z2 + y) / 2;
                z2 > 1.5 * Math.PI ? z2 -= 2 * Math.PI : z2 < -Math.PI / 2 && (z2 += 2 * Math.PI);
                v.slicedTranslation = { translateX: Math.round(Math.cos(z2) * e2), translateY: Math.round(Math.sin(z2) * e2) };
                B2 = Math.cos(z2) * a3[2] / 2;
                var F = Math.sin(z2) * a3[2] / 2;
                v.tooltipPos = [a3[0] + 0.7 * B2, a3[1] + 0.7 * F];
                v.half = z2 < -Math.PI / 2 || z2 > Math.PI / 2 ? 1 : 0;
                v.angle = z2;
                y = Math.min(f3, v.labelDistance / 5);
                v.labelPosition = { natural: { x: a3[0] + B2 + Math.cos(z2) * v.labelDistance, y: a3[1] + F + Math.sin(z2) * v.labelDistance }, "final": {}, alignment: 0 > v.labelDistance ? "center" : v.half ? "right" : "left", connectorPosition: { breakAt: { x: a3[0] + B2 + Math.cos(z2) * y, y: a3[1] + F + Math.sin(z2) * y }, touchingSliceAt: { x: a3[0] + B2, y: a3[1] + F } } };
              }
              l(this, "afterTranslate");
            };
            d2.prototype.updateTotals = function() {
              var a3 = this.points, d3 = a3.length, e2 = this.options.ignoreHiddenPoint, f3, c = 0;
              for (f3 = 0; f3 < d3; f3++) {
                var g = a3[f3];
                !g.isValid() || e2 && !g.visible || (c += g.y);
              }
              this.total = c;
              for (f3 = 0; f3 < d3; f3++) g = a3[f3], g.percentage = 0 < c && (g.visible || !e2) ? g.y / c * 100 : 0, g.total = c;
            };
            d2.defaultOptions = h(H.defaultOptions, { center: [null, null], clip: false, colorByPoint: true, dataLabels: { allowOverlap: true, connectorPadding: 5, connectorShape: "fixedOffset", crookDistance: "70%", distance: 30, enabled: true, formatter: function() {
              return this.point.isNull ? void 0 : this.point.name;
            }, softConnector: true, x: 0 }, fillColor: void 0, ignoreHiddenPoint: true, inactiveOtherPoints: true, legendType: "point", marker: null, size: null, showInLegend: false, slicedOffset: 10, stickyTracking: false, tooltip: { followPointer: true }, borderColor: "#ffffff", borderWidth: 1, lineWidth: void 0, states: { hover: { brightness: 0.1 } } });
            return d2;
          }(H);
          d(z.prototype, {
            axisTypes: [],
            directTouch: true,
            drawGraph: void 0,
            drawLegendSymbol: G.drawRectangle,
            drawTracker: f2.prototype.drawTracker,
            getCenter: a.getCenter,
            getSymbol: C,
            isCartesian: false,
            noSharedTooltip: true,
            pointAttribs: f2.prototype.pointAttribs,
            pointClass: u,
            requireSorting: false,
            searchPoint: C,
            trackerGroups: ["group", "dataLabelsGroup"]
          });
          I.registerSeriesType("pie", z);
          "";
          return z;
        });
        M(f, "Series/Pie/PieDataLabel.js", [f["Core/Series/DataLabel.js"], f["Core/Globals.js"], f["Core/Renderer/RendererUtilities.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function(a, f2, C, G, u) {
          var F = f2.noop, I = C.distribute, B = G.series, z = u.arrayMax, p = u.clamp, m = u.defined, e = u.merge, d = u.pick, l = u.relativeLength, h;
          (function(f3) {
            function h2() {
              var a2 = this, f4 = a2.data, c = a2.chart, g = a2.options.dataLabels || {}, b = g.connectorPadding, h3 = c.plotWidth, l2 = c.plotHeight, n = c.plotLeft, p2 = Math.round(c.chartWidth / 3), t2 = a2.center, u3 = t2[2] / 2, v = t2[1], A2 = [[], []], w = [0, 0, 0, 0], y2 = a2.dataLabelPositioners, F2, C2, G2, H, M2, E, T, N, U, V, X, S;
              a2.visible && (g.enabled || a2._hasPointLabels) && (f4.forEach(function(a3) {
                a3.dataLabel && a3.visible && a3.dataLabel.shortened && (a3.dataLabel.attr({ width: "auto" }).css({ width: "auto", textOverflow: "clip" }), a3.dataLabel.shortened = false);
              }), B.prototype.drawDataLabels.apply(a2), f4.forEach(function(a3) {
                a3.dataLabel && (a3.visible ? (A2[a3.half].push(a3), a3.dataLabel._pos = null, !m(g.style.width) && !m(a3.options.dataLabels && a3.options.dataLabels.style && a3.options.dataLabels.style.width) && a3.dataLabel.getBBox().width > p2 && (a3.dataLabel.css({ width: Math.round(0.7 * p2) + "px" }), a3.dataLabel.shortened = true)) : (a3.dataLabel = a3.dataLabel.destroy(), a3.dataLabels && 1 === a3.dataLabels.length && delete a3.dataLabels));
              }), A2.forEach(function(e2, f5) {
                var k = e2.length, q = [], p3;
                if (k) {
                  a2.sortByAngle(e2, f5 - 0.5);
                  if (0 < a2.maxLabelDistance) {
                    var r = Math.max(0, v - u3 - a2.maxLabelDistance);
                    var A3 = Math.min(v + u3 + a2.maxLabelDistance, c.plotHeight);
                    e2.forEach(function(a3) {
                      0 < a3.labelDistance && a3.dataLabel && (a3.top = Math.max(0, v - u3 - a3.labelDistance), a3.bottom = Math.min(v + u3 + a3.labelDistance, c.plotHeight), p3 = a3.dataLabel.getBBox().height || 21, a3.distributeBox = { target: a3.labelPosition.natural.y - a3.top + p3 / 2, size: p3, rank: a3.y }, q.push(a3.distributeBox));
                    });
                    r = A3 + p3 - r;
                    I(q, r, r / 5);
                  }
                  for (X = 0; X < k; X++) {
                    F2 = e2[X];
                    E = F2.labelPosition;
                    H = F2.dataLabel;
                    V = false === F2.visible ? "hidden" : "inherit";
                    U = r = E.natural.y;
                    q && m(F2.distributeBox) && ("undefined" === typeof F2.distributeBox.pos ? V = "hidden" : (T = F2.distributeBox.size, U = y2.radialDistributionY(F2)));
                    delete F2.positionIndex;
                    if (g.justify) N = y2.justify(F2, u3, t2);
                    else switch (g.alignTo) {
                      case "connectors":
                        N = y2.alignToConnectors(e2, f5, h3, n);
                        break;
                      case "plotEdges":
                        N = y2.alignToPlotEdges(H, f5, h3, n);
                        break;
                      default:
                        N = y2.radialDistributionX(a2, F2, U, r);
                    }
                    H._attr = { visibility: V, align: E.alignment };
                    S = F2.options.dataLabels || {};
                    H._pos = { x: N + d(S.x, g.x) + ({ left: b, right: -b }[E.alignment] || 0), y: U + d(S.y, g.y) - 10 };
                    E.final.x = N;
                    E.final.y = U;
                    d(g.crop, true) && (M2 = H.getBBox().width, r = null, N - M2 < b && 1 === f5 ? (r = Math.round(M2 - N + b), w[3] = Math.max(r, w[3])) : N + M2 > h3 - b && 0 === f5 && (r = Math.round(N + M2 - h3 + b), w[1] = Math.max(r, w[1])), 0 > U - T / 2 ? w[0] = Math.max(Math.round(-U + T / 2), w[0]) : U + T / 2 > l2 && (w[2] = Math.max(Math.round(U + T / 2 - l2), w[2])), H.sideOverflow = r);
                  }
                }
              }), 0 === z(w) || this.verifyDataLabelOverflow(w)) && (this.placeDataLabels(), this.points.forEach(function(b2) {
                S = e(g, b2.options.dataLabels);
                if (C2 = d(S.connectorWidth, 1)) {
                  var f5;
                  G2 = b2.connector;
                  if ((H = b2.dataLabel) && H._pos && b2.visible && 0 < b2.labelDistance) {
                    V = H._attr.visibility;
                    if (f5 = !G2) b2.connector = G2 = c.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + b2.colorIndex + (b2.className ? " " + b2.className : "")).add(a2.dataLabelsGroup), c.styledMode || G2.attr({ "stroke-width": C2, stroke: S.connectorColor || b2.color || "#666666" });
                    G2[f5 ? "attr" : "animate"]({ d: b2.getConnectorPath() });
                    G2.attr("visibility", V);
                  } else G2 && (b2.connector = G2.destroy());
                }
              }));
            }
            function t() {
              this.points.forEach(function(a2) {
                var d2 = a2.dataLabel, c;
                d2 && a2.visible && ((c = d2._pos) ? (d2.sideOverflow && (d2._attr.width = Math.max(d2.getBBox().width - d2.sideOverflow, 0), d2.css({ width: d2._attr.width + "px", textOverflow: (this.options.dataLabels.style || {}).textOverflow || "ellipsis" }), d2.shortened = true), d2.attr(d2._attr), d2[d2.moved ? "animate" : "attr"](c), d2.moved = true) : d2 && d2.attr({ y: -9999 }));
                delete a2.distributeBox;
              }, this);
            }
            function u2(a2) {
              var d2 = this.center, c = this.options, e2 = c.center, b = c.minSize || 80, f4 = null !== c.size;
              if (!f4) {
                if (null !== e2[0]) var h3 = Math.max(d2[2] - Math.max(a2[1], a2[3]), b);
                else h3 = Math.max(d2[2] - a2[1] - a2[3], b), d2[0] += (a2[3] - a2[1]) / 2;
                null !== e2[1] ? h3 = p(h3, b, d2[2] - Math.max(a2[0], a2[2])) : (h3 = p(h3, b, d2[2] - a2[0] - a2[2]), d2[1] += (a2[0] - a2[2]) / 2);
                h3 < d2[2] ? (d2[2] = h3, d2[3] = Math.min(l(c.innerSize || 0, h3), h3), this.translate(d2), this.drawDataLabels && this.drawDataLabels()) : f4 = true;
              }
              return f4;
            }
            var y = [], A = { radialDistributionY: function(a2) {
              return a2.top + a2.distributeBox.pos;
            }, radialDistributionX: function(a2, d2, c, e2) {
              return a2.getX(c < d2.top + 2 || c > d2.bottom - 2 ? e2 : c, d2.half, d2);
            }, justify: function(a2, d2, c) {
              return c[0] + (a2.half ? -1 : 1) * (d2 + a2.labelDistance);
            }, alignToPlotEdges: function(a2, d2, c, e2) {
              a2 = a2.getBBox().width;
              return d2 ? a2 + e2 : c - a2 - e2;
            }, alignToConnectors: function(a2, d2, c, e2) {
              var b = 0, f4;
              a2.forEach(function(a3) {
                f4 = a3.dataLabel.getBBox().width;
                f4 > b && (b = f4);
              });
              return d2 ? b + e2 : c - b - e2;
            } };
            f3.compose = function(d2) {
              a.compose(B);
              -1 === y.indexOf(d2) && (y.push(d2), d2 = d2.prototype, d2.dataLabelPositioners = A, d2.alignDataLabel = F, d2.drawDataLabels = h2, d2.placeDataLabels = t, d2.verifyDataLabelOverflow = u2);
            };
          })(h || (h = {}));
          return h;
        });
        M(f, "Extensions/OverlappingDataLabels.js", [f["Core/Chart/Chart.js"], f["Core/Utilities.js"]], function(a, f2) {
          function F(a2, f3) {
            var e = false;
            if (a2) {
              var d = a2.newOpacity;
              a2.oldOpacity !== d && (a2.alignAttr && a2.placed ? (a2[d ? "removeClass" : "addClass"]("highcharts-data-label-hidden"), e = true, a2.alignAttr.opacity = d, a2[a2.isOld ? "animate" : "attr"](a2.alignAttr, null, function() {
                f3.styledMode || a2.css({ pointerEvents: d ? "auto" : "none" });
              }), u(f3, "afterHideOverlappingLabel")) : a2.attr({ opacity: d }));
              a2.isOld = true;
            }
            return e;
          }
          var G = f2.addEvent, u = f2.fireEvent, H = f2.isArray, I = f2.isNumber, B = f2.objectEach, z = f2.pick;
          G(a, "render", function() {
            var a2 = this, f3 = [];
            (this.labelCollectors || []).forEach(function(a3) {
              f3 = f3.concat(a3());
            });
            (this.yAxis || []).forEach(function(a3) {
              a3.stacking && a3.options.stackLabels && !a3.options.stackLabels.allowOverlap && B(a3.stacking.stacks, function(a4) {
                B(a4, function(a5) {
                  a5.label && "hidden" !== a5.label.visibility && f3.push(a5.label);
                });
              });
            });
            (this.series || []).forEach(function(e) {
              var d = e.options.dataLabels;
              e.visible && (false !== d.enabled || e._hasPointLabels) && (d = function(d2) {
                return d2.forEach(function(d3) {
                  d3.visible && (H(d3.dataLabels) ? d3.dataLabels : d3.dataLabel ? [d3.dataLabel] : []).forEach(function(e2) {
                    var h = e2.options;
                    e2.labelrank = z(
                      h.labelrank,
                      d3.labelrank,
                      d3.shapeArgs && d3.shapeArgs.height
                    );
                    h.allowOverlap ? (e2.oldOpacity = e2.opacity, e2.newOpacity = 1, F(e2, a2)) : f3.push(e2);
                  });
                });
              }, d(e.nodes || []), d(e.points));
            });
            this.hideOverlappingLabels(f3);
          });
          a.prototype.hideOverlappingLabels = function(a2) {
            var f3 = this, e = a2.length, d = f3.renderer, l, h, p, n = false;
            var v = function(a3) {
              var e2, f4 = a3.box ? 0 : a3.padding || 0, c = e2 = 0, g;
              if (a3 && (!a3.alignAttr || a3.placed)) {
                var b = a3.alignAttr || { x: a3.attr("x"), y: a3.attr("y") };
                var h2 = a3.parentGroup;
                a3.width || (e2 = a3.getBBox(), a3.width = e2.width, a3.height = e2.height, e2 = d.fontMetrics(
                  null,
                  a3.element
                ).h);
                var l2 = a3.width - 2 * f4;
                (g = { left: "0", center: "0.5", right: "1" }[a3.alignValue]) ? c = +g * l2 : I(a3.x) && Math.round(a3.x) !== a3.translateX && (c = a3.x - a3.translateX);
                return { x: b.x + (h2.translateX || 0) + f4 - (c || 0), y: b.y + (h2.translateY || 0) + f4 - e2, width: a3.width - 2 * f4, height: a3.height - 2 * f4 };
              }
            };
            for (h = 0; h < e; h++) if (l = a2[h]) l.oldOpacity = l.opacity, l.newOpacity = 1, l.absoluteBox = v(l);
            a2.sort(function(a3, d2) {
              return (d2.labelrank || 0) - (a3.labelrank || 0);
            });
            for (h = 0; h < e; h++) {
              var w = (v = a2[h]) && v.absoluteBox;
              for (l = h + 1; l < e; ++l) {
                var y = (p = a2[l]) && p.absoluteBox;
                !w || !y || v === p || 0 === v.newOpacity || 0 === p.newOpacity || y.x >= w.x + w.width || y.x + y.width <= w.x || y.y >= w.y + w.height || y.y + y.height <= w.y || ((v.labelrank < p.labelrank ? v : p).newOpacity = 0);
              }
            }
            a2.forEach(function(a3) {
              F(a3, f3) && (n = true);
            });
            n && u(f3, "afterHideAllOverlappingLabels");
          };
        });
        M(f, "Core/Responsive.js", [f["Core/Utilities.js"]], function(a) {
          var f2 = a.extend, C = a.find, G = a.isArray, u = a.isObject, H = a.merge, I = a.objectEach, B = a.pick, z = a.splat, p = a.uniqueKey, m;
          (function(a2) {
            var d = [];
            a2.compose = function(a3) {
              -1 === d.indexOf(a3) && (d.push(a3), f2(
                a3.prototype,
                e.prototype
              ));
              return a3;
            };
            var e = function() {
              function a3() {
              }
              a3.prototype.currentOptions = function(a4) {
                function d2(a5, f4, h, k) {
                  var c;
                  I(a5, function(a6, b) {
                    if (!k && -1 < e2.collectionsWithUpdate.indexOf(b) && f4[b]) for (a6 = z(a6), h[b] = [], c = 0; c < Math.max(a6.length, f4[b].length); c++) f4[b][c] && (void 0 === a6[c] ? h[b][c] = f4[b][c] : (h[b][c] = {}, d2(a6[c], f4[b][c], h[b][c], k + 1)));
                    else u(a6) ? (h[b] = G(a6) ? [] : {}, d2(a6, f4[b] || {}, h[b], k + 1)) : h[b] = "undefined" === typeof f4[b] ? null : f4[b];
                  });
                }
                var e2 = this, f3 = {};
                d2(a4, this.options, f3, 0);
                return f3;
              };
              a3.prototype.matchResponsiveRule = function(a4, d2) {
                var e2 = a4.condition;
                (e2.callback || function() {
                  return this.chartWidth <= B(e2.maxWidth, Number.MAX_VALUE) && this.chartHeight <= B(e2.maxHeight, Number.MAX_VALUE) && this.chartWidth >= B(e2.minWidth, 0) && this.chartHeight >= B(e2.minHeight, 0);
                }).call(this) && d2.push(a4._id);
              };
              a3.prototype.setResponsive = function(a4, d2) {
                var e2 = this, f3 = this.options.responsive, h = this.currentResponsive, l = [];
                !d2 && f3 && f3.rules && f3.rules.forEach(function(a5) {
                  "undefined" === typeof a5._id && (a5._id = p());
                  e2.matchResponsiveRule(a5, l);
                }, this);
                d2 = H.apply(
                  void 0,
                  l.map(function(a5) {
                    return C((f3 || {}).rules || [], function(d3) {
                      return d3._id === a5;
                    });
                  }).map(function(a5) {
                    return a5 && a5.chartOptions;
                  })
                );
                d2.isResponsiveOptions = true;
                l = l.toString() || void 0;
                l !== (h && h.ruleIds) && (h && this.update(h.undoOptions, a4, true), l ? (h = this.currentOptions(d2), h.isResponsiveOptions = true, this.currentResponsive = { ruleIds: l, mergedOptions: d2, undoOptions: h }, this.update(d2, a4, true)) : this.currentResponsive = void 0);
              };
              return a3;
            }();
          })(m || (m = {}));
          "";
          "";
          return m;
        });
        M(f, "masters/highcharts.src.js", [
          f["Core/Globals.js"],
          f["Core/Utilities.js"],
          f["Core/DefaultOptions.js"],
          f["Core/Animation/Fx.js"],
          f["Core/Animation/AnimationUtilities.js"],
          f["Core/Renderer/HTML/AST.js"],
          f["Core/FormatUtilities.js"],
          f["Core/Renderer/RendererUtilities.js"],
          f["Core/Renderer/SVG/SVGElement.js"],
          f["Core/Renderer/SVG/SVGRenderer.js"],
          f["Core/Renderer/HTML/HTMLElement.js"],
          f["Core/Renderer/HTML/HTMLRenderer.js"],
          f["Core/Axis/Axis.js"],
          f["Core/Axis/DateTimeAxis.js"],
          f["Core/Axis/LogarithmicAxis.js"],
          f["Core/Axis/PlotLineOrBand/PlotLineOrBand.js"],
          f["Core/Axis/Tick.js"],
          f["Core/Tooltip.js"],
          f["Core/Series/Point.js"],
          f["Core/Pointer.js"],
          f["Core/MSPointer.js"],
          f["Core/Legend/Legend.js"],
          f["Core/Chart/Chart.js"],
          f["Core/Series/Series.js"],
          f["Core/Series/SeriesRegistry.js"],
          f["Series/Column/ColumnSeries.js"],
          f["Series/Column/ColumnDataLabel.js"],
          f["Series/Pie/PieSeries.js"],
          f["Series/Pie/PieDataLabel.js"],
          f["Core/Series/DataLabel.js"],
          f["Core/Responsive.js"],
          f["Core/Color/Color.js"],
          f["Core/Time.js"]
        ], function(a, f2, C, G, u, H, I, B, z, p, m, e, d, l, h, t, n, v, w, y, A, q, k, c, g, b, r, x, D, K, M2, Q, O) {
          a.animate = u.animate;
          a.animObject = u.animObject;
          a.getDeferredAnimation = u.getDeferredAnimation;
          a.setAnimation = u.setAnimation;
          a.stop = u.stop;
          a.timers = G.timers;
          a.AST = H;
          a.Axis = d;
          a.Chart = k;
          a.chart = k.chart;
          a.Fx = G;
          a.Legend = q;
          a.PlotLineOrBand = t;
          a.Point = w;
          a.Pointer = A.isRequired() ? A : y;
          a.Series = c;
          a.SVGElement = z;
          a.SVGRenderer = p;
          a.Tick = n;
          a.Time = O;
          a.Tooltip = v;
          a.Color = Q;
          a.color = Q.parse;
          e.compose(p);
          m.compose(z);
          a.defaultOptions = C.defaultOptions;
          a.getOptions = C.getOptions;
          a.time = C.defaultTime;
          a.setOptions = C.setOptions;
          a.dateFormat = I.dateFormat;
          a.format = I.format;
          a.numberFormat = I.numberFormat;
          a.addEvent = f2.addEvent;
          a.arrayMax = f2.arrayMax;
          a.arrayMin = f2.arrayMin;
          a.attr = f2.attr;
          a.clearTimeout = f2.clearTimeout;
          a.correctFloat = f2.correctFloat;
          a.createElement = f2.createElement;
          a.css = f2.css;
          a.defined = f2.defined;
          a.destroyObjectProperties = f2.destroyObjectProperties;
          a.discardElement = f2.discardElement;
          a.distribute = B.distribute;
          a.erase = f2.erase;
          a.error = f2.error;
          a.extend = f2.extend;
          a.extendClass = f2.extendClass;
          a.find = f2.find;
          a.fireEvent = f2.fireEvent;
          a.getMagnitude = f2.getMagnitude;
          a.getStyle = f2.getStyle;
          a.inArray = f2.inArray;
          a.isArray = f2.isArray;
          a.isClass = f2.isClass;
          a.isDOMElement = f2.isDOMElement;
          a.isFunction = f2.isFunction;
          a.isNumber = f2.isNumber;
          a.isObject = f2.isObject;
          a.isString = f2.isString;
          a.keys = f2.keys;
          a.merge = f2.merge;
          a.normalizeTickInterval = f2.normalizeTickInterval;
          a.objectEach = f2.objectEach;
          a.offset = f2.offset;
          a.pad = f2.pad;
          a.pick = f2.pick;
          a.pInt = f2.pInt;
          a.relativeLength = f2.relativeLength;
          a.removeEvent = f2.removeEvent;
          a.seriesType = g.seriesType;
          a.splat = f2.splat;
          a.stableSort = f2.stableSort;
          a.syncTimeout = f2.syncTimeout;
          a.timeUnits = f2.timeUnits;
          a.uniqueKey = f2.uniqueKey;
          a.useSerialIds = f2.useSerialIds;
          a.wrap = f2.wrap;
          r.compose(b);
          K.compose(c);
          l.compose(d);
          h.compose(d);
          D.compose(x);
          t.compose(d);
          M2.compose(k);
          return a;
        });
        f["masters/highcharts.src.js"]._modules = f;
        return f["masters/highcharts.src.js"];
      });
    }
  });

  // node_modules/cookies-eu-banner/dist/cookies-eu-banner.js
  var require_cookies_eu_banner = __commonJS({
    "node_modules/cookies-eu-banner/dist/cookies-eu-banner.js"(exports, module) {
      (function(root, factory, undefined2) {
        "use strict";
        if (typeof define === "function" && define.amd) {
          define([], factory);
        } else if (typeof exports === "object") {
          module.exports = factory();
        } else {
          root.CookiesEuBanner = factory();
        }
      })(window, function() {
        "use strict";
        var CookiesEuBanner2, document2 = window.document;
        CookiesEuBanner2 = function(launchFunction, waitAccept, useLocalStorage, undefined2) {
          if (!(this instanceof CookiesEuBanner2)) {
            return new CookiesEuBanner2(launchFunction);
          }
          this.cookieTimeout = 33696e6;
          this.bots = /bot|crawler|spider|crawling/i;
          this.cookieName = "hasConsent";
          this.trackingCookiesNames = ["__utma", "__utmb", "__utmc", "__utmt", "__utmv", "__utmz", "_ga", "_gat", "_gid"];
          this.launchFunction = launchFunction;
          this.waitAccept = waitAccept || false;
          this.useLocalStorage = useLocalStorage || false;
          this.init();
        };
        CookiesEuBanner2.prototype = {
          init: function() {
            var isBot = this.bots.test(navigator.userAgent);
            var dnt = navigator.doNotTrack || navigator.msDoNotTrack || window.doNotTrack;
            var isToTrack = dnt !== null && dnt !== void 0 ? dnt && dnt !== "yes" && dnt !== 1 && dnt !== "1" : true;
            if (isBot || !isToTrack || this.hasConsent() === false) {
              this.removeBanner(0);
              return false;
            }
            if (this.hasConsent() === true) {
              this.launchFunction();
              return true;
            }
            this.showBanner();
            if (!this.waitAccept) {
              this.setConsent(true);
            }
          },
          /*
           * Show banner at the top of the page
           */
          showBanner: function() {
            var _this = this, getElementById = document2.getElementById.bind(document2), banner = getElementById("cookies-eu-banner"), rejectButton = getElementById("cookies-eu-reject"), acceptButton = getElementById("cookies-eu-accept"), moreLink = getElementById("cookies-eu-more"), waitRemove = banner.dataset.waitRemove === void 0 ? 0 : parseInt(banner.dataset.waitRemove), addClickListener = this.addClickListener, removeBanner = _this.removeBanner.bind(_this, waitRemove);
            banner.style.display = "block";
            if (moreLink) {
              addClickListener(moreLink, function() {
                _this.deleteCookie(_this.cookieName);
              });
            }
            if (acceptButton) {
              addClickListener(acceptButton, function() {
                removeBanner();
                _this.setConsent(true);
                _this.launchFunction();
              });
            }
            if (rejectButton) {
              addClickListener(rejectButton, function() {
                removeBanner();
                _this.setConsent(false);
                _this.trackingCookiesNames.map(_this.deleteCookie);
              });
            }
          },
          /*
           * Set consent cookie or localStorage
           */
          setConsent: function(consent) {
            if (this.useLocalStorage) {
              return localStorage.setItem(this.cookieName, consent);
            }
            this.setCookie(this.cookieName, consent);
          },
          /*
           * Check if user already consent
           */
          hasConsent: function() {
            var cookieName = this.cookieName;
            var isCookieSetTo = function(value) {
              return document2.cookie.indexOf(cookieName + "=" + value) > -1 || localStorage.getItem(cookieName) === value;
            };
            if (isCookieSetTo("true")) {
              return true;
            } else if (isCookieSetTo("false")) {
              return false;
            }
            return null;
          },
          /*
           * Create/update cookie
           */
          setCookie: function(name, value) {
            var date = /* @__PURE__ */ new Date();
            date.setTime(date.getTime() + this.cookieTimeout);
            document2.cookie = name + "=" + value + ";expires=" + date.toGMTString() + ";path=/";
          },
          /*
           * Delete cookie by changing expire
           */
          deleteCookie: function(name) {
            var hostname = document2.location.hostname.replace(/^www\./, ""), commonSuffix = "; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/";
            document2.cookie = name + "=; domain=." + hostname + commonSuffix;
            document2.cookie = name + "=" + commonSuffix;
          },
          addClickListener: function(DOMElement, callback) {
            if (DOMElement.attachEvent) {
              return DOMElement.attachEvent("onclick", callback);
            }
            DOMElement.addEventListener("click", callback);
          },
          /*
           * Delays removal of banner allowing developers
           * to specify their own transition effects
           */
          removeBanner: function(wait) {
            setTimeout(function() {
              var banner = document2.getElementById("cookies-eu-banner");
              if (banner && banner.parentNode) {
                banner.parentNode.removeChild(banner);
              }
            }, wait);
          }
        };
        return CookiesEuBanner2;
      });
    }
  });

  // app/javascript/application.js
  var import_ujs = __toESM(require_rails_ujs());
  var ActiveStorage = __toESM(require_activestorage());
  var import_chartkick = __toESM(require_chartkick());
  var import_highcharts = __toESM(require_highcharts());

  // app/javascript/custom/cookie-banner.js
  var import_cookies_eu_banner = __toESM(require_cookies_eu_banner());
  document.addEventListener("DOMContentLoaded", () => {
    new import_cookies_eu_banner.default(() => {
      console.log("Cookies EU Banner accepted");
    }, true);
  });

  // app/javascript/application.js
  import_ujs.default.start();
  ActiveStorage.start();
  import_chartkick.default.use(import_highcharts.default);
  window.Chartkick = import_chartkick.default;
  document.addEventListener("DOMContentLoaded", () => {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);
    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach((el) => {
        el.addEventListener("click", () => {
          const target = el.dataset.target;
          const $target = document.getElementById(target);
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  });
})();
/*! Bundled license information:

chartkick/dist/chartkick.js:
  (*!
   * Chartkick.js
   * Create beautiful charts with one line of JavaScript
   * https://github.com/ankane/chartkick.js
   * v4.1.1
   * MIT License
   *)

cookies-eu-banner/dist/cookies-eu-banner.js:
  (**
   * Cookies EU banner v2.0.1 - Manage display of banner to accept/reject cookies from tracking services like Google Analytics
   * ------------------------
   * @link http://alex-d.github.io/Cookies-EU-banner/
   * @license MIT
   * @author Alex-D
   *         Twitter : @AlexandreDemode
   *         Website : alex-d.fr
   *)
*/
//# sourceMappingURL=/assets/application.js.map
