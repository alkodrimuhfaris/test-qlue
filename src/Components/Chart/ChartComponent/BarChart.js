import React, {useRef, useEffect} from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

export default function BarChart({data = []}) {
  const chart = useRef(null);

  useEffect(() => {
    const x = am4core.create('chartBar', am4charts.XYChart);
    x.data = data;
    x.legend = new am4charts.Legend();
    x.cursor = new am4charts.XYCursor();
    x.scrollbarX = new am4core.Scrollbar();
    x.scrollbarY = new am4core.Scrollbar();
    // Create axes
    const dateAxis = x.xAxes.push(new am4charts.DateAxis());
    dateAxis.dataFields.category = 'date';
    dateAxis.title.text = 'Time';

    const valueAxis = x.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = 'Orang';

    const series = x.series.push(new am4charts.LineSeries());
    series.name = 'Positif';
    series.stroke = am4core.color('#00D6FF');
    series.strokeWidth = 1;
    series.dataFields.valueY = 'positif';
    series.dataFields.dateX = 'date';

    const series2 = x.series.push(new am4charts.LineSeries());
    series2.name = 'Meninggal';
    series2.stroke = am4core.color('#FFE468');
    series2.strokeWidth = 2;
    series2.dataFields.valueY = 'meninggal';
    series2.dataFields.dateX = 'date';

    const series3 = x.series.push(new am4charts.LineSeries());
    series3.name = 'Sembuh';
    series3.stroke = am4core.color('#BB40AC');
    series3.strokeWidth = 1;
    series3.dataFields.valueY = 'sembuh';
    series3.dataFields.dateX = 'date';

    chart.current = x;

    return () => {
      x.dispose();
    };
  }, [data]);

  // eslint-disable-next-line react/self-closing-comp
  return <div id="chartBar" style={{width: '100%', height: '100%'}}></div>;
}
