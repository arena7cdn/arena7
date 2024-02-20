
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.projects{
  display: flex;
  align-items: center;
}


.show-popup {
  padding: 18px 40px;
  background: #6e78ff;
  border: none;
  outline: none;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .1);
  cursor: pointer;
  font-size: 18px;
  color: #f2f2f2;
  font-weight: 500;
}

.popup-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .3);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  pointer-events: none;
}

.popup-container.active {
  opacity: 1;
  pointer-events: auto;
  transition: .4s ease;
}

.popup-container .popup-box {
  width:350px;
  background: #f2f2f2;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .1);
  padding: 30px;
  transform: scale(0);
}

.popup-container.active .popup-box {
  transform: scale(1);
  transition: .4s ease;
  transition-delay: .25s;
}

.popup-box h1 {
  color: #333;
  line-height: 1;
}

.popup-box p {
  color: #333;
  margin: 12px 0 20px;
}

.popup-box .close-btn {
  width: 100%;
  height: 45px;
  background: #6e78ff;
  border-radius: 6px;
  border: none;
  outline: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, .1);
  cursor: pointer;
  font-size: 18px;
  color: #f2f2f2;
  font-weight: 500;
}
