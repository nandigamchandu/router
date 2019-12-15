import { BrowserRouter, HashRouter, Route as Route$1, Redirect } from 'react-router-dom';
export { Link, NavLink, Switch } from 'react-router-dom';
import React from 'react';
import { fatal, cast, verify } from 'technoidentity-utils';
import { parse } from 'query-string';

var MatchContext =
/*#__PURE__*/
React.createContext(undefined);
function useMatch(paramsSpec) {
  // tslint:disable-next-line: typedef
  var match = React.useContext(MatchContext);

  if (match === null || match === undefined) {
    fatal('match is null or undefined');
  } else {
    cast(paramsSpec, match.params);
  }

  return match;
}
function useParams(paramsSpec) {
  var _useMatch = useMatch(paramsSpec),
      params = _useMatch.params;

  return params;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var RouterContext =
/*#__PURE__*/
React.createContext(undefined);
function useRouter() {
  var result = React.useContext(RouterContext);
  verify(result !== null);
  return result;
}
function useHistory() {
  var _useRouter = useRouter(),
      history = _useRouter.history;

  return history;
}
function useLocation() {
  var _useRouter2 = useRouter(),
      location = _useRouter2.location;

  return location;
}
function useQuery(querySpec) {
  var location = useLocation();
  var query = parse(location.search);
  cast(querySpec, query);
  return query;
}

var RouteMatched = function RouteMatched() {
  var _this = this;

  this.routeMatched = false;

  this.setRouteMatched = function (routeMatched) {
    _this.routeMatched = routeMatched;
  };

  this.getRouteMatched = function () {
    return _this.routeMatched;
  };
};

var CheckRouteMatched = function CheckRouteMatched() {
  var _useRouter = useRouter(),
      getRouteMatched = _useRouter.getRouteMatched;

  if (!getRouteMatched()) {
    throw new Error('no route matched');
  } // tslint:disable-next-line: no-null-keyword


  return null;
};

var RouterChildren = function RouterChildren(_ref) {
  var children = _ref.children;
  return React.createElement(Route$1, null, function (routeProps) {
    return React.createElement(RouterContext.Provider, {
      value: _extends({}, routeProps, {}, new RouteMatched())
    }, children, React.createElement(CheckRouteMatched, null));
  });
};

function Router(_ref2) {
  var variant = _ref2.variant,
      children = _ref2.children,
      props = _objectWithoutPropertiesLoose(_ref2, ["variant", "children"]);

  return variant === 'browser' ? React.createElement(BrowserRouter, Object.assign({}, props), React.createElement(RouterChildren, null, children)) : React.createElement(HashRouter, Object.assign({}, props), React.createElement(RouterChildren, null, children));
}

function Route(_ref) {
  var Component = _ref.component,
      _render = _ref.render,
      children = _ref.children,
      exact = _ref.exact,
      props = _objectWithoutPropertiesLoose(_ref, ["component", "render", "children", "exact"]);

  var _useRouter = useRouter(),
      setRouteMatched = _useRouter.setRouteMatched;

  return React.createElement(Route$1, Object.assign({}, props, {
    exact: exact !== undefined ? exact : true,
    render: function render(renderProps) {
      if (setRouteMatched) {
        setRouteMatched(true);
      }

      return React.createElement(MatchContext.Provider, {
        value: renderProps.match
      }, Component ? React.createElement(Component, Object.assign({}, renderProps)) : _render ? _render(renderProps) : children);
    }
  }));
}

var SimpleRedirect = function SimpleRedirect(_ref) {
  var from = _ref.from,
      to = _ref.to,
      exact = _ref.exact;

  var _useRouter = useRouter(),
      setRouteMatched = _useRouter.setRouteMatched;

  return React.createElement(Route$1, {
    exact: exact !== undefined ? exact : true,
    path: from,
    render: function render() {
      if (setRouteMatched) {
        setRouteMatched(true);
      }

      return React.createElement(Redirect, {
        to: to
      });
    }
  });
};
function removeRouteComponentProps(props) {
  var match = props.match,
      location = props.location,
      history = props.history,
      staticContext = props.staticContext,
      result = _objectWithoutPropertiesLoose(props, ["match", "location", "history", "staticContext"]);

  return result;
}

export { MatchContext, Route, Router, RouterContext, SimpleRedirect, removeRouteComponentProps, useHistory, useLocation, useMatch, useParams, useQuery, useRouter };
//# sourceMappingURL=devfractal-router.esm.js.map
