
//------------------ Manage Product ------------------------------

// Handle click button status filter Product
const buttonStatus = document.querySelectorAll("[button-status]");
// console.log(buttonStatus);
if (buttonStatus.length > 0) { 
    let url = new URL(window.location.href);

    buttonStatus.forEach(button  => {
        button.addEventListener("click", () => {
            const status = button.getAttribute("button-status");
            console.log(status);
            // Set url with params 
            if (status){
                url.searchParams.set("status", status);
            }else {
                url.searchParams.delete("status");
            }

            // console.log(url.href);
            // afterward we will navigate to new url
            window.location.href = url.href;
        });
    });
}
// End handle

// Form search
const formSearch = document.querySelector("#form-search");
if (formSearch) {
    let url = new URL(window.location.href);
    formSearch.addEventListener("submit", (event) => {
        let keyword = event.target.keyword.value;
        if (keyword){
            url.searchParams.set("keyword", keyword);
        }else {
            url.searchParams.delete("keyword");
        }
        window.location.href = url.href;
    });
}
//------------------ Manage Product ------------------------------
