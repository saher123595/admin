$(function () {
    let ulLI = $(".left ul li");
    let ul = $(".left>ul");
    ulLI.click(function () {
        ulLI.removeClass("active");
        $(this).addClass("active");
    });
});

window.onload = function () {

    // preloader

    let preloader = document.getElementById("preloader");
    preloader.style.opacity = 0;
    preloader.style.zIndex = "-3";


    let toggle = document.querySelectorAll(".toggle");
    let mneu = document.querySelectorAll(".mneu");
    let mneu2 = document.querySelector(".muen-2");
    let media = document.querySelector(".media");
    let mneuUl = document.querySelectorAll(".mneu ul");
    let search = document.querySelectorAll(".searchBtn");
    let searchDiv = document.querySelector(".search_div");
    let searchClose = document.querySelector(".search_div i");
    let searchInput = document.querySelector(".search_div input");
    let left = document.querySelector(".left");
    let logoDiv = document.querySelector(".logo");
    let parent1 = document.querySelector("header .parent1");
    let body = document.querySelector("body");
    let right = document.querySelector(".right");
    for (let i = 0; i < mneu.length; i++) {
        mneu[i].onclick = function () {
            mneuUl[i].classList.toggle("active");
        }
    }

    mneu2.onclick = function () {
        media.classList.toggle("Active");
    }


    let iB = document.querySelectorAll("button ul li i");
    for (let x = 0; x < iB.length; x++) {
        ;
        iB[x].style.background = iB[x].getAttribute("data-background");

    }



    // button search
    for (var i = 0; i < search.length; i++) {
        search[i].onclick = function () {
            searchDiv.classList.add("active");
            console.log("Sssss")
        }
    }
    searchClose.onclick = function () {
        searchDiv.classList.remove("active");
    }
    searchInput.onkeyup = function () {
        localStorage.setItem("input", this.value)
    }
    searchInput.value = localStorage.getItem("input");
    // btn toggle
    for (var xi = 0; xi < toggle.length; xi++) {
        toggle[xi].onclick = function () {
            left.classList.toggle("active");
            logoDiv.classList.toggle("active");
            parent1.classList.toggle("active");
            right.classList.toggle("active")
        }
    }



    let btn$muen = document.querySelectorAll(".btn_other_parent");
    let btn$span = document.querySelectorAll(".btn_other_parent span.btn_other");
    let li = document.querySelectorAll(".left>ul>li");

    console.log(li[body.getAttribute("data-length")].classList.add("active"))
    // .classList.add("active");


    for (var x = 0; x < btn$muen.length; x++) {
        let heightDiv = btn$muen[x].offsetHeight;
        btn$muen[x].style.height = "62px";
        btn$muen[x].onclick = function () {
            this.classList.toggle("two");
            if (this.className == "btn_other_parent active two") {
                this.style.height = heightDiv + "px";
            } else {
                this.style.height = "62px";
            }
        }
    }
    // slide_right 
    let slide$right = document.querySelector(".slide_right");
    let slide$rightButton = document.querySelector(".slide_right button.saher");
    let slide$rightBI = document.querySelector(".slide_right button.saher i");
    slide$rightButton.onclick = function () {
        slide$right.classList.toggle("active");
        slide$rightBI.classList.toggle("mdi-spin");
    }

    // end end

    let inputSend = document.querySelector(".slide_right .call .bottom .writer input");
    let buttonSend = document.querySelector(".slide_right .call .bottom .writer button");
    let divCommnts = document.querySelector(".slide_right .call .bottom .commnts");
    let commntsI = document.querySelector(".slide_right .call .top .i");
    let classI = "comm";

    commntsI.onclick = function () {
        this.classList.toggle("active");
        if (classI == "comm") {
            classI = "comm two";
        } else {
            classI = "comm";
        }
    }

    buttonSend.onclick = function () {
        if (inputSend.value != "") {
            divCommnts.innerHTML += `
            <div class="${classI}">${inputSend.value}</div>
            `;
            inputSend.value = "";
        } else {
            alert("The field cannot be empty");
        }
    }

    // elemnt a
    let arrayAnkoer = [
        "../index.html",
        "#",
        "#",
        "#",
        "#",
        "#",
        "#",
        "html/buttons.html",
        "#",
        "#",
        "#",
        "#",
        "#",
        "#",
        "#",
        "#",
        "html/login.html",
        "html/register.html",
        "html/pageError403.html",
        "html/pageError404.html",
        "html/pageError405.html",
        "html/pageError500.html"
    ];
    let a = document.querySelectorAll(".left ul li a");
    for (var an = 0; an < a.length; an++) {
        a[an].href = arrayAnkoer[an];
    }

}

