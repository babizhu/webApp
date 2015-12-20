/**
 * Created by liu_k on 2015/11/12.
 *
 */
(function () {
    'use strict';

    var Icon = antd.Icon;

    var CopyableIcon = React.createClass({
        displayName: 'CopyableIcon',

        getInitialState: function getInitialState() {
            return {
                justCopied: false
            };
        },
        onCopied: function onCopied(e) {
            var _this = this;

            this.setState({justCopied: true}, function () {
                setTimeout(function () {
                    _this.setState({justCopied: false});
                }, 1000);
            });
        },
        getCopyCode: function getCopyCode(type) {
            return '<Icon type="' + type + '" />';
        },
        render: function render() {
            return React.createElement(
                Clip,
                {
                    component: 'li', 'data-clipboard-text': this.getCopyCode(this.props.type),
                    onSuccess: this.onCopied, className: this.state.justCopied ? 'copied' : ''
                },
                React.createElement(Icon, {type: this.props.type}),
                React.createElement(
                    'span',
                    {className: 'anticon-class'},
                    this.props.type
                )
            );
        }
    });

    var IconSet = React.createClass({
        displayName: 'IconSet',

        getDefaultProps: function getDefaultProps() {
            return {
                icons: []
            };
        },
        render: function render() {
            return React.createElement(
                'ul',
                {className: 'anticons-list clearfix'},
                this.props.icons.map(function (type, i) {
                    return React.createElement(CopyableIcon, {key: i, type: type});
                })
            );
        }
    });

    var icons1 = ['step-backward', 'step-forward', 'fast-backward', 'fast-forward', 'shrink', 'arrow-salt', 'down', 'up', 'left', 'right', 'caret-down', 'caret-up', 'caret-left', 'caret-right', 'caret-circle-right', 'caret-circle-left', 'caret-circle-o-right', 'caret-circle-o-left', 'circle-right', 'circle-left', 'circle-o-right', 'circle-o-left', 'double-right', 'double-left', 'verticle-right', 'verticle-left', 'forward', 'backward', 'rollback', 'retweet'];
    var icons2 = ['question', 'question-circle-o', 'question-circle', 'plus', 'plus-circle-o', 'plus-circle', 'pause', 'pause-circle-o', 'pause-circle', 'minus', 'minus-circle-o', 'minus-circle', 'info', 'info-circle-o', 'info-circle', 'exclamation', 'exclamation-circle-o', 'exclamation-circle', 'cross', 'cross-circle-o', 'cross-circle', 'check', 'check-circle-o', 'check-circle', 'clock-circle-o', 'clock-circle'];
    var icons3 = ['lock', 'unlock', 'android', 'apple', 'area-chart', 'bar-chart', 'bars', 'book', 'calendar', 'cloud', 'cloud-download', 'code', 'copy', 'credit-card', 'delete', 'desktop', 'download-line', 'edit', 'ellipsis', 'environment', 'file', 'file-text', 'folder', 'folder-open', 'github', 'hdd', 'frown', 'meh', 'inbox', 'laptop', 'appstore', 'line-chart', 'link', 'logout', 'mail', 'menu-fold', 'menu-unfold', 'mobile', 'notification', 'paper-clip', 'picture', 'pie-chart', 'poweroff', 'reload', 'search', 'setting', 'share-alt', 'shopping-cart', 'smile', 'tablet', 'tag', 'tags', 'to-top', 'upload', 'user', 'video-camera', 'windows', 'ie', 'chrome', 'home', 'loading'];

    ReactDOM.render(React.createElement(IconSet, {icons: icons1}), document.getElementById('iconset-direction'));
    ReactDOM.render(React.createElement(IconSet, {icons: icons2}), document.getElementById('iconset-hint'));
    ReactDOM.render(React.createElement(IconSet, {icons: icons3}), document.getElementById('iconset-common'));
})()