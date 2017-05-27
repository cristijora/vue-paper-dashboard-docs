Once you have downloaded/cloned the the repo and opened it, you will find the following structure:

```
|-- vue-paper-dashboard
    |-- .babelrc
    |-- .editorconfig
    |-- .eslintrc.json
    |-- .gitattributes
    |-- .gitignore
    |-- index.html
    |-- Licence.md
    |-- package.json
    |-- README.md
    |-- yarn.lock
    |-- build
    |   |-- build.js
    |   |-- check-versions.js
    |   |-- dev-client.js
    |   |-- dev-server.js
    |   |-- utils.js
    |   |-- vue-loader.conf.js
    |   |-- webpack.base.conf.js
    |   |-- webpack.dev.conf.js
    |   |-- webpack.prod.conf.js
    |   |-- webpack.test.conf.js
    |-- config
    |   |-- dev.env.js
    |   |-- index.js
    |   |-- prod.env.js
    |   |-- test.env.js
    |-- src
        |   |-- App.vue
        |   |-- gloablComponents.js
        |   |-- main.js
        |   |-- assets
        |   |   |-- sass
        |   |       |-- paper-dashboard.scss
        |   |       |-- paper
        |   |           |-- _alerts.scss
        |   |           |-- _buttons.scss
        |   |           |-- _cards.scss
        |   |           |-- _chartist.scss
        |   |           |-- _checkbox-radio.scss
        |   |           |-- _dropdown.scss
        |   |           |-- _footers.scss
        |   |           |-- _inputs.scss
        |   |           |-- _misc.scss
        |   |           |-- _mixins.scss
        |   |           |-- _navbars.scss
        |   |           |-- _responsive.scss
        |   |           |-- _sidebar-and-main-panel.scss
        |   |           |-- _tables.scss
        |   |           |-- _typography.scss
        |   |           |-- _variables.scss
        |   |           |-- mixins
        |   |               |-- _buttons.scss
        |   |               |-- _cards.scss
        |   |               |-- _chartist.scss
        |   |               |-- _icons.scss
        |   |               |-- _inputs.scss
        |   |               |-- _labels.scss
        |   |               |-- _navbars.scss
        |   |               |-- _sidebar.scss
        |   |               |-- _tabs.scss
        |   |               |-- _transparency.scss
        |   |               |-- _vendor-prefixes.scss
        |   |-- components
        |   |   |-- Dashboard
        |   |   |   |-- Layout
        |   |   |   |   |-- Content.vue
        |   |   |   |   |-- ContentFooter.vue
        |   |   |   |   |-- DashboardLayout.vue
        |   |   |   |   |-- TopNavbar.vue
        |   |   |   |-- Views
        |   |   |       |-- Icons.vue
        |   |   |       |-- Maps.vue
        |   |   |       |-- Notifications.vue
        |   |   |       |-- Overview.vue
        |   |   |       |-- TableList.vue
        |   |   |       |-- Typography.vue
        |   |   |       |-- UserProfile.vue
        |   |   |       |-- UserProfile
        |   |   |           |-- EditProfileForm.vue
        |   |   |           |-- MembersCard.vue
        |   |   |           |-- UserCard.vue
        |   |   |-- GeneralViews
        |   |   |   |-- NotFoundPage.vue
        |   |   |-- UIComponents
        |   |       |-- DropDownMenu.vue
        |   |       |-- PaperTable.vue
        |   |       |-- Cards
        |   |       |   |-- ChartCard.vue
        |   |       |   |-- StatsCard.vue
        |   |       |-- Inputs
        |   |       |   |-- formGroupInput.vue
        |   |       |-- NotificationPlugin
        |   |       |   |-- index.js
        |   |       |   |-- Notification.vue
        |   |       |   |-- Notifications.vue
        |   |       |-- SidebarPlugin
        |   |           |-- index.js
        |   |           |-- MovingArrow.vue
        |   |           |-- SideBar.vue
        |   |-- routes
        |       |-- routes.js
    |-- static
    |   |-- css
    |   |   |-- bootstrap.min.css
    |   |   |-- themify-icons.css
    |   |-- fonts
    |   |   |-- themify.eot
    |   |   |-- themify.svg
    |   |   |-- themify.ttf
    |   |   |-- themify.woff
    |   |-- img
    |   |   |-- apple-icon.png
    |   |   |-- background.jpg
    |   |   |-- favicon.png
    |   |   |-- new_logo.png
    |   |   |-- tim_80x80.png
    |   |   |-- background
    |   |   |-- faces
    |   |   |   |-- face-0.jpg
    |   |   |   |-- face-1.jpg
    |   |   |   |-- face-2.jpg
    |   |   |   |-- face-3.jpg
    |   |   |-- tables
    |-- test
        |-- e2e
        |   |-- nightwatch.conf.js
        |   |-- runner.js
        |   |-- custom-assertions
        |   |   |-- elementCount.js
        |   |-- specs
        |       |-- test.js
        |-- unit
            |-- .eslintrc
            |-- index.js
            |-- karma.conf.js
            |-- helpers
            |   |-- mount.js
            |   |-- triggerEvent.js
            |   |-- wait-for-update.js
            |-- specs
                |-- fgInput.spec.js
                |-- Overview.spec.js
                |-- paper-table.spec.js
```

Now that's quite a lot of files, but don't worry since most of them are just setup files or development/build related files
generated by `vue-cli`

The folder you should care the most is the **SRC** folder which contains the code for the dashboard and each of its pages