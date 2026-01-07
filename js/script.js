function showMaintenanceBanner() {
  document.body.style.overflow = "hidden";
  const banner = document.createElement("div");
  banner.id = "maintenance-banner";
  banner.textContent =
    "⚠️ To‘lov amalga oshirilmagan: loyiha vaqtincha xizmatda emas.";

  banner.style.background = "#ffcc00";
  banner.style.color = "#000";
  banner.style.padding = "15px";
  banner.style.textAlign = "center";
  banner.style.fontWeight = "bold";
  banner.style.position = "fixed";
  banner.style.top = "0";
  banner.style.width = "100%";
  banner.style.zIndex = "9999";

  document.body.prepend(banner);
}
showMaintenanceBanner();
