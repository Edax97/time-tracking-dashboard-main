console.log(data)

const hours = document.getElementsByClassName('hrs');
const last = document.getElementsByClassName('last');

const daily_func = () =>{
  for(let i=0;i<6; i++){
    let head = document.getElementById(`content-${ i }`);

    hours[i].innerHTML = `${ data[ i ].timeframes.daily.current }hrs`;
    last[i].innerHTML = `Yesterday - ${ data[ i ].timeframes.daily.previous }hrs`;
  }
  //showContent();
}

const weekly_func = () =>{

  for(let i=0;i<6; i++){
    let head = document.getElementById(`content-${ i }`);

    hours[i].innerHTML = `${ data[ i ].timeframes.weekly.current }hrs`;
    last[i].innerHTML = `Last week - ${ data[ i ].timeframes.weekly.previous }hrs`;
  }
  //showContent();
}

const monthly_func = () =>{
  for(let i=0;i<6; i++){
    hours[i].innerHTML = `${ data[ i ].timeframes.monthly.current }hrs`;
    last[i].innerHTML = `Last month - ${ data[ i ].timeframes.monthly.previous }hrs`;
  }
  //showContent();
}
