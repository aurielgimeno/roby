 $(document).ready(function() {
     splashScreenIntro();
     //showThisModal("collegeModal");
     //showThisModal("postBestScoreModal");
     //showThisModal("aboutModal");

     function splashScreenIntro() {
         var a = sessionStorage.getItem("splash_start");
         if (a == null || a == "" || a == "null" || a == "undefined") {
             setTimeout(function() {
                 $(".splashImg").fadeToggle();
                 setTimeout(function() {
                     $("#splashScreen").fadeToggle();
                     //location.href = "index.html";
                     sessionStorage.setItem("splash_start", 1);
                 });

             }, 6000); //1000 for 1 sec
         } else {
             $("#splashScreen").css({
                 "height": "0"
             });
             $(".splashImg").css({
                 "height": "0"
             });
             $(".splashImgLogo").css({
                 "height": "0"
             });


         }

     }

     //need variables START
     var getPhoneGapPath = function() {
         var path = window.location.pathname;
         path = path.substr(path, path.length - 10);
         return path;
     };
     var soundCounter = 0;
     var soundEffect = null;

     function playSoundEffect() {
         if (soundEffect) {
             soundEffect.stop();
             soundEffect.release();
         }
         soundEffect = new Media(getPhoneGapPath() + "sound/chop.ogg", onSuccess, onError, onStatus);
         soundEffect.play();
         soundEffect.setVolume('1');
     }

     // onSuccess Callback
     function onSuccess() {
         soundEffect.stop();
         soundEffect.release();
     }
     // onError Callback 
     function onError(error) {
         soundEffect.stop();
         soundEffect.release();
     }
     // onStatus Callback 
     function onStatus(status) {}
     $(".btnLeaderboard").fastClick(function() {

         $(this)
             // .transition({ x: 20},50)
             // .transition({ x: -20 },50)
             // .transition({ x: 20},50)
             // .transition({ x: -20 },50)
             // .transition({ x: 0 },50);

             .transition({
                 scale: 0.8
             }, 50)
             .transition({
                 scale: 1.2
             }, 50)
             .transition({
                 scale: 1
             }, 5000);
     });
     //alert($(window).height());

     $(".boxInside").css({
         "position": "absolute"
     });
     documentHeight = $(window).height();
     documentWidth = $(window).width();
     memoHeight = documentHeight * .50;
     //alert(memoHeight);
     memoHeight = ((memoHeight * .09));
     //alert(memoHeight);

     memoWidth = documentWidth * .80;
     memoWidth = (memoWidth * .09);
     //$("#memorizeModal").css("padding-top",memoHeight+"px");
     $(".boxInside-0").css({
         "top": memoHeight + "px",
         "left": memoWidth + "px"
     });
     $(".boxInside-1").css({
         "top": memoHeight + "px",
         "right": memoWidth + "px"
     });
     $(".boxInside-2").css({
         "bottom": memoHeight + "px",
         "left": memoWidth + "px"
     });
     $(".boxInside-3").css({
         "bottom": memoHeight + "px",
         "right": memoWidth + "px"
     });

     $(".stop").fastClick(function() {
         $(".btnLeaderboard").css({
             "WebkitTransition": "null"
         });
     });


     function setToNormalRobyTapper() {
         for (i = 0; i < 4; i++) {
             $(".btn-" + i).css({
                 "top": "",
                 "left": "",
                 "right": "",
                 "bottom": ""
             });
         }
         $(".btn-0").css({
             "top": "0",
             "left": "0"
         });
         $(".btn-1").css({
             "top": "0",
             "right": "0"
         });
         $(".btn-2").css({
             "bottom": "0",
             "left": "0"
         });
         $(".btn-3").css({
             "bottom": "0",
             "right": "0"
         });
     }

     function randomRobyTapper() {
         var tappingToRandom = [0, 1, 2, 3];
         var tapCount = tappingToRandom.length;
         var randomizeTapCount = [];
         while (tapCount--) {
             j = Math.floor(Math.random() * (tapCount + 1));
             randomizeTapCount.push(tappingToRandom[j]);
             tappingToRandom.splice(j, 1);
         }
         //alert(randomizeTapCount);
         for (i = 0; i < 4; i++) {
             $(".btn-" + i).css({
                 "top": "",
                 "left": "",
                 "right": "",
                 "bottom": ""
             });
         }

         for (i = 0; i < 4; i++) {
             if (i == 0) {
                 $(".btn-" + randomizeTapCount[0]).css({
                     "top": "0",
                     "left": "0"
                 });
             } else if (i == 1) {
                 $(".btn-" + randomizeTapCount[1]).css({
                     "top": "0",
                     "right": "0"
                 });
             } else if (i == 2) {
                 $(".btn-" + randomizeTapCount[2]).css({
                     "bottom": "0",
                     "left": "0"
                 });
             } else if (i == 3) {
                 $(".btn-" + randomizeTapCount[3]).css({
                     "bottom": "0",
                     "right": "0"
                 });
             }

         }
     }

     btnPlayWidth = (documentWidth * .24) * .30;
     btnPlayHeight = (documentHeight * .24) * .30;
     btnPlayMarginTop = (documentHeight * .24) * .10;
     $(".btnPlayImg").css({
         "width": btnPlayWidth,
         "height": btnPlayHeight
     });
     $(".btnPlayImg").css({
         "margin-top": btnPlayMarginTop
     });
     //alert(btnPlayWidth);
     //alert(btnPlayHeight);
     //showThisModal("infoModal");
     var timer;
     var pressureTimerCount;
     var pressureTimer;
     var levelCounter;
     var score;
     var randZero, randOne, randTwo, randThree;
     var pointsCounterToLevelUp;
     var pointsToLevelUp; //points needed to level up
     var numberRange; //range of numbers
     var levelRange; //up to what level
     var arrayColorsNumbers = [{
         "color": "#c1392b",
         "number": "999"
     }, {
         "color": "#fd761c",
         "number": "999"
     }, {
         "color": "#2a80b9",
         "number": "999"
     }, {
         "color": "#f1c40f",
         "number": "999"
     }];
     var getMsgEncourage = function() {

         a = ["ROBYTa", "DAPAT SINAPAK MO!", "TAPON MO NA CP MO.", "EDI WOW!", "Kainis ka! Ayusin mo ah.", "Ano pong pinaglalaban natin?", "EDI MANZANO!", "EDI GOW!", "03 MHWUAHLARNHS!", "OLATS ka toy!", "Galaw galaw din!", "Ligwak!", "ASA KA PA? ulit!", "Practice ka pa OY!", "Seryoso na siya oh hehe", "MASAYA KA?", "Gulat ka noh? haha", "TODO na yan?", "KAYA PA?", "Ayan na SCORE mo?", "Hello BOB! hahaha", "SMILE ka naman dyan! hehe", "Aba MATINDE!hahaha", "Edi WOW! haha", "PUSH mo pa Teh!", "Push mhue Lharngs!", "Weak! Weak! Weak mO! :P"];

         b = Math.floor(Math.random() * a.length + 0);
         c = a[b];

         if (score == 0) {
             a = ["ROBY Rodriguez!", "ROBYlog!", "ROBYtussin!", "ROBYngot!", "zero! itlog! BOKYA! hahahaha", "Hala siya.. OK ka lang?", "WOW! Perfect 0! hahaha"]
             b = Math.floor(Math.random() * a.length + 0);
             c = a[b];
         }

         $(".msgEncourage").html(c);
         return a[b];
     };
     var memorizeModalSpeed; //time of memorize modal show
     var getLocalTopScore = function() {
         var a = window.localStorage.getItem("localTopScore");
         if (a == undefined || a == null || a == "NaN" || a == "undefined" || a == "null") {
             window.localStorage.setItem("localTopScore", 0);
             a = 0;
         }

         showRankLocalEquivalent(a);

         $(".localTopScore").html(a);
         return parseInt(a);

     };




     var setCompareToLocalTopScore = function() {

         var localTop = getLocalTopScore();


         if (score >= localTop) {
             window.localStorage.setItem("localTopScore", score);
             getLocalTopScore();
             //$(".msgNewTopScore").html("NEW Top Score:"+score);
             a = ["TsambaGOD!", "My Cheats ka noh?", "Tsamba tsamba Din!", "Magaling k na nyan?", "TOP Score mo na yan?", "Edi Ikaw na! THE BEST KA!", "Ang Bangis!", "WoW, ang taray!", "Bonga mo jan!", "Edi Wow!", "IMBA ka toy!", "Robyzing!", ""];
             b = Math.floor(Math.random() * a.length + 0);
             c = a[b];

             $(".msgEncourage")
                 .transition({
                     scale: 1.8,
                     delay: 0
                 }, 0)
                 .transition({
                     scale: 1,
                     delay: 0
                 }, 100);
             $(".msgEncourage").html(c);

             $(".msgNewTopScore").html("NEW Top Score:");
         } else {
             //clear msgNewTopScore
             $(".msgNewTopScore").html("Your Top Score:");
         }
     }

     var getLocalStoredScore = function() {
         //$(".msgEncourage").html("TODO na yan?");
         var a = window.localStorage.getItem("localStoredScore");
         if (a == undefined || a == null || a == "NaN" || a == "undefined" || a == "null") {
             window.localStorage.setItem("localStoredScore", 0);
             a = 0;
         }

         $(".localStoredScore").html(a);
         return parseInt(a);
     }

     var addToLocalStoredScore = function() {
         var a = parseInt(window.localStorage.getItem("localStoredScore"));
         var b = parseInt(score);
         var c = a + b;
         window.localStorage.setItem("localStoredScore", c);
         getLocalStoredScore();

     }
     //need variables END
     //showThisModal("mainMenuModalTest");//testing modal to edit
     $(".header-container-blocker").transition({
         scale: 0
     }, 0);
     $(".tap-container-blocker").transition({
         scale: 1
     }, 0);
     getLocalStoredScore();
     getLocalTopScore();
     levelCounter = 1;
     score = 0;
     pointsCounterToLevelUp = 0;
     pointsToLevelUp = 10;
     numberRange = 2;
     levelRange = 3;
     numberAddInRange = 1;
     memorizeModalSpeed = 3000; //1k is equal to 1sec

     setToNormalRobyTapper();

     $(".btnPlayAgain").fastClick(function(e) {
         newGame();
     });
     $(".btnPlay").fastClick(function() {
         $(".btnPlay")
             .transition({
                 scale: 0.9,
                 delay: 0
             }, 0)
             .transition({
                 scale: 1.3,
                 delay: 0
             }, 0)
             .transition({
                 scale: 0,
                 delay: 0
             }, 500);
         newGame();
     });

     $(".btnShowInfoModal").fastClick(function() {
         showThisModal("infoModal");
     });

     $(".btnShowAboutModal").fastClick(function() {
         showThisModal("aboutModal");
     });


     $(".btnShowPostBestScoreModal").fastClick(function() {
         window.localStorage.setItem('fb_login', 'post_score');
         $('.txtPostScore').html('');
         checkIfLogin();
         showThisModal('postBestScoreModal');
     });
     $(".btnShowMainMenu").fastClick(function() {
         showMainMenu();
     });

     $(".btnCustom").fastClick(function() {
         playSoundEffect();
         //randomRobyTapper();
         $(this)
             .transition({
                 scale: 0.95,
                 delay: 0
             }, 100)
             .transition({
                 scale: 1,
                 delay: 0
             }, 1);

     });
     $(".btnTap").fastClick(function(e) {
         playSoundEffect();
         a = parseInt($(this).find(".btn-value").html());
         $(this).find(".btn-value").html(a - 1);
         b = $(this).find(".btn-value").html();

         if (b < 0) {
             //GAME OVER
             //$(this).velocity('callout.shake',500);
             $(this)
                 .transition({
                     x: 20
                 }, 50)
                 .transition({
                     x: -20
                 }, 50)
                 .transition({
                     x: 20
                 }, 50)
                 .transition({
                     x: -20
                 }, 50)
                 .transition({
                     x: 0
                 }, 50);



             //alert("BOBO MO! \n  Game Over! SCORE ="+score);
             $(".timerPressure").transition({
                 "width": "100%"
             }, 100);
             addToLocalStoredScore();
             gameOver();


         } else {
             //$(this).velocity('callout.pulse',100);
             $(this)
                 .transition({
                     scale: 0.97,
                     delay: 0
                 }, 100)
                 .transition({
                     scale: 1,
                     delay: 0
                 }, 1);
             //correct
             //add score
             addScore();
         }
         checkSet();
     });


     function showHideMemorizeModal() {
         //hide other modal


         $(".modal").transition({
             display: "none",
             delay: 0
         }); //hide
         $(".modal-container").transition({
             display: "block",
             delay: 0
         }); //show
         $("#memorizeModal")
             .transition({
                 scale: 0,
                 delay: 0
             }, 1)
             .transition({
                 display: "block",
                 delay: 0
             }, 1)
             .transition({
                 scale: 1.1
             }, 100)
             .transition({
                 scale: .9
             }, 250)
             .transition({
                 scale: 1.05
             }, 200)
             .transition({
                 scale: 1.
             }, 200);
         setTimeout(function() {
             //$("#memorizeModal").velocity('transition.bounceOut',400);
             //bounceOut
             $("#memorizeModal")
                 .transition({
                     scale: 1
                 }, 200)
                 .transition({
                     scale: 1.05
                 }, 200)
                 .transition({
                     scale: 0
                 }, 250)
                 .transition({
                     display: "none",
                     delay: 0
                 }, 1);
             setTimeout(function() {
                 //$(".modal-container").velocity('transition.fadeOut',300);
                 $(".modal-container").transition({
                     display: "none",
                     delay: 0
                 }, 300); //hide
             }, 300);
         }, memorizeModalSpeed);


         setTimeout(function() {
             if (score > 99) {
                 randomRobyTapper();
             }
             startPressureTimer();
         }, 3300);

     }

     function showMainMenu() {
         setToNormalRobyTapper();
         $(".score").html(0);
         $(".modal-container").transition({
             display: "none",
             delay: 0
         }); //show
         $(".modal").transition({
             display: "none",
             delay: 0
         });
         $(".btnPlay")
             .transition({
                 scale: 0,
                 delay: 0
             }, 0)
             .transition({
                 scale: 1.3,
                 delay: 0
             }, 400)
             .transition({
                 scale: 1,
                 delay: 0
             }, 400);

     }

     function showThisModal(idOfModal) {
         //$(".modal-container").velocity('transition.fadeIn',1);
         $(".modal-container").transition({
             display: "block",
             delay: 0
         }); //show


         //hide other modal
         //$(".modal").velocity('transition.fadeOut',1);
         $(".modal").transition({
             display: "none",
             delay: 0
         });
         //$("#"+idOfModal).velocity('transition.bounceIn');
         $("#" + idOfModal)
             .transition({
                 scale: 0,
                 delay: 0
             }, 1)
             .transition({
                 display: "block",
                 delay: 0
             }, 1)
             .transition({
                 scale: 1.1
             }, 100)
             .transition({
                 scale: .9
             }, 250)
             .transition({
                 scale: 1.05
             }, 200)
             .transition({
                 scale: 1.
             }, 200);

     }

     function gameOver() {
         localStorage.setItem('fb_login', 'gameover');
         checkIfLogin();
         $(".tap-container-blocker").transition({
             scale: 1
         }, 0);
         $(".header-container-blocker").transition({
             scale: 0
         }, 0);

         clearPressureTimer();
         getMsgEncourage();
         setCompareToLocalTopScore();
         $('.txtPostScore').html('');
         showThisModal("gameOverModal");
     }

     function getRandomNums() {
         arrayColorsNumbers = [{
             "color": "#c1392b",
             "number": "999"
         }, {
             "color": "#fd761c",
             "number": "999"
         }, {
             "color": "#2a80b9",
             "number": "999"
         }, {
             "color": "#f1c40f",
             "number": "999"
         }];

         for (i = 0; i < 4; i++) {
             a = Math.floor(Math.random() * numberRange + 0);
             arrayColorsNumbers[i].number = (a);
         }
         numbersTotal = arrayColorsNumbers[0].number + arrayColorsNumbers[1].number + arrayColorsNumbers[2].number + arrayColorsNumbers[3].number;
         //check if all array is equal to zero START
         if (numbersTotal == 0) {
             //if numbersTotal == 0 ,produce one random number
             a = Math.floor(Math.random() * 3); //random position of number
             b = Math.floor(Math.random() * numberRange + 1); //random  value of number
             arrayColorsNumbers[a].number = b;
         }
         //check if all array is equal to zero END
         timer = arrayColorsNumbers[0].number + arrayColorsNumbers[1].number + arrayColorsNumbers[2].number + arrayColorsNumbers[3].number;
         timer = Math.floor(timer * 1); // times .50 to get its 50%

         //if(timer < 2){
         // timer = timer+1;
         //}else if(timer < 1){
         // timer = timer+2;
         //}
         if (timer < 5) {
             timer = 5;
         }

         //timer = 10;//to EDIT

         for (i = 0; i < 4; i++) {
             $("#tapBtn-" + i).html(arrayColorsNumbers[i].number);
         }
         //random memorize ITEMS START

         arrayColorsNumbersToRandom = arrayColorsNumbers;
         z = arrayColorsNumbersToRandom.length;
         var randomizeColorsNumbers = [];
         while (z--) {
             j = Math.floor(Math.random() * (z + 1));
             randomizeColorsNumbers.push(arrayColorsNumbersToRandom[j]);
             arrayColorsNumbersToRandom.splice(j, 1);
         }
         for (i = 0; i < 4; i++) {
             $(".boxInside-" + i).css({
                 "background": randomizeColorsNumbers[i].color
             });
             $(".boxNum-" + i).html(randomizeColorsNumbers[i].number);
         }
         //random memorize ITEMS END
         showHideMemorizeModal();

     }

     function checkSet() {
         randZero = parseInt($("#tapBtn-0").html());
         randOne = parseInt($("#tapBtn-1").html());
         randTwo = parseInt($("#tapBtn-2").html());
         randThree = parseInt($("#tapBtn-3").html());
         if (randZero == 0 && randOne == 0 && randTwo == 0 && randThree == 0) {
             //alert("Good Job!");

             $(".timerPressure").transition({
                 "width": "100%"
             }, 100);

             clearPressureTimer();
             getRandomNums();
         }
     }



     function addScore() {
         $(".score")
             .transition({
                 scale: 1.8,
                 delay: 0
             }, 0)
             .transition({
                 scale: 1,
                 delay: 0
             }, 100);
         score = score + 1;

         pointsCounterToLevelUp = pointsCounterToLevelUp + 1;
         $(".score").val(score),
             $(".score").html(score);


         if (pointsCounterToLevelUp == pointsToLevelUp) {
             pointsCounterToLevelUp = 0;
             if (levelCounter != levelRange) {
                 levelCounter = levelCounter + 1;
                 numberRange = numberRange + numberAddInRange;
             } else {
                 levelCounter = levelCounter;
             }
             $(".levelCounter").html(levelCounter);
             //alert("levelUP!");
         }
         setCompareToLocalTopScore()
     }

     function newGame() {
         $(".tap-container-blocker").transition({
             scale: 0
         }, 0);
         $(".header-container-blocker").transition({
             scale: 1
         }, 0);
         resetGameElements();
         levelCounter = 1;
         numberRange = 2;

         score = 0;
         pointsCounterToLevelUp = 0;
         //getRandomNums();
         showThisModal("rsgModal");
         startRsgTimer();
         //alert("Welcome to ROBY GAME! \n NEW GAME!");
         //$(".btn").css({"background":"none"});


     }

     function resetGameElements() {
         $(".score").html(0);
         $(".score").val(0);
         $(".timer").html(0);
         $(".timer").val(0);
         $(".levelCounter").html(1);
         setToNormalRobyTapper();
     }


     function startPressureTimer() {
         $(".timerPressure").transition({
             "width": "100%"
         }, 100);
         //percentTimer = (timer * 1000);//1k is equal to 1sec
         percentTimer = (100 / timer);
         $(".timer").html(timer);

         //$(".timerPressure").transition({"width":"0"},percentTimer);
         clearTimeout(pressureTimerCount);
         clearInterval(pressureTimerCount);
         clearTimeout(pressureTimer);
         clearInterval(pressureTimer);
         setTimeout(function() {
             pressureTimerCount = setInterval(function() {
                 pressureTimer()
             }, 1000);
         });
     }

     function pressureTimer() {
         timer--;
         a = percentTimer * timer;
         $(".timerPressure").transition({
             width: a + "%"
         });
         setTimeout(function() {
             $(".timer").val(timer);
             $(".timer").html(timer);
         });

         if (timer == 0) {
             clearTimeout(pressureTimerCount);
             clearInterval(pressureTimerCount);
             clearTimeout(pressureTimer);
             clearInterval(pressureTimer);
             $(".timer").val(0);
             $(".timer").html(0);
             //GAME OVER
             //alert("BOBO MO! \n  Game Over!");
             gameOver();
             //NEW GAME
             //newGame();

         }
     }

     function clearPressureTimer() {
         clearTimeout(pressureTimerCount);
         clearInterval(pressureTimerCount);
         clearTimeout(pressureTimer);
         clearInterval(pressureTimer);

         //$(".timerPressure").css({"WebkitTransition":"null"}),
         $(".timer").val(0);
         $(".timer").html(0);
     }

     function startRsgTimer() {
         rsgTimerValue = 3;
         $(".msgRsgTimer").html("");
         setTimeout(function() {
             rsgTimerCount = setInterval(function() {
                 rsgTimer();
             }, 700);
         });
     }

     function rsgTimer() {

         if (rsgTimerValue == 3) {
             //$("#rsgModal").velocity("callout.pulse",300);
             $(".msgRsgTimer").html("R O B Y");

         } else if (rsgTimerValue == 2) {
             //$("#rsgModal").velocity("callout.pulse",500);
             $(".msgRsgTimer").html("SET!");
         } else if (rsgTimerValue == 1) {
             //$("#rsgModal").velocity("callout.tada",400);
             $(".msgRsgTimer").html("Go!");
             clearInterval(rsgTimerCount);
             setTimeout(function() {
                 getRandomNums();
             }, 1100);
         }
         rsgTimerValue--;
     }

     function createRandomColor() {
         //random Color START

         for (i = 1; i < 5; i++) {
             colorArraySelectedIndex = Math.floor(Math.random() * colorArray.length + 0);
             $(".btn-" + i).css({
                 "background-color": colorArray[colorArraySelectedIndex]
             });
         }
         //random Color END

     }


     $('.btnPostScore').click(function() {
         checkIfLogin();
         checkCollege();
         postScoreOnline();
     });

     $('.btnCba').click(function() {
         $('.txtChosenCollege').show();
         $('.msgChosenTrp').html('WIZARD');
         $('.msgChosenTrp').css('color', '#f1c40f');
         $('.msgChooseTrp').html('');

     });

     $('.btnCcs').click(function() {
         $('.txtChosenCollege').show();
         $('.msgChosenTrp').html('PHOENIX');
         $('.msgChosenTrp').css('color', '#fd761c');
         $('.msgChooseTrp').hide();
     });

     $('.btnCahs').click(function() {
         $('.txtChosenCollege').show();
         $('.msgChosenTrp').html('TIGER');
         $('.msgChosenTrp').css('color', '#ea4b35');
         $('.msgChooseTrp').hide();

     });

     $('.btnCeas').click(function() {
         $('.txtChosenCollege').show();
         $('.msgChosenTrp').html('KNIGHT');
         $('.msgChosenTrp').css('color', '#2a80b9');
         $('.msgChooseTrp').hide();

     });
     <!-- Leaderboard Select -->
     $(".btnLBoard").fastClick(function() {

         var clans = $(this).val();
         var rank = 0;
         //var college = window.localStorage.getItem("college");
         //alert(clans);
         var userID = window.localStorage.getItem("fb_id");
         //alert(userID);
         $(".leaderboardRow").remove();


         $("#userRank").html(""),
             $.ajax({
                 url: "http://www.gcccs.org/roby/phpfile/user_singlerank.php",
                 type: "GET",
                 data: {
                     "lahi": clans,
                     "userID": userID
                 },
                 dataType: "json",
                 success: function(data) {
                     $("#userRank").html("");
                     if (data.uExists == "Exist") {
                         //$("#userRank").html(data.name+"Rank:"+data.rank);
                         $("#userRank").html("Standing: " + data.rank);
                     } else {
                         $("#userRank").html("You don't have any standing in this troop!");
                     }

                 },
                 error: function() {
                     //do something if error

                 }

             }).error(function() {
                 //alert("error in internet connection");
             });

         $.ajax({
             url: "http://www.gcccs.org/roby/phpfile/user_leaderboard.php",
             type: "GET",
             data: {
                 "lahi": clans,
                 "userID": userID
             },
             dataType: "json",
             success: function(data) {
                 //$("#useerPic").prop("src",data[0].user_pic);
                 $(".leaderboardRow").remove();
                 for (var i = 0; i < data.length; i++) {
                     rank++;
                     $('#leaderboardTable').append(
                         '<tr class="leaderboardRow "><td class="txtAlignCenter">' + rank + '</td><td>' + showRankEquivalent(data[i].user_score) + '</td><td><img src="img/roby-icons/' + data[i].user_college + '.png"  class="" /></td><td><img src="' + data[i].user_pic + '"/></td><td>' + data[i].user_fname + ' </td><td>' + data[i].user_score + '</td> </tr>'
                         //'<tr class="leaderboardRow "><td>'+ rank + '</td><td><img src="img/roby-icons/'+data[i].user_college+'.png"  class="" />'+data[i].user_college+'</td><td><img src="'+data[i].user_pic+'"/> '+data[i].user_fname+' </td><td>'+data[i].user_score+'</td> </tr>'

                     );


                 }
             },
             error: function() {
                 //alert("ER");//do something if error
             }

         }).error(function() {
             //alert("error in internet connection");
             //alert("ERR");
         });

     });

     <!-- Leaderboard Select -->

     $(".btnShowLeaderBoard").click(function() {


         var rank = 0;

         $.ajax({
             url: "http://www.gcccs.org/roby/phpfile/user_show.php",
             type: "GET",
             dataType: "json",

             success: function(data) {
                 //$("#useerPic").prop("src",data[0].user_pic);
                 $(".leaderboardRow").remove();
                 for (var i = 0; i < data.length; i++) {
                     rank++

                     $('#leaderboardTable').append(
                         '<tr class="leaderboardRow "><td class="txtAlignCenter">' + rank + '</td><td>' + showRankEquivalent(data[i].user_score) + '</td><td><img src="img/roby-icons/' + data[i].user_college + '.png"  class="" /></td><td><img src="' + data[i].user_pic + '"/></td><td>' + data[i].user_fname + ' </td><td>' + data[i].user_score + '</td> </tr>'
                         //'<tr class="leaderboardRow "><td>'+ rank + '</td><td><img src="img/roby-icons/'+data[i].user_college+'.png"  class="" />'+data[i].user_college+'</td><td><img src="'+data[i].user_pic+'"/> '+data[i].user_fname+' </td><td>'+data[i].user_score+'</td> </tr>'

                     );

                 }

             },
             error: function() {
                 //do something if error
             }

         }).error(function() {
             //alert("error in internet connection");
         });



         showSingleRank();
         showThisModal("leaderboardModal");
     });

     function showSingleRank() {
         $("#userRank").html("");
         var userID = window.localStorage.getItem("fb_id");
         $.ajax({
             url: "http://www.gcccs.org/roby/phpfile/user_rank.php",
             type: "GET",
             data: {
                 "ID": userID
             },
             dataType: "json",
             success: function(data) {
                 if (data[0].exist == "Exist") {
                     $("#userRank").html("Standing: " + data[0].rank);
                 } else {
                     $("#userRank").html("Standing: 0!");
                 }
             },
             error: function() {
                 //do something if error
             }

         }).error(function() {
             //alert("error in internet connection");
         });
     }


     function checkCollege() {
         var check_college = window.localStorage.getItem("college");
         if (check_college == "" || check_college == null || check_college == "undefined") {
             showThisModal("collegeModal");

         } else {

         }

     }

     function checkIfLogin() {
         var fb_id = window.localStorage.getItem("fb_id");
         if (fb_id == "" || fb_id == null) {
             //alert('show fb');
             $('.btnFbLogin').show();
             $('.btnPostScore').hide();
             $('.btnLogout').hide();
         } else {
             //alert('post fb');
             $('.btnFbLogin').hide();
             $('.btnPostScore').show();
             $('.btnLogout').show();
         }
     }



     function postScoreOnline() {
         //check if user is login
         //check in local storage if user_username and user_id is stored


         var stud_id = window.localStorage.getItem("fb_id");
         var total_score = window.localStorage.getItem("localStoredScore");
         var top_score = window.localStorage.getItem("localTopScore");


         $.ajax({
             url: "http://www.gcccs.org/roby/phpfile/post_score_online.php",
             type: "POST",
             data: {
                 "fb_id": stud_id,
                 "total_score": total_score,
                 "top_score": top_score
             },
             dataType: "json",
             success: function(data) {
                 if (data == "not") {
                     //alert("Failed");

                 } else {
                     //alert("Ok na!. na POST NA BOOOOOOOOM!");
                     $('.txtPostScore').html('YOUR SCORE HAS BEEN POSTED ONLINE!!!!!');
                     window.localStorage.setItem("localStoredScore", 0);
                 }

             },
             error: function(data) {
                 //alert("error");

                 $('.txtPostScore').html('Error in Connection.');
             }


         });

     }
     $('.btnFbLogin').fastClick(function() {
         login();
     });

     $('.btnLogout').fastClick(function() {
         logout();
     });

     $('.btnAddCollege').fastClick(function() {
         var msg = $('.msgChosenTrp').html();
         if (msg == "" || msg == null) {
             $('.msgChooseTrp').show();
         } else {
             addCollege();
         }

     });


     function login() {

         openFB.login(
             function(response) {
                 if (response.status === 'connected') {
                     //alert('Facebook login succeeded');
                     getInfo();

                 } else {
                     //alert('Facebook login failed: ' + response.error);
                 }
             }, {
                 scope: 'email,public_profile'
             });
     }

     function getInfo() {
         openFB.api({
             path: '/me',
             success: function(data) {
                 console.log(JSON.stringify(data));
                 var uID = data.id;
                 var pic = "http://graph.facebook.com/" + data.id + "/picture?type=small";
                 var fname = data.first_name;
                 var lname = data.last_name;

                 //alert(uID);
                 $.ajax({
                     //crossOrigin: true,
                     url: "http://www.gcccs.org/roby/phpfile/user_add.php",
                     type: "POST",
                     dataType: "json",
                     data: {
                         "user_ID": uID,
                         "user_pic": pic,
                         "fname": fname,
                         "lname": lname
                     },
                     success: function(data) {
                         //location.href = "admin_students_page.php";
                         //alert("Succes");
                         //var college = data.college;
                         var dbTopScore = data.db_topscore;

                         window.localStorage.setItem("fb_id", uID);
                         window.localStorage.setItem("stud_name", fname);
                         //window.localStorage.setItem("college",college);

                         if (dbTopScore == "" || dbTopScore == null || dbTopScore == "undefined") {
                             window.localStorage.setItem("localTopScore", 0);
                             $('.localTopScore').html(0);
                         } else {
                             justLocalTop = parseInt(window.localStorage.getItem("localTopScore"));
                             if (dbTopScore > justLocalTop) {
                                 window.localStorage.setItem("localTopScore", dbTopScore);
                                 $('.localTopScore').html(dbTopScore);
                             } else {
                                 //alert("wag mo kunini");
                             }
                         }



                         checkCollege();
                         checkIfLogin();


                     },
                     error: function(data) {
                         //alert("Error");
                         //do something if error
                     }

                 });

             },
             error: errorHandler
         });
     }

     function revoke() {
         openFB.revokePermissions(
             function() {
                 // alert('Permissions revoked');
             },
             errorHandler);
     }

     function logout() {
         openFB.logout(
             function() {
                 //alert('Logout successful');

                 window.localStorage.setItem("fb_id", "");
                 window.localStorage.setItem("stud_name", "");
                 window.localStorage.setItem("college", "");
                 window.localStorage.setItem("localStoredScore", 0);
                 window.localStorage.setItem("localTopScore", 0);
                 $('.localTopScore').html(0);
                 $('.txtPostScore').html('');
                 checkIfLogin();
             },
             errorHandler);
     }

     function errorHandler(error) {
         //alert(error.message);
     }

     function addCollege() {
         var college = $(".msgChosenTrp").html();
         if (college == null || college == "") {
             //alert('select college');
         } else {
             var id = window.localStorage.getItem("fb_id");
             $.ajax({
                 url: "http://www.gcccs.org/roby/phpfile/user_update.php",
                 type: "POST",
                 data: {
                     "user_college": college,
                     "user_id": id
                 },
                 dataType: "json",
                 success: function(data) {

                     //alert("Acount Updated");
                     showMainMenu();
                     var check_panel = localStorage.getItem('fb_login')
                     if (check_panel == "gameover") {
                         showThisModal('gameOverModal');
                     } else {
                         showThisModal('postBestScoreModal');
                     }


                     window.localStorage.setItem("college", college);
                 },
                 error: function(data) {
                     //alert("Error");
                     //do something if error
                 }

             });
         }
     }

     function showRankEquivalent(getScore) {
         a = getScore;
         if (a >= 0 && a <= 99) {
             //$(".robyRankLocal").html("Snail");
             b = "Snail";
         } else if (a >= 100 && a <= 199) {
             //$(".robyRankLocal").html("Turtle");
             b = "Turtle";
         } else if (a >= 200 && a <= 299) {
             //$(".robyRankLocal").html("Starfish");
             b = "Starfish";
         } else if (a >= 300 && a <= 399) {
             //$(".robyRankLocal").html("Sloth");
             b = "Sloth";
         } else if (a >= 400 && a <= 499) {
             //$(".robyRankLocal").html("Octopus");
             b = "Octopus";
         } else if (a >= 500 && a <= 599) {
             //$(".robyRankLocal").html("Manatee");
             b = "Manatee";
         } else if (a >= 1000 && a <= 1999) {
             //$(".robyRankLocal").html("Rabbit");
             b = "Rabbit";
         } else if (a >= 1500 && a <= 1999) {
             //$(".robyRankLocal").html("Wolf");
             b = "Wolf";
         } else if (a >= 2000 && a <= 2499) {
             //$(".robyRankLocal").html("Antelope");
             b = "Antelope";
         } else if (a >= 2500 && a <= 2999) {
             //$(".robyRankLocal").html("Eagle");
             b = "Eagle";
         } else if (a >= 3000 && a <= 3499) {
             //$(".robyRankLocal").html("Cheetah");
             b = "Cheetah";
         } else if (a >= 3500 && a <= 3999) {
             //$(".robyRankLocal").html("Falcon");
             b = "Falcon";
         } else if (a >= 4000 && a <= 4499) {
             //$(".robyRankLocal").html("Ape Man");
             b = "Ape Man";
         } else if (a >= 4500 && a <= 4999) {
             //$(".robyRankLocal").html("Maniac");
             b = "Maniac";
         } else if (a >= 5000 && a <= 5999) {
             //$(".robyRankLocal").html("Ranger");
             b = "Ranger";
         } else if (a >= 6000 && a <= 6999) {
             //$(".robyRankLocal").html("Hustler");
             b = "Hustler";
         } else if (a >= 7000 && a <= 7999) {
             //$(".robyRankLocal").html("Ninja");
             b = "Ninja";
         } else if (a >= 8000 && a <= 8999) {
             //$(".robyRankLocal").html("Master");
             b = "Master";
         } else if (a >= 9000 && a <= 9999) {
             //$(".robyRankLocal").html("Kage");
             b = "Kage";
         } else if (a >= 10000 && a <= 10999) {
             //$(".robyRankLocal").html("Demi God!");
             b = "Demi God";
         } else if (a >= 11000) {
             //$(".robyRankLocal").html("ROBY God!");
             b = "Roby God!";
         }
         return b;
     }



     function showRankLocalEquivalent(getScore) {
         a = getScore;
         if (a >= 0 && a <= 99) {
             $(".robyRankLocal").html("Snail");
             b = "Snail";
         } else if (a >= 100 && a <= 199) {
             $(".robyRankLocal").html("Turtle");
             b = "Turtle";
         } else if (a >= 200 && a <= 299) {
             $(".robyRankLocal").html("Starfish");
             b = "Starfish";
         } else if (a >= 300 && a <= 399) {
             $(".robyRankLocal").html("Sloth");
             b = "Sloth";
         } else if (a >= 400 && a <= 499) {
             $(".robyRankLocal").html("Octopus");
             b = "Octopus";
         } else if (a >= 500 && a <= 599) {
             $(".robyRankLocal").html("Manatee");
             b = "Manatee";
         } else if (a >= 1000 && a <= 1999) {
             $(".robyRankLocal").html("Rabbit");
             b = "Rabbit";
         } else if (a >= 1500 && a <= 1999) {
             $(".robyRankLocal").html("Wolf");
             b = "Wolf";
         } else if (a >= 2000 && a <= 2499) {
             $(".robyRankLocal").html("Antelope");
             b = "Antelope";
         } else if (a >= 2500 && a <= 2999) {
             $(".robyRankLocal").html("Eagle");
             b = "Eagle";
         } else if (a >= 3000 && a <= 3499) {
             $(".robyRankLocal").html("Cheetah");
             b = "Cheetah";
         } else if (a >= 3500 && a <= 3999) {
             $(".robyRankLocal").html("Falcon");
             b = "Falcon";
         } else if (a >= 4000 && a <= 4499) {
             $(".robyRankLocal").html("Ape Man");
             b = "Ape Man";
         } else if (a >= 4500 && a <= 4999) {
             $(".robyRankLocal").html("Maniac");
             b = "Maniac";
         } else if (a >= 5000 && a <= 5999) {
             $(".robyRankLocal").html("Ranger");
             b = "Ranger";
         } else if (a >= 6000 && a <= 6999) {
             $(".robyRankLocal").html("Hustler");
             b = "Hustler";
         } else if (a >= 7000 && a <= 7999) {
             $(".robyRankLocal").html("Ninja");
             b = "Ninja";
         } else if (a >= 8000 && a <= 8999) {
             $(".robyRankLocal").html("Master");
             b = "Master";
         } else if (a >= 9000 && a <= 9999) {
             $(".robyRankLocal").html("Kage");
             b = "Kage";
         } else if (a >= 10000 && a <= 10999) {
             $(".robyRankLocal").html("Demi God!");
             b = "Demi God";
         } else if (a >= 11000) {
             $(".robyRankLocal").html("ROBY God!");
             b = "Roby God!";
         }
         return b;
     }
 });
 openFB.init({
     appId: '432269416939239',
     tokenStore: window.localStorage
 });