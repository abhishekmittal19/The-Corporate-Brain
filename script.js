const toggleBtn = document.getElementById('menu-toggle');
const mobileToggleBtn = document.getElementById('mobile-menu-toggle');
const sidebar = document.getElementById('sidebar');
const backdrop = document.getElementById('sidebar-backdrop');

function isMobile() {
    return window.innerWidth < 768;
}

if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        if (isMobile()) {
            const isOpen = sidebar.classList.toggle('mobile-open');
            if (backdrop) backdrop.classList.toggle('hidden', !isOpen);
        } else {
            sidebar.classList.toggle('collapsed');
        }
    });
}

if (mobileToggleBtn) {
    mobileToggleBtn.addEventListener('click', () => {
        const isOpen = sidebar.classList.toggle('mobile-open');
        if (backdrop) backdrop.classList.toggle('hidden', !isOpen);
    });
}

if (backdrop) {
    backdrop.addEventListener('click', () => {
        sidebar.classList.remove('mobile-open');
        backdrop.classList.add('hidden');
    });
}

// Close drawer when a navigation item is clicked on mobile
document.querySelectorAll('#sidebar .nav-item').forEach(item => {
    item.addEventListener('click', () => {
        if (isMobile()) {
            sidebar.classList.remove('mobile-open');
            if (backdrop) backdrop.classList.add('hidden');
        }
    });
});

// Fullscreen functionality
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen().catch(() => {});
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen().catch(() => {});
        }
    }
}

const fullscreenBtn = document.getElementById('fullscreenBtn');
const mobileFullscreenBtn = document.getElementById('mobileFullscreenBtn');
if (fullscreenBtn) fullscreenBtn.addEventListener('click', toggleFullscreen);
if (mobileFullscreenBtn) mobileFullscreenBtn.addEventListener('click', toggleFullscreen);

document.addEventListener('fullscreenchange', () => {
    const isFull = !!document.fullscreenElement;
    document.querySelectorAll('.fullscreen-icon').forEach(icon => {
        icon.textContent = isFull ? 'fullscreen_exit' : 'fullscreen';
    });
});

// ECharts initialization
var chartDom = document.getElementById('chart');
var myChart = echarts.init(chartDom);
var option = {
    baseOption: {
        title: {
            text: 'Document Type Access',
            left: '0',
            top: '0',
            textStyle: {
                color: '#202124',
                fontSize: 18,
                fontWeight: 600
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}: {c}%'
        },
        color: [
            '#1f5a84', '#4d80a6', '#6a99b8', '#8db3cc', '#bed5e5', '#f3b985'
        ],
        series: [
            {
                name: 'Access',
                type: 'pie',
                radius: ['45%', '75%'],
                center: ['50%', '55%'],
                avoidLabelOverlap: true,
                itemStyle: {
                    borderColor: '#fff',
                    borderWidth: 2
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
                            align: 'center'
                        },
                        value: {
                            fontSize: 13,
                            color: '#666',
                            align: 'center'
                        }
                    }
                },
                labelLine: {
                    show: true,
                    length: 18,
                    length2: 22,
                    lineStyle: {
                        color: '#999',
                        width: 1
                    }
                },
                data: [
                    { value: 35, name: 'SOPs' },
                    { value: 25, name: 'MoMs' },
                    { value: 15, name: 'Manuals' },
                    { value: 10, name: 'LMIs' },
                    { value: 10, name: 'Feasibility' },
                    { value: 5, name: 'Audits' }
                ]
            }
        ]
    },
    media: [
        {
            query: {
                maxWidth: 480
            },
            option: {
                title: {
                    textStyle: {
                        fontSize: 15
                    }
                },
                series: [
                    {
                        radius: ['38%', '60%'],
                        center: ['50%', '55%'],
                        labelLine: {
                            length: 8,
                            length2: 10
                        },
                        label: {
                            rich: {
                                name: { fontSize: 11, lineHeight: 14 },
                                value: { fontSize: 11 }
                            }
                        }
                    }
                ]
            }
        }
    ]
};

option && myChart.setOption(option);

window.addEventListener('resize', function () {
    if (!isMobile() && sidebar.classList.contains('mobile-open')) {
        sidebar.classList.remove('mobile-open');
        if (backdrop) backdrop.classList.add('hidden');
    }
    myChart.resize();
});

if (window.ResizeObserver && chartDom) {
    const ro = new ResizeObserver(() => {
        myChart.resize();
    });
    ro.observe(chartDom);
}
