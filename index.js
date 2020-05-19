var express = require('express');
var app = express();
var path = require('path');
var hbs = require('hbs');
var http = require('http').Server(app);
var io = require('socket.io')(http)
<<<<<<< HEAD


=======
var mysql = require('mysql');
var cookieSession = require('cookie-session')
>>>>>>> 5c8619903660dcb64ff6ca5b1b43a25207bcd50e
// -------------- express initialization -------------- //
app.set('port', process.env.PORT || 8080 );
app.set('view engine', 'hbs');

// -------------- serve static folders -------------- //
app.use('/client', express.static(path.join(__dirname, 'client')))
<<<<<<< HEAD

// -------------- express 'get' handlers -------------- //
app.get('/room', function(req, res){
    console.log('no sub-page');
    res.render('index', {})
});
app.get('/', function(req,res){
    res.render('landing', {});
});
//hidden helper endpoints
app.get('/joinRoom', function(req,res){
    var code = req.query.roomCode; 
    if(code in ROOM){
        
        res.send("true");
    }
    else{
        res.send('false');
    }
});
ROOM = {}; 
SOCKET_LIST = {};
//// stuff for the actual game
var timerId = setInterval(countdown, 1000);
=======
app.use(cookieSession({
  name: 'userCookie',                   
  keys: ['asdfg', 'hjkl']  
}))
// -------------- variable definition -------------- //
var pool  = mysql.createPool({
  connectionLimit : 12,
  user            : 'site_fishbowls',
  password        : 'q7Qg6zWCzZd9DjY6ds8FkAEv',
  host            : 'mysql1.csl.tjhsst.edu',
  port            : 3306,
  database        : 'site_fishbowls'
});
// -------------- express 'get' handlers -------------- //
app.get('/', function(req, res){
    console.log('no sub-page');
    res.render('index', {})
});

SOCKET_LIST = {};
TABLE_LIST = {};
POINTS = {};
DICTIONARY = [];
ALREADY_SEEN = new Set(); 
TIMER = 30;
teamNumber = 0; 
currTeam = 0; 
var timerId = setInterval(countdown, 1000);
bool = false; 
>>>>>>> 5c8619903660dcb64ff6ca5b1b43a25207bcd50e

