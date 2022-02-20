
const checkDangerLevel = (e,type,ret) => {
  if(type === "water_level"){
      if(e >= 1900){
          if(ret === "prog"){
              return "danger"
          }
          else if(ret === "back"){
              return { backgroundColor: "#8F0031" };
          }
          else if(ret === "text"){
              return "FlOOD HAS BEEN DETECTED!"
          }
      }
      else if(e < 1900 && e >= 1600){
          if(ret === "prog"){
              return "warning"
          }
          else if(ret === "back"){
              return { backgroundColor: "#FDA50F" };
          }
          else if(ret === "text"){
              return "Water level is quite concerning"
          }
      }
      else{
          if(ret === "prog"){
              return "success"
          }
          else if(ret === "back"){
              return { backgroundColor: "#1b6148" };
          }
          else if(ret === "text"){
              return "Water level is safe"
          }
      }
  }
  else if(type === "shake"){
      if(e === 0){
          if(ret === "prog"){
              return "danger"
          }
          else if(ret === "back"){
              return { backgroundColor: "#8F0031" };
          }
          else if(ret === "text"){
              return "ATTENTION EARTHQUAKE HAS BEEN DETECTED!"
          }
      }
      else if(e === 1){
          if(ret === "prog"){
              return "success"
          }
          else if(ret ==="back"){
              return { backgroundColor: "#1b6148" };
          }
          else if(ret === "text"){
              return "No earthquake detected currently"
          }
      }
  }
  else if(type ==="flame"){
      if(e <= 400){
          if(ret === "prog"){
              return "danger"
          }
          else if(ret ==="back"){
              return { backgroundColor: "#8F0031" };
          }
          else if(ret ==="text"){
              return "ATTENTION FIRE HAZARD HAS BEEN DETECTED!"
          }
      }
      else if(e > 400 && e <= 500){
          if(ret === "prog"){
              return "warning"
          }
          else if(ret ==="back"){
                return { backgroundColor: "#FDA50F" };
          }
          else if(ret ==="text"){
              return "Possible fire hazard has been detected"
          }
      }
      else{
          if(ret === "prog"){
              return "success"
          }
          else if(ret ==="back"){
              return { backgroundColor: "#1b6148" };
          }
          else if(ret ==="text"){
              return "No fire hazard detected currently"
          }
      }
  }
  else if(type === "gas"){
      if(e <= 1100){
          if(ret === "prog"){
              return "success"
          }
          else if(ret === "back"){
              return { backgroundColor: "#1b6148" };
          }
          else if(ret === "text"){
              return "No gas leakage detected currently"
          }
      }
      else if(e >= 1100){
          if(ret === "prog"){
              return "danger"
          }
          else if(ret ==="back"){
            return { backgroundColor: "#8F0031" };
          }
          else if(ret ==="text"){
              return "ATTENTION GAS LEAKAGE HAS BEEN DETECTED!"
          }
      }   
  }
  else if(type === "smoke"){
      if(e >= 2000){
          if(ret === "prog"){
              return "danger"
          }
          else if(ret === "back"){
              return  { backgroundColor: "#8F0031" };
          }
          else if(ret ==="text"){
              return "ATTENTION SMOKE HAZARD HAS BEEN DETECTED"
          }
      }
      else if(e < 2000 && e >= 1800){
          if(ret === "prog"){
              return "warning"
          }
          else if(ret === "back"){
              return { backgroundColor: "#FDA50F" };
          }
          else if(ret ==="text"){
              return "Possible smoke hazard has been detected"
          }
      }
      else{
          if(ret === "prog"){
              return "success"
          }
          else if(ret ==="back"){
              return { backgroundColor: "#1b6148" };
          }
          else if(ret === "text"){
            return "No smoke detected currently"
          }
      }

  }
}

export default checkDangerLevel