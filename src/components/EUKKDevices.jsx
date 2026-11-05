
const BASE = "/images/projects/e-ukk";

export default function EUKKDevices() {
  return (
    <div className="relative mx-auto h-[270px] w-full max-w-[780px] sm:h-[400px] lg:h-[480px]">

      {/* PURPLE AMBIENT GLOW */}
      <div className="pointer-events-none absolute inset-[10%] rounded-full bg-fuchsia-600/25 blur-[90px]" />

      {/* NEON ORBIT */}
      <div className="pointer-events-none absolute left-[3%] top-[15%] h-[70%] w-[95%] -rotate-12 rounded-[50%] border-2 border-fuchsia-400/50 shadow-[0_0_35px_rgba(217,70,239,0.35)]" />

      {/* LAPTOP — ADMIN DASHBOARD */}
      <div className="absolute left-[1%] top-[12%] z-10 w-[88%]">
        <div className="rounded-t-xl border-[5px] border-[#34313F] bg-[#111019] p-[3px] shadow-[0_25px_70px_rgba(0,0,0,0.7)] sm:rounded-t-2xl sm:border-[8px]">

          <div className="overflow-hidden rounded-sm bg-white">
            <img
              src={`${BASE}/admin-dashboard.png`}
              alt="e-UKK Admin Dashboard"
              className="aspect-[16/10] w-full object-cover object-top"
            />
          </div>

        </div>

        {/* LAPTOP BASE */}
        <div className="relative -mx-[4%] h-3 rounded-b-[50%] bg-gradient-to-b from-[#B8B1C7] to-[#575263] shadow-xl sm:h-5">
          <div className="absolute left-[38%] top-0 h-[35%] w-[24%] rounded-b-lg bg-[#777180]" />
        </div>
      </div>

      {/* PHONE — STAFF MOBILE APPLICATION */}
      <div className="absolute bottom-[2%] right-[1%] z-20 w-[24%] rotate-[5deg]">

        <div className="rounded-[20px] border-[5px] border-[#29252F] bg-[#17121F] p-[3px] shadow-[0_25px_60px_rgba(0,0,0,0.8)] sm:rounded-[30px] sm:border-[8px]">

          <div className="relative overflow-hidden rounded-[13px] bg-white sm:rounded-[20px]">

            {/* PHONE NOTCH */}
            <div className="absolute left-1/2 top-[2%] z-10 h-[2.5%] w-[35%] -translate-x-1/2 rounded-full bg-black" />

            <img
              src={`${BASE}/home-page.png`}
              alt="e-UKK Staff Mobile Home"
              className="aspect-[9/19] w-full object-cover object-top"
            />

          </div>
        </div>
      </div>

    </div>
  );
}
