const refs =  {
    startColorSwitcherBtn: document.querySelector('[data-start]'),
    stopColorSwitcherBtn: document.querySelector('[data-stop]'),
    body: document.querySelector('body')
};

let setIntervalId = null;

refs.stopColorSwitcherBtn.disabled = 'true';

refs.stopColorSwitcherBtn.addEventListener('click', onStopColorSwitcherBtnClick);
refs.startColorSwitcherBtn.addEventListener('click', onStartColorSwitcherBtnClick);


function onStopColorSwitcherBtnClick() {
    
    refs.startColorSwitcherBtn.removeAttribute('disabled');
    refs.stopColorSwitcherBtn.disabled = 'true';
    clearInterval(setIntervalId);
};

function onStartColorSwitcherBtnClick() {
   
    refs.startColorSwitcherBtn.disabled = 'true';
    refs.stopColorSwitcherBtn.removeAttribute('disabled');

    setIntervalId = setInterval(changeBodyBgColor, 1000);

};

function changeBodyBgColor() {
refs.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }