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
        case "blog":
            url = "pages/blog.html";
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