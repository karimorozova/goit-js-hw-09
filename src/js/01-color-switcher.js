const refs =  {
    startColorSwitcherBtn: document.querySelector('[data-start]'),
    stopColorSwitcherBtn: document.querySelector('[data-stop]'),
};

let setTimeoutId = null;

refs.stopColorSwitcherBtn.disabled = 'true';
// refs.stopColorSwitcherBtn.setAttribute('disabled', 'true');
refs.stopColorSwitcherBtn.addEventListener('click', onStopColorSwitcherBtnClick);
refs.startColorSwitcherBtn.addEventListener('click', onStartColorSwitcherBtnClick);


function onStopColorSwitcherBtnClick() {
    // console.log(refs.stopColorSwitcherBtn);
    refs.startColorSwitcherBtn.removeAttribute('disabled');
    refs.stopColorSwitcherBtn.disabled = 'true';
    // clearTimeout(setTimeoutId)
};

function onStartColorSwitcherBtnClick() {
    // console.log(refs.startColorSwitcherBtn);
    refs.startColorSwitcherBtn.disabled = 'true';
    refs.stopColorSwitcherBtn.removeAttribute('disabled');

    // setTimeoutId = setTimeout(() => {}, 1000);

};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }