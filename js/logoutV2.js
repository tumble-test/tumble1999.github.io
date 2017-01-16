var logoutWindow;

$(function() {
    var dialog = document.querySelector('dialog');
    var showModalButton = document.querySelector('.show-modal');
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
      dialog.showModal();
    dialog.querySelector('.close').addEventListener('click', function() {
      dialog.close();
    });
    
    $('.closeLogout').click(function(){
    history.back();
    });
});

noDialog = function(){
    $('.noDialog').hide();
    var logoutWant = confirm("Would you like to logout?");
    if (logoutWant) {
        var github = confirm("Would you like to logout of github too?\n(Pressing 'cancel' would continue with normal logout.)");
        if (github) {
            githubLogout();
        } else {
            normalLogout();
        }
    } else {
        history.back();
    }
}

githubLogout = function() {
    logoutWindow = window.open("https://github.com/logout", "_blank", "toolbar=no,scrollbars=yes,resizable=yes,top=0,left=0,width=367,height=461");
    normalLogout();
}

normalLogout = function() {
    localStorage.clear();
    history.back();
}