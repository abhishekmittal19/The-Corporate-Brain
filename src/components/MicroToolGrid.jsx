import { microToolCards } from '../data/tools';

export default function MicroToolGrid() {
  return (
    <div className="col-span-12 bg-white rounded-xl p-3 sm:p-4 md:p-5 border border-slate-200 shadow-sm">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-8 2xl:grid-cols-11 gap-2.5 sm:gap-3.5 md:gap-4 lg:gap-5 w-full">
        {microToolCards.map((card) => {
          const iconColor = card.iconColor || card.textColor;
          return (
            <div
              key={card.id}
              className={`${card.bg} p-2 sm:p-2.5 md:p-3 flex flex-col items-center justify-center aspect-square cursor-pointer raised-card select-none`}
            >
              <span
                className={`material-symbols-outlined text-3xl sm:text-4xl md:text-[42px] 2xl:text-[50px] mb-1 sm:mb-1.5 ${iconColor}`}
              >
                {card.icon}
              </span>
              <span
                className={`text-xs sm:text-[13px] md:text-[14px] 2xl:text-[15px] text-center ${card.textColor} leading-tight font-medium`}
              >
                {card.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
