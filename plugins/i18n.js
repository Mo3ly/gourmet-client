export default ({ app, $config: { appLocale } }) => {
    app.i18n.setLocale(appLocale)
}
