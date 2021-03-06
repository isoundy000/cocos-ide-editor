/****************************************************************************
 Copyright (c) 2011-2012 cocos2d-x.org
 Copyright (c) 2013-2014 Chukong Technologies Inc.

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

var UIRichTextTest = UIScene.extend({
    _richText:null,
    init: function () {
        if (this._super()) {
            //init text
            this._topDisplayLabel.setString("");
            this._bottomDisplayLabel.setString("RichText");

            var widgetSize = this._widget.getContentSize();
            var button = ccui.Button.create();
            button.setTouchEnabled(true);
            button.loadTextures("res/cocosui/animationbuttonnormal.png", "res/cocosui/animationbuttonpressed.png", "");
            button.setTitleText("switch");
            button.setPosition(cc.p(widgetSize.width / 2, widgetSize.height / 2 + button.getContentSize().height * 2.5));
            button.addTouchEventListener(this.touchEvent,this);
            this._mainNode.addChild(button);


            // RichText
            var richText = ccui.RichText.create();
            richText.ignoreContentAdaptWithSize(false);
            richText.setSize(cc.size(120, 100));

            var re1 = ccui.RichElementText.create(1, cc.color.WHITE, 255, "This color is white. ", "Helvetica", 10);
            var re2 = ccui.RichElementText.create(2, cc.color.YELLOW, 255, "And this is yellow. ", "Helvetica", 10);
            var re3 = ccui.RichElementText.create(3, cc.color.BLUE, 255, "This one is blue. ", "Helvetica", 10);
            var re4 = ccui.RichElementText.create(4, cc.color.GREEN, 255, "And green. ", "Helvetica", 10);
            var re5 = ccui.RichElementText.create(5, cc.color.RED, 255, "Last one is red ", "Helvetica", 10);

            var reimg = ccui.RichElementImage.create(6, cc.color.WHITE, 255, "res/cocosui/sliderballnormal.png");

            ccs.armatureDataManager.addArmatureFileInfo("res/cocosui/100/100.ExportJson");
            var pAr = ccs.Armature.create("100");
            pAr.getAnimation().play("Animation1");

            var recustom = ccui.RichElementCustomNode.create(1, cc.color.WHITE, 255, pAr);
            var re6 = ccui.RichElementText.create(7, cc.color.ORANGE, 255, "Have fun!! ", "Helvetica", 10);
            richText.pushBackElement(re1);
            richText.insertElement(re2, 1);
            richText.pushBackElement(re3);
            richText.pushBackElement(re4);
            richText.pushBackElement(re5);
            richText.insertElement(reimg, 2);
            richText.pushBackElement(recustom);
            richText.pushBackElement(re6);

            richText.setPosition(cc.p(widgetSize.width / 2, widgetSize.height / 2));

            this._mainNode.addChild(richText);
            this._richText = richText;
            return true;
        }
        return false;
    },
    touchEvent: function (sender, type) {
        if (type == ccui.Widget.TOUCH_ENDED) {
            if (this._richText.isIgnoreContentAdaptWithSize()) {
                this._richText.ignoreContentAdaptWithSize(false);
                this._richText.setSize(cc.size(120, 100));
            }
            else {
                this._richText.ignoreContentAdaptWithSize(true);
            }
        }
    }
});