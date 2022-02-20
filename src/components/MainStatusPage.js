import React from "react";
import "./MainStatusPage.css";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProgressBar } from "react-bootstrap";
import returnPercentage from "./functions/returnPercentage";
import checkDangerLevel from "./functions/checkDangerLevel";
import PopUpAlert from "./PopupAlert";

const MainStatusPage = () => {
  const [modalShow, setModalShow] = React.useState(false);

  const navigate = useNavigate();
  const myToken = localStorage.getItem("myToken");

  let popUpOnCooldown = false;

  const [sensorData, setSensorData] = React.useState({
    water_level: 0,
    gas: 1200,
    smoke: 1800,
    flame: 2700,
    shake: 1,
  });

  const [address, setAddress] = React.useState({
    house_no: "",
    village_no: "",
    lane: "",
    road: "",
    sub_district: "",
    district: "",
    province: "",
  });

  // eslint-disable-next-line no-unused-vars
  let myInterval;
  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    myInterval = setInterval(async () => await UpdateSensor(myToken), 1000);
  }, []);

  const UpdateSensor = async (myToken) => {
    let response = await fetch(
      "https://ecourse.cpe.ku.ac.th/exceed07/api/get_sensor",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/JSON",
          Authorization: `bearer ${myToken}`,
        },
      }
    );
    response = await response.json();
    console.log(response);
    console.log(response.result.gas);

    if (response.result.flame <= 400 && popUpOnCooldown === false) {
      let address = await fetch(
        "https://ecourse.cpe.ku.ac.th/exceed07/api/get_address",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/JSON",
            Authorization: `bearer ${myToken}`,
          },
        }
      );
      address = await address.json();

      console.log("Warning Logged");
      console.log(address);

      setAddress({
        house_no: address.result.house_no,
        village_no: address.result.village_no,
        lane: address.result.lane,
        road: address.result.road,
        sub_district: address.result.sub_district,
        district: address.result.district,
        province: address.result.province,
      });

      setModalShow(true);
      popUpOnCooldown = true;
    }

    if (popUpOnCooldown === true) {
      popUpOnCooldown = setTimeout(() => false, 300000); //5 minutes cooldown
    }

    setSensorData({
      water_level: response.result.water_level,
      gas: response.result.gas,
      smoke: response.result.smoke,
      flame: response.result.flame,
      // flame : 200,
      shake: response.result.shake,
    });

    // setSensorData({
    //   water_level: 1700,
    //   gas: 2500,
    //   smoke: 1850,
    //   flame: 200,
    //   shake: 0,
    // });
    // test
  };

  const onButtonClick = () => {
    let interval_id = window.setInterval(() => {}, 99999);
    for (let i = 0; i < interval_id; i++) window.clearInterval(i);
    localStorage.clear("myToken");
    localStorage.clear("currentUser");
    navigate("/backtologin");
  };

  return (
    <div className="main-page">
      <PopUpAlert
        show={modalShow}
        onHide={() => setModalShow(false)}
        details={address}
      />
      <div class="welcome-box">
        <h2>Welcome back, {localStorage.getItem("currentUser")}!</h2>
      </div>
      <div className="main-page-sensor">
        <div className="sensor-big-box">
          <div className="image-box">
            <img src="waterlevel.png" alt="water-level-pic"></img>
          </div>
          <div
            className="sensor-box"
            id="sensor-box-water"
            style={checkDangerLevel(
              sensorData.water_level,
              "water_level",
              "back"
            )}
          >
            <ProgressBar
              variant={checkDangerLevel(
                sensorData.water_level,
                "water_level",
                "prog"
              )}
              now={returnPercentage(sensorData.water_level, "water_level")}
              label={`${returnPercentage(
                sensorData.water_level,
                "water_level"
              )}%`}
            />
            <div className="sensor-box-text">
              <p>Water Level</p>
              <p>
                {checkDangerLevel(
                  sensorData.water_level,
                  "water_level",
                  "text"
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="sensor-big-box">
          <div className="image-box">
            <img src="gas.png" alt="gas-pic"></img>
          </div>
          <div
            className="sensor-box"
            id="sensor-box-gas"
            style={checkDangerLevel(sensorData.gas, "gas", "back")}
          >
            <ProgressBar
              variant={checkDangerLevel(sensorData.gas, "gas", "prog")}
              now={returnPercentage(sensorData.gas, "gas")}
              label={`${returnPercentage(sensorData.gas, "gas")}%`}
            />
            <div className="sensor-box-text">
              <p>Gas leakage</p>
              <p>{checkDangerLevel(sensorData.gas, "gas", "text")}</p>
            </div>
            <div className="sensor-box-icon"></div>
          </div>
        </div>
        <div className="sensor-big-box">
          <div className="image-box">
            <img src="smoke.jfif" alt="smoke-pic"></img>
          </div>
          <div
            className="sensor-box"
            id="sensor-box-smoke"
            style={checkDangerLevel(sensorData.smoke, "smoke", "back")}
          >
            <ProgressBar
              variant={checkDangerLevel(sensorData.smoke, "smoke", "prog")}
              now={returnPercentage(sensorData.smoke, "smoke")}
              label={`${returnPercentage(sensorData.smoke, "smoke")}%`}
            />
            <div className="sensor-box-text">
              <p>Smoke Hazard</p>
              <p>{checkDangerLevel(sensorData.smoke, "smoke", "text")}</p>
            </div>
            <div className="sensor-box-icon"></div>
          </div>
        </div>
        <div className="sensor-big-box">
          <div className="image-box">
            <img src="flame.jfif" alt="flame-pic"></img>
          </div>
          <div
            className="sensor-box"
            id="sensor-box-flame"
            style={checkDangerLevel(sensorData.flame, "flame", "back")}
          >
            <ProgressBar
              variant={checkDangerLevel(sensorData.flame, "flame", "prog")}
              now={returnPercentage(sensorData.flame, "flame")}
              label={`${returnPercentage(sensorData.flame, "flame")}%`}
            />
            <div className="sensor-box-text">
              <p>Fire Hazard</p>
              <p>{checkDangerLevel(sensorData.flame, "flame", "text")}</p>
            </div>
            <div className="sensor-box-icon"></div>
          </div>
        </div>
        <div className="sensor-big-box">
          <div className="image-box">
            <img src="quake.jfif" alt="quake-pic"></img>
          </div>
          <div
            className="sensor-box"
            id="sensor-box-shake"
            style={checkDangerLevel(sensorData.shake, "shake", "back")}
          >
            <ProgressBar
              variant={checkDangerLevel(sensorData.shake, "shake", "prog")}
              now={returnPercentage(sensorData.shake, "shake")}
              label={`${returnPercentage(sensorData.shake, "shake")}%`}
            />
            <div className="sensor-box-text">
              <p>Earthquake</p>
              <p>{checkDangerLevel(sensorData.shake, "shake", "text")}</p>
            </div>
          </div>
        </div>

        <div className="logout-button-box">
          <Button
            id="logout-button"
            type="submit"
            size="lg"
            variant="danger"
            onClick={onButtonClick}
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainStatusPage;
