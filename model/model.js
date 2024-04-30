export function loadPage(pageID) {
  let url;
  switch (pageID) {
    case "home":
      url = "pages/home.html";
      break;
    case "about":
      url = "pages/about.html";
      break;
    case "gallery":
      url = "pages/gallery.html";
      break;
    case "gallery1":
      url = "pages/gallery/gallery1.html";
      break;
    case "gallery2":
      url = "pages/gallery/gallery2.html";
      break;
    case "gallery3":
      url = "pages/gallery/gallery3.html";
      break;
    case "gallery4":
      url = "pages/gallery/gallery4.html";
      break;
    case "gallery5":
      url = "pages/gallery/gallery5.html";
      break;
    case "blog":
      url = "pages/blog.html";
      break;
    case "blog1":
      url = "pages/blog/blog1.html";
      break;
    case "blog2":
      url = "pages/blog/blog2.html";
      break;
    case "blog3":
      url = "pages/blog/blog3.html";
      break;
    case "blog4":
      url = "pages/blog/blog4.html";
      break;
    case "blog5":
      url = "pages/blog/blog5.html";
      break;
    case "contact":
      url = "pages/contact.html";
      break;
    default:
      console.error("Invalid page ID");
      return;
  }

  $.ajax({
    url: url,
    type: "GET",
    success: function (data) {
      $("#app").html(data);
    },
    error: function (xhr, status, error) {
      console.error("Error loading page:", error);
    },
  });
}