var currentNumberOfUsers = 0; 
userPrefix = ['cool', 'awesome', 'effervescent', 'intellectual', 'large', 'siced','honorable', 'happy', 'amazing', 'dumb', 'perfect'];
userSuffix = ['tiger', 'student', 'person', 'table', 'dog', 'homie','sicer', 'empress', 'elephant', 'exerciser', 'bromie', 'dawg'];
io.sockets.on('connection', function(socket){
    currentNumberOfUsers += 1;
<<<<<<< HEAD

//stuff for joining ROOM
    socket.on('joinRoom', function(data){
        if(data.code in ROOM){
            console.log("helo");
            console.log(data.code);
            socket.emit('redirect', {num: '1', code: data.code}); 
        }
        else{
            socket.emit('redirect', {num: '0'});
        }
    });
    socket.on('save_socket', function(data){
        console.log('socket connection')
        var idx1 = "" + Math.floor(userPrefix.length*Math.random());
        var idx2 = "" + Math.floor(userSuffix.length*Math.random());
        socket.id = userPrefix[idx1] + '-' + userSuffix[idx2];
        socket.emit('welcome', {message:socket.id});
       // socket.connectionNum = currentNumberOfUsers;
        SOCKET_LIST[socket.id] = socket;
        console.log(data.code);
        socket.room = data.code; 
        ROOM[data.code].sockets.push(socket.id);
        socket.emit('myRoom', {code: data.code});
    });
    socket.on('createRoom', function(data){
        var randCode = '' + Math.floor(Math.random() * 10000);
        ROOM[randCode] = {
            sockets: [], 
            TABLE_LIST: {}, 
            POINTS: {}, 
            DICTIONARY: [], 
            ALREADY_SEEN: new Set(),
            TIMER: 30,
            teamNumber: 0,
            currTeam: 0,
            bool: false
        };
        socket.emit('redirect', {num: '1', code: randCode}); 
    });
//stuff for game
=======
    console.log('socket connection')
    var idx1 = "" + Math.floor(userPrefix.length*Math.random());
    var idx2 = "" + Math.floor(userSuffix.length*Math.random());
    socket.id = userPrefix[idx1] + '-' + userSuffix[idx2];
    socket.emit('welcome', {message:socket.id});
   // socket.connectionNum = currentNumberOfUsers;
    SOCKET_LIST[socket.id] = socket;
>>>>>>> 5c8619903660dcb64ff6ca5b1b43a25207bcd50e
    socket.on('disconnect', function(){
        delete SOCKET_LIST[socket.id];
        currentNumberOfUsers -=1; //might have to change all the users connection Numbers
    })
<<<<<<< HEAD

=======
    // socket.on('timer', function(data){
    //     TIMER = data.time; 
    // })
>>>>>>> 5c8619903660dcb64ff6ca5b1b43a25207bcd50e
    socket.on('pause', function(data){
        bool = false; 
    });
    socket.on('drawCard', function(data){
        //var userName = document.getElementById('game' + mainPlayers[curMpIdx]);
<<<<<<< HEAD
        socket = SOCKET_LIST[socket.id];
        var code = socket.room; 
        if(ROOM[code].DICTIONARY.length - ROOM[code].ALREADY_SEEN.size === 5){
            socket.emit('under5');
        }
        if(ROOM[code].DICTIONARY.length - ROOM[code].ALREADY_SEEN.size === 0)
=======
        if(DICTIONARY.length - ALREADY_SEEN.size === 5){
            socket.emit('under5');
        }
        if(DICTIONARY.length - ALREADY_SEEN.size === 0)
>>>>>>> 5c8619903660dcb64ff6ca5b1b43a25207bcd50e
        {
            socket.emit('noWords');
        }
        else{
<<<<<<< HEAD
            var idx = Math.floor(ROOM[code].DICTIONARY.length*Math.random());
            while(ROOM[code].ALREADY_SEEN.has(idx))
            {
                idx = Math.floor(ROOM[code].DICTIONARY.length*Math.random());
            }
    
            var word = ROOM[code].DICTIONARY[idx];
=======
            var idx = Math.floor(DICTIONARY.length*Math.random());
            while(ALREADY_SEEN.has(idx))
            {
                idx = Math.floor(DICTIONARY.length*Math.random());
            }
    
            var word = DICTIONARY[idx];
>>>>>>> 5c8619903660dcb64ff6ca5b1b43a25207bcd50e
            socket.emit('retWord', {curWord:word}); 
        }
    })
    socket.on('updateid', function(data){
        socket = SOCKET_LIST[socket.id]; 
<<<<<<< HEAD
        var code = socket.room; 
        for(var i = 0; i < ROOM[code].sockets.length; i++){
            if(ROOM[code].sockets[i] == socket.id){
                ROOM[code].sockets[i] = data.newId; 
                break;
            }
        }
        for(var team in ROOM[code].POINTS){
            var curplayers = ROOM[code].POINTS[team].players; 
            if(curplayers[0] == socket.id){
                ROOM[code].POINTS[team].players = [data.newId, curplayers[1]];
                break; 
            }
            else if(curplayers[1] == socket.id){
                ROOM[code].POINTS[team].players = [curplayers[0], data.newId]; 
=======
        for(var team in POINTS){
            var curplayers = POINTS[team].players; 
            if(curplayers[0] == socket.id){
                POINTS[team].players = [data.newId, curplayers[1]];
                break; 
            }
            else if(curplayers[1] == socket.id){
                POINTS[team].players = [curplayers[0], data.newId]; 
>>>>>>> 5c8619903660dcb64ff6ca5b1b43a25207bcd50e
                break; 
            }
        }
        delete SOCKET_LIST[socket.id];
        socket.id = data.newId;
        SOCKET_LIST[data.newId] = socket; 
    });
    socket.on('updateteamid', function(data){
        socket = SOCKET_LIST[socket.id];
<<<<<<< HEAD
        var code = socket.room; 
        if(socket.team in ROOM[code].POINTS){
            ROOM[code].POINTS['' + socket.team].name = data.newId; 
        }
    });
    socket.on('startGame', function(data){
        socket = SOCKET_LIST[socket.id];
        var code = socket.room; 
        console.log(ROOM[code].POINTS);

        if((Object.keys(ROOM[code].POINTS).length * 2) == ROOM[code].TABLE_LIST.length){

            ROOM[code].bool = true; 
            var players = ROOM[code].sockets;
            for(var i in players){
                var socket2 = SOCKET_LIST[players[i]];
                socket2.emit('clientStart', {
                    mainP1: SOCKET_LIST[ROOM[code].POINTS[ROOM[code].currTeam].players[0]].divId,
                    mainP2: SOCKET_LIST[ROOM[code].POINTS[ROOM[code].currTeam].players[1]].divId
=======
        if(socket.team in POINTS){
            POINTS['' + socket.team].name = data.newId; 
        }


    });
    socket.on('startGame', function(data){
        socket = SOCKET_LIST[socket.id];
        console.log(POINTS);
        console.log(TABLE_LIST.length);
        if((Object.keys(POINTS).length * 2) == TABLE_LIST.length){

            bool = true; 
            for(var i in SOCKET_LIST){
                var socket2 = SOCKET_LIST[i];
                socket2.emit('clientStart', {
                    mainP1: SOCKET_LIST[POINTS[currTeam].players[0]].divId,
                    mainP2: SOCKET_LIST[POINTS[currTeam].players[1]].divId
>>>>>>> 5c8619903660dcb64ff6ca5b1b43a25207bcd50e
                });
            }
        }
        else{
            socket.emit('oddPlayer');
        }

    });
    socket.on('resumeGame', function(data){
        bool = true; 
    });
    socket.on('addWord', function(data){
<<<<<<< HEAD
        socket = SOCKET_LIST[socket.id];
        var code = socket.room;
        ROOM[code].DICTIONARY.push(data.word); 
=======
        DICTIONARY.push(data.word); 
>>>>>>> 5c8619903660dcb64ff6ca5b1b43a25207bcd50e

    });
    socket.on('removeWord', function(data){
        socket = SOCKET_LIST[socket.id];
<<<<<<< HEAD
        var code = socket.room;
        var idx = ROOM[code].DICTIONARY.indexOf(data.word); 

        ROOM[code].ALREADY_SEEN.add(idx); 
        if(socket.team in ROOM[code].POINTS)
            ROOM[code].POINTS['' + socket.team].pts += 1;
        var players = ROOM[code].sockets;
        for(var i in players){
            var socket2 = SOCKET_LIST[players[i]];
=======
        var idx = DICTIONARY.indexOf(data.word); 
        console.log(idx);
        ALREADY_SEEN.add(idx); 
        if(socket.team in POINTS)
            POINTS['' + socket.team].pts += 1;

        for(var i in SOCKET_LIST){
            var socket2 = SOCKET_LIST[i];
>>>>>>> 5c8619903660dcb64ff6ca5b1b43a25207bcd50e
            socket2.emit('showEveryone', {word: data.word});
        }

    });

    socket.on('updateTable', function(data){
        socket = SOCKET_LIST[socket.id];
<<<<<<< HEAD
        var code = socket.room; 
        if(!socket.inTable){
            socket.inTable = true; 
            socket.divId = data.divId; 
            ROOM[code].TABLE_LIST = [];
            var players = ROOM[code].sockets;
            for(var s = 0; s < players.length; s++){
                var ss = SOCKET_LIST[players[s]];
                if(ss.inTable){
                    ROOM[code].TABLE_LIST.push(ss.id); 
                }
            }

            for(var n = 0; n < ROOM[code].TABLE_LIST.length; n++){
                var i = ROOM[code].TABLE_LIST[n]; 
                var nums = parseInt(data.divId.substring(4));
                if(nums%2 == 0 && ('game' + (''+(nums+1))) == SOCKET_LIST[i].divId){
                    SOCKET_LIST[i].team = ROOM[code].teamNumber; 
                    SOCKET_LIST[socket.id].team = ROOM[code].teamNumber; 
                    ROOM[code].POINTS[teamNumber] = {pts:0, name:ROOM[code].teamNumber, players:[socket.id, i]}; 
                    ROOM[code].teamNumber += 1; 
                    break; 
                }
                else if(nums%2 != 0 && ('game' + (''+(nums-1))) == SOCKET_LIST[i].divId){
                    SOCKET_LIST[i].team = ROOM[code].teamNumber; 
                    SOCKET_LIST[socket.id].team = ROOM[code].teamNumber; 
                    ROOM[code].POINTS[ROOM[code].teamNumber] = {pts:0, name:ROOM[code].teamNumber, players:[socket.id, i]}; 
                    ROOM[code].teamNumber += 1; 
=======
        if(!socket.inTable){
            socket.inTable = true; 
            socket.divId = data.divId; 
            TABLE_LIST = [];
            for(var s in SOCKET_LIST){
                var ss = SOCKET_LIST[s];
                if(ss.inTable){
                    TABLE_LIST.push(ss.id); 
                }
            }

            for(var n = 0; n < TABLE_LIST.length; n++){
                var i = TABLE_LIST[n]; 
                var nums = parseInt(data.divId.substring(4));
                if(nums%2 == 0 && ('game' + (''+(nums+1))) == SOCKET_LIST[i].divId){
                    SOCKET_LIST[i].team = teamNumber; 
                    SOCKET_LIST[socket.id].team = teamNumber; 
                    POINTS[teamNumber] = {pts:0, name:teamNumber, players:[socket.id, i]}; 
                    teamNumber += 1; 
                    break; 
                }
                else if(nums%2 != 0 && ('game' + (''+(nums-1))) == SOCKET_LIST[i].divId){
                    SOCKET_LIST[i].team = teamNumber; 
                    SOCKET_LIST[socket.id].team = teamNumber; 
                    POINTS[teamNumber] = {pts:0, name:teamNumber, players:[socket.id, i]}; 
                    teamNumber += 1; 
>>>>>>> 5c8619903660dcb64ff6ca5b1b43a25207bcd50e
                    break; 
                }
            }


        }
    });
    socket.on('resetDict', function(data){
<<<<<<< HEAD
        ROOM[code].ALREADY_SEEN.clear();
        console.log(ROOM[code].ALREADY_SEEN);
    })
    socket.on('reset', function(data){
        socket = SOCKET_LIST[socket.id];
        var code = socket.room; 
        ROOM[code].TABLE_LIST = {}
        ROOM[code].POINTS = {}
        ROOM[code].DICTIONARY = []
        ROOM[code].TIMER = 30
        ROOM[code].bool = false; 
        ROOM[code].teamNumber = 0; 
        var players = ROOM[code].sockets;
        for(var i = 0; i < players.length; i++){
            var socket2 = SOCKET_LIST[players[i]];
            socket2.inTable = false; 
            socket2.emit('clearTeams', {});
=======
        ALREADY_SEEN.clear();
        console.log(ALREADY_SEEN);
    })
    socket.on('reset', function(data){
        TABLE_LIST = {}
        POINTS = {}
        DICTIONARY = []
        TIMER = 30
        bool = false; 
        teamNumber = 0; 
        for(var i in SOCKET_LIST){
            var socket = SOCKET_LIST[i];
            socket.inTable = false; 
            socket.emit('clearTeams', {});
>>>>>>> 5c8619903660dcb64ff6ca5b1b43a25207bcd50e
        }
    
    });
});
<<<<<<< HEAD
function noTime(code) {
    ROOM[code].TIMER = 30; 
    ROOM[code].bool = false; 

    var prevTeam = ROOM[code].currTeam; 
    ROOM[code].currTeam = (ROOM[code].currTeam + 1)%(ROOM[code].teamNumber); 
    console.log(ROOM[code].currTeam);
    for(var i in ROOM[code].sockets){
        var socket2 = SOCKET_LIST[ROOM[code].sockets[i]];
        socket2.emit('highlight', {                   
            mainP1: SOCKET_LIST[ROOM[code].POINTS[ROOM[code].currTeam].players[0]].divId,
            mainP2: SOCKET_LIST[ROOM[code].POINTS[ROOM[code].currTeam].players[1]].divId,
            prevP1: SOCKET_LIST[ROOM[code].POINTS[prevTeam].players[0]].divId,
=======
function noTime() {
    TIMER = 30; 
    bool = false; 

    prevTeam = currTeam; 
    currTeam = (currTeam + 1)%(teamNumber); 
    console.log(currTeam);
    for(var i in SOCKET_LIST){
        var socket = SOCKET_LIST[i];
        socket.emit('highlight', {                   
            mainP1: SOCKET_LIST[POINTS[currTeam].players[0]].divId,
            mainP2: SOCKET_LIST[POINTS[currTeam].players[1]].divId,
            prevP1: SOCKET_LIST[POINTS[prevTeam].players[0]].divId,
>>>>>>> 5c8619903660dcb64ff6ca5b1b43a25207bcd50e
            prevP2: SOCKET_LIST[POINTS[prevTeam].players[1]].divId
        });
    }
    
}
function countdown() {
<<<<<<< HEAD
    for(var code in ROOM){
        if (ROOM[code].TIMER === 0) {
            noTime(code);
        } else if(ROOM[code].bool){
            //elem.innerHTML = timeLeft + ' seconds remaining';
            ROOM[code].TIMER--;
        }
    }
}
setInterval(function(){
    var packLobby = {};
    for(var r in ROOM){
        packLobby[r] = [ROOM[r].TIMER, ROOM[r].POINTS];
        for(var i = 0; i < ROOM[r].sockets.length; i++){
            var socket2 = SOCKET_LIST[ROOM[r].sockets[i]];

            packLobby[r].push({
                id:socket2.id,
                divId: socket2.divId,
                inTable: socket2.inTable
            }); //builds a pack of current users and their associated data
        }
=======
    if (TIMER === 0) {
        noTime();
    } else if(bool){
        //elem.innerHTML = timeLeft + ' seconds remaining';
        TIMER--;
    }
}
setInterval(function(){
    var packLobby = [];
    for(var i in SOCKET_LIST){
        var socket = SOCKET_LIST[i];
        packLobby.push({
            id:socket.id,
            divId: socket.divId,
            inTable: socket.inTable
            
           // connectionNum: socket.connectionNum
        }); //builds a pack of current users and their associated data
>>>>>>> 5c8619903660dcb64ff6ca5b1b43a25207bcd50e
    }

    for(var y in SOCKET_LIST){
        var socketFin = SOCKET_LIST[y];
        socketFin.emit('sendData', {
            pack: packLobby, 
<<<<<<< HEAD
        });
    }
=======
            timer: TIMER,
            points: POINTS
        });

    }
    
>>>>>>> 5c8619903660dcb64ff6ca5b1b43a25207bcd50e
}, 1000/40);


// -------------- listener -------------- //
var listener = http.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});