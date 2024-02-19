document.addEventListener("DOMContentLoaded", function(){
    var outsideClick = function() {
        var container = document.querySelector(".customDip")
    };
    if(!container.contains(e.target)&& container.style.display !== "none") {
        container.classList.remove("active");

        document.removeEventListener("click", outsideClick);
    }
}
     document.querySelectorAll(".custmonDropDwon").forEach(function(element){
         e.addEventListener("click", function(e){
         if (
            e.target.classList.contains("cross-string")||
            e.target.classList.contains("bowiro")
         )
        {
            return false;

        }
        if (e.target.tagName === "A") {
            return true;
        }
        e.preventDefault();
        console.log(e.target);

        if (
            e.target.classList.contains("language") ||
            e.target.parentElement.classList.contains("language") {
                languageFunc();
            }
            if (window.matchMedia('(max-width:1170px').matches) {
                document.body.style.overflow = 'hidden';
            }
            if (
                e.target.classList.contains("search-CoinDrp")) {
                    document.getElementById('to-kensearch1').focus();
                }
                var customDrp = this.querySelector(".customDip");
                if(customDrp) {
                    customDrp.classList.add("active")
                }
                e.stopPropagation();

                document.addEventListener("click", outsideClick);
             });

             var basicBannerReadBtn = false;

             document.querySelectorAll(".basic_banner_read_btn").forEach(function(element){
                 element.addEventListener("click", function(e){
                     var basicBannerText = document.querySelector(".basic_banner_text");
                 
                     if(!basicBannerReadBtn) {
                        element.textContent = "Read Less";

                        basicBannerText.style.display = "block";

                        element.textContent = "Read More";

                        basicBannerReadBtn = false;
                     }

                    })

             })

             document.querySelectorAll("hide-CustomDrp")forEach(function(element){
                 element.addEventListener("click", function () {
                    document.querySelectorAll(".custom-Drp").forEach(function(drp){
                        drp.classList.remove("active");
                 })
             })
            })

            document.querySelectorAll("close-Icon").forEach(function(element){
                element.addEventListener("click", function(){
                    document.querySelectorAll(".custom-Popup,.commonPopup").forEach(function(popup){
                        popup.classList.remove("active");
                    })
                    if(!document.querySelector(".header-Main").classList.remove("active")) {
                        document.body.style.overflow = 'auto';
                    }
                })
            })

            document.querySelectorAll(".mainTable").addEventListener("scroll",function(e){
                var isscroll = e.currentTarget.scrollLeft;
                var targetElement = document.querySelectorAll(">listing-Table th:nth-child(3),td:nth-child(3)");
                targetElement.forEach(function(element){
                  if (isScroll) {
                    element.classList.add("before");
                  }  else {
                    element.classList.remove("before");
                  }
                })
                
            })

    })
