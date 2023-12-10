Vue.component('topbar', {
    template: /*html*/ `
    <nav class="border fixed split-nav">
        <div class="nav-brand">
        <h3><a href="#">Получение наличных в батах</a></h3>
        </div>
        <div class="collapsible">
        <input id="collapsible1" type="checkbox" name="collapsible1">
        <label for="collapsible1">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </label>
        <div class="collapsible-body">
            <ul class="inline">
            <li><a href="#">Доллар</a></li>
            <li><a href="#">Рубли</a></li>
            <li><a href="#">Юани</a></li>
            </ul>
        </div>
        </div>
    </nav>`
})