import { useEffect, useState } from "react";

import { Route } from "../util/models";

const API_URL = process.env.REACT_APP_API_URL;
type Props = {

};
export const Routes = (props: Props) => {
  const [routes, setRoutes] = useState<Route[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/routes`)
      .then((data) => data.json())
      .then((data) => setRoutes(data));
  }, []);

  return (
    <ul>
      {routes.map((route) => (
        <li>{route.title}: Início ({route.startPosition.lat}, {route.startPosition.lng}) Final ({route.endPosition.lat}, {route.endPosition.lng})</li>
      ))}
    </ul>
  );
};