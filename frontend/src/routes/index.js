import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";
import Home from '../pages/Home';
import Post from '../pages/Post';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/post" component={Post} />
    </Switch>
  );
}
