function FtpWindow() {
    var left = 40;
    
    var me = Ti.UI.createWindow({
        backgroundColor : 'white',
        exitOnClose : true,
        fullscreen : false,
        layout : 'vertical'
    });

    var nameLabel = Ti.UI.createLabel({
        text : 'User Name: ',
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
        text : 'Password: ',
        passwordMask:true,
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
        title : 'Submit',
        left:left,
        top : 30,
        width : 200,
        height : 45,
        systemButton: Ti.UI.iPhone.SystemButton.DONE
    });

    submitButton.addEventListener('click', function(e) {
        Titanium.API.info("You clicked the button");
    });

    me.add(nameLabel);
    me.add(nameTextField);

    me.add(pwdLabel);
    me.add(pwdTextField);

    me.add(submitButton);

    return me;
};

//make constructor function the public component interface
module.exports = FtpWindow;

