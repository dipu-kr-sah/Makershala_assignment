const customButtonForApp = (text) => {
  return `<button 
  class = " outline-none
  h-10
  drop-shadow-[0_4.3px_0_rgb(198,100,15)]
  active:drop-shadow-[0_2px_0_rgb(198,100,15)]
  font-bold 
  bg-[#FA8F04] 
  rounded-xl 
  active:translate-y-0.5
  w-40 "
  > 
  ${text}
  </button>`;
};
