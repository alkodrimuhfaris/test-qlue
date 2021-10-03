import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {BsTable, BsBarChart, BsMap} from 'react-icons/bs';
import actions from '../../redux/actions';

export default function useConfig() {
  const dispatch = useDispatch();
  return [
    {
      title: 'Table',
      contentTitle: 'Rick and Morty API',
      route: '/table',
      Icon: BsTable,
      searchVal: useSelector((state) => state.table),
      searchFunc: (e) => dispatch(actions.api.rickSearch(e)),
    },
    {
      title: 'Chart',
      contentTitle: 'Indonesia Covid API',
      route: '/chart',
      Icon: BsBarChart,
      searchVal: useSelector((state) => state.table),
      searchFunc: (e) => dispatch(actions.api.provinceSearch(e)),
    },
    {
      title: 'Map',
      contentTitle: 'Google Maps',
      route: '/map',
      Icon: BsMap,
      searchVal: useSelector((state) => state.table),
      searchFunc: (e) => dispatch(actions.api.provinceSearch(e)),
    },
  ];
}

export function getRoute(pathname) {
  const dispatch = useDispatch();
  const routes = [
    {
      title: 'Table',
      contentTitle: 'Rick and Morty API',
      route: '/table',
      Icon: BsTable,
      searchVal: useSelector((state) => state.table.search),
      searchFunc: (e) => dispatch(actions.api.rickSearch(e)),
    },
    {
      title: 'Chart',
      contentTitle: 'Indonesia Covid API',
      route: '/chart',
      Icon: BsBarChart,
      searchVal: useSelector((state) => state.chart.search),
      searchFunc: (e) => dispatch(actions.api.provinceSearch(e)),
    },
    {
      title: 'Map',
      contentTitle: 'Google Maps',
      route: '/map',
      Icon: BsMap,
      searchVal: useSelector((state) => state.table.search),
      searchFunc: (e) => dispatch(actions.api.provinceSearch(e)),
    },
  ];
  const [selectedRouter, setSelectedRouter] = React.useState(0);

  React.useEffect(() => {
    let i = 0;
    routes.forEach((val, idx) => {
      if (val.route === pathname) {
        i = idx;
      }
      return val;
    });
    setSelectedRouter(i);
  }, [pathname]);

  return routes[selectedRouter];
}
