import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from "./app/screens/Home";
import Another from "./app/screens/Another";

const routes = { Home, Another };
const options = { headerMode: "none" };

const RootStack = createStackNavigator(routes, options);
const AppContainer = createAppContainer(RootStack);

export default AppContainer;
