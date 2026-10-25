import { metricStats } from '../data/metrics';
import Sparkline from './Sparkline';

export default function MetricCards() {
  return (
    <div className="col-span-12 lg:col-span-5 bg-white rounded-xl p-3 sm:p-4 md:p-5 border border-slate-200 shadow-sm flex flex-col sm:flex-row justify-center items-stretch gap-3 sm:gap-4">
      {metricStats.map((metric) => {
        const isDoc = metric.id === 'documents-viewed';
        return (
          <div
            key={metric.id}
            className="flex-1 bg-white p-3.5 sm:p-4 rounded-xl metric-card-shadow flex flex-col justify-between relative overflow-hidden min-h-[140px] border border-slate-200"
          >
            <div className="flex justify-between items-start gap-2">
              <div
                className="p-2 rounded-xl text-white shrink-0"
                style={{ backgroundColor: metric.themeColor }}
              >
                {isDoc ? (
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414L13.586 3H9z" />
                    <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                )}
              </div>

              <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                <div className="flex items-center">
                  <span className="text-gray-500 text-xs font-semibold truncate uppercase tracking-wider">
                    {metric.label}
                  </span>
                  <span className="text-gray-400 cursor-help ml-1 shrink-0" title="Metric Info">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        clipRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        fillRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-bold text-gray-800">{metric.value}</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <div className="flex items-baseline space-x-1">
                <span className="text-green-500 text-xs font-bold flex items-center">
                  <svg className="w-3 h-3 mr-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      clipRule="evenodd"
                      d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                      fillRule="evenodd"
                    />
                  </svg>
                  {metric.change}
                </span>
              </div>
              <span className="text-[11px] sm:text-xs text-slate-500">{metric.changeNote}</span>
            </div>

            <Sparkline
              points={metric.sparklineData}
              color={metric.sparklineColor}
              width={64}
              height={32}
            />
          </div>
        );
      })}
    </div>
  );
}
