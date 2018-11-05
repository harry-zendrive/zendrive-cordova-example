/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        document.getElementById('setup').addEventListener('touchstart', this.setup.bind(this), false);
        document.getElementById('period2').addEventListener('click', this.period2.bind(this), false);
        document.getElementById('period3').addEventListener('click', this.period3.bind(this), false);
        document.getElementById('stopperiod').addEventListener('click', this.stopperiod.bind(this), false);
        document.getElementById('teardown').addEventListener('click', this.teardown.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },
    
    setup: function() {
        console.log('Success for setup!');
        zendrivefinalplugin.setup
        (
            'Some argument',
            function(msg) {
                //var receivedElement =
                document
                    .getElementById('deviceready')
                    .querySelector('.received')
                    .innerHTML = msg
                //receivedElement.setAttribute('style', 'display:block;');
            },
            function(err) {
                document
                    .getElementById('deviceready')
                    .innerHTML = '<p class="event received">' + err + '</p>';
            }
         );
    },
    
    period2: function() {
        console.log('Success for period2!');
        zendrivefinalplugin.startPeriod2
        (
             'Some argument',
             function(msg) {
                 document
                     .getElementById('deviceready')
                     .querySelector('.received')
                     .innerHTML = msg;
             },
             function(err) {
                 document
                     .getElementById('deviceready')
                     .innerHTML = '<p class="event received">' + err + '</p>';
             }
         );
    },
    
    period3: function() {
        console.log('Success for period3!');
        zendrivefinalplugin.startPeriod3
        (
             'Some argument',
             function(msg) {
                 document
                     .getElementById('deviceready')
                     .querySelector('.received')
                     .innerHTML = msg;
             },
             function(err) {
                 document
                     .getElementById('deviceready')
                     .innerHTML = '<p class="event received">' + err + '</p>';
             }
         );
    },
    
    stopperiod: function() {
        console.log('Success for stopperiod!');
        zendrivefinalplugin.stopPeriod
        (
             'Some argument',
             function(msg) {
                 document
                     .getElementById('deviceready')
                     .querySelector('.received')
                     .innerHTML = msg;
             },
             function(err) {
             document
                 .getElementById('deviceready')
                 .innerHTML = '<p class="event received">' + err + '</p>';
             }
         );
    },
    
    teardown: function() {
        console.log('Success for teardown!');
        zendrivefinalplugin.teardown
        (
             'Some argument',
             function(msg) {
                 document
                     .getElementById('deviceready')
                     .querySelector('.received')
                     .innerHTML = msg;
             },
             function(err) {
                 document
                     .getElementById('deviceready')
                     .innerHTML = '<p class="event received">' + err + '</p>';
             }
         );
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
