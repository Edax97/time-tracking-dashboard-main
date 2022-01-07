const showContent = function(event) {
    console.log("Show content");
    const clickedLink = event.target;

    if (!clickedLink || !clickedLink.classList.contains("show")) {
        return;
    }

    document.querySelectorAll("p.show.active").forEach(a => a.classList.remove("active"));
    clickedLink.classList.add("active");


    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    });

	event.preventDefault();
};

const edit_hrs = event => {
  console.log("Evento");
  const clickedLink = event.currentTarget;
  const contenedor = clickedLink.offsetParent;
  const hrs_el = contenedor.querySelector(".hrs");
  const form = contenedor.querySelector(".send");
  const text_el = form.querySelector(".form-control");
  text_el.value = hrs_el.innerHTML.slice(0,-3);


  hrs_el.classList.add("hide");
  form.classList.remove("hide");

}

const save_hrs = event => {
  console.log("saving hours");

  /*form element .send*/
  const submittedForm = event.currentTarget;

  /*contenedor div*/
  const contenedor = submittedForm.offsetParent.offsetParent;


  const hrs_el = contenedor.querySelector(".hrs");
  const form = contenedor.querySelector(".send");

  /*get hrs*/
  const text_el = submittedForm.querySelector(".form-control").value;

  const lbl_period = document.querySelector("p.show.active").innerHTML;

  /*get time period*/
  let period = "daily"
  if (lbl_period == "Daily"){period="daily";}
  if (lbl_period == "Weekly"){period="weekly";}
  if (lbl_period == "Monthly"){period="monthly";}

  /*get j*/
  const j = submittedForm.querySelector(".form-control").id.slice(-1);

  /*replace data*/
  data[j].timeframes[period].current = text_el;

  if (lbl_period == "Daily"){daily_func();}
  if (lbl_period == "Weekly"){weekly_func();}
  if (lbl_period == "Monthly"){monthly_func();}


  hrs_el.classList.remove("hide");
  form.classList.add("hide");

}


document.querySelector("#link_row").addEventListener("click", showContent);

document.querySelectorAll("img.elip").forEach(a => a.addEventListener("click", edit_hrs));
document.querySelectorAll("form.send").forEach(a => a.addEventListener("submit", save_hrs))
