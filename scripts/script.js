// Tabindex флаг
const allLinks = document.getElementsByTagName('a');
for (link of allLinks) {
    console.log(link)
    link.setAttribute('tabindex', '-1');
}

document.addEventListener('keydown', function(event) {
    if(event.key === 'Tab') {
        if(event.target.getAttribute('tabindex') === '-1') {
        event.preventDefault();}
    }
});

// Popup флаг
const openPopupBtn = document.getElementById('open-popup');
const popupForm = document.getElementById('popup-form');
const closePopupBtn = document.getElementById('popup-close-btn');
const docBody = document.getElementById('doc-body');

const loginForm = document.getElementById('login-form');
const loginField = document.getElementById('login-field');
const passwordField = document.getElementById('password-field');

openPopupBtn.addEventListener('click', () => {
    popupForm.classList.remove('popup-hidden');
    popupForm.classList.add('popup');
    docBody.classList.add('disableOverflow');
})

closePopupBtn.addEventListener('click', () => {
    popupForm.classList.remove('popup');
    popupForm.classList.add('popup-hidden');
    docBody.classList.remove('disableOverflow');
    loginField.classList.remove('auth-form__warn-field');
    passwordField.classList.remove('auth-form__warn-field');
    loginForm.reset();
})

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    checkData();
});

function checkData() {
    if((loginField.value === 'testlog') && (passwordField.value === 'testpass')) {
        window.location.replace('lk.html');
    } else {
        changeFieldColor(loginField, 'testlog');
        changeFieldColor(passwordField, 'testpass');
    }

    function changeFieldColor(formField, data) {
        if (formField.value !== data)
            formField.classList.add('auth-form__warn-field');

        formField.addEventListener('focus', () => {
            formField.classList.remove('auth-form__warn-field')
        })
    }
};


// Расписание флаг
const timetableBtns = document.querySelectorAll('.timetable-week__button');

let activeTimetableBtn;
for (btn of timetableBtns) {
    if(btn.classList.contains('timetable-week__button-active')) {
        activeTimetableBtn = btn;
    }
}

timetableBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if(!(btn.classList.contains('timetable-week__button-active'))) {
            activeTimetableBtn.classList.toggle('timetable-week__button-active');
            activeTimetableBtn = btn;
            activeTimetableBtn.classList.toggle('timetable-week__button-active');
            if(activeTimetableBtn.getAttribute('data-weeknum') === "week1") {
                resetTimetable();
                fillTimetable(timetableFirstWeek);
                console.log('filled')
            } else {
                resetTimetable();
                fillTimetable(timetableSecondWeek);
                console.log('nothing')
            }

        }
    })
})



let allDays = document.getElementsByClassName('timetable-cell');
let arrDays = Array.from(allDays);

let timetableFirstWeek = {
    mn5: {
        'subject-cell': 'Информационная безопасность (Лек)',
        'location-cell': 'Ауд. 3412',
        'teacher-cell': 'Морозова В.И.',
    },
    mn6: {
        'subject-cell': 'Проектирование информационных систем (Лек)',
        'location-cell': 'Ауд. 3301',
        'teacher-cell': 'Морозова В.И.',
    },
    tu5: {
        'subject-cell': 'Исследование операций (Лек)',
        'location-cell': 'Ауд. 3412',
        'teacher-cell': 'Сеславина Е.А.',
    },
    tu6: {
        'subject-cell': 'Программная инженерия (Лек)',
        'location-cell': 'Ауд. 3301',
        'teacher-cell': 'Медникова О.В.',
    },
    we4: {
        'subject-cell': 'Управление программными проектами (Лек)',
        'location-cell': 'Ауд. 3301',
        'teacher-cell': 'Медникова О.В.',
    },
    we5: {
        'subject-cell': 'Проектная деятельность (Пр)',
        'location-cell': 'Ауд. 3311',
        'teacher-cell': 'Осипов Д.В.',
    },
    we6: {
        'subject-cell': 'Программная инженерия (Пр)',
        'location-cell': 'Ауд. 3213',
        'teacher-cell': 'Медникова О.В.',
    },
    we7: {
        'subject-cell': 'Финансовый и управленческий учет (Лек)',
        'location-cell': 'Ауд. 3301',
        'teacher-cell': 'Васильева А.Б.',
    },
    th2: {
        'subject-cell': 'Финансы и кредит (Пр)',
        'location-cell': 'Ауд. 3407',
        'teacher-cell': 'Фрейдина И.А.',
    },
    th3: {
        'subject-cell': 'Управление программными проектами (Пр)',
        'location-cell': 'Ауд. 3213',
        'teacher-cell': 'Поскряков И.А.',
    },
    th4: {
        'subject-cell': 'Информационная безопасность (Пр)',
        'location-cell': 'Ауд. 3302',
        'teacher-cell': 'Врублевский К.Э.',
    },
    fr2: {
        'subject-cell': 'Финансовый и управленческий учет (Пр)',
        'location-cell': 'Ауд. 3216',
        'teacher-cell': 'Авилова Н.Д.',
    },
    fr3: {
        'subject-cell': 'Проектирование информационных систем (Лаб)',
        'location-cell': 'Ауд. 3302',
        'teacher-cell': 'Врублевский К.Э.\nМорозова В.И.',
    },
    fr4: {
        'subject-cell': 'Исследование операций и методы оптимизации (Пр)',
        'location-cell': 'Ауд. 3402',
        'teacher-cell': 'Сеславина Е.А.',
    },
    sa1: {
        'subject-cell': 'Военная подготовка',
        'location-cell': ' ',
        'teacher-cell': ' ',
    },
}

