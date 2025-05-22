const toggleBtn = document.getElementById("toggleMenu");
        const list = document.getElementById("sweetsList");
        const message = document.getElementById("message");

        toggleBtn.addEventListener("click", () => {
            list.style.display = list.style.display === "block" ? "none" : "block";
        });

        list.addEventListener("click", function(event) {
            const target = event.target;

            if (target.tagName.toLowerCase() === "li") {
                target.style.opacity = "0";

                setTimeout(() => {
                    target.remove();

                if (list.querySelectorAll("li").length === 0) {
                    list.style.display = "none";
                    message.style.display = "block";
                }
              }, 400);
            }
        });