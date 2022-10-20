const d= document;

export default function contactFormValidations(){
    const $form =d.querySelector(".contact-form"),
    $input =d.querySelectorAll(".contact-form"[required]);
    console.log($inputs);

    $inputs.forEach(input =>{
        const $span =d.createElement("span");
        $span.id =input.name;
        $span.textContent = input.title;
        $span.classList.add("contact-form-error", "none");
        input.insertAdjacentElement ("afterend", $span);
    });

d.addEventListener("keyup", (e) =>{
    if(e.target.matches(".contact-form[requerid]")){
        let $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern;
        //console.log($inputs, pattern);

        if(pattern && $input.value !== ""){
            //console.log("El input tiene patron");
            let regex = new RegExp(pattern);
            return !regex.exec($input.value)
            ? d.getElementById($input.name).classList.add("is-active")
            : d.getElementById($input.name).classList.remove("is-active");
        }
        if(!pattern){
            //console.log("El input NO tiene patron");
            return $input.value ===""
            ? d.getElementById($input.name).classList.add("is-active")
            : d.getElementById($input.name).classList.remove("is-active");
        }
        }
    }


,addEventListener("submit", (e) =>{
    //e.preventDefault();
    alert("Enviando formulario");

    const $response =d.querySelector("contact-form-response");

    setTimeout(() =>{
        $response.classList.remove("none");
        $form.reset();

    
    setTimeout(() =>$response.classList.add("none"),3000)
    },3000);
}))
}