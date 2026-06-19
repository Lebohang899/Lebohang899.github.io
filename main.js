window.onload = function () {

    let nav = document.querySelector("nav");

    if (nav != null) {
        let menuButton = document.createElement("button");
        menuButton.innerHTML = "☰ Menu";
        menuButton.className = "menu-btn";

        nav.parentNode.insertBefore(menuButton, nav);

        menuButton.onclick = function () {
            nav.classList.toggle("show-nav");

            if (nav.classList.contains("show-nav")) {
                menuButton.innerHTML = "Close Menu";
            } else {
                menuButton.innerHTML = "☰ Menu";
            }
        };
    }

    let page = window.location.pathname.split("/").pop();
    let links = document.querySelectorAll("nav a");

    for (let i = 0; i < links.length; i++) {
        if (links[i].getAttribute("href") == page) {
            links[i].classList.add("active-link");
        }
    }

    let topButton = document.createElement("button");
    topButton.innerHTML = "↑";
    topButton.className = "back-to-top";
    document.body.appendChild(topButton);

    window.onscroll = function () {
        if (window.scrollY > 300) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }
    };

    topButton.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    let products = document.querySelectorAll(".card");

    if (products.length > 0) {
        let searchBox = document.createElement("input");
        searchBox.type = "text";
        searchBox.placeholder = "Search meals...";
        searchBox.className = "search-box";

        let productSection = document.querySelector(".products");

        if (productSection != null) {
            productSection.parentNode.insertBefore(searchBox, productSection);
        }

        searchBox.onkeyup = function () {
            let searchText = searchBox.value.toLowerCase();

            for (let i = 0; i < products.length; i++) {
                let productText = products[i].innerText.toLowerCase();

                if (productText.includes(searchText)) {
                    products[i].style.display = "block";
                } else {
                    products[i].style.display = "none";
                }
            }
        };
    }

    let form = document.querySelector("form");

    if (form != null) {
        form.onsubmit = function (event) {
            event.preventDefault();

            let name = form.querySelector('input[type="text"]');
            let email = form.querySelector('input[type="email"]');
            let message = form.querySelector("textarea");

            let valid = true;

            if (name.value.trim() == "") {
                name.style.border = "2px solid red";
                valid = false;
            } else {
                name.style.border = "2px solid green";
            }

            if (email.value.trim() == "" || !email.value.includes("@")) {
                email.style.border = "2px solid red";
                valid = false;
            } else {
                email.style.border = "2px solid green";
            }

            if (message.value.trim() == "") {
                message.style.border = "2px solid red";
                valid = false;
            } else {
                message.style.border = "2px solid green";
            }

            if (valid == true) {
                alert("Your enquiry has been submitted successfully.");
                form.reset();
            } else {
                alert("Please fill in all the form details correctly.");
            }
        };
    }

    let specialProducts = document.querySelectorAll(".product");

    if (specialProducts.length > 0) {
        let message = document.createElement("p");
        message.innerHTML = "Today's specials are only available for a limited time.";
        message.className = "countdown";

        let container = document.querySelector(".container");

        if (container != null) {
            container.parentNode.insertBefore(message, container);
        }
    }

};