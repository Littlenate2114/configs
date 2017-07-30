const remote = require('electron').remote
const main = remote.require('./index.js')
$(document).ready(function(){

  $("#fname").focus();
  $("#fname").on('keyup', function(e) {
      if (e.keyCode == 13) {

          var txt = document.getElementById('fname').value
          var exec = require('child_process').exec;

          if($('#fname').val()==="Thunar"){
              exec('thunar');
              main.close();
          }

          if($('#fname').val()==="Google-Chrome"){
              exec('google-chrome');
              main.close();
          }

          if($('#fname').val()==="Atom"){
              exec('atom');
              main.close();
          }

          if($('#fname').val()==="Nes"){
              exec('dbus-send --print-reply --dest=org.mpris.MediaPlayer2.spotify /org/mpris/MediaPlayer2 org.mpris.MediaPlayer2.Player.Next');
              main.close();
          }

          if($('#fname').val()==="Prev"){
              exec('dbus-send --print-reply --dest=org.mpris.MediaPlayer2.spotify /org/mpris/MediaPlayer2 org.mpris.MediaPlayer2.Player.Previous');
              exec('dbus-send --print-reply --dest=org.mpris.MediaPlayer2.spotify /org/mpris/MediaPlayer2 org.mpris.MediaPlayer2.Player.Previous');
              main.close();
          }

          if($('#fname').val()==="Prepros"){
              exec('prepros');
              main.close();
          }

          if($('#fname').val()==="Ause"){
              exec('dbus-send --print-reply --dest=org.mpris.MediaPlayer2.spotify /org/mpris/MediaPlayer2 org.mpris.MediaPlayer2.Player.Pause');
              main.close();
          }

          if($('#fname').val()==="Al"){
              exec('dbus-send --print-reply --dest=org.mpris.MediaPlayer2.spotify /org/mpris/MediaPlayer2 org.mpris.MediaPlayer2.Player.Play');
              main.close();
          }

          if($('#fname').val()==="Skype"){
              exec('skypeforlinux');
              main.close();
          }

          if($('#fname').val()==="kSkype"){
              exec('killall skypeforlinux');
              exec('killall skypeforlinux');
              main.close();
          }

          if($('#fname').val()==="msg"){
              exec('google-chrome https://web.whatsapp.com/');
              main.close();
          }

          if($('#fname').val()==="youtube"){
              exec('google-chrome https://youtube.com/');
              main.close();
          }

          if($('#fname').val()==="Mail"){
              exec('google-chrome https://gmail.com/');
              main.close();
          }

          if($('#fname').val()==="shutdown -h now"){
              exec('shutdown -h now');
              main.close();
          }

        }
      if(e.keyCode == 27){
      main.close();
      }
  });

});
