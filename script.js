// подключаем vue.js
import {createApp} from "https://cdn.skypack.dev/petite-vue@0.4.1";

// основная переменная-приложение
const app = () => {
    // описываем показатели и их значения
    const metrics = [
        {
            title: "Личные проекты",
            pct: 95,
        },
        {
            title: "Силы",
            pct: 45,
        },
        {
            title: "Учеба",
            pct: 65,
        },
        {
            title: "Работа",
            pct: 90,
        }
    ]
    return {
        // ставим предварительный заголовок
        title: "Мой 2022 в процентах",
        //формируем кругляши с их значениями
        metrics,
        // и устанавливаем их текст
        color(pct) {
            // если большой показатель то зеленый
            if (pct > 80) {
                return 'green';
            } else if (pct > 49) {
                return 'orange';
            }
            // иначе возвращаем красный
            return 'red';
        }
    }
}
// создаем приложение
createApp({app}).mount();