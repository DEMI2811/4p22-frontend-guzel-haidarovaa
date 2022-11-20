"use strict";

const button = document.getElementById("get-users");

button.addEventListener(
  "click",
  () => {
    fetch("https://reqres.in/api/users?per_page=12", { method: "GET" })
      .then((response) => {
        response.json().then((users) => {
            const conclusion_1 = document.getElementById("conclusion_1");
            conclusion_1.innerHTML = "Вывод фамилии всех пользователей в цикле:";
            console.log("-----------");
            console.log("Пункт №1:");
            console.log("-----------");
            const list_1 = document.getElementById("users-list_1");

            for (let user of users.data) {
            console.log(`${user.id}. ${user.last_name}`);

            const li = document.createElement("li");
            const liContent = document.createTextNode(user.last_name);
            li.appendChild(liContent);
            list_1.appendChild(li);
        }

            const conclusion_2 = document.getElementById("conclusion_2");
            conclusion_2.innerHTML = "Вывод всех данных всех пользователей, фамилия которых начинается на F:";
            
            console.log("-----------");
            console.log("Пункт №2:");
            console.log("-----------");

            const list_2 = document.getElementById("users-list_2");

            const filteredArray = users.data.filter(
            (item) => item.last_name[0] === "F"
        );

            for (let user of filteredArray) {
            console.log(`"id": ${user.id},`);
            console.log(`"email": ${user.email},`);
            console.log(`"first_name": ${user.first_name},`);
            console.log(`"last_name": ${user.last_name},`);
            console.log(`"avatar": ${user.avatar},`);
            console.log(``);

            const li = document.createElement("li");
            const liContent = document.createTextNode(
              `"id": ${user.id},` +
                `\n` +
                `"email": ${user.email},` +
                `\n` +
                `"first_name": ${user.first_name},` +
                `\n` +
                `"last_name": ${user.last_name},`
            );
            li.appendChild(liContent);
            list_2.appendChild(li);
            const image = document.createElement("img");
            image.src = `${user.avatar}`;
            list_2.appendChild(image);
        }

            const conclusion_3 = document.getElementById("conclusion_3");
            conclusion_3.innerHTML = "Наша база содержит данные следующих пользователей:";
           
            console.log("-----------");
            console.log("Пункт №3:");
            console.log("-----------");

            const list_3 = document.getElementById("users-list_3");

            const resultStr = users.data.reduce((acc, user) => {
            if (acc === "") {
              acc = `${user.first_name} ${user.last_name}`;
              return acc;
            }
            acc = `${acc}, ${user.first_name} ${user.last_name}`;
            return acc;
        }, "");

            list_3.appendChild(document.createTextNode(`${resultStr}.`));

            console.log(
            `Наша база содержит данные следующих пользователей: ` +
              resultStr +
              `.`
         );

            const conclusion_4 = document.getElementById("conclusion_4");

            conclusion_4.innerHTML =  "Вывод названия всех ключей в объекте пользователя:";

            console.log("-----------");
            console.log("Пункт №4:");
            console.log("-----------");

            const list_4 = document.getElementById("users-list_4");

         

            for (let i = 0; i < users.data.length; i++) {
            console.log(
              `Пользователь №${i + 1}: ${Object.keys(users.data[i])}\n`
            );
            list_4.appendChild(
              document.createTextNode(
                `Пользователь №${i + 1}: ${Object.keys(users.data[i])}\n`
              )
            );
          }
        });
      })
      .catch((e) => {
        console.log(e);
      });
  },
  { once: true }
);