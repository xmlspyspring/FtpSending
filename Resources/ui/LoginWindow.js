var FtpWindow = require('ui/FtpWindow');
Ti.include('setting.js');

function LoginWindow() {
    var left = 40;

    var me = Ti.UI.createWindow({
        backgroundColor : 'white',
        exitOnClose : true,
        fullscreen : false,
        layout : 'vertical'
    });

    var nameLabel = Ti.UI.createLabel({
        titleid : 'nameLabel',
        textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
        top : 30,
        left : left,
        width : 'auto',
        height : 'auto'
    });
    var nameTextField = Ti.UI.createTextField({
        borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color : '#336699',
        left : left,
        width : 200
    });
    var pwdLabel = Ti.UI.createLabel({
        titleid : 'pwdLabel',
        passwordMask : true,
        textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
        top : 30,
        left : left,
        width : 'auto',
        height : 'auto'
    });
    var pwdTextField = Ti.UI.createTextField({
        borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color : '#336699',
        left : left,
        width : 200
    });

    var submitButton = Ti.UI.createButton({
        titleid : 'submit',
        left : left,
        top : 30,
        width : 200,
        height : 45,
        systemButton : Ti.UI.iPhone.SystemButton.DONE
    });

    submitButton.addEventListener('click', function(e) {
        // validate
        var userName = nameFieldText.getValue();
        var pwd = pwdFieldText.getValue();
        if (!userName || !pwd) {
            alert(L('userNameOrPwdEmpty'));
            return;
        }

        var httpClient = Ti.Network.createHTTPClient();
        httpClient.onload = function() {
            me.close();
            new FtpWindow().open();
        };
        httpClient.onerror = function(e) {
            Ti.API.error(e.error);
            alert(L(netError));
        };

        // Prepare the connection.
        client.open("POST", LOGIN_URL);
        // Send the request.
        client.send({
            email : userName,
            password : pwd
        });
    });

    me.add(nameLabel);
    me.add(nameTextField);

    me.add(pwdLabel);
    me.add(pwdTextField);

    me.add(submitButton);

    return me;
};

//make constructor function the public component interface
module.exports = LoginWindow;

