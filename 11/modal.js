
function openModal({text = "SanE"}) {
    const $btn = document.querySelector("#btn");
    const $modal = document.querySelector(".modal");
    const $close = document.querySelector(".close");
    const $content = document.querySelector(".content");
    $content.innerText = text;
    $btn.addEventListener("click", ()=>{
        $modal.classList.remove("hidden");
    })
    $close.addEventListener("click", (e)=>{
        $modal.classList.add("hidden");
    })
    $modal.addEventListener("click", (e)=>{
        const eTarget = e.target;
        if (eTarget.classList.contains("body")){
            $modal.classList.add("hidden");
            console.log("true");
        }
    })
}
export {openModal};