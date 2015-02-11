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

// Call onDeviceReady when PhoneGap is loaded.
//
// At this point, the document has loaded but phonegap-1.0.0.js has not.
// When PhoneGap is loaded and talking with the native device,
// it will call the event `deviceready`.
//
document.addEventListener("deviceready", onDeviceReady, false);
document.addEventListener("offline", onOffline, false);
document.addEventListener("backbutton", onBackKeyDown, false);
// PhoneGap is loaded and it is now safe to make calls PhoneGap methods
//
function onDeviceReady() {
    //document.addEventListener("offline", onOffline, false);
    document.addEventListener("online", onOnline, false);
}

function onOffline() {
    // alert('No Internet Connection!');
    $("body").addClass('reload');
    $("#loader").addClass('hide');
    $("#message").removeClass('hide');
    $("#main_message").text('No Internet Connection');
    $("#sub_message").text('Tap to Retry');
    $("#main_message").removeClass('hide');
    $("#sub_message").removeClass('hide');
}

function onOnline() {
    $("body").removeClass('reload');
    $("#loader").removeClass('hide');
    $("#message").addClass('hide');
    $("#main_message").addClass('hide');
    $("#sub_message").addClass('hide');

     setTimeout(function(){
            //var ref = window.open('http://m.meiceljewelry.com/', '_blank', 'location=no');
            var ref = window.location = "http://terracehillresort.com/index.php";
            var temp_url = '';
            ref.addEventListener('loaderror', function(event) { ref.close(); location.reload(); });
            ref.addEventListener('loadstart', function(event) { load_url(event.url); });
     }, 3000);
}

function load_url(url) {
    var base_domain = url.substr(0, 26);
    alert(url);
    if(base_domain != 'http://terracehillresort.com/index.php') {
        var external = window.open(url, '_system', 'location=no');
        return true;
    }
    return false;
}
$(document).ready(function() {
    $('body.reload').click(function() {
        location.reload();

    });
});