let timetableSecondWeek = {
    mn5: {
        'subject-cell': 'Информационная безопасность (Лек)',
        'location-cell': 'Ауд. 3412',
        'teacher-cell': 'Морозова В.И.',
    },
    mn6: {
        'subject-cell': 'Проектирование информационных систем (Лек)',
        'location-cell': 'Ауд. 3301',
        'teacher-cell': 'Морозова В.И.',
    },
    tu5: {
        'subject-cell': 'Исследование операций (Лек)',
        'location-cell': 'Ауд. 3412',
        'teacher-cell': 'Сеславина Е.А.',
    },
    tu6: {
        'subject-cell': 'Программная инженерия (Лек)',
        'location-cell': 'Ауд. 3301',
        'teacher-cell': 'Медникова О.В.',
    },
    we4: {
        'subject-cell': 'Управление программными проектами (Лек)',
        'location-cell': 'Ауд. 3301',
        'teacher-cell': 'Медникова О.В.',
    },
    we5: {
        'subject-cell': 'Проектная деятельность (Пр)',
        'location-cell': 'Ауд. 3311',
        'teacher-cell': 'Осипов Д.В.',
    },
    we6: {
        'subject-cell': 'Программная инженерия (Пр)',
        'location-cell': 'Ауд. 3213',
        'teacher-cell': 'Медникова О.В.',
    },
    th1: {
        'subject-cell': 'Финансы и кредит (Лек)',
        'location-cell': 'Ауд. 3412',
        'teacher-cell': 'Фрейдина И.А.',
    },
    th2: {
        'subject-cell': 'Финансы и кредит (Пр)',
        'location-cell': 'Ауд. 3407',
        'teacher-cell': 'Фрейдина И.А.',
    },
    th3: {
        'subject-cell': 'Управление программными проектами (Пр)',
        'location-cell': 'Ауд. 3213',
        'teacher-cell': 'Поскряков И.А.',
    },
    th4: {
        'subject-cell': 'Информационная безопасность (Пр)',
        'location-cell': 'Ауд. 3302',
        'teacher-cell': 'Врублевский К.Э.',
    },
    fr2: {
        'subject-cell': 'Финансовый и управленческий учет (Пр)',
        'location-cell': 'Ауд. 3216',
        'teacher-cell': 'Авилова Н.Д.',
    },
    fr3: {
        'subject-cell': 'Проектирование информационных систем (Лаб)',
        'location-cell': 'Ауд. 3302',
        'teacher-cell': 'Врублевский К.Э.\nМорозова В.И.',
    },
    fr4: {
        'subject-cell': 'Исследование операций и методы оптимизации (Пр)',
        'location-cell': 'Ауд. 3402',
        'teacher-cell': 'Сеславина Е.А.',
    },
    sa1: {
        'subject-cell': 'Военная подготовка',
        'location-cell': ' ',
        'teacher-cell': ' ',
    },
}

function fillTimetable(timetableWeekNum) {
    for (dayCode in timetableWeekNum) {
        let dataToFill = timetableWeekNum[dayCode];
    
        arrDays.find((day, index) => { 
            if(day.getAttribute('data-daynum') === dayCode) {
                for (dataElem in dataToFill) {
                    let textOnPage = allDays[index].getElementsByClassName(dataElem);
                    textOnPage[0].innerText = dataToFill[dataElem];
                }
            }
        })
    }
}

function resetTimetable() {
    let clearField;
    for(day of allDays) {
        clearField = day.querySelector('.location-cell');
        if (clearField) {
            clearField.innerText = '';
            clearField = day.querySelector('.subject-cell');
            clearField.innerText = '';       
            clearField = day.querySelector('.teacher-cell');
            clearField.innerText = '';   
        }
    }
}

resetTimetable();
fillTimetable(timetableFirstWeek);