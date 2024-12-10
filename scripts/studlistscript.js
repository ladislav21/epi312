const studentPage = document.getElementById('student-page');

const studentsList = {
    1: {
        fullname: 'Максимова Софья Эдуардовна',
        birthdate: '21.12.2004',
        about: 'Староста',
        photo: 'students_images/stud1.jpg',
    },
    2: {
        fullname: 'Хомякова Яна Ефимовна',
        birthdate: '',
        about: '',
        photo: 'students_images/stud2.jpg',
    },
    3: {
        fullname: 'Уткин Михаил Тихонович',
        birthdate: '13.08.2003',
        about: '',
        photo: 'students_images/stud3.jpg',
    },
    4: {
        fullname: 'Титова Ксения Григорьевна',
        birthdate: '18.09.2004',
        about: 'Зам. старосты</br>Любит читать книги',
        photo: 'students_images/stud4.jpg',
    },
    5: {
        fullname: 'Савин Максим Павлович',
        birthdate: '08.05.2002',
        about: 'Футболист</br>Капитан сборной университета по футболу',
        photo: 'students_images/stud5.jpg',
    },
    6: {
        fullname: 'Зорина Олеся Эдуардовна',
        birthdate: '17.03.2004',
        about: 'Отличница<br>Закончила школу с золотой медалью',
        photo: 'students_images/stud6.jpg',
    },
    7: {
        fullname: 'Рогов Ринат Борисович',
        birthdate: '07.07.2003',
        about: 'Баскетболист',
        photo: 'students_images/stud7.jpg',
    },
    8: {
        fullname: 'Иванов Иван Иванович',
        birthdate: '15.11.2005',
        about: 'Любит компьютерные игры',
        photo: '',
    },
    9: {
        fullname: 'Мухин Руслан Антонович',
        birthdate: '19.03.2004',
        about: 'Перевёлся в группу в начале учебного года',
        photo: 'students_images/stud8.jpg',
    },
};


for (student in studentsList) {
    if(studentsList[student].hasOwnProperty('fullname')) {
        if (!studentsList[student].photo) {
            studentsList[student].photo = 'images/nophoto.jpg';
        }
        if (!studentsList[student].about) {
            studentsList[student].about = 'Тут пока пусто';
        }
        if (!studentsList[student].birthdate) {
            studentsList[student].birthdate = '-';
        }
    
        addStudentToPage(studentsList[student].fullname, studentsList[student].birthdate, studentsList[student].about, studentsList[student].photo);
    }   
}

function addStudentToPage(fullname, birthdate, about, photoLink) {
    let studentCard = document.createElement('div');
    studentCard.className = 'student-card';
    studentCard.innerHTML = 
                `<img src="${photoLink}" $alt="Фото студента" class="student-card__picture">
                <div class="student-card__content">
                    <div class="student-card__fullname">${fullname}</div>
                    <div class="student-card__birthdate">Дата рождения: ${birthdate}</div>
                    <div class="student-card__about">
                    <div class="student-card__bold-title">О студенте:</div>${about}</div>
                </div>`;

    studentPage.append(studentCard);
}