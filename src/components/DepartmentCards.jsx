import { departmentCards } from '../data/tools';

export default function DepartmentCards() {
  return (
    <div className="col-span-12 bg-white rounded-xl p-3 sm:p-4 md:p-5 border border-slate-200 shadow-sm">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 w-full">
        {departmentCards.map((dept) => (
          <div
            key={dept.id}
            className={`${dept.bg} w-full h-[76px] sm:h-[85px] flex flex-col items-center justify-center cursor-pointer raised-card p-2 select-none`}
          >
            <span
              className={`material-symbols-outlined text-3xl sm:text-4xl md:text-[42px] mb-0.5 sm:mb-1 filled ${dept.iconColor}`}
            >
              {dept.icon}
            </span>
            <span
              className={`text-sm sm:text-base md:text-[17px] font-normal ${dept.textColor} leading-none`}
            >
              {dept.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
