 
 import loadGPTScript from "./loadGPTScript";
 export const showInterstitialAd = (onAfter) => {
  loadGPTScript();
  window.googletag = window.googletag || { cmd: [] };

  window.googletag.cmd.push(() => {
    const slot = window.googletag.defineOutOfPageSlot(
      "/23330730517/ecom.qubetro.com_inter",
      window.googletag.enums.OutOfPageFormat.INTERSTITIAL
    );

    if (slot) {
      slot.addService(window.googletag.pubads());

      // Ad render ya close hone pe navigate karo
      window.googletag.pubads().addEventListener("slotRenderEnded", function handler(event) {
        if (event.slot === slot) {
          window.googletag.pubads().removeEventListener("slotRenderEnded", handler);
          if (onAfter) onAfter(); // ✅ navigate here
        }
      });

      window.googletag.pubads().enableSingleRequest();
      window.googletag.enableServices();
      window.googletag.display(slot);
    } else {
      // Ad slot nahi mila — directly navigate karo
      if (onAfter) onAfter();
    }
  });
};