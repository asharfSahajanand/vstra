import { useEffect } from "react";

// Ad Unit configurations
const AD_UNITS = {
  d1: {
    path: "/23330730517/ecom.qubetro.com_d1",
    divId: "div-gpt-ad-1771591796842-0",
    sizes: [[320, 100], [336, 280], [728, 90], [300, 250], "fluid"],
  },
  d2: {
    path: "/23330730517/ecom.qubetro.com_d2",
    divId: "div-gpt-ad-1771591937549-0",
    sizes: [[336, 280], [300, 250], [728, 90], "fluid", [320, 100]],
  },
  d3: {
    path: "/23330730517/ecom.qubetro.com_d3",
    divId: "div-gpt-ad-1771591990515-0",
    sizes: [[300, 250], [728, 90], "fluid", [336, 280], [320, 100]],
  },
  d4: {
    path: "/23330730517/ecom.qubetro.com_d4",
    divId: "div-gpt-ad-1771592031140-0",
    sizes: [[320, 100], [300, 250], [336, 280], [728, 90], "fluid"],
  },
  inter: {
    path: "/23330730517/ecom.qubetro.com_inter",
    divId: "div-gpt-ad-1771592086514-0",
    sizes: [[320, 480], [320, 50], [480, 320]],
  },
  reward: {
    path: "/23330730517/ecom.qubetro.com_reward",
    divId: "div-gpt-ad-1771592147826-0",
    sizes: ["fluid", [468, 60], [480, 320], [1, 1], [320, 480]],
  },
};

// GPT Script loader (index.html mein ya App.js mein ek baar)
const loadGPTScript = () => {
  if (document.getElementById("gpt-script")) return;
  const script = document.createElement("script");
  script.id = "gpt-script";
  script.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
  script.async = true;
  script.crossOrigin = "anonymous";
  document.head.appendChild(script);
};

// Reusable Ad Component
const AdUnit = ({ type }) => {
  const ad = AD_UNITS[type];

  useEffect(() => {
    loadGPTScript();

    window.googletag = window.googletag || { cmd: [] };
    window.googletag.cmd.push(() => {
      // Already defined check
      const slots = window.googletag.pubads().getSlots();
      const alreadyDefined = slots.some((s) => s.getSlotElementId() === ad.divId);
      
      if (!alreadyDefined) {
        window.googletag
          .defineSlot(ad.path, ad.sizes, ad.divId)
          .addService(window.googletag.pubads());

        window.googletag.pubads().enableSingleRequest();
        window.googletag.enableServices();
      }

      window.googletag.display(ad.divId);
    });

    return () => {
      // Cleanup on unmount
      window.googletag = window.googletag || { cmd: [] };
      window.googletag.cmd.push(() => {
        const slots = window.googletag.pubads().getSlots();
        const slot = slots.find((s) => s.getSlotElementId() === ad.divId);
        if (slot) window.googletag.destroySlots([slot]);
      });
    };
  }, []);

  return <div id={ad.divId} style={{ minWidth: "300px", minHeight: "50px" }}>
          </div>;
};

export default AdUnit;