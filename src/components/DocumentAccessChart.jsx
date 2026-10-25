import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { chartData } from '../data/metrics';

export default function DocumentAccessChart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const container = chartRef.current;
    if (!container) return;

    const echartsLib = (typeof window !== 'undefined' && window.echarts) ? window.echarts : echarts;
    if (!echartsLib || !echartsLib.init) return;

    // Initialize or re-use instance
    if (!chartInstance.current) {
      chartInstance.current = echartsLib.init(container);
    }
    const chart = chartInstance.current;

    const option = {
      baseOption: {
        title: {
          text: chartData.title,
          left: '0',
          top: '0',
          textStyle: {
            color: '#202124',
            fontSize: 18,
            fontWeight: 600,
          },
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}: {c}%',
        },
        color: chartData.colors,
        series: [
          {
            name: 'Access',
            type: 'pie',
            radius: ['45%', '75%'],
            center: ['50%', '55%'],
            avoidLabelOverlap: true,
            itemStyle: {
              borderColor: '#fff',
              borderWidth: 2,
            },
            label: {
              show: true,
              position: 'outside',
              formatter: '{name|{b}}\n{value|{c}%}',
              rich: {
                name: {
                  fontSize: 13,
                  color: '#333',
                  fontWeight: 500,
                  lineHeight: 18,
                  align: 'center',
                },
                value: {
                  fontSize: 13,
                  color: '#666',
                  align: 'center',
                },
              },
            },
            labelLine: {
              show: true,
              length: 18,
              length2: 22,
              lineStyle: {
                color: '#999',
                width: 1,
              },
            },
            data: chartData.items,
          },
        ],
      },
      media: [
        {
          query: {
            maxWidth: 480,
          },
          option: {
            title: {
              textStyle: {
                fontSize: 15,
              },
            },
            series: [
              {
                radius: ['38%', '60%'],
                center: ['50%', '55%'],
                labelLine: {
                  length: 8,
                  length2: 10,
                },
                label: {
                  rich: {
                    name: { fontSize: 11, lineHeight: 14 },
                    value: { fontSize: 11 },
                  },
                },
              },
            ],
          },
        },
      ],
    };

    chart.setOption(option);

    const handleResize = () => {
      chart.resize();
    };

    window.addEventListener('resize', handleResize);

    let resizeObserver = null;
    if (window.ResizeObserver) {
      resizeObserver = new ResizeObserver(() => {
        chart.resize();
      });
      resizeObserver.observe(container);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      chart.dispose();
      chartInstance.current = null;
    };
  }, []);

  return (
    <div className="col-span-12 lg:col-span-7 min-h-[300px] h-[320px] sm:h-[350px] lg:h-[35vh] bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col">
      <div ref={chartRef} className="w-full flex-1 min-h-0" id="chart" />
    </div>
  );
}
