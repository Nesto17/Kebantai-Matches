       // Your web app's Firebase configuration
       // For Firebase JS SDK v7.20.0 and later, measurementId is optional
       var firebaseConfig = {
           apiKey: "AIzaSyCVQiH2DSjYOiRrsmgaSRTObEWkGpHm1sA",
           authDomain: "kebantai2020.firebaseapp.com",
           databaseURL: "https://kebantai2020-default-rtdb.firebaseio.com",
           projectId: "kebantai2020",
           storageBucket: "kebantai2020.appspot.com",
           messagingSenderId: "290266641346",
           appId: "1:290266641346:web:85b99043fe87f7795a1c5b",
           measurementId: "G-M3H7QJBJGQ"
       };
       // Initialize Firebase
       firebase.initializeApp(firebaseConfig);
       firebase.analytics();

       //Initialize Firestore
       const db = firebase.firestore();
       db.settings({
           timestampsInSnapshots: true
       });


       // const requests = document.querySelectorAll(".display-request")
       // for (var i = 0; i < requests.length; i++) {
       //     requests[i].addEventListener('click',
       //         function () {
       //             document.querySelector(".request-application").style.display = 'flex';
       //         });
       // }

       // document.querySelector(".application-close").addEventListener('click',
       //     function () {
       //         document.querySelector(".request-application").style.display = 'none';
       //     });

        function toggleMenu() {
           var menuToggle = document.querySelector('.toggle');
           var navigation = document.querySelector('.navigation');
           menuToggle.classList.toggle('active');
           navigation.classList.toggle('active');
       }

       function toggleFilter() {
           var filterToggle = document.querySelector('.filter-trigger');
           var filter = document.querySelector('.filter');
           filterToggle.classList.toggle('active');
           filter.classList.toggle('active');
       }

       /*
       //Date
       */

       var options_box_date = document.getElementById("options_box_date");

       var today_date = new Date().getDate();
       var year = new Date().getFullYear();
       var month = new Date().getMonth();
       var lastDay = new Date(year, month + 1, 0).getDate();
       var nextMonthFirstDay = new Date(year, month + 2, 1).getDate();
       var nextMonthLastDay = new Date(year, month + 2, 0).getDate();

       for (today_date; today_date <= lastDay; today_date++) {
           var date = new Date(year, month, today_date);
           date.setDate(date.getDate());
           date_string = String(date);
           var words = date_string.split(' ');
           var words_date = words.slice(0, 3);
           var date_modified = words_date.join(' ');

           let div = document.createElement('div');
           let input = document.createElement('input');
           let label = document.createElement('label');
           div.className = "option";
           input.className = "radio";
           input.setAttribute("type", "radio");
           input.setAttribute("name", "date");
           input.value = date.toDateString();
           label.innerHTML = date_modified;

           div.appendChild(input);
           div.appendChild(label);

           options_box_date.appendChild(div);
       }

       for (nextMonthFirstDay; nextMonthFirstDay <= nextMonthLastDay; nextMonthFirstDay++) {
           var date = new Date(year, month + 1, nextMonthFirstDay);
           date.setDate(date.getDate());
           date_string = String(date);
           var words = date_string.split(' ');
           var words_date = words.slice(0, 3);
           var date_modified = words_date.join(' ');

           let div = document.createElement('div');
           let input = document.createElement('input');
           let label = document.createElement('label');
           div.className = "option";
           input.className = "radio";
           input.setAttribute("type", "radio");
           input.setAttribute("name", "date");
           input.value = date.toDateString();
           label.innerHTML = date_modified;

           div.appendChild(input);
           div.appendChild(label);

           options_box_date.appendChild(div);
       }

       function hour_check(date, time) {
           const current_month = new Date().getMonth();
           const current_date = new Date().getDate();
           let current_hour = new Date().getHours();

           let calender_month = new Date(date).getMonth();
           let calender_date = new Date(date).getDate();
           const input_time = parseInt(time.slice(0, 2));

           // CHECK HOUR
           if (calender_month == current_month && calender_date == current_date && input_time <= current_hour) {
               return false;
           } else {
               return true;
           }
       }

       /*
       //HTML
       */
       const selectedAll = document.querySelectorAll(".selected");

       const options_box_sport = document.getElementById("options_box_sport");
       const optionsListSport = options_box_sport.querySelectorAll(".option");
       let sport_value = "all sport";
       optionsListSport.forEach(o => {
           o.addEventListener("click", () => {
               sport_value = o.querySelector("input").value;
           });
       })

       const optionsListDate = options_box_date.querySelectorAll(".option");
       let date_value = "";
       optionsListDate.forEach(o => {
           o.addEventListener("click", () => {
               date_value = o.querySelector("input").value;
           });
       })

       const options_box_time = document.getElementById("options_box_time");
       const optionsListTime = options_box_time.querySelectorAll(".option");
       let time_value = "";
       optionsListTime.forEach(o => {
           o.addEventListener("click", () => {
               time_value = o.querySelector("input").value;
           });
       })

       const options_box_sex = document.getElementById("options_box_sex");
       const optionsListSex = options_box_sex.querySelectorAll(".option");
       let sex_value = "anyone";
       optionsListSex.forEach(o => {
           o.addEventListener("click", () => {
               sex_value = o.querySelector("input").value;
           });
       })

       const options_box_region = document.getElementById("options_box_region");
       const optionsListRegion = options_box_region.querySelectorAll(".option");
       let region_value = "all region";
       optionsListRegion.forEach(o => {
           o.addEventListener("click", () => {
               region_value = o.querySelector("input").value;
           });
       })

       const selected_sport = document.getElementById("selected_sport");
       const selected_time = document.getElementById("selected_time");
       const selected_date = document.getElementById("selected_date");
       const selected_sex = document.getElementById("selected_sex");
       const selected_region = document.getElementById("selected_region");

       selected_date.innerHTML = "All Date";
       selected_time.innerHTML = "All Time";
       selected_sex.innerHTML = "Anyone";
       selected_region.innerHTML = "All Region";

       selectedAll.forEach(selected => {
           const optionsContainer = selected.previousElementSibling;
           const optionsList = optionsContainer.querySelectorAll(".option");
           const select_box1 = document.getElementById("select-box1");
           const select_box2 = document.getElementById("select-box2");
           const option_date = document.getElementById("option_date");
           let previous_word = "";

           selected.addEventListener("click", () => {
               if (optionsContainer.classList.contains("active")) {
                   optionsContainer.classList.remove("active");
               } else {
                   let currentActive = document.querySelector(".options-box.active");

                   if (currentActive) {
                       currentActive.classList.remove("active");
                   }

                   optionsContainer.classList.add("active");
               }
           });

           select_box1.addEventListener("click", () => {
               if (selected_date.innerHTML === "All Date") {
                   select_box2.style.pointerEvents = "none";
                   selected_time.innerHTML = "All Time";
                   select_box2.style.opacity = "0.7";
               } else {
                   select_box2.style.pointerEvents = "unset";
                   select_box2.style.opacity = "1";
               }
           })

           select_box2.addEventListener("click", () => {
               if (selected_date.innerHTML === "All Date") {
                   select_box2.style.pointerEvents = "none";
                   selected_time.innerHTML = "All Time";
                   select_box2.style.opacity = "0.7";
               } else {
                   select_box2.style.pointerEvents = "unset";
                   select_box2.style.opacity = "1";
               }
           })

           optionsList.forEach(o => {
               o.addEventListener("click", () => {
                   selected.innerHTML = o.querySelector("label").innerHTML;
                   optionsContainer.classList.remove("active");
                   if (previous_word != o.querySelector("label").innerHTML) {
                       if (sport_value == "all sport") {
                           if (selected_date.innerHTML == "All Date" && selected_region.innerHTML == "All Region") {
                               var child = display_container.lastElementChild;
                               while (child) {
                                   display_container.removeChild(child);
                                   child = display_container.lastElementChild;
                               }
                               db.collection('match').where('sex', '==', sex_value).orderBy("date").orderBy("time").onSnapshot(snapshot => {
                                   let changes = snapshot.docChanges();
                                   changes.forEach(change => {
                                       if (change.type == "added") {
                                           if (change.doc.data().owner) {
                                               renderMatch3(change.doc.data(), change.doc.id);
                                           }
                                       } else if (change.type == "removed") {
                                           let li = display_container.querySelector('[data-id=' + change.doc.id + ']');
                                           display_container.removeChild(li);
                                       }
                                   })
                               })
                           } else if (selected_date.innerHTML == "All Date" && selected_region.innerHTML != "All Region") {
                               var child = display_container.lastElementChild;
                               while (child) {
                                   display_container.removeChild(child);
                                   child = display_container.lastElementChild;
                               }
                               db.collection('match').where('sex', '==', sex_value).where("region", '==', region_value).orderBy("date").orderBy("time").onSnapshot(snapshot => {
                                   let changes = snapshot.docChanges();
                                   changes.forEach(change => {
                                       if (change.type == "added") {
                                           if (change.doc.data().owner) {
                                               renderMatch3(change.doc.data(), change.doc.id);
                                           }
                                       } else if (change.type == "removed") {
                                           let li = display_container.querySelector('[data-id=' + change.doc.id + ']');
                                           display_container.removeChild(li);
                                       }
                                   })
                               })

                           } else if (selected_date.innerHTML != "All Date" && selected_time.innerHTML == "All Time" && selected_region.innerHTML == "All Region") {
                               var child = display_container.lastElementChild;
                               while (child) {
                                   display_container.removeChild(child);
                                   child = display_container.lastElementChild;
                               }
                               db.collection('match').where('sex', '==', sex_value).where("date", "==", date_value).orderBy("time").onSnapshot(snapshot => {
                                   let changes = snapshot.docChanges();
                                   changes.forEach(change => {
                                       if (change.type == "added") {
                                           if (change.doc.data().owner) {
                                               renderMatch3(change.doc.data(), change.doc.id);
                                           }
                                       } else if (change.type == "removed") {
                                           let li = display_container.querySelector('[data-id=' + change.doc.id + ']');
                                           display_container.removeChild(li);
                                       }
                                   })
                               })

                           } else if (selected_date.innerHTML != "All Date" && selected_time.innerHTML == "All Time" && selected_region.innerHTML != "All Region") {
                               var child = display_container.lastElementChild;
                               while (child) {
                                   display_container.removeChild(child);
                                   child = display_container.lastElementChild;
                               }
                               db.collection('match').where('sex', '==', sex_value).where("region", '==', region_value).where("date", "==", date_value).orderBy("time").onSnapshot(snapshot => {
                                   let changes = snapshot.docChanges();
                                   changes.forEach(change => {
                                       if (change.type == "added") {
                                           if (change.doc.data().owner) {
                                               renderMatch3(change.doc.data(), change.doc.id);
                                           }
                                       } else if (change.type == "removed") {
                                           let li = display_container.querySelector('[data-id=' + change.doc.id + ']');
                                           display_container.removeChild(li);
                                       }
                                   })
                               })
                           } else if (selected_date.innerHTML != "All Date" && selected_time.innerHTML != "All Time" && selected_region.innerHTML == "All Region") {
                               let check_hour = hour_check(date_value, time_value);
                               if (check_hour) {
                                   var child = display_container.lastElementChild;
                                   while (child) {
                                       display_container.removeChild(child);
                                       child = display_container.lastElementChild;
                                   }
                                   db.collection('match').where('sex', '==', sex_value).where("date", "==", date_value).where("time", "==", time_value).onSnapshot(snapshot => {
                                       let changes = snapshot.docChanges();
                                       changes.forEach(change => {
                                           if (change.type == "added") {
                                               if (change.doc.data().owner) {
                                                   renderMatch3(change.doc.data(), change.doc.id);
                                               }
                                           } else if (change.type == "removed") {
                                               let li = display_container.querySelector('[data-id=' + change.doc.id + ']');
                                               display_container.removeChild(li);
                                           }
                                       })
                                   })
                               } else {
                                   alert("THE TIME HAS PASSED");
                               }
                           } else if (selected_date.innerHTML != "All Date" && selected_time.innerHTML != "All Time" && selected_region.innerHTML != "All Region") {
                               let check_hour = hour_check(date_value, time_value);
                               if (check_hour) {
                                   var child = display_container.lastElementChild;
                                   while (child) {
                                       display_container.removeChild(child);
                                       child = display_container.lastElementChild;
                                   }
                                   db.collection('match').where('sex', '==', sex_value).where("region", '==', region_value).where("date", "==", date_value).where("time", "==", time_value).onSnapshot(snapshot => {
                                       let changes = snapshot.docChanges();
                                       changes.forEach(change => {
                                           if (change.type == "added") {
                                               if (change.doc.data().owner) {
                                                   renderMatch3(change.doc.data(), change.doc.id);
                                               }
                                           } else if (change.type == "removed") {
                                               let li = display_container.querySelector('[data-id=' + change.doc.id + ']');
                                               display_container.removeChild(li);
                                           }
                                       })
                                   })
                               } else {
                                   alert("THE TIME HAS PASSED");
                               }
                           }
                       } else {
                           if (selected_date.innerHTML == "All Date" && selected_region.innerHTML == "All Region") {
                               var child = display_container.lastElementChild;
                               while (child) {
                                   display_container.removeChild(child);
                                   child = display_container.lastElementChild;
                               }
                               db.collection('match').where('sport', '==', sport_value).where('sex', '==', sex_value).orderBy("date").orderBy("time").onSnapshot(snapshot => {
                                   let changes = snapshot.docChanges();
                                   changes.forEach(change => {
                                       if (change.type == "added") {
                                           if (change.doc.data().owner) {
                                               renderMatch3(change.doc.data(), change.doc.id);
                                           }
                                       } else if (change.type == "removed") {
                                           let li = display_container.querySelector('[data-id=' + change.doc.id + ']');
                                           display_container.removeChild(li);
                                       }
                                   })
                               })
                           } else if (selected_date.innerHTML == "All Date" && selected_region.innerHTML != "All Region") {
                               var child = display_container.lastElementChild;
                               while (child) {
                                   display_container.removeChild(child);
                                   child = display_container.lastElementChild;
                               }
                               db.collection('match').where('sport', '==', sport_value).where('sex', '==', sex_value).where("region", '==', region_value).orderBy("date").orderBy("time").onSnapshot(snapshot => {
                                   let changes = snapshot.docChanges();
                                   changes.forEach(change => {
                                       if (change.type == "added") {
                                           if (change.doc.data().owner) {
                                               renderMatch3(change.doc.data(), change.doc.id);
                                           }
                                       } else if (change.type == "removed") {
                                           let li = display_container.querySelector('[data-id=' + change.doc.id + ']');
                                           display_container.removeChild(li);
                                       }
                                   })
                               })

                           } else if (selected_date.innerHTML != "All Date" && selected_time.innerHTML == "All Time" && selected_region.innerHTML == "All Region") {
                               var child = display_container.lastElementChild;
                               while (child) {
                                   display_container.removeChild(child);
                                   child = display_container.lastElementChild;
                               }
                               db.collection('match').where('sport', '==', sport_value).where('sex', '==', sex_value).where("date", "==", date_value).orderBy("time").onSnapshot(snapshot => {
                                   let changes = snapshot.docChanges();
                                   changes.forEach(change => {
                                       if (change.type == "added") {
                                           if (change.doc.data().owner) {
                                               renderMatch3(change.doc.data(), change.doc.id);
                                           }
                                       } else if (change.type == "removed") {
                                           let li = display_container.querySelector('[data-id=' + change.doc.id + ']');
                                           display_container.removeChild(li);
                                       }
                                   })
                               })

                           } else if (selected_date.innerHTML != "All Date" && selected_time.innerHTML == "All Time" && selected_region.innerHTML != "All Region") {
                               var child = display_container.lastElementChild;
                               while (child) {
                                   display_container.removeChild(child);
                                   child = display_container.lastElementChild;
                               }

                               db.collection('match').where('sport', '==', sport_value).where('sex', '==', sex_value).where("region", '==', region_value).where("date", "==", date_value).orderBy("time").onSnapshot(snapshot => {
                                   let changes = snapshot.docChanges();
                                   changes.forEach(change => {
                                       if (change.type == "added") {
                                           if (change.doc.data().owner) {
                                               renderMatch3(change.doc.data(), change.doc.id);
                                           }
                                       } else if (change.type == "removed") {
                                           let li = display_container.querySelector('[data-id=' + change.doc.id + ']');
                                           display_container.removeChild(li);
                                       }
                                   })
                               })
                           } else if (selected_date.innerHTML != "All Date" && selected_time.innerHTML != "All Time" && selected_region.innerHTML == "All Region") {
                               let check_hour = hour_check(date_value, time_value);
                               if (check_hour) {
                                   var child = display_container.lastElementChild;
                                   while (child) {
                                       display_container.removeChild(child);
                                       child = display_container.lastElementChild;
                                   }
                                   db.collection('match').where('sport', '==', sport_value).where('sex', '==', sex_value).where("date", "==", date_value).where("time", "==", time_value).onSnapshot(snapshot => {
                                       let changes = snapshot.docChanges();
                                       changes.forEach(change => {
                                           if (change.type == "added") {
                                               if (change.doc.data().owner) {
                                                   renderMatch3(change.doc.data(), change.doc.id);
                                               }
                                           } else if (change.type == "removed") {
                                               let li = display_container.querySelector('[data-id=' + change.doc.id + ']');
                                               display_container.removeChild(li);
                                           }
                                       })
                                   })
                               } else {
                                   alert("THE TIME HAS PASSED");
                               }
                           } else if (selected_date.innerHTML != "All Date" && selected_time.innerHTML != "All Time" && selected_region.innerHTML != "All Region") {
                               let check_hour = hour_check(date_value, time_value);
                               if (check_hour) {
                                   var child = display_container.lastElementChild;
                                   while (child) {
                                       display_container.removeChild(child);
                                       child = display_container.lastElementChild;
                                   }
                                   db.collection('match').where('sport', '==', sport_value).where('sex', '==', sex_value).where("region", '==', region_value).where("date", "==", date_value).where("time", "==", time_value).onSnapshot(snapshot => {
                                       let changes = snapshot.docChanges();
                                       changes.forEach(change => {
                                           if (change.type == "added") {
                                               if (change.doc.data().owner) {
                                                   renderMatch3(change.doc.data(), change.doc.id);
                                               }
                                           } else if (change.type == "removed") {
                                               let li = display_container.querySelector('[data-id=' + change.doc.id + ']');
                                               display_container.removeChild(li);
                                           }
                                       })
                                   })
                               } else {
                                   alert("THE TIME HAS PASSED");
                               }
                           }
                       }
                       previous_word = o.querySelector("label").innerHTML;
                   }
               });
           });
       })

       /*
       //FIREBASE 
       */
       const display_container = document.querySelector(".display-container");

       const objectOfDays = {
           "Mon": "Monday",
           "Tue": "Tuesday",
           "Wed": "Wednesday",
           "Thu": "Thursday",
           "Fri": "Friday",
           "Sat": "Saturday",
           "Sun": "Sunday",
       };

       function renderMatch(doc) {
           //MAIN DIV
           let display_content_per_date = document.createElement('div');
           display_content_per_date.className = "display-content-per-date";

           //DATE AND UL
           let date = document.createElement('h4');
           let display_list = document.createElement('ul');

           date.className = "display-date";
           display_list.className = "display-list";
           let date_text = doc.data().date;
           let date_split = date_text.split(" ");
           let full_day = objectOfDays[date_split[0]];
           let date_final = date_split.splice(1, 2);
           let date_join = date_final.join(" ");
           date.innerHTML = full_day + " " + date_join + ", " + doc.data().time + " WIB";

           //LI
           let display_item = document.createElement('li');
           display_item.className = "display-item";

           //SPORT'S ICON
           let display_color_identifier = document.createElement('div');
           let icon = document.createElement('img');
           display_color_identifier.className = "display-color-identifier";

           if (doc.data().sport == "basketball") {
               icon.src = "./images/basketball2.svg";
               display_item.id = "display-basketball";
           } else if (doc.data().sport == "soccer") {
               icon.src = "./images/soccer2.svg";
               display_item.id = "display-soccer";
           } else if (doc.data().sport == "badminton") {
               icon.src = "./images/badminton2.svg";
               display_item.id = "display-badminton";
           } else if (doc.data().sport == "volleyball") {
               icon.src = "./images/volleyball2.svg";
               display_item.id = "display-volleyball";
           }

           //EVENT NAME, AMOUNT OF PLAYERS, GENDER
           let display_text = document.createElement('div');
           let display_title = document.createElement('h2');
           let display_amount = document.createElement('div');
           let img = document.createElement('img');
           let p = document.createElement('p');
           let display_peoplepref2 = document.createElement('p');

           display_text.className = "display-text";
           display_title.className = "display-title";
           display_amount.className = "display-amount";

           img.src = "./images/group.svg";
           display_title.innerHTML = doc.data().event_name;
           p.innerHTML = "3 / 10";

           //DISPLAY BAR
           let display_bar = document.createElement('div');
           display_bar.className = "display-bar";

           //DISPLAY LOCATION
           let display_location = document.createElement('div');
           let display_place = document.createElement('p');
           let display_address = document.createElement('p');

           display_location.className = "display-location";
           display_place.className = "display-place";
           display_place.style.textOverflow = "ellipsis";
           display_address.className = "display-address";

           display_place.innerHTML = doc.data().location;
           display_address.innerHTML = doc.data().address;

           //GENDER ICON
           let display_peoplepref = document.createElement('div');
           let display_sex_icon = document.createElement('div');
           let img_gender = document.createElement('img');
           let display_sex_text = document.createElement('p');

           display_sex_icon.className = "display-sex-icon";
           display_sex_text.className = "display-sex-text";

           //BUTTON
           let button = document.createElement('button');
           let button_p = document.createElement('p');
           let button_image = document.createElement('img');

           //CLASS BUTTON TERGANTUNG ACTION
           button.setAttribute("type", "submit");
           button.className = "display-request";
           button_p.innerHTML = "Request";
           button_image.src = "./images/Right arrow.svg";
           // button.className = "display-delete";
           // button.className = "display-request";

           //SET ID FIREBASE KE LI
           display_item.setAttribute("data-id", doc.id);

           if (doc.data().sex == 'male') {
               display_peoplepref2.className = "display-peoplepref2 display-male2";
               display_peoplepref2.innerHTML = "male only";
               img_gender.src = "./images/male.svg";
               img_gender.alt = "malesign";
               display_peoplepref.className = "display-peoplepref display-male";
               display_sex_text.innerHTML = "male only";
           } else if (doc.data().sex == 'female') {
               display_peoplepref2.className = "display-peoplepref2 display-female2";
               display_peoplepref2.innerHTML = "female only";
               img_gender.src = "./images/female.svg";
               img_gender.alt = "femalesign";
               display_peoplepref.className = "display-peoplepref display-female";
               display_sex_text.innerHTML = "female only";
           } else if (doc.data().sex == 'anyone') {
               display_peoplepref2.className = "display-peoplepref2 display-anysex2";
               display_peoplepref2.innerHTML = "anyone can join";
               img_gender.src = "./images/anysex.svg";
               img_gender.alt = "unisex";
               display_peoplepref.className = "display-peoplepref display-anysex";
               display_sex_text.innerHTML = "anyone";
           }

           //display-color-identifier
           display_color_identifier.appendChild(icon);
           display_item.appendChild(display_color_identifier);

           //display-text
           display_amount.appendChild(img);
           display_amount.appendChild(p);
           display_text.appendChild(display_title);
           display_text.appendChild(display_amount);
           display_text.appendChild(display_peoplepref2);

           //display-location
           display_location.appendChild(display_place);
           display_location.appendChild(display_address);

           //display-peoplepref
           display_sex_icon.appendChild(img_gender);
           display_peoplepref.appendChild(display_sex_icon);
           display_peoplepref.appendChild(display_sex_text);

           //display button
           button.appendChild(button_p);
           button.appendChild(button_image);

           //APPEND TO DISPLAY-ITEM
           display_item.appendChild(display_color_identifier);
           display_item.appendChild(display_text);
           display_item.appendChild(display_bar);
           display_item.appendChild(display_location);
           display_item.appendChild(display_peoplepref);
           display_item.appendChild(button);

           //APPEND TO MAIN DIV
           display_list.appendChild(display_item);
           display_content_per_date.appendChild(date);
           display_content_per_date.appendChild(display_list);
           display_container.appendChild(display_content_per_date);
       }


       // UNCOMMENT

       db.collection('match').where('sex', '==', sex_value).orderBy("date").orderBy("time").onSnapshot(snapshot => {
           let changes = snapshot.docChanges();
           changes.forEach(change => {
               if (change.type == "added") {
                   // CHECK IF THE OWNER FIELD EXISTS
                   if (change.doc.data().owner) {
                       renderMatch3(change.doc.data(), change.doc.id);
                   }
               } else if (change.type == "removed") {
                   let li = display_container.querySelector('[data-id=' + change.doc.id + ']');
                   display_container.removeChild(li);
               }
           })
       })


       //UNTUK SCHEDULE

       let temp_list = [];

       // db.collection('account').doc("1fj3C0p3vowY8tCrpHNa").get().then(function (doc) {
       //     temp_list = doc.data().matches_created_join;
       //     // console.log(temp_list);

       //     db.collection('match').where(firebase.firestore.FieldPath.documentId(), 'in', temp_list).get().then((snapshot) => {
       //         snapshot.docs.forEach(dok => {
       //             renderMatch3(dok.data());
       //         })
       //     })
       // })

       var ok_test = {
           address: "jl.hello234",
           date: "Sun Dec 27 2020",
           event_name: "Hello!@#",
           location: "Orion Sport Center",
           owner: "1fj3C0p3vowY8tCrpHNa",
           sex: "male",
           sport: "volleyball",
           time: "12:00",
           matches_join: ["D4T0Imix4NVhf8L0w8J3"],
           pending: ["D4T0Imix4NVhf8L0w8J3"]
       }

       var ok_test2 = {
           address: "jl.hello234",
           date: "Sun Dec 27 2020",
           event_name: "Joseph@34",
           location: "Lapangan Gasibu",
           owner: "1fj3C0p3vowY8tCrpHNa",
           sex: "anyone",
           sport: "soccer",
           time: "12:00",
           matches_join: ["D4T0Imix4NVhf8L0w8J3"],
           pending: ["D4T0Imix4NVhf8L0w8J3"]

       }

       var ok_test3 = {
           address: "jl.hello234",
           date: "Mon Dec 28 2020",
           event_name: "Badmin Cabskuy",
           location: "Lapangan Dinas",
           owner: "1fj3C0p3vowY8tCrpHNa",
           sex: "anyone",
           sport: "badminton",
           time: "15:00",
           matches_join: ["D4T0Imix4NVhf8L0w8J3"],
           pending: ["D4T0Imix4NVhf8L0w8J3"]

       }

       var ok_test4 = {
           address: "jl.hello234",
           date: "Mon Dec 28 2020",
           event_name: "Mabar Minggu!!!",
           location: "Komplek BudiIndah",
           owner: "ernesto",
           sex: "female",
           sport: "basketball",
           time: "15:00",
           matches_join: ["D4T0Imix4NVhf8L0w8J3"],
           pending: ["D4T0Imix4NVhf8L0w8J3"]

       }

       var ok_test5 = {
           address: "jl.hello234",
           date: "Tue Dec 29 2020",
           event_name: "Futsal Jancuuu",
           location: "Abadi Sport Center",
           owner: "ernest1",
           sex: "male",
           sport: "soccer",
           time: "15:00",
           matches_join: ["D4T0Imix4NVhf8L0w8J3"],
           pending: ["1fj3C0p3vowY8tCrpHNa"]

       }

       var ok_test6 = {
           address: "jl.hello234",
           date: "Wed Dec 30 2020",
           event_name: "asdkljfha",
           location: "Rumah Ernest",
           owner: "1fj3C0p3vowY8tCrpHNa",
           sex: "male",
           sport: "volleyball",
           time: "15:00",
           matches_join: ["1fj3C0p3vowY8tCrpHNa"],
           pending: ["D4T0Imix4NVhf8L0w8J3"]

       }

       var ok_test7 = {
           address: "jl.hello234",
           date: "Wed Dec 30 2020",
           event_name: "asdkljfha",
           location: "Cipaku Gym",
           owner: "lol",
           sex: "anyone",
           sport: "basketball",
           time: "12:00",
           matches_join: ["1fj3C0p3vowY8tCrpHNa"],
           pending: ["D4T0Imix4NVhf8L0w8J3"]

       }

       var ok_test8 = {
           address: "jl.hello234",
           date: "Sun Dec 27 2020",
           event_name: "GUa_test_8",
           location: "GOR Padjajaran",
           owner: "1fj3C0p3vowY8tCrpHNa",
           sex: "female",
           sport: "basketball",
           time: "17:00",
           matches_join: ["D4T0Imix4NVhf8L0w8J3"],
           pending: ["D4T0Imix4NVhf8L0w8J3"]
       }

       let div = document.querySelector(".display-container");

       // renderMatch3(ok_test4)
       // renderMatch3(ok_test5)
       // renderMatch3(ok_test6)
       // renderMatch3(ok_test7)
       // renderMatch3(ok_test)
       // renderMatch3(ok_test3)
       // renderMatch3(ok_test2)

       function sortDiv() {
           var div, i, switching, b, shouldSwitch;
           div = document.querySelector(".display-container");
           switching = true;
           /* Make a loop that will continue until
           no switching has been done: */
           while (switching) {
               // Start by saying: no switching is done:
               switching = false;
               b = div.childNodes;

               // Loop through all div items:
               for (i = 1; i < (div.childElementCount); i++) {
                   // Start by saying there should be no switching:
                   shouldSwitch = false;
                   /* Check if the next item should
                   switch place with the current item: */
                   let date1 = new Date(b[i].id);
                   let date2 = new Date(b[i + 1].id);

                   // console.log(date1);
                   // console.log("-----")
                   // console.log(date2);

                   if (date1 > date2) {
                       /* If next item is alphabetically lower than current item,
                       mark as a switch and break the loop: */
                       shouldSwitch = true;
                       break;
                   }
               }
               if (shouldSwitch) {
                   /* If a switch has been marked, make the switch
                   and mark the switch as done: */
                   b[i].parentNode.insertBefore(b[i + 1], b[i]);
                   switching = true;
               }
           }
       }

       function renderMatch3(doc, id) {
           //MAIN DIV
           let display_content_per_date = document.createElement('div');
           display_content_per_date.className = "display-content-per-date";
           display_content_per_date.id = doc.date + " " + doc.time;

           //DATE AND UL
           let date = document.createElement('h4');
           let display_list = document.createElement('ul');

           date.className = "display-date";
           display_list.className = "display-list";
           let date_text = doc.date;
           let date_split = date_text.split(" ");
           let full_day = objectOfDays[date_split[0]];
           let date_final = date_split.splice(1, 2);
           let date_join = date_final.join(" ");
           date.innerHTML = full_day + " " + date_join + ", " + doc.time + " WIB";
           display_list.id = full_day + " " + date_join + ", " + doc.time + " WIB";

           //LI
           let display_item = document.createElement('li');
           display_item.className = "display-item";

           //SPORT'S ICON
           let display_color_identifier = document.createElement('div');
           let icon = document.createElement('img');
           display_color_identifier.className = "display-color-identifier";

           if (doc.sport == "basketball") {
               icon.src = "./images/basketball2.svg";
               display_item.id = "display-basketball";
           } else if (doc.sport == "soccer") {
               icon.src = "./images/soccer2.svg";
               display_item.id = "display-soccer";
           } else if (doc.sport == "badminton") {
               icon.src = "./images/badminton2.svg";
               display_item.id = "display-badminton";
           } else if (doc.sport == "volleyball") {
               icon.src = "./images/volleyball2.svg";
               display_item.id = "display-volleyball";
           }

           //EVENT NAME, AMOUNT OF PLAYERS, GENDER
           let display_text = document.createElement('div');
           let display_title = document.createElement('h2');
           let display_amount = document.createElement('div');
           let img = document.createElement('img');
           let p = document.createElement('p');
           let display_peoplepref2 = document.createElement('p');

           display_text.className = "display-text";
           display_title.className = "display-title";
           display_amount.className = "display-amount";

           img.src = "./images/group.svg";
           display_title.innerHTML = doc.event_name;
           p.innerHTML = `${doc.matches_join.length + 1} / ${parseInt(doc.limit)}`;

           //DISPLAY BAR
           let display_bar = document.createElement('div');
           display_bar.className = "display-bar";

           //DISPLAY LOCATION
           let display_location = document.createElement('div');
           let display_place = document.createElement('p');
           let display_address = document.createElement('p');

           display_location.className = "display-location";
           display_place.className = "display-place";
           display_place.style.textOverflow = "ellipsis";
           display_address.className = "display-address";

           display_place.innerHTML = doc.location;
           display_address.innerHTML = doc.address;

           //GENDER ICON
           let display_peoplepref = document.createElement('div');
           let display_sex_icon = document.createElement('div');
           let img_gender = document.createElement('img');
           let display_sex_text = document.createElement('p');

           display_sex_icon.className = "display-sex-icon";
           display_sex_text.className = "display-sex-text";

           //BUTTON
           let button = document.createElement('button');
           let button_p = document.createElement('p');
           let button_image = document.createElement('img');

           button_p.className = "button_p";
           button_image.className = "button_image";

           //CLASS BUTTON TERGANTUNG ACTION
           button.setAttribute("type", "submit");

           //SET ID FIREBASE KE LI
           display_item.setAttribute("data-id", id);

           if (doc.sex == 'male') {
               display_peoplepref2.className = "display-peoplepref2 display-male2";
               display_peoplepref2.innerHTML = "male only";
               img_gender.src = "./images/male.svg";
               img_gender.alt = "malesign";
               display_peoplepref.className = "display-peoplepref display-male";
               display_sex_text.innerHTML = "male only";
           } else if (doc.sex == 'female') {
               display_peoplepref2.className = "display-peoplepref2 display-female2";
               display_peoplepref2.innerHTML = "female only";
               img_gender.src = "./images/female.svg";
               img_gender.alt = "femalesign";
               display_peoplepref.className = "display-peoplepref display-female";
               display_sex_text.innerHTML = "female only";
           } else if (doc.sex == 'anyone') {
               display_peoplepref2.className = "display-peoplepref2 display-anysex2";
               display_peoplepref2.innerHTML = "anyone can join";
               img_gender.src = "./images/anysex.svg";
               img_gender.alt = "unisex";
               display_peoplepref.className = "display-peoplepref display-anysex";
               display_sex_text.innerHTML = "anyone";
           }

           // DETERMINE THE BUTTON TYPE

           let doc_pending_data = doc.pending;
           let pending_list_data = [];

           doc_pending_data.forEach(data_pending => {
               let split_data = data_pending.split(",");
               split_data.forEach(data => {
                   pending_list_data.push(data);
               })
           })

           if (doc.owner == "1fj3C0p3vowY8tCrpHNa") {
               //owner
               button.className = "display-delete";
               button_p.innerHTML = "Delete";
               button_image.src = "./images/Trash.svg";
           } else if (doc.matches_join.includes("1fj3C0p3vowY8tCrpHNa")) {
               //leave
               button.className = "display-leave";
               button_p.innerHTML = "Leave";
               button_image.src = "./images/Leave.svg";
           } else if (pending_list_data.includes("1fj3C0p3vowY8tCrpHNa")) {
               //withdraw
               button.className = "display-withdraw";
               button_p.innerHTML = "Withdraw";
               button_image.src = "./images/withdraw.svg";
           } else {
               //request
               button.className = "display-request";
               button_p.innerHTML = "Request";
               button_image.src = "./images/Right arrow.svg";
           }


           //display-color-identifier
           display_color_identifier.appendChild(icon);
           display_item.appendChild(display_color_identifier);

           //display-text
           display_amount.appendChild(img);
           display_amount.appendChild(p);
           display_text.appendChild(display_title);
           display_text.appendChild(display_amount);
           display_text.appendChild(display_peoplepref2);

           //display-location
           display_location.appendChild(display_place);
           display_location.appendChild(display_address);

           //display-peoplepref
           display_sex_icon.appendChild(img_gender);
           display_peoplepref.appendChild(display_sex_icon);
           display_peoplepref.appendChild(display_sex_text);

           //display button
           button.appendChild(button_p);
           button.appendChild(button_image);

           //APPEND TO DISPLAY-ITEM
           display_item.appendChild(display_color_identifier);
           display_item.appendChild(display_text);
           display_item.appendChild(display_bar);
           display_item.appendChild(display_location);
           display_item.appendChild(display_peoplepref);
           display_item.appendChild(button);

           //CHECK IF THERE IS DUPLICATE
           let ul_id = full_day + " " + date_join + ", " + doc.time + " WIB";
           var find_duplicate = document.getElementById(ul_id);
           if (find_duplicate) {
               //APPEND TO EXISTING UL
               find_duplicate.appendChild(display_item);
           } else {
               //APPEND TO MAIN DIV
               display_list.appendChild(display_item);
               display_content_per_date.appendChild(date);
               display_content_per_date.appendChild(display_list);
               display_container.appendChild(display_content_per_date);
           }

           /*
           // DISPLAY APPLICATION FOR REQUEST AND DELETE
           */

           let modalApplication = document.querySelectorAll(".display-request");
           for (var i = 0; i < modalApplication.length; i++) {
               modalApplication[i].addEventListener('click',
                   function () {
                       this.id = "selected_button";
                       document.querySelector(".modal-application").style.display = 'flex';
                   });
           }

           let buttons_leave = document.querySelectorAll(".display-leave");
           buttons_leave.forEach(but => {
               but.addEventListener('click', () => {
                   let button_parent_data_id = but.parentNode.getAttribute("data-id");

                   db.collection('match').doc(button_parent_data_id).update({
                       matches_join: firebase.firestore.FieldValue.arrayRemove("1fj3C0p3vowY8tCrpHNa")
                   });

                   but.className = "display-request";
                   but.querySelector(".button_p").innerHTML = "Request";
                   but.querySelector(".button_image").src = "./images/Right arrow.svg";
               })
           })

           let button_withdraw = document.querySelectorAll(".display-withdraw");
           button_withdraw.forEach(but => {
               but.addEventListener('click', () => {
                   let button_parent_data_id = but.parentNode.getAttribute("data-id");

                   db.collection('match').doc(button_parent_data_id).get().then(function (doc) {
                       let doc_pending = doc.data().pending;
                       let data_want_delete = "";

                       doc_pending.forEach(data => {
                           let match = data.match(/1fj3C0p3vowY8tCrpHNa/);
                           if (match) {
                               data_want_delete = match.input;
                           }
                       })

                       db.collection('match').doc(button_parent_data_id).update({
                           pending: firebase.firestore.FieldValue.arrayRemove(data_want_delete)
                       });
                   })

                   but.className = "display-request";
                   but.querySelector(".button_p").innerHTML = "Request";
                   but.querySelector(".button_image").src = "./images/Right arrow.svg";
               })
           })

           let modalReason = document.querySelectorAll(".display-delete");
           for (var i = 0; i < modalReason.length; i++) {
               modalReason[i].addEventListener('click',
                   function () {
                       this.id = "selected_button";
                       document.querySelector(".modal-reason").style.display = 'flex';
                   });
           }
       }

       sortDiv();

       // function test() {
       //     renderMatch3(ok_test8);
       //     sortDiv();
       // }


       document.addEventListener("click", () => {
           // DISPLAY APPLICATION FOR REQUEST, DELETE, AND WITHDRAW

           // REQUEST
           let modalApplication = document.querySelectorAll(".display-request");
           modalApplication.forEach(modal => {
               modal.addEventListener('click', (e) => {
                   e.preventDefault();
                   modal.id = "selected_button";
                   document.querySelector(".modal-application").style.display = 'flex';
               })
           })


           // LEAVE
           let buttons_leave = document.querySelectorAll(".display-leave");
           buttons_leave.forEach(but => {
               but.addEventListener('click', () => {
                   let button_parent_data_id = but.parentNode.getAttribute("data-id");

                   db.collection('match').doc(button_parent_data_id).update({
                       matches_join: firebase.firestore.FieldValue.arrayRemove("1fj3C0p3vowY8tCrpHNa")
                   });

                   but.className = "display-request";
                   but.querySelector(".button_p").innerHTML = "Request";
                   but.querySelector(".button_image").src = "./images/Right arrow.svg";
               })
           })

           // WITHDRAW
           let button_withdraw = document.querySelectorAll(".display-withdraw");
           button_withdraw.forEach(but => {
               but.addEventListener('click', (e) => {
                   // REMOVE USER FROM PENDING
                   let button_parent_data_id = but.parentNode.getAttribute("data-id");

                   db.collection('match').doc(button_parent_data_id).get().then(function (doc) {
                       let doc_pending = doc.data().pending;
                       let data_want_delete = "";

                       doc_pending.forEach(data => {
                           let match = data.match(/1fj3C0p3vowY8tCrpHNa/);
                           if (match) {
                               data_want_delete = match.input;
                           }
                       })

                       db.collection('match').doc(button_parent_data_id).update({
                           pending: firebase.firestore.FieldValue.arrayRemove(data_want_delete)
                       });
                   })

                   but.className = "display-request";
                   but.querySelector(".button_p").innerHTML = "Request";
                   but.querySelector(".button_image").src = "./images/Right arrow.svg";
                   document.querySelector(".modal-application").style.display = 'none';
                   let selected_button = document.querySelectorAll("#selected_button");
                   selected_button.forEach(button => {
                       button.removeAttribute('id');
                   })
               })
           })

           // DELETE
           let modalReason = document.querySelectorAll(".display-delete");
           for (var i = 0; i < modalReason.length; i++) {
               modalReason[i].addEventListener('click',
                   function () {
                       this.id = "selected_button";
                       document.querySelector(".modal-reason").style.display = 'flex';
                   });
           }

           let text_area_application = document.querySelectorAll("#modal-textarea");

           // FORM APPLICATION
           document.querySelector(".modal-close-application").addEventListener('click',
               function () {
                   let selected_button = document.querySelectorAll("#selected_button");
                   selected_button.forEach(button => {
                       button.removeAttribute('id');
                   })
                   document.querySelector(".modal-application").style.display = 'none';
                   text_area_application.forEach(text_area => {
                       text_area.value = "";
                   })
               });

           let modal_application_submit = document.querySelectorAll(".modal-application-submit");
           modal_application_submit.forEach(reason => {
               reason.addEventListener('click', (e) => {
                   e.preventDefault();
                   let textarea = reason.parentNode.querySelector("textarea");
                   if (textarea.value.length < 20) {
                       console.log("Enter 20 CHARACTERS");
                   } else {
                       let button_change = document.getElementById("selected_button");
                       let button_parent = button_change.parentNode;
                       let data = textarea.value.trim() + "," + "1fj3C0p3vowY8tCrpHNa";

                       // UPDATE DATA TO FIRESTORE
                       db.collection('match').doc(button_parent.getAttribute("data-id")).update({
                           pending: firebase.firestore.FieldValue.arrayUnion(data)
                       });

                       button_change.className = "display-withdraw";
                       button_change.querySelector("p").innerHTML = "Withdraw";
                       button_change.querySelector("img").src = "./images/withdraw.svg";
                       document.querySelector(".modal-application").style.display = 'none';
                       let selected_button = document.querySelectorAll("#selected_button");
                       selected_button.forEach(button => {
                           button.removeAttribute('id');
                       })
                       text_area_application.forEach(text_area => {
                           text_area.value = "";
                       })
                   }
               });
           })

           // FORM DELETE 
           document.querySelector(".modal-close-reason").addEventListener('click',
               function () {
                   let selected_button = document.querySelectorAll("#selected_button");
                   selected_button.forEach(button => {
                       button.removeAttribute('id');
                   })
                   document.querySelector(".modal-reason").style.display = 'none';
                   text_area_application.forEach(text_area => {
                       text_area.value = "";
                   })
               });

           let modal_reason_submit = document.querySelectorAll(".modal-reason-submit");
           modal_reason_submit.forEach(reason => {
               reason.addEventListener('click', (e) => {
                   e.preventDefault();
                   let textarea = reason.parentNode.querySelector("textarea");
                   if (textarea.value.length < 20) {
                       console.log("Enter 20 CHARACTERS");
                   } else {
                       let button_chosen = document.getElementById("selected_button");
                       let button_parent_data_id = button_chosen.parentNode.getAttribute("data-id");

                       // // DELETE OWNER FIELD
                       db.collection('match').doc(button_parent_data_id).set({
                           reason: textarea.value.trim()
                       }, {
                           merge: true
                       });

                       db.collection('match').doc(button_parent_data_id).update({
                           owner: firebase.firestore.FieldValue.delete()
                       });

                       // REMOVE ELEMENT FROM PARENT
                       let button_selected = document.getElementById("selected_button");
                       let li_selected = button_selected.parentNode;
                       let ul_selected = li_selected.parentNode;
                       let ul_selected_child = li_selected.parentNode.childElementCount;
                       let div_selected = ul_selected.parentNode;

                       if (ul_selected_child < 2) {
                           display_container.removeChild(div_selected)
                       } else {
                           ul_selected.removeChild(li_selected);
                       }

                       let selected_button = document.querySelectorAll("#selected_button");
                       selected_button.forEach(button => {
                           button.removeAttribute('id');
                       })
                       text_area_application.forEach(text_area => {
                           text_area.value = "";
                       })

                       document.querySelector(".modal-reason").style.display = 'none';
                   }
               });
           })
       })

       /*
       // CHECK TIME TO DELETE THE CHILD ON TOP OF THE LIST
       */

       // var div_top = document.querySelector(".display-container").childNodes;
       // var ul_top = div_top[1].querySelector("ul");
       // var date_current = new Date();

       // var top_on_the_list = new Date(div_top[1].id);

       // if (top_on_the_list < date_current) {
       //     console.log(top_on_the_list);
       //     console.log(date_current);
       //     console.log("it is smaller");
       //     var child = ul_top.lastElementChild;
       //     // REMOVE LI
       //     while (child) {
       //         ul_top.removeChild(child);
       //         child = ul_top.lastElementChild;
       //     }
       //     // REMOVE DIV
       //     document.querySelector(".display-container").removeChild(div_top[1]);
       // } else {
       //     console.log(top_on_the_list);
       //     console.log(date_current);
       //     console.log("it is larger");
       // }

       /*
       // COBA COBA
       */

       // db.collection('account').doc("1fj3C0p3vowY8tCrpHNa").update({
       //     matches_created_join: firebase.firestore.FieldValue.arrayUnion("test_2")
       // });

       // db.collection('account').doc("1fj3C0p3vowY8tCrpHNa").get().then(function (doc) {
       //     if (doc.exists) {
       //         console.log("Document data:", doc.data());
       //     }
       // }).catch(function (error) {
       //     console.log("Error getting document:", error);
       // });


       // CHECK EVERY MINUTE

       // let current_seconds = new Date().getSeconds();
       // let difference_seconds = 60 - current_seconds;

       // setTimeout(function () {
       //     var d = new Date();
       //     console.log(d.toLocaleTimeString());
       //     var myVar = setInterval(myTimer, 60000);
       // }, difference_seconds * 1000);

       // // var myVar = setInterval(myTimer, 60000);

       // function myTimer() {
       //     var d = new Date();
       //     console.log(d.toLocaleTimeString());
       // }

       // CHECK IF A ARRAY CONTAIN A SPECIFIC STRING

       // let okadf = ["asdfasdfasdf asdfasdf,joseph", "asdfasdfa fasdfasdf,hello"];

       // let data_want_delete = "";

       // okadf.forEach(data => {
       //     let helloasdf = data.match(/joseph/);
       //     if (helloasdf) {
       //         data_want_delete = helloasdf.input;
       //     }
       // })

       // console.log(okadf.indexOf(data_want_delete));
       // console.log(data_want_delete);