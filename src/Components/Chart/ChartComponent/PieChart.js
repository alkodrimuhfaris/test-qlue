import React, {useRef, useEffect} from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

export default function PieChart({data = []}) {
  const chart = useRef(null);

  useEffect(() => {
    const x = am4core.create('chartdiv', am4charts.PieChart3D);
    x.innerRadius = am4core.percent(30);
    x.radius = am4core.percent(80);
    x.legend = new am4charts.Legend();
    x.legend.position = 'right';

    x.data = data;
    x.depth = 30;
    const series = x.series.push(new am4charts.PieSeries3D());
    series.dataFields.category = 'label';
    series.dataFields.value = 'value';
    series.dataFields.depthValue = 'value';
    // series.slices.template.tooltipText = "";
    series.labels.template.disabled = true;
    series.ticks.template.disabled = true;
    series.slices.template.propertyFields.fill = 'color';
    series.colors.step = 3;

    chart.current = x;

    return () => {
      x.dispose();
    };
  }, [data]);

  // eslint-disable-next-line react/self-closing-comp
  return <div id="chartdiv" style={{width: '100%', height: '100%'}}></div>;
}
