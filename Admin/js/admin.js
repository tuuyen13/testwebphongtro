document.querySelectorAll(".sidebar-submenu").forEach((e) => {
  e.querySelector(".sidebar-menu-dropdown").onclick = (event) => {
    event.preventDefault();
    e.querySelector(".sidebar-menu-dropdown .dropdown-icon").classList.toggle(
      "active"
    );

    let dropdown_content = e.querySelector(".sidebar-menu-dropdown-content");
    let dropdown_content_lis = dropdown_content.querySelectorAll("li");

    let active_height =
      dropdown_content_lis[0].clientHeight * dropdown_content_lis.length;

    dropdown_content.classList.toggle("active");

    dropdown_content.style.height = dropdown_content.classList.contains(
      "active"
    )
      ? active_height + "px"
      : "0";
  };
});

let category_options = {
  series: [40, 30, 20, 10],
  labels: ["Cho thuê", "Ở ghép", "Vận chuyển", "Dọn phòng"],
  chart: {
    type: "donut",
  },
  colors: ["#DF4036", "#5FE377", "#F147B6", "#F1F147"],
};

let category_chart = new ApexCharts(
  document.querySelector("#category-chart"),
  category_options
);
category_chart.render();

let customer_options = {
  series: [
    {
      name: "Người dùng mới",
      data: [40, 70, 20, 90, 36, 80],
    },
    {
      name: "Người dùng quay lại",
      data: [20, 30, 10, 20, 16, 40],
    },
  ],
  colors: ["#F1AB47", "#8FF147"],
  chart: {
    height: 350,
    type: "line",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    categories: ["1", "2", "3", "4", "5", "6"],
  },
  legend: {
    position: "top",
  },
};

let customer_chart = new ApexCharts(
  document.querySelector("#customer-chart"),
  customer_options
);
customer_chart.render();

setDarkChart = (dark) => {
  let theme = {
    theme: {
      mode: dark ? "dark" : "light",
    },
  };

  customer_chart.updateOptions(theme);
  category_chart.updateOptions(theme);
};
//DRaw bar chart
let customer_options1 = {
  series: [
    {
      name: "Doanh thu từ gói dịch vụ",
      data: [40, 70, 20, 90, 36, 80],
    },
    {
      name: "Doanh thu từ quảng cáo",
      data: [20, 30, 10, 20, 16, 40],
    },
  ],
  colors: ["#1BCDD5", "#EA5CC8"],
  chart: {
    height: 350,
    type: "bar",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    categories: ["1", "2", "3", "4", "5", "6"],
  },
  legend: {
    position: "top",
  },
};

let customer_chart1 = new ApexCharts(
  document.querySelector("#customer-chart1"),
  customer_options1
);
customer_chart1.render();



// DARK MODE TOGGLE
let darkmode_toggle = document.querySelector("#darkmode-toggle");

darkmode_toggle.onclick = (e) => {
  e.preventDefault();
  document.querySelector("body").classList.toggle("dark");
  darkmode_toggle.querySelector(".darkmode-switch").classList.toggle("active");
  setDarkChart(document.querySelector("body").classList.contains("dark"));
};

let overlay = document.querySelector(".overlay");
let sidebar = document.querySelector(".sidebar");

document.querySelector("#mobile-toggle").onclick = () => {
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
};

document.querySelector("#sidebar-close").onclick = () => {
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
};

